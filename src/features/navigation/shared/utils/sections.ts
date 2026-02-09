export type SectionRef = { id: string };

export function createScrollSpy(options?: { offset?: number }) {
    const offset = options?.offset ?? 100;
    let currentSectionId: string | null = null;

    function setCurrentSectionId(id: string | null): void {
        currentSectionId = id;
    }

    function getCurrentSectionId(): string | null {
        return currentSectionId;
    }

    // Optionnel : si tu veux calculer sans worker, sinon tu peux ne pas l'utiliser
    function scrollInView(sections: readonly SectionRef[]): string | null {
        currentSectionId = null;
        const scrollPosition = window.scrollY;

        for (const { id } of sections) {
            const section = document.getElementById(id);
            if (!section) continue;

            const top = section.offsetTop;
            const height = section.offsetHeight;

            const inView =
                scrollPosition >= top - offset && scrollPosition < top + height;

            if (inView) {
                currentSectionId = id;
                break;
            }
        }

        return currentSectionId;
    }

    function updateSectionClasses(
        sections: readonly SectionRef[],
        setActiveSection: (id: string) => void
    ): void {
        for (const { id } of sections) {
            const section = document.getElementById(id);
            if (!section) continue;

            if (id === currentSectionId) {
                section.classList.add("active-section");
                setActiveSection(id);
            } else {
                section.classList.remove("active-section");
            }
        }
    }

    function addNewUrl(): void {
        if (!currentSectionId) return;

        const newUrl = `#${currentSectionId}`;
        if (window.location.hash !== newUrl) {
            window.history.replaceState(null, "", newUrl);
        }
    }

    return {
        setCurrentSectionId,
        getCurrentSectionId,
        scrollInView,
        updateSectionClasses,
        addNewUrl
    };
}

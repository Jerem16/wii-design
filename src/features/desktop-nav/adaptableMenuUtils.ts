import type { MenuItem, MenuLinks, SubItem } from "@/features/mobile-nav/types/menu";

export interface DesktopMenuLinks {
    mainLink: MenuItem[];
    reservation: MenuItem[];
    search: MenuItem[];
    connection: MenuItem[];
}

export const mapMenuForDesktop = (items: MenuLinks): DesktopMenuLinks => {
    return {
        mainLink: items.mainLink,
        reservation: items.reservation ?? [],
        search: items.search ?? [],
        connection: items.connection ?? [],
    };
};

export const isMainItemActive = (itemPath: string, currentRoute: string): boolean => {
    if (itemPath === "/") {
        return currentRoute === "/" || currentRoute.startsWith("/#");
    }

    return currentRoute.startsWith(itemPath);
};

const updateSubItems = (subItems: SubItem[], activeSection: string): SubItem[] => {
    const activeSubItem = subItems.find((sub) => sub.AnchorId === `#${activeSection}`);

    return subItems.map((sub) => ({
        ...sub,
        class: activeSubItem?.id === sub.id ? "active" : "",
    }));
};

const updateMenuItems = (items: MenuItem[], activeSection: string, currentRoute: string): MenuItem[] => {
    return items.map((item) => ({
        ...item,
        class: isMainItemActive(item.path, currentRoute) ? "active" : "",
        subItems: item.subItems ? updateSubItems(item.subItems, activeSection) : undefined,
    }));
};

export const updateDesktopMenuClasses = (
    menuLinks: DesktopMenuLinks,
    activeSection = "",
    currentRoute = ""
): DesktopMenuLinks => ({
    mainLink: updateMenuItems(menuLinks.mainLink, activeSection, currentRoute),
    reservation: updateMenuItems(menuLinks.reservation, activeSection, currentRoute),
    search: updateMenuItems(menuLinks.search, activeSection, currentRoute),
    connection: updateMenuItems(menuLinks.connection, activeSection, currentRoute),
});

const scrollTimeEvent = (
    currentTime: number,
    start: number,
    end: number,
    duration: number,
    startTime: number
) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeInOutCubic =
        progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 4) / 2;

    window.scrollTo(0, start + (end - start) * easeInOutCubic);

    if (progress < 1) {
        window.requestAnimationFrame((newTime) =>
            scrollTimeEvent(newTime, start, end, duration, startTime)
        );
    }
};

export const handleScrollClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY;
    const duration = 750;
    const startTime = performance.now();

    window.requestAnimationFrame((currentTime) => {
        scrollTimeEvent(currentTime, start, end, duration, startTime);
    });
};

interface NavParams {
    currentPath: string;
    targetPath: string;
    targetHash: string | undefined;
    currentHash: string | undefined;
    updateRoute: (route: string) => void;
    onSamePageScroll?: (hash: string) => void;
}

const handleDifferentPath = ({
    currentPath,
    targetPath,
    targetHash,
    currentHash,
    updateRoute,
}: NavParams): void => {
    if (currentPath !== targetPath) {
        updateRoute(targetPath);

        if (targetHash === undefined) return;

        if (targetHash !== currentHash) {
            updateRoute(`${targetPath}#${targetHash}`);
        }
    }
};

const handleSamePath = ({
    currentPath,
    targetPath,
    targetHash,
    currentHash,
    updateRoute,
    onSamePageScroll,
}: NavParams): void => {
    if (currentPath === targetPath) {
        updateRoute(targetPath);

        if (targetHash === undefined) {
            onSamePageScroll?.("top");
        } else if (targetHash !== currentHash) {
            onSamePageScroll?.(targetHash);
            updateRoute(`${targetPath}#${targetHash}`);
        } else {
            updateRoute(`${targetPath}#${targetHash}`);
        }
    }
};

export const handleDesktopNavClick = (
    path: string,
    currentRoute: string,
    updateRoute: (route: string) => void
): void => {
    const [currentPath, currentHash] = currentRoute.split("#");
    const [targetPath, targetHash] = path.split("#");

    handleDifferentPath({
        currentPath,
        targetPath,
        targetHash,
        currentHash,
        updateRoute,
    });

    handleSamePath({
        currentPath,
        targetPath,
        targetHash,
        currentHash,
        updateRoute,
        onSamePageScroll: handleScrollClick,
    });
};

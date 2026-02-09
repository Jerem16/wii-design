import { getScrollOffset, handleScrollClick } from "@/features/navigation/shared/utils/scrollSmooth";

export { getScrollOffset, handleScrollClick } from "@/features/navigation/shared/utils/scrollSmooth";
export { handleNavClick } from "@/features/navigation/shared/utils/nav";

const parsePx = (raw: string): number | null => {
    const v = raw.trim().toLowerCase();
    if (!v) return null;
    // Supporte "72px" ou "72"
    const n = Number.parseFloat(v.replace("px", ""));
    return Number.isFinite(n) ? n : null;
};

export const scrollToHashWhenReady = (
    hash: string,
    options?: { maxAttempts?: number }
): void => {
    if (typeof window === "undefined") return;
    const targetId = hash.replace(/^#/, "");
    if (!targetId) return;

    const maxAttempts = options?.maxAttempts ?? 10;
    let attempts = 0;

    const tryScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
            const elementExtraRaw =
                element.getAttribute("data-scroll-offset") ?? "";
            const elementExtra = parsePx(elementExtraRaw) ?? 0;
            const offset = getScrollOffset({ extra: elementExtra });
            const currentTop = element.getBoundingClientRect().top;
            if (Math.abs(currentTop - offset) <= 2) {
                return;
            }
            handleScrollClick(targetId);
            return;
        }

        if (attempts < maxAttempts) {
            attempts += 1;
            window.requestAnimationFrame(tryScroll);
        }
    };

    window.requestAnimationFrame(tryScroll);
};
/*-------------------------------------------------------*/

import { useSmoothScroll } from "@/features/navigation/core/hooks/useSmoothScroll";

const handleDesktopScrollClick = (targetId: string): void => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
};

export const useDesktopSmoothScroll = (
    currentRoute: string | undefined,
    updateRoute: (route: string) => void
) => useSmoothScroll(currentRoute, updateRoute, handleDesktopScrollClick);

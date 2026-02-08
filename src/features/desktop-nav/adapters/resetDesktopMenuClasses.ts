export const resetDesktopMenuClasses = () => {
    const activeHeadLinks = document.querySelectorAll(".head-link.active");
    const activeNavLinks = document.querySelectorAll(".nav-link.active");
    const DESKTOP_NAV_DEBUG = true;

    if (DESKTOP_NAV_DEBUG) {
        const firstHeadLink = activeHeadLinks[0];
        const firstNavLink = activeNavLinks[0];
        console.log("[DESKTOP_NAV_DEBUG] resetDesktopMenuClasses:before", {
            variant: "desktop-nav",
            activeHeadLinksCount: activeHeadLinks.length,
            activeNavLinksCount: activeNavLinks.length,
            firstHeadLinkClass:
                firstHeadLink instanceof HTMLElement
                    ? firstHeadLink.className
                    : "",
            firstNavLinkClass:
                firstNavLink instanceof HTMLElement
                    ? firstNavLink.className
                    : "",
        });
    }

    activeHeadLinks.forEach((link) => {
        if (link instanceof HTMLElement) {
            link.classList.remove("active");
        }
    });

    activeNavLinks.forEach((link) => {
        if (link instanceof HTMLElement) {
            link.classList.remove("active");
        }
    });

    const openSubMenus = document.querySelectorAll(".submenu.open");
    openSubMenus.forEach((submenu) => {
        if (submenu instanceof HTMLElement) {
            submenu.classList.remove("open");
        }
    });

    if (DESKTOP_NAV_DEBUG) {
        const remainingActiveHeadLinks =
            document.querySelectorAll(".head-link.active");
        const remainingActiveNavLinks =
            document.querySelectorAll(".nav-link.active");
        console.log("[DESKTOP_NAV_DEBUG] resetDesktopMenuClasses:after", {
            variant: "desktop-nav",
            activeHeadLinksCount: remainingActiveHeadLinks.length,
            activeNavLinksCount: remainingActiveNavLinks.length,
        });
    }
};

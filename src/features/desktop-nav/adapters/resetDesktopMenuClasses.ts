export const resetDesktopMenuClasses = () => {
    const activeHeadLinks = document.querySelectorAll(".head-link.active");
    const activeNavLinks = document.querySelectorAll(".nav-link.active");
    const openSubMenus = document.querySelectorAll(".submenu.open");

    const sampleHeadLink =
        activeHeadLinks[0] instanceof HTMLElement ? activeHeadLinks[0] : null;
    const sampleNavLink =
        activeNavLinks[0] instanceof HTMLElement ? activeNavLinks[0] : null;
    const sampleSubMenu =
        openSubMenus[0] instanceof HTMLElement ? openSubMenus[0] : null;

    console.log("[DESKTOP_NAV_DEBUG] resetDesktopMenuClasses:before", {
        activeHeadLinksCount: activeHeadLinks.length,
        activeNavLinksCount: activeNavLinks.length,
        openSubMenusCount: openSubMenus.length,
        sampleHeadLinkClass: sampleHeadLink?.className ?? null,
        sampleNavLinkClass: sampleNavLink?.className ?? null,
        sampleSubMenuClass: sampleSubMenu?.className ?? null
    });

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

    openSubMenus.forEach((submenu) => {
        if (submenu instanceof HTMLElement) {
            submenu.classList.remove("open");
        }
    });

    console.log("[DESKTOP_NAV_DEBUG] resetDesktopMenuClasses:after", {
        activeHeadLinksCount: document.querySelectorAll(".head-link.active")
            .length,
        activeNavLinksCount: document.querySelectorAll(".nav-link.active")
            .length,
        openSubMenusCount: document.querySelectorAll(".submenu.open").length
    });
};

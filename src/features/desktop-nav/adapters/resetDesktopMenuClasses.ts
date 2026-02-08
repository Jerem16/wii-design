export const resetDesktopMenuClasses = () => {
    const openSubMenus = document.querySelectorAll(".submenu.open");

    const sampleSubMenu =
        openSubMenus[0] instanceof HTMLElement ? openSubMenus[0] : null;

    console.log("[DESKTOP_NAV_DEBUG] resetDesktopMenuClasses:before", {
        openSubMenusCount: openSubMenus.length,
        sampleSubMenuClass: sampleSubMenu?.className ?? null
    });

    openSubMenus.forEach((submenu) => {
        if (submenu instanceof HTMLElement) {
            submenu.classList.remove("open");
        }
    });

    console.log("[DESKTOP_NAV_DEBUG] resetDesktopMenuClasses:after", {
        openSubMenusCount: document.querySelectorAll(".submenu.open").length
    });
};

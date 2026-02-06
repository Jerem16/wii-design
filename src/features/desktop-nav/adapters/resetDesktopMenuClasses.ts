export const resetDesktopMenuClasses = () => {
    const activeHeadLinks = document.querySelectorAll(".head-link.active");
    const activeNavLinks = document.querySelectorAll(".nav-link.active");

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
};

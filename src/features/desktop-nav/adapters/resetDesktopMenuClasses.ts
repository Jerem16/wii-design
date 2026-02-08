export const resetDesktopMenuClasses = () => {
    const openSubMenus = document.querySelectorAll(".submenu.open");

    openSubMenus.forEach((submenu) => {
        if (submenu instanceof HTMLElement) {
            submenu.classList.remove("open");
        }
    });
};

import { useCallback, useMemo, memo, useEffect } from "react";
import { useNavigation } from "../utils/context/NavigationContext";
import MenuList from "./MenuList";
import type { MenuItem } from "../data/menuItems";

interface NavProps {
    menuItems: {
        mainLink?: MenuItem[];
    };
    onNavigationClick: (path: string) => void;
}

const MenuOpen = ({ menuItems, onNavigationClick }: NavProps) => {
    const { hamburgerMenuIsOpen, openSubMenu, setOpenSubMenu, closeHamburgerMenu } =
        useNavigation();

    const handleMenuClick = useCallback(
        (menuItemId: string) => {
            setOpenSubMenu(openSubMenu === menuItemId ? null : menuItemId);
        },
        [openSubMenu, setOpenSubMenu]
    );

    const containerClass = useMemo(
        () => `mnav__panel ${hamburgerMenuIsOpen ? "open" : ""}`,
        [hamburgerMenuIsOpen]
    );

    const overlayClass = useMemo(
        () => `mnav__overlay ${hamburgerMenuIsOpen ? "open" : ""}`,
        [hamburgerMenuIsOpen]
    );

    const handleClose = useCallback(() => {
        closeHamburgerMenu(1);
    }, [closeHamburgerMenu]);

    useEffect(() => {
        if (hamburgerMenuIsOpen) {
            document.body.classList.add("mnav--open");
        } else {
            document.body.classList.remove("mnav--open");
        }

        return () => {
            document.body.classList.remove("mnav--open");
        };
    }, [hamburgerMenuIsOpen]);

    useEffect(() => {
        if (!hamburgerMenuIsOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeHamburgerMenu(1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [hamburgerMenuIsOpen, closeHamburgerMenu]);

    return (
        <>
            <div className={overlayClass} onClick={handleClose} aria-hidden="true" />
            <div className={containerClass} role="dialog" aria-modal="true" aria-label="Menu">
                <button className="mnav__close" type="button" onClick={handleClose}>
                    Fermer
                </button>
                {hamburgerMenuIsOpen && menuItems.mainLink && (
                    <MenuList
                        menuItems={menuItems.mainLink}
                        openSubMenu={openSubMenu}
                        onNavigationClick={onNavigationClick}
                        handleMenuClick={handleMenuClick}
                    />
                )}
            </div>
        </>
    );
};

export default memo(MenuOpen);

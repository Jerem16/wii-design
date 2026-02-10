import { useCallback, memo } from "react";
import { useNavigation } from "@/features/mobile-nav/core/navigation/context/NavigationContext";
import MenuIcon from "@components/99-Svg_Icon/utils/MenuIcon";

const ButtonOpen = () => {
    const {
        hamburgerMenuIsOpen,
        openHamburgerMenu,
        closeHamburgerMenu
    } = useNavigation();
    const handleClick = useCallback(() => {
        if (hamburgerMenuIsOpen) {
            closeHamburgerMenu(1);
        } else {
            openHamburgerMenu();
        }
    }, [hamburgerMenuIsOpen, openHamburgerMenu, closeHamburgerMenu]);

    return (
        <button
            aria-label={
                hamburgerMenuIsOpen ? "fermer le menu" : "ouvrir le menu"
            }
            aria-expanded={hamburgerMenuIsOpen}
            aria-controls="main-nav"
            onClick={handleClick}
            className="mnav__toggle"
        >
            <MenuIcon isOpen={hamburgerMenuIsOpen} />
        </button>
    );
};

export default memo(ButtonOpen);

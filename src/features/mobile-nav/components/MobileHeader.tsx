// "use client";
import { useMemo, memo } from "react";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import MobileLogoLink from "./MobileLogoLink";
import { useScrollContext } from "@utils/context/ScrollContext";
import { useNavigation } from "@utils/context/NavigationContext";
import { menuItems } from "../data/menuItems";
import { updateMenuClasses } from "@utils/updateMenuUtils";
import { useSmoothScroll } from "@utils/useSmoothScroll";
import { useInitialScroll } from "@utils/scrollUtils";
import { makeClickHandler } from "@utils/handlers";

const MobileHeader: React.FC = () => {
    const pathname = usePathname();
    const { currentRoute, updateRoute, closeHamburgerMenu } = useNavigation();
    const { activeSection } = useScrollContext();

    useInitialScroll(pathname);

    const handleNavigationClick = useSmoothScroll(currentRoute, updateRoute);

    const handleLogoClick = useMemo(
        () =>
            makeClickHandler(() => {
                closeHamburgerMenu(200);
                handleNavigationClick("/#top");
            }),
        [closeHamburgerMenu, handleNavigationClick]
    );

    const updatedMenuItems = useMemo(
        () =>
            updateMenuClasses(menuItems.mainLink, activeSection, currentRoute),
        [activeSection, currentRoute]
    );

    return (
        <div className="ha header">
            <MobileLogoLink onClick={handleLogoClick} />
            <Nav
                menuItems={updatedMenuItems}
                onNavigationClick={handleNavigationClick}
            />
        </div>
    );
};

export default memo(MobileHeader);

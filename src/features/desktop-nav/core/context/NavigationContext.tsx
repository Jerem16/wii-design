import React, {
    createContext,
    useContext,
    useState,
    useMemo,
    useCallback,
    useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";

const DESKTOP_NAV_DEBUG = false;
const logDesktopNav = (...args: unknown[]) => {
    if (DESKTOP_NAV_DEBUG) {
        // eslint-disable-next-line no-console
        console.log("[DesktopNav]", ...args);
    }
};

interface NavigationContextType {
    currentRoute: string;
    updateRoute: (path: string) => void;
    openSubMenu: string | null;
    setOpenSubMenu: (subMenuId: string | null) => void;
    showNavLinks: boolean;
    setShowNavLinks: (showNavLinks: boolean) => void;
    resetDisplayStyles: () => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const [currentRoute, setCurrentRoute] = useState(pathname || "/");
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const [showNavLinks, setShowNavLinks] = useState<boolean>(true);

    // Fonction pour réinitialiser l'affichage des sous-menus
    const resetDisplayStyles = useCallback(() => {
        setOpenSubMenu(null); // Ferme tous les sous-menus
    }, []);

    useEffect(() => {
        logDesktopNav("NavigationContext.setCurrentRoute(pathname)", {
            before: currentRoute,
            next: pathname || "/",
            pathname,
            hash: window.location.hash,
        });
        setCurrentRoute(pathname || "/");
    }, [pathname, currentRoute]);

    const updateRoute = useCallback(
        (path: string) => {
            logDesktopNav("NavigationContext.updateRoute", {
                before: currentRoute,
                next: path,
                pathname: window.location.pathname,
                hash: window.location.hash,
                willPush: true,
            });
            setCurrentRoute(path);
            router.push(path);
        },
        [currentRoute, router]
    );

    const contextValue = useMemo(
        () => ({
            currentRoute,
            updateRoute,
            openSubMenu,
            setOpenSubMenu,
            resetDisplayStyles,
            showNavLinks,
            setShowNavLinks,
        }),
        [
            currentRoute,
            updateRoute,
            openSubMenu,
            resetDisplayStyles,
            showNavLinks,
        ]
    );

    return (
        <NavigationContext.Provider value={contextValue}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error(
            "useNavigation must be used within a NavigationProvider"
        );
    }
    return context;
};

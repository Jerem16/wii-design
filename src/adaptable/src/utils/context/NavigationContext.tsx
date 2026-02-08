import React, {
    createContext,
    useContext,
    useState,
    useMemo,
    useCallback,
    useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";

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
const DESKTOP_NAV_DEBUG = true;

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
        const nextRoute = pathname || "/";
        setCurrentRoute(prev => {
            if (DESKTOP_NAV_DEBUG) {
                console.log("[DESKTOP_NAV_DEBUG] setCurrentRoute", {
                    variant: "adaptable",
                    trigger: "pathname-effect",
                    previous: prev,
                    next: nextRoute,
                    pathname,
                    hash:
                        typeof window !== "undefined"
                            ? window.location.hash
                            : "",
                });
            }
            return nextRoute;
        });
    }, [pathname]);

    const updateRoute = useCallback(
        (path: string) => {
            setCurrentRoute(prev => {
                if (DESKTOP_NAV_DEBUG) {
                    console.log("[DESKTOP_NAV_DEBUG] updateRoute", {
                        variant: "adaptable",
                        next: path,
                        previous: prev,
                        pathname,
                        hash:
                            typeof window !== "undefined"
                                ? window.location.hash
                                : "",
                    });
                }
                return path;
            });
            if (DESKTOP_NAV_DEBUG) {
                console.log("[DESKTOP_NAV_DEBUG] router.push", {
                    variant: "adaptable",
                    next: path,
                });
            }
            router.push(path);
        },
        [router]
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

    if (DESKTOP_NAV_DEBUG) {
        console.log("[DESKTOP_NAV_DEBUG] NavigationProvider render", {
            variant: "adaptable",
            currentRoute,
            pathname,
        });
    }

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

"use client";

import React, {
    createContext,
    useContext,
    useState,
    useMemo,
    useCallback,
    useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";

interface DesktopNavigationContextType {
    currentRoute: string;
    updateRoute: (path: string) => void;
    openSubMenu: string | null;
    setOpenSubMenu: (subMenuId: string | null) => void;
    showNavLinks: boolean;
    setShowNavLinks: (showNavLinks: boolean) => void;
    resetDisplayStyles: () => void;
}

const DesktopNavigationContext = createContext<
    DesktopNavigationContextType | undefined
>(undefined);

export const DesktopNavigationProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [currentRoute, setCurrentRoute] = useState(pathname || "/");
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const [showNavLinks, setShowNavLinks] = useState<boolean>(true);

    const resetDisplayStyles = useCallback(() => {
        setOpenSubMenu(null);
    }, []);

    useEffect(() => {
        setCurrentRoute(pathname || "/");
    }, [pathname]);

    const updateRoute = useCallback(
        (path: string) => {
            setCurrentRoute(path);
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

    return (
        <DesktopNavigationContext.Provider value={contextValue}>
            {children}
        </DesktopNavigationContext.Provider>
    );
};

export const useDesktopNavigation = () => {
    const context = useContext(DesktopNavigationContext);
    if (!context) {
        throw new Error(
            "useDesktopNavigation must be used within a DesktopNavigationProvider"
        );
    }
    return context;
};

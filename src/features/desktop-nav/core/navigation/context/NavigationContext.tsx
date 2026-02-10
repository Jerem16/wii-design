"use client";

import React, {
    createContext,
    useState,
    useMemo,
    useCallback,
    useEffect
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { createUseContext } from "@/features/navigation/core/context/utils/createUseContext";

interface NavigationContextType {
    currentRoute: string;
    updateRoute: (path: string) => void;
    openSubMenu: string | null;
    setOpenSubMenu: (subMenuId: string | null) => void;
    showNavLinks: boolean;
    setShowNavLinks: (showNavLinks: boolean) => void;
    resetDisplayStyles: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
    undefined
);

const getPathnameFromRoute = (route: string): string => {
    const [pathnamePart] = route.split("#");
    if (!pathnamePart) {
        return "/";
    }
    return pathnamePart;
};

const shouldUpdateRouteFromPathname = (
    currentRoute: string,
    pathname: string
): boolean => getPathnameFromRoute(currentRoute) !== pathname;

export const NavigationProvider: React.FC<{
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
        const nextRoute = pathname || "/";
        setCurrentRoute(prev => {
            const shouldUpdate = shouldUpdateRouteFromPathname(prev, nextRoute);
            return shouldUpdate ? nextRoute : prev;
        });
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
            setShowNavLinks
        }),
        [
            currentRoute,
            updateRoute,
            openSubMenu,
            resetDisplayStyles,
            showNavLinks
        ]
    );

    return (
        <NavigationContext.Provider value={contextValue}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = createUseContext(
    NavigationContext,
    "useNavigation"
);

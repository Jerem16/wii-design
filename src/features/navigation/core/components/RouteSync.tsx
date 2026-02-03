"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNavigation } from "../context/NavigationContext";

const RouteSync = () => {
    const pathname = usePathname();
    const { currentRoute, updateRoute } = useNavigation();

    useEffect(() => {
        if (!pathname || pathname === currentRoute) return;
        updateRoute(pathname);
    }, [currentRoute, pathname, updateRoute]);

    return null;
};

export default RouteSync;

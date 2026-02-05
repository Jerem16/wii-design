"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const useDesktopSubMenuBehavior = () => {
    const [openSubMenuId, setOpenSubMenuId] = useState<string | null>(null);
    const navRef = useRef<HTMLElement | null>(null);
    const openSubMenuIdRef = useRef<string | null>(null);

    useEffect(() => {
        openSubMenuIdRef.current = openSubMenuId;
    }, [openSubMenuId]);

    const closeSubMenu = useCallback(() => {
        setOpenSubMenuId(null);
    }, []);

    const toggleSubMenu = useCallback((id: string) => {
        setOpenSubMenuId((prev) => (prev === id ? null : id));
    }, []);

    useEffect(() => {
        const onMouseDown = (event: MouseEvent) => {
            if (!navRef.current) return;

            const target = event.target;
            if (!(target instanceof Node)) return;

            if (!navRef.current.contains(target)) {
                setOpenSubMenuId(null);
            }
        };

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && openSubMenuIdRef.current) {
                setOpenSubMenuId(null);
            }
        };

        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, []);

    return {
        navRef,
        openSubMenuId,
        toggleSubMenu,
        closeSubMenu,
    };
};

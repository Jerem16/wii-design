"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const useDesktopSubMenuBehavior = () => {
    const [hoveredMenuId, setHoveredMenuId] = useState<string | null>(null);
    const [pinnedMenuId, setPinnedMenuId] = useState<string | null>(null);
    const [focusedMenuId, setFocusedMenuId] = useState<string | null>(null);
    const [canUseHover, setCanUseHover] = useState(false);
    const navRef = useRef<HTMLElement | null>(null);
    const pinnedMenuIdRef = useRef<string | null>(null);

    useEffect(() => {
        pinnedMenuIdRef.current = pinnedMenuId;
    }, [pinnedMenuId]);

    const closeSubMenu = useCallback(() => {
        setHoveredMenuId(null);
        setPinnedMenuId(null);
        setFocusedMenuId(null);
    }, []);

    const toggleSubMenu = useCallback((id: string) => {
        setPinnedMenuId((prev) => (prev === id ? null : id));
        setHoveredMenuId(id);
    }, []);

    const openSubMenuOnHover = useCallback(
        (id: string) => {
            if (!canUseHover) return;
            setHoveredMenuId(id);
        },
        [canUseHover]
    );

    const closeSubMenuOnMouseLeave = useCallback((id: string) => {
        if (!canUseHover) return;
        if (pinnedMenuIdRef.current === id) {
            return;
        }
        setHoveredMenuId((prev) => (prev === id ? null : prev));
    }, [canUseHover]);

    const isSubMenuOpen = useCallback(
        (id: string) =>
            pinnedMenuId === id || hoveredMenuId === id || focusedMenuId === id,
        [focusedMenuId, hoveredMenuId, pinnedMenuId]
    );

    const openSubMenuOnFocus = useCallback((id: string) => {
        setFocusedMenuId(id);
    }, []);

    const closeSubMenuOnBlur = useCallback((id: string) => {
        setFocusedMenuId((prev) => (prev === id ? null : prev));
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

        const updateHoverCapability = () => {
            setCanUseHover(mediaQuery.matches);
        };

        updateHoverCapability();
        mediaQuery.addEventListener("change", updateHoverCapability);

        return () => {
            mediaQuery.removeEventListener("change", updateHoverCapability);
        };
    }, []);

    useEffect(() => {
        const onMouseDown = (event: MouseEvent) => {
            if (!navRef.current) return;

            const target = event.target;
            if (!(target instanceof Node)) return;

            if (!navRef.current.contains(target)) {
                closeSubMenu();
            }
        };

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && pinnedMenuIdRef.current) {
                closeSubMenu();
            }
        };

        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [closeSubMenu]);

    return {
        navRef,
        isSubMenuOpen,
        toggleSubMenu,
        closeSubMenu,
        openSubMenuOnHover,
        closeSubMenuOnMouseLeave,
        openSubMenuOnFocus,
        closeSubMenuOnBlur,
    };
};

"use client";

import { useEffect, useRef } from "react";
import { useNavigation } from "@/features/navigation/core/context/NavigationContext";

const handleClickOutside = (
    event: MouseEvent,
    navRef: React.RefObject<HTMLElement | null>,
    setOpenSubMenu: (value: string | null) => void
) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenSubMenu(null);
    }
};

const handleEscape = (event: KeyboardEvent, setOpenSubMenu: (value: string | null) => void) => {
    if (event.key === "Escape") {
        event.preventDefault();
        setOpenSubMenu(null);
    }
};

export const useAdaptableMenu = () => {
    const navRef = useRef<HTMLElement | null>(null);
    const { openSubMenu, setOpenSubMenu } = useNavigation();

    useEffect(() => {
        const onClickOutside = (event: MouseEvent) =>
            handleClickOutside(event, navRef, setOpenSubMenu);
        const onKeyDown = (event: KeyboardEvent) => handleEscape(event, setOpenSubMenu);

        document.addEventListener("mousedown", onClickOutside);
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("mousedown", onClickOutside);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [openSubMenu, setOpenSubMenu]);

    return { navRef, openSubMenu, setOpenSubMenu };
};

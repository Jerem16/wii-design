"use client";

import { useEffect } from "react";

interface ResizeState {
    setTabletMain: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenMainButton: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenButton: React.Dispatch<React.SetStateAction<boolean>>;
    setBigMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setIsDesktop: React.Dispatch<React.SetStateAction<boolean>>;
}

const updateDesktopFlags = (
    width: number,
    setters: ResizeState
): void => {
    const {
        setTabletMain,
        setOpenMainButton,
        setOpenButton,
        setBigMenu,
        setIsDesktop,
    } = setters;

    if (width < 1024) {
        setIsDesktop(false);
        setTabletMain(false);
        setOpenMainButton(false);
        setOpenButton(false);
        setBigMenu(false);
        return;
    }

    setIsDesktop(true);

    if (width < 1170) {
        setBigMenu(false);
        setTabletMain(true);
        setOpenMainButton(true);
        setOpenButton(false);
        return;
    }

    if (width < 1440) {
        setTabletMain(true);
        setOpenMainButton(true);
        setOpenButton(false);
        setBigMenu(true);
        return;
    }

    setTabletMain(true);
    setOpenMainButton(true);
    setOpenButton(true);
    setBigMenu(true);
};

export const useResize = (setters: ResizeState) => {
    const {
        setTabletMain,
        setOpenMainButton,
        setOpenButton,
        setBigMenu,
        setIsDesktop,
    } = setters;

    useEffect(() => {
        const resolvedSetters = {
            setTabletMain,
            setOpenMainButton,
            setOpenButton,
            setBigMenu,
            setIsDesktop,
        };
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const handleResize = () => {
            updateDesktopFlags(window.innerWidth, resolvedSetters);
        };

        const handleMediaChange = () => {
            if (!mediaQuery.matches) {
                updateDesktopFlags(0, resolvedSetters);
                window.removeEventListener("resize", handleResize);
                return;
            }

            handleResize();
            window.addEventListener("resize", handleResize);
        };

        handleMediaChange();

        if ("addEventListener" in mediaQuery) {
            mediaQuery.addEventListener("change", handleMediaChange);
        } else {
            mediaQuery.addListener(handleMediaChange);
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            if ("removeEventListener" in mediaQuery) {
                mediaQuery.removeEventListener("change", handleMediaChange);
            } else {
                mediaQuery.removeListener(handleMediaChange);
            }
        };
    }, [
        setBigMenu,
        setIsDesktop,
        setOpenButton,
        setOpenMainButton,
        setTabletMain,
    ]);
};

"use client";

import { useEffect } from "react";

interface ResizeSetters {
    setTabletMain: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenMainButton: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenButton: React.Dispatch<React.SetStateAction<boolean>>;
    setBigMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setIsDesktop: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useAdaptableResize = ({
    setTabletMain,
    setOpenMainButton,
    setOpenButton,
    setBigMenu,
    setIsDesktop,
}: ResizeSetters) => {
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 1024) {
                setIsDesktop(false);
                setTabletMain(false);
                setOpenMainButton(false);
                setOpenButton(false);
                setBigMenu(false);
            } else if (width < 1170) {
                setIsDesktop(true);
                setBigMenu(false);
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(false);
            } else if (width < 1440) {
                setIsDesktop(true);
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(false);
                setBigMenu(true);
            } else {
                setIsDesktop(true);
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(true);
                setBigMenu(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [setBigMenu, setIsDesktop, setOpenButton, setOpenMainButton, setTabletMain]);
};

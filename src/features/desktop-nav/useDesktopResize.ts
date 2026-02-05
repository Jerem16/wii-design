"use client";

import { useEffect, useState } from "react";

type DesktopResizeState = {
    tabletMain: boolean;
    openMainButton: boolean;
    openButton: boolean;
    bigMenu: boolean;
};

const initialState: DesktopResizeState = {
    tabletMain: false,
    openMainButton: false,
    openButton: false,
    bigMenu: false,
};

export const useDesktopResize = (): DesktopResizeState => {
    const [state, setState] = useState<DesktopResizeState>(initialState);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 1024) {
                setState(initialState);
                return;
            }
            if (width < 1170) {
                setState({
                    tabletMain: true,
                    openMainButton: true,
                    openButton: false,
                    bigMenu: false,
                });
                return;
            }
            if (width < 1440) {
                setState({
                    tabletMain: true,
                    openMainButton: true,
                    openButton: false,
                    bigMenu: true,
                });
                return;
            }
            setState({
                tabletMain: true,
                openMainButton: true,
                openButton: true,
                bigMenu: true,
            });
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return state;
};

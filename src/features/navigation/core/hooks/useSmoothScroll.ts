import { useCallback } from "react";
import { handleScrollClick } from "../utils/scrollSmooth";
import { handleNavClick } from "../../../../utils/nav";

export const useSmoothScroll = (
    currentRoute: string | undefined,
    updateRoute: (route: string) => void,
    onScrollClick: (hash: string) => void = handleScrollClick
) => {
    return useCallback(
        (path: string) => {
            handleNavClick(path, currentRoute, updateRoute, onScrollClick);
        },
        [currentRoute, onScrollClick, updateRoute]
    );
};

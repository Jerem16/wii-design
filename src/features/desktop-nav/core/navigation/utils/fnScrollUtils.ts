import type {
    ScrollSmoothWorkerData,
    ScrollSmoothWorkerResponse,
} from "../../../../../workers/scrollSmoothWorker";

type ScrollOffsetOptions = {
    /**
     * Priorité 1 : variable CSS (--scroll-offset) si définie (ex: "72px")
     * Fallback : hauteur d’un header trouvé via selector
     */
    headerSelector?: string;
    /** Offset additionnel (px) */
    extra?: number;
};

const parsePx = (raw: string): number | null => {
    const v = raw.trim().toLowerCase();
    if (!v) return null;
    // Supporte "72px" ou "72"
    const n = Number.parseFloat(v.replace("px", ""));
    return Number.isFinite(n) ? n : null;
};

export const getScrollOffset = (opts?: ScrollOffsetOptions): number => {
    if (typeof window === "undefined") return 0;

    // 1) CSS var
    const cssRaw = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--scroll-offset");
    const cssPx = parsePx(cssRaw);
    const baseFromCss = cssPx ?? 0;

    // 2) Fallback header height (si pas de CSS var)
    const selector =
        opts?.headerSelector ?? "[data-scroll-header], .header, header";
    const header = document.querySelector<HTMLElement>(selector);
    const baseFromHeader = header ? header.getBoundingClientRect().height : 0;

    const base = cssPx !== null ? baseFromCss : baseFromHeader;
    const extra = opts?.extra ?? 0;

    return Math.max(0, base + extra);
};

export const handleScrollClick = (targetId: string): void => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const start = window.scrollY;

    // Offset global + offset spécifique au bloc (optionnel)
    const elementExtraRaw = element.getAttribute("data-scroll-offset") ?? "";
    const elementExtra = parsePx(elementExtraRaw) ?? 0;

    const offset = getScrollOffset({ extra: elementExtra });

    const endRaw = element.getBoundingClientRect().top + window.scrollY - offset;
    const end = Math.max(0, endRaw);

    const duration = 750;
    const startTime = performance.now();

    const worker = new Worker(
        new URL("../../../../../workers/scrollSmoothWorker.js", import.meta.url)
    );

    const animateScroll = (currentTime: number): void => {
        const data: ScrollSmoothWorkerData = {
            start,
            end,
            duration,
            startTime,
            currentTime,
        };
        worker.postMessage(data);
    };

    worker.onmessage = (event: MessageEvent<ScrollSmoothWorkerResponse>): void => {
        const { newScrollY, progress } = event.data;
        window.scrollTo(0, newScrollY);
        if (progress < 1) {
            window.requestAnimationFrame(animateScroll);
        } else {
            worker.terminate();
        }
    };

    window.requestAnimationFrame(animateScroll);
};

export const scrollToHashWhenReady = (
    hash: string,
    options?: { maxAttempts?: number }
): void => {
    if (typeof window === "undefined") return;
    const targetId = hash.replace(/^#/, "");
    if (!targetId) return;

    const maxAttempts = options?.maxAttempts ?? 10;
    let attempts = 0;

    const tryScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
            const elementExtraRaw =
                element.getAttribute("data-scroll-offset") ?? "";
            const elementExtra = parsePx(elementExtraRaw) ?? 0;
            const offset = getScrollOffset({ extra: elementExtra });
            const currentTop = element.getBoundingClientRect().top;
            if (Math.abs(currentTop - offset) <= 2) {
                return;
            }
            handleScrollClick(targetId);
            return;
        }

        if (attempts < maxAttempts) {
            attempts += 1;
            window.requestAnimationFrame(tryScroll);
        }
    };

    window.requestAnimationFrame(tryScroll);
};
/*-------------------------------------------------------*/

interface NavParams {
    currentPath: string;
    targetPath: string;
    targetHash: string | undefined;
    currentHash: string | undefined;
    updateRoute: (route: string) => void;
    handleScrollClick?: (hash: string) => void;
}
export const handleNavClick = (
    path: string,
    currentRoute: string | undefined,
    updateRoute: (route: string) => void,
    handleScrollClick?: (hash: string) => void
): void => {
    if (!currentRoute) {
        return;
    }

    const [currentPath, currentHash] = currentRoute.split("#");
    const [targetPath, targetHash] = path.split("#");

    ifNav({
        currentPath,
        targetPath,
        targetHash,
        currentHash,
        updateRoute,
    });

    elseNav({
        currentPath,
        targetPath,
        targetHash,
        currentHash,
        updateRoute,
        handleScrollClick,
    });
};

function ifNav({
    currentPath,
    targetPath,
    targetHash,
    currentHash,
    updateRoute,
}: NavParams): void {
    if (currentPath !== targetPath) {
        updateRoute(targetPath);

        if (targetHash === undefined) {
            return;
        }

        if (targetHash !== currentHash) {
            updateRoute(`${targetPath}#${targetHash}`);
        }
    }
}

function elseNav({
    currentPath,
    targetPath,
    targetHash,
    currentHash,
    updateRoute,
    handleScrollClick,
}: NavParams): void {
    if (currentPath === targetPath) {
        updateRoute(targetPath);

        if (targetHash === undefined) {
            handleScrollClick?.(`scroll-start`);
        } else if (targetHash !== currentHash) {
            handleScrollClick?.(targetHash);
            updateRoute(`${targetPath}#${targetHash}`);
        } else if (targetHash === currentHash) {
            updateRoute(`${targetPath}#${targetHash}`);
        }
    }
}

/*-------------------------------------------------------*/

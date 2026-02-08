export function rafThrottle<T extends (...args: never[]) => void>(fn: T): T {
    let rafId: number | null = null;
    const throttled = (...args: Parameters<T>) => {
        if (rafId !== null) return;
        rafId = requestAnimationFrame(() => {
            fn(...args);
            rafId = null;
        });
    };

    const throttledWithCancel = throttled as T & { cancel: () => void };
    throttledWithCancel.cancel = () => {
        if (rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    };

    return throttledWithCancel as T;
}

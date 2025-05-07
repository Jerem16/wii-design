export const runDelayWorker = delay =>
    new Promise(resolve => {
        const worker = new Worker(
            new URL("/public/workers/delayWorker.js", import.meta.url)
        );
        worker.onmessage = () => {
            worker.terminate();
            resolve();
        };
        worker.postMessage(delay);
    });
function createIdleDeadline() {
    return {
        timeRemaining: () => Math.max(0, 50),
        didTimeout: false
    };
}
export function idleCallbackPolyfill(callback) {
    return setTimeout(() => {
        callback(createIdleDeadline());
    }, 1);
}

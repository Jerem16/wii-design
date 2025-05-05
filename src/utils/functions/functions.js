export const runDelayWorker = (delay ) =>
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

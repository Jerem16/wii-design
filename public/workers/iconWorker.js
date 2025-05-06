// public/workers/iconWorker.js
self.onmessage = function (e) {
    const { count, baseDelay, adjustment } = e.data;

    for (let i = 0; i < count; i++) {
        const isLast = i === count - 1;
        const delay = isLast ? baseDelay * i - adjustment : baseDelay * i;

        setTimeout(() => {
            self.postMessage({ index: i });
        }, delay);
    }
};

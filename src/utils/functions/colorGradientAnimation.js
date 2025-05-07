document.addEventListener("DOMContentLoaded", () => {
    const stopElement = document.querySelector('#AX stop[offset="0"]');
    if (!stopElement) return;

    const colorWorker = new Worker(
        new URL("/public/workers/colorWorker.js", import.meta.url)
    );

    colorWorker.postMessage({
        startColor: "ffed00",
        endColor: "00fff7",
        duration: 3000,
        steps: 60
    });

    colorWorker.onmessage = e => {
        stopElement.setAttribute("stop-color", e.data);
    };
});

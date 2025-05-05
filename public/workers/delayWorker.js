self.onmessage = function(e) {
    const delay = e.data;
    setTimeout(() => {
        self.postMessage("done");
    }, delay);
};

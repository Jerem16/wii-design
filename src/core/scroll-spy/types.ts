export type HashId = `#${string}`;

export type SectionMetrics = {
    id: HashId;
    top: number;
    height: number;
};

export type ScrollSpyWorkerIn = {
    sections: readonly SectionMetrics[];
    scrollY: number;
    thresholdPx: number;
};

export type ScrollSpyWorkerOut = {
    activeId?: HashId;
};

export type Dispose = () => void;

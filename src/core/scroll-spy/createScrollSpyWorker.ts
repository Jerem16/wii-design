import type { ScrollWorkerData, ScrollWorkerResponse } from "@/workers/scrollWorker";
import type {
    Dispose,
    HashId,
    ScrollSpyWorkerIn,
    SectionMetrics,
} from "./types";

const WORKER_BASE_THRESHOLD_PX = 100;

const toHashId = (id?: string): HashId | undefined => {
    if (!id) return undefined;
    if (id.startsWith("#")) return id as HashId;
    return `#${id}` as HashId;
};

const stripHash = (id: HashId) => id.replace(/^#/, "");

const buildWorkerPayload = (input: ScrollSpyWorkerIn): ScrollWorkerData => {
    const positions = input.sections.reduce<ScrollWorkerData["positions"]>(
        (acc, section) => {
            const rawId = stripHash(section.id);
            const top = section.top + (WORKER_BASE_THRESHOLD_PX - input.thresholdPx);
            acc[rawId] = {
                top,
                height: section.height,
            };
            return acc;
        },
        {}
    );

    return {
        sections: input.sections.map((section) => ({ id: stripHash(section.id) })),
        scrollY: input.scrollY,
        positions,
    };
};

export function createScrollSpyWorker(
    onActive: (id?: HashId) => void
): { post(input: ScrollSpyWorkerIn): void; dispose: Dispose } | null {
    if (typeof window === "undefined" || typeof Worker === "undefined") return null;

    const worker = new Worker(new URL("../../workers/scrollWorker.js", import.meta.url));

    worker.onmessage = (event: MessageEvent<ScrollWorkerResponse>) => {
        const { currentSectionId } = event.data;
        onActive(toHashId(currentSectionId));
    };

    return {
        post(input: ScrollSpyWorkerIn) {
            const payload = buildWorkerPayload(input);
            worker.postMessage(payload);
        },
        dispose() {
            worker.terminate();
        },
    };
}

export type { SectionMetrics };

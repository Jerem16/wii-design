import type { Dispose, HashId, ScrollSpyWorkerIn } from "./types";

type WorkerSection = { id: string };
type WorkerPosition = { top: number; height: number };
type WorkerMessageIn = {
    sections: WorkerSection[];
    scrollY: number;
    positions: Record<string, WorkerPosition>;
};
type WorkerMessageOut = {
    currentSectionId: string;
};

const normalizeHashId = (id: string | undefined): HashId | undefined => {
    if (!id) return undefined;
    return (id.startsWith("#") ? id : `#${id}`) as HashId;
};

const toWorkerId = (hashId: HashId): string => hashId.replace(/^#/, "");

export const createScrollSpyWorker = (
    onActive: (id?: HashId) => void
): { post(input: ScrollSpyWorkerIn): void; dispose: Dispose } | null => {
    if (typeof window === "undefined") return null;

    const worker = new Worker(new URL("../../workers/scrollWorker.js", import.meta.url));

    worker.onmessage = (event: MessageEvent<WorkerMessageOut>) => {
        onActive(normalizeHashId(event.data.currentSectionId));
    };

    const post = ({ sections, scrollY, thresholdPx }: ScrollSpyWorkerIn) => {
        const positions = sections.reduce<Record<string, WorkerPosition>>(
            (acc, section) => {
                const id = toWorkerId(section.id);
                acc[id] = { top: section.top, height: section.height };
                return acc;
            },
            {}
        );
        const adjustedScrollY = scrollY + (thresholdPx - 100);
        const payload: WorkerMessageIn = {
            sections: sections.map((section) => ({ id: toWorkerId(section.id) })),
            scrollY: adjustedScrollY,
            positions,
        };
        worker.postMessage(payload);
    };

    const dispose = () => {
        worker.terminate();
    };

    return { post, dispose };
};

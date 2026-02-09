"use client";
import { useEffect, useRef, useState } from "react";

const useT = (callback: () => void, delay: number) => {
    const workerRef = useRef<Worker | null>(null);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        workerRef.current = new Worker(
            new URL("/public/workers/timeoutWorker.js", import.meta.url)
        );

        workerRef.current.onmessage = (event) => {
            const { type, isRunning } = event.data;

            if (type === "timeoutComplete") {
                callback();
            }

            if (type === "status") {
                setIsRunning(isRunning);
            }
        };

        workerRef.current.postMessage({ type: "start", delay });

        return () => {
            workerRef.current?.postMessage({ type: "clear" });
            workerRef.current?.terminate();
        };
    }, [callback, delay]);

    return isRunning;
};

export default useT;

//? Utilisation :

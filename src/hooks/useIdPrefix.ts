// src/hooks/useIdPrefix.ts
import { useId, useMemo } from "react";

function sanitizeReactId(value: string): string {
    return value.replace(/[^a-zA-Z0-9_-]/g, "");
}

export function useIdPrefix(namespace: string): string {
    const raw = useId();

    return useMemo(() => {
        return `${namespace}-${sanitizeReactId(raw)}`;
    }, [namespace, raw]);
}

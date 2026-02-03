export type MinimalEvent = {
    preventDefault(): void;
    stopPropagation(): void;
    key?: string;
};

export const stopAndPrevent = (e: MinimalEvent) => {
    e.preventDefault();
    e.stopPropagation();
};

export const isActivationKey = (e: MinimalEvent) => e.key === "Enter" || e.key === " ";

export const onlyActivation =
    (keys: readonly string[] = ["Enter", " "]) =>
    (e: MinimalEvent) =>
        typeof e.key === "string" && keys.includes(e.key);

export type Debounced<A extends unknown[]> = ((...args: A) => void) & {
    cancel: () => void;
    pending: () => boolean;
};

export function debounce<A extends unknown[]>(fn: (...args: A) => void, wait = 100): Debounced<A> {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let lastArgs: A | null = null;

    const debounced = ((...args: A) => {
        lastArgs = args;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            const argsToUse = lastArgs as A;
            lastArgs = null;
            fn(...argsToUse);
        }, wait);
    }) as Debounced<A>;

    debounced.cancel = () => {
        if (timer) clearTimeout(timer);
        timer = null;
        lastArgs = null;
    };

    debounced.pending = () => timer !== null;

    return debounced;
}

type BaseOpts = {
    close?: (delay?: number) => void;
    delay?: number;
    debounceMs?: number;
    gate?: (e: MinimalEvent) => boolean;
    stopPrevent?: boolean;
    before?: (e: MinimalEvent) => void;
    after?: (e: MinimalEvent) => void;
};

type WithPayload = BaseOpts & { withPayload: true };

type NoPayload = BaseOpts & { withPayload?: false | undefined };

export function makeHandler(run: () => void, opts?: NoPayload): (e: MinimalEvent) => void;
export function makeHandler<P>(
    run: (payload: P) => void,
    opts: WithPayload
): (payload: P, e: MinimalEvent) => void;

export function makeHandler<P>(
    run: ((payload: P) => void) | (() => void),
    opts?: WithPayload | NoPayload
) {
    const wait = opts?.debounceMs ?? 100;
    const gate = opts?.gate ?? (() => true);
    const useStopPrevent = opts?.stopPrevent ?? true;

    if ((opts as WithPayload)?.withPayload) {
        const fire =
            wait === 0
                ? (payload: P) => {
                      (run as (p: P) => void)(payload);
                      opts?.close?.(opts?.delay);
                  }
                : debounce<[P]>((payload: P) => {
                      (run as (p: P) => void)(payload);
                      opts?.close?.(opts?.delay);
                  }, wait);

        return (payload: P, e: MinimalEvent) => {
            if (useStopPrevent) stopAndPrevent(e);
            if (!gate(e)) return;
            opts?.before?.(e);
            fire(payload);
            opts?.after?.(e);
        };
    }

    const fire0 =
        wait === 0
            ? () => {
                  (run as () => void)();
                  opts?.close?.(opts?.delay);
              }
            : debounce<[]>(() => {
                  (run as () => void)();
                  opts?.close?.(opts?.delay);
              }, wait);

    return (e: MinimalEvent) => {
        if (useStopPrevent) stopAndPrevent(e);
        if (!gate(e)) return;
        opts?.before?.(e);
        fire0();
        opts?.after?.(e);
    };
}

type HandlerOpts = Omit<BaseOpts, "withPayload">;

export const makeClickHandler = (run: () => void, opts?: HandlerOpts) => makeHandler(run, opts);

export const makePayloadClickHandler = <P>(run: (payload: P) => void, opts?: HandlerOpts) =>
    makeHandler<P>(run, { ...opts, withPayload: true });

export const makeActivationHandler = <P>(run: (payload: P) => void, opts?: HandlerOpts) =>
    makeHandler<P>(run, {
        ...opts,
        withPayload: true,
        gate: opts?.gate ?? onlyActivation(),
        stopPrevent: false,
        before: (e) => e.preventDefault?.(),
    });

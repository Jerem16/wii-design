import type {
    KeyboardEvent as ReactKeyboardEvent,
    MouseEvent as ReactMouseEvent,
} from "react";

/**
 * Clés d'activation clavier (accessibilité).
 * - " " : Space moderne
 * - "Spacebar" : legacy (anciens navigateurs)
 */
export const isActivationKey = (key: string): boolean =>
    key === "Enter" || key === " " || key === "Spacebar";

export type CloseFn = (delay?: number) => void;

export type ClickEvent<TElement extends HTMLElement> = ReactMouseEvent<TElement>;
export type KeyEvent<TElement extends HTMLElement> = ReactKeyboardEvent<TElement>;

export type InteractionEvent<TElement extends HTMLElement> =
    | ClickEvent<TElement>
    | KeyEvent<TElement>;

export interface HandlerSideEffects {
    /** Fonction de fermeture (menu, sous-menu…). */
    close?: CloseFn;
    /** Délai optionnel passé à `close`. */
    delay?: number;
    /** Action à exécuter avant le handler principal. */
    before?: () => void;
    /** Action à exécuter après le handler principal. */
    after?: () => void;
}

const runSideEffects = (effects?: HandlerSideEffects): void => {
    if (!effects) return;
    effects.before?.();
    if (effects.close) {
        effects.close(effects.delay);
    }
    effects.after?.();
};

/**
 * Handler click avec payload.
 * - `event.preventDefault()` est appliqué systématiquement.
 */
export const makePayloadClickHandler = <
    TPayload,
    TElement extends HTMLElement = HTMLElement,
>(
    onPayload: (payload: TPayload) => void,
    effects?: HandlerSideEffects
) => {
    return (payload: TPayload, event: ClickEvent<TElement>): void => {
        event.preventDefault();
        onPayload(payload);
        runSideEffects(effects);
    };
};

/**
 * Handler clavier (Enter/Space) avec payload.
 * - Ignore les autres touches.
 */
export const makeActivationHandler = <
    TPayload,
    TElement extends HTMLElement = HTMLElement,
>(
    onPayload: (payload: TPayload) => void,
    effects?: HandlerSideEffects
) => {
    return (payload: TPayload, event: KeyEvent<TElement>): void => {
        if (!isActivationKey(event.key)) return;
        event.preventDefault();
        onPayload(payload);
        runSideEffects(effects);
    };
};

/**
 * Retourne un couple de handlers (click + keydown) pour éviter la duplication.
 */
export const makeInteractionHandlers = <
    TPayload,
    TElement extends HTMLElement = HTMLElement,
>(
    onPayload: (payload: TPayload) => void,
    effects?: HandlerSideEffects
) => {
    return {
        onClick: makePayloadClickHandler<TPayload, TElement>(onPayload, effects),
        onKeyDown: makeActivationHandler<TPayload, TElement>(
            onPayload,
            effects
        ),
    };
};

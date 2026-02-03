import { useContext } from "react";
import type { Context } from "react";

export const createUseContext = <T,>(context: Context<T | undefined>, name: string) => {
    return () => {
        const ctx = useContext(context);
        if (ctx === undefined) {
            throw new Error(`${name} doit être utilisé dans un ${name.replace("use", "")}Provider`);
        }
        return ctx;
    };
};

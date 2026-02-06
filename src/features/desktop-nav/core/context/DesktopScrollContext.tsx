"use client";

import { createContext, useContext, useState, useMemo } from "react";

type DesktopScrollContextType = {
    activeSection: string;
    setActiveSection: (section: string) => void;
};

const DesktopScrollContext = createContext<
    DesktopScrollContextType | undefined
>(undefined);

export const DesktopScrollProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [activeSection, setActiveSection] = useState<string>("");

    const contextValue = useMemo(
        () => ({
            activeSection,
            setActiveSection,
        }),
        [activeSection]
    );

    return (
        <DesktopScrollContext.Provider value={contextValue}>
            {children}
        </DesktopScrollContext.Provider>
    );
};

export const useDesktopScrollContext = () => {
    const context = useContext(DesktopScrollContext);
    if (!context) {
        throw new Error(
            "useDesktopScrollContext must be used within a DesktopScrollProvider"
        );
    }
    return context;
};

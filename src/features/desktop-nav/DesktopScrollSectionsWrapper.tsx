"use client";

import { useDesktopScrollAnchors } from "@/features/desktop-nav/core/hooks/useDesktopScrollAnchors";
import { desktopSections } from "@/features/desktop-nav/adapters/adaptableSections";

const DesktopScrollSectionsWrapper = () => {
    useDesktopScrollAnchors(desktopSections);
    return null;
};

export default DesktopScrollSectionsWrapper;

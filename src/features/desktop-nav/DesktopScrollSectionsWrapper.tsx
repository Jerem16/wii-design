"use client";

import { useScrollAnchors } from "@/features/desktop-nav/vendor/adaptable/utils/scrollUtils";
import { desktopSections } from "@/features/desktop-nav/adapters/adaptableSections";

const DesktopScrollSectionsWrapper = () => {
    useScrollAnchors(desktopSections);
    return null;
};

export default DesktopScrollSectionsWrapper;

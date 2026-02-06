import { adaptableMenuData } from "@/features/desktop-nav/adapters/adaptableMenuData";

const baseAnchors = ["top", "s1", "s2", "s3", "s4"];

const collectAnchors = () => {
    const anchors = new Set<string>(baseAnchors);

    const collectFromItem = (anchorId?: string) => {
        if (!anchorId) return;
        const trimmed = anchorId.replace(/^#/, "");
        if (trimmed) {
            anchors.add(trimmed);
        }
    };

    adaptableMenuData.mainLink.forEach((item) => {
        collectFromItem(item.AnchorId);
        item.subItems?.forEach((subItem) => {
            collectFromItem(subItem.AnchorId);
        });
    });

    adaptableMenuData.reservation?.forEach((item) => collectFromItem(item.AnchorId));
    adaptableMenuData.search?.forEach((item) => collectFromItem(item.AnchorId));
    adaptableMenuData.connection?.forEach((item) => collectFromItem(item.AnchorId));

    return Array.from(anchors).map((id) => ({ id }));
};

export const desktopSections = collectAnchors();

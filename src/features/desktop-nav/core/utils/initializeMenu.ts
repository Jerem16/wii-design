import { attachContentToMenu } from "../../data/attachContent";
import { menuItems } from "../../data/menuItems";
import { contentIndex } from "../../data/content/index";
import type { Content } from "../../data/interfaces/content";
import type { MenuItem, MenuLinks, SubItem } from "../../data/interfaces/menu";
import searchQuery from "./searchMenu";

const buildContentIndexSubItems = (
    index: Record<string, Content[]>
): SubItem[] =>
    Object.entries(index).map(([anchorId, content]) => ({
        id: `content-${anchorId.replace(/[^a-z0-9]+/gi, "-")}`,
        title: "",
        AnchorId: anchorId,
        class: "",
        content,
    }));

const buildContentIndexMenuItem = (
    index: Record<string, Content[]>
): MenuItem | null => {
    const subItems = buildContentIndexSubItems(index);
    if (subItems.length === 0) {
        return null;
    }
    return {
        id: "menu-content-index",
        title: "",
        class: "",
        path: "/",
        AnchorId: "#content",
        svg: "Search",
        subItems,
    };
};

const assertSearchIndex = (menuData: MenuLinks): void => {
    if (process.env.NODE_ENV === "production") {
        return;
    }
    const totalEntries = Object.values(contentIndex).reduce(
        (count, items) => count + items.length,
        0
    );
    if (totalEntries === 0) {
        throw new Error("Le contenu desktop est vide pour l'index de recherche.");
    }
    const sanityResults = searchQuery(menuData, "Coaching");
    if (sanityResults.length === 0) {
        throw new Error(
            "La vérification de recherche desktop n'a retourné aucun résultat."
        );
    }
};

export function initializeMenuWithContent(): MenuLinks {
    const menuWithContent = attachContentToMenu(menuItems, contentIndex);
    const contentIndexMenuItem = buildContentIndexMenuItem(contentIndex);
    const menuData: MenuLinks = {
        ...menuWithContent,
        mainLink: contentIndexMenuItem
            ? [...menuWithContent.mainLink, contentIndexMenuItem]
            : menuWithContent.mainLink,
    };
    assertSearchIndex(menuData);
    return menuData;
}

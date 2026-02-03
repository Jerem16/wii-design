import type { MenuLinks, MenuItem } from "../types/menu";
import { HOME_SECTIONS } from "@/features/navigation/core/data/homeSections";
import type { HomeSectionId } from "@/features/navigation/core/data/homeSections";

const homeSectionIds: Record<HomeSectionId, string> = {
    s1: "menu-slider",
    s2: "menu-about",
    s3: "menu-services",
    s4: "menu-contact",
};

const homeSubItems = HOME_SECTIONS.map((section) => ({
    id: homeSectionIds[section.id],
    title: section.label,
    AnchorId: section.anchor,
    class: "",
}));

export const menuItems: MenuLinks = {
    mainLink: [
        {
            id: "menu-home",
            title: "Accueil",
            class: "",
            path: "/",
            AnchorId: "#top",
            svg: "Home",
            subItems: homeSubItems,
        },
        {
            id: "menu-services",
            title: "Services",
            class: "",
            path: "/p1",
            AnchorId: "#top",
            svg: "Services",
            subItems: [
                {
                    id: "menu-without-license",
                    title: "Sans Permis",
                    AnchorId: "#sans-permis",
                    class: "",
                },
                {
                    id: "menu-with-license",
                    title: "Avec Permis",
                    AnchorId: "#avec-permis",
                    class: "",
                },
            ],
        },
        {
            id: "menu-prices",
            title: "Tarifs",
            class: "",
            path: "/p2",
            AnchorId: "#top",
            svg: "Tarifs",
            subItems: [
                {
                    id: "menu-without-license",
                    title: "Débutant",
                    AnchorId: "#novice",
                    class: "",
                },
                {
                    id: "menu-with-license",
                    title: "Confirmé",
                    AnchorId: "#expert",
                    class: "",
                },
            ],
        },
        {
            id: "menu-blog",
            title: "Blog",
            class: "",
            path: "/p1",
            AnchorId: "#top",
            svg: "Blog",
        },
        {
            id: "menu-contact",
            title: "Contact",
            class: "",
            path: "/p2",
            AnchorId: "#expert",
            svg: "Contact",
        },
    ],
};

export type { MenuItem };

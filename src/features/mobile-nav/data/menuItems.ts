import type { MenuLinks, MenuItem } from "../types/menu";

export const menuItems: MenuLinks = {
    mainLink: [
        {
            id: "menu-home",
            title: "Accueil",
            class: "",
            path: "/",
            AnchorId: "#top",
            svg: "Home",
            subItems: [
                {
                    id: "menu-slider",
                    title: "Slider",
                    AnchorId: "#s1",
                    class: "",
                },
                {
                    id: "menu-about",
                    title: "À propos",
                    AnchorId: "#s2",
                    class: "",
                },
                {
                    id: "menu-services",
                    title: "Services",
                    AnchorId: "#s3",
                    class: "",
                },
                {
                    id: "menu-contact",
                    title: "Contact",
                    AnchorId: "#s4",
                    class: "",
                },
            ],
        },
        {
            id: "menu-services",
            title: "Services",
            class: "",
            path: "/services",
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
            title: "Réalisations",
            class: "",
            path: "/achievements",
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
            id: "menu-about",
            title: "À propos",
            class: "",
            path: "/about",
            AnchorId: "#top",
            svg: "Blog",            
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
            id: "menu-contact",
            title: "Contact",
            class: "",
            path: "/contact",
            AnchorId: "#expert",
            svg: "Contact",
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
    ],
};

export type { MenuItem };

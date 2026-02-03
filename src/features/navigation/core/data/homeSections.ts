export type HomeSectionId = "s1" | "s2" | "s3" | "s4" | "sans-permis" | "avec-permis" | "novice" | "expert";
export type HomeAnchor = `#${HomeSectionId}`;

export interface HomeSection {
    id: HomeSectionId;
    anchor: HomeAnchor;
    label: string;
    aliases?: string[];
}

export const HOME_SECTIONS: readonly HomeSection[] = [
    { id: "s1", anchor: "#s1", label: "Slider" },
    { id: "s2", anchor: "#s2", label: "À propos" },
    { id: "s3", anchor: "#s3", label: "Services" },
    { id: "s4", anchor: "#s4", label: "Contact" },
    { id: "sans-permis", anchor: "#sans-permis", label: "Sans Permis" },
    { id: "avec-permis", anchor: "#avec-permis", label: "Avec Permis" },
    { id: "novice", anchor: "#novice", label: "Débutant" },
    { id: "expert", anchor: "#expert", label: "Confirmé" },
] as const;

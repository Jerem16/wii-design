export type HomeSectionId = "s1" | "s2" | "s3" | "s4";
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
] as const;

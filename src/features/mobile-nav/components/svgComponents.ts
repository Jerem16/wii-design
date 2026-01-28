import { memo } from "react";

import TarifsIcon from "@components/99-Svg_Icon/Tarifs";
import HomeIcon from "@components/99-Svg_Icon/Home";
import ServicesIcon from "@components/99-Svg_Icon/Services";
import BlogIcon from "@components/99-Svg_Icon/Blog";
import ContactIcon from "@components/99-Svg_Icon/Contact";

export const svgComponents = {
    Home: memo(HomeIcon),
    Services: memo(ServicesIcon),
    Blog: memo(BlogIcon),
    Tarifs: memo(TarifsIcon),
    Contact: memo(ContactIcon),
} as const;

export type SvgIconName = keyof typeof svgComponents;

"use client";

import React, { lazy, useEffect, useState } from "react";
import Link from "next/link";
import sideIcons from "../../assets/data/sideIcons.json";
import SideIcon from "../99-Svg_Icon/sideBar/SideIcon";
import { idleCallbackPolyfill } from "@utils/functions/functions";
const lazyIconComponents = {
    StrategicFramework: lazy(() =>
        import("../99-Svg_Icon/sideBar/StrategicFramework")
    ),
    Design: lazy(() => import("../99-Svg_Icon/sideBar/Design")),
    Development: lazy(() => import("../99-Svg_Icon/sideBar/Development")),
    DevOps: lazy(() => import("../99-Svg_Icon/sideBar/DevOps")),
    PerfSeo: lazy(() => import("../99-Svg_Icon/sideBar/PerfSeo")),
    SupportFollow: lazy(() => import("../99-Svg_Icon/sideBar/SupportFollow"))
};

function showIconsProgressively(sideIcons, scheduleIconVisibility) {
    const baseDelay = 100;
    sideIcons.forEach((_, i) => {
        const delay =
            i === sideIcons.length - 1 ? baseDelay * i + 50 : baseDelay * i;

        scheduleIconVisibility(i, delay);
    });
}
const SideInterface = () => {
    const [visibleIcons, setVisibleIcons] = useState([]);
    function scheduleIconVisibility(index, delay) {
        setTimeout(() => {
            setVisibleIcons(prev => [...prev, index]);
        }, delay);
    }
    useEffect(() => {
        if (typeof window.requestIdleCallback !== "function") {
            window.requestIdleCallback = idleCallbackPolyfill;
        }

        requestIdleCallback(() => {
            showIconsProgressively(sideIcons, scheduleIconVisibility);
        });
    }, []);

    return (
        <div className="side-nav">
            {sideIcons.map((icon, index) => {
                const IconComponent = lazyIconComponents[icon.name];
                const isVisible = visibleIcons.includes(index);

                return (
                    <Link key={icon.id} title={icon.title} href="">
                        {isVisible ? (
                            <IconComponent alt={icon.alt} />
                        ) : (
                            <SideIcon />
                        )}
                    </Link>
                );
            })}
        </div>
    );
};

export default SideInterface;

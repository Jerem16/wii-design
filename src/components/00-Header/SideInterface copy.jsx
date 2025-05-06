"use client";

import React, { Suspense, lazy, useEffect, useState } from "react";
import Link from "next/link";
import sideIcons from "../../assets/data/sideIcons.json";
import SideBodyIcon from "../99-Svg_Icon/sideBar/SideBodyIcon";
import SideIcon from "../99-Svg_Icon/sideBar/SideIcon";

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

const SideInterface = () => {
    const [visibleIcons, setVisibleIcons] = useState([]);

    useEffect(() => {
        const worker = new Worker(
            new URL("public/workers/iconWorker.js", import.meta.url)
        );
        worker.postMessage({
            count: sideIcons.length,
            baseDelay: 100,
            adjustment: 50
        });

        worker.onmessage = e => {
            const { index } = e.data;
            setVisibleIcons(prev => [...prev, index]);
        };

        return () => {
            worker.terminate();
        };
    }, []);

    return (
        <div className="side-nav">
            {sideIcons.map((icon, index) => {
                const IconComponent = lazyIconComponents[icon.name];
                const isVisible = visibleIcons.includes(index);

                return (
                    <Link key={icon.id} title={icon.title} href="">
                        {isVisible ? (
                            <Suspense
                                fallback={<SideBodyIcon R={null} W={null} />}
                            >
                                <IconComponent alt={icon.alt} />
                            </Suspense>
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

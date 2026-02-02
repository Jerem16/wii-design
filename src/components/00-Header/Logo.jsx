import React, { memo } from "react";
import Link from "next/link";
import LogoContent from "./LogoContent";
import { useIdPrefix } from "@hooks/useIdPrefix";

const Logo = () => {
    const idPrefix = useIdPrefix("logo");

    return (
        <Link
            className="logo"
            data-logo-id={idPrefix}
            href="/"
            title="Aller à la page d'accueil"
        >
            <LogoContent idPrefix={idPrefix} />
        </Link>
    );
};

export default memo(Logo);

import React, { memo } from "react";
import Link from "next/link";
import type { MouseEventHandler } from "react";
import LogoContent from "@/components/00-Header/LogoContent";
import { useIdPrefix } from "@hooks/useIdPrefix";
interface MobileLogoLinkProps {
    onClick: MouseEventHandler<HTMLAnchorElement>;
}

const MobileLogoLink = ({ onClick }: MobileLogoLinkProps) => {
    const idPrefix = useIdPrefix("logo");
    return (
        <Link href="/#top" aria-label="Retour en haut de page" onClick={onClick} className="logoM">
            <LogoContent idPrefix={idPrefix} />
        </Link>
    );
};

export default memo(MobileLogoLink);

import Link from "next/link";
import type { MouseEventHandler } from "react";

interface MobileLogoLinkProps {
    onClick: MouseEventHandler<HTMLAnchorElement>;
}

const MobileLogoLink = ({ onClick }: MobileLogoLinkProps) => {
    return (
        <Link href="/#top" aria-label="Retour en haut de page" onClick={onClick}>
            <img src="/img/logo1.svg" alt="Logo" className="mnav__logo" />
        </Link>
    );
};

export default MobileLogoLink;

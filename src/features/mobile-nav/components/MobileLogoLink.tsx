import type { MouseEventHandler } from "react";
import Logo from "@/components/00-Header/Logo";

interface MobileLogoLinkProps {
    onClick: MouseEventHandler<HTMLAnchorElement>;
}

const MobileLogoLink = ({ onClick }: MobileLogoLinkProps) => {
    return (
        <Logo
            href="/#top"
            ariaLabel="Retour en haut de page"
            title="Retour en haut de page"
            className="mnav__logo"
            onClick={onClick}
        />
    );
};

export default MobileLogoLink;

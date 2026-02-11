import Link from "next/link";
import Frames from "@/frames/Frames";
import ColorShiftOverlay from "@/components/99-Svg_Icon/ColorShiftOverlay";

export default function Home() {
    return (
        <>
            <Frames className="section s1-bg" id="s1">
                <nav aria-label="Routes">
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/achievements">Achievements</Link>
                        </li>
                        <li>
                            <Link href="/connection">Connection</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link href="/informations-legales">
                                Informations légales
                            </Link>
                        </li>
                        <li>
                            <Link href="/mentions-legales">
                                Mentions légales
                            </Link>
                        </li>
                        <li>
                            <Link href="/reservation">Réservation</Link>
                        </li>
                        <li>
                            <Link href="/search">Search</Link>
                        </li>
                        <li>
                            <Link href="/services">Services</Link>
                        </li>
                        <li>
                            <Link href="/rmdl/etape-1">
                                RMDL — Exemple (slug: etape-1)
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div
                    style={{
                        position: "relative",
                        minHeight: 240,
                        overflow: "hidden",
                        borderRadius: 16,
                        margin: "24px",
                        padding: "24px",
                        border: "1px solid rgba(255,255,255,0.16)"
                    }}
                >
                    <ColorShiftOverlay shape="rect" zIndex={0} />
                    <div
                        style={{
                            position: "relative",
                            zIndex: 1,
                            display: "grid",
                            gap: 8,
                            maxWidth: 520
                        }}
                    >
                        <h2 style={{ margin: 0 }}>
                            Bloc pilote — ColorShiftOverlay
                        </h2>
                        <p style={{ margin: 0 }}>
                            Ce conteneur démontre l&apos;overlay SVG en absolu,
                            piloté uniquement par les animations déjà présentes
                            dans deferCss.css.
                        </p>
                    </div>
                </div>
            </Frames>

            <Frames className="section s2-bg" id="s2" />
            <Frames className="section" id="s3" />
            <Frames className="section" id="s4" />
        </>
    );
}

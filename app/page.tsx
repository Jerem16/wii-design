import Link from "next/link";
import Frames from "@/frames/Frames";

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
            </Frames>

            <Frames className="section s2-bg" id="s2" />
            <Frames className="section" id="s3" />
            <Frames className="section" id="s4" />
        </>
    );
}
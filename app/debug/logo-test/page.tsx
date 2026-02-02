import Logo from "@components/00-Header/Logo.jsx";

const LogoTestPage = () => {
    return (
        <div
            style={{
                padding: "48px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
            }}
        >
            <header>
                <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>
                    Logo Desktop — Page de test
                </h1>
                <p style={{ maxWidth: "760px", lineHeight: 1.5 }}>
                    Cette page force l&apos;affichage simultané du logo Desktop et des
                    icônes de la sidebar afin de détecter les collisions d&apos;IDs
                    SVG et les problèmes de scope du color shift.
                </p>
            </header>

            <section
                style={{
                    display: "flex",
                    gap: "32px",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ fontWeight: 600 }}>Logo supplémentaire #1</span>
                    <Logo />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ fontWeight: 600 }}>Logo supplémentaire #2</span>
                    <Logo />
                </div>
            </section>

        </div>
    );
};

export default LogoTestPage;

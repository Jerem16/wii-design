const MetaData = {
    metadataBase: new URL("https://wii-design.com/"),
    title: {
        template: "%s | wii-design",
        default: "Wii-Design"
    },
    description:
        "Création de sites web rapides et sécurisés. Spécialiste UX/UI & SEO. Bénéficiez d'un accompagnement complet de la conception de votre projet au déploiement de votre site. ",
    authors: [{ name: "Votre Nom" }],
    robots: {
        index: true,
        follow: true
    },
    openGraph: {
        title: "Wii-Design",
        description: `
      Wii-Design crée des applications web évolutives, optimisées et accessibles, de la conception à la mise en production.
      Je vous accompagne avec des solutions sur-mesure, en intégrant des technologies modernes telles que React.js, Next.js et Tailwind CSS.
    `,
        url: "https://wii-design.com/",
        siteName: "Wii-Design",
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "/img/about/avatar.svg",
                width: 225,
                height: 225,
                alt: "Avatar du créateur du site"
            },
            {
                url: "https://www.example.com/photo-fb",
                width: 284,
                height: 267,
                alt: "Logo de Wii-Design"
            }
        ]
    },
    icons: {
        apple: [
            {
                url: "img/favicon/icons/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png"
            },
            {
                url: "img/favicon/icons/logo.svg",
                sizes: "152x152",
                type: "image/svg+xml"
            },
            {
                url: "img/favicon/icons/logo.svg",
                sizes: "180x180",
                type: "image/svg+xml"
            },
            {
                url: "img/favicon/icons/favicon-120x120.png",
                sizes: "120x120",
                type: "image/png"
            },
            {
                url: "img/favicon/icons/favicon-152x152.png",
                sizes: "152x152",
                type: "image/png"
            }
        ],

        icon: [
            // { url: "img/favicon/icons/logo.svg", type: "image/svg+xml" },
            { url: "img/favicon/icons/logo.svg", type: "image/svg+xml" },
            {
                url: "img/favicon/icons/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png"
            },
            {
                url: "img/favicon/icons/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png"
            },
            {
                url: "img/favicon/icons/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                url: "img/favicon/icons/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            },
            {
                url: "img/favicon/icons/logo.svg",
                sizes: "48x48",
                type: "image/svg+xml"
            }
        ]
    },
    alternates: {
        canonical: "https://wii-design.com/",
        media: {
            "only screen and (max-width: 900px)":
                "https://mobile.wii-design.com/",
            "only screen and (min-width: 900px)":
                "https://desktop.wii-design.com/"
        }
    }
};
export default MetaData;

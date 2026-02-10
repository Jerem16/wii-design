import Link from "next/link";

type RouteEntry = {
  url: string;
  page: string;
  href?: string;
  layout?: string;
  loading?: string;
  error?: string;
  notFound?: string;
};

type ApiEntry = {
  url: string;
  file: string;
};

const pageRoutes: RouteEntry[] = [
  { url: "/", page: "app/page.tsx", layout: "app/layout.tsx" },
  {
    url: "/about",
    page: "app/about/page.tsx",
    loading: "app/about/loading.tsx",
    error: "app/about/error.tsx",
  },
  {
    url: "/achievements",
    page: "app/achievements/page.tsx",
    loading: "app/achievements/loading.tsx",
    error: "app/achievements/error.tsx",
  },
  {
    url: "/connection",
    page: "app/connection/page.tsx",
    loading: "app/connection/loading.tsx",
    error: "app/connection/error.tsx",
  },
  {
    url: "/contact",
    page: "app/contact/page.tsx",
    loading: "app/contact/loading.tsx",
    error: "app/contact/error.tsx",
  },
  { url: "/debug/logo-test", page: "app/debug/logo-test/page.tsx" },
  {
    url: "/informations-legales",
    page: "app/informations-legales/page.tsx",
    loading: "app/informations-legales/loading.tsx",
    error: "app/informations-legales/error.tsx",
  },
  {
    url: "/mentions-legales",
    page: "app/mentions-legales/page.tsx",
    loading: "app/mentions-legales/loading.tsx",
    error: "app/mentions-legales/error.tsx",
  },
  {
    url: "/reservation",
    page: "app/reservation/page.tsx",
    loading: "app/reservation/loading.tsx",
    error: "app/reservation/error.tsx",
  },
  {
    url: "/rmdl/[slug]",
    href: "/rmdl/exemple",
    page: "app/rmdl/[slug]/page.tsx",
  },
  {
    url: "/search",
    page: "app/search/page.tsx",
    loading: "app/search/loading.tsx",
    error: "app/search/error.tsx",
  },
  {
    url: "/services",
    page: "app/services/page.tsx",
    loading: "app/services/loading.tsx",
    error: "app/services/error.tsx",
  },
];

const apiRoutes: ApiEntry[] = [];

function getIndicators(route: RouteEntry): string {
  const flags = [
    route.loading ? "loading" : null,
    route.error ? "error" : null,
    route.notFound ? "not-found" : null,
  ].filter(Boolean);

  return flags.length > 0 ? flags.join(", ") : "aucun";
}

export default function DebugRoutesPage() {
  return (
    <main>
      <h1>Debug routes</h1>
      <p>Inventaire des pages détectées dans app/.</p>

      <h2>Pages ({pageRoutes.length})</h2>
      <ul>
        {pageRoutes.map((route) => (
          <li key={route.url}>
            {route.href ? <Link href={route.href}>{route.url}</Link> : route.url}
            {" — "}
            indicateurs: {getIndicators(route)}
          </li>
        ))}
      </ul>

      <h2>API ({apiRoutes.length})</h2>
      {apiRoutes.length === 0 ? (
        <p>Aucune API route détectée.</p>
      ) : (
        <ul>
          {apiRoutes.map((apiRoute) => (
            <li key={apiRoute.url}>
              {apiRoute.url} — {apiRoute.file}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

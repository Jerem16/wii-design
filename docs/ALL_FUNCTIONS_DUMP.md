# ALL FUNCTIONS DUMP

---

```ts
// SOURCE: amplify/data/resource.ts | Lines: 14-14
// KIND: ArrowFunction
(allow) => [allow.publicApiKey()]
```

---

```ts
// SOURCE: app/about/error.tsx | Lines: 3-5
// KIND: FunctionDeclaration
function Error404() {
    return <Error />;
}
```

---

```ts
// SOURCE: app/about/loading.tsx | Lines: 2-4
// KIND: FunctionDeclaration
function Loading() {
    return <Loader />;
}
```

---

```ts
// SOURCE: app/about/page.tsx | Lines: 7-27
// KIND: FunctionDeclaration
async function Page() {
    return (
        <>
            <Frames className="section" id="sans-permis">
                <h2>À propos</h2>
                <div className="s1">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit aliquid provident magnam, delectus nobis est sunt
                        iste aut at error assumenda voluptas, harum sed
                        consequuntur voluptate soluta deleniti voluptatum
                        consequatur.
                    </p>
                </div>
            </Frames>
            <Frames className="section" id="avec-permis">
                <></>
            </Frames>
        </>
    );
}
```

---

```ts
// SOURCE: app/achievements/error.tsx | Lines: 3-5
// KIND: FunctionDeclaration
function Error404() {
    return <Error />;
}
```

---

```ts
// SOURCE: app/achievements/loading.tsx | Lines: 2-4
// KIND: FunctionDeclaration
function Loading() {
    return <Loader />;
}
```

---

```ts
// SOURCE: app/achievements/page.tsx | Lines: 6-26
// KIND: FunctionDeclaration
async function Page() {
    return (
        <>
            <Frames className="section" id="novice">
                <h2>Réalisations</h2>
                <div className="s1">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit aliquid provident magnam, delectus nobis est sunt
                        iste aut at error assumenda voluptas, harum sed
                        consequuntur voluptate soluta deleniti voluptatum
                        consequatur.
                    </p>
                </div>
            </Frames>
            <Frames className="section" id="expert">
                <></>
            </Frames>
        </>
    );
}
```

---

```ts
// SOURCE: app/connection/error.tsx | Lines: 3-12
// KIND: FunctionDeclaration
function Error404() {
    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <div className="s1">
                <h2>Error</h2>
            </div>
        </section>
    );
}
```

---

```ts
// SOURCE: app/connection/loading.tsx | Lines: 2-4
// KIND: FunctionDeclaration
function Loading() {
    return <Loader />;
}
```

---

```ts
// SOURCE: app/connection/page.tsx | Lines: 16-23
// KIND: FunctionDeclaration
async function Page() {
    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <Loader />
        </section>
    );
}
```

---

```ts
// SOURCE: app/contact/error.tsx | Lines: 3-5
// KIND: FunctionDeclaration
function Error404() {
    return <Error />;
}
```

---

```ts
// SOURCE: app/contact/loading.tsx | Lines: 2-4
// KIND: FunctionDeclaration
function Loading() {
    return <Loader />;
}
```

---

```ts
// SOURCE: app/contact/page.tsx | Lines: 6-26
// KIND: FunctionDeclaration
async function Page() {
    return (
        <>
            <Frames className="section" id="novice">
                <h2>Contact</h2>
                <div className="s1">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit aliquid provident magnam, delectus nobis est sunt
                        iste aut at error assumenda voluptas, harum sed
                        consequuntur voluptate soluta deleniti voluptatum
                        consequatur.
                    </p>
                </div>
            </Frames>
            <Frames className="section" id="expert">
                <></>
            </Frames>
        </>
    );
}
```

---

```ts
// SOURCE: app/informations-legales/error.tsx | Lines: 3-5
// KIND: FunctionDeclaration
function Error404() {
    return <Error />;
}
```

---

```ts
// SOURCE: app/informations-legales/loading.tsx | Lines: 2-4
// KIND: FunctionDeclaration
function Loading() {
    return <Loader />;
}
```

---

```ts
// SOURCE: app/informations-legales/page.tsx | Lines: 44-55
// KIND: FunctionDeclaration
async function Page() {
    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <div className="s1">
                <h1 className="pp_title">Informations légales</h1>
                <TermsOfUse />
                <PrivacyPolicy />
            </div>
        </section>
    );
}
```

---

```ts
// SOURCE: app/layout.tsx | Lines: 17-67
// KIND: FunctionDeclaration
function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Carlito:wght@400;700&family=Roboto:wght@400;500;700&display=swap"
                />
                <link
                    rel="preload"
                    href="/img/logo1.svg"
                    as="image"
                    type="image/svg+xml"
                />
                <link rel="preload" href="/deferCss.css" as="style" />
                <link
                    rel="preload"
                    href="/desktopDeferNav.css"
                    as="style"
                    media="(min-width: 1024px)"
                />
                <link
                    rel="stylesheet"
                    href="/deferCss.css"
                    fetchPriority="low"
                />
                <link
                    rel="stylesheet"
                    href="/desktopDeferNav.css"
                    media="(min-width: 1024px)"
                    fetchPriority="low"
                />
            </head>
            <body className={`${Roboto.variable}`}>
                <NavInterface />
                <div className="fixed-menu" id="top"></div>
                <main>{children}</main>
            </body>
        </html>
    );
}
```

---

```ts
// SOURCE: app/mentions-legales/error.tsx | Lines: 3-5
// KIND: FunctionDeclaration
function Error404() {
    return <Error />;
}
```

---

```ts
// SOURCE: app/mentions-legales/loading.tsx | Lines: 2-4
// KIND: FunctionDeclaration
function Loading() {
    return <Loader />;
}
```

---

```ts
// SOURCE: app/mentions-legales/page.tsx | Lines: 44-54
// KIND: FunctionDeclaration
async function Page() {
    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <div className="s1">
                <h1 className="pp_title">Mentions légales</h1>
                <LegalNotices />
            </div>
        </section>
    );
}
```

---

```ts
// SOURCE: app/page.tsx | Lines: 4-66
// KIND: FunctionDeclaration
function Home() {
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
                            <Link href="/debug/logo-test">
                                Debug — Logo test
                            </Link>
                        </li>
                        <li>
                            <Link href="/debug/routes">Debug — Routes</Link>
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
```

---

```ts
// SOURCE: app/reservation/Cone.jsx | Lines: 5-22
// KIND: ArrowFunction
({ title }) => {
    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div className="f">
                <h1>{title}</h1>
                <p>Cette page est en construction</p>
            </div>
            <TrafficCone />
        </div>
    );
}
```

---

```ts
// SOURCE: app/reservation/Cone.jsx | Lines: 23-23
// KIND: ArrowFunction
() => Promise.resolve(Cone)
```

---

```ts
// SOURCE: app/reservation/error.tsx | Lines: 3-12
// KIND: FunctionDeclaration
function Error404() {
    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <div className="s1">
                <h2>Error</h2>
            </div>
        </section>
    );
}
```

---

```ts
// SOURCE: app/reservation/loading.tsx | Lines: 2-6
// KIND: FunctionDeclaration
function Loading() {
    return (
            <Loader />
    );
}
```

---

```ts
// SOURCE: app/reservation/page.tsx | Lines: 16-28
// KIND: FunctionDeclaration
async function Page() {
    return (
        <section className="section" id="hs">
            <div className="fixed-menu"></div>
            <h2>Réservation</h2>
            <p>
                Cette section n’est pas encore disponible. Merci de votre
                patience.
            </p>
            <Loader />
        </section>
    );
}
```

---

```ts
// SOURCE: app/rmdl/[slug]/page.tsx | Lines: 12-22
// KIND: FunctionDeclaration
async function Page({ params }: Props): Promise<ReactElement> {
  const { slug } = await params;

  const loader: RmdlPageLoader | undefined = RMDL_PAGES[slug];
  if (!loader) notFound();

  const mod: RmdlPageModule = await loader();
  const Generated = mod.default;

  return <Generated />;
}
```

---

```ts
// SOURCE: app/search/SearchPageContent.tsx | Lines: 9-109
// KIND: FunctionDeclaration
function SearchPageContent() {
    const router = useRouter();
    const { results, setResults, menuData, setQuery } = useSearch();
    const [validQuery, setValidQuery] = useState<string>("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [storedSlideRef, setStoredSlideRef] = useSessionStorage<number>(
        "slideRef",
        0
    );
    const searchParams = useSearchParams();
    const badKeyWord = searchParams.get("badKeyWord");
    const queryFromUrl = searchParams.get("query");

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    useEffect(() => {
        if (!queryFromUrl) {
            return;
        }

        const hasMenuData =
            !!menuData &&
            typeof menuData === "object" &&
            Array.isArray(menuData.mainLink);

        if (queryFromUrl !== validQuery) {
            setValidQuery(queryFromUrl);
            setQuery(queryFromUrl);
        }

        if (hasMenuData) {
            const searchResults = searchQuery(menuData, queryFromUrl);
            setResults(searchResults);
        }
    }, [queryFromUrl, menuData, validQuery, setQuery, setResults]);

    const resultsCount = results.length;
    const validSearch = `${resultsCount} résultat${
        resultsCount > 1 ? "s" : ""
    } de recherche pour : "${validQuery}"`;
    const inValidSearch = `0 résultat pour "${badKeyWord}"`;
    const searchMessage = badKeyWord ? inValidSearch : validSearch;

    const uniqueResults = useMemo(() => {
        return results.filter(
            (result, index, self) =>
                index ===
                self.findIndex(
                    (r) =>
                        r.path === result.path &&
                        r.text.trim() === result.text.trim()
                )
        );
    }, [results]);

    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <h2>{searchMessage}</h2>
            <div className="s1">
                {!badKeyWord ? (
                    uniqueResults.map((result) => (
                        <div key={`${result.path}-${result.text}`}>
                            <button
                                className="result-link"
                                onClick={() => {
                                    if (result.go) {
                                        const slideRef = result.go.split(
                                            "="
                                        )[1]; // Extraction de `slideRef`
                                        setStoredSlideRef(result.slideRef); // Stockage dans le localStorage
                                        const queryString = createQueryString(
                                            "slideRef",
                                            slideRef
                                        );
                                        router.push(
                                            `${result.path}?${queryString}`
                                        ); // Navigation
                                    } else {
                                        router.push(result.path);
                                    }
                                }}
                            >
                                {result.text}
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Aucun résultat à afficher.</p>
                )}
            </div>
        </section>
    );
}
```

---

```ts
// SOURCE: app/search/SearchPageContent.tsx | Lines: 23-27
// KIND: ArrowFunction
(name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        }
```

---

```ts
// SOURCE: app/search/SearchPageContent.tsx | Lines: 31-50
// KIND: ArrowFunction
() => {
        if (!queryFromUrl) {
            return;
        }

        const hasMenuData =
            !!menuData &&
            typeof menuData === "object" &&
            Array.isArray(menuData.mainLink);

        if (queryFromUrl !== validQuery) {
            setValidQuery(queryFromUrl);
            setQuery(queryFromUrl);
        }

        if (hasMenuData) {
            const searchResults = searchQuery(menuData, queryFromUrl);
            setResults(searchResults);
        }
    }
```

---

```ts
// SOURCE: app/search/SearchPageContent.tsx | Lines: 59-69
// KIND: ArrowFunction
() => {
        return results.filter(
            (result, index, self) =>
                index ===
                self.findIndex(
                    (r) =>
                        r.path === result.path &&
                        r.text.trim() === result.text.trim()
                )
        );
    }
```

---

```ts
// SOURCE: app/search/SearchPageContent.tsx | Lines: 61-67
// KIND: ArrowFunction
(result, index, self) =>
                index ===
                self.findIndex(
                    (r) =>
                        r.path === result.path &&
                        r.text.trim() === result.text.trim()
                )
```

---

```ts
// SOURCE: app/search/SearchPageContent.tsx | Lines: 64-66
// KIND: ArrowFunction
(r) =>
                        r.path === result.path &&
                        r.text.trim() === result.text.trim()
```

---

```ts
// SOURCE: app/search/SearchPageContent.tsx | Lines: 77-102
// KIND: ArrowFunction
(result) => (
                        <div key={`${result.path}-${result.text}`}>
                            <button
                                className="result-link"
                                onClick={() => {
                                    if (result.go) {
                                        const slideRef = result.go.split(
                                            "="
                                        )[1]; // Extraction de `slideRef`
                                        setStoredSlideRef(result.slideRef); // Stockage dans le localStorage
                                        const queryString = createQueryString(
                                            "slideRef",
                                            slideRef
                                        );
                                        router.push(
                                            `${result.path}?${queryString}`
                                        ); // Navigation
                                    } else {
                                        router.push(result.path);
                                    }
                                }}
                            >
                                {result.text}
                            </button>
                        </div>
                    )
```

---

```ts
// SOURCE: app/search/SearchPageContent.tsx | Lines: 81-97
// KIND: ArrowFunction
() => {
                                    if (result.go) {
                                        const slideRef = result.go.split(
                                            "="
                                        )[1]; // Extraction de `slideRef`
                                        setStoredSlideRef(result.slideRef); // Stockage dans le localStorage
                                        const queryString = createQueryString(
                                            "slideRef",
                                            slideRef
                                        );
                                        router.push(
                                            `${result.path}?${queryString}`
                                        ); // Navigation
                                    } else {
                                        router.push(result.path);
                                    }
                                }
```

---

```ts
// SOURCE: app/search/error.tsx | Lines: 3-12
// KIND: FunctionDeclaration
function Error404() {
    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <div className="s1">
                <h2>Error</h2>
            </div>
        </section>
    );
}
```

---

```ts
// SOURCE: app/search/loading.tsx | Lines: 2-6
// KIND: FunctionDeclaration
function Loading() {
    return (
            <Loader />
    );
}
```

---

```ts
// SOURCE: app/search/page.tsx | Lines: 8-14
// KIND: FunctionDeclaration
function Page() {
    return (
        <SearchProvider>
            <SearchPageContent />
        </SearchProvider>
    );
}
```

---

```ts
// SOURCE: app/services/error.tsx | Lines: 3-5
// KIND: FunctionDeclaration
function Error404() {
    return <Error />;
}
```

---

```ts
// SOURCE: app/services/loading.tsx | Lines: 2-4
// KIND: FunctionDeclaration
function Loading() {
    return <Loader />;
}
```

---

```ts
// SOURCE: app/services/page.tsx | Lines: 7-27
// KIND: FunctionDeclaration
async function Page() {
    return (
        <>
            <Frames className="section" id="sans-permis">
                <h2>Services</h2>
                <div className="s1">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit aliquid provident magnam, delectus nobis est sunt
                        iste aut at error assumenda voluptas, harum sed
                        consequuntur voluptate soluta deleniti voluptatum
                        consequatur.
                    </p>
                </div>
            </Frames>
            <Frames className="section" id="avec-permis">
                <></>
            </Frames>
        </>
    );
}
```

---

```ts
// SOURCE: generate-favicons.js | Lines: 12-19
// KIND: ArrowFunction
size => {
    sharp(svgPath)
        .resize(size, size)
        .png()
        .toFile(path.join(outputDir, `favicon-${size}x${size}.png`))
        .then(() => console.log(`✅ favicon-${size}x${size}.png généré`))
        .catch(err => console.error(`Erreur pour la taille ${size}:`, err));
}
```

---

```ts
// SOURCE: generate-favicons.js | Lines: 17-17
// KIND: ArrowFunction
() => console.log(`✅ favicon-${size}x${size}.png généré`)
```

---

```ts
// SOURCE: generate-favicons.js | Lines: 18-18
// KIND: ArrowFunction
err => console.error(`Erreur pour la taille ${size}:`, err)
```

---

```ts
// SOURCE: generate-favicons.js | Lines: 22-26
// KIND: ArrowFunction
size => {
    console.log(
        `<link rel="icon" type="image/png" sizes="${size}x${size}" href="img/favicon/icons/favicon-${size}x${size}.png">`
    );
}
```

---

```ts
// SOURCE: public/workers/delayWorker.js | Lines: 1-6
// KIND: FunctionExpression
function(e) {
    const delay = e.data;
    setTimeout(() => {
        self.postMessage("done");
    }, delay);
}
```

---

```ts
// SOURCE: public/workers/delayWorker.js | Lines: 3-5
// KIND: ArrowFunction
() => {
        self.postMessage("done");
    }
```

---

```ts
// SOURCE: public/workers/iconWorker.js | Lines: 2-13
// KIND: FunctionExpression
function (e) {
    const { count, baseDelay, adjustment } = e.data;

    for (let i = 0; i < count; i++) {
        const isLast = i === count - 1;
        const delay = isLast ? baseDelay * i - adjustment : baseDelay * i;

        setTimeout(() => {
            self.postMessage({ index: i });
        }, delay);
    }
}
```

---

```ts
// SOURCE: public/workers/iconWorker.js | Lines: 9-11
// KIND: ArrowFunction
() => {
            self.postMessage({ index: i });
        }
```

---

```ts
// SOURCE: public/workers/scrollSmoothWorker.js | Lines: 1-13
// KIND: FunctionExpression
function (event) {
    const { start, end, duration, startTime, currentTime } = event.data;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeInOutCubic =
        progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 4) / 2;

    const newScrollY = start + (end - start) * easeInOutCubic;

    self.postMessage({ newScrollY, progress });
}
```

---

```ts
// SOURCE: public/workers/scrollWorker.js | Lines: 1-19
// KIND: FunctionExpression
function(event) {
    const { sections, scrollY } = event.data;
    let currentSectionId = "";

    // Déterminer la section visible
    sections.forEach(({ id }) => {
        const sectionTop = event.data.positions[id]?.top;
        const sectionHeight = event.data.positions[id]?.height;
        const isInView =
            scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight;

        if (isInView) {
            currentSectionId = id;
        }
    });

    // Retourner la section active au main thread
    self.postMessage({ currentSectionId });
}
```

---

```ts
// SOURCE: public/workers/scrollWorker.js | Lines: 6-15
// KIND: ArrowFunction
({ id }) => {
        const sectionTop = event.data.positions[id]?.top;
        const sectionHeight = event.data.positions[id]?.height;
        const isInView =
            scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight;

        if (isInView) {
            currentSectionId = id;
        }
    }
```

---

```ts
// SOURCE: public/workers/timeoutWorker.js | Lines: 4-23
// KIND: FunctionExpression
function(event) {
    const { type, delay } = event.data;

    if (type === "start" && !isRunning) {
        isRunning = true;
        self.postMessage({ type: "status", isRunning });

        timeoutId = setTimeout(() => {
            self.postMessage({ type: "timeoutComplete" });
            isRunning = false;
            self.postMessage({ type: "status", isRunning });
        }, delay);
    }

    if (type === "clear") {
        clearTimeout(timeoutId);
        isRunning = false;
        self.postMessage({ type: "status", isRunning });
    }
}
```

---

```ts
// SOURCE: public/workers/timeoutWorker.js | Lines: 11-15
// KIND: ArrowFunction
() => {
            self.postMessage({ type: "timeoutComplete" });
            isRunning = false;
            self.postMessage({ type: "status", isRunning });
        }
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 25-27
// KIND: ArrowFunction
(filePath: string): boolean => {
    return CODE_EXTENSIONS.has(path.extname(filePath));
}
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 29-47
// KIND: ArrowFunction
async (dirPath: string): Promise<string[]> => {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const files: string[] = [];

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            if (!IGNORE_DIRS.has(entry.name)) {
                files.push(...(await listFiles(fullPath)));
            }
            continue;
        }
        if (entry.isFile() && isCodeFile(fullPath)) {
            files.push(fullPath);
        }
    }

    return files;
}
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 49-55
// KIND: ArrowFunction
async (filePath: string): Promise<string> => {
    try {
        return await fs.readFile(filePath, "utf8");
    } catch {
        return "";
    }
}
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 57-76
// KIND: ArrowFunction
(content: string): { staticImports: string[]; dynamicImports: string[] } => {
    const staticImports: string[] = [];
    const dynamicImports: string[] = [];
    const staticRegex = /(?:import|export)\s[^"']*?from\s*["']([^"']+)["']/g;
    const requireRegex = /require\(\s*["']([^"']+)["']\s*\)/g;
    const dynamicRegex = /import\(\s*["']([^"']+)["']\s*\)/g;

    let match: RegExpExecArray | null = null;
    while ((match = staticRegex.exec(content)) !== null) {
        staticImports.push(match[1]);
    }
    while ((match = requireRegex.exec(content)) !== null) {
        staticImports.push(match[1]);
    }
    while ((match = dynamicRegex.exec(content)) !== null) {
        dynamicImports.push(match[1]);
    }

    return { staticImports, dynamicImports };
}
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 78-88
// KIND: ArrowFunction
(content: string): string[] => {
    const matches: string[] = [];
    const workerRegex = /\/workers\/[A-Za-z0-9._-]+/g;
    let match: RegExpExecArray | null = null;

    while ((match = workerRegex.exec(content)) !== null) {
        matches.push(match[0]);
    }

    return matches;
}
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 90-106
// KIND: ArrowFunction
async (): Promise<string[]> => {
    const appDir = path.join(ROOT, "app");
    try {
        const files = await listFiles(appDir);
        return files
            .map((file) => path.relative(ROOT, file))
            .filter((file) =>
                file.includes("/app/") &&
                (file.endsWith("page.tsx") ||
                    file.endsWith("layout.tsx") ||
                    file.endsWith("route.ts") ||
                    file.endsWith("template.tsx"))
            );
    } catch {
        return [];
    }
}
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 95-95
// KIND: ArrowFunction
(file) => path.relative(ROOT, file)
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 96-101
// KIND: ArrowFunction
(file) =>
                file.includes("/app/") &&
                (file.endsWith("page.tsx") ||
                    file.endsWith("layout.tsx") ||
                    file.endsWith("route.ts") ||
                    file.endsWith("template.tsx"))
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 108-175
// KIND: ArrowFunction
async (): Promise<AuditOutput> => {
    const files: string[] = [];
    for (const dir of SCAN_DIRS) {
        const fullPath = path.join(ROOT, dir);
        try {
            files.push(...(await listFiles(fullPath)));
        } catch {
            // ignore missing dirs
        }
    }

    const staticImports: Record<string, string[]> = {};
    const dynamicImports: Record<string, string[]> = {};
    const workerStringRefs: WorkerReference[] = [];

    for (const file of files) {
        const content = await readFileSafe(file);
        if (!content) continue;

        const { staticImports: staticRefs, dynamicImports: dynamicRefs } = collectImports(content);
        if (staticRefs.length > 0) {
            staticImports[path.relative(ROOT, file)] = staticRefs;
        }
        if (dynamicRefs.length > 0) {
            dynamicImports[path.relative(ROOT, file)] = dynamicRefs;
        }

        const workerRefs = collectWorkerStrings(content);
        if (workerRefs.length > 0) {
            workerStringRefs.push({
                file: path.relative(ROOT, file),
                matches: workerRefs,
            });
        }
    }

    const packageJsonPath = path.join(ROOT, "package.json");
    const packageScripts: Record<string, string> = {};
    const packageJsonContent = await readFileSafe(packageJsonPath);
    if (packageJsonContent) {
        try {
            const parsed = JSON.parse(packageJsonContent) as { scripts?: Record<string, string> };
            if (parsed.scripts) {
                Object.assign(packageScripts, parsed.scripts);
            }
        } catch {
            // ignore parse errors
        }
    }

    const nextConfigContent = await readFileSafe(path.join(ROOT, "next.config.ts"));
    const nextConfigMatches = nextConfigContent
        ? nextConfigContent.split("\n").filter((line) => line.includes("workers"))
        : [];

    const appRouterFiles = await listAppRouterFiles();

    return {
        generatedAt: new Date().toISOString(),
        filesScanned: files.map((file) => path.relative(ROOT, file)),
        staticImports,
        dynamicImports,
        workerStringRefs,
        packageScripts,
        nextConfigMatches,
        appRouterFiles,
    };
}
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 160-160
// KIND: ArrowFunction
(line) => line.includes("workers")
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 167-167
// KIND: ArrowFunction
(file) => path.relative(ROOT, file)
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 177-205
// KIND: ArrowFunction
async (output: AuditOutput): Promise<void> => {
    const outputDir = path.join(ROOT, "docs");
    await fs.mkdir(outputDir, { recursive: true });

    const jsonPath = path.join(outputDir, "audit-dead-code.generated.json");
    await fs.writeFile(jsonPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");

    const markdownPath = path.join(outputDir, "audit-dead-code.generated.md");
    const summaryLines = [
        "# Audit dead code — génération automatique",
        "",
        `Date: ${output.generatedAt}`,
        "",
        `Fichiers scannés: ${output.filesScanned.length}`,
        `Fichiers avec imports statiques: ${Object.keys(output.staticImports).length}`,
        `Fichiers avec imports dynamiques: ${Object.keys(output.dynamicImports).length}`,
        `Références \"/workers/\": ${output.workerStringRefs.length}`,
        "",
        "## Fichiers app router détectés",
        ...output.appRouterFiles.map((file) => `- ${file}`),
        "",
        "## Références workers (string) — aperçu",
        ...output.workerStringRefs.flatMap((entry) =>
            entry.matches.map((match) => `- ${entry.file}: ${match}`)
        ),
    ];

    await fs.writeFile(markdownPath, `${summaryLines.join("\n")}\n`, "utf8");
}
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 196-196
// KIND: ArrowFunction
(file) => `- ${file}`
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 199-200
// KIND: ArrowFunction
(entry) =>
            entry.matches.map((match) => `- ${entry.file}: ${match}`)
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 200-200
// KIND: ArrowFunction
(match) => `- ${entry.file}: ${match}`
```

---

```ts
// SOURCE: scripts/audit-dead-code.ts | Lines: 209-214
// KIND: ArrowFunction
(error: unknown) => {
        const message = error instanceof Error ? error.message : "Erreur inconnue";
        // eslint-disable-next-line no-console
        console.error("Audit dead code échoué:", message);
        process.exit(1);
    }
```

---

```ts
// SOURCE: scripts/rmdl-clean.ts | Lines: 9-36
// KIND: FunctionDeclaration
async function main(): Promise<void> {
    await fs.rm(OUT_ROOT, { recursive: true, force: true });
    await fs.mkdir(path.join(OUT_ROOT, "pages"), { recursive: true });

    await fs.writeFile(
        path.join(OUT_ROOT, "manifest.ts"),
        [
            "/**",
            " * MANIFEST RMDL (Option A) — stub (clean).",
            " * Ne pas modifier à la main.",
            " */",
            "",
            'import type React from "react";',
            "export type RmdlPageModule = Readonly<{ default: React.ComponentType }>;",
            "export type RmdlPageLoader = () => Promise<RmdlPageModule>;",
            "",
            "export const RMDL_PAGES: Readonly<Record<string, RmdlPageLoader>> = {} as const;",
            "",
            "export async function loadRmdlPage(slug: string): Promise<RmdlPageModule | null> {",
            "  const loader = RMDL_PAGES[slug];",
            "  if (!loader) return null;",
            "  return loader();",
            "}",
            ""
        ].join("\n"),
        "utf-8"
    );
}
```

---

```ts
// SOURCE: scripts/rmdl-to-tsx.ts | Lines: 21-23
// KIND: FunctionDeclaration
function slugFromFilename(filename: string): string {
  return filename.replace(/\.rmdl$/i, "");
}
```

---

```ts
// SOURCE: scripts/rmdl-to-tsx.ts | Lines: 25-27
// KIND: FunctionDeclaration
async function ensureDir(dir: string): Promise<void> {
  await fs.mkdir(dir, { recursive: true });
}
```

---

```ts
// SOURCE: scripts/rmdl-to-tsx.ts | Lines: 29-34
// KIND: FunctionDeclaration
async function listRmdlFiles(): Promise<ReadonlyArray<string>> {
  const entries = await fs.readdir(CONTENT_ROOT, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".rmdl"))
    .map((e) => e.name);
}
```

---

```ts
// SOURCE: scripts/rmdl-to-tsx.ts | Lines: 32-32
// KIND: ArrowFunction
(e) => e.isFile() && e.name.endsWith(".rmdl")
```

---

```ts
// SOURCE: scripts/rmdl-to-tsx.ts | Lines: 33-33
// KIND: ArrowFunction
(e) => e.name
```

---

```ts
// SOURCE: scripts/rmdl-to-tsx.ts | Lines: 36-60
// KIND: FunctionDeclaration
function makeManifest(slugs: ReadonlyArray<string>): string {
  const lines: string[] = [];
  lines.push("/**");
  lines.push(" * MANIFEST RMDL (Option A) — généré");
  lines.push(" * Ne pas modifier à la main.");
  lines.push(" */");
  lines.push("");
  lines.push('import type React from "react";');
  lines.push('export type RmdlPageModule = Readonly<{ default: React.ComponentType }>;');
  lines.push("export type RmdlPageLoader = () => Promise<RmdlPageModule>;");
  lines.push("");
  lines.push("export const RMDL_PAGES: Readonly<Record<string, RmdlPageLoader>> = {");
  for (const slug of slugs) {
    lines.push(`  "${slug}": () => import("./pages/${slug}"),`);
  }
  lines.push("} as const;");
  lines.push("");
  lines.push("export async function loadRmdlPage(slug: string): Promise<RmdlPageModule | null> {");
  lines.push("  const loader = RMDL_PAGES[slug];");
  lines.push("  if (!loader) return null;");
  lines.push("  return loader();");
  lines.push("}");
  lines.push("");
  return lines.join("\n");
}
```

---

```ts
// SOURCE: scripts/rmdl-to-tsx.ts | Lines: 62-86
// KIND: FunctionDeclaration
async function compileOne(filename: string): Promise<{ slug: string; errors: ReadonlyArray<string> } | { slug: string }> {
  const slug = slugFromFilename(filename);
  const inputPath = path.join(CONTENT_ROOT, filename);
  const raw = await fs.readFile(inputPath, "utf-8");

  const tokens = lex(raw);
  const doc = parse(tokens);
  const errors = validate(doc);

  if (errors.length > 0) {
    return { slug, errors: errors.map((e) => e.message) };
  }

  const safe = sanitize(doc);
  const tsx = emitTsxPage({ slug, doc: safe });
  const hasDoubleBraces = /\{\{"/.test(tsx) && /"\}\}/.test(tsx);
  if (hasDoubleBraces) {
    throw new Error(`TSX invalide généré pour "${slug}" (double accolades).`);
  }

  await ensureDir(OUT_PAGES);
  await fs.writeFile(path.join(OUT_PAGES, `${slug}.tsx`), tsx, "utf-8");

  return { slug };
}
```

---

```ts
// SOURCE: scripts/rmdl-to-tsx.ts | Lines: 72-72
// KIND: ArrowFunction
(e) => e.message
```

---

```ts
// SOURCE: scripts/rmdl-to-tsx.ts | Lines: 88-109
// KIND: FunctionDeclaration
async function main(): Promise<void> {
  await ensureDir(OUT_PAGES);

  const files = await listRmdlFiles();
  const slugs: string[] = [];
  const failures: Array<{ slug: string; errors: ReadonlyArray<string> }> = [];

  for (const file of files) {
    const result = await compileOne(file);
    if ("errors" in result) failures.push(result);
    else slugs.push(result.slug);
  }

  await fs.writeFile(OUT_MANIFEST, makeManifest(slugs), "utf-8");

  if (failures.length > 0) {
    const msg = failures
      .map((f) => `- ${f.slug}:\n${f.errors.map((e) => `  • ${e}`).join("\n")}`)
      .join("\n");
    throw new Error(`RMDL compilation échouée :\n${msg}`);
  }
}
```

---

```ts
// SOURCE: scripts/rmdl-to-tsx.ts | Lines: 105-105
// KIND: ArrowFunction
(f) => `- ${f.slug}:\n${f.errors.map((e) => `  • ${e}`).join("\n")}`
```

---

```ts
// SOURCE: scripts/rmdl-to-tsx.ts | Lines: 105-105
// KIND: ArrowFunction
(e) => `  • ${e}`
```

---

```ts
// SOURCE: src/components/00-Header/Copyright.jsx | Lines: 12-22
// KIND: ArrowFunction
({ year, string }) => {
    return (
        <footer className="copyright">
            <p className="vertical-text">
                {string}
                {year}
            </p>
            <span></span>
        </footer>
    );
}
```

---

```ts
// SOURCE: src/components/00-Header/Logo.jsx | Lines: 6-19
// KIND: ArrowFunction
() => {
    const idPrefix = useIdPrefix("logo");

    return (
        <Link
            className="logo"
            data-logo-id={idPrefix}
            href="/#top"
            title="Aller à la page d'accueil"
        >
            <LogoContent idPrefix={idPrefix} />
        </Link>
    );
}
```

---

```ts
// SOURCE: src/components/00-Header/LogoContent.tsx | Lines: 3-3
// KIND: ArrowFunction
() => import("../99-Svg_Icon/MyLogoW")
```

---

```ts
// SOURCE: src/components/00-Header/LogoContent.tsx | Lines: 4-4
// KIND: ArrowFunction
() => import("../99-Svg_Icon/MyLogoBG")
```

---

```ts
// SOURCE: src/components/00-Header/LogoContent.tsx | Lines: 5-5
// KIND: ArrowFunction
() => import("../99-Svg_Icon/MyLogoTypo")
```

---

```ts
// SOURCE: src/components/00-Header/LogoContent.tsx | Lines: 11-23
// KIND: ArrowFunction
({ idPrefix }: LogoContentProps) => {
    return (
        <div className="mnav__logo">
            <img src="/img/logo1.svg" className="my-logo l1 mnav__logo" alt="Logo-menu" />

            <Suspense fallback={null}>
                <LazyMyLogoBG idPrefix={idPrefix} />
                <LazyMyLogoTypo idPrefix={idPrefix} />
                <LazyMyLogoW idPrefix={idPrefix} />
            </Suspense>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/00-Header/NavInterface.jsx | Lines: 6-14
// KIND: ArrowFunction
() => {
    return (
        <>
            <AdaptableDesktopNav />
            <Sidebar />
            <MobileNav />
        </>
    );
}
```

---

```ts
// SOURCE: src/components/00-Header/NavLink.jsx | Lines: 14-22
// KIND: ArrowFunction
({ label, path, title }) => {
    return (
        <div className="link-button">
            <Link className="nav-link" href={path} title={title}>
                {label}
            </Link>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/00-Header/Navbar.jsx | Lines: 7-24
// KIND: ArrowFunction
() => {
    return (
        <header className="nav-bar">
            <Logo />
            <div className="gr-nav"></div>
            <section className="link-group">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.id}
                        label={link.label}
                        path={link.path}
                        title={link.title}
                    />
                ))}
            </section>{" "}
        </header>
    );
}
```

---

```ts
// SOURCE: src/components/00-Header/Navbar.jsx | Lines: 13-20
// KIND: ArrowFunction
(link) => (
                    <NavLink
                        key={link.id}
                        label={link.label}
                        path={link.path}
                        title={link.title}
                    />
                )
```

---

```ts
// SOURCE: src/components/00-Header/SideInterface.jsx | Lines: 9-10
// KIND: ArrowFunction
() =>
        import("../99-Svg_Icon/sideBar/StrategicFramework")
```

---

```ts
// SOURCE: src/components/00-Header/SideInterface.jsx | Lines: 12-12
// KIND: ArrowFunction
() => import("../99-Svg_Icon/sideBar/Design")
```

---

```ts
// SOURCE: src/components/00-Header/SideInterface.jsx | Lines: 13-13
// KIND: ArrowFunction
() => import("../99-Svg_Icon/sideBar/Development")
```

---

```ts
// SOURCE: src/components/00-Header/SideInterface.jsx | Lines: 14-14
// KIND: ArrowFunction
() => import("../99-Svg_Icon/sideBar/DevOps")
```

---

```ts
// SOURCE: src/components/00-Header/SideInterface.jsx | Lines: 15-15
// KIND: ArrowFunction
() => import("../99-Svg_Icon/sideBar/PerfSeo")
```

---

```ts
// SOURCE: src/components/00-Header/SideInterface.jsx | Lines: 16-16
// KIND: ArrowFunction
() => import("../99-Svg_Icon/sideBar/SupportFollow")
```

---

```ts
// SOURCE: src/components/00-Header/SideInterface.jsx | Lines: 19-27
// KIND: FunctionDeclaration
function showIconsProgressively(sideIcons, scheduleIconVisibility) {
    const baseDelay = 100;
    sideIcons.forEach((_, i) => {
        const delay =
            i === sideIcons.length - 1 ? baseDelay * i + 50 : baseDelay * i;

        scheduleIconVisibility(i, delay);
    });
}
```

---

```ts
// SOURCE: src/components/00-Header/SideInterface.jsx | Lines: 21-26
// KIND: ArrowFunction
(_, i) => {
        const delay =
            i === sideIcons.length - 1 ? baseDelay * i + 50 : baseDelay * i;

        scheduleIconVisibility(i, delay);
    }
```

---

```ts
// SOURCE: src/components/00-Header/SideInterface.jsx | Lines: 28-63
// KIND: ArrowFunction
() => {
    const [visibleIcons, setVisibleIcons] = useState([]);
    function scheduleIconVisibility(index, delay) {
        setTimeout(() => {
            setVisibleIcons(prev => [...prev, index]);
        }, delay);
    }
    useEffect(() => {
        if (typeof window.requestIdleCallback !== "function") {
            window.requestIdleCallback = idleCallbackPolyfill;
        }

        requestIdleCallback(() => {
            showIconsProgressively(sideIcons, scheduleIconVisibility);
        });
    }, []);

    return (
        <div className="side-nav">
            {sideIcons.map((icon, index) => {
                const IconComponent = lazyIconComponents[icon.name];
                const isVisible = visibleIcons.includes(index);

                return (
                    <Link key={icon.id} title={icon.title} href="">
                        {isVisible ? (
                            <IconComponent alt={icon.alt} />
                        ) : (
                            <SideIcon />
                        )}
                    </Link>
                );
            })}
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/00-Header/SideInterface.jsx | Lines: 30-34
// KIND: FunctionDeclaration
function scheduleIconVisibility(index, delay) {
        setTimeout(() => {
            setVisibleIcons(prev => [...prev, index]);
        }, delay);
    }
```

---

```ts
// SOURCE: src/components/00-Header/SideInterface.jsx | Lines: 31-33
// KIND: ArrowFunction
() => {
            setVisibleIcons(prev => [...prev, index]);
        }
```

---

```ts
// SOURCE: src/components/00-Header/SideInterface.jsx | Lines: 32-32
// KIND: ArrowFunction
prev => [...prev, index]
```

---

```ts
// SOURCE: src/components/00-Header/SideInterface.jsx | Lines: 35-43
// KIND: ArrowFunction
() => {
        if (typeof window.requestIdleCallback !== "function") {
            window.requestIdleCallback = idleCallbackPolyfill;
        }

        requestIdleCallback(() => {
            showIconsProgressively(sideIcons, scheduleIconVisibility);
        });
    }
```

---

```ts
// SOURCE: src/components/00-Header/SideInterface.jsx | Lines: 40-42
// KIND: ArrowFunction
() => {
            showIconsProgressively(sideIcons, scheduleIconVisibility);
        }
```

---

```ts
// SOURCE: src/components/00-Header/SideInterface.jsx | Lines: 47-60
// KIND: ArrowFunction
(icon, index) => {
                const IconComponent = lazyIconComponents[icon.name];
                const isVisible = visibleIcons.includes(index);

                return (
                    <Link key={icon.id} title={icon.title} href="">
                        {isVisible ? (
                            <IconComponent alt={icon.alt} />
                        ) : (
                            <SideIcon />
                        )}
                    </Link>
                );
            }
```

---

```ts
// SOURCE: src/components/00-Header/Sidebar.jsx | Lines: 10-16
// KIND: ArrowFunction
() => {
    return (
        <div className="sidebar">
            <SideInterface />
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/Blog.jsx | Lines: 3-20
// KIND: ArrowFunction
() => {
    return (
        <div className="nav-icon">
            <svg
                width="18"
                height="18"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 18 18"
            >
                <path
                    d="M2.94609 8.25L6.69609 10.05H3.84609C4.14609 10.65 4.59609 11.25 4.89609 11.7L9.99609 13.5H6.39609C7.59609 14.55 9.24609 15.3 11.0461 15.45C12.5461 15.6 14.0461 15.75 15.5461 15.75L17.4961 17.7C17.7961 18 18.3961 18 18.6961 17.7C18.9961 17.4 18.9961 16.8 18.6961 16.5L9.69609 7.5C9.54609 7.35 9.54609 6.9 9.69609 6.75C9.84609 6.6 10.2961 6.6 10.4461 6.75L16.7461 13.05C16.7461 12.15 16.5961 11.1 16.5961 10.2C15.5461 1.35 2.79609 0.15 0.996094 0C0.996094 0.9 1.44609 4.65 2.94609 8.25Z"
                    className="icon-color"
                />
            </svg>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/Connection.jsx | Lines: 3-24
// KIND: ArrowFunction
() => {
    return (
        <div className="nav-icon">
            <svg
                width="18"
                height="18"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 18 18"
            >
                <path
                    d="M8.94406 9.71053C11.6314 9.71053 13.81 7.53675 13.81 4.85526C13.81 2.17378 11.6314 0 8.94406 0C6.25668 0 4.07812 2.17378 4.07812 4.85526C4.07812 7.53675 6.25668 9.71053 8.94406 9.71053Z"
                    className="icon-color"
                />
                <path
                    d="M13.6105 10.6578H11.4742C10.8808 10.9736 9.73355 11.171 9.02146 11.171C8.26981 11.171 7.16212 10.9736 6.56872 10.6578H4.35333C2.81047 10.6578 1.62366 11.6052 1.10938 12.9078C2.49399 15.9078 5.50058 17.9999 9.02146 17.9999C12.5423 17.9999 15.5885 15.9078 16.9336 12.9078C16.3006 11.5657 15.1533 10.6578 13.6105 10.6578Z"
                    className="icon-color"
                />
            </svg>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/Contact.jsx | Lines: 3-20
// KIND: ArrowFunction
() => {
    return (
        <div className="nav-icon">
            <svg
                width="18"
                height="18"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 18 18"
            >
                <path
                    d="M13.0752 6.99287C13.0752 4.27344 10.0968 1.9425 6.60041 1.9425C3.10401 1.9425 -0.00390625 4.14394 -0.00390625 6.99287C-0.00390625 8.02884 0.384583 9.06481 1.16156 9.84179C0.773072 10.7483 0.12559 11.5252 0.12559 11.5252C-0.00390625 11.6547 -0.00390625 11.6547 -0.00390625 11.7842C-0.00390625 11.9137 0.12559 11.9137 0.255087 11.9137C1.42055 11.9137 2.32703 11.5252 2.97451 11.1368C4.01048 11.6547 5.17595 11.9137 6.47091 11.9137C10.0968 11.9137 13.0752 9.71229 13.0752 6.99287ZM16.8306 13.8562C17.6076 13.0792 17.9961 12.0432 17.9961 11.0073C17.9961 8.93531 16.3126 7.12236 13.9817 6.34538C13.9817 6.60438 13.9817 6.73387 13.9817 6.99287C13.9817 10.2303 10.6148 12.9497 6.47091 12.9497C6.08243 12.9497 5.82343 12.9497 5.43494 12.9497C6.47091 14.7626 8.80185 16.0576 11.3918 16.0576C12.6867 16.0576 13.8522 15.7986 14.8882 15.2806C15.5357 15.6691 16.5716 16.0576 17.6076 16.0576C17.7371 16.0576 17.7371 16.0576 17.8666 15.9281C17.8666 15.7986 17.8666 15.6691 17.8666 15.6691C17.9961 15.5396 17.2191 14.7626 16.8306 13.8562Z"
                    className="icon-color"
                />
            </svg>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/Home.jsx | Lines: 3-27
// KIND: ArrowFunction
() => {
    return (
        <div className="nav-icon">
            <svg
                width="18"
                height="18"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 18 18"
            >
                <path
                    d="M8.8,5.3L3,10.1v5.7c0,0.3,0.3,0.5,0.5,0.5H7c0.3,0,0.5-0.3,0.5-0.5v-3.3c0-0.3,0.3-0.5,0.5-0.5h2c0.3,0,0.5,0.3,0.5,0.5
	v3.3c0,0.3,0.3,0.5,0.5,0.5l0,0h3.5c0.3,0,0.5-0.3,0.5-0.5v-5.7l-6-4.8C9.1,5.2,8.9,5.2,8.8,5.3z"
                    className="icon-color"
                />
                <path
                    d="M17.9,8.5l-2.7-2.1V2.1c0-0.3-0.1-0.4-0.4-0.4h-1.7c-0.1,0-0.3,0.1-0.3,0.4v2.3L10,2.1c-0.7-0.5-1.3-0.5-2,0L0.1,8.5
	C0,8.6,0,8.9,0.1,9l0,0l0.8,0.9c0.1,0.1,0.4,0.1,0.5,0l0,0l7.3-6c0.1-0.1,0.4-0.1,0.5,0l7.3,6c0.1,0.1,0.4,0.1,0.5,0l0,0L18,9
	C18,8.9,18,8.6,17.9,8.5L17.9,8.5z"
                    className="icon-color"
                />
            </svg>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/MyLogoBG.jsx | Lines: 6-24
// KIND: ArrowFunction
({ idPrefix }) => {
    const bgPrefix = `${idPrefix}-bg`;
    return (
        <SideBodyLogo className={"logoBG mnav__logo"} idPrefix={bgPrefix} withBgDefs>
            <path
                id={`${bgPrefix}-Z`}
                opacity=".5"
                d="M235 470L0 235 235 0 470 235z"
                className="animated-z"
            />
            <use
                href={`#${bgPrefix}-Z`}
                fill={`url(#${bgPrefix}-A)`}
                style={{ mixBlendMode: "screen" }}
                filter={`url(#${bgPrefix}-H)`}
            />
        </SideBodyLogo>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/MyLogoTypo.jsx | Lines: 9-25
// KIND: ArrowFunction
({ idPrefix }) => {
    const typoPrefix = `${idPrefix}-t`;
    return (
        <div className="my-logo l2 mnav__logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470">
                <SvgDefs idPrefix={typoPrefix} />
                <path
                    id={`${typoPrefix}-T`}
                    d="M415.1 397.5v48.3h12v-39.3a3.01 3.01 0 0 1 3-3h21.1c3.4 0 5.9 2.7 5.9 5.9v36.2h12v-36.1c0-10-8.1-18.2-18.2-18.2h0-30.2c-2.9.3-5.6 2.8-5.6 6.2h0zm-60.4 12.1v18.3c0 10 8.1 18 18 18h18.2v-12h-18.3c-3.2 0-5.9-2.7-5.9-5.9v-18.4c0-3.2 2.7-5.9 5.9-5.9H391c3.2 0 5.9 2.7 5.9 5.9V452c0 3.4-2.7 6.1-6 6.1h-.1-24.1v12h24.2c10 0 18-8.1 18-18v-42.5c0-10-8.1-18-18-18h-18.3c-9.9 0-17.9 7.9-17.9 18h0zm-18.1-18h12V446h-12v-54.4zm0-27.2h12v12h-12v-12zm-12.1 39.2v-12h-27.2c-8.3 0-15.1 6.7-15.2 15v.2h0c0 8.3 6.7 15.1 15 15.2h.2 15.2c3.4 0 6.1 2.7 6.1 6v.1h0c0 3.4-2.7 6.1-6 6.1h-.1-72.4c-3.4 0-6.1-2.7-6.1-6v-.1-18.2c0-3.4 2.7-6.1 6-6.1h.1 18.2c3.4 0 6.1 2.7 6.1 6v.1h0c0 3.4-2.7 6.1-6 6.1h-.1-18.2v12h18c10 0 18-8.1 18-18h0c0-10-8.1-18-18-18h-18.3c-9.8 0-18 8.1-18 18v18.4c0 9.8 8.1 18 18 18h72.7c9.8 0 18-8.1 18-18v-.4c0-9.8-8.1-18-18-18h-15.2a3.01 3.01 0 0 1-3-3h0a3.01 3.01 0 0 1 3-3h27.2v-.4h0zm-120.8-39.2v63.3c0 3.4-2.7 6.1-6 6.1h-.1-18.2c-3.4 0-6.1-2.7-6.1-6v-.1-18.2c0-3.4 2.7-6.1 6-6.1h.1 18.2v-12h-18.2c-10 0-18.2 8.1-18.2 18.2h0v18.2c0 10 8.1 18.2 18.2 18.2h18.2c10 0 18.2-8.1 18.2-18.2h0v-63.4h-12 0zm-54.5 48.3h-14.4c-3.4 0-6.1 2.7-6.1 6v.1h0c0 3.4 2.7 6.1 6 6.1h.1 14.4c3.4 0 6.1-2.7 6.1-6v-.1h0a6.06 6.06 0 0 0-6.1-6.1zm-38.4-21.1h12V446h-12v-54.4zm0-27.2h12v12h-12v-12zm-24.3 27.2h12V446h-12v-54.4zm0-27.2h12v12h-12v-12zm-28.3 62.1l-9.7-29.4c-1.1-3.4-4.2-5.7-7.8-5.7h0c-3.6 0-6.9 2.4-7.8 5.9l-8.2 28.3-10.4-34.1h-12L17 440.4c.9 3.2 4 5.5 7.4 5.5h0c3.8 0 7-2.4 8.1-6.1l8.5-29 9.7 29.2c1.1 3.5 4.4 5.8 8 5.8h.1c3.5 0 6.5-2.3 7.4-5.5l14.3-48.7h-12l-10.3 34.9z"
                />
                <g filter="drop-shadow(1px 2px 8px rgba(0, 0, 0, 0.25))">
                    <SvgUse idPrefix={typoPrefix} value="T" />
                </g>
            </svg>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/MyLogoTypo.jsx | Lines: 26-26
// KIND: ArrowFunction
() => Promise.resolve(React.memo(MyLogoTypo))
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/MyLogoW.jsx | Lines: 8-24
// KIND: ArrowFunction
({ idPrefix }) => {
    const wPrefix = `${idPrefix}-w`;
    return (
        <SideBodyLogo className={"logoW mnav__logo"} idPrefix={wPrefix}>
            <SvgDefs idPrefix={wPrefix} />
            <path
                id={`${wPrefix}-W`}
                className="animated-w"
                d="M397.2-.7l-62.8 206-50-170.4C278 13.8 258.8-.7 236.8-.7h-1.7-1.7c-22 0-41.3 14.5-47.5 35.6l-50 170.4L73-.7H.2l90.1 294.6c6.1 19.8 24.2 33.2 45.1 33.2 22.5 0 42.4-14.9 48.8-36.5l50.9-173.8L286 290.6c6.5 21.6 26.3 36.5 48.8 36.5 20.9 0 39-13.4 45.1-33.2L470-.7h-72.8z"
            />

            <g>
                <SvgUse idPrefix={wPrefix} value="W" />
            </g>
        </SideBodyLogo>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/Reservation.jsx | Lines: 3-190
// KIND: ArrowFunction
() => {
    return (
        <div className="nav-icon">
            <svg fill="none" aria-hidden="true" viewBox="0 0 18 18">
                <g clipPath="url(#clip0_167_8479)">
                    <g opacity="0.5" filter="url(#filter0_d_167_8479)">
                        <path
                            d="M15.3008 6.30005H2.70078C1.80078 6.30005 1.80078 7.00005 1.80078 7.20005V14.4C1.80078 15.3 2.72078 16.2 3.60078 16.2H14.4008C15.3208 16.2 16.2008 15.3 16.2008 14.4V7.20005C16.2008 7.00005 16.2008 6.30005 15.3008 6.30005Z"
                            className="icon-color_secondary"
                        />
                    </g>
                    <g filter="url(#filter1_d_167_8479)">
                        <path
                            d="M16.22 1.8H15.3V0.45C15.3 0.15 15 0 14.85 0H13.05C12.9 0 12.6 0.15 12.6 0.45V1.8H5.4V0.45C5.4 0.15 5.1 0 4.95 0H3.15C3 0 2.7 0.15 2.7 0.45V1.8H1.79C0.81 1.8 0 2.61 0 3.59V4.51C0 5 0.4 5.4 0.88 5.4H17.11C17.6 5.4 17.99 5 17.99 4.52V3.59C18 2.6 17.2 1.8 16.22 1.8Z"
                            fill="white"
                        />
                    </g>
                    <g filter="url(#filter2_d_167_8479)">
                        <path
                            d="M7.47445 12.9117H6.52068V7.54784C6.52068 7.3535 6.41363 7.16888 6.25791 7.07171C6.09246 6.97454 5.88808 6.97454 5.72263 7.08142L4.25304 8.0337C4.13625 8.11144 4.04866 8.22804 4.01946 8.3738C3.99027 8.51955 4.00973 8.66531 4.07786 8.78192C4.22384 9.03456 4.54501 9.1123 4.79805 8.95682L5.47932 8.51955V12.9117H4.52555C4.23358 12.9117 4 13.1546 4 13.4558C4 13.7571 4.23358 14 4.52555 14H7.47445C7.76642 14 8 13.7571 8 13.4558C8 13.1546 7.76642 12.9117 7.47445 12.9117Z"
                            fill="white"
                        />
                        <path
                            d="M13.47 12.9367H10.89L12.95 10.9578C13.4 10.5246 13.66 9.91421 13.66 9.28411C13.66 8.02391 12.66 7 11.43 7H11.32C10.7 7 10.1 7.25598 9.67 7.69902L9.16 8.22082C9.06 8.31927 9 8.46695 9 8.60478C9 8.75246 9.06 8.8903 9.16 8.98875C9.26 9.09705 9.39 9.14627 9.54 9.14627C9.68 9.14627 9.82 9.0872 9.92 8.98875L10.43 8.4571C10.67 8.21097 10.99 8.07314 11.32 8.07314H11.43C12.07 8.07314 12.59 8.60478 12.59 9.26442C12.59 9.58931 12.46 9.91421 12.22 10.1308L9.17 13.0549C9.01 13.2124 8.96 13.4487 9.04 13.6554C9.12 13.8622 9.32 14 9.54 14H13.47C13.76 14 14 13.7539 14 13.4487C14 13.1435 13.76 12.9367 13.47 12.9367Z"
                            fill="white"
                        />
                    </g>
                    <g filter="url(#filter3_d_167_8479)">
                        <path
                            d="M0 3.59998V17.1C0 17.6 0.4 18 0.9 18H17.06C17.58 18 17.99 17.58 17.99 17.07V3.59998H0ZM16.6 17.1H1.31C1.08 17.1 0.9 16.91 0.9 16.69V4.49998H17.1V16.6C17.1 16.88 16.88 17.1 16.6 17.1Z"
                            fill="white"
                        />
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_d_167_8479"
                        x="-2.19922"
                        y="6.30005"
                        width="22.3984"
                        height="17.9"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_167_8479"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_167_8479"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter1_d_167_8479"
                        x="-4"
                        y="0"
                        width="25.9883"
                        height="13.4"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_167_8479"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_167_8479"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter2_d_167_8479"
                        x="0"
                        y="7"
                        width="18"
                        height="15"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_167_8479"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_167_8479"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter3_d_167_8479"
                        x="-4"
                        y="3.59998"
                        width="25.9883"
                        height="22.4"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_167_8479"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_167_8479"
                            result="shape"
                        />
                    </filter>
                    <clipPath id="clip0_167_8479">
                        <rect
                            width="18"
                            height="18"
                            aria-hidden="true"
                            fill="white"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/Search.jsx | Lines: 3-20
// KIND: ArrowFunction
() => {
    return (
        <span className="nav-icon">
            <svg
                width="18"
                height="18"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 18 18"
            >
                <path
                    d="M17.7 15.6L14.25 12C14.1 11.85 13.95 11.85 13.65 11.85H13.05C13.95 10.65 14.55 9 14.55 7.35C14.7 3.3 11.4 0 7.35 0C3.3 0 0 3.3 0 7.35C0 11.4 3.3 14.7 7.35 14.7C9 14.7 10.65 14.1 11.85 13.2V13.8C11.85 14.1 12 14.25 12.15 14.4L15.6 17.85C15.9 18.15 16.5 18.15 16.8 17.85L17.85 16.8C18.15 16.5 18.15 15.9 17.7 15.6ZM7.35 11.85C4.8 11.85 2.85 9.9 2.85 7.35C2.85 4.8 4.8 2.85 7.35 2.85C9.9 2.85 11.85 4.8 11.85 7.35C11.85 9.75 9.75 11.85 7.35 11.85Z"
                    className="icon-color"
                />
            </svg>
        </span>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/Services.jsx | Lines: 3-20
// KIND: ArrowFunction
() => {
    return (
        <div className="nav-icon">
            <svg
                width="18"
                height="18"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 18 18"
            >
                <path
                    d="M2.84609 12.9H0.596094C0.296094 12.9 -0.00390625 13.2 -0.00390625 13.5V15.75C-0.00390625 16.05 0.296094 16.35 0.596094 16.35H2.84609C3.14609 16.35 3.44609 16.05 3.44609 15.75V13.5C3.29609 13.2 3.14609 12.9 2.84609 12.9ZM2.84609 1.65002H0.596094C0.296094 1.65002 -0.00390625 1.95002 -0.00390625 2.25002V4.50002C-0.00390625 4.80002 0.296094 5.10002 0.596094 5.10002H2.84609C3.14609 5.10002 3.44609 4.80002 3.44609 4.50002V2.25002C3.29609 1.95002 3.14609 1.65002 2.84609 1.65002ZM2.84609 7.35002H0.596094C0.296094 7.35002 -0.00390625 7.50002 -0.00390625 7.80002V10.05C-0.00390625 10.35 0.296094 10.65 0.596094 10.65H2.84609C3.14609 10.65 3.44609 10.35 3.44609 10.05V7.80002C3.29609 7.50002 3.14609 7.35002 2.84609 7.35002ZM17.3961 13.5H6.14609C5.84609 13.5 5.69609 13.65 5.69609 13.95V15.15C5.69609 15.45 5.99609 15.75 6.29609 15.75H17.5461C17.6961 15.75 17.9961 15.45 17.9961 15.15V13.95C17.9961 13.65 17.6961 13.5 17.3961 13.5ZM17.3961 2.25002H6.14609C5.84609 2.25002 5.54609 2.55002 5.54609 2.85002V4.05002C5.54609 4.35002 5.84609 4.65002 6.14609 4.65002H17.3961C17.6961 4.65002 17.9961 4.35002 17.9961 4.05002V2.85002C17.9961 2.40002 17.6961 2.25002 17.3961 2.25002ZM17.3961 7.80002H6.14609C5.84609 7.80002 5.54609 8.10002 5.54609 8.40002V9.60002C5.54609 9.90002 5.84609 10.2 6.14609 10.2H17.3961C17.6961 10.2 17.9961 9.90002 17.9961 9.60002V8.40002C17.9961 8.10002 17.6961 7.80002 17.3961 7.80002Z"
                    className="icon-color"
                />
            </svg>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/SideBodyLogo.jsx | Lines: 7-16
// KIND: ArrowFunction
({ children, className, idPrefix }) => {
    return (
        <div className={`my-logo ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470">
                <SvgDefBG idPrefix={idPrefix} />
                {children}
            </svg>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/SideBodyLogo.jsx | Lines: 18-18
// KIND: ArrowFunction
() => Promise.resolve(React.memo(SideBodyLogo))
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/StpOf7.jsx | Lines: 4-9
// KIND: ArrowFunction
() => (
    <>
        <stop offset="0" stopColor="#ffed00" />
        <stop offset="1" stopColor="#009fe3" />
    </>
)
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/StpOf7.jsx | Lines: 11-11
// KIND: ArrowFunction
() => Promise.resolve(React.memo(StpOf7))
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/SvgDefBG.jsx | Lines: 8-20
// KIND: ArrowFunction
({ idPrefix }) => (
    <defs>
        <SvgGradientWithFilter
            idPrefix={idPrefix}
            resultId="A"
            x1="127"
            y1="127"
            x2="382"
            y2="382"
            // hrefSuffix="I" // optionnel car par défaut = "I"
        />
    </defs>
)
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/SvgDefBG.jsx | Lines: 22-22
// KIND: ArrowFunction
() => Promise.resolve(React.memo(SvgDefBG))
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/SvgDefBG2.jsx | Lines: 8-28
// KIND: ArrowFunction
({ idPrefix }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <defs>
            <SvgGradientWithFilter
                idPrefix={idPrefix}
                resultId="AX"
                x1="0"
                y1="0"
                x2="100%"
                y2="100%"
                // hrefSuffix="I" // optionnel car par défaut = "I"
            />
        </defs>

        <path
            id={`${idPrefix}-RX`}
            fill={`url(#${idPrefix}-AX)`}
            d="M57 0H7C3.7 0 0 3.7 0 7v50c0 3.3 3.7 7 7 7h50c3.3 0 7-3.7 7-7V7c0-3.3-3.7-7-7-7z"
        />
    </svg>
)
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/SvgDefBG2.jsx | Lines: 30-30
// KIND: ArrowFunction
() => Promise.resolve(memo(SvgDefBG2))
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/SvgDefs.jsx | Lines: 7-43
// KIND: ArrowFunction
({ idPrefix }) => (
    <defs>
        <linearGradient
            id={`${idPrefix}-C`}
            x1="0"
            y1="470"
            x2="470"
            y2="0"
            href={`#${idPrefix}-I`}
        >
            <stop offset="0" stopColor="#009640" />
            <stop offset="1" stopColor="#312783" />
        </linearGradient>
        <linearGradient
            id={`${idPrefix}-D`}
            x1="0"
            y1="0"
            x2="470"
            y2="470"
            href={`#${idPrefix}-I`}
        >
            <stop offset="0" stopColor="#312783" />
            <stop offset="1" stopColor="#e30613" />
        </linearGradient>
        <linearGradient
            id={`${idPrefix}-E`}
            x1="470"
            y1="0"
            x2="0"
            y2="470"
            href={`#${idPrefix}-I`}
        >
            <stop offset="0" stopColor="#e30613" />
            <stop offset="1" stopColor="#009640" />
        </linearGradient>
    </defs>
)
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/SvgDefs.jsx | Lines: 45-45
// KIND: ArrowFunction
() => Promise.resolve(React.memo(SvgDefs))
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/SvgFilter.jsx | Lines: 7-24
// KIND: ArrowFunction
({ idPrefix, resultId }) => {
    const blurId = `${idPrefix}-${resultId}`;
    return (
        <>
            <filter id={`${idPrefix}-H`}>
                <feGaussianBlur stdDeviation="3" result={blurId} />
                <feMerge>
                    <feMergeNode in={blurId} />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <linearGradient
                id={`${idPrefix}-I`}
                gradientUnits="userSpaceOnUse"
            />
        </>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/SvgGradientWithFilter.jsx | Lines: 22-45
// KIND: ArrowFunction
({
    idPrefix,
    resultId,
    x1,
    y1,
    x2,
    y2,
    hrefSuffix = "I"
}) => (
    <>
        <linearGradient
            id={`${idPrefix}-${resultId}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            href={`#${idPrefix}-${hrefSuffix}`}
        >
            <StpOf7 />
        </linearGradient>

        <SvgFilter idPrefix={idPrefix} resultId={resultId} />
    </>
)
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/SvgUse.jsx | Lines: 6-27
// KIND: ArrowFunction
({ idPrefix, value }) => (
    <g>
        <use
            href={`#${idPrefix}-${value}`}
            fill={`url(#${idPrefix}-C)`}
            x="3"
            style={{ mixBlendMode: "screen" }}
        />
        <use
            href={`#${idPrefix}-${value}`}
            x="1.5"
            y="1.5"
            fill={`url(#${idPrefix}-D)`}
            style={{ mixBlendMode: "screen" }}
        />
        <use
            href={`#${idPrefix}-${value}`}
            fill={`url(#${idPrefix}-E)`}
            style={{ mixBlendMode: "screen" }}
        />
    </g>
)
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/Tarifs.jsx | Lines: 3-20
// KIND: ArrowFunction
() => {
    return (
        <div className="nav-icon">
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M16.313 9A7.31 7.31 0 0 0 9 1.688c-1.939 0-3.799.77-5.171 2.142S1.688 7.061 1.688 9A7.31 7.31 0 0 0 9 16.313 7.31 7.31 0 0 0 16.313 9zM0 9a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9zm4.5.563h.563c-.021-.176-.032-.355-.032-.534a4.67 4.67 0 0 1 .039-.591H4.5c-.309 0-.562-.253-.562-.562s.253-.562.563-.562h.868A4.53 4.53 0 0 1 9.559 4.5h1.445a.84.84 0 1 1 0 1.688H9.559c-.925 0-1.744.443-2.264 1.125h2.83c.309 0 .563.253.563.563s-.253.563-.562.563H6.782a2.95 2.95 0 0 0-.06.591 2.96 2.96 0 0 0 .049.534h3.354c.309 0 .563.253.563.563s-.253.563-.562.563H7.256c.517.714 1.354 1.178 2.303 1.178h1.445a.84.84 0 1 1 0 1.688H9.559a4.53 4.53 0 0 1-4.212-2.865H4.5c-.309 0-.562-.253-.562-.562s.253-.562.563-.562z"
                    className="icon-color"
                />
            </svg>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/Design.jsx | Lines: 3-3
// KIND: ArrowFunction
() => import("./LazyIconContent")
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/Design.jsx | Lines: 4-14
// KIND: ArrowFunction
() => {
    return (
        <SideBodyIcon
            R={
                <path d="M32 33.1h-.9c-.5 0-1 .1-1.4.3s-.8.4-1.1.8a4.44 4.44 0 0 0-.8 1.1c-.2.4-.3.9-.3 1.4 0 .3 0 .5-.1.7s-.2.4-.4.6-.4.3-.6.4-.5.1-.7.1c.5.5 1 1 1.6 1.3s1.3.5 2 .5c.6 0 1.2-.1 1.8-.4.5-.2 1-.6 1.4-1s.7-.9 1-1.4c.2-.5.4-1.1.4-1.8v-.9L32 33.1zm18.6-15.5c-.1-.3-.3-.6-.5-.8s-.5-.4-.8-.5-.6-.2-1-.2c-.3 0-.7.1-1 .2s-.6.3-.8.6L38.4 25h-5.8c0-.1.1-.2.1-.2.1-.3.2-.7.2-1.1 0-.9-.1-1.8-.4-2.6-.2-.8-.6-1.6-1-2.4a9.51 9.51 0 0 0-1.5-2 9.51 9.51 0 0 0-2-1.5c-.7-.4-1.5-.8-2.4-1-.8-.2-1.7-.4-2.6-.4s-1.8.1-2.6.4c-.8.2-1.6.6-2.4 1a9.51 9.51 0 0 0-2 1.5 9.51 9.51 0 0 0-1.5 2c-.4.7-.8 1.5-1 2.4-.2.8-.4 1.7-.4 2.6s.1 1.8.4 2.6c.2.8.6 1.6 1 2.4a9.51 9.51 0 0 0 1.5 2c.3.3.6.6.9.8v14l-3.6 3.6c-.2.2-.3.4-.3.6 0 .3.1.5.3.7s.4.3.6.3h34c.2 0 .5-.1.6-.3.2-.2.3-.4.3-.7 0-.2-.1-.4-.3-.6l-3.6-3.6V26.1c0-.2-.1-.4-.2-.6l5.1-5.1c.2-.2.4-.5.6-.8.1-.3.2-.6.2-1 .2-.4.2-.7 0-1zM18.3 28.1c.1-.2.2-.4.4-.5.2-.2.3-.3.6-.4.2-.1.4-.1.7-.1.2 0 .5 0 .7.1s.4.2.6.4.3.3.4.6c.1.2.1.4.1.7 0 .2 0 .5-.1.7s-.2.4-.4.6-.3.3-.6.4c-.2.1-.4.1-.7.1-.2 0-.5 0-.7-.1s-.4-.2-.6-.4-.3-.3-.4-.5v-1.6zm9.9-6.3c.1-.2.2-.4.4-.6s.4-.3.6-.4.5-.1.7-.1c.3 0 .5.1.7.3s.3.4.3.7 0 .5-.1.7-.2.4-.4.6-.4.3-.6.4-.5.1-.7.1c-.3 0-.5-.1-.7-.3-.3-.2-.4-.4-.4-.7s.1-.5.2-.7zm-3.6-3.6c.1-.2.2-.4.4-.6s.3-.3.6-.4.4-.1.7-.1c.2 0 .5 0 .7.1s.4.2.6.4.3.3.4.6c.1.2.1.4.1.7s0 .5-.1.7-.2.4-.4.6-.3.3-.6.4a1.7 1.7 0 0 1-.7.1c-.2 0-.5 0-.7-.1s-.4-.2-.6-.4-.3-.3-.4-.6c-.1-.2-.1-.4-.1-.7s0-.5.1-.7zm-5.6-.7c.1-.2.2-.4.4-.6s.3-.3.6-.4.4-.1.7-.1c.2 0 .5 0 .7.1s.4.2.6.4.3.3.4.6c.1.2.1.4.1.7 0 .2 0 .5-.1.7s-.2.4-.4.6-.3.3-.6.4c-.2.1-.4.1-.7.1-.2 0-.5 0-.7-.1s-.4-.2-.6-.4-.3-.3-.4-.6c-.1-.2-.1-.4-.1-.7-.1-.3 0-.5.1-.7zm-3.2 6.9c-.2-.2-.3-.3-.4-.6-.1-.2-.1-.4-.1-.7 0-.2 0-.5.1-.7s.2-.4.4-.6.3-.3.6-.4c.2-.1.4-.1.7-.1.2 0 .5 0 .7.1s.4.2.6.4.3.3.4.6c.1.2.1.4.1.7 0 .2 0 .5-.1.7s-.2.4-.4.6-.3.3-.6.4a1.7 1.7 0 0 1-.7.1c-.2 0-.5 0-.7-.1-.3-.1-.4-.3-.6-.4zm29.6 23.1s.1.1.1.2c0 .2-.1.2-.2.2h-9.7l.6 1.3H25.9l.6-1.3h-9.7c-.1 0-.1 0-.2-.1s-.1-.1-.1-.2.1-.2.3-.4.4-.5.7-.7l.7-.7c.2-.2.4-.4.5-.4H43l2.4 2.1zM43.9 44H18.3V32.1c.7.4 1.4.7 2.2.9s1.7.4 2.6.4c.4 0 .8-.1 1.1-.2s.6-.3.9-.6.5-.6.6-.9.2-.7.2-1.1v-4.2-.2h3.5c.1 0 .1.1.2.1.2.1.4.1.6.1.4 0 .7-.1 1-.2h6L34.3 29l3.6 3.6 6-6V44zM32.7 30.7c-.3.4-.5.8-.6 1.3l2.8 2.8c.5-.1.9-.3 1.3-.6l1.1-.9-3.6-3.6a4.74 4.74 0 0 0-1 1z" />
            }
        >
            <LazyIconContent id="design" />
        </SideBodyIcon>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/DevOps.jsx | Lines: 3-3
// KIND: ArrowFunction
() => import("./LazyIconContent")
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/DevOps.jsx | Lines: 4-18
// KIND: ArrowFunction
() => {
    return (
        <SideBodyIcon
            R={
                <>
                    <path d="M38.3 19l1.9 6h6.2l-4.9 3.9 1.9 6.2-4.9-3.9-4.2 3.1c.9 1.5 1.4 3.1 1.4 5v.5c.5 0 1 .1 1.4.2h1c3.7 0 6.7-1.3 9-3.9 2.6-2.6 3.9-5.6 3.9-9 0-3.7-1.3-6.7-3.9-9-2.6-2.6-5.6-3.9-9-3.9a12.5 12.5 0 0 0-7 2.1v4.5c0 1.5-.2 2.9-.7 4.2h5.9l2-6z" />
                    <path d="M27.4 30.1c2.2.2 4.1 1 5.7 2.7.2.2.4.4.6.7l1.4-4.6-4.7-3.7c-.4 1.3-1.1 2.5-2 3.7-.3.5-.6.8-1 1.2zM24.2 49v-8l-2.5 2.5-1.5-1.5 5.2-5.2 5.2 5.2-1.6 1.6-2.6-2.6v7.5a.47.47 0 0 0 .5.5H34c1 0 2-.4 2.7-1.1.3-.3.6-.7.7-1.1.1-.2.1-.4.2-.6 0-.2.1-.4.1-.7V45c0-.1 0-.2-.1-.3-.1-.6-.4-1.2-.9-1.6-.4-.4-.9-.7-1.4-.8h0c-.2-.1-.3-.1-.5-.1s-.4-.1-.6-.1H34h-1.8v-.4-2.3c0-1.9-.7-3.5-2-4.9s-2.9-2.1-4.8-2.1H25c-.7 0-1.5.2-2.1.4-.9.3-1.7.9-2.4 1.6-1.3 1.4-2 3-2 4.9h-.6a4.76 4.76 0 0 0-3.4 1.4c-.9.9-1.4 2-1.4 3.3s.5 2.6 1.4 3.5c.9 1 2.1 1.4 3.4 1.4H22h0a2.22 2.22 0 0 0 2.2 2.2h2.2c-.6 0-1.1-.2-1.5-.7a1.75 1.75 0 0 1-.7-1.4zM41 41.9c-.3.1-.6.1-.9.1.7.9 1.1 2 1.1 3.2l5.3 1.3v-6.7c-1.3.6-2.6 1.3-4.1 1.7-.4.1-.7.2-1.1.2-.1.2-.2.2-.3.2z" />
                    <path d="M30.1 25l.3.2c0-.1 0-.1.1-.2h-.4zm3 10.1l1.1-.8-.6-.9-.5 1.7zm-3.7-16.6v-2.9l-7.3-2.8-7.3 2.8v5.5c0 2.4.7 4.6 2.1 6.5 1.4 2 3.1 3.3 5.2 3.9.6-.2 1.2-.5 1.8-.8.7-.4 1.3-.8 1.9-1.4.5-.5 1.1-1.1 1.5-1.8 1.4-2 2.1-4.1 2.1-6.5v-2.5h0zm-3.3 2.1L21.7 25c-.4.4-1 .4-1.3 0l-2.2-2.2c-.4-.4-.4-1 0-1.3h0c.4-.4 1-.4 1.3 0l.9.9c.4.4 1 .4 1.3 0l3.1-3.1c.4-.4 1-.4 1.3 0a.85.85 0 0 1 0 1.3z" />
                </>
            }
        >
            <LazyIconContent id="devOps" />
        </SideBodyIcon>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/Development.jsx | Lines: 3-3
// KIND: ArrowFunction
() => import("./LazyIconContent")
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/Development.jsx | Lines: 4-14
// KIND: ArrowFunction
() => {
    return (
        <SideBodyIcon
            R={
                <path d="M30.1 15.5c.7.7 1 1.4 1 2.4v.7h1.7v-.7c0-.9.3-1.7 1-2.4s1.4-1 2.4-1h15.2v-1.7H36.2c-.9 0-1.6.2-2.4.6-.7.4-1.3.9-1.8 1.6-.5-.7-1.1-1.2-1.9-1.6-.7-.4-1.5-.6-2.4-.6h-15v1.7h15c1 .1 1.8.4 2.4 1zm20.9 34l-4.7-4.8H32.8v-2.6h12.6c.7 0 1.4-.3 1.9-.8s.8-1.2.8-1.9V21.8c0-.7-.3-1.4-.8-1.9s-1.2-.8-1.9-.8H18.6c-.7 0-1.4.3-1.9.8s-.8 1.2-.8 1.9v17.6c0 .7.3 1.4.8 1.9s1.2.8 1.9.8h12.5v2.6H17.7L13 49.5c-.2.2-.3.4-.3.7s.1.5.3.7.4.3.7.3h36.7c.3 0 .5-.1.7-.3s.3-.4.3-.7c-.1-.3-.2-.5-.4-.7zm-12.5-10l-1.3-1.3 2.1-2.1-2.1-2.1 1.3-1.3 3.4 3.4-3.4 3.4zm-9.8-4.4V37H24c-.5 0-1-.2-1.3-.6s-.6-.8-.6-1.3V23.8c0-.5.2-1 .6-1.3.4-.4.8-.6 1.3-.6h5.7l1.9 1.9h7.6c.5 0 1 .2 1.3.6.4.4.6.8.6 1.3v4.7h-1.9v-4.7h-8.3L29 23.8h-5v11.3h4.7zm5.3-2.4l1.3 1.3-2.1 2.1 2.1 2.1-1.3 1.3-3.4-3.4 3.4-3.4zm13.3 15.7H36.8l.7 1.4h-11l.7-1.4H16.7c-.1 0-.1 0-.2-.1s-.1-.1-.1-.2.1-.2.3-.5c.2-.2.5-.5.7-.8l.8-.8c.3-.2.4-.4.5-.5H45l2.3 2.3c.1.1.1.1.1.2.1.3 0 .4-.1.4z" />
            }
        >
            <LazyIconContent id="development" />
        </SideBodyIcon>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/LazyIconContent.jsx | Lines: 8-8
// KIND: ArrowFunction
({ children }) => <>{children}</>
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/LazyIconContent.jsx | Lines: 10-13
// KIND: ArrowFunction
() =>
    runDelayWorker(800).then(() => ({
        default: DelayedContent
    }))
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/LazyIconContent.jsx | Lines: 11-13
// KIND: ArrowFunction
() => ({
        default: DelayedContent
    })
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/LazyIconContent.jsx | Lines: 16-33
// KIND: ArrowFunction
({ id }) => {
    const data = useLazyIconData();

    if (!data) return null;

    const item = data.find(entry => entry.id === id);
    if (!item) return null;

    return (
        <LazyComponent>
            <g className={"white-bg_icon"}>
                {item.paths.map((d, i) => (
                    <path key={i + "lazyIcons"} d={d} />
                ))}
            </g>
        </LazyComponent>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/LazyIconContent.jsx | Lines: 21-21
// KIND: ArrowFunction
entry => entry.id === id
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/LazyIconContent.jsx | Lines: 27-29
// KIND: ArrowFunction
(d, i) => (
                    <path key={i + "lazyIcons"} d={d} />
                )
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/PerfSeo.jsx | Lines: 3-3
// KIND: ArrowFunction
() => import("./LazyIconContent")
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/PerfSeo.jsx | Lines: 5-15
// KIND: ArrowFunction
() => {
    return (
        <SideBodyIcon
            R={
                <path d="M42 46c-2.5 1.9-5.6 3.1-9 3.2 1.5-.7 2.8-1.6 4.1-2.6a10.9 10.9 0 0 1-2.6.3h-.2l-1.6.9v-1l-1.4-.3v1.2c-2.9-1.4-5.3-3.6-7-6.2h.1c-.3-.4-.5-.9-.7-1.3 0 0-.1 0-.1.1-1.2-2.3-1.9-4.8-2.1-7.6h1.2l.3-1.3h-1.4c.1-2.7.8-5.3 2.1-7.6 1.2.6 2.4 1.1 3.7 1.4.6-.4 1.2-.8 1.9-1.1-1.7-.3-3.4-.8-4.9-1.6 1.7-2.6 4.2-4.8 7-6.2v7l1.4-.3v-6.7c2.9 1.4 5.3 3.6 7 6.2-.6.3-1.3.6-1.9.8.7.2 1.4.5 2 .8.2-.1.5-.2.7-.3.2.3.3.6.4.9.9.6 1.7 1.3 2.4 2.1-.4-1.3-.9-2.5-1.5-3.7 1.2-.7 2.2-1.5 3.2-2.4 2.4 2.9 4 6.6 4.2 10.7h-3.4l.3 1.4h3a16.67 16.67 0 0 1-3.5 9.8l1.5 1.6c2.6-3.3 4.2-7.5 4.3-12.1-.1-10.9-8.7-19.5-19.5-19.5S12.6 21.2 12.5 32c.1 10.8 8.7 19.4 19.5 19.4 4.4 0 8.4-1.4 11.6-3.8L42 46zm2-26.5c-.9.8-1.9 1.6-2.9 2.2-1.9-3-4.7-5.4-8-7 4.2.3 8 2 10.9 4.8zm-13-4.8c-3.3 1.5-6 4-8 7-1.1-.6-2-1.4-2.9-2.2 2.8-2.8 6.6-4.5 10.9-4.8zm-12 5.9c1 .9 2.1 1.7 3.2 2.4-1.3 2.5-2.1 5.3-2.2 8.3h-5.3c.2-4.1 1.8-7.8 4.3-10.7zm-4.3 12.1h5.2c.1 3 .9 5.8 2.2 8.3-1.2.7-2.2 1.5-3.2 2.4-2.4-2.9-4-6.6-4.2-10.7zM20 44.5c.9-.8 1.9-1.6 2.9-2.2 1.9 3 4.7 5.4 8 7-4.2-.3-8-2.1-10.9-4.8zm30 2.8l-5.2-5.4c-.2-.2-.4-.2-.9-.2H43c1.3-1.8 2.3-4.3 2.3-6.9.2-6.2-4.8-11.2-11-11.2s-11.2 5-11.2 11.2S28.1 46 34.3 46c2.5 0 5-.9 6.9-2.3v.9c0 .4.2.7.4.9l5.2 5.2c.4.4 1.3.4 1.8 0l1.5-1.5c.6-.5.6-1.4-.1-1.9zm-15.7-5.7c-3.9 0-6.9-3-6.9-6.9s3-6.9 6.9-6.9 6.9 3 6.9 6.9c0 3.7-3.3 6.9-6.9 6.9zm0-12.1c-.5 0-.9.1-1.3.2v10.2c.4.1.9.2 1.3.2s.9-.1 1.3-.2V29.7c-.4-.1-.8-.2-1.3-.2zm-5 3.9a5.23 5.23 0 0 0-.3 1.8c0 1.9 1.1 3.6 2.6 4.5v-6.3h-2.3zm7.6 6.3c1.6-.9 2.6-2.6 2.6-4.5h-2.6v4.5z" />
            }
        >
            <LazyIconContent id="perfSeo" />
        </SideBodyIcon>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/SideBodyIcon.tsx | Lines: 12-22
// KIND: ArrowFunction
({ R, children }: SideBodyIconProps) => {
    const idPrefix = useIdPrefix("icon");

    return (
        <SideIcon className="s-a">
            <SvgDefBG2 idPrefix={idPrefix} />
            <g className="red-content_icon">{R}</g>
            <Suspense fallback={null}>{children}</Suspense>
        </SideIcon>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/SideIcon.jsx | Lines: 3-11
// KIND: ArrowFunction
({ className, children }) => {
    return (
        <div className={`side-icon ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                {children}
            </svg>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/StrategicFramework.jsx | Lines: 3-3
// KIND: ArrowFunction
() => import("./LazyIconContent")
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/StrategicFramework.jsx | Lines: 4-14
// KIND: ArrowFunction
() => {
    return (
        <SideBodyIcon
            R={
                <path d="M31.9 30.8c-.7 0-1.2.6-1.2 1.2 0 .7.6 1.2 1.2 1.2s1.2-.6 1.2-1.2c0-.7-.5-1.2-1.2-1.2zm19.2-2.7c-1.6-7.6-7.6-13.6-15.2-15.2C35.6 11 34 9.6 32 9.6s-3.6 1.4-3.9 3.2c-7.6 1.6-13.6 7.6-15.2 15.2-1.9.4-3.3 2-3.3 4s1.4 3.6 3.3 3.9c1.6 7.6 7.6 13.6 15.2 15.2.4 1.8 2 3.2 3.9 3.2s3.6-1.4 3.9-3.2c7.6-1.6 13.6-7.6 15.2-15.2 1.9-.3 3.3-2 3.3-3.9 0-2-1.4-3.6-3.3-3.9zM36.7 13.7c6.6 1.7 11.9 6.9 13.6 13.5h-.8c-1.7-6.2-6.6-11.1-12.8-12.7v-.8zm-6.3-2.2h.8s1.1 1.9 1.5 2.5v-2.5h.9v4.4h-.8s-1.1-2-1.5-2.6v2.6h-.9v-4.4zm-3.1 2.2v.8c-6.2 1.7-11.1 6.5-12.8 12.7h-.8c1.7-6.6 7-11.8 13.6-13.5zM13 34.2h-.8L11 29.8h1l.6 2.7c.2-.7.7-2.7.7-2.7h.8l.6 2.7c.2-.7.6-2.7.6-2.7h.9l-1.1 4.4h-.9l-.6-2.6c-.1.7-.6 2.6-.6 2.6zm14.3 16.1c-6.7-1.7-11.9-7-13.6-13.7h.8c1.7 6.3 6.6 11.2 12.8 12.9v.8zm5.9 1.6c-.1.2-.2.3-.3.4s-.3.2-.5.2c-.2.1-.4.1-.6.1a1.69 1.69 0 0 1-1-.3l-.1-.1V51l.3.3c.3.2.5.3.8.3.4 0 .5-.2.5-.4V51c0-.1-.1-.1-.1-.1-.1 0-.1-.1-.2-.1s-.2-.1-.3-.1c-.2-.1-.3-.1-.4-.2l-.3-.3c-.1-.1-.2-.2-.2-.4 0-.1-.1-.3-.1-.5s0-.4.1-.6.2-.3.3-.4.3-.2.5-.3c.5-.2 1-.1 1.4.1l.1.1v1.2l-.3-.2c-.2-.2-.4-.2-.7-.2h-.2c-.1 0-.1 0-.1.1l-.1.1v.1.2s0 .1.1.1c0 0 .1.1.2.1s.2.1.3.1c.1.1.3.1.4.2l.3.3c.1.1.2.2.2.4.1.1.1.3.1.5 0 .3-.1.5-.1.7zm2.6-2.8c-.5-1.6-2-2.8-3.8-2.8s-3.3 1.2-3.8 2.8c-6.6-1.5-11.8-6.7-13.3-13.3 1.6-.5 2.7-2 2.7-3.8s-1.1-3.2-2.7-3.8c1.5-6.6 6.7-11.9 13.3-13.3.5 1.6 2 2.8 3.8 2.8s3.3-1.2 3.8-2.8c6.6 1.5 11.8 6.7 13.3 13.3-1.6.5-2.7 2-2.7 3.8s1.1 3.2 2.7 3.8c-1.5 6.6-6.7 11.8-13.3 13.3zm.9 1.2v-.8c6.3-1.7 11.2-6.6 12.8-12.9h.8c-1.6 6.7-6.9 12-13.6 13.7zm15-16.1h-2.6v-4.4h2.5v.9h-1.5v.8h1.4v.9h-1.4v.8h1.5v1zm-9.3-3c-.2-2.2-1.1-4.3-2.5-6l3.2-4.4-4.4 3.2c-1.6-1.4-3.7-2.3-6-2.5l-.7-2.7-.8 2.8c-5.1.4-9.3 4.6-9.7 9.7l-2.7.7 2.8.8c.2 2.2 1 4.2 2.4 5.8l-3.4 4.6 4.6-3.3c1.7 1.5 3.8 2.4 6.1 2.6l.8 2.8.8-2.8c5.1-.4 9.3-4.6 9.7-9.7l2.8-.8-3-.8zm-2.1-4.3l-1.2.7c.1.2.2.3.3.6l1.2-.7c.6 1.1 1 2.3 1.1 3.7l-5-1.5 2.8-3.8c.4.3.6.6.8 1zM34.9 35l.9-.2.4 1.6-1.6-.4.3-1zm-6-5.9l-.9.2-.4-1.6 1.6.4-.3 1zm3 5.4c-1.4 0-2.5-1.1-2.5-2.5 0-.5.1-1 .4-1.4l-.1.2c.3-.5.7-.9 1.2-1.1l-.2.1c.4-.2.8-.4 1.3-.4 1.4 0 2.5 1.1 2.5 2.5 0 .5-.1 1-.4 1.4l.1-.2c-.3.5-.7.9-1.2 1.1l.2-.1c-.4.3-.8.4-1.3.4zm4.7-11.2l-.7 1.2c.2.1.3.2.6.3l.7-1.2c.4.2.7.5 1.1.8l-3.9 2.8-1.5-5.1c1.3.2 2.5.6 3.7 1.2zM31.9 21l1.9 6.6-.2.2-1.6.5V21zm-8.7 6.3l1.2.7c.1-.2.2-.3.3-.6l-1.2-.7c.8-1.3 1.9-2.4 3.2-3.2l.7 1.2c.2-.1.3-.2.6-.3l-.7-1.2c1.1-.6 2.3-1 3.7-1.1l-1.6 5.3-2.9-.8.8 2.9-5.3 1.6c.2-1.3.6-2.7 1.2-3.8zM20.9 32l6.7-1.9.6 1.9h-7.3zm2.5 5.2l1.2-.7c-.1-.2-.2-.3-.3-.6l-1.2.7c-.6-1.1-1-2.3-1.1-3.7l5 1.4-2.8 3.8c-.3-.2-.5-.5-.8-.9zm3.8 3.6l.7-1.2c-.2-.1-.3-.2-.6-.3l-.7 1.2c-.4-.2-.8-.5-1.2-.8l4-2.8L31 42c-1.4-.2-2.7-.7-3.8-1.2zm4.7 2.3L30 36.4l1.9-.6v7.3zm8.8-6.3l-1.2-.7c-.1.2-.2.3-.3.6l1.2.7c-.8 1.3-1.9 2.4-3.2 3.2l-.7-1.2c-.2.1-.3.2-.6.3l.7 1.2c-1.1.6-2.3 1-3.7 1.1l1.6-5.3 2.9.8-.8-2.9 5.3-1.6c-.2 1.3-.7 2.7-1.2 3.8zM36.2 34l-.6-1.9h7.2L36.2 34z" />
            }
        >
            <LazyIconContent id="strategicFramework" />
        </SideBodyIcon>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/SupportFollow.jsx | Lines: 3-3
// KIND: ArrowFunction
() => import("./LazyIconContent")
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/sideBar/SupportFollow.jsx | Lines: 5-18
// KIND: ArrowFunction
() => {
    return (
        <SideBodyIcon
            R={
                <>
                    <path d="M47.8 30.1c-.5 0-.9-.1-1.3-.1-1.7 3.5-4.7 6.3-8.3 7.8l.8 2.4h2.5l-2 1.6.7 2.4-2-1.5-2 1.5.8-2.4-2-1.6h2.4l.8-2.4c-2 .8-4.1 1.2-6.2 1.2-2.2 0-4.2-.4-6.1-1.2l.8 2.4h2.5l-2 1.6.7 2.4-2-1.5-2 1.5.8-2.4-2-1.6h2.4l.8-2.4c-3.5-1.4-6.3-4-8.1-7.3-.5-.2-1-.3-1.6-.3h-.3c.8 1.7 1.8 3.3 3.1 4.7v16.5l13-4.3 13 4.3V34.9c1.3-1.4 2.3-3 3.1-4.8h-.3 0zM34 45.9l-2-1.5-2 1.5.8-2.4-2-1.6h2.4l.8-2.5.8 2.5h2.5l-2 1.6.7 2.4zM21.8 30.2l3.9 4c.9.9 2.4 1 3.4.1.1-.1.3-.3.4-.5s.3-.3.6-.3c.2 0 .5.1.7.2l.7.7c.4.4 1 .7 1.6.7h.1c.6 0 1.2-.3 1.7-.8.5-.6.7-1.3.5-2-.1-.4.1-.7.4-.9s.7-.1 1 .1c.9.9 2.3 1 3.2.2.5-.4.8-1 .8-1.7a2.34 2.34 0 0 0-.7-1.7L33.9 22l-3.1 2.8c-.8.7-1.7 1.1-2.8 1.1h-.3-.4c-.8-.1-1.5-.5-2.1-1-.9-.8-1.4-1.9-1.4-3 0-1.2.5-2.3 1.3-3.1l5.2-4.9a7.55 7.55 0 0 1 1.4-1.1h-4c-1.8 0-3.5.6-4.8 1.8l-2.6 2.2c-.1.1-.3.2-.5.2h-6.1c-.2 0-.3-.1-.5-.2l-.5-.4v13l.5-.4c.2-.1.3-.2.5-.2h5c1.2.1 2.3.5 3.1 1.4z" />
                    <path d="M51.2 16.4l-.5.4c-.2.1-.3.2-.5.2h-6.9 0l-2.1-2.1c-1.3-1.3-3.2-2.1-5.1-2.1-1.8 0-3.6.7-4.9 2L26 19.7c-.6.6-.9 1.3-.9 2.1s.4 1.6 1 2.1c.4.4.9.6 1.4.7h.2.3c.7 0 1.4-.3 1.9-.8l4.9-4.5c.3-.2.6-.2.9 0s.2.6 0 .9l-.9.8 5.6 5.6h0c1.3 1.3 3.2 2.1 5.1 2.1h4.8c.2 0 .3.1.5.2l.5.4V16.4z" />
                </>
            }
        >
            <LazyIconContent id="supportFollow" />
        </SideBodyIcon>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/social/Facebook.jsx | Lines: 3-16
// KIND: ArrowFunction
() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
            <path
                d="M0 0v90h90V0H0zm64.3 25h-4.5a9.82 9.82 0 0 0-9.8 9.8v5.3h13.6L61.3 53H49.9v24.2H34.8V52.9h-9.1V39.3h9.1v-6.1a20.36 20.36 0 0 1 20.4-20.4h9.1V25z"
                className="bg-color"
            />
            <path
                d="M61.3 52.9L63.6 40H49.9v-5.3a9.82 9.82 0 0 1 9.8-9.8h4.5v-12h-9.1a20.36 20.36 0 0 0-20.4 20.4v6.1h-9.1V53h9.1v24.2h15.1V52.9h11.5z"
                className="icon-color"
            />
        </svg>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/social/Instagram.jsx | Lines: 2-15
// KIND: ArrowFunction
() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
            <path
                d="M58.7 18.6H31.3c-7 0-12.7 5.7-12.7 12.7v27.5c0 7 5.7 12.7 12.7 12.7h27.5c7 0 12.7-5.7 12.7-12.7V31.3c-.1-7-5.8-12.7-12.8-12.7zM45 61.9c-9.3 0-16.9-7.6-16.9-16.9S35.7 28.1 45 28.1 61.9 35.7 61.9 45 54.3 61.9 45 61.9zm16.6-29.6a3.8 3.8 0 1 1 3.8-3.8c-.1 2.1-1.7 3.8-3.8 3.8zM45 34.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 1 0 0-21zM0 0v90h90V0H0zm77.9 58.7c0 10.6-8.6 19.1-19.1 19.1H31.3c-10.6 0-19.1-8.6-19.1-19.1V31.3c0-10.6 8.6-19.1 19.1-19.1h27.5c10.6 0 19.1 8.6 19.1 19.1v27.4z"
                className="bg-color"
            />
            <g className="icon-color">
                <path d="M58.7 77.9H31.3c-10.6 0-19.1-8.6-19.1-19.1V31.3c0-10.6 8.6-19.1 19.1-19.1h27.5c10.6 0 19.1 8.6 19.1 19.1v27.5c0 10.5-8.6 19.1-19.2 19.1zM31.3 18.6c-7 0-12.7 5.7-12.7 12.7v27.5c0 7 5.7 12.7 12.7 12.7h27.5c7 0 12.7-5.7 12.7-12.7V31.3c0-7-5.7-12.7-12.7-12.7H31.3zM45 61.9c-9.3 0-16.9-7.6-16.9-16.9S35.7 28.1 45 28.1 61.9 35.7 61.9 45 54.3 61.9 45 61.9zm0-27.4a10.5 10.5 0 1 0 0 21 10.5 10.5 0 1 0 0-21z" />
                <circle cx="61.6" cy="28.5" r="3.8" />
            </g>
        </svg>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/social/Linkedin.jsx | Lines: 2-15
// KIND: ArrowFunction
() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
            <path
                d="M90 6.6v76.9c0 3.6-2.9 6.6-6.6 6.6H6.6C3 90 0 87.1 0 83.4V6.6C0 2.9 3 0 6.6 0h76.9C87.1 0 90 2.9 90 6.6h0zM26.3 33.8H13.2v43.1h13.1V33.8zm1.1-14.1c.1-4.2-3.3-7.7-7.6-7.8-4.2-.1-7.7 3.3-7.8 7.6-.1 4.2 3.3 7.7 7.6 7.8h.1c4.1.1 7.6-3.2 7.7-7.3v-.3zM76.9 51c0-13.1-8.7-18.2-16.2-18.2s-13.1 4.4-14.4 7h-.2v-6.1H33.8v43.1h13.1V54.4c0-6.9 4.7-10 9.3-10 3.8 0 7.6 2.9 7.6 9.8v22.7h13.1V51z"
                className="bg-color"
            />
            <path
                d="M76.9 76.9V51c0-13.1-8.7-18.2-16.2-18.2s-13.1 4.4-14.4 7h-.2v-6.1H33.8v43.1h13.1V54.4c0-6.9 4.7-10 9.3-10 3.8 0 7.6 2.9 7.6 9.8v22.7h13.1zM27.4 20v-.3c.1-4.2-3.3-7.7-7.6-7.8-4.2-.1-7.7 3.3-7.8 7.6-.1 4.2 3.3 7.7 7.6 7.8h.1c4.2.1 7.6-3.2 7.7-7.3zM13.2 33.8h13.1v43.1H13.2z"
                className="icon-color"
            />
        </svg>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/social/TikTok.jsx | Lines: 3-16
// KIND: ArrowFunction
() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
            <path
                d="M40.5 68.9zM0 0v90h90V0H0zm73 39.3c-5.5 0-10.9-1.7-15.4-4.9v22.5c0 11.2-9.1 20.3-20.3 20.3-4.2 0-8.2-1.3-11.6-3.7-5.4-3.8-8.7-10-8.7-16.7 0-11.2 9.1-20.3 20.3-20.3.9 0 1.8.1 2.7.2v2.6h0 0V48c-.7-.2-1.5-.4-2.2-.4h0-.5c-5.1 0-9.3 4.2-9.3 9.3 0 3.5 1.9 6.6 5 8.2h0a9.16 9.16 0 0 0 4.3 1.1c5 0 9.1-4 9.3-8.9V13h11a13.33 13.33 0 0 0 .3 2.8c.8 4.1 3.2 7.8 6.7 10.1 2.5 1.6 5.4 2.5 8.4 2.5v2.5 8.4z"
                className="bg-color"
            />
            <path
                d="M73 30.7v-2.5c-3 0-5.9-.9-8.4-2.5-3.5-2.3-6-5.9-6.7-10.1a13.33 13.33 0 0 1-.3-2.8h-11v44.3c-.2 5-4.3 8.9-9.3 8.9a9.16 9.16 0 0 1-4.3-1.1h0a9.25 9.25 0 0 1-5-8.2c0-5.1 4.2-9.3 9.3-9.3h.5 0c.8 0 1.5.2 2.2.4v-8.7h0 0v-2.6c-.9-.1-1.8-.2-2.7-.2-11.2.2-20.3 9.3-20.3 20.5 0 6.6 3.2 12.9 8.7 16.7 3.4 2.4 7.5 3.7 11.6 3.7 11.2 0 20.3-9.1 20.3-20.3V34.3c4.5 3.2 9.9 4.9 15.4 4.9v-8.5zM40.5 68.9z"
                className="icon-color"
            />
        </svg>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/social/WhatsApp.jsx | Lines: 2-15
// KIND: ArrowFunction
() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
            <path
                d="M0 0v90h90V0H0zm74.7 55.8c-1.5 3.9-3.7 7.5-6.6 10.6A31.16 31.16 0 0 1 58 73.6c-3.8 1.7-7.9 2.7-12.1 2.8H45c-4.8 0-9.5-1.1-13.8-3.1L14.6 77h0-.1s-.1 0-.1-.1v-.1-.1L17.1 60c-2.6-4.8-4-10.3-3.9-15.8s1.6-10.9 4.4-15.6 6.8-8.7 11.6-11.4C34.1 14.4 39.5 13 45 13h.2c8.2 0 16 3.3 21.9 9s9.3 13.4 9.6 21.6c.2 4.1-.5 8.3-2 12.2zM45 18.5h-.8c-4.6.1-9 1.4-12.9 3.8S24.2 28 22 32s-3.3 8.5-3.3 13c.1 4.6 1.3 9 3.6 13l.5.8-2.1 11.4L32 67.5l.8.4c3.7 1.9 7.9 2.9 12.1 2.9h.8 0c6.9-.2 13.4-3.1 18.1-8.1 4.8-5 7.4-11.6 7.3-18.5s-2.9-13.4-7.8-18.3c-4.8-4.7-11.4-7.4-18.3-7.4zm15.1 37.8c-.7 1.8-4 3.5-5.5 3.6-.4 0-.8.1-1.4.1-1.3 0-3.4-.3-8.1-2.4-8-3.4-12.9-11.9-13.2-12.4-.4-.5-3.1-4.4-3-8.3s2.2-5.8 3-6.6c.3-.3.6-.5.9-.7.4-.2.7-.2 1.1-.3h0 .1c.5 0 1.1 0 1.5.1.6 0 1.2.1 1.7 1.5.7 1.6 2.1 5.6 2.3 6 .1.2.2.5.2.7s-.1.5-.2.7c-.2.5-.5.9-.8 1.3-.4.5-.8 1-1.2 1.4s-.8.8-.4 1.6c1.1 2.1 2.6 4 4.3 5.7 1.8 1.8 3.9 3.2 6.3 4.2.3.1.6.2.9.2.2 0 .3 0 .5-.1s.3-.2.4-.3c.5-.5 2-2.2 2.6-3a.78.78 0 0 1 .4-.4c.2-.1.4-.2.5-.2.3 0 .6.1.9.2.7.3 4.6 2.4 5.4 2.8s1.3.6 1.5 1c.1.2 0 1.8-.7 3.6z"
                className="bg-color"
            />
            <path
                d="M76.7 43.6c-.3-8.2-3.7-15.9-9.6-21.6a32 32 0 0 0-21.9-9H45c-5.5 0-10.9 1.4-15.7 4.2-4.8 2.7-8.8 6.7-11.6 11.4s-4.3 10.1-4.4 15.6 1.2 11 3.9 15.8l-2.8 16.8v.1.1s.1 0 .1.1.1 0 .1 0h0l16.6-3.7c4.3 2.1 9 3.1 13.8 3.1h.9c4.2-.1 8.3-1.1 12.1-2.8s7.3-4.2 10.1-7.2c2.9-3.1 5.1-6.7 6.6-10.6 1.5-4 2.2-8.2 2-12.3zM45.8 70.9H45c-4.2 0-8.4-1-12.1-2.9l-.8-.4-11.3 2.7 2.1-11.4-.5-.9c-2.3-3.9-3.5-8.4-3.6-13s1.1-9.1 3.3-13c2.2-4 5.4-7.3 9.3-9.7s8.3-3.7 12.9-3.8h.8c6.9 0 13.5 2.7 18.4 7.6 4.9 4.8 7.7 11.4 7.8 18.3S68.8 57.9 64 62.9c-4.8 4.9-11.3 7.8-18.2 8h0zM34 29.4c-.4 0-.8.1-1.1.3s-.7.4-.9.7c-.8.8-2.9 2.6-3 6.6-.1 3.9 2.6 7.8 3 8.3s5.2 9 13.2 12.4c4.7 2 6.8 2.4 8.1 2.4.6 0 1-.1 1.4-.1 1.5-.1 4.8-1.8 5.5-3.6s.8-3.5.6-3.8-.7-.6-1.5-1-4.6-2.5-5.4-2.8c-.3-.1-.6-.2-.9-.2-.2 0-.4.1-.5.2a.78.78 0 0 0-.4.4c-.6.8-2.1 2.5-2.6 3-.1.1-.2.2-.4.3a.9.9 0 0 1-.5.1c-.3 0-.6-.1-.9-.2-2.3-1-4.5-2.4-6.3-4.2-1.7-1.7-3.1-3.6-4.3-5.7-.4-.8 0-1.2.4-1.6s.8-.9 1.2-1.4c.3-.4.6-.8.8-1.3.1-.2.2-.5.2-.7s-.1-.5-.2-.7c-.2-.4-1.6-4.4-2.3-6-.5-1.4-1.2-1.4-1.7-1.5-.4.1-.9.1-1.5.1h0"
                className="icon-color"
            />
        </svg>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/social/Youtube.jsx | Lines: 2-15
// KIND: ArrowFunction
() => {
    return (
        <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M55.2 45.1l-17-9.6v19.3l17-9.7zM0 .1v90h90V.1H0zm76.5 60.6c-.8 2.7-2.9 5-5.8 5.7-5.1 1.4-25.7 1.4-25.7 1.4s-20.6 0-25.7-1.4c-2.8-.8-5-3-5.8-5.7-1.4-5-1.4-15.6-1.4-15.6s0-10.5 1.4-15.5c.8-2.8 3-5 5.8-5.7 5.1-1.4 25.7-1.4 25.7-1.4s20.6 0 25.7 1.4c2.9.7 5 2.9 5.8 5.7 1.4 5 1.4 15.5 1.4 15.5s0 10.6-1.4 15.6z"
                className="bg-color"
            />
            <path
                d="M76.5 29.5c-.8-2.8-2.9-5-5.8-5.7-5.1-1.4-25.7-1.4-25.7-1.4s-20.6 0-25.7 1.4c-2.8.7-5 2.9-5.8 5.7-1.4 5-1.4 15.5-1.4 15.5s0 10.6 1.4 15.6c.8 2.7 3 5 5.8 5.7 5.1 1.4 25.7 1.4 25.7 1.4s20.6 0 25.7-1.4c2.9-.8 5-3 5.8-5.7 1.4-5 1.4-15.6 1.4-15.6s0-10.5-1.4-15.5zM38.2 54.7V35.5l17 9.6-17 9.6z"
                className="icon-color"
            />
        </svg>
    );
}
```

---

```ts
// SOURCE: src/components/99-Svg_Icon/utils/MenuIcon.tsx | Lines: 7-44
// KIND: ArrowFunction
({ isOpen }: MenuIconProps) => {
    return isOpen ? (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mnav__icon-svg"
            aria-hidden="true"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    ) : (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mnav__icon-svg"
            aria-hidden="true"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}
```

---

```ts
// SOURCE: src/components/Legal/ApplicableLaw.tsx | Lines: 3-17
// KIND: ArrowFunction
() => {
    return (
        <section className="pp">
            <h3 className="pp_section-tle">
                ⚖️ Loi applicable & Tribunal compétent
            </h3>
            <p>
                Le présent site est soumis au droit français.
                <br />
                Tout litige relatif à son interprétation ou son exécution est de
                la compétence exclusive des tribunaux français.
            </p>
        </section>
    );
}
```

---

```ts
// SOURCE: src/components/Legal/CompanyDetailsInfo.tsx | Lines: 5-77
// KIND: ArrowFunction
() => {
    return (
        <>
            <section className="pp">
                <h3 className="pp_section-tle">🖥️ Informations légales</h3>
                <ul className="pp_list">
                    <li>
                        <strong>Raison sociale :</strong> Auto-entrepreneur (M.
                        Mounir Bouakkaz)
                    </li>
                    <li>
                        <strong>Forme juridique :</strong> Entrepreneur
                        individuel, micro-entrepreneur
                    </li>
                    <li>
                        <strong>Date de début d’activité :</strong>{" "}
                        23{" "}juillet{" "}2017 (date d’inscription SIRENE){" "}
                        {/* ([allovoisins.com](https://www.allovoisins.com/p/mounirbouakkaz?utm_source=chatgpt.com)) */}
                    </li>
                    <li>
                        <strong>Code APE :</strong> 8553Z – Enseignement de la
                        conduite automobile
                    </li>
                    <li>
                        <strong>SIREN :</strong> 933{" "}849{" "}028
                    </li>
                    <li>
                        <strong>SIRET :</strong>{" "}
                        933{" "}849{" "}028{" "}00016
                    </li>
                    <li>
                        <strong>Immatriculation RCS :</strong> Dispensé
                        (micro-entrepreneur)
                    </li>
                    <li>
                        <strong>Capital social :</strong> Non applicable
                        (micro-entrepreneur)
                    </li>
                    <li>
                        <strong>TVA :</strong> TVA non applicable, art. 293 B du
                        CGI
                    </li>
                </ul>
            </section>{" "}
            <section className="pp">
                <h3 className="pp_section-tle">🏠 Siège social</h3>
                <address className="pp_list">
                    <p>
                        <strong>Adresse :</strong> 17 allée Didier Daurat, 76620
                        Le Havre, France
                    </p>
                </address>
            </section>{" "}
            <section className="pp">
                <h3 className="pp_section-tle">📞 Contacts</h3>
                <ul className="pp_list">
                    <li>
                        <strong>Téléphone :</strong>{" "}
                        <a href="tel:+33674259181">
                            06{" "}74{" "}25{" "}91{" "}81
                        </a>
                    </li>
                    <li>
                        <strong>Email :</strong>{" "}
                        <a href="mailto:contact.peurdelaconduite@gmail.com">
                            contact.peurdelaconduite@gmail.com
                        </a>
                    </li>
                </ul>
            </section>
        </>
    );
}
```

---

```ts
// SOURCE: src/components/Legal/Cookies.tsx | Lines: 3-14
// KIND: ArrowFunction
() => {
    return (
        <section className="pp">
            <h3 className="pp_section-tle">🍪 Cookies</h3>
            <p>
                Nous n’utilisons pas de cookies tiers ; seuls des cookies
                nécessaires au login utilisateur et à la validation de
                l’identité sont déposés, et leurs données ne sont pas partagées.
            </p>
        </section>
    );
}
```

---

```ts
// SOURCE: src/components/Legal/LegalNotices.tsx | Lines: 12-59
// KIND: ArrowFunction
() => {
    return (
        <div className="pp_politique-container">
            <h2 className="pp_title" id="terms-of-use">
                Informations Générales
            </h2>
            <CompanyDetailsInfo />
            <SiteEditorCreator />
            <PublicationDirector />
            <ApplicableLaw />
            <Rgpd />
            <Cookies />
            <SiteHost />
            <section className="pp">
                <h3 className="pp_section-tle">Crédits & conception</h3>
                <p>
                    Site développé par :
                    <br />
                    <strong>Jérémy Maxime Claude Lemaignent</strong> –
                    Entrepreneur individuel (micro-entrepreneur)
                </p>
                <ul className="pp_list">
                    <li>
                        <strong>SIREN :</strong> 983 194 523
                    </li>
                    <li>
                        <strong>SIRET :</strong> 983 194 523 00012
                    </li>
                    <li>
                        <strong>Adresse :</strong> 69 rue Maurice Tronele, 76620
                        Le Havre, France
                    </li>
                    <li>
                        <strong>Email :</strong>{" "}
                        <a href="mailto:web.my.dev@gmail.com">
                            web.my.dev@gmail.com
                        </a>
                    </li>
                    <li>
                        <strong>TVA :</strong> TVA non applicable, art. 293 B du
                        CGI
                    </li>
                </ul>
            </section>{" "}
            <ButtonLink href={"/contact"}>Contact</ButtonLink>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/Legal/PublicationDirector.tsx | Lines: 3-8
// KIND: ArrowFunction
() => (
    <section className="pp">
        <h3 className="pp_section-tle">Directeur de la publication</h3>
        <p>M. Mounir Bouakkaz</p>
    </section>
)
```

---

```ts
// SOURCE: src/components/Legal/Rgpd.tsx | Lines: 3-22
// KIND: ArrowFunction
() => {
    return (
        <section className="pp">
            <h3 className="pp_section-tle">🔒 Données personnelles & RGPD</h3>
            <p>
                Les données recueillies sont traitées par M. Mounir Bouakkaz sur
                la base de votre consentement. Vous disposez d’un droit d’accès,
                de rectification, d’effacement, de limitation et d’opposition
                que vous pouvez exercer à tout moment via{" "}
                <strong>
                    <a href="mailto:contact.peurdelaconduite@gmail.com">
                        ce lien
                    </a>
                </strong>
                . Vous pouvez également introduire une réclamation auprès de la
                CNIL.
            </p>
        </section>
    );
}
```

---

```ts
// SOURCE: src/components/Legal/SiteEditorCreator.tsx | Lines: 3-41
// KIND: ArrowFunction
() => {
    return (
        <section className="pp">
            <h3 className="pp_section-tle">
                🛠️ Webmaster / Création et maintenance
            </h3>
            <p>
                <strong>Nom :</strong> Jérémy Maxime Claude Lemaignent
            </p>
            <p>
                <strong>Statut :</strong> Entrepreneur individuel
                (Micro-entrepreneur)
            </p>
            <p>
                <strong>Numéro SIREN :</strong> 983 194 523
            </p>
            <p>
                <strong>Numéro SIRET :</strong> 983 194 523 00012
            </p>
            <p>
                <strong>Code NAF :</strong> 6201Z – Programmation informatique
            </p>
            <p>
                <strong>Adresse :</strong> 69 rue Maurice Tronele, 76620 Le
                Havre, France
            </p>
            <p>
                <strong>Téléphone :</strong> +33 6 35 02 06 41
            </p>
            <p>
                <strong>Email :</strong>{" "}
                <a href="mailto:web.my.dev@gmail.com">web.my.dev@gmail.com</a>
            </p>
            <p>
                <strong>TVA :</strong> TVA non applicable, art. 293 B du CGI
            </p>
        </section>
    );
}
```

---

```ts
// SOURCE: src/components/Legal/SiteHost.tsx | Lines: 3-17
// KIND: ArrowFunction
() => (
    <section className="pp">
        <h3 className="pp_section-tle">Hébergeur du site</h3>
        <p>
            <strong>Amazon Web Services EMEA SARL</strong>
        </p>
        <p>38 avenue John F. Kennedy, L-1855 Luxembourg, Luxembourg</p>
        <p>
            <strong>Support :</strong>{" "}
            <a href="mailto:awslux-receivables-support@amazon.com">
                awslux-receivables-support@amazon.com
            </a>
        </p>
    </section>
)
```

---

```ts
// SOURCE: src/components/PrivacyPolicy.tsx | Lines: 3-67
// KIND: ArrowFunction
() => {
    return (
        <div className="pp_politique-container">
            <h2 className="pp_title" id="privacy-policy">
                Politique de Confidentialité
            </h2>

            <section className="pp">
                <h3 className="pp_section-title">
                    🔒 Aucune transmission à des tiers
                </h3>
                <p>
                    Les informations que vous renseignez (nom, prénom, email,
                    téléphone, etc.){" "}
                    <strong>
                        ne sont jamais partagées avec des fournisseurs tiers
                    </strong>
                    . Elles sont utilisées uniquement pour vous contacter si
                    vous en avez fait la demande.
                </p>
            </section>

            <section className="pp">
                <h3 className="pp_section-title">🔐 Sécurité maximale</h3>
                <p>
                    Vos données sont stockées de manière sécurisée avec des
                    mesures techniques et organisationnelles destinées à{" "}
                    <strong>empêcher tout accès non autorisé</strong>.
                </p>
            </section>

            <section className="pp">
                <h3 className="pp_section-title">✅ Consentement clair</h3>
                <ul className="pp_list">
                    <li>
                        En cochant la case{" "}
                        <em>
                            <strong>
                                {`"J'ai lu et accepté les conditions d'utilisation"`}
                            </strong>
                        </em>
                        , vous acceptez notre politique de confidentialité.
                    </li>
                    <li>
                        L’inscription aux notifications d’événements est{" "}
                        <strong>facultative</strong> : vous ne recevrez
                        d’informations que si vous avez donné votre accord
                        explicite.
                    </li>
                </ul>
            </section>

            <section className="pp">
                <h3 className="pp_section-title">📬 Vos droits</h3>
                <p>
                    Vous pouvez à tout moment demander la{" "}
                    <strong>modification ou la suppression</strong> de vos
                    données en nous contactant via le formulaire prévu à cet
                    effet.
                </p>
            </section>
            <ButtonLink href={"/contact"}>Contact</ButtonLink>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/TermsOfUse.tsx | Lines: 3-65
// KIND: ArrowFunction
() => {
    return (
        <div className="pp_politique-container">
            <h2 className="pp_title" id="terms-of-use">
                Conditions Générales d&apos;Utilisation
            </h2>

            <section className="pp">
                <h3 className="pp_section-title">
                    📘 Acceptation des conditions
                </h3>
                <p>
                    En accédant à ce site, vous acceptez les présentes
                    conditions générales d&apos;utilisation sans réserve. Si
                    vous n&apos;êtes pas d&apos;accord avec l&apos;une de ces
                    conditions, veuillez ne pas utiliser le site.
                </p>
            </section>

            <section className="pp">
                <h3 className="pp_section-title">
                    🖥️ Accessibilité & responsabilités
                </h3>
                <ul className="pp_list">
                    <li>
                        Le site est accessible 24h/24 et 7j/7, sauf en cas de
                        maintenance ou de force majeure.
                    </li>
                    <li>
                        L&apos;utilisateur s&apos;engage à utiliser un matériel
                        récent et à jour, exempt de virus.
                    </li>
                    <li>
                        Le propriétaire ne pourra être tenu responsable des
                        dommages directs ou indirects liés à l&apos;utilisation
                        du site.
                    </li>
                </ul>
            </section>

            <section className="pp">
                <h3 className="pp_section-title">🔄 Modifications</h3>
                <p>
                    Les présentes conditions peuvent être modifiées à tout
                    moment. Nous vous encourageons à les consulter régulièrement
                    pour rester informé(e).
                </p>
            </section>

            <section className="pp">
                <h3 className="pp_section-title">
                    ⚖️ Propriété intellectuelle
                </h3>
                <p>
                    Tout le contenu du site (textes, images, logos, etc.) est
                    protégé par les lois sur la propriété intellectuelle. Toute
                    reproduction ou distribution sans autorisation est
                    interdite.
                </p>
            </section>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/button/ButtonLink.tsx | Lines: 4-16
// KIND: ArrowFunction
({
    children,
    href,
}: Readonly<{
    children: React.ReactNode;
    href: string;
}>) => {
    return (
        <Link className="btn-style_blue flx-c" href={href}>
            {children}
        </Link>
    );
}
```

---

```ts
// SOURCE: src/components/error-404/Error404.jsx | Lines: 8-50
// KIND: FunctionDeclaration
function Error404() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(4);
    const num = 400 + countdown;

    useEffect(() => {
        let isMounted = true;

        const countdownLoop = async () => {
            for (let i = countdown; i > 0; i--) {
                await runDelayWorker(1250);
                if (!isMounted) return;
                setCountdown(prev => prev - 1);
            }

            router.push("/");
        };

        countdownLoop();

        return () => {
            isMounted = false;
        };
    }, [router]);

    return (
        <div className="error-404">
            <div className="borderError">
                <h1 className="error-404_h1">{num}</h1>
                <p className="error-404_p">
                    Oops! The page you are requesting{" "}
                    <span>does not exist.</span>
                </p>
                <p className="error-404_countdown">
                    Redirecting in {countdown} seconds...
                </p>
                <Link href="/" className="error-404_a">
                    Return to the homepage
                </Link>
            </div>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/error-404/Error404.jsx | Lines: 13-31
// KIND: ArrowFunction
() => {
        let isMounted = true;

        const countdownLoop = async () => {
            for (let i = countdown; i > 0; i--) {
                await runDelayWorker(1250);
                if (!isMounted) return;
                setCountdown(prev => prev - 1);
            }

            router.push("/");
        };

        countdownLoop();

        return () => {
            isMounted = false;
        };
    }
```

---

```ts
// SOURCE: src/components/error-404/Error404.jsx | Lines: 16-24
// KIND: ArrowFunction
async () => {
            for (let i = countdown; i > 0; i--) {
                await runDelayWorker(1250);
                if (!isMounted) return;
                setCountdown(prev => prev - 1);
            }

            router.push("/");
        }
```

---

```ts
// SOURCE: src/components/error-404/Error404.jsx | Lines: 20-20
// KIND: ArrowFunction
prev => prev - 1
```

---

```ts
// SOURCE: src/components/error-404/Error404.jsx | Lines: 28-30
// KIND: ArrowFunction
() => {
            isMounted = false;
        }
```

---

```ts
// SOURCE: src/components/loader/Loader.jsx | Lines: 5-20
// KIND: ArrowFunction
() => {
    return (
        <div className="loader">
            <div className="ld-circleBG"></div>
            <div className="ld-frame">
                <span className="ld-dot2"></span>
                <span className="ld-dot1"></span>
                <span className="ld-dot"></span>
            </div>{" "}
            <p>
                Cette section n’est pas encore disponible. Merci de votre
                patience
            </p>
        </div>
    );
}
```

---

```ts
// SOURCE: src/components/loader/Loader.jsx | Lines: 22-22
// KIND: ArrowFunction
() => Promise.resolve(React.memo(Loader))
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/adaptableMenuData.ts | Lines: 12-19
// KIND: ArrowFunction
(subItem: DesktopSubItem): SubItem => {
    return {
        id: subItem.id,
        title: subItem.title,
        AnchorId: subItem.AnchorId,
        class: subItem.class ?? "",
    };
}
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/adaptableMenuData.ts | Lines: 21-31
// KIND: ArrowFunction
(item: DesktopMenuItem): MenuItem => {
    return {
        id: item.id,
        title: item.title,
        class: item.class ?? "",
        path: item.path,
        svg: item.svg,
        AnchorId: item.AnchorId,
        subItems: item.subItems?.map(mapSubItem),
    };
}
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/adaptableMenuData.ts | Lines: 33-40
// KIND: ArrowFunction
(items: DesktopMenuLinks): MenuLinks => {
    return {
        mainLink: items.mainLink.map(mapMenuItem),
        reservation: items.reservation?.map(mapMenuItem) ?? [],
        search: items.search?.map(mapMenuItem) ?? [],
        connection: items.connection?.map(mapMenuItem) ?? [],
    };
}
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/adaptableSections.ts | Lines: 5-28
// KIND: ArrowFunction
() => {
    const anchors = new Set<string>(baseAnchors);

    const collectFromItem = (anchorId?: string) => {
        if (!anchorId) return;
        const trimmed = anchorId.replace(/^#/, "");
        if (trimmed) {
            anchors.add(trimmed);
        }
    };

    adaptableMenuData.mainLink.forEach((item) => {
        collectFromItem(item.AnchorId);
        item.subItems?.forEach((subItem) => {
            collectFromItem(subItem.AnchorId);
        });
    });

    adaptableMenuData.reservation?.forEach((item) => collectFromItem(item.AnchorId));
    adaptableMenuData.search?.forEach((item) => collectFromItem(item.AnchorId));
    adaptableMenuData.connection?.forEach((item) => collectFromItem(item.AnchorId));

    return Array.from(anchors).map((id) => ({ id }));
}
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/adaptableSections.ts | Lines: 8-14
// KIND: ArrowFunction
(anchorId?: string) => {
        if (!anchorId) return;
        const trimmed = anchorId.replace(/^#/, "");
        if (trimmed) {
            anchors.add(trimmed);
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/adaptableSections.ts | Lines: 16-21
// KIND: ArrowFunction
(item) => {
        collectFromItem(item.AnchorId);
        item.subItems?.forEach((subItem) => {
            collectFromItem(subItem.AnchorId);
        });
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/adaptableSections.ts | Lines: 18-20
// KIND: ArrowFunction
(subItem) => {
            collectFromItem(subItem.AnchorId);
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/adaptableSections.ts | Lines: 23-23
// KIND: ArrowFunction
(item) => collectFromItem(item.AnchorId)
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/adaptableSections.ts | Lines: 24-24
// KIND: ArrowFunction
(item) => collectFromItem(item.AnchorId)
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/adaptableSections.ts | Lines: 25-25
// KIND: ArrowFunction
(item) => collectFromItem(item.AnchorId)
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/adaptableSections.ts | Lines: 27-27
// KIND: ArrowFunction
(id) => ({ id })
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/resetDesktopMenuClasses.ts | Lines: 1-9
// KIND: ArrowFunction
() => {
    const openSubMenus = document.querySelectorAll(".submenu.open");

    openSubMenus.forEach((submenu) => {
        if (submenu instanceof HTMLElement) {
            submenu.classList.remove("open");
        }
    });
}
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/resetDesktopMenuClasses.ts | Lines: 4-8
// KIND: ArrowFunction
(submenu) => {
        if (submenu instanceof HTMLElement) {
            submenu.classList.remove("open");
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/useInitialScrollDesktop.ts | Lines: 7-29
// KIND: ArrowFunction
(pathname: string | null) => {
    useEffect(() => {
        const runInitialHashScroll = () => {
            if (!window.location.hash) return;
            window.scrollTo({ top: 0 });
            scrollToHashWhenReady(window.location.hash);
        };

        const handleHashChange = () => {
            if (!window.location.hash) return;
            scrollToHashWhenReady(window.location.hash);
        };

        runInitialHashScroll();
        window.addEventListener("hashchange", handleHashChange);

        resetDesktopMenuClasses();

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [pathname]);
}
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/useInitialScrollDesktop.ts | Lines: 8-28
// KIND: ArrowFunction
() => {
        const runInitialHashScroll = () => {
            if (!window.location.hash) return;
            window.scrollTo({ top: 0 });
            scrollToHashWhenReady(window.location.hash);
        };

        const handleHashChange = () => {
            if (!window.location.hash) return;
            scrollToHashWhenReady(window.location.hash);
        };

        runInitialHashScroll();
        window.addEventListener("hashchange", handleHashChange);

        resetDesktopMenuClasses();

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/useInitialScrollDesktop.ts | Lines: 9-13
// KIND: ArrowFunction
() => {
            if (!window.location.hash) return;
            window.scrollTo({ top: 0 });
            scrollToHashWhenReady(window.location.hash);
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/useInitialScrollDesktop.ts | Lines: 15-18
// KIND: ArrowFunction
() => {
            if (!window.location.hash) return;
            scrollToHashWhenReady(window.location.hash);
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/adapters/useInitialScrollDesktop.ts | Lines: 25-27
// KIND: ArrowFunction
() => {
            window.removeEventListener("hashchange", handleHashChange);
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 30-235
// KIND: ArrowFunction
() => {
    const {
        currentRoute,
        updateRoute,
        openSubMenu,
        setOpenSubMenu
    } = useNavigation();
    const { activeSection } = useScrollContext();
    const { navRef } = useMenuBehavior();
    const pathname = usePathname();
    const [tabletMain, setTabletMain] = useState(false);
    const [openMainButton, setOpenMainButton] = useState(false);
    const [openButton, setOpenButton] = useState(false);
    const [bigMenu, setBigMenu] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [lastClickedMenu, setLastClickedMenu] = useState<string | null>(null);

    useResize(setTabletMain, setOpenMainButton, setOpenButton, setBigMenu);
    useInitialScrollDesktop(pathname);

    const updatedMenuItems = useMemo(
        () =>
            updateMenuClasses(
                adaptableMenuData.mainLink,
                adaptableMenuData.reservation,
                adaptableMenuData.search,
                adaptableMenuData.connection,
                activeSection,
                currentRoute
            ),
        [activeSection, currentRoute]
    );

    if (!tabletMain) return null;

    const showLink = (menuId: string) => {
        setOpenMenu(menuId);
        if (lastClickedMenu === menuId && openMenu !== "main") {
            return;
        }
        setLastClickedMenu(menuId);
        setOpenMenu(openMenu === menuId ? null : menuId);
    };

    const handleMouseOrFocus = (menuId: string) => {
        showLink(menuId);
        if (!bigMenu) {
            setOpenMainButton(false);
        }
    };

    const handleMainMouseOrFocus = (menuId: string) => {
        handleMouseOrFocus(menuId);
        setOpenMainButton(true);
    };

    const handleNavigationClick = (path: string) => {
        handleNavClick(path, currentRoute, updateRoute, handleScrollClick);
    };

    const shouldShowNavLinks = (menuId: string): boolean =>
        openButton || openMenu === menuId;

    const handleInteraction = (menuId: string): void => {
        if (!(openMainButton && openButton)) {
            handleMouseOrFocus(menuId);
        }
    };

    return (
        <header className="nav-bar" role="banner">
            <Logo />
            <div className="desktop-adaptable-nav">
                <div className="header">
                    <div className="head-flex">
                        <nav
                            ref={navRef}
                            className="main-nav"
                            onMouseEnter={() =>
                                !tabletMain
                                    ? undefined
                                    : handleMainMouseOrFocus("")
                            }
                            onFocus={() =>
                                !tabletMain
                                    ? undefined
                                    : handleMainMouseOrFocus("")
                            }
                        >
                            {updatedMenuItems.mainLink.map(menuItem => (
                                <AdaptableDesktopNavItem
                                    openMainButton={openMainButton}
                                    openButton={openButton}
                                    key={menuItem.id}
                                    menuItem={menuItem}
                                    onNavigationClick={handleNavigationClick}
                                    isOpen={openSubMenu === menuItem.id}
                                    handleMenuClick={menuItemId =>
                                        setOpenSubMenu(
                                            openSubMenu === menuItemId
                                                ? null
                                                : menuItemId
                                        )
                                    }
                                    showNavLinks={
                                        openMainButton ||
                                        openButton ||
                                        openMenu === menuItem.id
                                    }
                                    onMouseEnter={() =>
                                        handleMouseOrFocus(menuItem.id)
                                    }
                                    onFocus={() =>
                                        handleMouseOrFocus(menuItem.id)
                                    }
                                    onMenuToggle={showLink}
                                />
                            ))}
                        </nav>

                        {openButton ? null : <div className="head-space"></div>}

                        <nav>
                            {updatedMenuItems.reservation.map(menuItem => (
                                <AdaptableDesktopNavItem
                                    openMainButton={false}
                                    openButton
                                    key={menuItem.id}
                                    menuItem={menuItem}
                                    onNavigationClick={handleNavigationClick}
                                    isOpen={openSubMenu === menuItem.id}
                                    handleMenuClick={menuItemId =>
                                        setOpenSubMenu(
                                            openSubMenu === menuItemId
                                                ? null
                                                : menuItemId
                                        )
                                    }
                                    showNavLinks={shouldShowNavLinks(
                                        menuItem.id
                                    )}
                                    onMouseEnter={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onFocus={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onMenuToggle={showLink}
                                />
                            ))}
                        </nav>

                        <nav className="research" role="menubar">
                            {updatedMenuItems.search.map(menuItem => (
                                <AdaptableDesktopNavInput
                                    key={menuItem.id}
                                    menuItem={menuItem}
                                    showNavLinks={shouldShowNavLinks(
                                        menuItem.id
                                    )}
                                    onMouseEnter={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onFocus={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onMenuToggle={showLink}
                                />
                            ))}
                        </nav>

                        <nav className="connection">
                            {updatedMenuItems.connection.map(menuItem => (
                                <AdaptableDesktopNavItem
                                    openMainButton={false}
                                    openButton
                                    key={menuItem.id}
                                    menuItem={menuItem}
                                    onNavigationClick={handleNavigationClick}
                                    isOpen={openSubMenu === menuItem.id}
                                    handleMenuClick={menuItemId =>
                                        setOpenSubMenu(
                                            openSubMenu === menuItemId
                                                ? null
                                                : menuItemId
                                        )
                                    }
                                    showNavLinks={shouldShowNavLinks(
                                        menuItem.id
                                    )}
                                    onMouseEnter={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onFocus={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onMenuToggle={showLink}
                                />
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 51-59
// KIND: ArrowFunction
() =>
            updateMenuClasses(
                adaptableMenuData.mainLink,
                adaptableMenuData.reservation,
                adaptableMenuData.search,
                adaptableMenuData.connection,
                activeSection,
                currentRoute
            )
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 65-72
// KIND: ArrowFunction
(menuId: string) => {
        setOpenMenu(menuId);
        if (lastClickedMenu === menuId && openMenu !== "main") {
            return;
        }
        setLastClickedMenu(menuId);
        setOpenMenu(openMenu === menuId ? null : menuId);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 74-79
// KIND: ArrowFunction
(menuId: string) => {
        showLink(menuId);
        if (!bigMenu) {
            setOpenMainButton(false);
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 81-84
// KIND: ArrowFunction
(menuId: string) => {
        handleMouseOrFocus(menuId);
        setOpenMainButton(true);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 86-88
// KIND: ArrowFunction
(path: string) => {
        handleNavClick(path, currentRoute, updateRoute, handleScrollClick);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 90-91
// KIND: ArrowFunction
(menuId: string): boolean =>
        openButton || openMenu === menuId
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 93-97
// KIND: ArrowFunction
(menuId: string): void => {
        if (!(openMainButton && openButton)) {
            handleMouseOrFocus(menuId);
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 108-111
// KIND: ArrowFunction
() =>
                                !tabletMain
                                    ? undefined
                                    : handleMainMouseOrFocus("")
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 113-116
// KIND: ArrowFunction
() =>
                                !tabletMain
                                    ? undefined
                                    : handleMainMouseOrFocus("")
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 119-147
// KIND: ArrowFunction
menuItem => (
                                <AdaptableDesktopNavItem
                                    openMainButton={openMainButton}
                                    openButton={openButton}
                                    key={menuItem.id}
                                    menuItem={menuItem}
                                    onNavigationClick={handleNavigationClick}
                                    isOpen={openSubMenu === menuItem.id}
                                    handleMenuClick={menuItemId =>
                                        setOpenSubMenu(
                                            openSubMenu === menuItemId
                                                ? null
                                                : menuItemId
                                        )
                                    }
                                    showNavLinks={
                                        openMainButton ||
                                        openButton ||
                                        openMenu === menuItem.id
                                    }
                                    onMouseEnter={() =>
                                        handleMouseOrFocus(menuItem.id)
                                    }
                                    onFocus={() =>
                                        handleMouseOrFocus(menuItem.id)
                                    }
                                    onMenuToggle={showLink}
                                />
                            )
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 127-132
// KIND: ArrowFunction
menuItemId =>
                                        setOpenSubMenu(
                                            openSubMenu === menuItemId
                                                ? null
                                                : menuItemId
                                        )
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 139-140
// KIND: ArrowFunction
() =>
                                        handleMouseOrFocus(menuItem.id)
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 142-143
// KIND: ArrowFunction
() =>
                                        handleMouseOrFocus(menuItem.id)
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 153-179
// KIND: ArrowFunction
menuItem => (
                                <AdaptableDesktopNavItem
                                    openMainButton={false}
                                    openButton
                                    key={menuItem.id}
                                    menuItem={menuItem}
                                    onNavigationClick={handleNavigationClick}
                                    isOpen={openSubMenu === menuItem.id}
                                    handleMenuClick={menuItemId =>
                                        setOpenSubMenu(
                                            openSubMenu === menuItemId
                                                ? null
                                                : menuItemId
                                        )
                                    }
                                    showNavLinks={shouldShowNavLinks(
                                        menuItem.id
                                    )}
                                    onMouseEnter={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onFocus={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onMenuToggle={showLink}
                                />
                            )
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 161-166
// KIND: ArrowFunction
menuItemId =>
                                        setOpenSubMenu(
                                            openSubMenu === menuItemId
                                                ? null
                                                : menuItemId
                                        )
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 171-172
// KIND: ArrowFunction
() =>
                                        handleInteraction(menuItem.id)
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 174-175
// KIND: ArrowFunction
() =>
                                        handleInteraction(menuItem.id)
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 183-198
// KIND: ArrowFunction
menuItem => (
                                <AdaptableDesktopNavInput
                                    key={menuItem.id}
                                    menuItem={menuItem}
                                    showNavLinks={shouldShowNavLinks(
                                        menuItem.id
                                    )}
                                    onMouseEnter={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onFocus={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onMenuToggle={showLink}
                                />
                            )
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 190-191
// KIND: ArrowFunction
() =>
                                        handleInteraction(menuItem.id)
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 193-194
// KIND: ArrowFunction
() =>
                                        handleInteraction(menuItem.id)
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 202-228
// KIND: ArrowFunction
menuItem => (
                                <AdaptableDesktopNavItem
                                    openMainButton={false}
                                    openButton
                                    key={menuItem.id}
                                    menuItem={menuItem}
                                    onNavigationClick={handleNavigationClick}
                                    isOpen={openSubMenu === menuItem.id}
                                    handleMenuClick={menuItemId =>
                                        setOpenSubMenu(
                                            openSubMenu === menuItemId
                                                ? null
                                                : menuItemId
                                        )
                                    }
                                    showNavLinks={shouldShowNavLinks(
                                        menuItem.id
                                    )}
                                    onMouseEnter={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onFocus={() =>
                                        handleInteraction(menuItem.id)
                                    }
                                    onMenuToggle={showLink}
                                />
                            )
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 210-215
// KIND: ArrowFunction
menuItemId =>
                                        setOpenSubMenu(
                                            openSubMenu === menuItemId
                                                ? null
                                                : menuItemId
                                        )
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 220-221
// KIND: ArrowFunction
() =>
                                        handleInteraction(menuItem.id)
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 223-224
// KIND: ArrowFunction
() =>
                                        handleInteraction(menuItem.id)
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNav.tsx | Lines: 237-248
// KIND: ArrowFunction
() => {
    return (
        <NavigationProvider>
            <ScrollProvider>
                <SearchProvider>
                    <DesktopScrollSectionsWrapper />
                    <DesktopNavContent />
                </SearchProvider>
            </ScrollProvider>
        </NavigationProvider>
    );
}
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 30-220
// KIND: ArrowFunction
({
    menuItem,
    placeholder = "Rechercher...",
    showNavLinks,
    onMenuToggle,
    onMouseEnter,
    onFocus,
}: AdaptableDesktopNavInputProps) => {
    const router = useRouter();
    const { menuData } = useSearch();
    const listboxId = "search-subresults";

    const { query, handleSearch, handleSubmit, isSubResultOpen } =
        useSearchHandler(router);

    const SvgIcon = svgComponents[menuItem.svg as keyof typeof svgComponents];
    const [isInputFocused, setIsInputFocused] = useState(false);
    const blurTimeoutRef = useRef<number | null>(null);

    const liveResults = useMemo<LiveResult[]>(() => {
        const trimmedQuery = query.trim();
        if (!menuData || trimmedQuery.length === 0) {
            return [];
        }
        return searchQuery(menuData, trimmedQuery);
    }, [menuData, query]);

    const uniqueResults = useMemo(() => {
        return liveResults.filter(
            (result, index, self) =>
                index ===
                self.findIndex(
                    (current) =>
                        current.path === result.path &&
                        current.text.trim() === result.text.trim()
                )
        );
    }, [liveResults]);

    const displayedResults = uniqueResults.slice(0, 8);
    const shouldShowSubResults =
        showNavLinks &&
        query.trim().length > 0 &&
        isInputFocused &&
        (isSubResultOpen || displayedResults.length > 0);

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (!isActivationKey(event.key)) return;
        event.preventDefault();
        onMenuToggle(menuItem.id);
    };

    const clearBlurTimeout = () => {
        if (blurTimeoutRef.current) {
            window.clearTimeout(blurTimeoutRef.current);
            blurTimeoutRef.current = null;
        }
    };

    const handleInputFocus = () => {
        clearBlurTimeout();
        setIsInputFocused(true);
        onFocus();
    };

    const handleInputBlur = () => {
        clearBlurTimeout();
        blurTimeoutRef.current = window.setTimeout(() => {
            setIsInputFocused(false);
        }, 150);
    };

    const buildResultHref = (result: LiveResult) => {
        if (!result.path) return "";
        if (!result.go) return result.path;

        if (result.path.includes("#")) {
            const [basePath, hash] = result.path.split("#");
            const goValue = result.go.startsWith("?") ? result.go : `?${result.go}`;
            return `${basePath}${goValue}#${hash}`;
        }

        return `${result.path}${result.go}`;
    };

    const handleResultNavigation = (result: LiveResult) => {
        const href = buildResultHref(result);
        if (!href) return;
        setIsInputFocused(false);
        router.push(href);
    };

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Escape") {
            event.preventDefault();
            setIsInputFocused(false);
        }
    };

    return (
        <div
            className={getShowGroupClass(menuItem.id, showNavLinks)}
            role="menuitem"
            aria-label={`ouvrir le menu ${menuItem.title}`}
            tabIndex={0}
            onClick={() => onMenuToggle(menuItem.id)}
            onKeyDown={handleKeyDown}
            onMouseEnter={onMouseEnter}
            onFocus={onFocus}
        >
            <form
                aria-label={`Page ${menuItem.title}`}
                className="head-link"
                onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit();
                }}
            >
                {showNavLinks ? (
                    <>
                        <button
                            type="submit"
                            className="nav-icon flx-c"
                            onClick={() => handleSubmit()}
                            aria-label="Valider la recherche"
                        >
                            {SvgIcon ? <SvgIcon /> : null}
                        </button>
                        <input
                            id="search-input"
                            type="text"
                            value={query}
                            placeholder={placeholder}
                            onChange={handleSearch}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            onKeyDown={handleInputKeyDown}
                            className={`nav-link ${getShowClass(showNavLinks)}`}
                            role="combobox"
                            aria-expanded={shouldShowSubResults}
                            aria-controls={listboxId}
                            aria-haspopup="listbox"
                        />
                        {shouldShowSubResults ? (
                            <div
                                className="submenu open"
                                role="listbox"
                                aria-label="Résultats de recherche"
                                id={listboxId}
                            >
                                <div className="submenu_group">
                                    {displayedResults.map((result) => (
                                        <button
                                            key={`${result.path}-${result.text}`}
                                            type="button"
                                            role="option"
                                            aria-selected={false}
                                            className="nav-link"
                                            onMouseDown={(event) => {
                                                event.preventDefault();
                                                handleResultNavigation(result);
                                            }}
                                            onClick={() => handleResultNavigation(result)}
                                        >
                                            {result.text}
                                        </button>
                                    ))}
                                    <button
                                        type="button"
                                        role="option"
                                        aria-selected={false}
                                        className="nav-link"
                                        onMouseDown={(event) => {
                                            event.preventDefault();
                                            handleSubmit();
                                        }}
                                        onClick={() => handleSubmit()}
                                    >
                                        Voir tous les résultats
                                    </button>
                                </div>
                            </div>
                        ) : null}
                    </>
                ) : SvgIcon ? (
                    <SvgIcon />
                ) : null}
            </form>
        </div>
    );
}
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 49-55
// KIND: ArrowFunction
() => {
        const trimmedQuery = query.trim();
        if (!menuData || trimmedQuery.length === 0) {
            return [];
        }
        return searchQuery(menuData, trimmedQuery);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 57-67
// KIND: ArrowFunction
() => {
        return liveResults.filter(
            (result, index, self) =>
                index ===
                self.findIndex(
                    (current) =>
                        current.path === result.path &&
                        current.text.trim() === result.text.trim()
                )
        );
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 59-65
// KIND: ArrowFunction
(result, index, self) =>
                index ===
                self.findIndex(
                    (current) =>
                        current.path === result.path &&
                        current.text.trim() === result.text.trim()
                )
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 62-64
// KIND: ArrowFunction
(current) =>
                        current.path === result.path &&
                        current.text.trim() === result.text.trim()
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 76-80
// KIND: ArrowFunction
(event: KeyboardEvent<HTMLDivElement>) => {
        if (!isActivationKey(event.key)) return;
        event.preventDefault();
        onMenuToggle(menuItem.id);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 82-87
// KIND: ArrowFunction
() => {
        if (blurTimeoutRef.current) {
            window.clearTimeout(blurTimeoutRef.current);
            blurTimeoutRef.current = null;
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 89-93
// KIND: ArrowFunction
() => {
        clearBlurTimeout();
        setIsInputFocused(true);
        onFocus();
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 95-100
// KIND: ArrowFunction
() => {
        clearBlurTimeout();
        blurTimeoutRef.current = window.setTimeout(() => {
            setIsInputFocused(false);
        }, 150);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 97-99
// KIND: ArrowFunction
() => {
            setIsInputFocused(false);
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 102-113
// KIND: ArrowFunction
(result: LiveResult) => {
        if (!result.path) return "";
        if (!result.go) return result.path;

        if (result.path.includes("#")) {
            const [basePath, hash] = result.path.split("#");
            const goValue = result.go.startsWith("?") ? result.go : `?${result.go}`;
            return `${basePath}${goValue}#${hash}`;
        }

        return `${result.path}${result.go}`;
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 115-120
// KIND: ArrowFunction
(result: LiveResult) => {
        const href = buildResultHref(result);
        if (!href) return;
        setIsInputFocused(false);
        router.push(href);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 122-127
// KIND: ArrowFunction
(event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Escape") {
            event.preventDefault();
            setIsInputFocused(false);
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 135-135
// KIND: ArrowFunction
() => onMenuToggle(menuItem.id)
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 143-146
// KIND: ArrowFunction
(event) => {
                    event.preventDefault();
                    handleSubmit();
                }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 153-153
// KIND: ArrowFunction
() => handleSubmit()
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 181-196
// KIND: ArrowFunction
(result) => (
                                        <button
                                            key={`${result.path}-${result.text}`}
                                            type="button"
                                            role="option"
                                            aria-selected={false}
                                            className="nav-link"
                                            onMouseDown={(event) => {
                                                event.preventDefault();
                                                handleResultNavigation(result);
                                            }}
                                            onClick={() => handleResultNavigation(result)}
                                        >
                                            {result.text}
                                        </button>
                                    )
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 188-191
// KIND: ArrowFunction
(event) => {
                                                event.preventDefault();
                                                handleResultNavigation(result);
                                            }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 192-192
// KIND: ArrowFunction
() => handleResultNavigation(result)
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 202-205
// KIND: ArrowFunction
(event) => {
                                            event.preventDefault();
                                            handleSubmit();
                                        }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavInput.tsx | Lines: 206-206
// KIND: ArrowFunction
() => handleSubmit()
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavItem.tsx | Lines: 25-172
// KIND: ArrowFunction
({
    menuItem,
    onNavigationClick,
    isOpen,
    showNavLinks,
    handleMenuClick,
    onMenuToggle,
    openButton,
    openMainButton,
    onMouseEnter,
    onFocus,
}: AdaptableDesktopNavItemProps) => {
    const SvgIcon = useMemo(
        () => svgComponents[menuItem.svg as keyof typeof svgComponents],
        [menuItem.svg]
    );

    const { openSubMenu, setOpenSubMenu } = useNavigation();
    const mainNav = !openMainButton && showNavLinks && !openButton;
    const hasSubMenu = Boolean(menuItem.subItems?.length);

    const handleInteraction = (
        event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
    ) => {
        event.preventDefault();
        onMenuToggle(menuItem.id);
    };

    const hoverInteraction = (
        event: MouseEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>
    ) => {
        event.preventDefault();
        setOpenSubMenu(menuItem.id);
    };

    const renderLink = () => {
        const headLinkClassName = `head-link ${menuItem.class ?? ""}`;
        const targetHref = `${menuItem.path}${menuItem.AnchorId ?? ""}`;

        const shouldNavigateWhenSubMenuOpen = (
            anchorEl: HTMLAnchorElement
        ): boolean => {
            if (!hasSubMenu) return false;

            // Sous-menu ouvert via state
            if (openSubMenu === menuItem.id) return true;

            // Sous-menu ouvert via DOM (classe .open)
            const root = anchorEl.closest(".group_link-submenu");
            return Boolean(root?.querySelector(".submenu.open"));
        };

        const activateHeadLink = (anchorEl: HTMLAnchorElement) => {
            if (hasSubMenu) {
                // Sous-menu déjà ouvert => 2e clic / activation => navigate
                if (shouldNavigateWhenSubMenuOpen(anchorEl)) {
                    setOpenSubMenu(null);
                    onNavigationClick(targetHref);
                    return;
                }

                // 1er clic => ouvre/toggle sous-menu (comportement actuel)
                handleMenuClick(menuItem.id);
                return;
            }

            // Pas de sous-menu => navigate direct + comportement actuel (toggle/close)
            onNavigationClick(targetHref);
            handleMenuClick(menuItem.id);
        };

        const onHeadLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            activateHeadLink(event.currentTarget);
        };

        const onHeadLinkKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
            if (!isActivationKey(event.key)) return;
            event.preventDefault();
            activateHeadLink(event.currentTarget);
        };

        return (
            <a
                role={!showNavLinks ? "menuitem" : "link"}
                aria-label={`Page ${menuItem.title}`}
                className={headLinkClassName}
                href={menuItem.path}
                onClick={onHeadLinkClick}
                onKeyDown={onHeadLinkKeyDown}
                tabIndex={0}
                onMouseEnter={hoverInteraction}
                onFocus={hoverInteraction}
            >
                {SvgIcon ? <SvgIcon /> : null}
                <span className={`nav-link ${getShowClass(showNavLinks)}`}>
                    {menuItem.title}
                </span>
            </a>
        );
    };

    const renderSubMenu = () => {
        if (!menuItem.subItems?.length) return null;

        return (
            <AdaptableDesktopSubMenu
                menuItem={menuItem}
                isOpen={isOpen}
                onSubItemClick={onNavigationClick}
            />
        );
    };

    const openGroup = openMainButton || mainNav || (openButton && showNavLinks);

    if (openGroup) {
        return (
            <div
                className={`group_link-submenu ${menuItem.id} ${
                    !openMainButton ? "nav-padding" : ""
                }`}
            >
                {renderLink()}
                {renderSubMenu()}
            </div>
        );
    }

    return (
        <div
            className={getShowGroupClass(menuItem.id, showNavLinks)}
            role="menubar"
            aria-label={`ouvrir le menu ${menuItem.title}`}
            tabIndex={0}
            onClick={handleInteraction}
            onKeyDown={(event) => {
                if (!isActivationKey(event.key)) return;
                handleInteraction(event);
            }}
            onMouseEnter={onMouseEnter}
            onFocus={onFocus}
        >
            {renderLink()}
            {renderSubMenu()}
        </div>
    );
}
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavItem.tsx | Lines: 38-38
// KIND: ArrowFunction
() => svgComponents[menuItem.svg as keyof typeof svgComponents]
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavItem.tsx | Lines: 46-51
// KIND: ArrowFunction
(
        event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
    ) => {
        event.preventDefault();
        onMenuToggle(menuItem.id);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavItem.tsx | Lines: 53-58
// KIND: ArrowFunction
(
        event: MouseEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>
    ) => {
        event.preventDefault();
        setOpenSubMenu(menuItem.id);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavItem.tsx | Lines: 60-125
// KIND: ArrowFunction
() => {
        const headLinkClassName = `head-link ${menuItem.class ?? ""}`;
        const targetHref = `${menuItem.path}${menuItem.AnchorId ?? ""}`;

        const shouldNavigateWhenSubMenuOpen = (
            anchorEl: HTMLAnchorElement
        ): boolean => {
            if (!hasSubMenu) return false;

            // Sous-menu ouvert via state
            if (openSubMenu === menuItem.id) return true;

            // Sous-menu ouvert via DOM (classe .open)
            const root = anchorEl.closest(".group_link-submenu");
            return Boolean(root?.querySelector(".submenu.open"));
        };

        const activateHeadLink = (anchorEl: HTMLAnchorElement) => {
            if (hasSubMenu) {
                // Sous-menu déjà ouvert => 2e clic / activation => navigate
                if (shouldNavigateWhenSubMenuOpen(anchorEl)) {
                    setOpenSubMenu(null);
                    onNavigationClick(targetHref);
                    return;
                }

                // 1er clic => ouvre/toggle sous-menu (comportement actuel)
                handleMenuClick(menuItem.id);
                return;
            }

            // Pas de sous-menu => navigate direct + comportement actuel (toggle/close)
            onNavigationClick(targetHref);
            handleMenuClick(menuItem.id);
        };

        const onHeadLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            activateHeadLink(event.currentTarget);
        };

        const onHeadLinkKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
            if (!isActivationKey(event.key)) return;
            event.preventDefault();
            activateHeadLink(event.currentTarget);
        };

        return (
            <a
                role={!showNavLinks ? "menuitem" : "link"}
                aria-label={`Page ${menuItem.title}`}
                className={headLinkClassName}
                href={menuItem.path}
                onClick={onHeadLinkClick}
                onKeyDown={onHeadLinkKeyDown}
                tabIndex={0}
                onMouseEnter={hoverInteraction}
                onFocus={hoverInteraction}
            >
                {SvgIcon ? <SvgIcon /> : null}
                <span className={`nav-link ${getShowClass(showNavLinks)}`}>
                    {menuItem.title}
                </span>
            </a>
        );
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavItem.tsx | Lines: 64-75
// KIND: ArrowFunction
(
            anchorEl: HTMLAnchorElement
        ): boolean => {
            if (!hasSubMenu) return false;

            // Sous-menu ouvert via state
            if (openSubMenu === menuItem.id) return true;

            // Sous-menu ouvert via DOM (classe .open)
            const root = anchorEl.closest(".group_link-submenu");
            return Boolean(root?.querySelector(".submenu.open"));
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavItem.tsx | Lines: 77-94
// KIND: ArrowFunction
(anchorEl: HTMLAnchorElement) => {
            if (hasSubMenu) {
                // Sous-menu déjà ouvert => 2e clic / activation => navigate
                if (shouldNavigateWhenSubMenuOpen(anchorEl)) {
                    setOpenSubMenu(null);
                    onNavigationClick(targetHref);
                    return;
                }

                // 1er clic => ouvre/toggle sous-menu (comportement actuel)
                handleMenuClick(menuItem.id);
                return;
            }

            // Pas de sous-menu => navigate direct + comportement actuel (toggle/close)
            onNavigationClick(targetHref);
            handleMenuClick(menuItem.id);
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavItem.tsx | Lines: 96-99
// KIND: ArrowFunction
(event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            activateHeadLink(event.currentTarget);
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavItem.tsx | Lines: 101-105
// KIND: ArrowFunction
(event: KeyboardEvent<HTMLAnchorElement>) => {
            if (!isActivationKey(event.key)) return;
            event.preventDefault();
            activateHeadLink(event.currentTarget);
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavItem.tsx | Lines: 127-137
// KIND: ArrowFunction
() => {
        if (!menuItem.subItems?.length) return null;

        return (
            <AdaptableDesktopSubMenu
                menuItem={menuItem}
                isOpen={isOpen}
                onSubItemClick={onNavigationClick}
            />
        );
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopNavItem.tsx | Lines: 161-164
// KIND: ArrowFunction
(event) => {
                if (!isActivationKey(event.key)) return;
                handleInteraction(event);
            }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopSubMenu.tsx | Lines: 15-59
// KIND: ArrowFunction
({
    menuItem,
    isOpen,
    onSubItemClick,
}: DesktopSubMenuProps) => {
    const { setOpenSubMenu } = useNavigation();

    const interactionHandlers = useMemo(
        () =>
            makeInteractionHandlers<string>((path) => {
                onSubItemClick(path);
                setOpenSubMenu(null);
            }),
        [onSubItemClick, setOpenSubMenu]
    );

    if (!menuItem.subItems || menuItem.subItems.length === 0) return null;

    return (
        <div className={`submenu ${isOpen ? "open" : ""}`}>
            <div className="submenu_group">
                {menuItem.subItems.map((subItem) => {
                    const fullPath = `${menuItem.path}${subItem.AnchorId}`;
                    return (
                        <a
                            key={subItem.id}
                            aria-label={`Section ${subItem.title}`}
                            href={fullPath}
                            className={`nav-link ${subItem.class}`}
                            tabIndex={0}
                            onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                                interactionHandlers.onClick(fullPath, event)
                            }
                            onKeyDown={(event: KeyboardEvent<HTMLAnchorElement>) =>
                                interactionHandlers.onKeyDown(fullPath, event)
                            }
                        >
                            {subItem.title}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopSubMenu.tsx | Lines: 23-27
// KIND: ArrowFunction
() =>
            makeInteractionHandlers<string>((path) => {
                onSubItemClick(path);
                setOpenSubMenu(null);
            })
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopSubMenu.tsx | Lines: 24-27
// KIND: ArrowFunction
(path) => {
                onSubItemClick(path);
                setOpenSubMenu(null);
            }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopSubMenu.tsx | Lines: 36-55
// KIND: ArrowFunction
(subItem) => {
                    const fullPath = `${menuItem.path}${subItem.AnchorId}`;
                    return (
                        <a
                            key={subItem.id}
                            aria-label={`Section ${subItem.title}`}
                            href={fullPath}
                            className={`nav-link ${subItem.class}`}
                            tabIndex={0}
                            onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                                interactionHandlers.onClick(fullPath, event)
                            }
                            onKeyDown={(event: KeyboardEvent<HTMLAnchorElement>) =>
                                interactionHandlers.onKeyDown(fullPath, event)
                            }
                        >
                            {subItem.title}
                        </a>
                    );
                }
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopSubMenu.tsx | Lines: 45-46
// KIND: ArrowFunction
(event: MouseEvent<HTMLAnchorElement>) =>
                                interactionHandlers.onClick(fullPath, event)
```

---

```ts
// SOURCE: src/features/desktop-nav/components/AdaptableDesktopSubMenu.tsx | Lines: 48-49
// KIND: ArrowFunction
(event: KeyboardEvent<HTMLAnchorElement>) =>
                                interactionHandlers.onKeyDown(fullPath, event)
```

---

```ts
// SOURCE: src/features/desktop-nav/components/DesktopScrollSectionsWrapper.tsx | Lines: 6-9
// KIND: ArrowFunction
() => {
    useDesktopScrollAnchors(desktopSections);
    return null;
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/context/NavigationContext.tsx | Lines: 27-33
// KIND: ArrowFunction
(route: string): string => {
    const [pathnamePart] = route.split("#");
    if (!pathnamePart) {
        return "/";
    }
    return pathnamePart;
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/context/NavigationContext.tsx | Lines: 35-38
// KIND: ArrowFunction
(
    currentRoute: string,
    pathname: string
): boolean => getPathnameFromRoute(currentRoute) !== pathname
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/context/NavigationContext.tsx | Lines: 42-94
// KIND: ArrowFunction
({ children }) => {
    const router = useRouter();
    const pathname = usePathname();

    const [currentRoute, setCurrentRoute] = useState(pathname || "/");
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const [showNavLinks, setShowNavLinks] = useState<boolean>(true);

    const resetDisplayStyles = useCallback(() => {
        setOpenSubMenu(null);
    }, []);

    useEffect(() => {
        const nextRoute = pathname || "/";
        setCurrentRoute(prev => {
            const shouldUpdate = shouldUpdateRouteFromPathname(prev, nextRoute);
            return shouldUpdate ? nextRoute : prev;
        });
    }, [pathname]);

    const updateRoute = useCallback(
        (path: string) => {
            setCurrentRoute(path);
            router.push(path);
        },
        [router]
    );

    const contextValue = useMemo(
        () => ({
            currentRoute,
            updateRoute,
            openSubMenu,
            setOpenSubMenu,
            resetDisplayStyles,
            showNavLinks,
            setShowNavLinks
        }),
        [
            currentRoute,
            updateRoute,
            openSubMenu,
            resetDisplayStyles,
            showNavLinks
        ]
    );

    return (
        <NavigationContext.Provider value={contextValue}>
            {children}
        </NavigationContext.Provider>
    );
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/context/NavigationContext.tsx | Lines: 50-52
// KIND: ArrowFunction
() => {
        setOpenSubMenu(null);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/context/NavigationContext.tsx | Lines: 54-60
// KIND: ArrowFunction
() => {
        const nextRoute = pathname || "/";
        setCurrentRoute(prev => {
            const shouldUpdate = shouldUpdateRouteFromPathname(prev, nextRoute);
            return shouldUpdate ? nextRoute : prev;
        });
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/context/NavigationContext.tsx | Lines: 56-59
// KIND: ArrowFunction
prev => {
            const shouldUpdate = shouldUpdateRouteFromPathname(prev, nextRoute);
            return shouldUpdate ? nextRoute : prev;
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/context/NavigationContext.tsx | Lines: 63-66
// KIND: ArrowFunction
(path: string) => {
            setCurrentRoute(path);
            router.push(path);
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/context/NavigationContext.tsx | Lines: 71-79
// KIND: ArrowFunction
() => ({
            currentRoute,
            updateRoute,
            openSubMenu,
            setOpenSubMenu,
            resetDisplayStyles,
            showNavLinks,
            setShowNavLinks
        })
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/context/ScrollContext.tsx | Lines: 12-29
// KIND: ArrowFunction
({ children }: { children: React.ReactNode }) => {
    const [activeSection, setActiveSection] = useState<string>("");

    // Mémoriser l'objet value pour éviter sa recréation à chaque rendu
    const contextValue = useMemo(
        () => ({
            activeSection,
            setActiveSection,
        }),
        [activeSection]
    );

    return (
        <ScrollContext.Provider value={contextValue}>
            {children}
        </ScrollContext.Provider>
    );
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/context/ScrollContext.tsx | Lines: 17-20
// KIND: ArrowFunction
() => ({
            activeSection,
            setActiveSection,
        })
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/context/ScrollContext.tsx | Lines: 31-39
// KIND: ArrowFunction
() => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error(
            "useScrollContext must be used within a ScrollProvider"
        );
    }
    return context;
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/hooks/useDesktopScrollAnchors.ts | Lines: 12-25
// KIND: ArrowFunction
(sections: { id: string }[]) => {
    const { setActiveSection } = useScrollContext();
    useEffect(() => {
        const handleScroll = () => {
            scrollInView(sections);
            addNewUrl(currentSectionId);
            updateSectionClasses(sections, setActiveSection);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sections, setActiveSection]);
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/hooks/useDesktopScrollAnchors.ts | Lines: 14-24
// KIND: ArrowFunction
() => {
        const handleScroll = () => {
            scrollInView(sections);
            addNewUrl(currentSectionId);
            updateSectionClasses(sections, setActiveSection);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/hooks/useDesktopScrollAnchors.ts | Lines: 15-19
// KIND: ArrowFunction
() => {
            scrollInView(sections);
            addNewUrl(currentSectionId);
            updateSectionClasses(sections, setActiveSection);
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/hooks/useDesktopScrollAnchors.ts | Lines: 21-23
// KIND: ArrowFunction
() => {
            window.removeEventListener("scroll", handleScroll);
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/hooks/useResize.ts | Lines: 5-45
// KIND: ArrowFunction
(
    setTabletMain: React.Dispatch<React.SetStateAction<boolean>>,
    setOpenMainButton: React.Dispatch<React.SetStateAction<boolean>>,
    setOpenButton: React.Dispatch<React.SetStateAction<boolean>>,
    setBigMenu: React.Dispatch<React.SetStateAction<boolean>>
) => {
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 1024) {
                setTabletMain(false);
                setOpenMainButton(false);
                setOpenButton(false);
                setBigMenu(false);
            } else if (width < 1170) {
                setBigMenu(false);
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(false);
            } else if (width < 1440) {
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(false);
                setBigMenu(true);
            } else {
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(true);
            }
        };

        // Initialisation lors du montage
        handleResize();

        // Ajout d'un écouteur sur les changements de taille d'écran
        window.addEventListener("resize", handleResize);

        // Nettoyage lors du démontage
        return () => window.removeEventListener("resize", handleResize);
    }, [setBigMenu, setOpenButton, setOpenMainButton, setTabletMain]);
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/hooks/useResize.ts | Lines: 11-44
// KIND: ArrowFunction
() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 1024) {
                setTabletMain(false);
                setOpenMainButton(false);
                setOpenButton(false);
                setBigMenu(false);
            } else if (width < 1170) {
                setBigMenu(false);
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(false);
            } else if (width < 1440) {
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(false);
                setBigMenu(true);
            } else {
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(true);
            }
        };

        // Initialisation lors du montage
        handleResize();

        // Ajout d'un écouteur sur les changements de taille d'écran
        window.addEventListener("resize", handleResize);

        // Nettoyage lors du démontage
        return () => window.removeEventListener("resize", handleResize);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/hooks/useResize.ts | Lines: 12-34
// KIND: ArrowFunction
() => {
            const width = window.innerWidth;
            if (width < 1024) {
                setTabletMain(false);
                setOpenMainButton(false);
                setOpenButton(false);
                setBigMenu(false);
            } else if (width < 1170) {
                setBigMenu(false);
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(false);
            } else if (width < 1440) {
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(false);
                setBigMenu(true);
            } else {
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(true);
            }
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/hooks/useResize.ts | Lines: 43-43
// KIND: ArrowFunction
() => window.removeEventListener("resize", handleResize)
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/fnScrollUtils.ts | Lines: 16-22
// KIND: ArrowFunction
(raw: string): number | null => {
    const v = raw.trim().toLowerCase();
    if (!v) return null;
    // Supporte "72px" ou "72"
    const n = Number.parseFloat(v.replace("px", ""));
    return Number.isFinite(n) ? n : null;
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/fnScrollUtils.ts | Lines: 24-44
// KIND: ArrowFunction
(opts?: ScrollOffsetOptions): number => {
    if (typeof window === "undefined") return 0;

    // 1) CSS var
    const cssRaw = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--scroll-offset");
    const cssPx = parsePx(cssRaw);
    const baseFromCss = cssPx ?? 0;

    // 2) Fallback header height (si pas de CSS var)
    const selector =
        opts?.headerSelector ?? "[data-scroll-header], .header, header";
    const header = document.querySelector<HTMLElement>(selector);
    const baseFromHeader = header ? header.getBoundingClientRect().height : 0;

    const base = cssPx !== null ? baseFromCss : baseFromHeader;
    const extra = opts?.extra ?? 0;

    return Math.max(0, base + extra);
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/fnScrollUtils.ts | Lines: 46-90
// KIND: ArrowFunction
(targetId: string): void => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const start = window.scrollY;

    // Offset global + offset spécifique au bloc (optionnel)
    const elementExtraRaw = element.getAttribute("data-scroll-offset") ?? "";
    const elementExtra = parsePx(elementExtraRaw) ?? 0;

    const offset = getScrollOffset({ extra: elementExtra });

    const endRaw = element.getBoundingClientRect().top + window.scrollY - offset;
    const end = Math.max(0, endRaw);

    const duration = 750;
    const startTime = performance.now();

    const worker = new Worker(
        new URL("../../../../../workers/scrollSmoothWorker.js", import.meta.url)
    );

    const animateScroll = (currentTime: number): void => {
        const data: ScrollSmoothWorkerData = {
            start,
            end,
            duration,
            startTime,
            currentTime,
        };
        worker.postMessage(data);
    };

    worker.onmessage = (event: MessageEvent<ScrollSmoothWorkerResponse>): void => {
        const { newScrollY, progress } = event.data;
        window.scrollTo(0, newScrollY);
        if (progress < 1) {
            window.requestAnimationFrame(animateScroll);
        } else {
            worker.terminate();
        }
    };

    window.requestAnimationFrame(animateScroll);
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/fnScrollUtils.ts | Lines: 68-77
// KIND: ArrowFunction
(currentTime: number): void => {
        const data: ScrollSmoothWorkerData = {
            start,
            end,
            duration,
            startTime,
            currentTime,
        };
        worker.postMessage(data);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/fnScrollUtils.ts | Lines: 79-87
// KIND: ArrowFunction
(event: MessageEvent<ScrollSmoothWorkerResponse>): void => {
        const { newScrollY, progress } = event.data;
        window.scrollTo(0, newScrollY);
        if (progress < 1) {
            window.requestAnimationFrame(animateScroll);
        } else {
            worker.terminate();
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/fnScrollUtils.ts | Lines: 92-125
// KIND: ArrowFunction
(
    hash: string,
    options?: { maxAttempts?: number }
): void => {
    if (typeof window === "undefined") return;
    const targetId = hash.replace(/^#/, "");
    if (!targetId) return;

    const maxAttempts = options?.maxAttempts ?? 10;
    let attempts = 0;

    const tryScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
            const elementExtraRaw =
                element.getAttribute("data-scroll-offset") ?? "";
            const elementExtra = parsePx(elementExtraRaw) ?? 0;
            const offset = getScrollOffset({ extra: elementExtra });
            const currentTop = element.getBoundingClientRect().top;
            if (Math.abs(currentTop - offset) <= 2) {
                return;
            }
            handleScrollClick(targetId);
            return;
        }

        if (attempts < maxAttempts) {
            attempts += 1;
            window.requestAnimationFrame(tryScroll);
        }
    };

    window.requestAnimationFrame(tryScroll);
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/fnScrollUtils.ts | Lines: 103-122
// KIND: ArrowFunction
() => {
        const element = document.getElementById(targetId);
        if (element) {
            const elementExtraRaw =
                element.getAttribute("data-scroll-offset") ?? "";
            const elementExtra = parsePx(elementExtraRaw) ?? 0;
            const offset = getScrollOffset({ extra: elementExtra });
            const currentTop = element.getBoundingClientRect().top;
            if (Math.abs(currentTop - offset) <= 2) {
                return;
            }
            handleScrollClick(targetId);
            return;
        }

        if (attempts < maxAttempts) {
            attempts += 1;
            window.requestAnimationFrame(tryScroll);
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/fnScrollUtils.ts | Lines: 136-165
// KIND: ArrowFunction
(
    path: string,
    currentRoute: string | undefined,
    updateRoute: (route: string) => void,
    handleScrollClick?: (hash: string) => void
): void => {
    if (!currentRoute) {
        return;
    }

    const [currentPath, currentHash] = currentRoute.split("#");
    const [targetPath, targetHash] = path.split("#");

    ifNav({
        currentPath,
        targetPath,
        targetHash,
        currentHash,
        updateRoute,
    });

    elseNav({
        currentPath,
        targetPath,
        targetHash,
        currentHash,
        updateRoute,
        handleScrollClick,
    });
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/fnScrollUtils.ts | Lines: 167-185
// KIND: FunctionDeclaration
function ifNav({
    currentPath,
    targetPath,
    targetHash,
    currentHash,
    updateRoute,
}: NavParams): void {
    if (currentPath !== targetPath) {
        updateRoute(targetPath);

        if (targetHash === undefined) {
            return;
        }

        if (targetHash !== currentHash) {
            updateRoute(`${targetPath}#${targetHash}`);
        }
    }
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/fnScrollUtils.ts | Lines: 187-207
// KIND: FunctionDeclaration
function elseNav({
    currentPath,
    targetPath,
    targetHash,
    currentHash,
    updateRoute,
    handleScrollClick,
}: NavParams): void {
    if (currentPath === targetPath) {
        updateRoute(targetPath);

        if (targetHash === undefined) {
            handleScrollClick?.(`scroll-start`);
        } else if (targetHash !== currentHash) {
            handleScrollClick?.(targetHash);
            updateRoute(`${targetPath}#${targetHash}`);
        } else if (targetHash === currentHash) {
            updateRoute(`${targetPath}#${targetHash}`);
        }
    }
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/handlers.ts | Lines: 11-12
// KIND: ArrowFunction
(key: string): boolean =>
    key === "Enter" || key === " " || key === "Spacebar"
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/handlers.ts | Lines: 34-41
// KIND: ArrowFunction
(effects?: HandlerSideEffects): void => {
    if (!effects) return;
    effects.before?.();
    if (effects.close) {
        effects.close(effects.delay);
    }
    effects.after?.();
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/handlers.ts | Lines: 47-59
// KIND: ArrowFunction
<
    TPayload,
    TElement extends HTMLElement = HTMLElement,
>(
    onPayload: (payload: TPayload) => void,
    effects?: HandlerSideEffects
) => {
    return (payload: TPayload, event: ClickEvent<TElement>): void => {
        event.preventDefault();
        onPayload(payload);
        runSideEffects(effects);
    };
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/handlers.ts | Lines: 54-58
// KIND: ArrowFunction
(payload: TPayload, event: ClickEvent<TElement>): void => {
        event.preventDefault();
        onPayload(payload);
        runSideEffects(effects);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/handlers.ts | Lines: 65-78
// KIND: ArrowFunction
<
    TPayload,
    TElement extends HTMLElement = HTMLElement,
>(
    onPayload: (payload: TPayload) => void,
    effects?: HandlerSideEffects
) => {
    return (payload: TPayload, event: KeyEvent<TElement>): void => {
        if (!isActivationKey(event.key)) return;
        event.preventDefault();
        onPayload(payload);
        runSideEffects(effects);
    };
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/handlers.ts | Lines: 72-77
// KIND: ArrowFunction
(payload: TPayload, event: KeyEvent<TElement>): void => {
        if (!isActivationKey(event.key)) return;
        event.preventDefault();
        onPayload(payload);
        runSideEffects(effects);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/handlers.ts | Lines: 83-97
// KIND: ArrowFunction
<
    TPayload,
    TElement extends HTMLElement = HTMLElement,
>(
    onPayload: (payload: TPayload) => void,
    effects?: HandlerSideEffects
) => {
    return {
        onClick: makePayloadClickHandler<TPayload, TElement>(onPayload, effects),
        onKeyDown: makeActivationHandler<TPayload, TElement>(
            onPayload,
            effects
        ),
    };
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/sections.ts | Lines: 3-19
// KIND: FunctionDeclaration
function scrollInView(sections: { id: string }[]) {
    currentSectionId = "";
    const scrollPosition = window.scrollY;
    sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const isInView =
                scrollPosition >= sectionTop - 100 &&
                scrollPosition < sectionTop + sectionHeight;
            if (isInView) {
                currentSectionId = id;
            }
        }
    });
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/sections.ts | Lines: 6-18
// KIND: ArrowFunction
({ id }) => {
        const section = document.getElementById(id);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const isInView =
                scrollPosition >= sectionTop - 100 &&
                scrollPosition < sectionTop + sectionHeight;
            if (isInView) {
                currentSectionId = id;
            }
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/sections.ts | Lines: 21-36
// KIND: FunctionDeclaration
function updateSectionClasses(
    sections: { id: string }[],
    setActiveSection: (id: string) => void
) {
    sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
            if (id === currentSectionId) {
                section.classList.add("active-section");
                setActiveSection(id);
            } else {
                section.classList.remove("active-section");
            }
        }
    });
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/sections.ts | Lines: 25-35
// KIND: ArrowFunction
({ id }) => {
        const section = document.getElementById(id);
        if (section) {
            if (id === currentSectionId) {
                section.classList.add("active-section");
                setActiveSection(id);
            } else {
                section.classList.remove("active-section");
            }
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/sections.ts | Lines: 38-45
// KIND: FunctionDeclaration
function addNewUrl(currentSection: string) {
    if (currentSection) {
        const newUrl = `#${currentSection}`;
        if (window.location.hash !== newUrl) {
            window.history.replaceState(null, "", newUrl);
        }
    }
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/sessionStorage/useSessionStorage.tsx | Lines: 4-22
// KIND: FunctionDeclaration
function useSessionStorage<T>(key: string, initialValue: T) {
    const isBrowser = useIsBrowser();

    const [storedValue, setStoredValue] = useState<T>(() => {
        if (!isBrowser) {
            return initialValue;
        }
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
        if (isBrowser) {
            sessionStorage.setItem(key, JSON.stringify(storedValue));
        }
    }, [key, storedValue, isBrowser]);

    return [storedValue, setStoredValue] as const;
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/sessionStorage/useSessionStorage.tsx | Lines: 7-13
// KIND: ArrowFunction
() => {
        if (!isBrowser) {
            return initialValue;
        }
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/sessionStorage/useSessionStorage.tsx | Lines: 15-19
// KIND: ArrowFunction
() => {
        if (isBrowser) {
            sessionStorage.setItem(key, JSON.stringify(storedValue));
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/useIsBrowser.ts | Lines: 3-11
// KIND: ArrowFunction
() => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(typeof window !== "undefined");
    }, []);

    return isBrowser;
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/useIsBrowser.ts | Lines: 6-8
// KIND: ArrowFunction
() => {
        setIsBrowser(typeof window !== "undefined");
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/useURLParams.tsx | Lines: 5-10
// KIND: ArrowFunction
(
    searchParams: URLSearchParams,
    key: string
): string | null => {
    return searchParams.get(key);
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/useURLParams.tsx | Lines: 12-14
// KIND: ArrowFunction
(): Location => {
    return window.location;
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/useURLParams.tsx | Lines: 16-19
// KIND: ArrowFunction
(): string => {
    const hash = getWordURL().hash.split("?")[0];
    return hash || "";
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/useURLParams.tsx | Lines: 21-30
// KIND: ArrowFunction
(key: string): string | null => {
    const { search, hash } = getWordURL();
    let queryString = search;
    const hashIndex = hash.indexOf("?");
    if (hashIndex !== -1) {
        queryString += hash.slice(hashIndex);
    }
    const params = new URLSearchParams(queryString);
    return params.get(key);
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/useURLParams.tsx | Lines: 32-82
// KIND: ArrowFunction
() => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (searchParams: URLSearchParams, name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        []
    );

    const deleteURLParam = (
        router: ReturnType<typeof useRouter>,
        searchParams: URLSearchParams,
        key: string
    ): void => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete(key);
        const currentHash = getURLHash();
        const newUrl = params.toString()
            ? `${currentHash}?${params.toString()}`
            : currentHash;
        router.push(newUrl);
    };

    const getParams = (key: string) => {
        if (searchParams) {
            return getParamsFromSearch(searchParams, key);
        }
        return null;
    };

    const getParam = (key: string) => getParamFromHash(key);

    const setParam = (key: string, value: string) => {
        if (searchParams) {
            const newQueryString = createQueryString(searchParams, key, value);
            router.push(`?${newQueryString}`);
        }
    };

    const deleteParam = (key: string) => {
        if (searchParams) {
            deleteURLParam(router, searchParams, key);
        }
    };

    return { getParams, getParam, setParam, deleteParam };
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/useURLParams.tsx | Lines: 37-41
// KIND: ArrowFunction
(searchParams: URLSearchParams, name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/useURLParams.tsx | Lines: 45-57
// KIND: ArrowFunction
(
        router: ReturnType<typeof useRouter>,
        searchParams: URLSearchParams,
        key: string
    ): void => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete(key);
        const currentHash = getURLHash();
        const newUrl = params.toString()
            ? `${currentHash}?${params.toString()}`
            : currentHash;
        router.push(newUrl);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/useURLParams.tsx | Lines: 59-64
// KIND: ArrowFunction
(key: string) => {
        if (searchParams) {
            return getParamsFromSearch(searchParams, key);
        }
        return null;
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/useURLParams.tsx | Lines: 66-66
// KIND: ArrowFunction
(key: string) => getParamFromHash(key)
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/useURLParams.tsx | Lines: 68-73
// KIND: ArrowFunction
(key: string, value: string) => {
        if (searchParams) {
            const newQueryString = createQueryString(searchParams, key, value);
            router.push(`?${newQueryString}`);
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/navigation/utils/useURLParams.tsx | Lines: 75-79
// KIND: ArrowFunction
(key: string) => {
        if (searchParams) {
            deleteURLParam(router, searchParams, key);
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/context/SearchContext.tsx | Lines: 25-47
// KIND: ArrowFunction
({
    children
}) => {
    const [results, setResults] = useState<Result[]>([]);
    const [menuData, setMenuData] = useState<MenuLinks | null>(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const data = initializeMenuWithContent();
        setMenuData(data);
    }, []);

    const contextValue: SearchContextType = useMemo(
        () => ({ results, setResults, menuData, query, setQuery }),
        [results, menuData, query]
    );

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/context/SearchContext.tsx | Lines: 32-35
// KIND: ArrowFunction
() => {
        const data = initializeMenuWithContent();
        setMenuData(data);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/context/SearchContext.tsx | Lines: 38-38
// KIND: ArrowFunction
() => ({ results, setResults, menuData, query, setQuery })
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/hooks/useSearchHandler.tsx | Lines: 8-114
// KIND: ArrowFunction
(router: ReturnType<typeof useRouter>) => {
    const { menuData, setResults, query, setQuery } = useSearch();
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isSubResultOpen, setSubResultOpen] = useState<boolean>(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [filteredItems, setFilteredItems] = useState<SearchItem[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [noResultsFound, setNoResultsFound] = useState(false);

    const { setParam, deleteParam } = useURLParams();

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const newQuery = e.target.value.trim();
            setQuery(newQuery);

            if (newQuery.length < 3) {
                setSuggestions([]);
                setSubResultOpen(false);
                return;
            }

            if (menuData) {
                const filteredMenu = searchQuery(menuData, newQuery);
                const uniqueSuggestions = filterSuggestions(
                    filteredMenu,
                    newQuery
                );
                setSuggestions(uniqueSuggestions);
                setSubResultOpen(uniqueSuggestions.length > 0);
            }
        },
        [menuData, setQuery]
    );

    const handleSubmit = (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        e?:
            | React.FormEvent<HTMLFormElement>
            | React.KeyboardEvent<HTMLInputElement>
            | React.MouseEvent<HTMLButtonElement>
    ) => {
        const trimmedQuery = query.trim();
        if (trimmedQuery.length < 1) return;

        setIsSubmitted(true);

        if (menuData) {
            const resultsForQuery = searchQuery(menuData, trimmedQuery);
            setResults(resultsForQuery);

            if (resultsForQuery.length === 0) {
                router.push(
                    `/search?badKeyWord=${encodeURIComponent(trimmedQuery)}`
                );
            } else {
                router.push(
                    `/search?query=${encodeURIComponent(trimmedQuery)}`
                );
            }
        }

        setSubResultOpen(false);
    };

    const handleSuggestionClick = (suggestion: string) => {
        if (menuData) {
            const resultsForSuggestion = searchQuery(menuData, suggestion);

            setQuery(suggestion);
            setResults(resultsForSuggestion);
            setFilteredItems(resultsForSuggestion);
            setSubResultOpen(false);
            setIsSubmitted(true);
            setNoResultsFound(resultsForSuggestion.length === 0);

            if (resultsForSuggestion.length === 0) {
                setParam("badKeyWord", suggestion);
            } else {
                setParam("query", suggestion);
                router.push(`/search?query=${encodeURIComponent(suggestion)}`);
            }
        }
    };

    const handleReset = useCallback(() => {
        setQuery("");
        setSuggestions([]);
        setSubResultOpen(false);
        setResults([]);
        setIsSubmitted(false);
        deleteParam("query");
        deleteParam("badKeyWord");
    }, [setQuery, setResults, deleteParam]);

    return {
        query,
        suggestions,
        isSubmitted,
        isSubResultOpen,
        handleSearch,
        handleSubmit,
        handleReset,
        handleSuggestionClick,
    };
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/hooks/useSearchHandler.tsx | Lines: 21-40
// KIND: ArrowFunction
(e: React.ChangeEvent<HTMLInputElement>) => {
            const newQuery = e.target.value.trim();
            setQuery(newQuery);

            if (newQuery.length < 3) {
                setSuggestions([]);
                setSubResultOpen(false);
                return;
            }

            if (menuData) {
                const filteredMenu = searchQuery(menuData, newQuery);
                const uniqueSuggestions = filterSuggestions(
                    filteredMenu,
                    newQuery
                );
                setSuggestions(uniqueSuggestions);
                setSubResultOpen(uniqueSuggestions.length > 0);
            }
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/hooks/useSearchHandler.tsx | Lines: 44-72
// KIND: ArrowFunction
(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        e?:
            | React.FormEvent<HTMLFormElement>
            | React.KeyboardEvent<HTMLInputElement>
            | React.MouseEvent<HTMLButtonElement>
    ) => {
        const trimmedQuery = query.trim();
        if (trimmedQuery.length < 1) return;

        setIsSubmitted(true);

        if (menuData) {
            const resultsForQuery = searchQuery(menuData, trimmedQuery);
            setResults(resultsForQuery);

            if (resultsForQuery.length === 0) {
                router.push(
                    `/search?badKeyWord=${encodeURIComponent(trimmedQuery)}`
                );
            } else {
                router.push(
                    `/search?query=${encodeURIComponent(trimmedQuery)}`
                );
            }
        }

        setSubResultOpen(false);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/hooks/useSearchHandler.tsx | Lines: 74-92
// KIND: ArrowFunction
(suggestion: string) => {
        if (menuData) {
            const resultsForSuggestion = searchQuery(menuData, suggestion);

            setQuery(suggestion);
            setResults(resultsForSuggestion);
            setFilteredItems(resultsForSuggestion);
            setSubResultOpen(false);
            setIsSubmitted(true);
            setNoResultsFound(resultsForSuggestion.length === 0);

            if (resultsForSuggestion.length === 0) {
                setParam("badKeyWord", suggestion);
            } else {
                setParam("query", suggestion);
                router.push(`/search?query=${encodeURIComponent(suggestion)}`);
            }
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/hooks/useSearchHandler.tsx | Lines: 94-102
// KIND: ArrowFunction
() => {
        setQuery("");
        setSuggestions([]);
        setSubResultOpen(false);
        setResults([]);
        setIsSubmitted(false);
        deleteParam("query");
        deleteParam("badKeyWord");
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/initializeMenu.ts | Lines: 5-10
// KIND: FunctionDeclaration
function initializeMenuWithContent() {
    return {
        ...attachContentToMenu(menuItems, contentIndex),
        contentIndex,
    };
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/searchMenu.js | Lines: 1-118
// KIND: FunctionDeclaration
function searchQuery(jsonData, query) {
    const results = [];
    const seenResults = new Set();

    const ignoredKeys = [
        "id",
        "AnchorId",
        "class",
        "svg",
        "path",
        "link",
        "alt",
        "icon",
    ];

    if (!jsonData || typeof jsonData !== "object") {
        console.error("Invalid JSON data provided:", jsonData);
        return results;
    }

    function searchInItems(items, basePath = "") {
        if (!Array.isArray(items)) {
            console.warn("Items is not an array, skipping:", items);
            return;
        }

        items.forEach((item) => {
            const currentPath = item.path
                ? item.path
                : `${basePath}${
                      item.AnchorId ? `/${item.AnchorId}` : ""
                  }`.replace(/\/+/g, "/");

            const sanitizedPath = currentPath.replace(/\/$/, "");

            for (const key in item) {
                if (ignoredKeys.includes(key)) {
                    continue;
                }

                const value = item[key];

                if (
                    typeof value === "string" &&
                    value.toLowerCase().includes(query.toLowerCase())
                ) {
                    const resultKey = `${sanitizedPath}|||${value.trim()}`;
                    if (!seenResults.has(resultKey)) {
                        results.push({
                            path: sanitizedPath,
                            text: value,
                            go: item.go,
                            slideRef: item.slideRef,
                        });
                        seenResults.add(resultKey);
                    }
                } else if (Array.isArray(value)) {
                    value.forEach((arrayItem) => {
                        if (
                            typeof arrayItem === "string" &&
                            arrayItem
                                .toLowerCase()
                                .includes(query.toLowerCase())
                        ) {
                            const resultKey = `${sanitizedPath}|||${arrayItem.trim()}`;
                            if (!seenResults.has(resultKey)) {
                                results.push({
                                    path: sanitizedPath,
                                    text: arrayItem,
                                    slideRef: item.slideRef,
                                });
                                seenResults.add(resultKey);
                            }
                        } else if (typeof arrayItem === "object") {
                            searchInItems([arrayItem], sanitizedPath);
                        }
                    });
                } else if (typeof value === "object" && value !== null) {
                    searchInItems([value], sanitizedPath);
                }
            }

            if (item.subItems) {
                searchInItems(item.subItems, sanitizedPath);
            }
        });
    }

    if (Array.isArray(jsonData.mainLink)) {
        searchInItems(jsonData.mainLink);
    } else {
        console.warn("Main link is not an array:", jsonData.mainLink);
    }

    if (Array.isArray(jsonData.reservation)) {
        searchInItems(jsonData.reservation);
    } else {
        console.warn("Reservation is not an array:", jsonData.reservation);
    }

    if (Array.isArray(jsonData.connection)) {
        searchInItems(jsonData.connection);
    } else {
        console.warn("Connection is not an array:", jsonData.connection);
    }

    if (jsonData.contentIndex && typeof jsonData.contentIndex === "object") {
        const contentItems = Object.entries(jsonData.contentIndex).map(
            ([anchorId, content]) => ({
                AnchorId: anchorId,
                content,
            })
        );
        searchInItems(contentItems, "/");
    }

    return results;
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/searchMenu.js | Lines: 21-87
// KIND: FunctionDeclaration
function searchInItems(items, basePath = "") {
        if (!Array.isArray(items)) {
            console.warn("Items is not an array, skipping:", items);
            return;
        }

        items.forEach((item) => {
            const currentPath = item.path
                ? item.path
                : `${basePath}${
                      item.AnchorId ? `/${item.AnchorId}` : ""
                  }`.replace(/\/+/g, "/");

            const sanitizedPath = currentPath.replace(/\/$/, "");

            for (const key in item) {
                if (ignoredKeys.includes(key)) {
                    continue;
                }

                const value = item[key];

                if (
                    typeof value === "string" &&
                    value.toLowerCase().includes(query.toLowerCase())
                ) {
                    const resultKey = `${sanitizedPath}|||${value.trim()}`;
                    if (!seenResults.has(resultKey)) {
                        results.push({
                            path: sanitizedPath,
                            text: value,
                            go: item.go,
                            slideRef: item.slideRef,
                        });
                        seenResults.add(resultKey);
                    }
                } else if (Array.isArray(value)) {
                    value.forEach((arrayItem) => {
                        if (
                            typeof arrayItem === "string" &&
                            arrayItem
                                .toLowerCase()
                                .includes(query.toLowerCase())
                        ) {
                            const resultKey = `${sanitizedPath}|||${arrayItem.trim()}`;
                            if (!seenResults.has(resultKey)) {
                                results.push({
                                    path: sanitizedPath,
                                    text: arrayItem,
                                    slideRef: item.slideRef,
                                });
                                seenResults.add(resultKey);
                            }
                        } else if (typeof arrayItem === "object") {
                            searchInItems([arrayItem], sanitizedPath);
                        }
                    });
                } else if (typeof value === "object" && value !== null) {
                    searchInItems([value], sanitizedPath);
                }
            }

            if (item.subItems) {
                searchInItems(item.subItems, sanitizedPath);
            }
        });
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/searchMenu.js | Lines: 27-86
// KIND: ArrowFunction
(item) => {
            const currentPath = item.path
                ? item.path
                : `${basePath}${
                      item.AnchorId ? `/${item.AnchorId}` : ""
                  }`.replace(/\/+/g, "/");

            const sanitizedPath = currentPath.replace(/\/$/, "");

            for (const key in item) {
                if (ignoredKeys.includes(key)) {
                    continue;
                }

                const value = item[key];

                if (
                    typeof value === "string" &&
                    value.toLowerCase().includes(query.toLowerCase())
                ) {
                    const resultKey = `${sanitizedPath}|||${value.trim()}`;
                    if (!seenResults.has(resultKey)) {
                        results.push({
                            path: sanitizedPath,
                            text: value,
                            go: item.go,
                            slideRef: item.slideRef,
                        });
                        seenResults.add(resultKey);
                    }
                } else if (Array.isArray(value)) {
                    value.forEach((arrayItem) => {
                        if (
                            typeof arrayItem === "string" &&
                            arrayItem
                                .toLowerCase()
                                .includes(query.toLowerCase())
                        ) {
                            const resultKey = `${sanitizedPath}|||${arrayItem.trim()}`;
                            if (!seenResults.has(resultKey)) {
                                results.push({
                                    path: sanitizedPath,
                                    text: arrayItem,
                                    slideRef: item.slideRef,
                                });
                                seenResults.add(resultKey);
                            }
                        } else if (typeof arrayItem === "object") {
                            searchInItems([arrayItem], sanitizedPath);
                        }
                    });
                } else if (typeof value === "object" && value !== null) {
                    searchInItems([value], sanitizedPath);
                }
            }

            if (item.subItems) {
                searchInItems(item.subItems, sanitizedPath);
            }
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/searchMenu.js | Lines: 58-77
// KIND: ArrowFunction
(arrayItem) => {
                        if (
                            typeof arrayItem === "string" &&
                            arrayItem
                                .toLowerCase()
                                .includes(query.toLowerCase())
                        ) {
                            const resultKey = `${sanitizedPath}|||${arrayItem.trim()}`;
                            if (!seenResults.has(resultKey)) {
                                results.push({
                                    path: sanitizedPath,
                                    text: arrayItem,
                                    slideRef: item.slideRef,
                                });
                                seenResults.add(resultKey);
                            }
                        } else if (typeof arrayItem === "object") {
                            searchInItems([arrayItem], sanitizedPath);
                        }
                    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/searchMenu.js | Lines: 109-112
// KIND: ArrowFunction
([anchorId, content]) => ({
                AnchorId: anchorId,
                content,
            })
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/searchUtils.ts | Lines: 8-12
// KIND: ArrowFunction
(word: string) =>
    word
        .toLowerCase()
        .replace(/[.,;!?]/g, "")
        .trim()
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/searchUtils.ts | Lines: 14-31
// KIND: ArrowFunction
(
    items: SearchItem[],
    query: string
): string[] => {
    const normalizedQuery = normalizeWord(query);
    return Array.from(
        new Set(
            items
                .map((item) =>
                    item.text
                        .split(/\s+/)
                        .map(normalizeWord)
                        .find((word) => word.startsWith(normalizedQuery))
                )
                .filter((word): word is string => Boolean(word))
        )
    );
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/searchUtils.ts | Lines: 22-26
// KIND: ArrowFunction
(item) =>
                    item.text
                        .split(/\s+/)
                        .map(normalizeWord)
                        .find((word) => word.startsWith(normalizedQuery))
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/searchUtils.ts | Lines: 26-26
// KIND: ArrowFunction
(word) => word.startsWith(normalizedQuery)
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/searchUtils.ts | Lines: 28-28
// KIND: ArrowFunction
(word): word is string => Boolean(word)
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 6-15
// KIND: ArrowFunction
(
    itemPath: string,
    currentRoute: string
): boolean => {
    if (itemPath === "/") {
        return currentRoute === "/" || currentRoute.startsWith("/#");
    }

    return currentRoute.startsWith(itemPath);
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 19-30
// KIND: ArrowFunction
(
    subItems: SubItem[],
    activeSection: string
): SubItem[] => {
    const activeSubItem = subItems.find(
        (sub) => sub.AnchorId === `#${activeSection}`
    );
    return subItems.map((sub) => ({
        ...sub,
        class: activeSubItem?.id === sub.id ? "active" : "",
    }));
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 24-24
// KIND: ArrowFunction
(sub) => sub.AnchorId === `#${activeSection}`
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 26-29
// KIND: ArrowFunction
(sub) => ({
        ...sub,
        class: activeSubItem?.id === sub.id ? "active" : "",
    })
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 32-44
// KIND: ArrowFunction
(
    items: MenuItem[],
    activeSection: string,
    currentRoute: string
): MenuItem[] => {
    return items.map((item) => ({
        ...item,
        class: isMainItemActive(item.path, currentRoute) ? "active" : "",
        subItems: item.subItems
            ? updateSubItems(item.subItems, activeSection)
            : undefined,
    }));
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 37-43
// KIND: ArrowFunction
(item) => ({
        ...item,
        class: isMainItemActive(item.path, currentRoute) ? "active" : "",
        subItems: item.subItems
            ? updateSubItems(item.subItems, activeSection)
            : undefined,
    })
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 48-72
// KIND: ArrowFunction
(
    mainLink?: MenuItem[],
    reservation?: MenuItem[],
    search?: MenuItem[],
    connection?: MenuItem[],
    activeSection: string = "",
    currentRoute: string = ""
) => {
    const updatedMenu = {
        mainLink: updateMenuItems(mainLink || [], activeSection, currentRoute),
        reservation: updateMenuItems(
            reservation || [],
            activeSection,
            currentRoute
        ),
        search: updateMenuItems(search || [], activeSection, currentRoute),
        connection: updateMenuItems(
            connection || [],
            activeSection,
            currentRoute
        ),
    };

    return updatedMenu;
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 76-92
// KIND: ArrowFunction
() => {
    const activeLinks = document.querySelectorAll(".nav-link.active");

    activeLinks.forEach((link) => {
        if (link instanceof HTMLElement) {
            link.classList.remove("active");
        }
    });

    const submenus = document.querySelectorAll(".submenu.open");

    submenus.forEach((submenu) => {
        if (submenu instanceof HTMLElement) {
            submenu.style.display = "";
        }
    });
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 79-83
// KIND: ArrowFunction
(link) => {
        if (link instanceof HTMLElement) {
            link.classList.remove("active");
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 87-91
// KIND: ArrowFunction
(submenu) => {
        if (submenu instanceof HTMLElement) {
            submenu.style.display = "";
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 96-104
// KIND: ArrowFunction
(
    e: MouseEvent,
    navRef: RefObject<HTMLElement | null>,
    setOpenSubMenu: Dispatch<SetStateAction<string | null>>
) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenSubMenu(null);
    }
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 106-114
// KIND: ArrowFunction
(
    e: KeyboardEvent,
    setOpenSubMenu: Dispatch<SetStateAction<string | null>>
) => {
    if (e.key === "Escape") {
        e.preventDefault();
        setOpenSubMenu(null);
    }
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 116-159
// KIND: ArrowFunction
() => {
    const navRef = useRef<HTMLElement | null>(null);
    const { openSubMenu, setOpenSubMenu } = useNavigation();

    // Garder la valeur la plus récente sans la capturer dans le callback
    const openSubMenuRef = useRef<string | null>(openSubMenu);

    useEffect(() => {
        openSubMenuRef.current = openSubMenu;
    }, [openSubMenu]);

    const setOpenSubMenuBridge = useCallback<
        Dispatch<SetStateAction<string | null>>
    >(
        (value) => {
            if (typeof value === "function") {
                const updater = value as (
                    prev: string | null
                ) => string | null;
                setOpenSubMenu(updater(openSubMenuRef.current));
            } else {
                setOpenSubMenu(value);
            }
        },
        [setOpenSubMenu]
    );

    useEffect(() => {
        const onClickOutside = (e: MouseEvent) =>
            handleClickOutside(e, navRef, setOpenSubMenuBridge);
        const onKeyDown = (e: KeyboardEvent) =>
            handleKeyDown(e, setOpenSubMenuBridge);

        document.addEventListener("mousedown", onClickOutside);
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("mousedown", onClickOutside);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [setOpenSubMenuBridge]);

    return { navRef, openSubMenu, setOpenSubMenu: setOpenSubMenuBridge };
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 123-125
// KIND: ArrowFunction
() => {
        openSubMenuRef.current = openSubMenu;
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 130-139
// KIND: ArrowFunction
(value) => {
            if (typeof value === "function") {
                const updater = value as (
                    prev: string | null
                ) => string | null;
                setOpenSubMenu(updater(openSubMenuRef.current));
            } else {
                setOpenSubMenu(value);
            }
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 143-156
// KIND: ArrowFunction
() => {
        const onClickOutside = (e: MouseEvent) =>
            handleClickOutside(e, navRef, setOpenSubMenuBridge);
        const onKeyDown = (e: KeyboardEvent) =>
            handleKeyDown(e, setOpenSubMenuBridge);

        document.addEventListener("mousedown", onClickOutside);
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("mousedown", onClickOutside);
            document.removeEventListener("keydown", onKeyDown);
        };
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 144-145
// KIND: ArrowFunction
(e: MouseEvent) =>
            handleClickOutside(e, navRef, setOpenSubMenuBridge)
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 146-147
// KIND: ArrowFunction
(e: KeyboardEvent) =>
            handleKeyDown(e, setOpenSubMenuBridge)
```

---

```ts
// SOURCE: src/features/desktop-nav/core/search/utils/updateMenuUtils.ts | Lines: 152-155
// KIND: ArrowFunction
() => {
            document.removeEventListener("mousedown", onClickOutside);
            document.removeEventListener("keydown", onKeyDown);
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/utils/useIsBrowser.ts | Lines: 3-11
// KIND: ArrowFunction
() => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(typeof window !== "undefined");
    }, []);

    return isBrowser;
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/utils/useIsBrowser.ts | Lines: 6-8
// KIND: ArrowFunction
() => {
        setIsBrowser(typeof window !== "undefined");
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/utils/useURLParams.tsx | Lines: 5-10
// KIND: ArrowFunction
(
    searchParams: URLSearchParams,
    key: string
): string | null => {
    return searchParams.get(key);
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/utils/useURLParams.tsx | Lines: 12-14
// KIND: ArrowFunction
(): Location => {
    return window.location;
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/utils/useURLParams.tsx | Lines: 16-19
// KIND: ArrowFunction
(): string => {
    const hash = getWordURL().hash.split("?")[0];
    return hash || "";
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/utils/useURLParams.tsx | Lines: 21-30
// KIND: ArrowFunction
(key: string): string | null => {
    const { search, hash } = getWordURL();
    let queryString = search;
    const hashIndex = hash.indexOf("?");
    if (hashIndex !== -1) {
        queryString += hash.slice(hashIndex);
    }
    const params = new URLSearchParams(queryString);
    return params.get(key);
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/utils/useURLParams.tsx | Lines: 32-82
// KIND: ArrowFunction
() => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (searchParams: URLSearchParams, name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        []
    );

    const deleteURLParam = (
        router: ReturnType<typeof useRouter>,
        searchParams: URLSearchParams,
        key: string
    ): void => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete(key);
        const currentHash = getURLHash();
        const newUrl = params.toString()
            ? `${currentHash}?${params.toString()}`
            : currentHash;
        router.push(newUrl);
    };

    const getParams = (key: string) => {
        if (searchParams) {
            return getParamsFromSearch(searchParams, key);
        }
        return null;
    };

    const getParam = (key: string) => getParamFromHash(key);

    const setParam = (key: string, value: string) => {
        if (searchParams) {
            const newQueryString = createQueryString(searchParams, key, value);
            router.push(`?${newQueryString}`);
        }
    };

    const deleteParam = (key: string) => {
        if (searchParams) {
            deleteURLParam(router, searchParams, key);
        }
    };

    return { getParams, getParam, setParam, deleteParam };
}
```

---

```ts
// SOURCE: src/features/desktop-nav/core/utils/useURLParams.tsx | Lines: 37-41
// KIND: ArrowFunction
(searchParams: URLSearchParams, name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/utils/useURLParams.tsx | Lines: 45-57
// KIND: ArrowFunction
(
        router: ReturnType<typeof useRouter>,
        searchParams: URLSearchParams,
        key: string
    ): void => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete(key);
        const currentHash = getURLHash();
        const newUrl = params.toString()
            ? `${currentHash}?${params.toString()}`
            : currentHash;
        router.push(newUrl);
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/utils/useURLParams.tsx | Lines: 59-64
// KIND: ArrowFunction
(key: string) => {
        if (searchParams) {
            return getParamsFromSearch(searchParams, key);
        }
        return null;
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/utils/useURLParams.tsx | Lines: 66-66
// KIND: ArrowFunction
(key: string) => getParamFromHash(key)
```

---

```ts
// SOURCE: src/features/desktop-nav/core/utils/useURLParams.tsx | Lines: 68-73
// KIND: ArrowFunction
(key: string, value: string) => {
        if (searchParams) {
            const newQueryString = createQueryString(searchParams, key, value);
            router.push(`?${newQueryString}`);
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/core/utils/useURLParams.tsx | Lines: 75-79
// KIND: ArrowFunction
(key: string) => {
        if (searchParams) {
            deleteURLParam(router, searchParams, key);
        }
    }
```

---

```ts
// SOURCE: src/features/desktop-nav/data/attachContent.ts | Lines: 4-18
// KIND: FunctionDeclaration
function attachContentToMenu(
    menu: MenuLinks,
    contentIndex: Record<string, Content[]>
): MenuLinks {
    const updatedMenu = { ...menu };

    updatedMenu.mainLink = updatedMenu.mainLink.map((link) => ({
        ...link,
        subItems: link.subItems?.map((subItem) => ({
            ...subItem,
            content: contentIndex[subItem.AnchorId] || null,
        })),
    }));
    return updatedMenu;
}
```

---

```ts
// SOURCE: src/features/desktop-nav/data/attachContent.ts | Lines: 10-16
// KIND: ArrowFunction
(link) => ({
        ...link,
        subItems: link.subItems?.map((subItem) => ({
            ...subItem,
            content: contentIndex[subItem.AnchorId] || null,
        })),
    })
```

---

```ts
// SOURCE: src/features/desktop-nav/data/attachContent.ts | Lines: 12-15
// KIND: ArrowFunction
(subItem) => ({
            ...subItem,
            content: contentIndex[subItem.AnchorId] || null,
        })
```

---

```ts
// SOURCE: src/features/desktop-nav/menuClassUtils.ts | Lines: 1-3
// KIND: ArrowFunction
(menuItemId: string, showNavLinks: boolean): string => {
    return `group_link-submenu ${menuItemId} ${!showNavLinks ? "nav-circle" : "nav-padding"}`;
}
```

---

```ts
// SOURCE: src/features/desktop-nav/menuClassUtils.ts | Lines: 5-7
// KIND: ArrowFunction
(showNavLinks: boolean): string => {
    return !showNavLinks ? "hidden" : "show-link";
}
```

---

```ts
// SOURCE: src/features/mobile-nav/components/ButtonOpen.tsx | Lines: 5-32
// KIND: ArrowFunction
() => {
    const {
        hamburgerMenuIsOpen,
        openHamburgerMenu,
        closeHamburgerMenu
    } = useNavigation();
    const handleClick = useCallback(() => {
        if (hamburgerMenuIsOpen) {
            closeHamburgerMenu(1);
        } else {
            openHamburgerMenu();
        }
    }, [hamburgerMenuIsOpen, openHamburgerMenu, closeHamburgerMenu]);

    return (
        <button
            aria-label={
                hamburgerMenuIsOpen ? "fermer le menu" : "ouvrir le menu"
            }
            aria-expanded={hamburgerMenuIsOpen}
            aria-controls="main-nav"
            onClick={handleClick}
            className="mnav__toggle"
        >
            <MenuIcon isOpen={hamburgerMenuIsOpen} />
        </button>
    );
}
```

---

```ts
// SOURCE: src/features/mobile-nav/components/ButtonOpen.tsx | Lines: 11-17
// KIND: ArrowFunction
() => {
        if (hamburgerMenuIsOpen) {
            closeHamburgerMenu(1);
        } else {
            openHamburgerMenu();
        }
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/components/MenuList.tsx | Lines: 12-37
// KIND: ArrowFunction
({
    menuItems,
    openSubMenu,
    onNavigationClick,
    handleMenuClick,
}) => {
    const renderedMenuItems = useMemo(
        () =>
            menuItems.map((menuItem) => (
                <NavLink
                    key={menuItem.id}
                    menuItem={menuItem}
                    onNavigationClick={onNavigationClick}
                    isOpen={openSubMenu === menuItem.id}
                    handleMenuClick={handleMenuClick}
                />
            )),
        [menuItems, openSubMenu, onNavigationClick, handleMenuClick]
    );

    return (
        <nav className="mnav__nav" id="main-nav">
            {renderedMenuItems}
        </nav>
    );
}
```

---

```ts
// SOURCE: src/features/mobile-nav/components/MenuList.tsx | Lines: 19-28
// KIND: ArrowFunction
() =>
            menuItems.map((menuItem) => (
                <NavLink
                    key={menuItem.id}
                    menuItem={menuItem}
                    onNavigationClick={onNavigationClick}
                    isOpen={openSubMenu === menuItem.id}
                    handleMenuClick={handleMenuClick}
                />
            ))
```

---

```ts
// SOURCE: src/features/mobile-nav/components/MenuList.tsx | Lines: 20-28
// KIND: ArrowFunction
(menuItem) => (
                <NavLink
                    key={menuItem.id}
                    menuItem={menuItem}
                    onNavigationClick={onNavigationClick}
                    isOpen={openSubMenu === menuItem.id}
                    handleMenuClick={handleMenuClick}
                />
            )
```

---

```ts
// SOURCE: src/features/mobile-nav/components/MenuOpen.tsx | Lines: 12-43
// KIND: ArrowFunction
({ menuItems, onNavigationClick }) => {
    const {
        hamburgerMenuIsOpen,
        openSubMenu,
        setOpenSubMenu,
    } = useNavigation();

    const handleMenuClick = useCallback(
        (menuItemId: string) => {
            setOpenSubMenu(openSubMenu === menuItemId ? null : menuItemId);
        },
        [openSubMenu, setOpenSubMenu]
    );

    const containerClass = useMemo(
        () => `mnav__panel ${hamburgerMenuIsOpen ? "open" : ""}`,
        [hamburgerMenuIsOpen]
    );

    return (
        <div className={containerClass}>
            {hamburgerMenuIsOpen && menuItems.mainLink && (
                <MenuList
                    menuItems={menuItems.mainLink}
                    openSubMenu={openSubMenu}
                    onNavigationClick={onNavigationClick}
                    handleMenuClick={handleMenuClick}
                />
            )}
        </div>
    );
}
```

---

```ts
// SOURCE: src/features/mobile-nav/components/MenuOpen.tsx | Lines: 20-22
// KIND: ArrowFunction
(menuItemId: string) => {
            setOpenSubMenu(openSubMenu === menuItemId ? null : menuItemId);
        }
```

---

```ts
// SOURCE: src/features/mobile-nav/components/MenuOpen.tsx | Lines: 27-27
// KIND: ArrowFunction
() => `mnav__panel ${hamburgerMenuIsOpen ? "open" : ""}`
```

---

```ts
// SOURCE: src/features/mobile-nav/components/MobileHeader.tsx | Lines: 14-47
// KIND: ArrowFunction
() => {
    const pathname = usePathname();
    const { currentRoute, updateRoute, closeHamburgerMenu } = useNavigation();
    const { activeSection } = useScrollContext();

    useInitialScroll(pathname);

    const handleNavigationClick = useSmoothScroll(currentRoute, updateRoute);

    const handleLogoClick = useMemo(
        () =>
            makeClickHandler(() => {
                closeHamburgerMenu(200);
                handleNavigationClick("/#top");
            }),
        [closeHamburgerMenu, handleNavigationClick]
    );

    const updatedMenuItems = useMemo(
        () =>
            updateMenuClasses(menuItems.mainLink, activeSection, currentRoute),
        [activeSection, currentRoute]
    );

    return (
        <div className="mnav__bar">
            <MobileLogoLink onClick={handleLogoClick} />
            <Nav
                menuItems={updatedMenuItems}
                onNavigationClick={handleNavigationClick}
            />
        </div>
    );
}
```

---

```ts
// SOURCE: src/features/mobile-nav/components/MobileHeader.tsx | Lines: 24-28
// KIND: ArrowFunction
() =>
            makeClickHandler(() => {
                closeHamburgerMenu(200);
                handleNavigationClick("/#top");
            })
```

---

```ts
// SOURCE: src/features/mobile-nav/components/MobileHeader.tsx | Lines: 25-28
// KIND: ArrowFunction
() => {
                closeHamburgerMenu(200);
                handleNavigationClick("/#top");
            }
```

---

```ts
// SOURCE: src/features/mobile-nav/components/MobileHeader.tsx | Lines: 33-34
// KIND: ArrowFunction
() =>
            updateMenuClasses(menuItems.mainLink, activeSection, currentRoute)
```

---

```ts
// SOURCE: src/features/mobile-nav/components/MobileLogoLink.tsx | Lines: 10-17
// KIND: ArrowFunction
({ onClick }: MobileLogoLinkProps) => {
    const idPrefix = useIdPrefix("logo");
    return (
        <Link href="/#top" aria-label="Retour en haut de page" onClick={onClick} className="logoM">
            <LogoContent idPrefix={idPrefix} />
        </Link>
    );
}
```

---

```ts
// SOURCE: src/features/mobile-nav/components/MobileNav.tsx | Lines: 9-16
// KIND: ArrowFunction
() => {
    useScrollAnchors([]);
    return (
        <div className="mnav">
            <MobileHeader />
        </div>
    );
}
```

---

```ts
// SOURCE: src/features/mobile-nav/components/MobileNav.tsx | Lines: 18-30
// KIND: ArrowFunction
() => {
    const isMobile = useMobileBreakpoint(1024);

    if (!isMobile) return null;

    return (
        <NavigationProvider>
            <ScrollProvider>
                <MobileNavContent />
            </ScrollProvider>
        </NavigationProvider>
    );
}
```

---

```ts
// SOURCE: src/features/mobile-nav/components/Nav.tsx | Lines: 12-22
// KIND: ArrowFunction
({ menuItems, onNavigationClick }) => {
    return (
        <>
            <ButtonOpen />
            <MenuOpen
                menuItems={menuItems}
                onNavigationClick={onNavigationClick}
            />
        </>
    );
}
```

---

```ts
// SOURCE: src/features/mobile-nav/components/NavLink.tsx | Lines: 13-13
// KIND: ArrowFunction
() => import("./SubMenu")
```

---

```ts
// SOURCE: src/features/mobile-nav/components/NavLink.tsx | Lines: 13-13
// KIND: ArrowFunction
() => null
```

---

```ts
// SOURCE: src/features/mobile-nav/components/NavLink.tsx | Lines: 22-90
// KIND: ArrowFunction
({
    menuItem,
    onNavigationClick,
    isOpen,
    handleMenuClick,
}) => {
    const { closeHamburgerMenu } = useNavigation();
    const SvgIcon = useMemo(() => svgComponents[menuItem.svg], [menuItem.svg]);

    const handleClick = useMemo(
        () =>
            makeClickHandler(() => {
                // 1er clic : on va sur /pX, on ouvre le sous-menu, le hamburger reste ouvert
                onNavigationClick(menuItem.path);
                const wasOpen = isOpen;
                handleMenuClick(menuItem.id);
                // Si pas de sous-items OU si c'était déjà ouvert, on ferme le hamburger
                if (!menuItem.subItems?.length || wasOpen) {
                    closeHamburgerMenu(500);
                }
            }),
        [
            onNavigationClick,
            menuItem.path,
            menuItem.id,
            menuItem.subItems?.length,
            isOpen,
            handleMenuClick,
            closeHamburgerMenu,
        ]
    );

    const hasSub = !!menuItem.subItems && menuItem.subItems.length > 0;

    return (
        <div className={`mnav__item ${menuItem.id}`}>
            <a
                aria-label={`Page ${menuItem.title}`}
                className={`mnav__link ${menuItem.class ?? ""}`}
                href={menuItem.path + menuItem.AnchorId}
                onClick={handleClick}
                tabIndex={0}
                aria-haspopup={hasSub ? "menu" : undefined}
                aria-expanded={hasSub ? isOpen : undefined}
                aria-controls={hasSub ? `submenu-${menuItem.id}` : undefined}
            >
                {SvgIcon && (
                    <span className="mnav__icon">
                        <SvgIcon />
                    </span>
                )}
                <span className="mnav__link-text">{menuItem.title}</span>
                {hasSub && (
                    <span className={`mnav__submenu-arrow ${isOpen ? "open" : "closed"}`}>
                        {isOpen ? "▲" : "▼"}
                    </span>
                )}
            </a>

            {hasSub && isOpen && (
                <LazySubMenu
                    menuItem={menuItem}
                    isOpen={isOpen}
                    onSubItemClick={onNavigationClick}
                />
            )}
        </div>
    );
}
```

---

```ts
// SOURCE: src/features/mobile-nav/components/NavLink.tsx | Lines: 29-29
// KIND: ArrowFunction
() => svgComponents[menuItem.svg]
```

---

```ts
// SOURCE: src/features/mobile-nav/components/NavLink.tsx | Lines: 32-42
// KIND: ArrowFunction
() =>
            makeClickHandler(() => {
                // 1er clic : on va sur /pX, on ouvre le sous-menu, le hamburger reste ouvert
                onNavigationClick(menuItem.path);
                const wasOpen = isOpen;
                handleMenuClick(menuItem.id);
                // Si pas de sous-items OU si c'était déjà ouvert, on ferme le hamburger
                if (!menuItem.subItems?.length || wasOpen) {
                    closeHamburgerMenu(500);
                }
            })
```

---

```ts
// SOURCE: src/features/mobile-nav/components/NavLink.tsx | Lines: 33-42
// KIND: ArrowFunction
() => {
                // 1er clic : on va sur /pX, on ouvre le sous-menu, le hamburger reste ouvert
                onNavigationClick(menuItem.path);
                const wasOpen = isOpen;
                handleMenuClick(menuItem.id);
                // Si pas de sous-items OU si c'était déjà ouvert, on ferme le hamburger
                if (!menuItem.subItems?.length || wasOpen) {
                    closeHamburgerMenu(500);
                }
            }
```

---

```ts
// SOURCE: src/features/mobile-nav/components/SubMenu.tsx | Lines: 16-52
// KIND: ArrowFunction
({ menuItem, isOpen, onSubItemClick }: SubMenuProps) => {
    const { closeHamburgerMenu } = useNavigation();

    const handleSubItemClick = useMemo(
        () =>
            makePayloadClickHandler<string>(onSubItemClick, {
                close: closeHamburgerMenu,
                delay: 650,
            }),
        [onSubItemClick, closeHamburgerMenu]
    );

    if (!menuItem.subItems || menuItem.subItems.length === 0) return null;

    return (
        <div className={`mnav__submenu ${isOpen ? "open" : ""}`} id={`submenu-${menuItem.id}`}>
            <div className="mnav__submenu-group">
                {isOpen &&
                    menuItem.subItems.map((subItem) => {
                        const fullPath = `${menuItem.path}${subItem.AnchorId}`;
                        return (
                            <a
                                key={subItem.id}
                                aria-label={`Section ${subItem.title}`}
                                href={fullPath}
                                className={`mnav__sublink ${subItem.class}`}
                                tabIndex={0}
                                onClick={(e) => handleSubItemClick(fullPath, e)}
                            >
                                {subItem.title}
                            </a>
                        );
                    })}
            </div>
        </div>
    );
}
```

---

```ts
// SOURCE: src/features/mobile-nav/components/SubMenu.tsx | Lines: 20-24
// KIND: ArrowFunction
() =>
            makePayloadClickHandler<string>(onSubItemClick, {
                close: closeHamburgerMenu,
                delay: 650,
            })
```

---

```ts
// SOURCE: src/features/mobile-nav/components/SubMenu.tsx | Lines: 34-48
// KIND: ArrowFunction
(subItem) => {
                        const fullPath = `${menuItem.path}${subItem.AnchorId}`;
                        return (
                            <a
                                key={subItem.id}
                                aria-label={`Section ${subItem.title}`}
                                href={fullPath}
                                className={`mnav__sublink ${subItem.class}`}
                                tabIndex={0}
                                onClick={(e) => handleSubItemClick(fullPath, e)}
                            >
                                {subItem.title}
                            </a>
                        );
                    }
```

---

```ts
// SOURCE: src/features/mobile-nav/components/SubMenu.tsx | Lines: 43-43
// KIND: ArrowFunction
(e) => handleSubItemClick(fullPath, e)
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/context/NavigationContext.tsx | Lines: 20-49
// KIND: ArrowFunction
() => {
    const router = useRouter();
    const pathname = usePathname();
    const [currentRoute, setCurrentRoute] = useState(pathname || "/");
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

    useEffect(() => {
        setCurrentRoute(pathname || "/");
    }, [pathname]);

    const updateRoute = (path: string) => {
        setCurrentRoute(path);
        router.push(path);
    };
    const openHamburgerMenu = () => setHamburgerMenuIsOpen(true);
    const closeHamburgerMenu = (delay: number = 0) => {
        setTimeout(() => setHamburgerMenuIsOpen(false), delay);
    };

    return {
        currentRoute,
        updateRoute,
        openSubMenu,
        setOpenSubMenu,
        hamburgerMenuIsOpen,
        openHamburgerMenu,
        closeHamburgerMenu
    };
}
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/context/NavigationContext.tsx | Lines: 27-29
// KIND: ArrowFunction
() => {
        setCurrentRoute(pathname || "/");
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/context/NavigationContext.tsx | Lines: 31-34
// KIND: ArrowFunction
(path: string) => {
        setCurrentRoute(path);
        router.push(path);
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/context/NavigationContext.tsx | Lines: 35-35
// KIND: ArrowFunction
() => setHamburgerMenuIsOpen(true)
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/context/NavigationContext.tsx | Lines: 36-38
// KIND: ArrowFunction
(delay: number = 0) => {
        setTimeout(() => setHamburgerMenuIsOpen(false), delay);
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/context/NavigationContext.tsx | Lines: 37-37
// KIND: ArrowFunction
() => setHamburgerMenuIsOpen(false)
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/context/NavigationContext.tsx | Lines: 51-60
// KIND: ArrowFunction
({
    children
}) => {
    const navigationState = useNavigationState();
    return (
        <NavigationContext.Provider value={navigationState}>
            {children}
        </NavigationContext.Provider>
    );
}
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/context/ScrollContext.tsx | Lines: 17-29
// KIND: ArrowFunction
({ children }: ScrollProviderProps) => {
    const [activeSection, setActiveSection] = useState<string>("");

    const contextValue = useMemo(() => ({ activeSection, setActiveSection }), [
        activeSection
    ]);

    return (
        <ScrollContext.Provider value={contextValue}>
            {children}
        </ScrollContext.Provider>
    );
}
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/context/ScrollContext.tsx | Lines: 20-20
// KIND: ArrowFunction
() => ({ activeSection, setActiveSection })
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/context/utils/createUseContext.tsx | Lines: 3-19
// KIND: ArrowFunction
<T,>(
    context: Context<T | undefined>,
    name: string
) => {
    return () => {
        const ctx = useContext(context);
        if (ctx === undefined) {
            throw new Error(
                `${name} must be used within a ${name.replace(
                    "use",
                    ""
                )}Provider`
            );
        }
        return ctx;
    };
}
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/context/utils/createUseContext.tsx | Lines: 7-18
// KIND: ArrowFunction
() => {
        const ctx = useContext(context);
        if (ctx === undefined) {
            throw new Error(
                `${name} must be used within a ${name.replace(
                    "use",
                    ""
                )}Provider`
            );
        }
        return ctx;
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/hooks/useScrollAnchors.ts | Lines: 14-91
// KIND: ArrowFunction
(_sections: { id: string }[]) => {
    const { setActiveSection } = useScrollContext();

    const spyRef = useRef(createScrollSpy({ offset: 100 }));
    const sectionsRef = useRef<SectionRef[]>([]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const worker = new Worker(
            new URL("../../../../../workers/scrollWorker.js", import.meta.url)
        );

        const handleScroll = () => {
            const nodes = Array.from(
                document.querySelectorAll<HTMLElement>("section[id]")
            );

            const currentSections: SectionRef[] = nodes.map((el) => ({
                id: el.id,
            }));

            sectionsRef.current = currentSections;

            const positions = currentSections.reduce<Record<string, SectionPosition>>(
                (acc, { id }) => {
                    const section = document.getElementById(id);
                    if (section) {
                        acc[id] = {
                            top: section.offsetTop,
                            height: section.offsetHeight,
                        };
                    }
                    return acc;
                },
                {}
            );

            const data: ScrollWorkerData = {
                sections: currentSections,
                scrollY: window.scrollY,
                positions,
            };

            worker.postMessage(data);
        };

        worker.onmessage = (event: MessageEvent<ScrollWorkerResponse>) => {
            const { currentSectionId } = event.data;

            // Synchroniser l'ID calculé par le worker dans le spy (pas de recalcul main-thread)
            spyRef.current.setCurrentSectionId(currentSectionId ?? null);

            // Appliquer URL + classes
            spyRef.current.addNewUrl();
            spyRef.current.updateSectionClasses(
                sectionsRef.current,
                setActiveSection
            );
        };

        const controller = new AbortController();
        const throttledScroll = rafThrottle(handleScroll);

        handleScroll();

        window.addEventListener("scroll", throttledScroll, {
            passive: true,
            signal: controller.signal,
        });

        return () => {
            controller.abort();
            throttledScroll.cancel();
            worker.terminate();
        };
    }, [setActiveSection]);
}
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/hooks/useScrollAnchors.ts | Lines: 20-90
// KIND: ArrowFunction
() => {
        if (typeof window === "undefined") return;

        const worker = new Worker(
            new URL("../../../../../workers/scrollWorker.js", import.meta.url)
        );

        const handleScroll = () => {
            const nodes = Array.from(
                document.querySelectorAll<HTMLElement>("section[id]")
            );

            const currentSections: SectionRef[] = nodes.map((el) => ({
                id: el.id,
            }));

            sectionsRef.current = currentSections;

            const positions = currentSections.reduce<Record<string, SectionPosition>>(
                (acc, { id }) => {
                    const section = document.getElementById(id);
                    if (section) {
                        acc[id] = {
                            top: section.offsetTop,
                            height: section.offsetHeight,
                        };
                    }
                    return acc;
                },
                {}
            );

            const data: ScrollWorkerData = {
                sections: currentSections,
                scrollY: window.scrollY,
                positions,
            };

            worker.postMessage(data);
        };

        worker.onmessage = (event: MessageEvent<ScrollWorkerResponse>) => {
            const { currentSectionId } = event.data;

            // Synchroniser l'ID calculé par le worker dans le spy (pas de recalcul main-thread)
            spyRef.current.setCurrentSectionId(currentSectionId ?? null);

            // Appliquer URL + classes
            spyRef.current.addNewUrl();
            spyRef.current.updateSectionClasses(
                sectionsRef.current,
                setActiveSection
            );
        };

        const controller = new AbortController();
        const throttledScroll = rafThrottle(handleScroll);

        handleScroll();

        window.addEventListener("scroll", throttledScroll, {
            passive: true,
            signal: controller.signal,
        });

        return () => {
            controller.abort();
            throttledScroll.cancel();
            worker.terminate();
        };
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/hooks/useScrollAnchors.ts | Lines: 27-59
// KIND: ArrowFunction
() => {
            const nodes = Array.from(
                document.querySelectorAll<HTMLElement>("section[id]")
            );

            const currentSections: SectionRef[] = nodes.map((el) => ({
                id: el.id,
            }));

            sectionsRef.current = currentSections;

            const positions = currentSections.reduce<Record<string, SectionPosition>>(
                (acc, { id }) => {
                    const section = document.getElementById(id);
                    if (section) {
                        acc[id] = {
                            top: section.offsetTop,
                            height: section.offsetHeight,
                        };
                    }
                    return acc;
                },
                {}
            );

            const data: ScrollWorkerData = {
                sections: currentSections,
                scrollY: window.scrollY,
                positions,
            };

            worker.postMessage(data);
        }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/hooks/useScrollAnchors.ts | Lines: 32-34
// KIND: ArrowFunction
(el) => ({
                id: el.id,
            })
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/hooks/useScrollAnchors.ts | Lines: 39-48
// KIND: ArrowFunction
(acc, { id }) => {
                    const section = document.getElementById(id);
                    if (section) {
                        acc[id] = {
                            top: section.offsetTop,
                            height: section.offsetHeight,
                        };
                    }
                    return acc;
                }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/hooks/useScrollAnchors.ts | Lines: 61-73
// KIND: ArrowFunction
(event: MessageEvent<ScrollWorkerResponse>) => {
            const { currentSectionId } = event.data;

            // Synchroniser l'ID calculé par le worker dans le spy (pas de recalcul main-thread)
            spyRef.current.setCurrentSectionId(currentSectionId ?? null);

            // Appliquer URL + classes
            spyRef.current.addNewUrl();
            spyRef.current.updateSectionClasses(
                sectionsRef.current,
                setActiveSection
            );
        }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/hooks/useScrollAnchors.ts | Lines: 85-89
// KIND: ArrowFunction
() => {
            controller.abort();
            throttledScroll.cancel();
            worker.terminate();
        }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/hooks/useSmoothScroll.ts | Lines: 5-15
// KIND: ArrowFunction
(
    currentRoute: string | undefined,
    updateRoute: (route: string) => void
) => {
    return useCallback(
        (path: string) => {
            handleNavClick(path, currentRoute, updateRoute, handleScrollClick);
        },
        [currentRoute, updateRoute]
    );
}
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/hooks/useSmoothScroll.ts | Lines: 10-12
// KIND: ArrowFunction
(path: string) => {
            handleNavClick(path, currentRoute, updateRoute, handleScrollClick);
        }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 11-14
// KIND: ArrowFunction
(e: MinimalEvent) => {
    e.preventDefault();
    e.stopPropagation();
}
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 16-17
// KIND: ArrowFunction
(e: MinimalEvent) =>
    e.key === "Enter" || e.key === " "
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 20-22
// KIND: ArrowFunction
(keys: readonly string[] = ["Enter", " "]) => (
    e: MinimalEvent
) => typeof e.key === "string" && keys.includes(e.key)
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 20-22
// KIND: ArrowFunction
(
    e: MinimalEvent
) => typeof e.key === "string" && keys.includes(e.key)
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 32-59
// KIND: FunctionDeclaration
function debounce<A extends unknown[]>(
    fn: (...args: A) => void,
    wait = 100
): Debounced<A> {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let lastArgs: A | null = null;

    const debounced = ((...args: A) => {
        lastArgs = args;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            const argsToUse = lastArgs as A; // défini ici
            lastArgs = null;
            fn(...argsToUse);
        }, wait);
    }) as Debounced<A>;

    debounced.cancel = () => {
        if (timer) clearTimeout(timer);
        timer = null;
        lastArgs = null;
    };

    debounced.pending = () => timer !== null;

    return debounced;
}
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 39-48
// KIND: ArrowFunction
(...args: A) => {
        lastArgs = args;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            const argsToUse = lastArgs as A; // défini ici
            lastArgs = null;
            fn(...argsToUse);
        }, wait);
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 42-47
// KIND: ArrowFunction
() => {
            timer = null;
            const argsToUse = lastArgs as A; // défini ici
            lastArgs = null;
            fn(...argsToUse);
        }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 50-54
// KIND: ArrowFunction
() => {
        if (timer) clearTimeout(timer);
        timer = null;
        lastArgs = null;
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 56-56
// KIND: ArrowFunction
() => timer !== null
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 94-143
// KIND: FunctionDeclaration
function makeHandler<P>(
    run: ((payload: P) => void) | (() => void),
    opts?: WithPayload | NoPayload
) {
    const wait = opts?.debounceMs ?? 100;
    const gate = opts?.gate ?? (() => true);
    const useStopPrevent = opts?.stopPrevent ?? true;

    if ((opts as WithPayload)?.withPayload) {
        // Variante avec payload
        const fire =
            wait === 0
                ? (payload: P) => {
                      (run as (p: P) => void)(payload);
                      opts?.close?.(opts?.delay);
                  }
                : debounce<[P]>((payload: P) => {
                      (run as (p: P) => void)(payload);
                      opts?.close?.(opts?.delay);
                  }, wait);

        return (payload: P, e: MinimalEvent) => {
            if (useStopPrevent) stopAndPrevent(e);
            if (!gate(e)) return;
            opts?.before?.(e);
            fire(payload);
            opts?.after?.(e);
        };
    }

    // Variante sans payload
    const fire0 =
        wait === 0
            ? () => {
                  (run as () => void)();
                  opts?.close?.(opts?.delay);
              }
            : debounce<[]>(() => {
                  (run as () => void)();
                  opts?.close?.(opts?.delay);
              }, wait);

    return (e: MinimalEvent) => {
        if (useStopPrevent) stopAndPrevent(e);
        if (!gate(e)) return;
        opts?.before?.(e);
        fire0();
        opts?.after?.(e);
    };
}
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 99-99
// KIND: ArrowFunction
() => true
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 106-109
// KIND: ArrowFunction
(payload: P) => {
                      (run as (p: P) => void)(payload);
                      opts?.close?.(opts?.delay);
                  }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 110-113
// KIND: ArrowFunction
(payload: P) => {
                      (run as (p: P) => void)(payload);
                      opts?.close?.(opts?.delay);
                  }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 115-121
// KIND: ArrowFunction
(payload: P, e: MinimalEvent) => {
            if (useStopPrevent) stopAndPrevent(e);
            if (!gate(e)) return;
            opts?.before?.(e);
            fire(payload);
            opts?.after?.(e);
        }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 127-130
// KIND: ArrowFunction
() => {
                  (run as () => void)();
                  opts?.close?.(opts?.delay);
              }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 131-134
// KIND: ArrowFunction
() => {
                  (run as () => void)();
                  opts?.close?.(opts?.delay);
              }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 136-142
// KIND: ArrowFunction
(e: MinimalEvent) => {
        if (useStopPrevent) stopAndPrevent(e);
        if (!gate(e)) return;
        opts?.before?.(e);
        fire0();
        opts?.after?.(e);
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 150-151
// KIND: ArrowFunction
(run: () => void, opts?: HandlerOpts) =>
    makeHandler(run, opts)
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 154-157
// KIND: ArrowFunction
<P>(
    run: (payload: P) => void,
    opts?: HandlerOpts
) => makeHandler<P>(run, { ...opts, withPayload: true })
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 160-170
// KIND: ArrowFunction
<P>(
    run: (payload: P) => void,
    opts?: HandlerOpts
) =>
    makeHandler<P>(run, {
        ...opts,
        withPayload: true,
        gate: opts?.gate ?? onlyActivation(),
        stopPrevent: false, // comme avant: pas de stopPropagation forcé
        before: e => e.preventDefault?.()
    })
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/handlers.ts | Lines: 169-169
// KIND: ArrowFunction
e => e.preventDefault?.()
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/rafThrottle.ts | Lines: 1-17
// KIND: FunctionDeclaration
function rafThrottle<T extends (...args: unknown[]) => void>(fn: T) {
    let rafId: number | null = null;
    const throttled = (...args: Parameters<T>) => {
        if (rafId !== null) return;
        rafId = requestAnimationFrame(() => {
            fn(...args);
            rafId = null;
        });
    };
    throttled.cancel = () => {
        if (rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    };
    return throttled;
}
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/rafThrottle.ts | Lines: 3-9
// KIND: ArrowFunction
(...args: Parameters<T>) => {
        if (rafId !== null) return;
        rafId = requestAnimationFrame(() => {
            fn(...args);
            rafId = null;
        });
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/rafThrottle.ts | Lines: 5-8
// KIND: ArrowFunction
() => {
            fn(...args);
            rafId = null;
        }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/rafThrottle.ts | Lines: 10-15
// KIND: ArrowFunction
() => {
        if (rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/scrollSmooth.ts | Lines: 16-22
// KIND: ArrowFunction
(raw: string): number | null => {
    const v = raw.trim().toLowerCase();
    if (!v) return null;
    // Supporte "72px" ou "72"
    const n = Number.parseFloat(v.replace("px", ""));
    return Number.isFinite(n) ? n : null;
}
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/scrollSmooth.ts | Lines: 24-44
// KIND: ArrowFunction
(opts?: ScrollOffsetOptions): number => {
    if (typeof window === "undefined") return 0;

    // 1) CSS var
    const cssRaw = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--scroll-offset");
    const cssPx = parsePx(cssRaw);
    const baseFromCss = cssPx ?? 0;

    // 2) Fallback header height (si pas de CSS var)
    const selector =
        opts?.headerSelector ?? "[data-scroll-header], .header, header";
    const header = document.querySelector<HTMLElement>(selector);
    const baseFromHeader = header ? header.getBoundingClientRect().height : 0;

    const base = cssPx !== null ? baseFromCss : baseFromHeader;
    const extra = opts?.extra ?? 0;

    return Math.max(0, base + extra);
}
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/scrollSmooth.ts | Lines: 46-90
// KIND: ArrowFunction
(targetId: string): void => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const start = window.scrollY;

    // Offset global + offset spécifique au bloc (optionnel)
    const elementExtraRaw = element.getAttribute("data-scroll-offset") ?? "";
    const elementExtra = parsePx(elementExtraRaw) ?? 0;

    const offset = getScrollOffset({ extra: elementExtra });

    const endRaw = element.getBoundingClientRect().top + window.scrollY - offset;
    const end = Math.max(0, endRaw);

    const duration = 750;
    const startTime = performance.now();

    const worker = new Worker(
        new URL("../../../../../workers/scrollSmoothWorker.js", import.meta.url)
    );

    const animateScroll = (currentTime: number): void => {
        const data: ScrollSmoothWorkerData = {
            start,
            end,
            duration,
            startTime,
            currentTime,
        };
        worker.postMessage(data);
    };

    worker.onmessage = (event: MessageEvent<ScrollSmoothWorkerResponse>): void => {
        const { newScrollY, progress } = event.data;
        window.scrollTo(0, newScrollY);
        if (progress < 1) {
            window.requestAnimationFrame(animateScroll);
        } else {
            worker.terminate();
        }
    };

    window.requestAnimationFrame(animateScroll);
}
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/scrollSmooth.ts | Lines: 68-77
// KIND: ArrowFunction
(currentTime: number): void => {
        const data: ScrollSmoothWorkerData = {
            start,
            end,
            duration,
            startTime,
            currentTime,
        };
        worker.postMessage(data);
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/scrollSmooth.ts | Lines: 79-87
// KIND: ArrowFunction
(event: MessageEvent<ScrollSmoothWorkerResponse>): void => {
        const { newScrollY, progress } = event.data;
        window.scrollTo(0, newScrollY);
        if (progress < 1) {
            window.requestAnimationFrame(animateScroll);
        } else {
            worker.terminate();
        }
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/scrollUtils.ts | Lines: 5-13
// KIND: ArrowFunction
(pathname: string | null) => {
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (window.location.hash) {
            window.scrollTo({ top: 0 });
            handleScrollClick(window.location.hash.substring(1));
        }
    }, [pathname]);
}
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/scrollUtils.ts | Lines: 6-12
// KIND: ArrowFunction
() => {
        if (typeof window === "undefined") return;
        if (window.location.hash) {
            window.scrollTo({ top: 0 });
            handleScrollClick(window.location.hash.substring(1));
        }
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/sections.ts | Lines: 3-72
// KIND: FunctionDeclaration
function createScrollSpy(options?: { offset?: number }) {
    const offset = options?.offset ?? 100;
    let currentSectionId: string | null = null;

    function setCurrentSectionId(id: string | null): void {
        currentSectionId = id;
    }

    function getCurrentSectionId(): string | null {
        return currentSectionId;
    }

    // Optionnel : si tu veux calculer sans worker, sinon tu peux ne pas l'utiliser
    function scrollInView(sections: readonly SectionRef[]): string | null {
        currentSectionId = null;
        const scrollPosition = window.scrollY;

        for (const { id } of sections) {
            const section = document.getElementById(id);
            if (!section) continue;

            const top = section.offsetTop;
            const height = section.offsetHeight;

            const inView =
                scrollPosition >= top - offset && scrollPosition < top + height;

            if (inView) {
                currentSectionId = id;
                break;
            }
        }

        return currentSectionId;
    }

    function updateSectionClasses(
        sections: readonly SectionRef[],
        setActiveSection: (id: string) => void
    ): void {
        for (const { id } of sections) {
            const section = document.getElementById(id);
            if (!section) continue;

            if (id === currentSectionId) {
                section.classList.add("active-section");
                setActiveSection(id);
            } else {
                section.classList.remove("active-section");
            }
        }
    }

    function addNewUrl(): void {
        if (!currentSectionId) return;

        const newUrl = `#${currentSectionId}`;
        if (window.location.hash !== newUrl) {
            window.history.replaceState(null, "", newUrl);
        }
    }

    return {
        setCurrentSectionId,
        getCurrentSectionId,
        scrollInView,
        updateSectionClasses,
        addNewUrl
    };
}
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/sections.ts | Lines: 7-9
// KIND: FunctionDeclaration
function setCurrentSectionId(id: string | null): void {
        currentSectionId = id;
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/sections.ts | Lines: 11-13
// KIND: FunctionDeclaration
function getCurrentSectionId(): string | null {
        return currentSectionId;
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/sections.ts | Lines: 16-37
// KIND: FunctionDeclaration
function scrollInView(sections: readonly SectionRef[]): string | null {
        currentSectionId = null;
        const scrollPosition = window.scrollY;

        for (const { id } of sections) {
            const section = document.getElementById(id);
            if (!section) continue;

            const top = section.offsetTop;
            const height = section.offsetHeight;

            const inView =
                scrollPosition >= top - offset && scrollPosition < top + height;

            if (inView) {
                currentSectionId = id;
                break;
            }
        }

        return currentSectionId;
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/sections.ts | Lines: 39-54
// KIND: FunctionDeclaration
function updateSectionClasses(
        sections: readonly SectionRef[],
        setActiveSection: (id: string) => void
    ): void {
        for (const { id } of sections) {
            const section = document.getElementById(id);
            if (!section) continue;

            if (id === currentSectionId) {
                section.classList.add("active-section");
                setActiveSection(id);
            } else {
                section.classList.remove("active-section");
            }
        }
    }
```

---

```ts
// SOURCE: src/features/mobile-nav/core/navigation/utils/sections.ts | Lines: 56-63
// KIND: FunctionDeclaration
function addNewUrl(): void {
        if (!currentSectionId) return;

        const newUrl = `#${currentSectionId}`;
        if (window.location.hash !== newUrl) {
            window.history.replaceState(null, "", newUrl);
        }
    }
```

---

```ts
// SOURCE: src/frames/Frames.tsx | Lines: 9-16
// KIND: ArrowFunction
({ className, id, children, ...rest }) => {
    return (
        <section className={className} id={id} {...rest}>
            {children}
            <p>Hello, World !</p>
        </section>
    );
}
```

---

```ts
// SOURCE: src/generated/rmdl/manifest.ts | Lines: 11-11
// KIND: ArrowFunction
() => import("./pages/etape-1")
```

---

```ts
// SOURCE: src/generated/rmdl/manifest.ts | Lines: 14-18
// KIND: FunctionDeclaration
async function loadRmdlPage(slug: string): Promise<RmdlPageModule | null> {
  const loader = RMDL_PAGES[slug];
  if (!loader) return null;
  return loader();
}
```

---

```ts
// SOURCE: src/generated/rmdl/pages/etape-1.tsx | Lines: 11-111
// KIND: FunctionDeclaration
function Page(): React.ReactElement {
  const __slug = "etape-1";
  void __slug; // slug dispo si besoin
  return (
    <React.Fragment>
    <RmdlHeading level={1} key={0}>
      {"Phase 1 — Cadrage & stratégie"}
    </RmdlHeading>
    <p className="rmdl-p" key={1}>
      <span key={0} className="rmdl-lb">{"Objectif"}</span>
      {" : Poser un cap clair, cadrer le besoin, et définir une stratégie actionnable."}
    </p>
    <p className="rmdl-p" key={2}>
      <strong key={0}>{"Livrables"}</strong>
      {" "}
      <span key={2} className="rmdl-pi"><span>(</span><em>{"selon formule"}</em><span>)</span></span>
      {" :"}
      {" "}
    </p>
    <RmdlList key={3} kind={"l"}>
      <li key={0} className="rmdl-li">
        <p className="rmdl-p" key={0}>
          <span key={0} className="rmdl-lb">{"1. Entretien de cadrage"}</span>
          {" : 60–90 min "}
          <span key={2} className="rmdl-pi"><span>(</span><em>{"visio ou présentiel"}</em><span>)</span></span>
        </p>
      </li>
      <li key={1} className="rmdl-li">
        <p className="rmdl-p" key={0}>
          <span key={0} className="rmdl-lb">{"2. Analyse de l’existant"}</span>
          {" : Audit rapide (UX/UI, contenu, perf) "}
          <span key={2} className="rmdl-pi"><span>(</span><em>{"si support fourni"}</em><span>)</span></span>
        </p>
      </li>
      <li key={2} className="rmdl-li">
        <p className="rmdl-p" key={0}>
          <span key={0} className="rmdl-lb">{"3. Synthèse & recommandations"}</span>
          {" : Priorités, quick wins, plan d’action "}
          <span key={2} className="rmdl-pi"><span>(</span><em>{"1 page"}</em><span>)</span></span>
        </p>
      </li>
    </RmdlList>
    <p className="rmdl-p" key={4}>
      <span key={0} className="rmdl-lb">{"Ce que vous obtenez"}</span>
      {" :"}
      {" "}
    </p>
    <RmdlList key={5} kind={"l"}>
      <li key={0} className="rmdl-li">
        <p className="rmdl-p" key={0}>
          <strong key={0}>{"Un récapitulatif clair"}</strong>
          {" "}
          <span key={2} className="rmdl-pi"><span>(</span><em>{"1 page"}</em><span>)</span></span>
        </p>
      </li>
      <li key={1} className="rmdl-li">
        <p className="rmdl-p" key={0}>
          <strong key={0}>{"Une direction stratégique"}</strong>
          {" "}
          <span key={2} className="rmdl-pi"><span>(</span><em>{"objectifs + étapes"}</em><span>)</span></span>
        </p>
      </li>
      <li key={2} className="rmdl-li">
        <p className="rmdl-p" key={0}>
          <strong key={0}>{"Un plan d’action"}</strong>
          {" "}
          <span key={2} className="rmdl-pi"><span>(</span><em>{"priorisé"}</em><span>)</span></span>
        </p>
      </li>
    </RmdlList>
    <p className="rmdl-p" key={6}>
      <span key={0} className="rmdl-lb">{"Notes"}</span>
      {" :"}
      {" "}
    </p>
    <RmdlQuote key={7}>
      <p className="rmdl-p" key={0}>
        {"Un bon cadrage réduit les allers-retours et sécurise le budget."}
        {" "}
        <span key={2} className="rmdl-pi"><span>(</span><em>{"On évite de “coder à l’aveugle”."}</em><span>)</span></span>
        {" "}
      </p>
    </RmdlQuote>
    <p className="rmdl-p" key={8}>
      <span key={0} className="rmdl-lb">{"Exemple (règle pi + strong)"}</span>
      {" :"}
      {" "}
      <strong key={3}>{"Un récapitulatif clair"}</strong>
      {" "}
      <span key={5} className="rmdl-pi"><span>(</span><em>{"1 page"}</em><span>)</span></span>
      {" "}
      <strong key={7}>{"Un récapitulatif clair "}<span key={1} className="rmdl-pi"><span>(</span><strong><em>{"1 page"}</em></strong><span>)</span></span></strong>
    </p>
    <p className="rmdl-p" key={9}>
      <span key={0} className="rmdl-lb">{"Bloc de code (doit rester brut)"}</span>
      {" :"}
      {" "}
    </p>
    </React.Fragment>
  );
}
```

---

```ts
// SOURCE: src/hooks/useIdPrefix.ts | Lines: 4-6
// KIND: FunctionDeclaration
function sanitizeReactId(value: string): string {
    return value.replace(/[^a-zA-Z0-9_-]/g, "");
}
```

---

```ts
// SOURCE: src/hooks/useIdPrefix.ts | Lines: 8-14
// KIND: FunctionDeclaration
function useIdPrefix(namespace: string): string {
    const raw = useId();

    return useMemo(() => {
        return `${namespace}-${sanitizeReactId(raw)}`;
    }, [namespace, raw]);
}
```

---

```ts
// SOURCE: src/hooks/useIdPrefix.ts | Lines: 11-13
// KIND: ArrowFunction
() => {
        return `${namespace}-${sanitizeReactId(raw)}`;
    }
```

---

```ts
// SOURCE: src/hooks/useLazyIconData.jsx | Lines: 2-18
// KIND: ArrowFunction
() => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const load = async () => {
            const res = await fetch("/iconsPathsData.json", {
                priority: "low"
            });
            const json = await res.json();
            setData(json);
        };

        load();
    }, []);

    return data;
}
```

---

```ts
// SOURCE: src/hooks/useLazyIconData.jsx | Lines: 5-15
// KIND: ArrowFunction
() => {
        const load = async () => {
            const res = await fetch("/iconsPathsData.json", {
                priority: "low"
            });
            const json = await res.json();
            setData(json);
        };

        load();
    }
```

---

```ts
// SOURCE: src/hooks/useLazyIconData.jsx | Lines: 6-12
// KIND: ArrowFunction
async () => {
            const res = await fetch("/iconsPathsData.json", {
                priority: "low"
            });
            const json = await res.json();
            setData(json);
        }
```

---

```ts
// SOURCE: src/hooks/useMobileBreakpoint.ts | Lines: 4-18
// KIND: ArrowFunction
(maxWidth = 1024) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${maxWidth}px)`);

        const onChange = (ev: MediaQueryListEvent) => setIsMobile(ev.matches);

        setIsMobile(mql.matches);
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, [maxWidth]);

    return isMobile;
}
```

---

```ts
// SOURCE: src/hooks/useMobileBreakpoint.ts | Lines: 7-15
// KIND: ArrowFunction
() => {
        const mql = window.matchMedia(`(max-width: ${maxWidth}px)`);

        const onChange = (ev: MediaQueryListEvent) => setIsMobile(ev.matches);

        setIsMobile(mql.matches);
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }
```

---

```ts
// SOURCE: src/hooks/useMobileBreakpoint.ts | Lines: 10-10
// KIND: ArrowFunction
(ev: MediaQueryListEvent) => setIsMobile(ev.matches)
```

---

```ts
// SOURCE: src/hooks/useMobileBreakpoint.ts | Lines: 14-14
// KIND: ArrowFunction
() => mql.removeEventListener("change", onChange)
```

---

```ts
// SOURCE: src/rmdl/compiler/emit-tsx.ts | Lines: 18-50
// KIND: FunctionDeclaration
function emitTsxPage(input: EmitInput): string {
  const { slug, doc } = input;

  const body = renderBlocks(doc.blocks, 2);

  const output = [
    "/**",
    " * Page RMDL générée (Option A).",
    " * Ne pas modifier à la main.",
    " */",
      "",
      'import React from "react";',
      'import { RmdlHeading } from "../../../rmdl/components/rmdl-heading";',
      'import { RmdlList } from "../../../rmdl/components/rmdl-list";',
      'import { RmdlLink } from "../../../rmdl/components/rmdl-link";',
      'import { RmdlAb } from "../../../rmdl/components/rmdl-ab";',
      'import { RmdlQuote } from "../../../rmdl/components/rmdl-q";',
      'import { RmdlCode } from "../../../rmdl/components/rmdl-code";',
      "",
      "export default function Page(): React.ReactElement {",
      `  const __slug = ${tsStringLiteral(slug)};`,
      "  void __slug; // slug dispo si besoin",
      "  return (",
      "    <React.Fragment>",
      body.length ? body : "      {null}",
      "    </React.Fragment>",
    "  );",
    "}",
    "",
  ].join("\n");

  return output;
}
```

---

```ts
// SOURCE: src/rmdl/compiler/emit-tsx.ts | Lines: 52-54
// KIND: FunctionDeclaration
function indent(n: number): string {
    return "  ".repeat(n);
  }
```

---

```ts
// SOURCE: src/rmdl/compiler/emit-tsx.ts | Lines: 56-62
// KIND: FunctionDeclaration
function renderBlocks(blocks: ReadonlyArray<RmdlBlock>, depth: number): string {
    const out: string[] = [];
    blocks.forEach((b, idx) => {
      out.push(renderBlock(b, depth, idx));
    });
    return out.join("\n");
  }
```

---

```ts
// SOURCE: src/rmdl/compiler/emit-tsx.ts | Lines: 58-60
// KIND: ArrowFunction
(b, idx) => {
      out.push(renderBlock(b, depth, idx));
    }
```

---

```ts
// SOURCE: src/rmdl/compiler/emit-tsx.ts | Lines: 64-109
// KIND: FunctionDeclaration
function renderBlock(block: RmdlBlock, depth: number, key: number): string {
    const pad = indent(depth);
  
    if (block.kind === "heading") {
      return [
        `${pad}<RmdlHeading level={${block.level}}${block.id ? ` id=${tsxLit(block.id)}` : ""} key=${tsxKey(
          key,
        )}>`,
        renderInlines(block.inlines, depth + 1),
        `${pad}</RmdlHeading>`,
      ].join("\n");
    }
  
    if (block.kind === "paragraph") {
      return [
        `${pad}<p className="rmdl-p" key=${tsxKey(key)}>`,
        renderInlines(block.inlines, depth + 1),
        `${pad}</p>`,
      ].join("\n");
    }
  
    if (block.kind === "code") {
      return `${pad}<RmdlCode key=${tsxKey(key)} lang=${tsxLit(block.lang)} code=${tsxLit(block.code)} />`;
    }
  
    if (block.kind === "quote") {
      const qb = block as RmdlQuoteBlock;
      return [
        `${pad}<RmdlQuote key=${tsxKey(key)}${qb.by ? ` by=${tsxLit(qb.by)}` : ""}>`,
        renderBlocks(qb.blocks, depth + 1),
        `${pad}</RmdlQuote>`,
      ].join("\n");
    }
  
    if (block.kind === "list") {
      const lb = block as RmdlListBlock;
      return [
        `${pad}<RmdlList key=${tsxKey(key)} kind=${tsxLit(lb.listKind)}>`,
        renderListItems(lb.items, depth + 1),
        `${pad}</RmdlList>`,
      ].join("\n");
    }
  
    // exhaustive safeguard
    return `${pad}{null /* block inconnu */}`;
  }
```

---

```ts
// SOURCE: src/rmdl/compiler/emit-tsx.ts | Lines: 111-120
// KIND: FunctionDeclaration
function renderListItems(items: ReadonlyArray<RmdlListItem>, depth: number): string {
    const pad = indent(depth);
    const out: string[] = [];
    items.forEach((it, idx) => {
      out.push(`${pad}<li key=${tsxKey(idx)} className="rmdl-li">`);
      out.push(renderBlocks(it.blocks, depth + 1));
      out.push(`${pad}</li>`);
    });
    return out.join("\n");
  }
```

---

```ts
// SOURCE: src/rmdl/compiler/emit-tsx.ts | Lines: 114-118
// KIND: ArrowFunction
(it, idx) => {
      out.push(`${pad}<li key=${tsxKey(idx)} className="rmdl-li">`);
      out.push(renderBlocks(it.blocks, depth + 1));
      out.push(`${pad}</li>`);
    }
```

---

```ts
// SOURCE: src/rmdl/compiler/emit-tsx.ts | Lines: 122-131
// KIND: FunctionDeclaration
function renderInlines(inlines: ReadonlyArray<RmdlInline>, depth: number): string {
    const pad = indent(depth);
    const out: string[] = [];
  
    inlines.forEach((n, idx) => {
      out.push(`${pad}${renderInline(n, idx)}`);
    });
  
    return out.join("\n");
  }
```

---

```ts
// SOURCE: src/rmdl/compiler/emit-tsx.ts | Lines: 126-128
// KIND: ArrowFunction
(n, idx) => {
      out.push(`${pad}${renderInline(n, idx)}`);
    }
```

---

```ts
// SOURCE: src/rmdl/compiler/emit-tsx.ts | Lines: 133-174
// KIND: FunctionDeclaration
function renderInline(n: RmdlInline, key: number): string {
    if (n.kind === "text") {
      // Texte => littéral en TSX (protégé)
      return tsxText(n.text);
    }
  
    if (n.kind === "strong") {
      return `<strong key=${tsxKey(key)}>${renderInlineChildren(n.inlines)}</strong>`;
    }
  
    if (n.kind === "label") {
      // label sémantique : rendu simple (le ":" est hors balise côté source)
      return `<span key=${tsxKey(key)} className="rmdl-lb">${renderInlineChildren(n.inlines)}</span>`;
    }
  
    if (n.kind === "pi") {
      // Règle: parenthèses jamais en gras
      // - contenu toujours italic
      // - si pi.strong => strong+italic sur le contenu uniquement
      const inner = n.strong
        ? `<strong><em>${renderInlineChildren(n.inlines)}</em></strong>`
        : `<em>${renderInlineChildren(n.inlines)}</em>`;
  
      return `<span key=${tsxKey(key)} className="rmdl-pi"><span>(</span>${inner}<span>)</span></span>`;
    }
  
    if (n.kind === "link") {
      const ln = n as RmdlLinkInline;
      return `<RmdlLink key=${tsxKey(key)} href=${tsxLit(ln.href)} ext={${ln.ext}} cta={${ln.cta}} dl={${ln.dl}}>${renderInlineChildren(
        ln.text,
      )}</RmdlLink>`;
    }
  
    if (n.kind === "ab") {
      const ab = n as RmdlAbInline;
      return `<RmdlAb key=${tsxKey(key)}${ab.definition ? ` definition=${tsxLit(ab.definition)}` : ""}${
        ab.href ? ` href=${tsxLit(ab.href)}` : ""
      }>${renderInlineChildren(ab.text)}</RmdlAb>`;
    }
  
    return `{null /* inline inconnu */}`;
  }
```

---

```ts
// SOURCE: src/rmdl/compiler/emit-tsx.ts | Lines: 176-179
// KIND: FunctionDeclaration
function renderInlineChildren(inlines: ReadonlyArray<RmdlInline>): string {
    // Enfants inline => on concatène directement (sans sauts de ligne)
    return inlines.map((x, i) => renderInline(x, i)).join("");
  }
```

---

```ts
// SOURCE: src/rmdl/compiler/emit-tsx.ts | Lines: 178-178
// KIND: ArrowFunction
(x, i) => renderInline(x, i)
```

---

```ts
// SOURCE: src/rmdl/compiler/emit-tsx.ts | Lines: 181-183
// KIND: FunctionDeclaration
function tsxKey(n: number): string {
    return `{${n}}`;
  }
```

---

```ts
// SOURCE: src/rmdl/compiler/emit-tsx.ts | Lines: 185-188
// KIND: FunctionDeclaration
function tsxLit(value: string): string {
    // littéral string TSX (JSON.stringify safe)
    return `{${tsStringLiteral(value)}}`;
  }
```

---

```ts
// SOURCE: src/rmdl/compiler/emit-tsx.ts | Lines: 190-192
// KIND: FunctionDeclaration
function tsxText(value: string): string {
    return `{${tsStringLiteral(value)}}`;
  }
```

---

```ts
// SOURCE: src/rmdl/compiler/escape-tsx.ts | Lines: 5-7
// KIND: FunctionDeclaration
function tsStringLiteral(value: string): string {
  return JSON.stringify(value);
}
```

---

```ts
// SOURCE: src/rmdl/components/rmdl-ab.tsx | Lines: 9-25
// KIND: FunctionDeclaration
function RmdlAb(props: RmdlAbProps): React.ReactElement {
  const { definition, href, children } = props;

  const inner = (
    <span className="rmdl-ab" data-rmdl-definition={definition ?? ""}>
      {children}
    </span>
  );

  if (!href) return inner;

  return (
    <a className="rmdl-ab-link" href={href}>
      {inner}
    </a>
  );
}
```

---

```ts
// SOURCE: src/rmdl/components/rmdl-code.tsx | Lines: 8-15
// KIND: FunctionDeclaration
function RmdlCode(props: RmdlCodeProps): React.ReactElement {
  const { lang, code } = props;
  return (
    <pre className="rmdl-code">
      <code className={`language-${lang}`}>{code}</code>
    </pre>
  );
}
```

---

```ts
// SOURCE: src/rmdl/components/rmdl-heading.tsx | Lines: 9-13
// KIND: FunctionDeclaration
function RmdlHeading(props: RmdlHeadingProps): React.ReactElement {
  const { level, id, children } = props;
  const Tag = (`h${level}` as const);
  return <Tag id={id} className={`rmdl-h${level}`}>{children}</Tag>;
}
```

---

```ts
// SOURCE: src/rmdl/components/rmdl-link.tsx | Lines: 12-35
// KIND: FunctionDeclaration
function RmdlLink(props: RmdlLinkProps): React.ReactElement {
  const { href, ext, cta, dl, children } = props;
  const className = cta ? "rmdl-cta" : "rmdl-link";

  if (ext) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        download={dl || undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
```

---

```ts
// SOURCE: src/rmdl/components/rmdl-list.tsx | Lines: 10-14
// KIND: FunctionDeclaration
function RmdlList(props: RmdlListProps): React.ReactElement {
  const { kind, children } = props;
  const Tag = kind === "ol" || kind === "ol2" ? "ol" : "ul";
  return <Tag className={`rmdl-list rmdl-${kind}`}>{children}</Tag>;
}
```

---

```ts
// SOURCE: src/rmdl/components/rmdl-q.tsx | Lines: 8-16
// KIND: FunctionDeclaration
function RmdlQuote(props: RmdlQuoteProps): React.ReactElement {
  const { by, children } = props;
  return (
    <blockquote className="rmdl-quote">
      <div className="rmdl-quote-content">{children}</div>
      {by ? <footer className="rmdl-quote-by">{by}</footer> : null}
    </blockquote>
  );
}
```

---

```ts
// SOURCE: src/rmdl/lexer.ts | Lines: 14-16
// KIND: FunctionDeclaration
function isLowerAscii(s: string): boolean {
  return s === s.toLowerCase();
}
```

---

```ts
// SOURCE: src/rmdl/lexer.ts | Lines: 18-41
// KIND: FunctionDeclaration
function parseAttrs(raw: string): Readonly<Record<string, string | boolean>> {
  const attrs: Record<string, string | boolean> = {};
  const parts = raw.trim().length === 0 ? [] : raw.trim().split(/\s+/);

  for (const part of parts) {
    const eq = part.indexOf("=");
    if (eq === -1) {
      attrs[part] = true;
      continue;
    }
    const key = part.slice(0, eq);
    let val = part.slice(eq + 1);

    if (
      (val.startsWith('"') && val.endsWith('"') && val.length >= 2) ||
      (val.startsWith("'") && val.endsWith("'") && val.length >= 2)
    ) {
      val = val.slice(1, -1);
    }
    attrs[key] = val;
  }

  return attrs;
}
```

---

```ts
// SOURCE: src/rmdl/lexer.ts | Lines: 43-47
// KIND: FunctionDeclaration
function readUntilNewline(input: string, start: number): { line: string; next: number } {
  let i = start;
  while (i < input.length && input[i] !== "\n") i += 1;
  return { line: input.slice(start, i), next: i };
}
```

---

```ts
// SOURCE: src/rmdl/lexer.ts | Lines: 49-51
// KIND: FunctionDeclaration
function isLineStart(input: string, idx: number): boolean {
  return idx === 0 || input[idx - 1] === "\n";
}
```

---

```ts
// SOURCE: src/rmdl/lexer.ts | Lines: 53-150
// KIND: FunctionDeclaration
function lex(inputRaw: string): ReadonlyArray<Token> {
  const input = inputRaw.replace(/\r\n/g, "\n");
  const tokens: Token[] = [];
  let i = 0;

  const pushText = (value: string): void => {
    if (value.length === 0) return;
    const last = tokens[tokens.length - 1];
    if (last && last.kind === "text") {
      tokens[tokens.length - 1] = { kind: "text", value: last.value + value };
      return;
    }
    tokens.push({ kind: "text", value });
  };

  while (i < input.length) {
    // code fence: ```lang\n...\n```
    if (isLineStart(input, i) && input.startsWith("```", i)) {
      const header = readUntilNewline(input, i);
      const lang = header.line.slice(3).trim() || "text";

      i = header.next;
      if (i < input.length && input[i] === "\n") i += 1;

      const contentStart = i;

      while (i <= input.length) {
        if (i === input.length) break;

        if (isLineStart(input, i) && input.startsWith("```", i)) {
          const code = input.slice(contentStart, i);
          const closeLine = readUntilNewline(input, i);
          i = closeLine.next;
          if (i < input.length && input[i] === "\n") i += 1;

          tokens.push({ kind: "code", lang, code });
          tokens.push({ kind: "eol" });
          break;
        }

        const nextNl = input.indexOf("\n", i);
        i = nextNl === -1 ? input.length : nextNl + 1;
      }
      continue;
    }

    const ch = input[i];

    if (ch === "\n") {
      tokens.push({ kind: "eol" });
      i += 1;
      continue;
    }

    if (ch === "<") {
      const end = input.indexOf(">", i + 1);
      if (end === -1) {
        pushText(input.slice(i));
        break;
      }

      const inside = input.slice(i + 1, end).trim();
      const space = inside.indexOf(" ");
      const name = (space === -1 ? inside : inside.slice(0, space)).trim();

      if (name.length === 0 || !isLowerAscii(name) || !isAllowedTag(name)) {
        pushText(input.slice(i, end + 1));
        i = end + 1;
        continue;
      }

      const attrsRaw = space === -1 ? "" : inside.slice(space + 1);
      const attrs = parseAttrs(attrsRaw);

      tokens.push({ kind: "tag", name, attrs });
      i = end + 1;
      continue;
    }

    const nextSpecial = (() => {
      const nextLt = input.indexOf("<", i);
      const nextNl = input.indexOf("\n", i);
      if (nextLt === -1) return nextNl;
      if (nextNl === -1) return nextLt;
      return Math.min(nextLt, nextNl);
    })();

    if (nextSpecial === -1) {
      pushText(input.slice(i));
      break;
    }

    pushText(input.slice(i, nextSpecial));
    i = nextSpecial;
  }

  return tokens;
}
```

---

```ts
// SOURCE: src/rmdl/lexer.ts | Lines: 58-66
// KIND: ArrowFunction
(value: string): void => {
    if (value.length === 0) return;
    const last = tokens[tokens.length - 1];
    if (last && last.kind === "text") {
      tokens[tokens.length - 1] = { kind: "text", value: last.value + value };
      return;
    }
    tokens.push({ kind: "text", value });
  }
```

---

```ts
// SOURCE: src/rmdl/lexer.ts | Lines: 132-138
// KIND: ArrowFunction
() => {
      const nextLt = input.indexOf("<", i);
      const nextNl = input.indexOf("\n", i);
      if (nextLt === -1) return nextNl;
      if (nextNl === -1) return nextLt;
      return Math.min(nextLt, nextNl);
    }
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 20-22
// KIND: FunctionDeclaration
function peek(cur: Cursor): Token | null {
  return cur.idx < cur.tokens.length ? cur.tokens[cur.idx] : null;
}
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 24-28
// KIND: FunctionDeclaration
function next(cur: Cursor): [Token | null, Cursor] {
  const t = peek(cur);
  const nextIdx = cur.idx < cur.tokens.length ? cur.idx + 1 : cur.idx;
  return [t, { tokens: cur.tokens, idx: nextIdx }];
}
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 30-38
// KIND: FunctionDeclaration
function skipEols(cur: Cursor): Cursor {
  let c = cur;
  while (true) {
    const t = peek(c);
    if (!t || t.kind !== "eol") break;
    c = { tokens: c.tokens, idx: c.idx + 1 };
  }
  return c;
}
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 40-45
// KIND: FunctionDeclaration
function isBlankLineAhead(cur: Cursor): boolean {
  const t1 = peek(cur);
  if (!t1 || t1.kind !== "eol") return false;
  const t2 = cur.idx + 1 < cur.tokens.length ? cur.tokens[cur.idx + 1] : null;
  return !!t2 && t2.kind === "eol";
}
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 47-49
// KIND: FunctionDeclaration
function tagName(t: Token | null): string | null {
  return t && t.kind === "tag" ? t.name : null;
}
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 51-55
// KIND: FunctionDeclaration
function consumeIfTag(cur: Cursor, name: string): Cursor {
  const t = peek(cur);
  if (t && t.kind === "tag" && t.name === name) return next(cur)[1];
  return cur;
}
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 57-62
// KIND: FunctionDeclaration
function mergeStopTags(a: ReadonlySet<string>, b: ReadonlySet<string>): ReadonlySet<string> {
  const out = new Set<string>();
  for (const x of a) out.add(x);
  for (const x of b) out.add(x);
  return out;
}
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 64-86
// KIND: FunctionDeclaration
function parseInlinesUntilTag(cur: Cursor, stopTag: string): { inlines: ReadonlyArray<RmdlInline>; cur: Cursor } {
  const out: RmdlInline[] = [];
  let c = cur;

  while (true) {
    const t = peek(c);
    if (!t) break;

    if (t.kind === "tag" && t.name === stopTag) break;

    if (t.kind === "eol") {
      out.push({ kind: "text", text: " " });
      c = { tokens: c.tokens, idx: c.idx + 1 };
      continue;
    }

    const parsed = parseInline(c);
    out.push(parsed.inline);
    c = parsed.cur;
  }

  return { inlines: out, cur: c };
}
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 88-156
// KIND: FunctionDeclaration
function parseInline(cur: Cursor): { inline: RmdlInline; cur: Cursor } {
  const t = peek(cur);
  if (!t) return { inline: { kind: "text", text: "" }, cur };

  if (t.kind === "text") {
    const [, c2] = next(cur);
    return { inline: { kind: "text", text: t.value }, cur: c2 };
  }

  if (t.kind === "tag") {
    const name = t.name;
    const attrs = t.attrs;
    const [, afterOpen] = next(cur);

    if (name === "s") {
      const inner = parseInlinesUntilTag(afterOpen, "s");
      const afterClose = consumeIfTag(inner.cur, "s");
      return { inline: { kind: "strong", inlines: inner.inlines }, cur: afterClose };
    }

    if (name === "lb") {
      const inner = parseInlinesUntilTag(afterOpen, "lb");
      const afterClose = consumeIfTag(inner.cur, "lb");
      return { inline: { kind: "label", inlines: inner.inlines }, cur: afterClose };
    }

    if (name === "pi") {
        const inner = parseInlinesUntilTag(afterOpen, "pi");
        const afterClose = consumeIfTag(inner.cur, "pi");
        return { inline: { kind: "pi", inlines: inner.inlines, strong: false }, cur: afterClose };
      }
      

    if (name === "a") {
      const h = typeof attrs.h === "string" ? attrs.h : "";
      const ext = attrs.ext === true;
      const cta = attrs.cta === true;
      const dl = attrs.dl === true;

      const inner = parseInlinesUntilTag(afterOpen, "a");
      const afterClose = consumeIfTag(inner.cur, "a");

      return {
        inline: { kind: "link", href: h, text: inner.inlines, ext, cta, dl },
        cur: afterClose,
      };
    }

    if (name === "ab") {
      const d = typeof attrs.d === "string" ? attrs.d : undefined;
      const h = typeof attrs.h === "string" ? attrs.h : undefined;

      const inner = parseInlinesUntilTag(afterOpen, "ab");
      const afterClose = consumeIfTag(inner.cur, "ab");

      return { inline: { kind: "ab", definition: d, href: h, text: inner.inlines }, cur: afterClose };
    }

    return { inline: { kind: "text", text: `<${name}>` }, cur: afterOpen };
  }

  if (t.kind === "code") {
    const [, c2] = next(cur);
    return { inline: { kind: "text", text: t.code }, cur: c2 };
  }

  const [, c2] = next(cur);
  return { inline: { kind: "text", text: " " }, cur: c2 };
}
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 158-167
// KIND: FunctionDeclaration
function parseHeading(cur: Cursor, level: 1 | 2 | 3, tag: "h1" | "h2" | "h3"): { block: RmdlBlock; cur: Cursor } {
  const [, afterOpen] = next(cur);
  const inner = parseInlinesUntilTag(afterOpen, tag);
  const afterClose = consumeIfTag(inner.cur, tag);

  return {
    block: { kind: "heading", level, inlines: inner.inlines },
    cur: afterClose,
  };
}
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 169-193
// KIND: FunctionDeclaration
function parseParagraph(cur: Cursor, stopTags: ReadonlySet<string>): { block: RmdlBlock; cur: Cursor } {
  const inlines: RmdlInline[] = [];
  let c = cur;

  while (true) {
    const t = peek(c);
    if (!t) break;

    if (t.kind === "eol") {
      if (isBlankLineAhead(c)) break;
      inlines.push({ kind: "text", text: " " });
      c = { tokens: c.tokens, idx: c.idx + 1 };
      continue;
    }

    if (t.kind === "tag" && stopTags.has(t.name)) break;
    if (t.kind === "code") break;

    const parsed = parseInline(c);
    inlines.push(parsed.inline);
    c = parsed.cur;
  }

  return { block: { kind: "paragraph", inlines }, cur: c };
}
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 195-202
// KIND: FunctionDeclaration
function parseCode(cur: Cursor): { block: RmdlBlock; cur: Cursor } {
  const t = peek(cur);
  if (!t || t.kind !== "code") {
    return { block: { kind: "code", lang: "text", code: "" }, cur };
  }
  const [, c2] = next(cur);
  return { block: { kind: "code", lang: t.lang, code: t.code }, cur: c2 };
}
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 204-264
// KIND: FunctionDeclaration
function parseBlocks(cur: Cursor, stopTags: ReadonlySet<string>): { blocks: ReadonlyArray<RmdlBlock>; cur: Cursor } {
  const blocks: RmdlBlock[] = [];
  let c = skipEols(cur);

  while (true) {
    c = skipEols(c);
    const t = peek(c);
    if (!t) break;

    if (t.kind === "tag" && stopTags.has(t.name)) break;

    if (t.kind === "code") {
      const b = parseCode(c);
      blocks.push(b.block);
      c = skipEols(b.cur);
      continue;
    }

    const name = tagName(t);

    if (name === "h1") {
      const b = parseHeading(c, 1, "h1");
      blocks.push(b.block);
      c = skipEols(b.cur);
      continue;
    }
    if (name === "h2") {
      const b = parseHeading(c, 2, "h2");
      blocks.push(b.block);
      c = skipEols(b.cur);
      continue;
    }
    if (name === "h3") {
      const b = parseHeading(c, 3, "h3");
      blocks.push(b.block);
      c = skipEols(b.cur);
      continue;
    }

    if (name === "q") {
      const b = parseQuote(c);
      blocks.push(b.block);
      c = skipEols(b.cur);
      continue;
    }

    if (name === "l" || name === "ol" || name === "l2" || name === "ol2") {
      const b = parseList(c, name);
      blocks.push(b.block);
      c = skipEols(b.cur);
      continue;
    }

    const stopForParagraph = mergeStopTags(stopTags, BLOCK_TAGS);
    const p = parseParagraph(c, stopForParagraph);
    blocks.push(p.block);
    c = p.cur;
  }

  return { blocks, cur: c };
}
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 266-271
// KIND: FunctionDeclaration
function parseQuote(cur: Cursor): { block: RmdlBlock; cur: Cursor } {
  const [, afterOpen] = next(cur);
  const inner = parseBlocks(afterOpen, new Set<string>(["q"]));
  const afterClose = consumeIfTag(inner.cur, "q");
  return { block: { kind: "quote", blocks: inner.blocks }, cur: afterClose };
}
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 273-317
// KIND: FunctionDeclaration
function parseList(cur: Cursor, listKind: RmdlListKind): { block: RmdlBlock; cur: Cursor } {
  const listTag = listKind;
  const [, afterOpen] = next(cur);
  let c = skipEols(afterOpen);

  const items: Array<Readonly<{ kind: "item"; blocks: ReadonlyArray<RmdlBlock> }>> = [];

  while (true) {
    const t = peek(c);
    if (!t) break;

    if (t.kind === "tag" && t.name === listTag) {
      const [, afterClose] = next(c);
      c = afterClose;
      break;
    }

    if (t.kind === "eol") {
      c = { tokens: c.tokens, idx: c.idx + 1 };
      continue;
    }

    if (t.kind === "tag" && t.name === "i") {
        // consume <i> opening
        const [, afterItemOpen] = next(c);
      
        // parse item blocks until closing <i> OR closing list tag
        const inner = parseBlocks(afterItemOpen, new Set<string>(["i", listTag]));
      
        // consume closing <i> if present (sinon item fermé par fin de liste)
        const afterItemClose = consumeIfTag(inner.cur, "i");
      
        items.push({ kind: "item", blocks: inner.blocks });
        c = afterItemClose;
        continue;
      }
      

    const fallback = parseParagraph(c, new Set<string>(["i", listTag]));
    items.push({ kind: "item", blocks: [fallback.block] });
    c = fallback.cur;
  }

  return { block: { kind: "list", listKind, items }, cur: c };
}
```

---

```ts
// SOURCE: src/rmdl/parser.ts | Lines: 319-323
// KIND: FunctionDeclaration
function parse(tokens: ReadonlyArray<Token>): RmdlDoc {
  const start: Cursor = { tokens, idx: 0 };
  const out = parseBlocks(start, new Set<string>());
  return { blocks: out.blocks };
}
```

---

```ts
// SOURCE: src/rmdl/sanitize.ts | Lines: 3-40
// KIND: FunctionDeclaration
function stripWrappingParens(inlines: ReadonlyArray<RmdlInline>): ReadonlyArray<RmdlInline> {
  if (inlines.length === 0) return inlines;

  const first = inlines[0];
  const last = inlines[inlines.length - 1];

  if (first.kind !== "text" || last.kind !== "text") return inlines;
  if (!first.text.startsWith("(") || !last.text.endsWith(")")) return inlines;

  if (inlines.length === 1) {
    const mid = first.text.slice(1, -1);
    return mid.length > 0 ? [{ ...first, text: mid }] : [];
  }

  const next: RmdlInline[] = [...inlines];
  const firstText = first.text.slice(1);
  const lastText = last.text.slice(0, -1);

  if (firstText.length === 0) {
    next.shift();
  } else {
    next[0] = { ...first, text: firstText };
  }

  const lastIndex = next.length - 1;
  if (lastIndex >= 0) {
    const tail = next[lastIndex];
    if (tail.kind === "text") {
      if (lastText.length === 0) {
        next.pop();
      } else {
        next[lastIndex] = { ...tail, text: lastText };
      }
    }
  }

  return next;
}
```

---

```ts
// SOURCE: src/rmdl/sanitize.ts | Lines: 42-58
// KIND: FunctionDeclaration
function mapInlines(inlines: ReadonlyArray<RmdlInline>, inStrong: boolean): ReadonlyArray<RmdlInline> {
  return inlines.map((n) => {
    if (n.kind === "strong") {
        return { ...n, inlines: mapInlines(n.inlines, true) }; // strong impose true
      }
      
    if (n.kind === "pi") {
      // pi "hérite" du contexte strong, mais les parenthèses resteront normales au rendu
      const normalized = stripWrappingParens(mapInlines(n.inlines, inStrong));
      return { ...n, strong: inStrong, inlines: normalized };
    }
    if (n.kind === "label") return { ...n, inlines: mapInlines(n.inlines, inStrong) };
    if (n.kind === "link") return { ...n, text: mapInlines(n.text, inStrong) };
    if (n.kind === "ab") return { ...n, text: mapInlines(n.text, inStrong) };
    return n;
  });
}
```

---

```ts
// SOURCE: src/rmdl/sanitize.ts | Lines: 43-57
// KIND: ArrowFunction
(n) => {
    if (n.kind === "strong") {
        return { ...n, inlines: mapInlines(n.inlines, true) }; // strong impose true
      }
      
    if (n.kind === "pi") {
      // pi "hérite" du contexte strong, mais les parenthèses resteront normales au rendu
      const normalized = stripWrappingParens(mapInlines(n.inlines, inStrong));
      return { ...n, strong: inStrong, inlines: normalized };
    }
    if (n.kind === "label") return { ...n, inlines: mapInlines(n.inlines, inStrong) };
    if (n.kind === "link") return { ...n, text: mapInlines(n.text, inStrong) };
    if (n.kind === "ab") return { ...n, text: mapInlines(n.text, inStrong) };
    return n;
  }
```

---

```ts
// SOURCE: src/rmdl/sanitize.ts | Lines: 60-71
// KIND: FunctionDeclaration
function mapBlocks(blocks: ReadonlyArray<RmdlBlock>): ReadonlyArray<RmdlBlock> {
  return blocks.map((b) => {
    if (b.kind === "heading") return { ...b, inlines: mapInlines(b.inlines, false) };
    if (b.kind === "paragraph") return { ...b, inlines: mapInlines(b.inlines, false) };
    if (b.kind === "quote") return { ...b, blocks: mapBlocks(b.blocks) };
    if (b.kind === "list") {
      const items: ReadonlyArray<RmdlListItem> = b.items.map((it) => ({ ...it, blocks: mapBlocks(it.blocks) }));
      return { ...b, items };
    }
    return b; // code
  });
}
```

---

```ts
// SOURCE: src/rmdl/sanitize.ts | Lines: 61-70
// KIND: ArrowFunction
(b) => {
    if (b.kind === "heading") return { ...b, inlines: mapInlines(b.inlines, false) };
    if (b.kind === "paragraph") return { ...b, inlines: mapInlines(b.inlines, false) };
    if (b.kind === "quote") return { ...b, blocks: mapBlocks(b.blocks) };
    if (b.kind === "list") {
      const items: ReadonlyArray<RmdlListItem> = b.items.map((it) => ({ ...it, blocks: mapBlocks(it.blocks) }));
      return { ...b, items };
    }
    return b; // code
  }
```

---

```ts
// SOURCE: src/rmdl/sanitize.ts | Lines: 66-66
// KIND: ArrowFunction
(it) => ({ ...it, blocks: mapBlocks(it.blocks) })
```

---

```ts
// SOURCE: src/rmdl/sanitize.ts | Lines: 73-75
// KIND: FunctionDeclaration
function sanitize(doc: RmdlDoc): RmdlDoc {
  return { ...doc, blocks: mapBlocks(doc.blocks) };
}
```

---

```ts
// SOURCE: src/rmdl/schema.ts | Lines: 58-60
// KIND: FunctionDeclaration
function isAllowedTag(name: string): name is AllowedTag {
    return ALLOWED_TAGS.has(name as AllowedTag);
}
```

---

```ts
// SOURCE: src/rmdl/url-policy.ts | Lines: 3-15
// KIND: FunctionDeclaration
function sanitizeUrl(raw: string): string | null {
  const trimmed = raw.trim();
  const lower = trimmed.toLowerCase();

  for (const scheme of FORBIDDEN_SCHEMES) {
    if (lower.startsWith(scheme)) return null;
  }

  if (trimmed.startsWith("/")) return trimmed;
  if (lower.startsWith("https://")) return trimmed;

  return null;
}
```

---

```ts
// SOURCE: src/rmdl/validate.ts | Lines: 12-15
// KIND: FunctionDeclaration
function validate(doc: RmdlDoc): ReadonlyArray<ValidationError> {
  void doc;
  return [];
}
```

---

```ts
// SOURCE: src/utils/functions/functions.js | Lines: 1-11
// KIND: ArrowFunction
delay =>
    new Promise(resolve => {
        const worker = new Worker(
            new URL("/public/workers/delayWorker.js", import.meta.url)
        );
        worker.onmessage = () => {
            worker.terminate();
            resolve();
        };
        worker.postMessage(delay);
    })
```

---

```ts
// SOURCE: src/utils/functions/functions.js | Lines: 2-11
// KIND: ArrowFunction
resolve => {
        const worker = new Worker(
            new URL("/public/workers/delayWorker.js", import.meta.url)
        );
        worker.onmessage = () => {
            worker.terminate();
            resolve();
        };
        worker.postMessage(delay);
    }
```

---

```ts
// SOURCE: src/utils/functions/functions.js | Lines: 6-9
// KIND: ArrowFunction
() => {
            worker.terminate();
            resolve();
        }
```

---

```ts
// SOURCE: src/utils/functions/functions.js | Lines: 12-17
// KIND: FunctionDeclaration
function createIdleDeadline() {
    return {
        timeRemaining: () => Math.max(0, 50),
        didTimeout: false
    };
}
```

---

```ts
// SOURCE: src/utils/functions/functions.js | Lines: 14-14
// KIND: ArrowFunction
() => Math.max(0, 50)
```

---

```ts
// SOURCE: src/utils/functions/functions.js | Lines: 18-22
// KIND: FunctionDeclaration
function idleCallbackPolyfill(callback) {
    return setTimeout(() => {
        callback(createIdleDeadline());
    }, 1);
}
```

---

```ts
// SOURCE: src/utils/functions/functions.js | Lines: 19-21
// KIND: ArrowFunction
() => {
        callback(createIdleDeadline());
    }
```

---

```ts
// SOURCE: src/utils/nav.ts | Lines: 10-30
// KIND: ArrowFunction
(
    path: string,
    currentRoute: string | undefined,
    updateRoute: (route: string) => void,
    handleScrollClick?: (hash: string) => void
): void => {
    if (!currentRoute) {
        return;
    }
    const [currentPath, currentHash] = currentRoute.split("#");
    const [targetPath, targetHash] = path.split("#");
    ifNav({ currentPath, targetPath, targetHash, currentHash, updateRoute });
    elseNav({
        currentPath,
        targetPath,
        targetHash,
        currentHash,
        updateRoute,
        handleScrollClick,
    });
}
```

---

```ts
// SOURCE: src/utils/nav.ts | Lines: 32-42
// KIND: FunctionDeclaration
function ifNav({ currentPath, targetPath, targetHash, currentHash, updateRoute }: NavParams): void {
    if (currentPath !== targetPath) {
        updateRoute(targetPath);
        if (targetHash === undefined) {
            return;
        }
        if (targetHash !== currentHash) {
            updateRoute(`${targetPath}#${targetHash}`);
        }
    }
}
```

---

```ts
// SOURCE: src/utils/nav.ts | Lines: 44-63
// KIND: FunctionDeclaration
function elseNav({
    currentPath,
    targetPath,
    targetHash,
    currentHash,
    updateRoute,
    handleScrollClick,
}: NavParams): void {
    if (currentPath === targetPath) {
        updateRoute(targetPath);
        if (targetHash === undefined) {
            handleScrollClick?.(`scroll-start`);
        } else if (targetHash !== currentHash) {
            handleScrollClick?.(targetHash);
            updateRoute(`${targetPath}#${targetHash}`);
        } else if (targetHash === currentHash) {
            updateRoute(`${targetPath}#${targetHash}`);
        }
    }
}
```

---

```ts
// SOURCE: src/utils/updateMenuUtils.ts | Lines: 3-8
// KIND: ArrowFunction
(itemPath: string, currentRoute: string): boolean => {
    if (itemPath === "/") {
        return currentRoute === "/" || currentRoute.startsWith("/#");
    }
    return currentRoute.startsWith(itemPath);
}
```

---

```ts
// SOURCE: src/utils/updateMenuUtils.ts | Lines: 10-14
// KIND: ArrowFunction
(subItems: SubItem[], activeSection: string): SubItem[] =>
    subItems.map((sub) => ({
        ...sub,
        class: sub.AnchorId === `#${activeSection}` ? "active" : "",
    }))
```

---

```ts
// SOURCE: src/utils/updateMenuUtils.ts | Lines: 11-14
// KIND: ArrowFunction
(sub) => ({
        ...sub,
        class: sub.AnchorId === `#${activeSection}` ? "active" : "",
    })
```

---

```ts
// SOURCE: src/utils/updateMenuUtils.ts | Lines: 16-26
// KIND: ArrowFunction
(
    mainLink: MenuItem[] = [],
    activeSection = "",
    currentRoute = ""
) => ({
    mainLink: mainLink.map((item) => ({
        ...item,
        class: isMainItemActive(item.path, currentRoute) ? "active" : "",
        subItems: item.subItems ? mapSubItems(item.subItems, activeSection) : undefined,
    })),
})
```

---

```ts
// SOURCE: src/utils/updateMenuUtils.ts | Lines: 21-25
// KIND: ArrowFunction
(item) => ({
        ...item,
        class: isMainItemActive(item.path, currentRoute) ? "active" : "",
        subItems: item.subItems ? mapSubItems(item.subItems, activeSection) : undefined,
    })
```

---

```ts
// SOURCE: src/utils/useIsBrowser.ts | Lines: 1-1
// KIND: ArrowFunction
()=>{const[isBrowser,setIsBrowser]=useState(false);useEffect(()=>{setIsBrowser(typeof window!=="undefined")},[]);return isBrowser}
```

---

```ts
// SOURCE: src/utils/useIsBrowser.ts | Lines: 1-1
// KIND: ArrowFunction
()=>{setIsBrowser(typeof window!=="undefined")}
```

---

```ts
// SOURCE: src/workers/scrollSmoothWorker.js | Lines: 1-13
// KIND: FunctionExpression
function (event) {
    const { start, end, duration, startTime, currentTime } = event.data;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeInOutCubic =
        progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 4) / 2;

    const newScrollY = start + (end - start) * easeInOutCubic;

    self.postMessage({ newScrollY, progress });
}
```

---

```ts
// SOURCE: src/workers/scrollWorker.js | Lines: 1-19
// KIND: FunctionExpression
function(event) {
    const { sections, scrollY } = event.data;
    let currentSectionId = "";

    // Déterminer la section visible
    sections.forEach(({ id }) => {
        const sectionTop = event.data.positions[id]?.top;
        const sectionHeight = event.data.positions[id]?.height;
        const isInView =
            scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight;

        if (isInView) {
            currentSectionId = id;
        }
    });

    // Retourner la section active au main thread
    self.postMessage({ currentSectionId });
}
```

---

```ts
// SOURCE: src/workers/scrollWorker.js | Lines: 6-15
// KIND: ArrowFunction
({ id }) => {
        const sectionTop = event.data.positions[id]?.top;
        const sectionHeight = event.data.positions[id]?.height;
        const isInView =
            scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight;

        if (isInView) {
            currentSectionId = id;
        }
    }
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 190-192
// KIND: FunctionDeclaration
function isRecord(value: unknown): value is JsonObject {
    return typeof value === "object" && value !== null;
}
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 194-196
// KIND: FunctionDeclaration
function isStringArray(value: unknown): value is string[] {
    return Array.isArray(value) && value.every((item) => typeof item === "string");
}
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 195-195
// KIND: ArrowFunction
(item) => typeof item === "string"
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 198-200
// KIND: FunctionDeclaration
function isRole(value: unknown): value is Role {
    return typeof value === "string" && ROLE_LIST.includes(value as Role);
}
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 202-214
// KIND: FunctionDeclaration
function parseScripts(raw: unknown): Record<string, string> {
    if (!isRecord(raw)) {
        return {};
    }
    const entries = Object.entries(raw);
    const normalized: Record<string, string> = {};
    for (const [key, value] of entries) {
        if (typeof value === "string") {
            normalized[key] = value;
        }
    }
    return normalized;
}
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 216-227
// KIND: FunctionDeclaration
function resolveScriptPresence(name: string, scripts: Record<string, string>): ScriptPresence {
    if (Object.prototype.hasOwnProperty.call(scripts, name)) {
        return { found: true, via: null };
    }
    const equivalents = SCRIPT_EQUIVALENTS[name] ?? [];
    for (const alt of equivalents) {
        if (Object.prototype.hasOwnProperty.call(scripts, alt)) {
            return { found: true, via: alt };
        }
    }
    return { found: false, via: null };
}
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 229-245
// KIND: FunctionDeclaration
function buildScriptMap(roles: readonly Role[]): Map<string, ScriptDef> {
    const map = new Map<string, ScriptDef>();
    for (const role of roles) {
        const defs = ROLE_SCRIPT_MATRIX[role] ?? [];
        for (const def of defs) {
            const current = map.get(def.name);
            if (!current) {
                map.set(def.name, def);
                continue;
            }
            if (!current.required && def.required) {
                map.set(def.name, { ...current, required: true });
            }
        }
    }
    return map;
}
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 247-310
// KIND: FunctionDeclaration
function assertSummary(value: unknown): SummaryInput {
    if (!isRecord(value)) {
        throw new Error("Le fichier monorepo-summary.json est invalide (objet attendu).");
    }
    const metaRaw = value.meta;
    if (!isRecord(metaRaw)) {
        throw new Error("Champ meta manquant ou invalide dans le résumé.");
    }
    const workspacesRaw = value.workspaces;
    if (!Array.isArray(workspacesRaw)) {
        throw new Error("Champ workspaces manquant ou invalide dans le résumé.");
    }
    if (typeof metaRaw.node !== "string" || metaRaw.node.length === 0) {
        throw new Error("Champ meta.node manquant ou invalide.");
    }
    if (typeof metaRaw.yarn !== "string" || metaRaw.yarn.length === 0) {
        throw new Error("Champ meta.yarn manquant ou invalide.");
    }
    const nodeLinkerRaw = metaRaw.nodeLinker;
    if (nodeLinkerRaw !== "node-modules" && nodeLinkerRaw !== "pnp") {
        throw new Error("Champ meta.nodeLinker invalide.");
    }
    const ciRaw = Array.isArray(metaRaw.ci) ? metaRaw.ci : [];
    const ci: string[] = [];
    for (const item of ciRaw) {
        if (typeof item !== "string") {
            throw new Error("Champ meta.ci doit être un tableau de chaînes.");
        }
        ci.push(item);
    }
    const summary: SummaryInput = {
        meta: {
            node: metaRaw.node,
            yarn: metaRaw.yarn,
            nodeLinker: nodeLinkerRaw,
            turbo: Boolean(metaRaw.turbo),
            ci,
        },
        workspaces: workspacesRaw.map((raw): WorkspaceInput => {
            if (!isRecord(raw)) {
                throw new Error("Entrée workspace invalide.");
            }
            if (typeof raw.name !== "string" || raw.name.length === 0) {
                throw new Error("Workspace sans nom valide.");
            }
            if (typeof raw.path !== "string" || raw.path.length === 0) {
                throw new Error(`Workspace ${raw.name} sans chemin valide.`);
            }
            const rolesRaw = raw.roles;
            const scriptsRaw = raw.scripts;
            if (!Array.isArray(rolesRaw) || !rolesRaw.every(isRole)) {
                throw new Error(`Rôles invalides pour le workspace ${raw.name}.`);
            }
            const scripts = isStringArray(scriptsRaw) ? scriptsRaw : [];
            return {
                name: raw.name,
                path: raw.path,
                roles: rolesRaw as Role[],
                scripts,
            };
        }),
    };
    return summary;
}
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 285-307
// KIND: ArrowFunction
(raw): WorkspaceInput => {
            if (!isRecord(raw)) {
                throw new Error("Entrée workspace invalide.");
            }
            if (typeof raw.name !== "string" || raw.name.length === 0) {
                throw new Error("Workspace sans nom valide.");
            }
            if (typeof raw.path !== "string" || raw.path.length === 0) {
                throw new Error(`Workspace ${raw.name} sans chemin valide.`);
            }
            const rolesRaw = raw.roles;
            const scriptsRaw = raw.scripts;
            if (!Array.isArray(rolesRaw) || !rolesRaw.every(isRole)) {
                throw new Error(`Rôles invalides pour le workspace ${raw.name}.`);
            }
            const scripts = isStringArray(scriptsRaw) ? scriptsRaw : [];
            return {
                name: raw.name,
                path: raw.path,
                roles: rolesRaw as Role[],
                scripts,
            };
        }
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 312-319
// KIND: FunctionDeclaration
async function loadSummary(): Promise<SummaryInput> {
    if (!existsSync(summaryPath)) {
        throw new Error("tools/monorepo-summary.json introuvable.");
    }
    const raw = await readFile(summaryPath, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    return assertSummary(parsed);
}
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 321-333
// KIND: FunctionDeclaration
async function loadPackageJson(filePath: string): Promise<PackageJsonFile> {
    const raw = await readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (!isRecord(parsed)) {
        throw new Error(`package.json invalide: ${filePath}`);
    }
    const scripts = parseScripts(parsed.scripts);
    return {
        path: filePath,
        content: parsed,
        scripts,
    };
}
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 335-339
// KIND: FunctionDeclaration
async function writePackageJson(file: PackageJsonFile, scripts: Record<string, string>): Promise<void> {
    const nextContent: JsonObject = { ...file.content, scripts };
    const serialized = `${JSON.stringify(nextContent, null, 4)}\n`;
    await writeFile(file.path, serialized, "utf8");
}
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 341-345
// KIND: FunctionDeclaration
async function printCommand(summary: SummaryInput): Promise<void> {
    for (const workspace of summary.workspaces) {
        await printWorkspace(workspace);
    }
}
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 347-369
// KIND: FunctionDeclaration
async function printWorkspace(workspace: WorkspaceInput): Promise<void> {
    const packagePath = path.join(repoRoot, workspace.path, "package.json");
    const pkg = await loadPackageJson(packagePath);
    const scriptMap = buildScriptMap(workspace.roles);
    const entries = Array.from(scriptMap.entries()).sort(([a], [b]) => a.localeCompare(b));
    console.log(`\n• Workspace: ${workspace.name} (${workspace.roles.join(", ")})`);
    for (const [scriptName, def] of entries) {
        const presence = resolveScriptPresence(scriptName, pkg.scripts);
        const command = presence.found
            ? pkg.scripts[presence.via ?? scriptName]
            : def.command;
        const status = presence.found ? "✅" : def.required ? "❌" : "▫️";
        const notes: string[] = [];
        if (presence.via) {
            notes.push(`alias: ${presence.via}`);
        }
        if (!def.required) {
            notes.push("optionnel");
        }
        const note = notes.length > 0 ? ` (${notes.join(", ")})` : "";
        console.log(`  ${status} ${scriptName} → ${command}${note}`);
    }
}
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 351-351
// KIND: ArrowFunction
([a], [b]) => a.localeCompare(b)
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 371-400
// KIND: FunctionDeclaration
async function checkCommand(summary: SummaryInput): Promise<void> {
    const missing: Array<{ workspace: string; scripts: string[] }> = [];
    for (const workspace of summary.workspaces) {
        const packagePath = path.join(repoRoot, workspace.path, "package.json");
        const pkg = await loadPackageJson(packagePath);
        const scriptMap = buildScriptMap(workspace.roles);
        const absent: string[] = [];
        for (const [scriptName, def] of scriptMap.entries()) {
            if (!def.required) {
                continue;
            }
            const presence = resolveScriptPresence(scriptName, pkg.scripts);
            if (!presence.found) {
                absent.push(scriptName);
            }
        }
        if (absent.length > 0) {
            missing.push({ workspace: workspace.name, scripts: absent });
        }
    }
    if (missing.length === 0) {
        console.log("✅ Tous les scripts requis sont présents.");
        return;
    }
    process.exitCode = 1;
    console.error("❌ Scripts manquants détectés:");
    for (const entry of missing) {
        console.error(`- ${entry.workspace}: ${entry.scripts.join(", ")}`);
    }
}
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 402-444
// KIND: FunctionDeclaration
async function fixCommand(summary: SummaryInput): Promise<void> {
    const reports: FixReport[] = [];
    for (const workspace of summary.workspaces) {
        const packagePath = path.join(repoRoot, workspace.path, "package.json");
        const pkg = await loadPackageJson(packagePath);
        const scriptMap = buildScriptMap(workspace.roles);
        const nextScripts: Record<string, string> = { ...pkg.scripts };
        const added: string[] = [];
        const kept: string[] = [];
        const skipped: string[] = [];
        for (const [scriptName, def] of scriptMap.entries()) {
            const presence = resolveScriptPresence(scriptName, nextScripts);
            if (presence.found) {
                if (presence.via) {
                    skipped.push(`${scriptName} (alias: ${presence.via})`);
                } else {
                    kept.push(scriptName);
                }
                continue;
            }
            if (!def.required) {
                skipped.push(`${scriptName} (optionnel)`);
                continue;
            }
            nextScripts[scriptName] = def.command;
            added.push(scriptName);
        }
        if (added.length > 0) {
            await writePackageJson(pkg, nextScripts);
        }
        reports.push({ workspace: workspace.name, added, kept, skipped });
    }
    if (reports.length === 0) {
        console.log("Aucun workspace à traiter.");
        return;
    }
    for (const report of reports) {
        console.log(`\n• ${report.workspace}`);
        console.log(`  Ajoutés : ${report.added.length > 0 ? report.added.join(", ") : "aucun"}`);
        console.log(`  Conservés : ${report.kept.length > 0 ? report.kept.join(", ") : "aucun"}`);
        console.log(`  Ignorés : ${report.skipped.length > 0 ? report.skipped.join(", ") : "aucun"}`);
    }
}
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 446-462
// KIND: FunctionDeclaration
async function syncCommand(): Promise<void> {
    const pkg = await loadPackageJson(rootPackagePath);
    const nextScripts: Record<string, string> = { ...pkg.scripts };
    let changed = false;
    for (const [name, command] of Object.entries(ROOT_ORCHESTRATION_SCRIPTS)) {
        if (nextScripts[name] !== command) {
            nextScripts[name] = command;
            changed = true;
        }
    }
    if (changed) {
        await writePackageJson(pkg, nextScripts);
        console.log("Scripts racine synchronisés.");
    } else {
        console.log("Scripts racine déjà à jour.");
    }
}
```

---

```ts
// SOURCE: tools/responsibilities.ts | Lines: 464-491
// KIND: FunctionDeclaration
async function main(): Promise<void> {
    try {
        const command = process.argv[2] ?? "print";
        if (command === "sync") {
            await syncCommand();
            return;
        }
        const summary = await loadSummary();
        switch (command) {
            case "print":
                await printCommand(summary);
                break;
            case "check":
                await checkCommand(summary);
                break;
            case "fix":
                await fixCommand(summary);
                break;
            default:
                console.error(`Commande inconnue: ${command}`);
                process.exitCode = 1;
        }
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(message);
        process.exitCode = 1;
    }
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 4-4
// KIND: ArrowFunction
<T>(arr: T[]) => [...new Set(arr)]
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 6-8
// KIND: FunctionDeclaration
function mergeArrays(a?: string[], b?: string[]) {
    return uniq([...(a ?? []), ...(b ?? [])]);
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 10-17
// KIND: FunctionDeclaration
function mergeKeep(a: any = {}, b: any = {}) {
    return {
        classes: mergeArrays(a.classes, b.classes),
        prefixes: mergeArrays(a.prefixes, b.prefixes),
        regex: mergeArrays(a.regex, b.regex),
        ids: mergeArrays(a.ids, b.ids),
    };
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 19-35
// KIND: FunctionDeclaration
function mergeJsonFile(filePath: string, incoming: any) {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify(incoming, null, 2));
        return;
    }
    const current = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const merged = {
        ...current,
        ...incoming,
        keep: mergeKeep(current.keep, incoming.keep),
        include: mergeArrays(current.include, incoming.include),
        exclude: mergeArrays(current.exclude, incoming.exclude),
        strictCompoundPrune:
            incoming.strictCompoundPrune ?? current.strictCompoundPrune,
    };
    fs.writeFileSync(filePath, JSON.stringify(merged, null, 2));
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 37-48
// KIND: FunctionDeclaration
function loadKeepList(projectRoot: string) {
    try {
        const p = path.join(projectRoot, "keep-list.cjs");
        if (!fs.existsSync(p))
            return { classes: [], prefixes: [], regex: [], ids: [] };
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const mod = require(p);
        return mergeKeep(mod, {});
    } catch {
        return { classes: [], prefixes: [], regex: [], ids: [] };
    }
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 50-78
// KIND: FunctionDeclaration
function extractErrorOutput(error: unknown): string {
    if (typeof error === "object" && error !== null && "stderr" in error) {
        const stderr = (error as { stderr?: unknown }).stderr;
        if (typeof stderr === "string") {
            return stderr;
        }
        if (
            stderr &&
            typeof (stderr as { toString: () => string }).toString === "function"
        ) {
            try {
                return (stderr as { toString: () => string }).toString();
            } catch {
                // ignore error when stringifying stderr
            }
        }
    }
    if (error instanceof Error) {
        return error.stack ?? error.message;
    }
    if (typeof error === "string") {
        return error;
    }
    try {
        return JSON.stringify(error);
    } catch {
        return String(error);
    }
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 80-93
// KIND: FunctionDeclaration
async function loadKeepFunctions(projectRoot: string) {
    try {
        const p = path.join(projectRoot, "keep-functions.cjs");
        if (!fs.existsSync(p))
            return { classes: [], prefixes: [], regex: [], ids: [] };
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const mod = require(p);
        const out =
            typeof mod === "function" ? await mod({ projectRoot }) : mod;
        return mergeKeep(out, {});
    } catch {
        return { classes: [], prefixes: [], regex: [], ids: [] };
    }
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 96-114
// KIND: FunctionDeclaration
function writeFileIdempotent(filePath: string, content: string) {
    const START = "/* CSS-PRUNE AUTOGEN START */";
    const END = "/* CSS-PRUNE AUTOGEN END */";
    if (!fs.existsSync(filePath)) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, content);
        return;
    }
    const prev = fs.readFileSync(filePath, "utf8");
    if (prev.includes(START) && prev.includes(END)) {
        const next = prev.replace(
            new RegExp(`${START}[\\s\\S]*?${END}`),
            `${START}\n${content}\n${END}`
        );
        fs.writeFileSync(filePath, next);
    } else {
        fs.writeFileSync(filePath, prev + `\n\n${START}\n${content}\n${END}\n`);
    }
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 124-137
// KIND: FunctionDeclaration
function parseSelectorTokens(sel: string): { classes: string[]; ids: string[] } {
    const classes = new Set<string>();
    const ids = new Set<string>();
    const classRegex = /\.([A-Za-z0-9_-]+)/g;
    const idRegex = /#([A-Za-z0-9_-]+)/g;
    let match: RegExpExecArray | null;
    while ((match = classRegex.exec(sel))) {
        classes.add(match[1]);
    }
    while ((match = idRegex.exec(sel))) {
        ids.add(match[1]);
    }
    return { classes: [...classes], ids: [...ids] };
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 188-212
// KIND: FunctionDeclaration
function parseArgs(argv: string[]): Options {
    const opts: Options = {
        apply: false,
        debug: false,
        configPath: path.join(process.cwd(), "css-prune.config.json"),
        include: [],
        exclude: [],
        keepBEMFamily: null,
        strictCompound: false,
    };
    for (let i = 2; i < argv.length; i++) {
        const a = argv[i];
        if (a === "--apply") opts.apply = true;
        else if (a === "--debug") opts.debug = true;
        else if (a === "--config") opts.configPath = path.resolve(argv[++i]);
        else if (a === "--include") opts.include = argv[++i].split(",").map((s) => s.trim());
        else if (a === "--exclude") opts.exclude = argv[++i].split(",").map((s) => s.trim());
        else if (a === "--strict-compound") opts.strictCompound = true;
        else if (a.startsWith("--keep-bem-family")) {
            const [, v] = a.split("=");
            opts.keepBEMFamily = v === undefined ? true : v !== "false";
        }
    }
    return opts;
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 203-203
// KIND: ArrowFunction
(s) => s.trim()
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 204-204
// KIND: ArrowFunction
(s) => s.trim()
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 214-231
// KIND: FunctionDeclaration
function loadConfig(opts: Options): Config {
    const fileCfg = fs.existsSync(opts.configPath)
        ? JSON.parse(fs.readFileSync(opts.configPath, "utf8"))
        : {};
    let cfg: Config = {
        ...DEFAULT_CONFIG,
        ...fileCfg,
        keep: mergeKeep(DEFAULT_CONFIG.keep, fileCfg.keep),
        include: mergeArrays(DEFAULT_CONFIG.include, fileCfg.include),
        exclude: mergeArrays(DEFAULT_CONFIG.exclude, fileCfg.exclude),
        strictCompoundPrune:
            fileCfg.strictCompoundPrune ?? DEFAULT_CONFIG.strictCompoundPrune,
    };
    if (opts.include.length) cfg.include = mergeArrays(cfg.include, opts.include);
    if (opts.exclude.length) cfg.exclude = mergeArrays(cfg.exclude, opts.exclude);
    if (opts.keepBEMFamily !== null) cfg.keepBEMFamily = opts.keepBEMFamily;
    return cfg;
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 242-247
// KIND: FunctionDeclaration
function splitClasses(str: string): string[] {
    return str
        .split(/\s+/)
        .map((s) => s.trim())
        .filter(Boolean);
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 245-245
// KIND: ArrowFunction
(s) => s.trim()
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 249-251
// KIND: FunctionDeclaration
function addClasses(res: ScanResult, classes: string[]) {
    for (const c of classes) res.usedClasses.add(c);
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 253-255
// KIND: FunctionDeclaration
function addIds(res: ScanResult, ids: string[]) {
    for (const id of ids) res.usedIds.add(id);
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 257-260
// KIND: FunctionDeclaration
function addPrefix(res: ScanResult, p: string, file: string) {
    res.dynamicPrefixes.add(p);
    res.dynamicFiles.add(file);
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 262-334
// KIND: FunctionDeclaration
function resolveExpr(
    node: any,
    file: string,
    res: ScanResult
): string[] {
    if (!node) return [];
    const t = node.type;
    if (t === "StringLiteral") {
        return splitClasses(node.value);
    }
    if (t === "TemplateLiteral") {
        const staticPart = node.quasis.map((q: any) => q.value.cooked || "").join("");
        if (node.expressions.length > 0) {
            res.dynamicFiles.add(file);
            node.quasis.forEach((q: any) => {
                const txt = q.value.cooked || "";
                const m = txt.match(/([A-Za-z0-9_-]+-)$/);
                if (m) res.dynamicPrefixes.add(m[1]);
            });
        }
        return splitClasses(staticPart);
    }
    if (t === "BinaryExpression" && node.operator === "+") {
        const left = resolveExpr(node.left, file, res);
        const right = resolveExpr(node.right, file, res);
        if (
            node.left.type === "StringLiteral" &&
            node.right.type !== "StringLiteral"
        ) {
            addPrefix(res, node.left.value, file);
        }
        if (
            node.right.type === "StringLiteral" &&
            node.left.type !== "StringLiteral"
        ) {
            addPrefix(res, node.right.value, file);
        }
        return [...left, ...right];
    }
    if (t === "ConditionalExpression") {
        return [
            ...resolveExpr(node.consequent, file, res),
            ...resolveExpr(node.alternate, file, res),
        ];
    }
    if (t === "LogicalExpression") {
        return [
            ...resolveExpr(node.left, file, res),
            ...resolveExpr(node.right, file, res),
        ];
    }
    if (t === "ArrayExpression") {
        const out: string[] = [];
        node.elements.forEach((el: any) => {
            out.push(...resolveExpr(el, file, res));
        });
        return out;
    }
    if (t === "ObjectExpression") {
        const out: string[] = [];
        node.properties.forEach((prop: any) => {
            if (prop.type === "ObjectProperty") {
                if (prop.key.type === "Identifier")
                    out.push(prop.key.name);
                else if (prop.key.type === "StringLiteral")
                    out.push(prop.key.value);
            }
        });
        return out;
    }
    res.dynamicFiles.add(file);
    return [];
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 273-273
// KIND: ArrowFunction
(q: any) => q.value.cooked || ""
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 276-280
// KIND: ArrowFunction
(q: any) => {
                const txt = q.value.cooked || "";
                const m = txt.match(/([A-Za-z0-9_-]+-)$/);
                if (m) res.dynamicPrefixes.add(m[1]);
            }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 315-317
// KIND: ArrowFunction
(el: any) => {
            out.push(...resolveExpr(el, file, res));
        }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 322-329
// KIND: ArrowFunction
(prop: any) => {
            if (prop.type === "ObjectProperty") {
                if (prop.key.type === "Identifier")
                    out.push(prop.key.name);
                else if (prop.key.type === "StringLiteral")
                    out.push(prop.key.value);
            }
        }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 336-351
// KIND: FunctionDeclaration
function resolveIdExpr(node: any, file: string, res: ScanResult): string[] {
    if (!node) return [];
    const t = node.type;
    if (t === "StringLiteral") {
        return [node.value];
    }
    if (t === "TemplateLiteral") {
        if (node.expressions.length === 0) {
            return [node.quasis.map((q: any) => q.value.cooked || "").join("")];
        }
        res.dynamicFiles.add(file);
        return [];
    }
    res.dynamicFiles.add(file);
    return [];
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 344-344
// KIND: ArrowFunction
(q: any) => q.value.cooked || ""
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 353-358
// KIND: FunctionDeclaration
function extractTokensFromSelector(str: string): {
    classes: string[];
    ids: string[];
} {
    return parseSelectorTokens(str);
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 360-369
// KIND: FunctionDeclaration
function matchRegex(cls: string, patterns: string[]): boolean {
    return patterns.some((p) => {
        try {
            const re = new RegExp(p);
            return re.test(cls);
        } catch {
            return false;
        }
    });
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 361-368
// KIND: ArrowFunction
(p) => {
        try {
            const re = new RegExp(p);
            return re.test(cls);
        } catch {
            return false;
        }
    }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 371-380
// KIND: FunctionDeclaration
function buildBEMFamilies(used: Set<string>): Set<string> {
    const fam = new Set<string>();
    for (const cls of used) {
        const [be] = cls.split("--");
        const [block, el] = be.split("__");
        fam.add(block);
        if (el) fam.add(`${block}__${el}`);
    }
    return fam;
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 382-389
// KIND: FunctionDeclaration
function inBEMFamily(candidate: string, fam: Set<string>): boolean {
    for (const base of fam) {
        if (candidate === base) return true;
        if (candidate.startsWith(`${base}__`)) return true;
        if (candidate.startsWith(`${base}--`)) return true;
    }
    return false;
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 391-540
// KIND: FunctionDeclaration
function scanFile(file: string, res: ScanResult) {
    const code = fs.readFileSync(file, "utf8");
    const rel = path.relative(process.cwd(), file);
    if (/\.(css|scss)$/.test(file)) {
        const root = postcss.parse(code, {
            from: file,
        });
        root.walkDecls(/^(animation|animation-name)$/i, (decl: any) => {
            splitClasses(decl.value.replace(/[,]/g, " ")).forEach((n) => {
                if (n && !/^(none|inherit|initial|unset)$/i.test(n))
                    res.keyframes.add(n);
            });
        });
        return;
    }
    let ast: any;
    try {
        ast = parse(code, {
            sourceType: "module",
            plugins: ["typescript", "jsx"],
        });
    } catch {
        res.dynamicFiles.add(rel);
        return;
    }
    const moduleImports = new Map<string, string>();
    traverse(ast, {
        ImportDeclaration(p: any) {
            const src = p.node.source.value;
            if (/\.module\.(css|scss)$/.test(src)) {
                const spec = p.node.specifiers.find((s: any) => s.type === "ImportDefaultSpecifier");
                if (spec) {
                    const modPath = path.resolve(path.dirname(file), src);
                    moduleImports.set(spec.local.name, path.relative(process.cwd(), modPath));
                }
            }
        },
        JSXAttribute(p: any) {
            const name = p.node.name.name;
            if (name === "className" || name === "class") {
                if (p.node.value?.type === "StringLiteral") {
                    addClasses(res, splitClasses(p.node.value.value));
                } else if (p.node.value?.type === "JSXExpressionContainer") {
                    addClasses(res, resolveExpr(p.node.value.expression, rel, res));
                }
            } else if (name === "id") {
                if (p.node.value?.type === "StringLiteral") {
                    addIds(res, [p.node.value.value]);
                } else if (p.node.value?.type === "JSXExpressionContainer") {
                    addIds(res, resolveIdExpr(p.node.value.expression, rel, res));
                }
            }
        },
        CallExpression(p: any) {
            const callee = p.node.callee;
            if (
                callee.type === "Identifier" &&
                (callee.name === "clsx" || callee.name === "classnames")
            ) {
                p.node.arguments.forEach((arg: any) => {
                    addClasses(res, resolveExpr(arg, rel, res));
                });
            }
            if (
                callee.type === "MemberExpression" &&
                callee.property.type === "Identifier"
            ) {
                const method = callee.property.name;
                if (
                    callee.object.type === "MemberExpression" &&
                    callee.object.property.type === "Identifier" &&
                    callee.object.property.name === "classList" &&
                    ["add", "remove", "toggle"].includes(method)
                ) {
                    p.node.arguments.forEach((arg: any) => {
                        addClasses(res, resolveExpr(arg, rel, res));
                    });
                }
                if (
                    ["querySelector", "querySelectorAll", "matches", "closest"].includes(method)
                ) {
                    const arg = p.node.arguments[0];
                    if (arg && arg.type === "StringLiteral") {
                        const t = extractTokensFromSelector(arg.value);
                        t.classes.forEach((c) => res.usedClasses.add(c));
                        t.ids.forEach((i) => res.usedIds.add(i));
                    } else {
                        res.dynamicFiles.add(rel);
                    }
                }
                if (
                    callee.object.type === "Identifier" &&
                    callee.object.name === "document" &&
                    method === "getElementById"
                ) {
                    const arg = p.node.arguments[0];
                    if (arg && arg.type === "StringLiteral") {
                        addIds(res, [arg.value]);
                    } else {
                        res.dynamicFiles.add(rel);
                    }
                }
            }
        },
        AssignmentExpression(p: any) {
            if (
                p.node.left.type === "MemberExpression" &&
                p.node.left.property.type === "Identifier" &&
                p.node.left.property.name === "className"
            ) {
                addClasses(res, resolveExpr(p.node.right, rel, res));
            }
        },
        ObjectProperty(p: any) {
            const key =
                p.node.key.type === "Identifier"
                    ? p.node.key.name
                    : p.node.key.type === "StringLiteral"
                    ? p.node.key.value
                    : "";
            if (key === "class" || key === "className") {
                addClasses(res, resolveExpr(p.node.value, rel, res));
            }
            if (key === "id") {
                addIds(res, resolveIdExpr(p.node.value, rel, res));
            }
            if (key === "animation" || key === "animationName") {
                const names = resolveExpr(p.node.value, rel, res);
                names.forEach((n) => res.keyframes.add(n));
            }
        },
        MemberExpression(p: any) {
            if (
                p.node.object.type === "Identifier" &&
                moduleImports.has(p.node.object.name)
            ) {
                const modPath = moduleImports.get(p.node.object.name)!;
                const set = res.cssModuleUsage.get(modPath) || new Set<string>();
                if (p.node.property.type === "Identifier") {
                    set.add(p.node.property.name);
                } else if (p.node.property.type === "StringLiteral") {
                    set.add(p.node.property.value);
                } else {
                    res.dynamicFiles.add(rel);
                }
                res.cssModuleUsage.set(modPath, set);
            }
        },
    });
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 398-403
// KIND: ArrowFunction
(decl: any) => {
            splitClasses(decl.value.replace(/[,]/g, " ")).forEach((n) => {
                if (n && !/^(none|inherit|initial|unset)$/i.test(n))
                    res.keyframes.add(n);
            });
        }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 399-402
// KIND: ArrowFunction
(n) => {
                if (n && !/^(none|inherit|initial|unset)$/i.test(n))
                    res.keyframes.add(n);
            }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 418-427
// KIND: ObjectMethod
ImportDeclaration(p: any) {
            const src = p.node.source.value;
            if (/\.module\.(css|scss)$/.test(src)) {
                const spec = p.node.specifiers.find((s: any) => s.type === "ImportDefaultSpecifier");
                if (spec) {
                    const modPath = path.resolve(path.dirname(file), src);
                    moduleImports.set(spec.local.name, path.relative(process.cwd(), modPath));
                }
            }
        }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 421-421
// KIND: ArrowFunction
(s: any) => s.type === "ImportDefaultSpecifier"
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 428-443
// KIND: ObjectMethod
JSXAttribute(p: any) {
            const name = p.node.name.name;
            if (name === "className" || name === "class") {
                if (p.node.value?.type === "StringLiteral") {
                    addClasses(res, splitClasses(p.node.value.value));
                } else if (p.node.value?.type === "JSXExpressionContainer") {
                    addClasses(res, resolveExpr(p.node.value.expression, rel, res));
                }
            } else if (name === "id") {
                if (p.node.value?.type === "StringLiteral") {
                    addIds(res, [p.node.value.value]);
                } else if (p.node.value?.type === "JSXExpressionContainer") {
                    addIds(res, resolveIdExpr(p.node.value.expression, rel, res));
                }
            }
        }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 444-494
// KIND: ObjectMethod
CallExpression(p: any) {
            const callee = p.node.callee;
            if (
                callee.type === "Identifier" &&
                (callee.name === "clsx" || callee.name === "classnames")
            ) {
                p.node.arguments.forEach((arg: any) => {
                    addClasses(res, resolveExpr(arg, rel, res));
                });
            }
            if (
                callee.type === "MemberExpression" &&
                callee.property.type === "Identifier"
            ) {
                const method = callee.property.name;
                if (
                    callee.object.type === "MemberExpression" &&
                    callee.object.property.type === "Identifier" &&
                    callee.object.property.name === "classList" &&
                    ["add", "remove", "toggle"].includes(method)
                ) {
                    p.node.arguments.forEach((arg: any) => {
                        addClasses(res, resolveExpr(arg, rel, res));
                    });
                }
                if (
                    ["querySelector", "querySelectorAll", "matches", "closest"].includes(method)
                ) {
                    const arg = p.node.arguments[0];
                    if (arg && arg.type === "StringLiteral") {
                        const t = extractTokensFromSelector(arg.value);
                        t.classes.forEach((c) => res.usedClasses.add(c));
                        t.ids.forEach((i) => res.usedIds.add(i));
                    } else {
                        res.dynamicFiles.add(rel);
                    }
                }
                if (
                    callee.object.type === "Identifier" &&
                    callee.object.name === "document" &&
                    method === "getElementById"
                ) {
                    const arg = p.node.arguments[0];
                    if (arg && arg.type === "StringLiteral") {
                        addIds(res, [arg.value]);
                    } else {
                        res.dynamicFiles.add(rel);
                    }
                }
            }
        }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 450-452
// KIND: ArrowFunction
(arg: any) => {
                    addClasses(res, resolveExpr(arg, rel, res));
                }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 465-467
// KIND: ArrowFunction
(arg: any) => {
                        addClasses(res, resolveExpr(arg, rel, res));
                    }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 475-475
// KIND: ArrowFunction
(c) => res.usedClasses.add(c)
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 476-476
// KIND: ArrowFunction
(i) => res.usedIds.add(i)
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 495-503
// KIND: ObjectMethod
AssignmentExpression(p: any) {
            if (
                p.node.left.type === "MemberExpression" &&
                p.node.left.property.type === "Identifier" &&
                p.node.left.property.name === "className"
            ) {
                addClasses(res, resolveExpr(p.node.right, rel, res));
            }
        }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 504-521
// KIND: ObjectMethod
ObjectProperty(p: any) {
            const key =
                p.node.key.type === "Identifier"
                    ? p.node.key.name
                    : p.node.key.type === "StringLiteral"
                    ? p.node.key.value
                    : "";
            if (key === "class" || key === "className") {
                addClasses(res, resolveExpr(p.node.value, rel, res));
            }
            if (key === "id") {
                addIds(res, resolveIdExpr(p.node.value, rel, res));
            }
            if (key === "animation" || key === "animationName") {
                const names = resolveExpr(p.node.value, rel, res);
                names.forEach((n) => res.keyframes.add(n));
            }
        }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 519-519
// KIND: ArrowFunction
(n) => res.keyframes.add(n)
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 522-538
// KIND: ObjectMethod
MemberExpression(p: any) {
            if (
                p.node.object.type === "Identifier" &&
                moduleImports.has(p.node.object.name)
            ) {
                const modPath = moduleImports.get(p.node.object.name)!;
                const set = res.cssModuleUsage.get(modPath) || new Set<string>();
                if (p.node.property.type === "Identifier") {
                    set.add(p.node.property.name);
                } else if (p.node.property.type === "StringLiteral") {
                    set.add(p.node.property.value);
                } else {
                    res.dynamicFiles.add(rel);
                }
                res.cssModuleUsage.set(modPath, set);
            }
        }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 542-544
// KIND: FunctionDeclaration
function isCssModule(file: string) {
    return /\.module\.(css|scss)$/.test(file);
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 546-554
// KIND: FunctionDeclaration
function isCssModuleUsed(
    file: string,
    cls: string,
    usage: Map<string, Set<string>>
): boolean {
    const set = usage.get(path.relative(process.cwd(), file));
    if (!set) return false;
    return set.has(cls);
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 556-561
// KIND: FunctionDeclaration
function analyzeSelectorWithParser(sel: string): {
    classes: string[];
    ids: string[];
} {
    return parseSelectorTokens(sel);
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 563-579
// KIND: FunctionDeclaration
function isClassKept(
    name: string,
    file: string,
    res: ScanResult,
    cfg: Config,
    fam: Set<string>
): boolean {
    return (
        res.usedClasses.has(name) ||
        cfg.keep.classes.includes(name) ||
        cfg.keep.prefixes.some((p) => name.startsWith(p)) ||
        matchRegex(name, cfg.keep.regex) ||
        [...res.dynamicPrefixes].some((p) => name.startsWith(p)) ||
        (cfg.keepBEMFamily && inBEMFamily(name, fam)) ||
        (isCssModule(file) && isCssModuleUsed(file, name, res.cssModuleUsage))
    );
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 573-573
// KIND: ArrowFunction
(p) => name.startsWith(p)
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 575-575
// KIND: ArrowFunction
(p) => name.startsWith(p)
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 581-583
// KIND: FunctionDeclaration
function isIdKept(name: string, res: ScanResult, cfg: Config): boolean {
    return res.usedIds.has(name) || (cfg.keep.ids ?? []).includes(name);
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 585-626
// KIND: FunctionDeclaration
function shouldKeepSelector(
    sel: string,
    file: string,
    res: ScanResult,
    cfg: Config,
    fam: Set<string>,
    strict: boolean
): { keep: boolean; reason: string } {
    const { classes, ids } = analyzeSelectorWithParser(sel);
    if (classes.length === 0 && ids.length === 0) {
        return { keep: true, reason: "no-class-or-id" };
    }
    if (strict) {
        for (const c of classes) {
            if (!isClassKept(c, file, res, cfg, fam)) {
                return { keep: false, reason: "unreachable-compound" };
            }
        }
        for (const id of ids) {
            if (!isIdKept(id, res, cfg)) {
                return { keep: false, reason: "unreachable-compound" };
            }
        }
        return { keep: true, reason: "used" };
    } else {
        if (classes.length > 0) {
            for (const c of classes) {
                if (isClassKept(c, file, res, cfg, fam)) {
                    return { keep: true, reason: "used" };
                }
            }
            return { keep: false, reason: "unused" };
        } else {
            for (const id of ids) {
                if (isIdKept(id, res, cfg)) {
                    return { keep: true, reason: "used" };
                }
            }
            return { keep: false, reason: "unused" };
        }
    }
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 628-684
// KIND: FunctionDeclaration
function pruneCss(
    files: string[],
    res: ScanResult,
    cfg: Config,
    apply: boolean,
    strict: boolean
) {
    const reports: Record<string, any> = {};
    const fam = cfg.keepBEMFamily ? buildBEMFamilies(res.usedClasses) : new Set<string>();
    for (const file of files) {
        const rel = path.relative(process.cwd(), file);
        const css = fs.readFileSync(file, "utf8");
        const root = postcss.parse(css, { from: file });
        const fileReport = {
            path: rel,
            selectors: [] as { selector: string; kept: boolean; reason: string }[],
            removed: 0,
            kept: 0,
            total: 0,
            skipped: false,
        };
        if (!cfg.pruneCssModules && isCssModule(file)) {
            fileReport.skipped = true;
            reports[rel] = fileReport;
            continue;
        }
        root.walkRules((rule: any) => {
            if (rule.parent && rule.parent.type === "atrule" && /keyframes/i.test((rule.parent as any).name)) return;
            const selectors = rule.selectors.slice();
            const kept: string[] = [];
            for (const sel of selectors) {
                const { keep, reason } = shouldKeepSelector(sel, file, res, cfg, fam, strict);
                fileReport.selectors.push({ selector: sel, kept: keep, reason });
                fileReport.total++;
                if (keep) {
                    fileReport.kept++;
                    kept.push(sel);
                } else {
                    fileReport.removed++;
                }
            }
            if (kept.length === 0) {
                rule.remove();
            } else if (kept.length < selectors.length) {
                rule.selectors = kept;
            }
        });
        root.walkAtRules((at: any) => {
            if ((at.name === "media" || at.name === "supports") && !at.nodes?.length) {
                at.remove();
            }
        });
        reports[rel] = fileReport;
        if (apply) fs.writeFileSync(file, root.toString());
    }
    return reports;
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 654-674
// KIND: ArrowFunction
(rule: any) => {
            if (rule.parent && rule.parent.type === "atrule" && /keyframes/i.test((rule.parent as any).name)) return;
            const selectors = rule.selectors.slice();
            const kept: string[] = [];
            for (const sel of selectors) {
                const { keep, reason } = shouldKeepSelector(sel, file, res, cfg, fam, strict);
                fileReport.selectors.push({ selector: sel, kept: keep, reason });
                fileReport.total++;
                if (keep) {
                    fileReport.kept++;
                    kept.push(sel);
                } else {
                    fileReport.removed++;
                }
            }
            if (kept.length === 0) {
                rule.remove();
            } else if (kept.length < selectors.length) {
                rule.selectors = kept;
            }
        }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 675-679
// KIND: ArrowFunction
(at: any) => {
            if ((at.name === "media" || at.name === "supports") && !at.nodes?.length) {
                at.remove();
            }
        }
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 686-708
// KIND: FunctionDeclaration
function generateReports(data: any, jsonPath: string, mdPath: string) {
    fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), "utf8");
    const lines = [
        `# Rapport CSS prune`,
        ``,
        `Total fichiers CSS: ${Object.keys(data.files).length}`,
        `Total sélecteurs supprimés: ${Object.values(data.files).reduce((a: number, f: any) => a + f.removed, 0)}`,
        ``,
        `Classes utilisées: ${data.usedClasses.length}`,
        `IDs utilisés: ${data.usedIds.length}`,
        `strictCompoundPrune: ${data.strictCompoundPrune}`,
        ``,
        `## Fichiers dynamiques (${data.dynamicFiles.length})`,
        ...data.dynamicFiles.map((f: string) => `- ${f}`),
        ``,
        `## Préfixes dynamiques (${data.dynamicPrefixes.length})`,
        ...data.dynamicPrefixes.map((p: string) => `- \`${p}\``),
        ``,
        `Voir le rapport JSON: ${jsonPath}`,
    ];
    fs.writeFileSync(mdPath, lines.join("\n"), "utf8");
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 693-693
// KIND: ArrowFunction
(a: number, f: any) => a + f.removed
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 700-700
// KIND: ArrowFunction
(f: string) => `- ${f}`
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 703-703
// KIND: ArrowFunction
(p: string) => `- \`${p}\``
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 710-791
// KIND: FunctionDeclaration
async function main() {
    const opts = parseArgs(process.argv);
    const cfg = loadConfig(opts);
    const keepList = loadKeepList(process.cwd());
    const keepFn = await loadKeepFunctions(process.cwd());
    cfg.keep = mergeKeep(cfg.keep, mergeKeep(keepList, keepFn));

    const files = await fg(cfg.include, { ignore: cfg.exclude, dot: true });

    const res: ScanResult = {
        usedClasses: new Set(cfg.keep.classes),
        usedIds: new Set(cfg.keep.ids ?? []),
        dynamicPrefixes: new Set(cfg.keep.prefixes),
        dynamicFiles: new Set<string>(),
        cssModuleUsage: new Map(),
        keyframes: new Set(),
    };

    const cssFiles: string[] = [];
    for (const file of files) {
        const abs = path.resolve(file);
        if (/\.(ts|tsx|js|jsx|mdx|html|scss|css)$/.test(file)) {
            scanFile(abs, res);
        }
        if (/\.(css|scss)$/.test(file)) cssFiles.push(abs);
    }

    const STRICT = !!(opts.strictCompound || cfg.strictCompoundPrune);

    const cssReport = pruneCss(cssFiles, res, cfg, opts.apply, STRICT);

    const timestamp = new Date();
    const stamp = timestamp.toISOString().replace(/[-:]/g, "").slice(0, 13).replace("T", "-");

    const jsonPath = path.join("reports", `css-prune-${stamp}.json`);
    const mdPath = path.join("reports", `css-prune-${stamp}.md`);

    const reportData = {
        config: cfg,
        usedClasses: [...res.usedClasses],
        usedIds: [...res.usedIds],
        dynamicPrefixes: [...res.dynamicPrefixes],
        dynamicFiles: [...res.dynamicFiles],
        keyframes: [...res.keyframes],
        strictCompoundPrune: STRICT,
        files: cssReport,
    };

    generateReports(reportData, jsonPath, mdPath);

    if (opts.debug) {
        console.log("Classes utilisées:", reportData.usedClasses);
        console.log("IDs utilisés:", reportData.usedIds);
        console.log("Préfixes dynamiques:", reportData.dynamicPrefixes);
        console.log("Fichiers dynamiques:", reportData.dynamicFiles);
    }

    if (opts.apply) {
        const branch = `chore/css-prune-${stamp.slice(0, 8)}`;
        try {
            execSync(`git checkout -b ${branch}`, { stdio: "inherit" });
        } catch {}
        try {
            execSync("yarn build", { stdio: "inherit" });
        } catch (error: unknown) {
            const output = extractErrorOutput(error);
            fs.writeFileSync(
                path.join("reports", `css-prune-error-${stamp}.log`),
                output
            );
            execSync("git reset --hard", { stdio: "inherit" });
            process.exit(1);
        }
        execSync("git add -A", { stdio: "inherit" });
        const msg =
            `chore(css): prune des sélecteurs non utilisés (outil auto)\n\n` +
            `- Rapports: ./reports/css-prune-${stamp}.md\n` +
            `- Safelists: keep-list.cjs + css-prune.config.json\n` +
            `- Garanties: build Next.js OK`;
        execSync(`git commit -m ${JSON.stringify(msg)}`, { stdio: "inherit" });
    }
}
```

---

```ts
// SOURCE: tools/scripts/css-prune.ts | Lines: 793-800
// KIND: ArrowFunction
(error: unknown) => {
    if (error instanceof Error) {
        console.error(error);
    } else {
        console.error(extractErrorOutput(error));
    }
    process.exit(1);
}
```

---

```ts
// SOURCE: tools/scripts/generate-sitemap.js | Lines: 18-18
// KIND: ArrowFunction
(link) => sitemap.write(link)
```

---

```ts
// SOURCE: tools/scripts/generate-sitemap.js | Lines: 21-23
// KIND: ArrowFunction
() => {
    console.log("✅ Sitemap généré dans /public/sitemap.xml");
}
```


"use client";

import { useEffect, useState } from "react";

const forbiddenIds = ["A", "C", "D", "E", "H", "I", "AX", "RX"];
const forbiddenIdSet = new Set(forbiddenIds);

const MAX_ERRORS = 10;

const LogoDebugChecks = () => {
    const [errors, setErrors] = useState<string[]>([]);

    useEffect(() => {
        const runChecks = () => {
            const nextErrors: string[] = [];

            const logError = (message: string) => {
                nextErrors.push(message);
            };

            const logConsoleError = (message: string, elements?: Element[]) => {
                if (elements && elements.length > 0) {
                    // eslint-disable-next-line no-console
                    console.error(message, elements);
                } else {
                    // eslint-disable-next-line no-console
                    console.error(message);
                }
            };

            forbiddenIds.forEach((id) => {
                const elements = Array.from(document.querySelectorAll(`[id="${id}"]`));
                if (elements.length > 0) {
                    const message = `R1: ID non préfixé "${id}" trouvé (${elements.length}).`;
                    logError(message);
                    logConsoleError(message, elements);
                }
            });

            const logoNodes = Array.from(
                document.querySelectorAll<HTMLElement>(".logo[data-logo-id]")
            );

            if (logoNodes.length === 0) {
                const message = "R2: Aucun logo .logo[data-logo-id] trouvé dans le DOM.";
                logError(message);
                logConsoleError(message);
            }

            logoNodes.forEach((logoNode, index) => {
                const logoId = logoNode.dataset.logoId || `logo-${index + 1}`;
                const gradient = logoNode.querySelector("linearGradient[id$='-A']");
                const filter = logoNode.querySelector("filter[id$='-H']");

                if (!gradient || !filter) {
                    const message = `R2: Définitions manquantes pour ${logoId} (gradient -A: ${Boolean(
                        gradient
                    )}, filter -H: ${Boolean(filter)}).`;
                    logError(message);
                    logConsoleError(message, [logoNode]);
                }

                const urlTargets = Array.from(
                    logoNode.querySelectorAll<HTMLElement>("[fill],[filter],[stroke]")
                );

                urlTargets.forEach((target) => {
                    ["fill", "filter", "stroke"].forEach((attr) => {
                        const value = target.getAttribute(attr);
                        if (!value || !value.includes("url(#")) {
                            return;
                        }
                        const match = value.match(/url\(#([^\)]+)\)/);
                        if (!match) {
                            return;
                        }
                        const id = match[1];
                        if (forbiddenIdSet.has(id)) {
                            const message = `R3: ${logoId} référence un ID non préfixé (#${id}) via ${attr}.`;
                            logError(message);
                            logConsoleError(message, [target]);
                        }
                    });
                });
            });

            const logoDefNodes = Array.from(
                document.querySelectorAll<HTMLElement>(
                    ".logo[data-logo-id] linearGradient[id], .logo[data-logo-id] filter[id]"
                )
            );

            const ids = logoDefNodes
                .map((node) => node.getAttribute("id"))
                .filter((id): id is string => Boolean(id));

            const seen = new Set<string>();
            const duplicates = new Set<string>();

            ids.forEach((id) => {
                if (seen.has(id)) {
                    duplicates.add(id);
                }
                seen.add(id);
            });

            if (duplicates.size > 0) {
                const dupList = Array.from(duplicates).join(", ");
                const message = `R4: IDs de gradients/filters dupliqués détectés (${dupList}).`;
                logError(message);
                logConsoleError(message);
            }

            setErrors(nextErrors.slice(0, MAX_ERRORS));
        };

        const timer = window.setTimeout(runChecks, 300);
        return () => window.clearTimeout(timer);
    }, []);

    const isPass = errors.length === 0;

    return (
        <div
            style={{
                position: "fixed",
                right: "16px",
                bottom: "16px",
                zIndex: 9999,
                padding: "12px 14px",
                borderRadius: "8px",
                backgroundColor: isPass ? "rgba(18, 118, 60, 0.95)" : "rgba(153, 27, 27, 0.95)",
                color: "#fff",
                fontFamily: "var(--Roboto, Arial, sans-serif)",
                fontSize: "13px",
                maxWidth: "320px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
            }}
        >
            <div style={{ fontWeight: 700, marginBottom: "6px" }}>
                {isPass ? "PASS" : "FAIL"} — Logo Desktop Checks
            </div>
            {!isPass && (
                <ul style={{ margin: 0, paddingLeft: "16px" }}>
                    {errors.map((error) => (
                        <li key={error} style={{ marginBottom: "4px" }}>
                            {error}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LogoDebugChecks;

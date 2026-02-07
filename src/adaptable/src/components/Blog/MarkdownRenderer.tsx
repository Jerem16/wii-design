// src/components/Blog/MarkdownRenderer.tsx
"use client";
import React from "react";

interface MarkdownRendererProps {
    children: string; // contenu Markdown passé en tant que children
}

export default function MarkdownRenderer({ children }: MarkdownRendererProps) {
    const renderMarkdown = (markdown: string) => {
        const escapeHtml = (value: string) =>
            value
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        const formatInline = (value: string) => {
            const escaped = escapeHtml(value);
            return escaped
                .replace(
                    /\[([^\]]+)\]\(([^)]+)\)/g,
                    '<a href="$2">$1</a>'
                )
                .replace(/`([^`]+)`/g, "<code>$1</code>")
                .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
                .replace(/\*([^*]+)\*/g, "<em>$1</em>");
        };
        const lines = markdown.split(/\r?\n/);
        let html = "";
        let inList = false;

        const closeList = () => {
            if (inList) {
                html += "</ul>";
                inList = false;
            }
        };

        lines.forEach((line) => {
            const trimmed = line.trim();
            if (!trimmed) {
                closeList();
                return;
            }

            if (trimmed.startsWith("- ")) {
                if (!inList) {
                    html += "<ul>";
                    inList = true;
                }
                html += `<li>${formatInline(trimmed.slice(2))}</li>`;
                return;
            }

            closeList();

            if (trimmed.startsWith("### ")) {
                html += `<h3>${formatInline(trimmed.slice(4))}</h3>`;
                return;
            }
            if (trimmed.startsWith("## ")) {
                html += `<h2>${formatInline(trimmed.slice(3))}</h2>`;
                return;
            }
            if (trimmed.startsWith("# ")) {
                html += `<h1>${formatInline(trimmed.slice(2))}</h1>`;
                return;
            }

            html += `<p>${formatInline(trimmed)}</p>`;
        });

        closeList();
        return html;
    };

    return (
        <div className="markdown-container">
            <div
                dangerouslySetInnerHTML={{ __html: renderMarkdown(children) }}
            />
        </div>
    );
}

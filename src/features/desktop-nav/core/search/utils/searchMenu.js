export default function searchQuery(jsonData, query) {
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

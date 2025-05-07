import { useEffect, useState } from "react";
export const useLazyIconData = () => {
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
};

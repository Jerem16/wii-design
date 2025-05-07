import { memo } from "react";
import dynamic from "next/dynamic";
import SvgFilter from "./SvgFilter";
import StpOf7 from "./StpOf7";
const SvgDefBG2 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <defs>
            <linearGradient id="AX" x1="0" y1="0" x2="100%" y2="100%" href="#I">
                <StpOf7 />
            </linearGradient>
            <SvgFilter id={"AX"} />
        </defs>
        <path
            id="RX"
            fill="url(#AX)"
            d="M57 0H7C3.7 0 0 3.7 0 7v50c0 3.3 3.7 7 7 7h50c3.3 0 7-3.7 7-7V7c0-3.3-3.7-7-7-7z"
        />
    </svg>
);
export default dynamic(() => Promise.resolve(memo(SvgDefBG2)));

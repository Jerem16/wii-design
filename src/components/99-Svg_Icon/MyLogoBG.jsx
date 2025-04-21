import React from "react";
import dynamic from "next/dynamic";

const MyLogoBG = () => {
    return (
        <div className="my-logo logoBG">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470">
                <defs>
                    <linearGradient
                        id="A"
                        x1="127"
                        y1="127"
                        x2="382"
                        y2="382"
                        href="#I"
                    >
                        <stop offset="0" stopColor="#ffed00" />
                        <stop offset="1" stopColor="#009fe3" />
                    </linearGradient>

                    <path
                        id="Z"
                        opacity=".5"
                        d="M235 470L0 235 235 0 470 235z"
                        className="animated-z"
                    />

                    <filter id="H">
                        <feGaussianBlur stdDeviation="3" result="A" />
                        <feMerge>
                            <feMergeNode in="A" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="I" gradientUnits="userSpaceOnUse" />
                </defs>
                <use
                    href="#Z"
                    fill="url(#A)"
                    style={{ mixBlendMode: "screen" }}
                    filter="url(#H)"
                />
            </svg>
        </div>
    );
};
export default dynamic(() => Promise.resolve(React.memo(MyLogoBG)));

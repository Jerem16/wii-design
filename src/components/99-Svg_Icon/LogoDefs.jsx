import React from "react";

const LogoDefs = ({ prefix }) => (
    <defs>
        <linearGradient
            id={`${prefix}-A`}
            x1="127"
            y1="127"
            x2="382"
            y2="382"
            href={`#${prefix}-I`}
        >
            <stop
                offset="0"
                stopColor="#ffed00"
                className="logo-stop logo-stop--a-start"
            />
            <stop
                offset="1"
                stopColor="#009fe3"
                className="logo-stop logo-stop--a-end"
            />
        </linearGradient>
        <linearGradient
            id={`${prefix}-C`}
            x1="0"
            y1="470"
            x2="470"
            y2="0"
            href={`#${prefix}-I`}
        >
            <stop
                offset="0"
                stopColor="#009640"
                className="logo-stop logo-stop--c-start"
            />
            <stop
                offset="1"
                stopColor="#312783"
                className="logo-stop logo-stop--c-end"
            />
        </linearGradient>
        <linearGradient
            id={`${prefix}-D`}
            x1="0"
            y1="0"
            x2="470"
            y2="470"
            href={`#${prefix}-I`}
        >
            <stop
                offset="0"
                stopColor="#312783"
                className="logo-stop logo-stop--d-start"
            />
            <stop
                offset="1"
                stopColor="#e30613"
                className="logo-stop logo-stop--d-end"
            />
        </linearGradient>
        <linearGradient
            id={`${prefix}-E`}
            x1="470"
            y1="0"
            x2="0"
            y2="470"
            href={`#${prefix}-I`}
        >
            <stop
                offset="0"
                stopColor="#e30613"
                className="logo-stop logo-stop--e-start"
            />
            <stop
                offset="1"
                stopColor="#009640"
                className="logo-stop logo-stop--e-end"
            />
        </linearGradient>
        <filter id={`${prefix}-H`}>
            <feGaussianBlur stdDeviation="3" result="A" />
            <feMerge>
                <feMergeNode in="A" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <linearGradient id={`${prefix}-I`} gradientUnits="userSpaceOnUse" />
    </defs>
);

export default React.memo(LogoDefs);

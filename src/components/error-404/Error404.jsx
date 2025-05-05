"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./error.scss";

function Error404() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(4);
    const num = 400 + countdown;

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            router.push("/");
        }, countdown * 1000);

        const intervalId = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1250);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [router, countdown]);

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

export default Error404;

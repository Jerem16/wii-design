"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./error.scss";
import { runDelayWorker } from "@/utils/functions/functions";
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

export default Error404;

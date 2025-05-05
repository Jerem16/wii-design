"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./error.scss";
import { runDelayWorker } from "@/utils/functions/functions";
function Error401() {
    const navigate = useNavigate();

    const [countdown, setCountdown] = useState(4);

    const num = countdown * 100 + 1;

    useEffect(() => {
        let isMounted = true;

        const countdownLoop = async () => {
            for (let i = countdown; i > 0; i--) {
                await runDelayWorker(1250);
                if (!isMounted) return;
                setCountdown(prev => prev - 1);
            }

            navigate("/login");
        };

        countdownLoop();

        return () => {
            isMounted = false;
        };
    }, [router]);
    return (
        <div className="error-401">
            <div className="borderError">
                <h1 className="error-404_h1">{num}</h1>
                <p className="error-404_p">
                    Access denied, this page requires authorization.
                    <br />
                    <br />
                    <span>Authenticate yourself.</span>
                </p>

                <p className="error-404_countdown">
                    Redirecting in {countdown} seconds...
                </p>

                <Link to="/login" className="error-404_a">
                    Return to the login page
                </Link>
            </div>
        </div>
    );
}

export default Error401;

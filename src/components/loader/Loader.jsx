import React from "react";
import dynamic from "next/dynamic";
import "./loader.css"

const Loader = () => {
    return (
        <div className="loader">
            <div className="ld-circleBG"></div>
            <div className="ld-frame">
                {/* <img src="/img/retroviseur.svg" alt="loader" />{" "} */}
                <span className="ld-dot2"></span>
                <span className="ld-dot1"></span>
                <span className="ld-dot"></span>
            </div>{" "}
            <p>
                Cette section n’est pas encore disponible. Merci de votre
                patience
            </p>
        </div>
    );
};

export default dynamic(() => Promise.resolve(React.memo(Loader)));

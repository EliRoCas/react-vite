import React from "react";
import "./EngineersView.css";

function EngineersView({ engi }) {
    return (
        <div className="engineerViews">
            <h2>{engi.nname}</h2>
            <h3>{engi.ndegree}</h3>
            <p>{engi.ndescription}</p>
            <img src={engi.image} alt={engi.image + "image"} />
        </div>
    )
}

export default EngineersView; 
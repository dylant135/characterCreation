import React from "react";

export default function Character(props) {
    return (
        <div className="character">
            <h2>{props.title}</h2>
            <h2>{props.type}</h2>
        </div>
    )
}
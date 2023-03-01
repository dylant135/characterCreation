import React from "react";
import Character from "./Character";

export default function Characters(props) {
    const listCharacters = props.characters.map(c => {
        return (
            <Character
                title={c.title}
                type={c.type}
                key={c.title}
            />
        )
    })
    return (
        <div className="characters">
            <h2>Character</h2>
            {listCharacters}
        </div>
    )
}
import React from "react";
import Character from "./Character";

export default function Characters(props) {
    const listCharacters = props.characters.map(c => {
        return (
            <Character
                title={c.title}
                type={c.type}
                speed={c.speed}
                strength={c.strength}
                health={c.health}
                intelligence={c.intelligence}
                key={c.title}
            />
        )
    })
    return (
        <div>
            <h2>Characters</h2>
            <div className="characters">
                {listCharacters}
            </div>
        </div>
    )
}
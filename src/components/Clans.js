/* eslint-disable default-case */
import React, { useEffect, useState } from "react";

export default function Clans(props) {
    const [fire, setFire] = useState([])
    const [water, setWater] = useState([])
    const [earth, setEarth] = useState([])
    const [air, setAir] = useState([])

    console.log(fire, water, earth, air)

    useEffect(() => {
       const findFire = props.characters.filter(f => f.type === 'fire')
       if(findFire.length >= 0) {
        setFire(findFire)
       } 

       const findWater = props.characters.filter(f => f.type === 'water')
       if(findWater.length >= 0) {
        setWater(findWater)
       } 

       const findEarth = props.characters.filter(f => f.type === 'earth')
       if(findEarth.length >= 0) {
        setEarth(findEarth)
       } 

       const findAir = props.characters.filter(f => f.type === 'air')
       if(findAir.length >= 0) {
        setAir(findAir)
       } 

    }, [props.characters])

    return (
        <div>
            <h2>Clans</h2>
            <div className="clans">
                <div className="fire">
                    <h5>Fire Clan</h5>
                    <p>Members: {fire.length}</p>
                </div>

                <div className="water">
                    <h5>Water Clan</h5>
                    <p>Members: {water.length}</p>
                </div>

                <div className="earth">
                    <h5>Earth Clan</h5>
                    <p>Members: {earth.length}</p>
                </div>

                <div className="air">
                    <h5>Air Clan</h5>
                    <p>Members: {air.length}</p>
                </div>
            </div>
        </div>
    )
}
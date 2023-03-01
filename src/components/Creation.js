import React, { useRef, useState } from "react";

export default function Creation(props) {
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        speed: 0,
        strength: 0
    })
    const [points, setPoints] = useState(100)
    const speed = useRef(formData.speed)


    console.log(speed)
    function handleChange(event) {
        setFormData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleStatChange(event) {
        setFormData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
        if(event.target.value > speed.current) {
            //decrease
            const num = event.target.value - speed.current
            setPoints(prevState => prevState -= num)
            speed.current = event.target.value
        } else if(event.target.value < speed.current) {
            //increase
            const num = speed.current - event.target.value 
            setPoints(prevState => prevState += num)
            speed.current = event.target.value
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.setCharacter(prevState => {
            return [
                ...prevState,
                formData
            ]
        })
        setFormData({
            title: '',
            type: '',
            speed: 0,
            strength: 0
        })
    }

    return (
        <div className="creation">
            <h2>Character Creation</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Name"
                    type='text'
                    onChange={handleChange}
                    value={formData.title}
                    name='title'
                />
                <select
                    name="type"
                    onChange={handleChange}
                    value={formData.type}
                >
                    <option className="center" value=''>-- Choose --</option>
                    <option value='fire'>Fire</option>
                    <option value='earth'>Earth</option>
                    <option value='air'>Air</option>
                    <option value='water'>Water</option>
                </select>
                <h3>Points: {points}</h3>
                <input 
                    type='number'
                    name="speed"
                    value={formData.speed}
                    onChange={handleStatChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
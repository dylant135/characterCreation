import React, { useState } from "react";

export default function Creation(props) {
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        speed: 0,
        strength: 0
    })


    function handleChange(event) {
        setFormData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
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
            <h2>Creation</h2>
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

                <button>Submit</button>
            </form>
        </div>
    )
}
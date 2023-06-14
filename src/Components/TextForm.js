import React, { useState } from 'react'

export default function TextForm(pass) {
    const handleUpClick = () => {
        console.log("Up Clicked");
        let upText=text.toUpperCase();
        setText(upText);
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');
    return (
        <>
            <h1> {pass.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                <button className="btn btn-primary my-3" onClick={handleUpClick} >Convert to UpperCase</button>
            </div>
        </>
    )
}
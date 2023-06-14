import React, { useState } from 'react'

export default function TextForm(pass) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopyText = (e) => {
        setText(e.target.value);
    }

    const copyToClipboard = () => {
        copy(copyText);
        alert(`You have copied "${copyText}"`);
    }


    // onChange is mandatory to type in TextArea else throw Js error
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h1> {pass.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} placeholder='Enter Text Here' id="myBox" rows="6"></textarea>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleLowClick} >Convert to LowerCase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleClearText} >Clear Text</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleCopyText} >Copy Text</button>
                </div>
            </div>
            <div className="container my-2">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
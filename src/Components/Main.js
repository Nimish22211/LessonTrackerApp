import React, { useState } from 'react'
import './Main.css';
function Main({ inputVal }) {
    const [input, setInput] = useState('');
    const onInputChange = (e) => {
        setInput(e.target.value)
    }
    const submit = (event) => {
        event.preventDefault();
        inputVal(input);
        setInput("");
    }
    return (
        <div className="main">
            <h1>ADD A NEW SUBJECT </h1>
            <div >
                <form>
                    <input type="text" value={input} onChange={onInputChange} />
                    <button onClick={submit} type="submit" id="main-button">+</button>
                </form>

            </div>
        </div>
    )
}

export default Main

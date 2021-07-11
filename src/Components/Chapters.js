import React from 'react'
import './Chapter.css'

function Chapters({ name, subject, title }) {
    return (
        <div className="chapters-flex chapter-box">
            <div > {name}</div>
        </div>
    )
}

export default Chapters
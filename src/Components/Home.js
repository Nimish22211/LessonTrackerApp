import React from 'react'

function Home({ title, subject, home }) {
    return (
        <div>
            {subject === title &&
                <div >
                    <div> {home == "DONE" ? <strong> {home}</strong> : home} </div>
                </div>
            }
        </div>
    )
}

export default Home

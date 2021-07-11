import React from 'react'
// import DoneIcon from '@material-ui/icons/Done';
// import CloseIcon from '@material-ui/icons/Close';

function Doneclass({ title, subject, record }) {
    return (
        <div >
            {subject === title &&
                <div >
                    <div> {record == "DONE" ? <strong>{record}</strong> : record} </div>

                </div>
            }
        </div>
    )
}

export default Doneclass

import React, { useState, useEffect } from 'react'
import './Subject.css';
import Chapters from './Chapters';
import DeleteIcon from '@material-ui/icons/Delete';
import Doneclass from './Doneclass';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import Home from './Home';

function Subject({ title, id, subjects, chapters, setChapters }) {
    const [chapInput, setChapInput] = useState('');
    const [subVal, setSubVal] = useState(title);
    const onChangeInput = (e) => {
        var length = e.target.value;
        if (length.length >= 37) {
            setChapInput('max limit')
        } else {
            setChapInput(e.target.value)
        }
    }
    const onChapSubmit = (e) => {
        e.preventDefault();
        if (chapInput === "") {
            setChapters([...chapters])
        } else {
            setChapters([...chapters, { chapter: chapInput, subject: subVal, index: id, class: 'done or not?', home: "done or not?" }]);
            setChapInput('')
        }
        console.log(chapters)

    }
    const delchapters = (id) => {
        setChapters((chapter) => {
            return chapter.filter((item, index) => {
                return index !== id
            })
        })
    }
    const delAll = () => {
        setChapters((chapter) => {
            return chapter.filter((item) => {
                return item.subject !== subVal
            })
        })
    }
    const onDone = (id) => {
        setChapters([chapters[id].class = "DONE", ...chapters]);
        setChapters(chapters.filter(item => {
            return typeof item !== Object
        }))
    }
    const onDoneHome = (id) => {
        setChapters([chapters[id].home = "DONE", ...chapters]);
        setChapters(chapters.filter(item => {
            return item !== Object
        }))
    }
    const onClear = (id) => {
        setChapters([chapters[id].class = "NOT DONE", ...chapters]);
        setChapters(chapters.filter(item => {
            return typeof item !== Object
        }))
    }
    const onClearHome = (id) => {
        setChapters([chapters[id].home = "NOT DONE", ...chapters]);
        setChapters(chapters.filter(item => {
            return typeof item !== Object
        }))
    }


    const displayClass = () => {
        document.getElementsByClassName('class')[0].style.display = "block";
        document.getElementsByClassName('total')[0].style.display = "block";
        document.getElementsByClassName('home')[0].style.display = "none";

    }
    const displayHome = () => {
        document.getElementsByClassName('class')[0].style.display = "none";
        document.getElementsByClassName('total')[0].style.display = "block";
        document.getElementsByClassName('home')[0].style.display = "block";
    }
    return (
        <div >
            <div className="align-center">
                <h2>Add a Lesson </h2>
                <form className="subjects-flex">
                    <input type="text" className="subjects-input" value={chapInput} onChange={onChangeInput} />
                    <button onClick={onChapSubmit} type="submit" id="sub-button">+</button>
                    <select className="subjects-select" defaultValue={title} value={subVal} disabled >
                        {subjects.map(subject => <option value={subject}>{subject}</option>)}
                    </select>
                </form>
            </div>
            <div className="align-center">
                <h1>{title}</h1>
            </div>
            <div id="togSection" className="mobBtn">
                <button onClick={displayClass} className="totalBtn">Class</button>
                <button onClick={displayHome} className="totalBtn">Home</button>
            </div>
            <div className="subject-container">
                <div className="total">
                    <h3>total lessons</h3>
                    <button className="delAll" onClick={delAll}>Delete all</button>
                    <ol className="chapters">
                        {Object.keys(chapters).map((key, index) =>
                            <li className="chapter-align">
                                {chapters[key].subject === title && <Chapters name={chapters[key].chapter} subject={chapters[key].subject} title={title} index={index} />}
                                {chapters[key].subject === title && <DeleteIcon id="MuiIcon-fontSizeLarge" className="chapter-delete" onClick={() => { delchapters(index) }} />}
                            </li>
                        )}
                    </ol>
                </div>
                <div className="class"><h3>Lessons done in the class</h3>
                    <div className="class-record">
                        {Object.keys(chapters).map((key, index) =>
                            <div className="record-box">
                                <Doneclass index={index} record={chapters[key].class} subject={chapters[key].subject} title={title} />
                                {chapters[key].subject === title && <div className="record-icons">
                                    <div className="done" onClick={() => { onDone(index) }}> <DoneIcon id="MuiIcon-fontSizeLarge" /></div>
                                    <div className="clear" onClick={() => { onClear(index) }}><CloseIcon id="MuiIcon-fontSizeLarge" /></div>
                                </div>}
                            </div>
                        )}
                    </div>
                </div>
                <div className="home"><h3>Lessons done at home</h3>
                    <div className="class-record">
                        {Object.keys(chapters).map((key, index) =>
                            <div className="record-box">
                                <Home index={index} subject={chapters[key].subject} title={title} home={chapters[key].home} />
                                {chapters[key].subject === title && <div className="record-icons">
                                    <div className="done" onClick={() => { onDoneHome(index) }}> <DoneIcon id="MuiIcon-fontSizeLarge" /></div>
                                    <div className="clear" onClick={() => { onClearHome(index) }}><CloseIcon id="MuiIcon-fontSizeLarge" /></div>
                                </div>}
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Subject

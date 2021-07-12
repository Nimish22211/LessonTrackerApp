import { BrowserRouter, Route, Link } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import Main from "./Main";
import Subject from "./Subject";
import DeleteIcon from '@material-ui/icons/Delete';
import Rotate90DegreesCcwIcon from '@material-ui/icons/Rotate90DegreesCcw';
import CloseIcon from '@material-ui/icons/Close';

const getChapters = () => {
    let chapter = localStorage.getItem('chapters');
    if (chapter) {
        return JSON.parse(localStorage.getItem('chapters'))
    } else {
        return []
    }
}

function Header({ navSub, mainInput, Subjects }) {
    const [chapters, setChapters] = useState(getChapters());
    var setSubjects = Subjects;
    const sideBar = () => {
        document.getElementById('nav').classList.toggle('toggle');
    }
    const onDelete = (id) => {
        setSubjects((subjects) => {
            return subjects.filter((arrItem, index) => {
                return index !== id
            })
        }
        )
        setChapters((chapters) => {
            return chapters.filter((arrItem) => {
                return arrItem.index !== id
            })
        })
    };

    useEffect(() => {
        document.getElementById('nav').classList.add("toggle");
    }, [navSub]);
    useEffect(() => {
        localStorage.setItem('chapters', JSON.stringify(chapters));
    }, [chapters]);
const closeBox = () => {
        document.getElementsByClassName('mobileBox')[0].style.display = "none";
    }
    return (
        <div >
            <BrowserRouter>
                <div className="header">
                    <div className="menuIcon" onClick={sideBar} >
                        <MenuIcon id="MuiIcon-fontSizeLarge" />
                    </div>
                    <div className="title">
                        <Link to="/"> Lesson Tracker</Link>
                    </div>
                </div>

                <div id="nav" className="side-nav">
                    <div className="add-sub">
                        <Link to="/">Add A NEW SUBJECT</Link>
                    </div>
                    <div className="subjects" >
                        SUBJECTS
                    </div>
                    <div class="subjectsList">
                        {navSub.map((subject, index) => <li className="nav-sub " id={index}><Link to={`/${subject}`}>{subject}</Link>
                            <DeleteIcon id="MuiIcon-fontSizeLarge" onClick={() => onDelete(index)} />
                        </li>)}
                    </div>
                </div>
<div className="mobileBox">
                    <CloseIcon fontSize="large" onClick={closeBox} />
                    <div className="mobile-center">
                        <div className="mobile-flex"><Rotate90DegreesCcwIcon fontSize="large" />
                            Please rotate your Phone for better experience</div></div>
                </div>
                <Route path="/" exact>
                    <Main inputVal={mainInput} />
                </Route>
                {navSub.map((subject, index) => (
                    <Route path={`/${subject}`} >
                        <Subject id={index} title={subject} subjects={navSub} chapters={chapters} setChapters={setChapters} />
                    </Route>)
                )}
            </BrowserRouter>
        </div>
    )
}

export default Header

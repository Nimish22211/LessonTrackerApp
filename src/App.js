import { BrowserRouter } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import Header from "./Components/Header"
// import Main from './Components/Main'
// import About from "./Components/About"
const getData = () => {
  let data = localStorage.getItem('subjects');
  if (data) {
    return JSON.parse(localStorage.getItem('subjects'));
  } else {
    return []
  }
}
function App() {
  const [subjects, setSubjects] = useState(getData());
  const getInput = (val) => {
    if (val === "") {
      setSubjects([...subjects])
    } else {
      setSubjects([...subjects, val])
    }
  }
  useEffect(() => {
    localStorage.setItem('subjects', JSON.stringify(subjects));
  }, [subjects])
  return (
    <BrowserRouter>
      <Header navSub={subjects} Subjects={setSubjects} mainInput={getInput} />
      {/* <Route path="/about" component={About} /> */}
    </BrowserRouter>
  )
}

export default App

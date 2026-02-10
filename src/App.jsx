import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import InfoCard from './components/InfoCards'

import studentsData from "./students.json";
import StudentCard from './components/StudentCard'

function App() {

  return (
    <>
    <Header/>
    <InfoCard/>
    {studentsData.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </>
  )
}

export default App

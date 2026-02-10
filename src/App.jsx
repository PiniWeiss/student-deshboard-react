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
    <main>
    {studentsData.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}</main>
    </>
  )
}

export default App

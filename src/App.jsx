import "./App.css";
import Header from "./components/Header";
import InfoCard from "./components/InfoCards";

import studentsData from "./students.json";
import StudentCard from "./components/StudentCard";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState('total')

  
  function filterStudent(studentsData){
    if(filter === 'total') return studentsData;
    if(filter === "online") return studentsData.filter(student => student.isOnline)
      return studentsData.filter(student => student.grade >= 90)
  }
  
  const students  = filterStudent(studentsData)


  return (
    <>
      <Header />
      <InfoCard setFilter={setFilter} />
      <main>
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </main>
    </>
  );
}

export default App;

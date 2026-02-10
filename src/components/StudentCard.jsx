import React from 'react'
import './StudentCard.css'


function StudentCard({student}) {
    let n = student.isOnline 
    console.log(n);
    
  return (
    <div className='student-card'>
        <div className='top-card'>
            <h2>{student.name}</h2>
            <h3>{student.isOnline ? "online": "offline"}</h3>
        </div>
        <hr />
        <div className='main-content'>
           <div className='Age-area'> <h2>Age: {student.age}</h2></div>
           <div className='grade-area'> <h2>Grade: {student.grade}%</h2> <code> {student.grade>=60 ? "PASS": "FAIL"}</code> </div>
        </div>
        <hr />
        <h2>{student.grade>=90 ? "★ Honor Roll": ""}</h2>
      <div className='bottom-content'>
        <p>Subjects:</p>
        
      </div>
    </div>
  )
}

export default StudentCard

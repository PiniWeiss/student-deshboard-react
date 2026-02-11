
import "./InfoCards.css";
import studentsData from "../students.json";
import { useState } from "react";

function InfoCard({setFilter}) {
  
  const [students, setStudents] = useState(studentsData)
  
  return (
    <div className="info-area">
      <button className="info-card" id="total-s" onClick={() => setFilter("total")}>
        <h2>{students.length}</h2>
        <p>TOTAL STUDENTS</p>
      </button>
      <button className="info-card" id="online-s" onClick={() => setFilter("online")}>
        <h2>{students.filter(students => students.isOnline).length}</h2>
        <p>ONLINE NOW</p>
      </button>
      <button className="info-card" id="honor-s" onClick={() => setFilter("honor")}>
        <h2>{students.filter(students => students.grade >= 90).length}</h2>
        <p>HONOR ROLL</p>
      </button>
      <button className="info-card" id="avg-grade">
        <h2>{(students.reduce((acc, current) => acc+current.grade, 0)/students.length).toFixed(2)}%</h2>
        <p>AVG. GRADE</p>
      </button>
    </div>
  );
}

export default InfoCard;

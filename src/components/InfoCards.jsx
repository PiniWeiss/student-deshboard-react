import React from "react";
import "./InfoCards.css";
import studentsData from "../students.json";

function InfoCard() {
  const students = studentsData;

  return (
    <div className="info-area">
      <div className="info-card" id="total-s">
        <h2>{students.length}</h2>
        <p>TOTAL STUDENTS</p>
      </div>
      <div className="info-card" id="online-s">
        <h2>{students.filter(students => students.isOnline).length}</h2>
        <p>ONLINE NOW</p>
      </div>
      <div className="info-card" id="honor-s">
        <h2>{students.filter(students => students.grade >= 90).length}</h2>
        <p>HONOR ROLL</p>
      </div>
      <div className="info-card" id="avg-grade">
        <h2>{(students.reduce((acc, current) => acc+current.grade, 0)/students.length).toFixed(2)}%</h2>
        <p>AVG. GRADE</p>
      </div>
    </div>
  );
}

export default InfoCard;

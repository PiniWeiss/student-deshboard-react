
import { useState } from "react";
import "./StudentCard.css";
import Subjects from "./subjects";

function StudentCard({ student, setOnline }) {
  const {subjects} =student
  const passTest = student.grade >= 60 ? "PASS" : "FAIL"
  const honorRoll = student.grade >= 90 ? "★ Honor Roll" : ""
  
  


  return (
    <div className="student-card">
      <div className="top-card">
        <h2>{student.name}</h2>
        <button className="online-btn " onClick={setOnline} >{student.isOnline? "online": "offline"}</button>
      </div>
      <hr />
      <div className="main-content">
        <div className="Age-area">
          <h2>Age: {student.age}</h2>
        </div>
        <div className="grade-area">
          <h2>Grade: {student.grade}%</h2>
          <code> {passTest}</code>
        </div>
      </div>
      <h2 className="honor">{honorRoll}</h2>
      <hr />
      <div className="bottom-content">
        <p>Subjects:</p>
        <div className="all-subjects">
        {subjects.map((subject, index) => (
          <Subjects key={index} subject={subject} />
        ))}</div>
      </div>
    </div>
  );
}

export default StudentCard;

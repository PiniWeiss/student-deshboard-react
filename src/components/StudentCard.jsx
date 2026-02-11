
import "./StudentCard.css";
import Subjects from "./subjects";

function StudentCard({ student }) {
  const {subjects} =student
  const isOnline = student.isOnline ? "online" : "offline"
  const passREst = student.grade >= 60 ? "PASS" : "FAIL"
  const honorRoll = student.grade >= 90 ? "★ Honor Roll" : ""
  return (
    <div className="student-card">
      <div className="top-card">
        <h2>{student.name}</h2>
        <h3>{isOnline}</h3>
      </div>
      <hr />
      <div className="main-content">
        <div className="Age-area">
          <h2>Age: {student.age}</h2>
        </div>
        <div className="grade-area">
          <h2>Grade: {student.grade}%</h2>
          <code> {passREst}</code>
        </div>
      </div>
      <hr />
      <h2>{honorRoll}</h2>
      <div className="bottom-content">
        <p>Subjects:</p>
        {subjects.map((subject, index) => (
          <Subjects key={index} subject={subject} />
        ))}
      </div>
    </div>
  );
}

export default StudentCard;

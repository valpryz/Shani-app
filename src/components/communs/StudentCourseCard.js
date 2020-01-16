import React from "react";
import africanwomenwalking from './assets/images/africanwomenwalking.jpg'

class StudentCourseCard extends React.Component {
  render() {
    return <div className="student-course-card">
  <img src={africanwomenwalking} alt='magical' />
  <div className="texte">
    <h2>bataillon des entrepreneurs panafricains</h2>
    <p>Demarre le 24 sept.2018</p>
    <button>reprendre</button>
  </div>
    </div>;
  }

}

export default StudentCourseCard;
import React from "react";
import profile from './assets/images/Ebenezer_ofori.png'

class StudentProfileCard extends React.Component {
  render() {
    return (
        <div className="student-profile-card">
            <img src={profile} alt='jemen' />
            <p>Jean Ofori Ekamen</p>
            <p className="email">jean.ofori@gmail.com</p>
            <button>commencer</button>
        </div>
    )
  }

}

export default StudentProfileCard;
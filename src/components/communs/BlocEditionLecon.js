import React from 'react'
import BoutonsSpeciaux from './BoutonsSpeciaux'
import africanwomenwalking from './assets/images/africanwomenwalking.jpg'

class BlocEditionLecon extends React.Component {
    render(){
        return (
            <div className='bloc-edition-lecon'>
              <h4>resume de la lecon</h4>
              <textarea name="resume-teacher" id="resume-teacher" />
              <div className="image-top">
                <img src={africanwomenwalking} alt='puise eau' />
                <p><span>image/video a la une</span> this is the first image attendees will see at the top of your listing. Use a high quality image: 1280x720px (16:9 ratio).</p>
                <button>Ajouter Image</button>
              </div>
              <div className="composants" />
              
              <BoutonsSpeciaux />
              <h4>ressources de la lecon</h4>
            </div>
        )
    }
}

export default BlocEditionLecon;
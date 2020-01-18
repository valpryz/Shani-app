import React from "react";
import texte from './assets/icon/editor/title_24px_outlined.svg'
import media from './assets/icon/editor/insert_photo_24px_outlined.svg'
import quiz from './assets/icon/editor/format_list_bulleted_24px_outlined.svg'

class BoutonsSpeciaux extends React.Component {
  render() {
    return (
      <div className="boutons-speciaux">
  <button><i><img src={texte} alt='texte' /></i>Ajouter texte</button>
  <button><i><img src={media} alt='media' /></i>Ajouter media</button>
  <button><i><img src={quiz} alt='quiz' /></i>Ajouter quiz</button>
    </div>
    )
  }

}

export default BoutonsSpeciaux;
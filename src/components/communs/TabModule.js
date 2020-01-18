import React from 'react'
import ModuleLeconCreation from './ModuleLeconCreation'


class TabModule extends React.Component {
    render(){
        return (
            <div className="module-creation">
              <input type="text" name="titre" id="titre" placeholder="Initiation a l'entreprenariat" />
              <h4>resume du module</h4>
              <textarea name="resume" id="resume" cols={30} rows={10} defaultValue={"Learn inbound marketing techniques that range from content creation to social promotion to converting and nurturing leads and beyond. By the end of this certification course, you'll be well on your way to building your inbound marketing strategy."} />
              <h4>lecons</h4>
              <button className='button-square'>+</button>
              <ModuleLeconCreation />
              
            </div>
        )
    }
}

export default TabModule
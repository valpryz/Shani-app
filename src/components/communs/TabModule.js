import React from 'react'
import ModuleLeconCreation from './ModuleLeconCreation'


class TabModule extends React.Component {
    render(){
        return (
            <div className="module-creation">
              <input type="text" name="titre" id="titre" placeholder="Initiation a l'entreprenariat" />
              <h4>résumé du module</h4>
              <textarea name="resume" id="resume" cols={30} rows={10}  />
            </div>
        )
    }
}

export default TabModule
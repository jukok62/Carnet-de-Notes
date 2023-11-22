import React from 'react';
import "../../Styles/component.css"

const NoteComponent = ({note}) => {

    const handleClick = () => {
        
      };

    return <>    

    <div class="card-container">
        <div class="card">
            <div class="front-content">
                <p>{note.titre_note}</p>
        </div>
        <div class="content">
            <p class="heading">{note.categorie}</p>
            <p>
            {note.contenu_note}
            </p>
        </div>
        <p><button class="btn-suppr" onMouseOver={handleClick}>Supprimer</button></p>
    </div>
</div>


    </>;
}
 
export default NoteComponent;
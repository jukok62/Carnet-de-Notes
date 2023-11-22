import React, {useState} from 'react'
import '../../Styles/note.css'
import {Link} from 'react-router-dom'

const NoteComponent2 = ({note}) => {
  


    return <>
       
       <div class="card-wrap">
  <div class="card-header one">
    <p>{note.categorie}</p>
  </div>
  <div class="card-content">
    <h1 class="card-title">{note.titre_note}</h1>
    <p class="card-text">{note.contenu_note}</p>
    <Link to={"/Creation"}><button class="card-btn one">supprimer</button></Link>
 </div>
</div>

        
    </>;
}
 
export default NoteComponent2;
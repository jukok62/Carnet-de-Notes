import React, {useState} from 'react'
import '../../Styles/note.css'
import noteService from '../../Services/noteService'
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'
const NoteComponentById = ({note}) => {

    const handleDelete = async  (e) =>{
        try {
            const response = await noteService.DeleteNote(note.id_note)
            toast.success("le post-it" + note.titre_note + "a bien été supprimé")
        } catch (e) {
            console.log(e)
        }
    }
    return <>
            <div class="card-wrap">
  <div class="card-header one">
    <p>{note.categorie}</p>
  </div>
  <div class="card-content">
    <h1 class="card-title">{note.titre_note}</h1>
    <p class="card-text">{note.contenu_note}</p>
    <Link to={'/note/'+ note.id_user}><button class="card-btn one" onClick={handleDelete}>supprimer</button></Link>
 </div>
</div>
    </>;
}
 
export default NoteComponentById;
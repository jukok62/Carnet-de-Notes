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
            <div className="card-wrap">
  <div className="card-header one" style={{backgroundColor:note.couleur}}>
    <p>{note.categorie}</p>
  </div>
  <div className="card-content">
    <h1 className="card-title">{note.titre_note}</h1>
    <p className="card-text">{note.contenu_note}</p>
    <Link to={'/note/'+ note.id_user}><button className="card-btn one" style={{backgroundColor:note.couleur}} onClick={handleDelete}>supprimer</button></Link>
 </div>
</div>
    </>;
}
 
export default NoteComponentById;
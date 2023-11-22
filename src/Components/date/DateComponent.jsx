import React from 'react'
import '../../Styles/note.css'
import {Link} from 'react-router-dom'
import noteService from '../../Services/noteService'
import { toast } from 'react-toastify';

const DateComponent = ({date}) => {

    const handleDelete = async  (e) =>{
        try {
            const response = await noteService.DeleteNote(date.id_note)
            toast.success("le post-it" + date.titre_note + "a bien été supprimé")
        } catch (e) {
            console.log(e)
        }
    }

    return <>
              <div class="card-wrap">
  <div class="card-header one">
    <p>{date.categorie}</p>
  </div>
  <div class="card-content">
    <h1 class="card-title">{date.titre_note}</h1>
    <p class="card-text">{date.contenu_note}</p>
    <Link to={'/note/'+ date.id_user}><button class="card-btn one" onClick={handleDelete}>supprimer</button></Link>
 </div>
</div>

    </>;
}
 
export default DateComponent;
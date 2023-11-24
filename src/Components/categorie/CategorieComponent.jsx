import React from 'react'
import '../../Styles/note.css'
import {Link} from 'react-router-dom'
import noteService from '../../Services/noteService'
import { toast } from 'react-toastify';

const CategorieComponent = ({categ}) => {

    const handleDelete = async  (e) =>{
        try {
            const response = await noteService.DeleteNote(categ.id_note)
            toast.success("le post-it" + categ.titre_note + "a bien été supprimé")
        } catch (e) {
            console.log(e)
        }
    }

    return <>
              <div class="card-wrap">
  <div class="card-header one" style={{backgroundColor:categ.couleur}}>
    <p>{categ.categorie}</p>
  </div>
  <div class="card-content">
    <h1 class="card-title">{categ.titre_note}</h1>
    <p class="card-text">{categ.contenu_note}</p>
    <Link to={'/note/'+ categ.id_user}><button class="card-btn one" style={{backgroundColor:categ.couleur}} onClick={handleDelete}>supprimer</button></Link>
 </div>
</div>

    </>;
}
 
export default CategorieComponent;
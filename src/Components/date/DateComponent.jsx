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

    const dateString = date.date_creation;

    // Créez un objet Date à partir de la chaîne
    const dateObject = new Date(dateString);
    
    // Obtenez le jour, le mois et l'année
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1; // Notez que les mois dans JavaScript commencent à 0, donc ajoutez 1
    const year = dateObject.getFullYear();
    
    // Formattez la date au format "jj/mm/a"
    const formattedDate = `${day}/${month}/${year}`; 

    return <>
              <div class="card-wrap">
  <div class="card-header one" style={{backgroundColor:date.couleur}}>
    <p>{date.categorie}</p>
  </div>
  <div class="card-content">
    <h1 class="card-title">{date.titre_note}</h1>
    <p class="card-text">{date.contenu_note}</p>
    <p class="card-text">{formattedDate}</p>
    <Link to={'/note/'+ date.id_user}><button class="card-btn one" style={{backgroundColor:date.couleur}} onClick={handleDelete}>supprimer</button></Link>
 </div>
</div>

    </>;
}
 
export default DateComponent;
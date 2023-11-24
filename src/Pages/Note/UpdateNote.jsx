import React, {useContext, useEffect, useState} from 'react';
import noteService from '../../Services/noteService'
import "../../Styles/Creationpage.css"
import { toast } from 'react-toastify';
import GlobalContext from '../../context/GlobalContext';
import { useParams } from 'react-router-dom';


const UpdateNote = () => {

    const {userId} = useContext(GlobalContext)
    const {noteId} = useParams()   
    const [update, setUpdate] = useState({
       
        titre : '',
        contenu : '',
        categorie : '',
        color :'',
        date : '',
        id_user : userId,
    });

    const handleChange = (e) => {
        const {name , value} = e.currentTarget;
        setUpdate ({...update, [name] : value})
        console.log(update)
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
          console.log(update);
           const response = await noteService.updateNote(update)
           toast.success("Le Post-It "+ update.titre + " à bien été crée");
        } catch (e) {
         console.log(e)   
        }
        console.log(update)
    }

    const fetchNoteById = async () => {
        try {
            const response = await noteService.getNoteByIdBis(noteId)
            console.log(response.data)
            setUpdate(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect (() => {
        fetchNoteById()
    },[])

    

  return <>

    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

        <div class="conteneur-formulaire ">
          <form action="#" id='form-connexion'>
            <h1>Modification</h1>
            
            <input name="id_user" type="hidden" value={update.id_user} id="id_user" onChange={handleChange}/>
            <div className='form-interne'>
            <input type="text" placeholder="Votre Titre" name='titre_note'  value={update.titre_note} onChange={handleChange} />
            <input type="text" placeholder="Votre Categorie" name='categorie' value={update.categorie} onChange={handleChange} />
            </div>
            <textarea name="contenu_note" rows={100} placeholder="Entrez le contenue de votre note" value={update.contenu_note} onChange={handleChange}
            ></textarea>
            <div className='form-interne'>
            <input type="color" name='couleur' value={update.couleur} onChange={handleChange} />
            <input type="date" name='date' value={update.date} onChange={handleChange} />
            </div>
            <button onClick={handleUpdate}>Modifier</button>
          </form>
        </div>
      
      
  </>;
};
 
export default UpdateNote;
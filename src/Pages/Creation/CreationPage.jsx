import React, {useContext, useState} from 'react';
import noteService from '../../Services/noteService'
import "../../Styles/Creationpage.css"
import { toast } from 'react-toastify';
import GlobalContext from '../../context/GlobalContext';


const Creationpage = () => {

    const {userId} = useContext(GlobalContext)
    const [creation, setCreation] = useState({
        
        titre : '',
        contenu : '',
        categorie : '',
        color :'',
        date : '',
        id_user : userId,
    });

    const handleChange = (e) => {
        const {name , value} = e.currentTarget;
        setCreation ({...creation, [name] : value})
        console.log(creation)
    }

    const handleAdd = async (e) => {
        e.preventDefault()
        try {
          console.log(creation);
           const response = await noteService.AddCreation(creation)
           toast.success("Le Post-It "+ creation.titre + " à bien été crée");
        } catch (e) {
         console.log(e)   
        }
        console.log(creation)
    }

    

  return <>

    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

        <div class="conteneur-formulaire ">
          <form action="#" id='form-connexion'>
            <h1>Inscription</h1>
            
            <input name="id_user" type="hidden" value={creation.id_user} id="id_user" onChange={handleChange}/>
            <div className='form-interne'>
            <input type="text" placeholder="Votre Titre" name='titre'  value={creation.titre} onChange={handleChange} />
            <input type="text" placeholder="Votre Categorie" name='categorie' value={creation.categorie} onChange={handleChange} />
            </div>
            <textarea name="contenu" rows={100} placeholder="Entrez le contenue de votre note" value={creation.contenu} onChange={handleChange}
            ></textarea>
            <div className='form-interne'>
            <input type="color" name='color' value={creation.color} onChange={handleChange} />
            <input type="date" name='date' value={creation.date} onChange={handleChange} />
            </div>
            <button onClick={handleAdd}>Créer</button>
          </form>
        </div>
      
      
  </>;
};

export default Creationpage;
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
  
    
    <div id="form-main">
      <div id="form-div">
        <form className="form" id="form1">
         
          <p>
            <input name="id_user" type="hidden" className=" feedback-input"
              placeholder="Votre Identifiant" value={creation.id_user}
              id="id_user" onChange={handleChange}/>
          </p>
          <p>
            <input name="titre" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
              placeholder="Votre Titre" value={creation.titre}
              id="name" onChange={handleChange}/>
          </p>
          
          <p>
            <input name="categorie" type="text" className="validate[required,custom[email]] feedback-input"
              id="email"
              placeholder="Votre CatÃ©gorie" value={creation.categorie} onChange={handleChange}/>
          </p>
          
          <p>
            <textarea name="contenu" className="validate[required,length[6,300]] feedback-input"
              id="comment"
              placeholder="Entrez le contenue de votre note" value={creation.contenu} onChange={handleChange}
            ></textarea>
          </p>
          <p>
            <input name="color" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
              placeholder="Choisissez la couleur de votre post-it" value={creation.color}
              id="color" onChange={handleChange}/>
          </p>
          <p>
            <input name="date" type="date" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
               value={creation.date}
              id="date" onChange={handleChange}/>
          </p>
          
          <div className="submit">
            <button id="button-blue" onClick={handleAdd}>SEND</button>
            <div className="ease"></div>
          </div>
        </form>
      </div>
    </div>
  </>;
};

export default Creationpage;
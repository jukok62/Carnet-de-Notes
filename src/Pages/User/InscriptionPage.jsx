import React, { useEffect,useState } from 'react'
import inscriptionService from '../../Services/inscriptionService'
import '../../Styles/page.css'
import { toast } from 'react-toastify';

const InscriptionPage = () => {

    const [inscriptions, setInscriptions] = useState({
        nom: '',
        prenom : '',
        email : '',
        password : '',
    });

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        setInscriptions({...inscriptions, [name] : value})
        console.log(inscriptions)
    }

    const handleAdd = async (e) => {
        e.preventDefault()
        try {
            const response = await inscriptionService.AddInscription(inscriptions)
            toast.success("Votre inscription est confirmé M." + inscriptions.nom + inscriptions.prenom)
        } catch (e) {
            console.log(e)
        }
    }
    return <>

    <div id='center-card'>
        <div className='container'>
         <div id="form-main">
        <div id="form-div">
          <form className="form" id="form1">
           
            <p>
              <input name="nom" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder="entrer Votre Nom" value={inscriptions.nom}
                id="id_user" onChange={handleChange}/>
            </p>
            <p>
              <input name="prenom" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder="entrer votre prénom" value={inscriptions.prenom}
                id="color" onChange={handleChange}/>
            </p>
            <p>
              <input name="email" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder="Veuillez entrer une adresse email" value={inscriptions.email}
                id="email" onChange={handleChange}/>
            </p>
            <p>
              <input name="password" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder="entrer un mot de passe" maxLength={20} value={inscriptions.password}
                id="name" onChange={handleChange}/>
            </p>
            
            <div className="submit">
              <button id="button-blue" onClick={handleAdd}>SEND</button>
              <div className="ease"></div>
            </div>
          </form>
        </div>
      </div>
        </div>
    </div>
    </>;
}
 
export default InscriptionPage;
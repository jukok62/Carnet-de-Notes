import React, { useEffect,useState } from 'react'
import inscriptionService from '../../Services/inscriptionService'
import '../../Styles/page.css'
import '../../Styles/Creationpage.css'
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'

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

<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    <div class="form-co">
      <div class="container-co" id="container">
        <div class="form-container">


        </div>
        <div class="form-container sign-in-container">
          <form action="#" id='form-connexion'>
            <h1>Inscription</h1>
            <div>
              <p></p>
            </div>
            <input type="text" placeholder="NOM" name='nom'  value={inscriptions.nom} onChange={handleChange} />
            <input type="text" placeholder="PRENOM" name='prenom' value={inscriptions.prenom} onChange={handleChange} />
            <input type="email" placeholder="Email"name='email' value={inscriptions.email} onChange={handleChange} />
            <input type="password" placeholder="Mot de passe" name='password' maxLength={20} value={inscriptions.password} onChange={handleChange} />
            <div>
              <p></p>
            </div>
            <button onClick={handleAdd}>Se Connecter</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Bonjour, l'amis!</h1>
              <p>Entrez vos informations personnelles et commencez votre voyage avec nous</p>
              <Link to={'/connexion'}><button class="ghost" id="signUp">Se connecter</button></Link>
            </div>
          </div>
        </div>
      
      </div>
    </div>
    </>;
}
 
export default InscriptionPage;
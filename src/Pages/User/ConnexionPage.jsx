import React, { useEffect, useState,useContext } from 'react'
import connexionService from '../../Services/connexionService'
import '../../Styles/page.css'
import { toast } from 'react-toastify';
import GlobalContext from '../../context/GlobalContext';

const ConnexionPage = () => {
    const {setUserId} = useContext(GlobalContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [connexionResult, setConnexionResult] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
      const { name, value } = e.currentTarget;
      if (name === 'email') {
        setEmail(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    };

 
    const handleConn = async (e) => {
      e.preventDefault();
      try {
          const response = await connexionService.AddConn(email, password);
          setConnexionResult(response.data);
          setUserId(response.data.user.id_user)
          // toast.success("Votre connexion est un succès")
        } catch (error) {
          console.error("Erreur dans handleConn :", error);
          if (error.response && error.response.data && error.response.data.message) {
              setError(error.response.data.message);
          } else {
              setError('Erreur lors de la connexion. Veuillez réessayer.');
          }
      }
      
  };
  

    

    
    return <>
   <div id='center-card'>
        <div className='container'>
         <div id="form-main">
        <div id="form-div">
          <form className="form" id="form1">
           
            <p>
              <input name="email" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder="Veuillez entrer une adresse email" value={email}
                id="email" onChange={handleChange}/>
            </p>
            <p>
              <input name="password" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder="entrer un mot de passe" maxLength={20} value={password}
                id="name" onChange={handleChange}/>
            </p>
            
            <div className="submit">
              <button id="button-blue" onClick={handleConn}>SEND</button>
              <div className="ease"></div>
            </div>
          </form>
          {connexionResult && (
            <div className="success-message">
              Connexion réussie! {/* Ou affichez des détails spécifiques si nécessaire */}
            </div>
          )}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
        </div>
      </div>
        </div>
    </div>
    </>;
}
 
export default ConnexionPage;
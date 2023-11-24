import React, { useEffect, useState, useContext } from 'react'
import connexionService from '../../Services/connexionService'
import '../../Styles/connexion.css'
import { toast } from 'react-toastify';
import GlobalContext from '../../context/GlobalContext';
import {Link} from 'react-router-dom'

const ConnexionPage = () => {
  const { setUserId } = useContext(GlobalContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [connexionResult, setConnexionResult] = useState(null);
  const [error, setError] = useState(null);

    // Utilisez useEffect pour vérifier le localStorage au chargement de la page
    useEffect(() => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        // Mettez à jour l'état de connexion ou effectuez toute autre action nécessaire
        setConnexionResult({ token: authToken });
      }
    }, []);

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
      // Stocker le token dans le localStorage
    localStorage.setItem('authToken', response.data.token);
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
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    <div class="form-co">
      <div class="container-co" id="container">
        <div class="form-container">


        </div>
        <div class="form-container sign-in-container">
          <form action="#" id='form-connexion'>
            <h1>Connexion</h1>
            <div class="social-container">
              <a href="#" class="social"><i class='bx bxl-facebook'></i></a>
              <a href="#" class="social"><i class='bx bxl-google'></i></a>
              <a href="#" class="social"><i class='bx bxl-linkedin'></i></a>
            </div>
            <span>ou utilisez votre compte</span>
            <input type="email" placeholder="Email"name='email' value={email} onChange={handleChange} />
            <input type="password" placeholder="Mot de passe" name='password' maxLength={20} value={password} onChange={handleChange} />
            <a href="#">Mot de passe oublié ?</a>
            <button onClick={handleConn}>Se Connecter</button>
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
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Bonjour, l'amis!</h1>
              <p>Entrez vos informations personnelles et commencez votre voyage avec nous</p>
              <Link to={'/inscription'}><button class="ghost" id="signUp">S'inscrire</button></Link>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </>;
}

export default ConnexionPage;
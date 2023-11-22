import React, {useState, useContext} from 'react';
import '../Styles/navbar.css'
import {Link} from 'react-router-dom'
import GlobalContext from '../context/GlobalContext';

const NavBar = () => {
  
  const {userId} = useContext(GlobalContext)
    const [currentPage, setCurrentPage] = useState("Post-it")
   const fetchIdUser = async () => {
    
   }
    return (
        <>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

         <input type="checkbox" id="check"></input>
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
      <header>POST-IT 2.0</header>
      <Link to="/" onClick={()=>{
        setCurrentPage("Post-it")
      }} class={currentPage=="Post-it" && "active"}>
        <i class="fas fa-qrcode"></i>
        <span>Post-it</span>
      </Link>
      <Link to="#" >
        <i class="far fa-building"></i>
        <span>Catégories</span>
      </Link>
      <Link to="#">
        <i class="fas fa-suitcase"></i>
        <span>Dates</span>
      </Link>
      <Link to="#">
        <i class="fas fa-user-graduate"></i>
        <span>Couleurs</span>
      </Link>
      <Link to="/Creation" onClick={()=>{
        setCurrentPage("Création")
      }} class={currentPage == "Création" && "active"}>
        <i class="far fa-question-circle"></i>
        <span>Création</span>
      </Link>
      <Link to="/MonCompte" onClick={()=>{
        setCurrentPage("Mon Compte")
      }} class={currentPage == "Mon Compte" && "active"}>
        <i class="far fa-envelope"></i>
        <span>Mon Compte</span>
      </Link>
      <div className='btn-conn'>
      <Link to="/connexion" onClick={()=>{
        setCurrentPage("connexion") 
      }} class={currentPage == "connexion" && "active"}>
        <i class="far fa-envelope"></i>
        <span>Connexion</span>
      </Link>
      <Link to="/inscription" onClick={()=>{
        setCurrentPage("inscription") 
      }} class={currentPage == "inscription" && "active"}>
        <i class="far fa-envelope"></i>
        <span>Inscription</span>
      </Link>
      </div>
    </div>
        </>
    );
}

export default NavBar;

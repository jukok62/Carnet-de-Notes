import React from 'react';
import '../../Styles/MonEspace.css'

const MonEspaceComponent = ({ espace }) => {
  return (
    <>
    
      <div className="card_container">
        <div className="img" id="img_top">
          img_top
        </div>
        <div className="img" id="img_bot">
          img_bottom
        </div>
        <div className="card-espace">
          <img
            id="user-photo"
            src="https://www.bing.com/ck/a?!&&p=162571b48f45b6c2JmltdHM9MTcwMDE3OTIwMCZpZ3VpZD0xOGFmZTJmYy01ZDEyLTY0ZGItMmVlMC1mM2NkNWNhYjY1MGUmaW5zaWQ9NTQ3Mw&ptn=3&ver=2&hsh=3&fclid=18afe2fc-5d12-64db-2ee0-f3cd5cab650e&u=a1L2ltYWdlcy9zZWFyY2g_cT1ibGFjayBmYWNlIGZ1bm55JkZPUk09SVFGUkJBJmlkPTMxRUU5N0I0OTMxQzM2MTgwQjFDNUQ3MkI0MkY5OEFFMDUwMDAxQjg&ntb=1"
            alt="user"
            title="user"
          />
          <div className="text">
            <p id="user-name">
              <span>{espace.nom_user} {espace.prenom_user}</span> 
            </p>
            <p id="user-city">{espace.email_user}</p>
          </div>
          <div id="datos">
            <div className="stats">
              <p>
                <span className="cabecera">{espace.nb_note}</span> <br /> POST-IT
              </p>
            </div>
            <div className="stats">
              <p>
                <span className="cabecera">{espace.nb_categorie}</span> <br /> Catégories
              </p>
            </div>
            <div className="stats">
              <p>
                <span className="cabecera">1.4K</span> <br /> Photos
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonEspaceComponent;

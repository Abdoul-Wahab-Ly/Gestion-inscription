import React from 'react';
import cc0 from './cc0.png';


const Connecter = () => {
    return(
        <div className="connexion">
            <div className="connexionForm">
                <h1>Connexion</h1>
                <p>Vous êtes étudiants ? Connectez-vous sur<br/>
                notre plateforme .</p>

                <form>

                        <div className="inpuntConnexion">
                            <input className="inputcon" type="text" name="name" placeholder="Adresse mail"/>
                        </div>

                        <div className="inpuntConnexion">
                            <input className="inputcon" type="text" name="name" placeholder="Mot de passe"/>
                        </div>

                        <button className="btnConnexion">Se connecter</button>
                </form>
            </div>

            <div className="connexionImg">
                <img src={cc0} alt="connexion"/>
            </div>
        </div>
    )
}

export default Connecter ;
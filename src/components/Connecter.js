/**
 * C'est le composant Connecter de notre application web
 * qui permet les utilisateurs deja inscritent
 *  de se connecter et se rendre sur leur  compte
 */


//on fait l'importation du bibliotheque React et celle
// d'image 
import React from 'react';
import cc0 from './cc0.png';


const Connecter = () => {
    //Cet composant renvoie la formulaire de connection
    // avec le button de validation si les champs sont correctes
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
            <p className="copyy">Copyright © 2021 SUP'INFO DAKAR | Tous droits réservés</p>
        </div>
    )
}

export default Connecter ;
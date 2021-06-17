/**
 * C'est le composant Inscrire.js 
 * qui permet les etudiants de s'inscrire
 */

//on fait l'importation du bibliotheque React et celle
// de react-icons/im pour les icones
import React from 'react';
import { ImUser } from "react-icons/im";



const Inscrire = () => {
        // Cette composant return la formulaire d'inscription
        // Et un boutton submit qui permet de valider l'inscription apres avoir bien rempli les champs 


    return(
        <div className="containerInscription">
        <div className="inscrire">
            <h1>Inscription</h1>
            <p>Inscrivez-vous afin de bénéficiez de<br/>
            nos formations de qualités</p>
            <form className="inscrptionForm">
                
            
                <div className="inpuntContainer">
                    <p><ImUser/></p><input type="text" name="name" placeholder="Nom Complet"/>
                </div>
                
                <div className="inpuntContainer">
                <p><ImUser/></p><input type="text" name="name" placeholder="Nom Complet"/>
                </div>
                <div className="inpuntContainer">
                    <input type="text" name="name" placeholder="Nom Complet"/>
                </div>
                <div className="inpuntContainer">
                    <input type="text" name="name" placeholder="Nom Complet"/>
                </div>
                <div className="inpuntContainer">
                    <input type="text" name="name" placeholder="Nom Complet"/>
                </div>
                <div className="inpuntContainer">
                    <input type="text" name="name" placeholder="Nom Complet"/>
                </div>
                <div className="inpuntContainer">
                    <input type="text" name="name" placeholder="Nom Complet"/>
                </div>
                <div className="inpuntContainer">
                    <input type="text" name="name" placeholder="Nom Complet"/>
                </div>
                
                <button>S'isnscrire</button>
                
            </form>

            <p className="copyy">Copyright © 2021 SUP'INFO DAKAR | Tous droits réservés</p>
        </div>
        </div>
    )
}

export default Inscrire ;
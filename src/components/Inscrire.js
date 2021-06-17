/**
 * C'est le composant Inscrire.js 
 * qui permet les etudiants de s'inscrire
 */

//on fait l'importation du bibliotheque React et celle
// de react-icons/im pour les icones
import React from 'react';
import { ImUser } from "react-icons/im";
import { ImCalendar } from "react-icons/im";
import { ImEnvelop } from "react-icons/im";
import { AiOutlineRead } from "react-icons/ai";
import { AiOutlineNumber } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdSchool } from "react-icons/md";



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
                    <p><ImUser/></p><input type="text" name="name" placeholder="Nom "/>
                </div>
                
                <div className="inpuntContainer">
                <p><ImUser/></p><input type="text" name="name" placeholder="Prenom"/>
                </div>
                <div className="inpuntContainer">
                <p><ImEnvelop/></p><input type="email" name="name" placeholder="Adress mail"/>
                </div>
                <div className="inpuntContainer">
                <p><AiOutlineNumber/></p><input type="number" name="name" placeholder="Numero Telephone"/>
                </div>
                <div className="inpuntContainer">
                <p><ImCalendar/></p><input type="date" name="name" placeholder="Date de Naissance"/>
                </div>
                <div className="inpuntContainer">
                <p><AiTwotoneEdit/></p><input type="number" name="name" placeholder="CIN"/>
                </div>
                <div className="inpuntContainer">
                <p><AiOutlineRead/></p><input type="text" name="name" placeholder="Filliere"/>
                </div>
                <div className="inpuntContainer">
                <p><MdSchool/></p><input type="text" name="name" placeholder="Niveau d'Etude"/>
                </div>
                
                <button>S'isnscrire</button>
                
            </form>

            <p className="copyy">Copyright © 2021 SUP'INFO DAKAR | Tous droits réservés</p>
        </div>
        </div>
    )
}

export default Inscrire ;
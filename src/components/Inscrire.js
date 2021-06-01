import React from 'react';
import { ImUser } from "react-icons/im";



const Inscrire = () => {
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
        </div>
        </div>
    )
}

export default Inscrire ;
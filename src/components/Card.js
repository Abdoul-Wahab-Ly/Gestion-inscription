/**
 * C'est le composant CArd de notre application web
 * qu'on importe dans dans le composant Formation.js 
 */

//on fait l'importation du bibliotheque React et celle
// de react-router-dom pour les link
// et de card00 qui est l'image des cards
import React from 'react'
import {Link} from 'react-router-dom';
import card00 from './card00.png'


function Card() {
    // Cet composant permet de creer les cards des formation cad
    // les informations sur chaque formation 

    return (
        <div className="cardContainer">
            <img src={card00} alt="formation1"/>
            <div className="cardContent">
                <h2 className="cardTitle">Web Developpement</h2>
                <p>Lorem ipsum dolor sit amet, consectetur<br/> 
                Mauris ornare, turpis eget faucibus e</p>
                <Link to="/">Consulter</Link>
                                    
            </div>
             
        </div>

        
    )
}

export default Card;

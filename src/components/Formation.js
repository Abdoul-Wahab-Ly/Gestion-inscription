/**
 * C'est le composant Formation de notre application web
 * qui permet de visualiser les formation 
 * qui existent dans l'etablissement
 */

//on fait l'importation du bibliotheque React et le
// composant Card
import React from 'react';
import Card from './Card'

function Formation() {
    //Cet composant renvoie les differentes formations
    // qui existent


    return (
        <div className="formationContainer">
            <h1>Les formstions que nous offrons :</h1>
            <div className="cardFormation">

                <Card/>
                <Card/>
                <Card/>
                <Card/>
                

            </div>
        </div>
    )
}

export default Formation

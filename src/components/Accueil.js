/**
 * C'est le composant d'accueil de notre application web
 * qu'on importe dans app.js
 */

//on fait l'importation du bibliotheque React et celle
// de react-router-dom pour les link
import React from 'react';
import {Link} from 'react-router-dom';



const Accueil = () => {
    //cette fonction return du texte et le boutton
    // qui permet de se diriger vers le compenent Formation.js

    return(
        <div className="accueil">
            <p><span>Bienvenue au GROUPE SUP'INFO</span><br/>
            L'école du numérique qui vous<br/>
            propose une formation a la<br/>
            hauteur de vos attentes</p>
            
            <p className="plink"> <Link to="/formation">Voir nos formations</Link></p>
        </div>
    )
}

export default Accueil ;
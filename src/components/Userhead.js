/**
 * C'est le composant UserHead de notre application web
 * qui affiche le statut et le deconnexion du des dashbords
 */


//on fait l'importation du bibliotheque React et celle
// de react-router-dom pour les link
import React from 'react';
import {Link} from 'react-router-dom';




function Userhead() {
    // return le statut et le button deconnexion des dashbords

    return (
        <div className="userContain">
            <div className="userName">
                <p className="circle">AW</p>
                <p className="name">Abdoul wahab Ly<br/>
                Statut</p>
            </div>
            <p className="deconnexion"> <Link to="/Connecter">déconnexion</Link></p>
        </div>
    )
}

export default Userhead

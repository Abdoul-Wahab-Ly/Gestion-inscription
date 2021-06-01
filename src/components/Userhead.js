import React from 'react';
import {Link} from 'react-router-dom';




function Userhead() {
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

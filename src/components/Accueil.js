import React from 'react';
import {Link} from 'react-router-dom';


const Accueil = () => {
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
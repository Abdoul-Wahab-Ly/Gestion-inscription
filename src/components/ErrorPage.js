/**
 * C'est le composant ErrorPage de notre application web
 * qui renvoie une erreur si le lien vers un page n'existe pas
 */

//on fait l'importation du bibliotheque React et celle

import React from 'react'

function ErrorPage() {
    //Cet composant renvoie l'erreur

    return (
        <div>
            <h1>Page NON Trouvé</h1>
        </div>
    )
}

export default ErrorPage;

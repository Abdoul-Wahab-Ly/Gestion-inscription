import React from 'react'
import Userhead from './Userhead'

function DashbordEtudiant() {
    return (
        <div className="etudiant">
            <Userhead/>

            <div className="etudiantInfo">
                <h1>Fiche de l'étudiant</h1>

                <p><span>Nom :</span> Ly</p>
                <p><span>Prénom :</span> Abdoul Wahab</p>
                <p><span>Numéro d'inscription :</span> SIDK002575</p>
                <p><span>Filière inscrite :</span> Programmation</p>
                <p><span>Etat de l'inscription :</span> Accepté</p>
                
            </div>
        </div>
    )
}

export default DashbordEtudiant;

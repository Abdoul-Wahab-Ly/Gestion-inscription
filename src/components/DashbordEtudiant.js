/**
 * C'est le composant Dashbordetudiant de notre application web
 * qui permet les etudiants de voir les informations sur leur
 * demande d'admission une fois connecter
 */


//on fait l'importation du bibliotheque React et celle
// du composant Userhhead pour l'entete des dashbord qui permet
// d'afficher le statut et un button de deconnexion
import React from 'react'
import Userhead from './Userhead'

function DashbordEtudiant() {
    // Cet composant return les informations sur la demande
    // de l'etudiant


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

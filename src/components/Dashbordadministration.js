/**
 * C'est le composant Dashbordadministration de notre application web
 * qui permet les administrateurs de voir les informations sur les
 * etudiants une fois connecter
 */

//on fait l'importation du bibliotheque React et celle
// du composant Userhhead pour l'entete des dashbord qui permet
// d'afficher le statut et un button de deconnexion
import React from 'react'
import Userhead from './Userhead'

function Dashbordadministration(){
    // Cet composant return une liste contenant
    // des informations sur les etudiants et voir la possibilite
    // d'accepter ou rejeter la demande d'admission des etudiants

    return(
        <div className="administration">
            <Userhead/>

            <h1>Liste des inscription :</h1>
            <table className="carsTable">
                <tr>
                    <th>Numéro</th>
                    <th>Nom et Prenom</th>
                    <th>Date d'inscription</th>
                    <th>Fillière choisie</th>
                    <th>Année</th>
                    <th className="thAction">Action</th>
                </tr>

                <tr>
                    <td>2324</td>
                    <td>Ly Abdoul Wahab</td>
                    <td>29/05/2019</td>
                    <td>Web developpement</td>
                    <td>L1</td>
                    <td className="cntbtn"><button>Accepter</button> <button className="rejet">Rejeter</button></td>
                </tr>

                <tr>
                    <td>2324</td>
                    <td>Ly Abdoul Wahab</td>
                    <td>29/05/2019</td>
                    <td>Web developpement</td>
                    <td>L1</td>
                    <td className="cntbtn"><button>Accepter</button> <button className="rejet">Rejeter</button></td>
                </tr>

                <tr>
                    <td>2324</td>
                    <td>Ly Abdoul Wahab</td>
                    <td>29/05/2019</td>
                    <td>Web developpement</td>
                    <td>L1</td>
                    <td className="cntbtn"><button>Accepter</button> <button className="rejet">Rejeter</button></td>
                </tr>
            </table>
        </div>
    )
}

export default Dashbordadministration;
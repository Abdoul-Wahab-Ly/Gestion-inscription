import React from 'react'
import Userhead from './Userhead'

function Dashbordadministration(){
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
                    <td className="cntbtn"><button>Accepter</button> <button>Rejeter</button></td>
                </tr>

                <tr>
                    <td>2324</td>
                    <td>Ly Abdoul Wahab</td>
                    <td>29/05/2019</td>
                    <td>Web developpement</td>
                    <td>L1</td>
                    <td className="cntbtn"><button>Accepter</button> <button>Rejeter</button></td>
                </tr>

                <tr>
                    <td>2324</td>
                    <td>Ly Abdoul Wahab</td>
                    <td>29/05/2019</td>
                    <td>Web developpement</td>
                    <td>L1</td>
                    <td className="cntbtn"><button>Accepter</button> <button>Rejeter</button></td>
                </tr>
            </table>
        </div>
    )
}

export default Dashbordadministration;
/**
 * C'est le composant Connecter de notre application web
 * qui permet les utilisateurs deja inscritent
 *  de se connecter et se rendre sur leur  compte
 */


//on fait l'importation du bibliotheque React et celle
// d'image 
import React from 'react';
import cc0 from './cc0.png';
import {Component} from "react"

class Connecter extends Component {

  connection=async(mail,mdp)=>{
    const response = await fetch(`/connection/etudiant/${mail}/${mdp}`)
    let body = await response.json()
    // console.log(body)
    if(response.status !=200) throw Error(body.message)
    return body
  }
  connectBtn=e=>{
    // console.log(e);
    e.preventDefault()
    const mail = document.getElementById('mail')
    const mdp = document.getElementById('mdp')
    if(mail.value==''||mdp.value==''){
      alert("Veuillez remplir tout les champs")
    }else{
      this.connection(mail.value,mdp.value)
        .then(res=>{
          if(res.connection == false){
            alert('Mot de passe ou email incorrect')
            mail.value = '';
            mdp.value = ''
          }else{
            console.log(res.connection)
            localStorage.setItem('mail',mail.value);
            localStorage.setItem('mdp',mdp.value)
            window.location.assign(`/dashboard/etudiant`)
          }
        })
    }}

    render(){
    return(
        <div className="connexion">
            <div className="connexionForm">
                <h1>Connexion</h1>
                <p>Vous êtes étudiants ? Connectez-vous sur<br/>
                notre plateforme .</p>

                <form>

                        <div className="inpuntConnexion">
                            <input className="inputcon" id="mail" type="text" name="name" placeholder="Adresse mail"/>
                        </div>

                        <div className="inpuntConnexion">
                            <input className="inputcon" id="mdp" type="password" name="name" placeholder="Mot de passe"/>
                        </div>

                        <button onClick={this.connectBtn} className="btnConnexion">Se connecter</button>
                </form>
            </div>

            <div className="connexionImg">
                <img src={cc0} alt="connexion"/>
            </div>
            <p className="copyy">Copyright © 2021 SUP'INFO DAKAR | Tous droits réservés</p>
        </div>
    )

}
}

export default Connecter
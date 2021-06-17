import React from 'react';
import cc0 from './cc0.png';
import {Component} from "react"

class ConnecterAdmin extends Component {


  connection=async(mail,mdp,role)=>{
    const response = await fetch(`/connection/${role}/${mail}/${mdp}`)
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
    const role = document.getElementById('role')
    if(mail.value==''||mdp.value==''||role.value=='null'){
      alert("Veuillez remplir tout les champs")
    }else{
      this.connection(mail.value,mdp.value,role.value)
        .then(res=>{
          if(res.connection == false){
            alert('Mot de passe ou email incorrect')
            mail.value = '';
            mdp.value = ''
          }else{
            console.log(res.connection[0])
            localStorage.setItem('mail',mail.value);
            localStorage.setItem('mdp',mdp.value)
            localStorage.setItem('role',role.value)
            window.location.assign(`/dashboard/${role.value}`)
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
                            <input className="inputcon" type="text" name="name" placeholder="Adresse mail"/>
                        </div>

                        <div className="inpuntConnexion">
                            <input className="inputcon" type="text" name="name" placeholder="Mot de passe"/>
                        </div>

                        <button className="btnConnexion">Se connecter</button>
                </form>
            </div>

            <div className="connexionImg">
                <img src={cc0} alt="connexion"/>
            </div>
        </div>
    )

}
}

export default ConnecterAdmin ;
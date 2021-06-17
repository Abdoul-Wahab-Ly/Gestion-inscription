/**
 * C'est le composant Menu qui eat le header de notre application web
 * qui permet de naviguer entre les pages
 */

//on fait l'importation du bibliotheque React et celle
// de react-router-dom pour les link et NavLink
// et de react-icons
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import Img from './Img';
import { AiFillHome} from "react-icons/ai";
import { RiUserFollowFill} from "react-icons/ri";
import { FaUnlockAlt } from "react-icons/fa";
import {FaQuestion } from "react-icons/fa";
import  '../App.css';


const Menu = () =>{
        //Cet composant fait le lien sur 
        //les composants de l'application

    return(
        <nav className="linkContainer">
            <Img/>
            <ul>
                <li><NavLink to="/"><AiFillHome/><span>Accueil</span></NavLink></li>
                <li><Link to="/inscrire"><RiUserFollowFill/><span>S'inscrire</span></Link></li>
                <li><Link to="/connecter"><FaUnlockAlt/><span>Se connecter</span></Link></li>
                <li><Link to="/faq"><FaQuestion/><span>FAQ</span></Link></li>
            </ul>
        </nav>
    )
}

export default Menu;

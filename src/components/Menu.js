import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import Img from './Img';
import { AiFillHome} from "react-icons/ai";
import { RiUserFollowFill} from "react-icons/ri";
import { FaUnlockAlt } from "react-icons/fa";
import {FaQuestion } from "react-icons/fa";
import  '../App.css';


const Menu = () =>{
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

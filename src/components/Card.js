import React from 'react'
import {Link} from 'react-router-dom';
import card00 from './card00.png'
function Card() {
    return (
        <div className="cardContainer">
            <img src={card00} alt="formation1"/>
            <div className="cardContent">
                <h2 className="cardTitle">Web Developpement</h2>
                <p>Lorem ipsum dolor sit amet, consectetur<br/> 
                Mauris ornare, turpis eget faucibus e</p>
                <Link to="/">Consulter</Link>
                                    
            </div>
             
        </div>
    )
}

export default Card;

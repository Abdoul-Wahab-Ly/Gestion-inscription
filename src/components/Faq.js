/**
 * C'est le composant Faq de notre application web
 * Foire aux questions
 */

//on fait l'importation du bibliotheque React et celle
// de react-accessible-accordion pour la foire
import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Importation du fichier css de react-accessible-accordion
import 'react-accessible-accordion/dist/fancy-example.css';


const Faq = () => {
    return (
        <Accordion className="accord">
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What Executive`sdegree?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Le programme « Executive » débute par une<br/>
                     évaluation des besoins du candidat.<br/>
                     Il s'adresse plus particulièrement aux personnes<br/>
                      en activité (entreprise, organismes,..).<br/>
                     Planning adapté et gain de temps, sont<br/> 
                     les points forts de ce programme.<br/>
                    </p>
                </AccordionItemPanel>
                
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Bachelor`sdegree?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Le programme « Bachelor »(Bcs) ou « Licence Pro »<br/>
                     (LP) est un classique de la formation continue.<br/>
                    Il se déroule sur trois (03) ans,<br/>
                     avec une soutenance publique en fin de parcours.<br/>
                     Toutes filières confondues, les technologies<br/>
                      de l'information y sont fortement représentées .<br/>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Sur deux (02) années après le Bachelor (Bcs),<br/> 
                    programme Master (Mcs) dispose d'une excellente réputation<br/> 
                    dans le monde professionnel.<br/>
                     Associé à une certification internationale et une expérience en entreprise,<br/> 
                     votre Master du Groupe SUP'INFO fait toute la différence.<br/>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Sur deux (02) années après le Bachelor (Bcs),<br/> 
                    programme Master (Mcs) dispose d'une excellente réputation<br/> 
                    dans le monde professionnel.<br/>
                     Associé à une certification internationale et une expérience en entreprise,<br/> 
                     votre Master du Groupe SUP'INFO fait toute la différence.<br/>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <p className="copyy">Copyright © 2021 SUP'INFO DAKAR | Tous droits réservés</p>
        </Accordion>
    );
}

export default Faq ;
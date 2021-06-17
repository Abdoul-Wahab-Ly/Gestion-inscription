import React from 'react';
import Menu from './components/Menu';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Accueil from './components/Accueil';
import Inscrire from './components/Inscrire';
import Connecter from './components/Connecter';
import ConnecterAdmin from './components/connectionAdmin';
import Faq from './components/Faq';
import Formation from './components/Formation';
import ErrorPage from './components/ErrorPage';
import DashbordEtudiant from './components/DashbordEtudiant';
import Dashbordadministration from './components/Dashbordadministration';
import './App.css';

function App() {
  return (
    <BrowserRouter>
          <Menu />

          <Switch>
              <Route exact path="/" component={Accueil} />
              <Route path="/inscrire" component={Inscrire} />
              <Route path="/connecter" component={Connecter} />
              <Route path="/connecter/admin" component={ConnecterAdmin} />
              <Route strict path="/faq" component={Faq} />
              <Route strict path="/formation" component={Formation} />
              <Route strict path="/etudiant" component={DashbordEtudiant} />
              <Route strict path="/administration" component={Dashbordadministration} />
              <Route component={ErrorPage} />
          </Switch>

          
    </BrowserRouter>
  );
}

export default App;

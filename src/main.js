// Importando o React
import React from "react";
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'

// Importando o component Home
import Home from "./components/home/home";
import Institucional from "./components/institucional/institucional";
import Eventos from "./components/home/eventos/eventos";
import Equipe from "./components/equipe/equipe";

const Main = () => (
  <main>
     
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/institucional' component={Institucional}/>
        <Route path='/eventos' component={Eventos}/>
        <Route path='/equipe' component={Equipe}/>


      </Switch>
    
  </main>  
);

export default Main;
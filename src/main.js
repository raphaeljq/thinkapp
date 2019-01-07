// Importando o React
import React from "react";
// Importando o component Home
import Home from "./components/home/home";

import Programacao from "./components/programacao/programacao";

// Importando os components necessários da lib react-materialize
import { Container } from 'react-materialize';

// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'


const Main = () => (
  <main>
    
      
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/programacao' component={Programacao}/>
      </Switch>
    
  </main>  
);

export default Main;
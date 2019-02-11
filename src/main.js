// Importando o React
import React from "react";
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'

// Importando o component Home
import Home from "./components/home/home";
import Programacao from "./components/programacao/programacao";
import Colecoes from "./components/colecoes/colecoes";
import Comprar from "./components/comprar/comprar";

const Main = () => (
  <main>
     
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/programacao' component={Programacao}/>
        <Route path='/colecoes' component={Colecoes}/>
        <Route path='/comprar' component={Comprar}/>


      </Switch>
    
  </main>  
);

export default Main;
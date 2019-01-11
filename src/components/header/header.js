// Importando o React
import React from "react";

import NavMenu from "../navmenu/navmenu"

import { Row} from 'react-materialize';

const Header = () => (
  
  <div>
      <Row className="linha__navbar z-depth-1">
        <NavMenu />
      </Row>      
  </div>  
);
     
       
     

export default Header;
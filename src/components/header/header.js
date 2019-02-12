// Importando o React
import React from "react";

import NavMenu from "../navmenu/navmenu"

import { Row, Col} from 'react-materialize';
import Container from "react-materialize/lib/Container";

const Header = () => (
  
  <div>
    
    
      <Row className="linha__navbar z-depth-1">
        <Container>
          <NavMenu /> <h5 className="marca">AGÊNCIA THINKING</h5>
         </Container>
      </Row>      
  </div>  
);
     
       
     

export default Header;
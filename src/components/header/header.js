// Importando o React
import React from "react";

import NavMenu from "../navmenu/navmenu"

import { Row} from 'react-materialize';

const Header = () => (
  
  <div>
    
    <Row className="linha__navbar z-depth-1 sticky">
            <Col>
            <SideNav
                trigger={<Button className="sidenav__button pulse" ><Icon small>menu</Icon></Button>}
                options={{ closeOnClick: true }}
                >
                <SideNavItem userView
                  user={{
                    background: 'https://react-materialize.github.io/img/office.jpg',
                    image: 'https://react-materialize.github.io/img/yuna.jpg',
                    name: 'John Doe',
                    email: 'jdandturk@gmail.com'
                  }}
                />
                
                <NavLink to="/" icon="cloud" waves>Home</NavLink>
                <NavLink to="/programacao">Programação</NavLink>
                <NavLink to="/comprar">Comprar</NavLink>
                <SideNavItem divider />
                <SideNavItem subheader>Subheader</SideNavItem>
                <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
            </SideNav>
            </Col>
    </Row>
      <Row className="linha__navbar z-depth-1">
        <NavMenu />
      </Row>      
  </div>  
);
     
       
     

export default Header;
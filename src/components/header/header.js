// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { SideNav, SideNavItem, Navbar, NavItem, Row, Button, Col, Icon} from 'react-materialize';

const Header = () => (
  
  <div>
    
    <Row className="linha__navbar z-depth-1">
            <Col>
            <SideNav
                trigger={<Button className="sidenav__button" ><Icon small>menu</Icon></Button>}
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
                <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
                <SideNavItem href='#!second'>Second Link</SideNavItem>
                <SideNavItem divider />
                <SideNavItem subheader>Subheader</SideNavItem>
                <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
            </SideNav>
            </Col>
    </Row>
  </div>  
);
     
       
     

export default Header;
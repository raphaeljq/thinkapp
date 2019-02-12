import React from 'react'

// Importando os components necessários da lib react-materialize
import { SideNav, SideNavItem, Navbar, NavItem, Row, Button, Col, Icon} from 'react-materialize';

// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'

const NavMenu = () => (
            <Col>
            <SideNav
                trigger={<Button className="sidenav__button pulse" ><Icon small>menu</Icon></Button>}
                options={{ closeOnClick: true }}
                >
                <SideNavItem userView
                  user={{
                    background: 'https://react-materialize.github.io/img/office.jpg',
                    image: 'https://react-materialize.github.io/img/yuna.jpg'
                  
                  }}
                />
                
                <NavLink to="/" icon="cloud">Home</NavLink>
                <NavLink to="/Institucional">Institucional</NavLink>
                <NavLink to="/Eventos">Eventos</NavLink>
                <NavLink to="/Equipe">Equipe</NavLink>
                <SideNavItem divider />
                <div> redes sociais</div>
            </SideNav>
            </Col>
)    
export default NavMenu; 
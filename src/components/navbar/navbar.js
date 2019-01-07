<Row className="linha__navbar z-depth-1">
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
    
    <NavLink to="/" icon="cloud">Home</NavLink>
    <NavLink to="/programacao">Programação</NavLink>
    <SideNavItem divider />
    <SideNavItem subheader>Subheader</SideNavItem>
    <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
</SideNav>
</Col>
</Row>
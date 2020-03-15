import React from 'react'
import { Navbar, Button, Alignment } from '@blueprintjs/core'

const Nav = () => <Navbar>
  <Navbar.Group align={Alignment.LEFT}>
    <Navbar.Heading>Covid-19 Resources Dashboard</Navbar.Heading>
    <Navbar.Divider />
    <Button className="bp3-minimal" icon="home" text="Home" />
  </Navbar.Group>
</Navbar>

export default Nav

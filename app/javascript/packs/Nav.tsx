import React from 'react'
import { Navbar, Button, Alignment } from '@blueprintjs/core'

const toggleViewMode = (setViewMode, viewMode) => (setViewMode(!viewMode))

const Nav = ({ setViewMode, viewMode }) => <Navbar>
  <Navbar.Group align={Alignment.LEFT}>
    <Navbar.Heading>Covid-19 Resources Dashboard</Navbar.Heading>
    <Navbar.Divider />
    <Button onClick={() => toggleViewMode(setViewMode, viewMode)} className="bp3-minimal" icon={viewMode ? 'edit' : 'eye-open'} text={viewMode ? "Switch to edit mode" : "Switch to view mode"} />
  </Navbar.Group>
</Navbar>

export default Nav

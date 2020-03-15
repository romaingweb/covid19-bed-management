// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar, Button, Alignment } from '@blueprintjs/core'

import './application.scss'

const App = () => (
  <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading>Covid-19 Resources Dashboard</Navbar.Heading>
      <Navbar.Divider />
      <Button className="bp3-minimal" icon="home" text="Home" />
    </Navbar.Group>
  </Navbar>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})

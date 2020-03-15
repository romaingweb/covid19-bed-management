// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { Card, Elevation, Navbar, Button, Alignment } from '@blueprintjs/core'

import './application.scss'

const App = () => (
  <div>
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Covid-19 Resources Dashboard</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="home" text="Home" />
      </Navbar.Group>
    </Navbar>

    <Card interactive elevation={Elevation.TWO}>
      <h5>Idea</h5>
      <p><img className="idea" src="/ETJTgNnWAAAbvbZ.jpg" /></p>
    </Card>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})

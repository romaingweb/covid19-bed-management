// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { HTMLTable } from '@blueprintjs/core'
import Resources from './Resources'
import ResourcesEditor from './ResourcesEditor'
import Nav from './Nav'

import './application.scss'

const App = () => {
  const [resources, setResources] = React.useState([])
  const fetchResources = async () => {
    const response = await fetch(`/resources${window.location.search}`)
    const body = await response.json()
    setResources([{ name: 'example', resources: { icu_beds: { used: 1, available: 10 }, respirators: { used: 0, available: 20 } } }, ...body])
  }
  React.useEffect(() => {
    fetchResources()
  }, [])
  return <div>
    <Nav />

    <HTMLTable interactive striped>
      <thead>
        <tr>
          <td>Hospitals</td>
          <td>ICU Beds</td>
          <td>Respirators</td>
        </tr>
      </thead>
      <tbody>
        {resources.map(({ name, resources }, index) => {
          return <tr key={index}>
            <td>{name}</td>
            {resources ? <Resources items={resources} /> : <ResourcesEditor />}
          </tr>
        })}
      </tbody>
    </HTMLTable>
  </div >
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})

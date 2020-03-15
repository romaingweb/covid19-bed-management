// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { HTMLTable } from '@blueprintjs/core'
import Resources from './Resources'
import ResourcesEditor from './ResourcesEditor'
import Nav from './Nav'
import moment from 'moment'

import './application.scss'

const fetchResources = async (setResources, setEditable) => {
  const response = await fetch(`/resources${window.location.search}`)
  const { resources, editable } = await response.json()
  if (!response.ok) return
  setResources(resources)
  setEditable(editable)
}

const App = () => {
  const [resources, setResources] = React.useState([])
  const [editable, setEditable] = React.useState('')
  const [refreshTimer, setRefreshTimer] = React.useState(null)
  const [viewMode, setViewMode] = React.useState(false)

  React.useEffect(() => {
    fetchResources(setResources, setEditable)
  }, [])

  React.useEffect(() => {
    if (viewMode) {
      setRefreshTimer(setInterval(() => {
        fetchResources(setResources, setEditable)
      }, 10000))
    } else {
      setRefreshTimer(clearInterval(refreshTimer))
    }
  }, [viewMode])

  return <div>
    <Nav setViewMode={setViewMode} viewMode={viewMode} />

    <HTMLTable interactive striped>
      <thead>
        <tr>
          <td>Hospitals</td>
          <td>ICU Beds</td>
          <td>Respirators</td>
          <td>ECMO</td>
          <td>Hemodialysis</td>
          <td>Last modified</td>
        </tr>
      </thead>
      <tbody>
        {resources.map(({ id, name, resources, updated_at }, index) => {
          return <tr key={index}>
            <td>{name}</td>
            {editable === id && !viewMode ? <ResourcesEditor items={resources || {}} setResources={setResources} /> : <Resources items={resources} />}
            <td>{moment(updated_at).format('DD MMM YYYY - HH:mm')}</td>
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

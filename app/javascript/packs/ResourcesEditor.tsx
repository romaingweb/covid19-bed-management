import React from 'react'
import { NumericInput } from '@blueprintjs/core'
import { fromJS } from 'immutable'

const gid = () => {
  return new URLSearchParams(window.location.search).get('gid')
}

const update = async (data) => {
  await fetch('/resources', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    },
    body: JSON.stringify({ resources: data.toJS(), gid: gid() })
  })
}

const ResourcesEditor = ({ items }) => {
  const [data, setData] = React.useState(fromJS(items))

  const handleChange = (number, field) => {
    setData(data.setIn(field, number))
  }

  React.useEffect(() => {
    update(data)
  }, [data])

  return <React.Fragment>
    <td>
      <NumericInput onValueChange={(number) => handleChange(number, ['icu_beds', 'used'])} value={data.getIn(['icu_beds', 'used'], 0)} min={0} /> / <NumericInput onValueChange={(number) => handleChange(number, ['icu_beds', 'available'])} value={data.getIn(['icu_beds', 'available'], 0)} min={0} />
    </td>
    <td>
      <NumericInput onValueChange={(number) => handleChange(number, ['respirators', 'used'])} value={data.getIn(['respirators', 'used'], 0)} /> / <NumericInput onValueChange={(number) => handleChange(number, ['respirators', 'available'])} value={data.getIn(['respirators', 'available'], 0)} />
    </td>
  </React.Fragment>
}

export default ResourcesEditor

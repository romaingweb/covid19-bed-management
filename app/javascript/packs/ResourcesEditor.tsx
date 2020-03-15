import React from 'react'
import { NumericInput } from '@blueprintjs/core'
import { fromJS } from 'immutable'
import FIELDS from './fields'

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
    {FIELDS.map(field => {
      return <td key={field}>
        <NumericInput onValueChange={(number) => handleChange(number, [field, 'used'])} value={data.getIn([field, 'used'], 0)} min={0} /> / <NumericInput onValueChange={(number) => handleChange(number, [field, 'available'])} value={data.getIn([field, 'available'], 0)} min={0} />
      </td>
    })}
  </React.Fragment>
}

export default ResourcesEditor

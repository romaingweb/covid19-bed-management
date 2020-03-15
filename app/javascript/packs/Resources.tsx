import React from 'react'
import { fromJS } from 'immutable'
import FIELDS from './fields'

const Resources = ({ items }) => {
  const data = fromJS(items || {})
  return <React.Fragment>
    {FIELDS.map((field) => {
      return <td key={field}>{data.getIn([field, 'used'], 'Unknown')} / {data.getIn([field, 'available'], 'Unknown')}</td>
    })}
  </React.Fragment>
}
export default Resources

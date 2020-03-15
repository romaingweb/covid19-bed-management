import React from 'react'
import { fromJS } from 'immutable'

const Resources = ({ items }) => {
  if (!items) return null
  const data = fromJS(items)
  return <React.Fragment>
    <td>{data.getIn(['icu_beds', 'used'], 'Unknown')}/{data.getIn(['icu_beds', 'available'], 'Unknown')}</td>
    <td>{data.getIn(['respirators', 'used'], 'Unknown')}/{data.getIn(['respirators', 'available'], 'Unknown')}</td>
  </React.Fragment>
}
export default Resources

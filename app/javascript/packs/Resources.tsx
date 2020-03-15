import React from 'react'

const Resources = ({ items }) => {
  return <React.Fragment>
    <td>{items.icu_beds.used}/{items.icu_beds.available}</td>
    <td>{items.respirators.used}/{items.respirators.available}</td>
  </React.Fragment>
}
export default Resources

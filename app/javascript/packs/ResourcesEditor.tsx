import React from 'react'
import { NumericInput } from '@blueprintjs/core'

const ResourcesEditor = ({ items }) => {
  return <React.Fragment>
    <td><NumericInput value={items['icu_beds'] ? items.icu_beds.used : 0} min={0} /> / <NumericInput value={items['icu_beds'] ? items.icu_beds.available : 0} min={0} /></td>
    <td><NumericInput value={items['respirators'] ? items.respirators.used : 0} min={0} /> / <NumericInput value={items['respirators'] ? items.respirators.available : 0} min={0} /></td>
  </React.Fragment>
}

export default ResourcesEditor

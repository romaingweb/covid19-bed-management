import React from 'react'
import { NumericInput } from '@blueprintjs/core'

const ResourcesEditor = () => {
  return <React.Fragment>
    <td><NumericInput value="0" min={0} /> / <NumericInput value="0" min={0} /></td>
    <td><NumericInput value="0" min={0} /> / <NumericInput value="0" min={0} /></td>
  </React.Fragment>
}

export default ResourcesEditor

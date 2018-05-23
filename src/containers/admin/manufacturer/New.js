import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import ManufacturerForm from '../../../components/manufacturer/ManufacturerForm'
import {addManufacturer} from '../../../actions/manufacturer'
import {endLoad} from '../../../actions/status'

class NewManufacturer extends Component {
  constructor(props) {
    super(props)
    // no need load
    props.endLoad()
  }

  render() {
    let {addManufacturer} = this.props
    return (
      <ManufacturerForm
        model={{}}
        saveManufacturer={addManufacturer} />
    )
  }
}

export default withRouter(connect(null, {addManufacturer, endLoad})(NewManufacturer))

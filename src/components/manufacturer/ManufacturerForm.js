import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {toastr} from 'react-redux-toastr'

import {validate, validateAll} from '../../utils/validate'
import ButtonGroup from '../common/ButtonGroup'

class ManufacturerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: props.model.name || ''}
    this.validate = validate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    model: PropTypes.object.isRequired,
    isEditing: PropTypes.bool,
    saveManufacturer: PropTypes.func.isRequired
  }

  componentDidUpdate(prevProps, prevState) {
    const {model} = this.props;
    if (prevProps.model.name !== model.name) {
      this.setState({name: model.name})
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const {isEditing, saveManufacturer, model} = this.props;
    if (validateAll(event)) {
      let params = this.state;
      if (isEditing) {
        params = {
          _id: model._id,
          ...this.state
        };
      }
      saveManufacturer(params).then(() => {
        if (isEditing) {
          toastr.success('消息', '修改产品成功！')
        }
        window.history.back()
      })
    } else {
      toastr.error('消息', '请确保表单填写正确');
    }
  }

  render() {
    const {isEditing} = this.props;
    const {name_$error_required} = this.state;
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <div className="form-group">
            <label htmlFor="name">品牌名</label>
            <input name="name" required
              placeholder="品牌名" className="form-control"
              value={this.state.name} onChange={this.validate} onBlur={this.validate} />
            {name_$error_required &&
            <span className="small text-danger">品牌名不能为空</span>
            }
          </div>
          <ButtonGroup isEditing={isEditing}/>
        </div>
      </form>
    );
  }
}

export default ManufacturerForm

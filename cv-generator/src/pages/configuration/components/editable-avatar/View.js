import React from 'react'
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './Styles.View'
import Avatar from 'react-avatar-edit'
import store from '../../../../store'

class EditableAvatar extends React.Component {

  constructor(props) {
    super(props)
    const src = store.img
    this.state = {
      preview: null,
      src,
      active: true
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange = () => (event, newExpanded) => {
    console.log("change: ")
    this.setState({active: !this.state.active})
  };

  onClose() {
    this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({preview})
    this.props.handleOnchange(preview)
  }
  
  render () {
    return (
          <div className={this.props.classes.editAvatar}>
          <Avatar
            width={this.props.width}
            height={this.props.height}
            onCrop={this.onCrop}
            onClose={this.onClose}
            src={this.state.src}
          />
          </div>
    )
  }
}

EditableAvatar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

 export default withStyles(styles)(EditableAvatar);
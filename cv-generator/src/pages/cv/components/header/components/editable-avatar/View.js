import React from 'react'
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import styles from './Styles.View'
import Avatare from 'react-avatar-edit'
import img from '../../../../../../assets/img/avatar.png'

class EditableAvatar extends React.Component {

  constructor(props) {
    super(props)
    const src = img
    this.state = {
      preview: null,
      src
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
  }
  


  onClose() {
    this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({preview})
    console.log(typeof(preview))
  }
  
  render () {
    return (
      <div className={this.props.classes.editAvatar}>
        <Avatare
          width={this.props.width}
          height={this.props.height}
          onCrop={this.onCrop}
          onClose={this.onClose}
          src={this.state.src}
        />
        <img src={this.state.preview} className={this.props.classes.avatar} alt="Preview" />

        <Avatar alt="Remy Sharp" src={this.state.preview} className={this.props.classes.avatar} />

      </div>
    )
  }
}

EditableAvatar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

 export default withStyles(styles)(EditableAvatar);
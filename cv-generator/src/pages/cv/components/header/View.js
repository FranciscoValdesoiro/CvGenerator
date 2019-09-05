import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import styles from './Styles.View'
import Typography from '@material-ui/core/Typography';
import EditableAvatar from '../../../configuration/components/editable-avatar/View';
import ImageCrop from '../../../configuration/components/image-crop/View';
import imgAvatar from '../../../../assets/img/avatar.png'
import './header.css'
import { connect } from 'react-redux'

const Header = props => {
    const {
      classes,
      bgImage,
      avatarImage
    } = props

    const [bgImageSt, setBgImageSt] = useState(bgImage);
    const [avatarImageSt, setAvatarImageSt] = useState(avatarImage);
 
    useEffect(() => {
     setBgImageSt(bgImage);
   }, [bgImage]);

   useEffect(() => {
     setAvatarImageSt(avatarImage);
   }, [avatarImage]);
 
  return (
    <div>
      <div className="header" style={{ backgroundImage : `url(${bgImageSt})` }}>
        <Avatar alt="Remy Sharp" src={avatarImageSt} className={classes.avatar} />
        <div  style={{ background: `rgba(0,0,0,0.5)` }} >
          <Typography variant="h3" component="h2">
            NOMBRE Y APELLIDOS
          </Typography>

          <Typography variant="h4" component="h2">
            PUESTO A DESEMPEÑAR
          </Typography>
        </div>
      </div>
    </div>
  );
}
    
export default withStyles(styles)(Header);

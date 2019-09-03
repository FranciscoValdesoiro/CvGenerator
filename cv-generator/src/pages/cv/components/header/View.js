import React from 'react';
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import styles from './Styles.View'
import Typography from '@material-ui/core/Typography';
import imgAvatar from '../../../../assets/img/avatar.png'
import './header.css'

const Header = props => {
    const {classes} = props
  return (
    <div className="header">
      <Avatar alt="Remy Sharp" src={imgAvatar} className={classes.avatar} />
      <div className={classes.headerContentText}>
        <Typography variant="h3" component="h2">
          NOMBRE Y APELLIDOS
        </Typography>

        <Typography variant="h4" component="h2">
          PUESTO A DESEMPEÑAR
        </Typography>
      </div>
    </div>
  );
}

export default withStyles(styles)(Header);

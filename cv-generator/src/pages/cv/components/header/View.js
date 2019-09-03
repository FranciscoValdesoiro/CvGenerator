import React from 'react';
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import styles from './Styles.View'
import Typography from '@material-ui/core/Typography';
import imgAvatar from '../../../../assets/img/avatar.png'


const Header = props => {
    const {classes} = props
  return (
    <div className={classes.header}>
      <Avatar alt="Remy Sharp" src={imgAvatar} className={classes.avatar} />
      <div className={classes.headerContentText}>
        <Typography variant="h3" component="h2">
          FRANCISCO VALDESOIRO GIL
        </Typography>

        <Typography variant="h4" component="h2">
          DESARROLLADOR WEB MOBILE
        </Typography>
      </div>
    </div>
  );
}

export default withStyles(styles)(Header);

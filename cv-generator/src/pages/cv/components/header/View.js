import React from 'react';
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import styles from './Styles.View'
import Typography from '@material-ui/core/Typography';


const Header = props => {
    const {classes} = props
  return (
    <div className={classes.red}>
      <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png" className={classes.bigAvatar} />
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

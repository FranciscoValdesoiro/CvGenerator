import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './Styles.View'
import Typography from '@material-ui/core/Typography';


const Aside = props => {
    const {classes} = props
  return (
    <div className={classes.header}>
        <Typography variant="p" component="p">
          FRANCISCO VALDESOIRO GIL
        </Typography>
    </div>
  );
}

export default withStyles(styles)(Aside);

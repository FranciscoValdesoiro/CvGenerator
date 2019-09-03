import React from 'react';
import { withStyles } from '@material-ui/styles';
import Header from './components/header/View'
import Aside from './components/aside/View'
import Content from './components/content/View'
import styles from './Styles.View'
import savePdf from './Utils'


const Cv = props => {
  const {classes} = props
  return (
    <div id="cv" className={classes.page} onClick={savePdf}>
      <Header></Header>
      <div className={classes.container}>
        <div className={classes.aside}>
          <Aside />
        </div>
        <div className={classes.content}>
          <Content />
        </div>
      </div>
    </div>
      
    
  );
}

export default withStyles(styles)(Cv);

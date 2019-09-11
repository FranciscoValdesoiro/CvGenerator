import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Header from './components/header/View'
import Aside from './components/aside/View'
import Content from './components/content/View'
import styles from './Styles.View'
import savePdf from './Utils'

const Cv = props => {
  const {
    classes,
    bgImage,
    avatarImage,
    name,
    job
  } = props

  const [bgImageSt, setBgImageSt] = useState(bgImage);
  const [avatarImageSt, setAvatarImageSt] = useState(avatarImage);
  const [nameText, setNameText] = useState(name);
  const [jobText, setJobText] = useState(job);
  useEffect(() => {
    setBgImageSt(bgImage);
    console.log("changed background")
  }, [bgImage]);

  
  useEffect(() => {
    setAvatarImageSt(avatarImage);
  }, [avatarImage]);

  useEffect(() => {
    setNameText(name);
  }, [name]);

  useEffect(() => {
    setJobText(job);
  }, [job]);

console.log(name, job)

  return (
    <div id="cv" className={classes.page} onClick={savePdf}>
      <Header 
        bgImage={bgImageSt} 
        avatarImage={avatarImageSt} 
        nameText={nameText}
        jobText={jobText}
      />
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

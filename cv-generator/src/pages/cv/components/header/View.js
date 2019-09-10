import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import styles from './Styles.View'
import Typography from '@material-ui/core/Typography';
import './header.css'

const Header = props => {
    const {
      classes,
      bgImage,
      avatarImage,
      nameText,
      jobText
    } = props

    const [bgImageSt, setBgImageSt] = useState(bgImage);
    const [avatarImageSt, setAvatarImageSt] = useState(avatarImage);
    const [name, setName] = useState(nameText);
    const [job, setJob] = useState(jobText);


    useEffect(() => {
     setBgImageSt(bgImage);
   }, [bgImage]);

   useEffect(() => {
     setAvatarImageSt(avatarImage);
   }, [avatarImage]);

   useEffect(() => {
    setName(nameText);
  }, [nameText]);

  useEffect(() => {
    setJob(jobText);
  }, [jobText]);
 
  return (
    <div>
      <div className={classes.header} style={{ backgroundImage : `url(${bgImageSt})` }}>
        <Avatar alt="Remy Sharp" src={avatarImageSt} className={classes.avatar} />
        <div  className={classes.headerContentText} >
          <Typography variant="h3" component="h2">
            {name}
          </Typography>

          <Typography variant="h4" component="h2">
            {job}
          </Typography>
        </div>
      </div>
    </div>
  );
}
    
export default withStyles(styles)(Header);

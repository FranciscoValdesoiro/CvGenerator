import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import savePdf from '../cv/Utils'
import EditableAvatar from './components/editable-avatar/View';
import ImageCrop from './components/image-crop/View';
import store from '../../store'

const Configuration = props => {
  const [expanded, setExpanded] = React.useState('panel1');
  const [bgExpanded, setBgExpanded] = React.useState(false);
  const handleChange = panel => (event, newExpanded) => {
    console.log(newExpanded)
    setExpanded(newExpanded ? panel : false);
  };

  const handleChangeBg = () => {
    handleChange('panel0');
    setBgExpanded(!bgExpanded);
  };
  
  const { 
    bgImage,
    //avatarImage,
   } = props

   const [bgImageSt, setBgImageSt] = useState(bgImage);
   //const [avatarImageSt, setAvatarImageSt] = useState(avatarImage);
/*
   useEffect(() => {
    setBgImageSt(bgImage);
    console.log("bg")
  }, [bgImage]);
*/
  useEffect(() => {
    store.subscribe(() => {
      //setBgImageSt(store.getState().bgImage)
      console.log("inicio")
      //setAvatarImageSt(store.getState().avatarImage)
    })
  }, []);

  const handleOnchangeBg = img => {
    //setBgImageSt(img);
    
    store.dispatch({
      type: "CROP_BG",
      bgImage: img
    })
  }

  const handleOnchangeAvatar = img => {
    //setAvatarImageSt(img);
    if(expanded === 'panel1'){
      console.log("change avatar")
      store.dispatch({
        type: "CROP_AVATAR",
        avatarImage: img
      })
    }
  }

  const ExpansionPanel = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiExpansionPanel);
  
  const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiExpansionPanelSummary);
  
  const ExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiExpansionPanelDetails);
  
  
  
  return (
    <div>
      <h2 onClick={handleChangeBg}>Configuration</h2>
      <div hidden={bgExpanded}>
        <ImageCrop src={bgImageSt} handleOnchange={handleOnchangeBg}/>
      </div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Avatar</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <EditableAvatar width={720} height={320} handleOnchange={handleOnchangeAvatar} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Header background</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ImageCrop src={bgImageSt} handleOnchange={handleOnchangeBg}/>

        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>




     

     <Button variant="contained" color="primary"  onClick={savePdf}>
          SavePdf
      </Button>
    </div>
  );
}


export default Configuration;
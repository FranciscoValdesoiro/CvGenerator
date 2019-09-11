import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import savePdf from '../cv/Utils'
import EditableAvatar from './components/editable-avatar/View';
import ImageCrop from './components/image-crop/View';
import store from '../../store'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';



const Configuration = props => {
  const [expanded, setExpanded] = React.useState('panel1');
  const [headerExpanded, setHeaderExpanded] = React.useState(false);
  const [nameText, setNameText] = React.useState('');
  const [jobText, setJobText] = React.useState('');

  const handleChange = panel => (event, newExpanded) => {
    console.log(newExpanded)
    setExpanded(newExpanded ? panel : false);
  };

  const handleChangeHeader = () => {
    handleChange('panel0');
    setHeaderExpanded(!headerExpanded);
  };
  
  const { 
    bgImage,
    //avatarImage,
   } = props

   //const [bgImageSt, setBgImageSt] = useState(bgImage);
   //const [avatarImageSt, setAvatarImageSt] = useState(avatarImage);
/*
   useEffect(() => {
    setBgImageSt(bgImage);
    console.log("bg")
  }, [bgImage]);
*/

  const handleOnchangeBg = img => {
    store.dispatch({
      type: "CROP_BG",
      bgImage: img
    })
  }

  const handleOnchangeAvatar = img => {
    if(expanded === 'panel1'){
      store.dispatch({
        type: "CROP_AVATAR",
        avatarImage: img
      })
    }
  }

  const handleOnchangeName = event => {
    const {value} = event.target
    setNameText(value);
    store.dispatch({
      type: "CHANGE_NAME",
      name: value
    })
  }

  const handleOnchangeJob = event => {
    const {value} = event.target
    setJobText(value);
    store.dispatch({
      type: "CHANGE_JOB",
      job: value
    })
  }

  // const ExpansionPanel = withStyles({
  //   root: {
  //     border: '1px solid rgba(0, 0, 0, .125)',
  //     boxShadow: 'none',
  //     '&:not(:last-child)': {
  //       borderBottom: 0,
  //     },
  //     '&:before': {
  //       display: 'none',
  //     },
  //     '&$expanded': {
  //       margin: 'auto',
  //     },
  //   },
  //   expanded: {},
  // })(MuiExpansionPanel);
  
  // const ExpansionPanelSummary = withStyles({
  //   root: {
  //     backgroundColor: 'rgba(0, 0, 0, .03)',
  //     borderBottom: '1px solid rgba(0, 0, 0, .125)',
  //     marginBottom: -1,
  //     minHeight: 56,
  //     '&$expanded': {
  //       minHeight: 56,
  //     },
  //   },
  //   content: {
  //     '&$expanded': {
  //       margin: '12px 0',
  //     },
  //   },
  //   expanded: {},
  // })(MuiExpansionPanelSummary);
  
  // const ExpansionPanelDetails = withStyles(theme => ({
  //   root: {
  //     padding: theme.spacing(2),
  //   },
  // }))(MuiExpansionPanelDetails);
  
  
  
  return (
    <div>
      <h2 onClick={handleChangeHeader}>Header</h2>
      <div hidden={headerExpanded}>
        
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
            <ImageCrop  handleOnchange={handleOnchangeBg}/>

          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Name and job</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextField
                id="standard-name"
                label="Name"
                value={nameText}
                onChange={handleOnchangeName}
                margin="normal"
                />
              <TextField
                id="standard-name"
                label="Job"
                value={jobText}
                onChange={handleOnchangeJob}
                margin="normal"
                />
          </ExpansionPanelDetails>
        </ExpansionPanel>

      </div>

      <h2 onClick={handleChangeHeader}>Aside</h2>
      <div hidden={headerExpanded}>
      
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>About Me</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextareaAutosize
              style={{
                width: '-webkit-fill-available'}}
              rowsMax={6}
              rows={6}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="About me."
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>Contact</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextareaAutosize
              style={{
                width: '-webkit-fill-available'}}
              rowsMax={6}
              rows={6}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Contact."
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography>Skills</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextareaAutosize
              style={{
                width: '-webkit-fill-available'}}
              rowsMax={6}
              rows={6}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Contact."
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <ExpansionPanelSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography>Social Networks</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextareaAutosize
              style={{
                width: '-webkit-fill-available'}}
              rowsMax={6}
              rows={6}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Contact."
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

      </div>

      <h2 onClick={handleChangeHeader}>Main Content</h2>
      <div hidden={headerExpanded}>
        <ExpansionPanel square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <ExpansionPanelSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography>Education</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextareaAutosize
              style={{
                width: '-webkit-fill-available'}}
              rowsMax={6}
              rows={6}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Contact."
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
          <ExpansionPanelSummary aria-controls="panel8d-content" id="panel8d-header">
            <Typography>Experience</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextareaAutosize
              style={{
                width: '-webkit-fill-available'}}
              rowsMax={6}
              rows={6}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Contact."
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
          <ExpansionPanelSummary aria-controls="panel9d-content" id="panel9d-header">
            <Typography>Aptitudes</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextareaAutosize
              style={{
                width: '-webkit-fill-available'}}
              rowsMax={6}
              rows={6}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Contact."
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

      </div>


     <Button variant="contained" color="primary"  onClick={savePdf}>
          SavePdf
      </Button>
    </div>
  );
}


export default Configuration;
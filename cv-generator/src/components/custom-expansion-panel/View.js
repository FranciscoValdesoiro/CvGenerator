import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';

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
})(MuiExpansionPanel);


export default function CustomExpansionPanel(props) {
  const { isExpanded, handleChange} = props
  
    const [expanded, setExpanded] = React.useState(isExpanded);

    const onchange = panel => (event, newExpanded) => {
        console.log("entre!")
        setExpanded(newExpanded ? panel : false);
        handleChange(!expanded)
      };

      /*
    const onchange = () => {
        console.log("entre!")
        //setExpanded(!expanded)
        handleChange(!expanded)
    }*/

    useEffect(() => {
        setExpanded(isExpanded)
        console.log("Cambio: ", isExpanded)
        //console.log("CambioE: ", expanded)
    }, [isExpanded])

  return (
    <div>
      <ExpansionPanel square expanded={expanded === true} onChange={onchange(true)}>
       {props.children}
      </ExpansionPanel>
    </div>
  );
}
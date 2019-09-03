import React from 'react';
import Button from '@material-ui/core/Button';
import savePdf from '../cv/Utils'

const Configuration = () => {
  return (
    <div>
     <h2>Configuration</h2>
     <Button variant="contained" color="primary"  onClick={savePdf}>
          SavePdf
      </Button>
    </div>
  );
}

export default Configuration;

import React from 'react';
import Button from '@material-ui/core/Button';
import savePdf from '../cv/Utils'
import EditableAvatar from '../cv/components/header/components/editable-avatar/View';
import ImageCrop from './components/image-crop/View';
import imageBg from '../../assets/img/headerBg.jpg'

const Configuration = () => {
  return (
    <div>
     <h2>Configuration</h2>
     <EditableAvatar width={295} height={295}/>

    <ImageCrop src={imageBg} />

     <Button variant="contained" color="primary"  onClick={savePdf}>
          SavePdf
      </Button>
    </div>
  );
}

export default Configuration;

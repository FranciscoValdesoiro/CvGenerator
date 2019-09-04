import React from 'react';
import Button from '@material-ui/core/Button';
import savePdf from '../cv/Utils'
import EditableAvatar from './components/editable-avatar/View';
import ImageCrop from './components/image-crop/View';
import imageBg from '../../assets/img/headerBg.jpg'

const Configuration = () => {

  const handleOnchangeBg = img => {
    console.log("imageBg: ", img)
  }

  const handleOnchangeAvatar = img => {
    console.log("imageAvatar: ", img)
  }

  return (
    <div>
     <h2>Configuration</h2>
     <EditableAvatar width={295} height={295} handleOnchange={handleOnchangeAvatar} />

    <ImageCrop src={imageBg} handleOnchange={handleOnchangeBg}/>

     <Button variant="contained" color="primary"  onClick={savePdf}>
          SavePdf
      </Button>
    </div>
  );
}




export default Configuration;

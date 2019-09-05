import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import savePdf from '../cv/Utils'
import EditableAvatar from './components/editable-avatar/View';
import ImageCrop from './components/image-crop/View';
import imageBg from '../../assets/img/headerBg.jpg'
import store from '../../store'

const Configuration = props => {

  const { 
    bgImage,
    avatarImage,
   } = props

   const [bgImageSt, setBgImageSt] = useState(bgImage);
   const [avatarImageSt, setAvatarImageSt] = useState(avatarImage);

   useEffect(() => {
    setBgImageSt(bgImage);
  }, [bgImage]);

  useEffect(() => {
    console.log("+++++++++++++++");
    store.subscribe(() => {
      console.log("*****************");
      setBgImageSt(store.getState().bgImage)
      setAvatarImageSt(store.getState().avatarImage)
    })
  }, []);

  const handleOnchangeBg = img => {
    setBgImageSt(img);
    store.dispatch({
      type: "CROP_BG",
      bgImage: img
    })
    console.log("imageBgAPP: ", img);
  }

  const handleOnchangeAvatar = img => {
    setAvatarImageSt(img);
    store.dispatch({
      type: "CROP_AVATAR",
      avatarImage: img
    })
    console.log("imageAvatarAPP: ", img)
  }

  return (
    <div>
     <h2>Configuration</h2>
     <EditableAvatar width={295} height={295} handleOnchange={handleOnchangeAvatar} />

    <ImageCrop src={bgImageSt} handleOnchange={handleOnchangeBg}/>

     <Button variant="contained" color="primary"  onClick={savePdf}>
          SavePdf
      </Button>
    </div>
  );
}




export default Configuration;

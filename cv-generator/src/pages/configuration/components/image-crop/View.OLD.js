import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";


const ImageCrop = () => {
  
  const [src, setSrc] = useState(null);
  const [imageRef, setImageRef] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const [croppedImageUrl, setCroppedImageUrl] = useState(null);
  const [crop, setCrop] = useState({
    unit: "cm",
    width: 21,
    aspect: 16 / 6
  });


  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
      setSrc(reader.result)
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // If you setState the crop in here you should return false.
  const onImageLoaded = image => {
    setImageRef(image);
  };

  const onCropComplete = crop => {
    makeClientCrop(crop);
  };

  const onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    setCrop( crop );
  };

  async function makeClientCrop(crop) {
    if (imageRef && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(
        imageRef,
        crop,
        "newFile.jpeg"
      );
      setCroppedImageUrl(croppedImageUrl);
      console.log("aqui: ", croppedImageUrl)
    }
  }

  function getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(fileUrl);
        setFileUrl(window.URL.createObjectURL(blob));
        console.log(fileUrl)
        console.log(croppedImageUrl)
        resolve(fileUrl);
      }, "image/jpeg");
    });
  }

  
    return (
      <div className="App">
        <div>
          <input type="file" onChange={onSelectFile} />
        </div>
        {src && (
          <ReactCrop
            src={src}
            crop={crop}
            onImageLoaded={onImageLoaded}
            onComplete={onCropComplete}
            onChange={onCropChange}
          />
        )}
        {croppedImageUrl && (
          <img alt="Crop" style={{ maxWidth: "100%" }} src={croppedImageUrl} />
        )}
      </div>
    );
  }


export default ImageCrop;

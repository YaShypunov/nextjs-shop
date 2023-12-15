'use client'
import React, { useCallback, useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

const ImagePicker = ({label, name}) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  const handlePickClick = useCallback(() => {
    imageInputRef.current.click();
  }, [imageInputRef])

  const handleImageChange = useCallback((event) => {
    const file  = event.target.files[0]
    if(!file) {
      setPickedImage(null);
      return
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    }
    fileReader.readAsDataURL(file);
  }, []);

  return (
    <div className={classes.picker}>
     <label htmlFor={name}>{label}</label>
     <div className={classes.controls}>
      <div className={classes.preview}>
        {!pickedImage && <p>Please pick an image</p>}
        {pickedImage && <Image src={pickedImage} alt='The preview image selected by user.' fill /> }
      </div>
      <input 
      type="file" 
      id={name} 
      accept='image/png, image/jpeg' 
      name={name} 
      className={classes.input} 
      ref={imageInputRef}
      onChange={handleImageChange}
      required
      />
      <button 
      className={classes.button} 
      type='button' 
      onClick={handlePickClick}
      >Pick an image
      </button>
     </div>
    </div>
  );
};

export default ImagePicker;

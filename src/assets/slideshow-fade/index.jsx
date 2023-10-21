import React from 'react'
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom';

const Slideshow = ({image, index, containerProps}) => {
    const navigate = useNavigate();
    const handleImgClick = (to) =>{
        navigate(to);
      }

  return (
    <div
    key={index}
    style={{...containerProps}}
    className={styles.imgContainer}
    onClick={()=>handleImgClick(image.to)} >
    <h1>{image.category}</h1>
  </div>
  )
}

export default Slideshow
import React from 'react'
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'

const Slideshow = ({image, index, containerProps, onClick}) => {

 

  return (
    <div
    key={index}
    style={{...containerProps}}
    onClick={onClick}
    className={styles.imgContainer} >
    <h1>{image.category}</h1>
  </div>
  )
}

export default Slideshow
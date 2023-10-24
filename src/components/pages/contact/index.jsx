import React, { useEffect } from 'react'
import styles from './index.module.css'
import {motion} from 'framer-motion'

const Contact = ({bgColor,setColor,color,setBgColor,btColor,wtColor}) => {

  useEffect(() => {
    setColor('white');
    setBgColor(btColor)
  }, [])

  return (
    <motion.div 
    initial={{ y: 20, zIndex: 2 }}
    animate={{opacity:1, y:0, zIndex: 1 }}
    transition={{duration: .3}}
    exit={{opacity: 0, y: -20, scale: .95}}
    className={styles.container}>
      <div className={styles.secta}>
        <h1>
          get in touch
        </h1>
      </div>
      </motion.div>
  )
}

export default Contact
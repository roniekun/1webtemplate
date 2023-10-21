import React from 'react'
import styles from './index.module.css'
import {motion} from 'framer-motion'

const Birthday = () => {
  return (
    <motion.div 
    initial={{ y: 100, zIndex: 2 }}
    animate={{opacity:1, y:0, zIndex: 1 }}
    transition={{duration: .3}}
    exit={{opacity: 0, y: -100, scale: .95}}
    className={styles.container}>
      Birthday
      </motion.div>
  )
}

export default Birthday
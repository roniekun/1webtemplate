import React from 'react'
import styles from './index.module.css'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <motion.div 
    initial={{opacity: 0, y: '50%' }}
          animate={{opacity:1, y:'0%' }}
          transition={{duration: .3}}
          exit={{opacity: 0, y: '-10%', scale: .95}}
    className={styles.container}>
      Contact
      </motion.div>
  )
}

export default Contact
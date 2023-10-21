import React from 'react'
import styles from './index.module.css'
import {motion} from 'framer-motion'


const Wedding = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: '50%' }}
          animate={{opacity:1, y:'0%' }}
          transition={{duration: .3}}
          exit={{opacity: 0, y: '-10%', scale: .95}}
     className={styles.container}>
      Wedding
      </motion.div>
  )
}

export default Wedding
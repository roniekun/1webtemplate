import React, { useEffect } from 'react'
import styles from './index.module.css'
import Socials from '../../assets/icons/soclals';

const Footer = ({color, bgColor, setColor}) => {

  const date = new Date();
  return (
    <div
    style={{color: color, background: bgColor}}
     className={styles.container}>
      <div>
        <Socials
        containerProps={{gap:'14px'}}
          linkProps={{color: color,
                                textTransform: 'uppercase',
                                fontSize: '12px'}}
          displayNames={true}/>
      </div>
      <h5 className={styles.date}>&copy; {date.getFullYear()} All Rights Reserved </h5>
       
    </div>
  )
}

export default Footer
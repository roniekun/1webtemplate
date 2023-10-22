import React from 'react'
import styles from './index.module.css'
import Socials from '../../assets/icons/soclals';

const Footer = () => {
  const date = new Date();
  return (
    <div className={styles.container}>
      <div>
        <Socials
        containerProps={{gap:'14px'}}
          linkProps={{color: 'whitesmoke',
                                textTransform: 'uppercase',
                                fontSize: '12px'}}
          displayNames={true}/>
      </div>
      <h5 className={styles.date}>&copy; {date.getFullYear()} All Rights Reserved </h5>
       
    </div>
  )
}

export default Footer
import React from 'react'
import styles from './index.module.css'
import Socials from '../../assets/icons/soclals';

const Footer = () => {
  const date = new Date();
  return (
    <div className={styles.container}>
      <div>
        <Socials
        containerProps={{gap:'2vw'}}
        iConProps={{width:'fit-content',
                            fill: 'black',
                            opacity: '.7'
                           }}
        displayIcons={true}/>
      </div>
      <h5 className={styles.date}>&copy;All Rights Reserved {date.getFullYear()}</h5>
       
    </div>
  )
}

export default Footer
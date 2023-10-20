import React from 'react'
import styles from './index.module.css'
import Socials from '../../assets/icons/soclals';

const Footer = () => {
  const date = new Date();
  return (
    <div className={styles.container}>
      <div>
        <Socials
        containerProps={{gap:'6px'}}
        linkProps={{width:'fit-content',
                            fontSize: '12px',
                            color: 'black',
                          fontFamily: 'Roboto Mono'}}
        displayNames={true}/>
      </div>
      <h5 className={styles.date}>&copy;All Rights Reserved {date.getFullYear()}</h5>
       
    </div>
  )
}

export default Footer
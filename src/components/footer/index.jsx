import React, { useEffect } from 'react'
import styles from './index.module.css'
import Navlinks from '../navigation/navlinks';
import Socials from '../../assets/icons/soclals';

const Footer = ({color, bgColor, setColor}) => {

  const date = new Date();
  return (
    <div
    style={{color: color, background: bgColor}}
     className={styles.container}>
        <div className={styles.sitemap}>
        <h4>Sitemap</h4>
        <Navlinks linkProps={{fontSize: '18px',
                                                textTransform: 'uppercase',
                                                color: color,
      }}
      containerProps={{ gap: '14px'
      }}
      />
        </div>
        <div className={styles.socialContainer}>
          <h4>Socials</h4>
        <Socials
        containerProps={{gap:'14px', flexWrap: 'wrap'}}
          linkProps={{color: color,
                                textTransform: 'uppercase',
                                fontSize: '18px'}}
          displayNames={true}/>
    
      </div>
      <h5 className={styles.date}>&copy; {date.getFullYear()} All Rights Reserved </h5>
       
    </div>
  )
}

export default Footer
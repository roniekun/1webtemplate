import React from 'react'
import styles from './index.module.css'
import { NavLink } from 'react-router-dom'
import Navlinks from '../navigation/navlinks'
import { Turn as Hamburger } from 'hamburger-react' //https://hamburger-react.netlify.app/

const Header = ({isMediumScreen, isToggleMenu, setToggleMenu,
                              color,setColor,bgColor, setBgColor}) => {
  const handleClick = () => {
    setToggleMenu(!isToggleMenu);
  }
  return (
    <div className={styles.container} 
      style={{color: color, backgroundColor: bgColor}} >
      <div className={styles.logoContainer}>
        <NavLink
            to='/'
            style={{color:color}}
             className={styles.logo}>
                        <h1>&copy;Brand Identity</h1>
        </NavLink>
        </div>
        <p style={{fontSize:'10px',}}>*This is a template*</p>
      {!isMediumScreen &&
      <div className={styles.navlinkContainer}>
        <Navlinks containerProps={{gap: '10px'}}
                          linkProps={{textTransform: 'capitalize',
                                                fontSize: '24px',
                                                fontWeight: '450',
                                                color: color}}/>
         </div>
       }
     { isMediumScreen &&  
     <div
     style={{padding: '0', zIndex: '999', marginInline: '2%'}}
     onClick={handleClick}>
     <Hamburger
     toggled={isToggleMenu}
      size={18}/>
       </div> }
        </div>
  )
}

export default Header
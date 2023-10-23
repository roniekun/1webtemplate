import React from 'react'
import styles from './index.module.css'
import { NavLink } from 'react-router-dom'
import Navlinks from '../navigation/navlinks'
import { Turn as Hamburger } from 'hamburger-react' //https://hamburger-react.netlify.app/

const Header = ({isMediumScreen, isToggleMenu, setToggleMenu}) => {
  const handleClick = () => {
    setToggleMenu(!isToggleMenu);
  }
  return (
    <div className={styles.container}  >
      <div className={styles.logoContainer}>
        <NavLink
            to='/'
             className={styles.logo}>
                        <h1>&copy;Brand Identity</h1>
        </NavLink>
        </div>
      {!isMediumScreen &&
      <div className={styles.navlinkContainer}>
        <Navlinks containerProps={{gap: '10px'}}
                          linkProps={{textTransform: 'capitalize',
                                                color: 'black'}}/>
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
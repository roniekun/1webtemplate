import styles from './Menu.module.css';
import { Squash as Hamburger } from 'hamburger-react'
const Menu = ({ showNavbar, setShowNavbar,color }) => {

  
  const handleClick = () => {
  setTimeout(() => {
        setShowNavbar(!showNavbar);
  }, 300);
  };

  return (
        <div 
        style={{border: showNavbar ? `1px solid ${color}`: 'none',
                   borderRadius:'3px', transitionDuration: '.3s'}}  
        className={styles.container} onClick={handleClick}>
        <Hamburger toggled={showNavbar} color={color}/>
        </div>
  );
};

export default Menu;

// https://hamburger-react.netlify.app/


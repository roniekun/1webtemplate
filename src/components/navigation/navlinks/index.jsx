import links from "./data"
import { NavLink, useNavigate } from "react-router-dom"
import styles from './index.module.css'

const Navlinks = ({linkProps, containerProps,setToggleMenu,isToggleMenu}) => {

const handleClick = (linkTo) => {
    setTimeout(() => {
        window.scrollTo({ top: 0 });
        setToggleMenu(false);
      }, 300);
};
  return (
  <div className={styles.container}
  style={{...containerProps}}>
    {links.map((link, index)=>(
        <NavLink 
        key={index} 
        to={link.to}
        onClick={handleClick}
        className={styles.link}
        style={{...linkProps}}>
             {link.text}
    </NavLink>
    ))}
  </div>
  )
}

export default Navlinks
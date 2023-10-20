import links from "./data"
import { NavLink } from "react-router-dom"
import styles from './index.module.css'

const Navlinks = ({linkProps, containerProps}) => {
  return (
  <div className={styles.container}
  style={{...containerProps}}>
    {links.map((link, index)=>(
        <NavLink 
        key={index} 
        to={link.to}
        className={styles.link}
        style={{...linkProps}}>
             {link.text}
    </NavLink>
    ))}
  </div>
  )
}

export default Navlinks
import { useEffect, useRef } from 'react'
import styles from './index.module.css'
import { gsap } from 'gsap'
import Navlinks from './navlinks'
import Socials from '../../assets/icons/soclals';

const Navigation = ({isToggleMenu, setToggleMenu, isMeddiumScreen}) => {
  const container = useRef(null);
  const content = useRef(null);

useEffect(() => {
  if (isToggleMenu){
  gsap.to(container.current,{width: '75%', x: 0 })
  gsap.to(content.current,{x: 0, opacity: 1,})
  }
  else {
    gsap.to(content.current,{opacity: 0, x:' 75%'})
    gsap.to(container.current,{  x: '-100%'})
  }
  return () => {
    null
  }
}, [isToggleMenu])

  return (
    <div 
    ref={container}
    className={styles.container} >
      <div className={styles.content}
                ref={content}>  
       < Navlinks
        isToggleMenu={isToggleMenu}
        setToggleMenu={setToggleMenu}
        containerProps={{flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center', 
                                        gap: '20px'}}
        linkProps={{color: 'whitesmoke',
                            fontSize: '32px',
                            textTransform: 'capitalize'}}/>
        
      <div className={styles.socialContainer}>
        <h5 className={styles.title}>Socials</h5>
      <Socials
      displayNames={true}
      containerProps={{width: '100%',
                                      gap: '10px',
                                        height: 'fit-content'}}
      linkProps={{fontSize: '3vw', 
                          fontFamily: 'monospace',
                            width: 'fit-content',
                            height: 'fit-content',
                            fontWeight: '400',
                            textTransform: 'uppercase',
                            color: 'lightgray' }} />
      </div>
      </div>
    </div>
  )
}

export default Navigation
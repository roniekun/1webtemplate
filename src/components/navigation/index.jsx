import { useEffect, useRef } from 'react'
import styles from './index.module.css'
import { gsap } from 'gsap'
import Navlinks from './navlinks'
import Socials from '../../assets/icons/soclals';

const Navigation = ({isToggleMenu, setToggleMenu, isMediumScreen, isSmallScreen}) => {
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
          <div className={styles.linksContainer}>
        <h5 className={styles.title}>Navigations</h5>
       < Navlinks
        isToggleMenu={isToggleMenu}
        setToggleMenu={setToggleMenu}
        containerProps={{flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center', 
                                        gap: '20px'}}
        linkProps={{color: 'lightgray',
                            fontSize: isSmallScreen ? '32px' : '45px',
                            fontWeight: '450',
                            fontFamily: 'Noto Serif Display, sans-serif',
                            textTransform: 'capitalize'}}/>
        </div>
      <div className={styles.socialContainer}>
        <h5 className={styles.title}>Socials</h5>
      <Socials
      displayNames={true}
      containerProps={{width: '100%',
                                      gap: '10px',
                                       flexWrap: 'wrap',
                                      height: 'fit-content'}}
      linkProps={{fontSize:  isSmallScreen ? '12px': '18px', 
                            width: 'fit-content',
                            height: 'fit-content',
                            textTransform: 'uppercase',
                            color: 'whitesmoke' }} />
      </div>
      </div>
    </div>
  )
}

export default Navigation
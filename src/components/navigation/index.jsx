import { useEffect, useRef } from 'react'
import styles from './index.module.css'
import { gsap } from 'gsap'

const Navigation = ({isToggleMenu, isMeddiumScreen}) => {
  const container = useRef(null);
  const content = useRef(null);

useEffect(() => {
  if (isToggleMenu){
  gsap.to(container.current,{width: '70%', x: 0 })
  gsap.to(content.current,{opacity: 1})
  }
  else {
    gsap.to(content.current,{opacity: 0})
    gsap.to(container.current,{width: '50%' , x: '-100%', delay: .3})
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

      </div>
    </div>
  )
}

export default Navigation
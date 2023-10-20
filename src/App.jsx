import { useState,useEffect, } from 'react'
import styles from './app.module.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import Navigation from './components/navigation'
import Lenis from '@studio-freight/lenis'

const App = () => {
  const [isMediumScreen, setMediumScreen] = useState(window.innerWidth<=1024)
  const [isToggleMenu, setToggleMenu] = useState (false)
  const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

  useEffect(() => {

    const handleResize = () => {
      setMediumScreen(window.innerWidth <= 1024);
      setToggleMenu(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMediumScreen]);


  return (
    <div className={styles.container} > 
 <Navigation
 isMediumScreen={isMediumScreen}
  isToggleMenu={isToggleMenu}/>

    <div className={styles.header}> 
         <Header isMediumScreen={isMediumScreen}
                        isToggleMenu={isToggleMenu}
                        setToggleMenu={setToggleMenu}/>
         </div>
      <div className={styles.main}> 
     <Main/>
     </div>
    <div className={styles.footer}>
      <Footer/>
      </div>
      

  
 
   
    </div>
  )
}

export default App
import { useState,useEffect, } from 'react'
import styles from './app.module.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import Navigation from './components/navigation'
import Lenis from '@studio-freight/lenis'

const App = ({bgColor,color,setColor,setBgColor ,setToggleMenu, isToggleMenu}) => {
  const [isMediumScreen, setMediumScreen] = useState(window.innerWidth<=1024)
  const [isSmallScreen, setSmallScreen] = useState(window.innerWidth<=600)
  const lenis = new Lenis()

  useEffect(() => {
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {

    const handleResize = () => {
      setMediumScreen(window.innerWidth <= 1024);
      setSmallScreen(window.innerWidth <= 600);
      setToggleMenu(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMediumScreen,isSmallScreen]);


  return (
 
    <div
    style={{backgroundColor: bgColor}}
     className={styles.container} > 
  
  <div className={styles.navigation}>
 <Navigation
 isMediumScreen={isMediumScreen}
 setToggleMenu={setToggleMenu}
 isSmallScreen={isSmallScreen}
  isToggleMenu={isToggleMenu}/>
</div>
    <div className={styles.header}> 
         <Header isMediumScreen={isMediumScreen}
                        isToggleMenu={isToggleMenu}
                        setToggleMenu={setToggleMenu}
                        setColor={setColor}
                        color={color}
                        setBgColor={setBgColor}
                        bgColor={bgColor}/>
       </div>
      <div className={styles.main}> 
     <Main setColor={setColor}
                  color={color}
                  setToggleMenu={setToggleMenu}
                  isToggleMenu={isToggleMenu}
                  setBgColor={setBgColor}
                  bgColor={bgColor}/>
     </div>
    <div className={styles.footer}>
      <Footer/>
      </div>
    </div>

  )
}

export default App
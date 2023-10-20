import styles from './index.module.css'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import About from '../pages/about'
import Contact from '../pages/contact'
import Home from '../pages/home'
import Portrait from '../pages/portraits'
import Wedding from '../pages/wedding'
import Birthday from '../pages/birthday'
import Product from '../pages/product'
import Family from '../pages/family'

const Main = () => {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <AnimatePresence>
      <Routes location={location} key={location.key}>     
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/about' element={<About/>}/>
              <Route exact path='/contact' element={<Contact/>}/>
              <Route exact path='/gallery-portraits' element={<Portrait/>}/>
              <Route exact path='/gallery-weddings' element={<Wedding/>}/>
              <Route exact path='/gallery-birthdays' element={<Birthday/>}/>
              <Route exact path='/gallery-products' element={<Product/>}/>
              <Route exact path='/gallery-events' element={<Family/>}/>
      </Routes>
      </AnimatePresence>
        </div>

  )
}

export default Main
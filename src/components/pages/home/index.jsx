import styles from './index.module.css';
import data from './data';
import { useState, useEffect} from 'react';
import {motion} from 'framer-motion'
import {ReactComponent  as Southeast } from '../../../assets/icons/svg/southeast.svg'
import Slideshow from '../../../assets/slideshow-fade';

const Home = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setSelected(selected);
    const interval = setInterval(() => {
      setSelected((prevSelected) => (prevSelected === data.length - 1 ? 0 : prevSelected + 1));
    }, 3500);
    
    return () => {
      clearInterval(interval); 
    };
  }, [selected]);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <motion.div
          initial={{ y: 100, zIndex: 2 }}
          animate={{opacity:1, y:0, zIndex: 1 }}
          transition={{duration: .3}}
          exit={{opacity: 0, y: -100, scale: .95}}
          className={styles.secta}>
            <div className={styles.category}>
              <h5>Category</h5>
              <div className={styles.lists}>
                {data.map((category, index) => (
                  <li key={index} onClick={() => handleClick(index)} >
                    {category.category}<span className={styles.svgContainer}>
                    <Southeast/>
                    </span> 
                  </li>
                ))}
        </div>
      </div>
      <div className={styles.gallery}>
          {data.map((image, index) => (
         <Slideshow 
         containerProps={{ opacity: index === selected ? 1 : 0,
          transitionDuration: '.7s',
           zIndex: index === selected ? 1 : -1}}
           image={image} key={index}/>
        ) )}
      </div>
    </motion.div>
  );
};

export default Home;

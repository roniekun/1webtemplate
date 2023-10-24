import styles from './index.module.css';
import data from './data';
import { useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion'
import {ReactComponent  as Southeast } from '../../../assets/icons/svg/southeast.svg'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Slideshow from '../../../assets/slideshow-fade';
import Socials from '../../../assets/icons/soclals';


const Home = () => {
  const [selected, setSelected] = useState(0);
  const sectb = useRef(null);

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

  const navigate = useNavigate();

  const handleImgClick = (to) =>{
    navigate(to);
    console.log('clicked');
  }

  const handleExplore = () => {
    sectb.current.scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
  <motion.div 
  initial={{ y: 20, zIndex: 2 }}
  animate={{opacity:1, y:0, zIndex: 1 }}
  transition={{duration: .3}}
  exit={{opacity: 0, y: -20, scale: .95}}
  className={styles.container}>
    <div  className={styles.secta}>

    <div className={styles.heroContainer}>
      <h1 className={styles.hero}>
          Journey to create timeless images
      </h1>
      <p>art of photography by Your Identity</p>
      </div>

      <div styles={styles.socialContainer}>
    <Socials displayIcons={true}
                    containerProps={{gap: '10px',paddingBlock: '.5em', height:'fit-content', }}
                    linkProps={{ aspectRatio:  '1/1', height: '20px', fill:'black'}}/>
                    
    </div>
      <button onClick={handleExplore} className={styles. explore}> Explore</button>
      
    </div>

    <motion.div
        ref={sectb}
          className={styles.sectb}>
            <div className={styles.category}>
              <h5>Category</h5>
              <div className={styles.lists}>
                {data.map((category, index) => (
                  <li key={index} onClick={() => handleClick(index)} >
                    {category.category}
                  </li>
                ))}
        </div>
      </div>
      <div className={styles.gallery}>
          {data.map((image, index) => (
         <Slideshow 
         onClick={()=>handleImgClick(image.to)}
         containerProps={{ opacity: index === selected ? 1 : 0,
          transitionDuration: '.7s',
           zIndex: index === selected ? 1 : -1}}
           image={image} key={index}/>
        ) )}
      </div>
    </motion.div>
    </motion.div>
  );
};

export default Home;


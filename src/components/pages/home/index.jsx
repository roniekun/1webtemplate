import styles from './index.module.css';
import data from './data';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

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

  const handleImgClick = (to) =>{
    navigate(to);
  }

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <h5>Category</h5>
        <div className={styles.lists}>
          {data.map((category, index) => (
            <li onClick={() => handleClick(index)} key={index}>
              {category.category}
            </li>
          ))}
        </div>
      </div>
      <div className={styles.gallery}>
          {data.map((image, index) => (
            <div
              key={index}
              style={{ opacity: index === selected ? 1 : 0,
                            transitionDuration: '.7s',
                              zIndex: index === selected ? 1 : -1}}
              className={styles.imgContainer}
              onClick={()=>handleImgClick(image.to)} >
              <h1>{image.category}</h1>
            </div>
        ) )}
      </div>
    </div>
  );
};

export default Home;

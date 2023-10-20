import React from 'react'
import { useEffect, useState } from 'react';
import styles from './Card.module.css'
import cardData from './data';

const Card = () => {
  const [selectedItem, setSelectedItem] =useState(0);

  const slideElements = document.querySelectorAll(`.${styles.slides}`);
    const slideArray = Array.from(slideElements);
    slideArray.forEach((slide, index) => {
      slideArray[1].style.color = 'blue';
    });
  
   
  useEffect(() => {
 
      const intervalId=setInterval(() => {
      setSelectedItem(selectedItem===cardData.length - 1 ? 0 : (prev)=> prev + 1);
      console.log(selectedItem)
    }, 5000);
   
      return () => clearInterval(intervalId);
    
  }, [selectedItem]); 


  return (
    <div className={styles.container}>
    <div className={styles.descContainer}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Sunt nesciunt expedita, sed, veritatis atque eius unde a fugiat accusantium quam
           nihil pariatur hic repudiandae error. Nemo ipsum vero eum officia.
           </p>
    </div>
    <div className={styles.slider}>
            {cardData.map((card, index) => (
              <div
               key={index} 
               style={{zIndex: selectedItem === index ? '1' : '-9999'}}
               className={styles.slides}>
                <img src="" alt="" />
                <h1>{selectedItem+1}</h1>
                <h5>{card.title}</h5>
              </div>
            ))}

    </div>
    </div>
  )
}

export default Card
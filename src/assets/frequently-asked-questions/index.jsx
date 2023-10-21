import { useState, useRef, useEffect } from 'react';
import data from './data';
import styles from './index.module.css';
import { gsap } from 'gsap';
import {ReactComponent as Active} from '../../../public/svg/active.svg';
import {ReactComponent as Inactive} from '../../../public/svg/inactive.svg';
import { motion, AnimatePresence } from 'framer-motion'

const FAQItems = () => {

  const [expandedIndex, setExpandedIndex] = useState(null);
  const answerRefs = data.map(() => useRef(null));

  // useEffect(() => {
    
  //   answerRefs.forEach(( answerRef, index) => {
  //     if (expandedIndex===index){
  //     gsap.to(answerRef.current, { duration: .3,  opacity: 1, duration: 1,
  //                                           css: {
  //                                           display:"block", 
  //                                           zIndex: 1, 
  //     },
    
  //   });}

  //   else{ gsap.to(answerRef.current, { y: -20,  duration: 1 ,css: {
  //                                                             display: "none", 
  //                                                             zIndex: -1}})}
      
  //   });
  // }, [expandedIndex]);

  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  return (
    <div className={styles.container}>
        {data.map((faqItem, index) => (
          <div
            className={styles.items}
            key={index}
            onClick={() => handleClick(index)}
          >
            <motion.div
            transition={{duration: 1}}
             key={index} className={styles.questionContainer}>
            <p className={styles.question}> 
            <span>{index + 1}.   </span> { faqItem.question}</p>
           { expandedIndex === index  ?   <Inactive/> : <Active/>}
            </motion.div>
        <AnimatePresence>
       { expandedIndex===index &&
              <motion.div 
              initial={{y: 5}}
              animate={{y: 0, transition:{duration: .3}}}
              exit={{y: -10, opacity: 0, transition:{duration: .5}}}
              className={styles.answerContainer}>
                <motion.p 
                 className={styles.answer}> 
                {faqItem.answer}
                </motion.p>
              </motion.div>}
              </AnimatePresence>
          </div>
        ))}
    </div>
  );
};

export default FAQItems;

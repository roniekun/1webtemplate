import { useState, useRef, useEffect } from 'react';
import data from './data';
import styles from './index.module.css';
import {ReactComponent as Active} from '../../../public/svg/active.svg';
import {ReactComponent as Inactive} from '../../../public/svg/inactive.svg';
import { motion, AnimatePresence } from 'framer-motion'

const FAQItems = ({linkProps, containerProps}) => {

  const [expandedIndex, setExpandedIndex] = useState(null);
  // const answerRefs = data.map(() => useRef(null));

    const answers = data.map(() => useRef(null));
    const questions = data.map(() => useRef(null));

  
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

  const handleMouseLeave = () => {
    setExpandedIndex(null);
  };
  
  return (
    <div className={styles.container}>
        {data.map((faqItem, index) => (
          <motion.div
            className={styles.items}
            key={index}
            onClick={() => handleClick(index)}
            onMouseLeave={()=> handleMouseLeave()}>

            <motion.div
            ref={questions[index]}
            transition={{duration: .5}}
             key={index} className={styles.questionContainer}>
            <p className={styles.question}> 
            <span>{index + 1}.   </span> { faqItem.question}</p>
           { expandedIndex === index  ?   <Inactive/> : <Active/>}
            </motion.div>
    
        <AnimatePresence>
          {/* {expandedIndex === index && */}
              <motion.div 
              ref={answers[index]}
              initial={{ opacity: 0}}
              transition={{duration: .3}}
              animate={{ opacity: 1,  height: expandedIndex ===index ? '100%' : '0px'}}
              exit={{ opacity:0 , height: '0px'}}
              className={styles.answerContainer}>
                <motion.p 
                 className={styles.answer}> 
                {faqItem.answer}
                </motion.p>
              </motion.div>
        </AnimatePresence>
          </motion.div>
        ))}
    </div>
  );
};

export default FAQItems;

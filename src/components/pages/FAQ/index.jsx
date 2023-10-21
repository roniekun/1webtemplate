import React from 'react'
import FAQItems from '../../../assets/frequently-asked-questions'
import styles from './index.module.css'

const FAQ = () => {
  return (
    <div
    className={styles.container}>
      <h2>Frequently Asked Questions</h2>
      <FAQItems/>
    </div>
  )
}

export default FAQ
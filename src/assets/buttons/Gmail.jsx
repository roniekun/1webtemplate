import React from 'react'
import styles from './Gmail.module.css'

const Gmail = ({customText, footerStyle}) => {

    // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG

  const email = 'roniebenitez01@gmail.com';
  const subject = 'Project Request';

  const handleClick = () => {
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoUrl;
  };
  return (
    <div className={styles.container}>
      <button style={footerStyle} className={styles.btn} onClick={handleClick}>{customText}
      </button>
  </div>
  )
}

export default Gmail
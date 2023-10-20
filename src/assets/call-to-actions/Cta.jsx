import React from 'react'
import Gmail from '../buttons/Gmail'
import styles from './Cta.module.css'

const Cta = ({isSmallScreen}) => {
    const openSMSApp = () => {
        const phoneNumber = '09453924586'; // Replace with the desired phone number
        const smsLink = `sms:${phoneNumber}`;
        window.location.href = smsLink;
    };

  return (
    <div className={styles.container}>
        
        <div className={styles.body}>
        <h1> Convey your audience to start contacting you.</h1>
        <div className={styles.btnContainer}> 
        <Gmail footerStyle={{textTransform: 'lowercase', width: isSmallScreen ? '100%' : ''}} customText={'roniebenitez01@gmail.com'}/>
        <button className={styles.btn} onClick={openSMSApp}>+639453924586</button>
        </div>
        </div>

    </div>
  )
}

export default Cta
import React, { useRef } from 'react'
import styles from './Contact.module.css'
import copyClipboardIcon from '../../resourse/images/copyClipboardIcon.jpg'

export default function Contact() {
  const emailRef = useRef();

  const copyTextToClipboard = () => {
    emailRef.current.select();
    document.execCommand("copy");
  }

  return (
    <div className={styles.container}>
      <div className="titleContainer">
        <p className="title">Kontakt</p>
      </div>
      <a className={styles.contactButton}
        href="https://github.com/Marcin-Migdal?tab=repositories">
        GitHub
      </a>
      <a className={styles.contactButton}
        href="https://www.linkedin.com/in/marcin-migdał-1320881b3">
        Linkedin
      </a>
      <div className={styles.contactContainer}>
        <label className={styles.emailLabel}>Email:</label>
        <textarea
          readOnly
          ref={emailRef}
          className={styles.contact}
          value="marcin.migdal1996@gmail.com"
        />
        <img
          onClick={copyTextToClipboard}
          className={styles.copyClipboardIcon}
          src={copyClipboardIcon} />
      </div>
    </div>
  )
}

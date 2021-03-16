import React from 'react'
import image from '../../images/portfolio.jpg'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.homeContainer}>
        <p className={styles.name}>Marcin Migdał</p>
        <div className={styles.contentContainer}>
          <img className={styles.image} src={image} alt="img" />
          <p className={styles.imageText}>Soft­ware Developer</p>
          <div className={styles.subContentContainer}>
            <p className={styles.description}>
              Nazywam się Marcin Migdał i chciał bym zostać Soft­ware Developerem.
          </p>
            <button className={styles.downloadButton}>
              Pobierz CV
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

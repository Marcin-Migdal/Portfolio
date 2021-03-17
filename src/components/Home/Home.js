import React from 'react'
import image from '../../images/portfolio.jpg'
import styles from './Home.module.css'
import cv from '../../CvFile/cv.pdf'

export default function Home() {
  return (
    <div className={styles.container}>
      <p className={styles.name}>Marcin Migdał</p>
      <div className={styles.contentContainer}>
        <img className={styles.image} src={image} alt="img" />
        <p className={styles.imageText}>Soft­ware Developer</p>
        <div className={styles.subContentContainer}>
          <p className={styles.description}>
            Nazywam się Marcin Migdał i jestem absolwentem Państwowej Wyższej Szkoły Zawodowej w Tarnowie.
          </p>
          <button className={styles.downloadButton}>
            <a href="../../CvFile/cv.pdf" download>
              Pobierz CV
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

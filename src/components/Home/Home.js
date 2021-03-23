import React from 'react'
import image from '../../resourse/images/portfolioImage.jpg'
import styles from './Home.module.css'
import cv from '../../resourse/cv.pdf'

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
          <button className="button">
            <a className="buttonText" href={cv} download>
              Pobierz CV
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

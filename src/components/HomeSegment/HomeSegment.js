import React from 'react'
import image from '../../images/portfolio.jpg'
import styles from './HomeSegment.module.css'

export default function HomeSegment() {
  return (
    <div className={styles.container}>
      <div className={styles.homeContainer}>
        <p className={styles.name}>Marcin Migdał</p>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt="img" />
          <p className={styles.imageText}>Soft­ware Developer</p>
          <span className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies lorem sapien, ac rhoncus turpis placerat a. In lacinia nunc et vestibulum scelerisque.
        </span>
        </div>
      </div>
    </div>
  )
}

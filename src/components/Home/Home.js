import React from 'react'
import image from '../../resourse/images/portfolioImage.jpg'
import styles from './Home.module.css'
import cv from '../../resourse/cv.pdf'
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <p className={styles.name}>Marcin Migdał</p>
      <div className={styles.contentContainer}>
        <img className={styles.image} src={image} alt="img" />
        <p className={styles.imageText}>Soft­ware Developer</p>
        <div className={styles.subContentContainer}>
          <p className={styles.description}>
            {t('home.shortDescription')}
          </p>
          <a className="button" href={cv} download>{t('home.downLoadButton')}</a>
        </div>
      </div>
    </div>
  )
}

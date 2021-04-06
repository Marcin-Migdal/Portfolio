import React from 'react'
import styles from './AboutMe.module.css'
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className="titleContainer">
        <p className="title">{t('navbar.aboutMe')}</p>
      </div>
      <span className={styles.description}>
        {t('aboutMe')}
      </span>
    </div>
  )
}

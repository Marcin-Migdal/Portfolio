import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './ProjectBox.module.css'

export default function ProjectBox({ backGroundIcon, demoUrl, handleClick }) {
  const { t } = useTranslation();

  return (
    <div className={styles.projectBox} style={{ backgroundImage: `url(${backGroundIcon})` }}>
      <div className={styles.overlayBackGround} />
      {demoUrl && <a className={styles.projectButton} href={demoUrl}>Demo</a>}
      <button className={styles.projectButton} onClick={handleClick}>
        {t('projects.details')}
      </button>
    </div>
  )
}

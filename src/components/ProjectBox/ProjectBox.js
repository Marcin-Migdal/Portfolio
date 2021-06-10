import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './ProjectBox.module.css'

export default function ProjectBox({ boxContent, handleClick }) {
  const { demoUrl, workInProgress, boxBackground } = boxContent;
  const { t } = useTranslation();

  return (
    <div className={styles.projectBox} style={{ backgroundImage: `url(${boxBackground})` }}>
      <div className={styles.overlayBackGround} >
        {workInProgress &&
          <p className={styles.workInProgressText}>{t('projects.workInProgess')}</p>
        }
      </div>
      {demoUrl && <a className={styles.projectButton} href={demoUrl}>Demo</a>}
      <button className={styles.projectButton} onClick={handleClick}>
        {t('projects.details')}
      </button>
    </div>
  )
}

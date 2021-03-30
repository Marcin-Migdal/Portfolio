import React, { useState } from 'react'
import styles from './ProjectComponent.module.css'
import { useTranslation } from 'react-i18next';

export default function ProjectComponent({ projectContentObject }) {
  const { t } = useTranslation();
  const [imageIndex, setImageIndex] = useState(0);
  const [mobileImage, setMobileImage] = useState(false);

  const { projectName, description, images, techStack, githubUrl } = projectContentObject;
  const projectImageArray = mobileImage ? images.mobile : images.desktop;

  const prevImage = () => {
    if (imageIndex - 1 >= 0) {
      setImageIndex(imageIndex - 1)
    }
  }

  const nextImage = () => {
    if (imageIndex + 1 < projectImageArray.length) {
      setImageIndex(imageIndex + 1)
    }
  }

  const setImageType = (imageType) => {
    setMobileImage(imageType)
  }

  return (
    <div className={styles.projectContainer}>
      <p className={styles.name}>{projectName}</p>
      {images.mobile &&
        <div className={styles.switchButtonsContainer}>
          <button
            className={!mobileImage ? `${styles.switchButton} ${styles.switchButtonActive}` : styles.switchButton}
            onClick={() => setImageType(false)}>
            Desktop
          </button >
          <button
            className={mobileImage ? `${styles.switchButton} ${styles.switchButtonActive}` : styles.switchButton}
            onClick={() => setImageType(true)}>
            Mobile
          </button>
        </div>
      }
      <div className={mobileImage ? styles.mobileImageContentContainer : styles.desktopImageContentContainer}>
        <div className={styles.imageContainer}>
          <button className={styles.imageButton} onClick={prevImage}>
            {'<'}
          </button>
          <div className={styles.upperRightHighlight} />
          <img className={mobileImage ? styles.mobileImage : styles.image} src={projectImageArray[imageIndex]} alt={projectName + "Image"} />
          <div className={mobileImage ? styles.lowerRightHighlight : styles.lowerLeftHighlight} />
          <button className={styles.imageButton} onClick={nextImage}>
            {'>'}
          </button>
        </div>
        <div className={mobileImage ? styles.sideDescriptionContainer : styles.bottomDescriptionContainer}>
          <div className={styles.nameContainer}>
            <hr className={styles.nameLine} />
            <p className={styles.projectSectionTitle}> {t('projects.titles.description')}</p>
            <hr className={styles.nameLine} />
          </div>
          <span className={styles.projectDescription}>
            {description}
          </span>
        </div>
      </div>
      <div className={styles.nameContainer}>
        <hr className={styles.nameLine} />
        <p className={styles.projectSectionTitleShort}> {t('projects.titles.technologies')}</p>
        <hr className={styles.nameLine} />
      </div>
      <div className={styles.techStackContainer}>
        <ul className={!techStack.backEnd ? styles.singleTechStackList : styles.techStackList}>
          <p className={styles.projectSectionSubTitle}>Front-End</p>
          {techStack.frontEnd.map((item, index) => {
            return (
              <li key={index} className={styles.listText}>
                {item}
              </li>
            )
          })}
        </ul>
        {techStack.backEnd &&
          <ul className={styles.techStackList}>
            <p className={styles.projectSectionSubTitle}>Back-End</p>
            {techStack.backEnd.map((item, index) => {
              return (
                <li key={index} className={styles.listText}>
                  {item}
                </li>
              )
            })}
          </ul>
        }
      </div>
      <a className="button" href={githubUrl}>GitHub</a>
    </div>
  )
}

import React, { useState } from 'react'
import styles from './ProjectComponent.module.css'
import { useTranslation } from 'react-i18next';
import ProjectImageComponent from '../ProjectImageComponent/ProjectImageComponent';

export default function ProjectComponent({ projectContentObject, closeProject }) {
  const { t } = useTranslation();
  const [mobileImage, setMobileImage] = useState(false);
  const [isImageVisible, setImageVisible] = useState(true);

  const { projectName, images, techStack, githubUrl, demoUrl } = projectContentObject;
  const projectImageArray = mobileImage ? images.mobile : images.desktop;

  const setImageType = (imageType) => {
    setMobileImage(imageType)
  }

  const TechStackList = ({ title, techStack }) => {
    return (
      <ul className={styles.techStackList}>
        <p className={styles.techStackTitle}>{title}</p>
        {techStack.map((item, index) => {
          return (
            <li key={index} className={styles.listText}>
              {item}
            </li>
          )
        })}
      </ul>
    )
  }

  const ProjectSectionTitle = ({ title }) => {
    return (
      <div className={styles.nameContainer}>
        <hr className={styles.nameLine} />
        <p className={styles.projectSectionTitle}>{title}</p>
        <hr className={styles.nameLine} />
      </div>
    )
  }

  const toggleDescription = () => {
    setImageVisible(!isImageVisible);
  }

  return (
    <div className={styles.projectContainer}>
      <p className={styles.name}>{t('projects.' + projectName + '.name')}</p>
      <div className={styles.buttonsContainer}>
        <button
          className={`button ${styles.customButton}`}
          onClick={closeProject}>
          {t('projects.backButton')}
        </button>
        <button
          disabled={!isImageVisible === true}
          className={!mobileImage && isImageVisible === true ? `${styles.switchButton} ${styles.active}` : styles.switchButton}
          onClick={() => setImageType(false)}>
          Desktop
        </button >
        <button
          disabled={!isImageVisible === true}
          className={mobileImage && isImageVisible === true ? `${styles.switchButton} ${styles.active}` : styles.switchButton}
          onClick={() => setImageType(true)}>
          Mobile
        </button >
        <button
          className={`button ${styles.customButton}`}
          onClick={toggleDescription}>
          {isImageVisible ? 'Obrazy' : 'Opis'}
        </button>
      </div>

      {isImageVisible ?
        <ProjectImageComponent
          projectImageArray={projectImageArray}
          demoUrl={demoUrl}
          projectName={projectName}
          mobileImage={mobileImage}
        /> :
        <>
          <div className={styles.descriptionContainer}>
            <ProjectSectionTitle title={t('projects.titles.description')} />
            <span className={styles.projectDescription}>
              {t('projects.' + projectName + '.description')}
            </span>
          </div>

          <ProjectSectionTitle title={t('projects.titles.technologies')} />

          <div className={techStack.backEnd ? styles.techStackContainer : styles.singleTechStackContainer}>
            <TechStackList techStack={techStack.frontEnd} title='Front-End' />
            {techStack.backEnd &&
              <TechStackList techStack={techStack.backEnd} title='Back-End' />
            }
          </div>
        </>
      }
      <a className="button" href={githubUrl}>GitHub</a>
    </div>
  )
}

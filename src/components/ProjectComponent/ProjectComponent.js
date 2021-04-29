import React, { useState } from 'react'
import styles from './ProjectComponent.module.css'
import { useTranslation } from 'react-i18next';
import ProjectImageComponent from '../ProjectImageComponent/ProjectImageComponent';

export default function ProjectComponent({ projectContentObject, closeProject }) {
  const { t } = useTranslation();
  const [mobileImage, setMobileImage] = useState(false);

  const { projectName, images, techStack, githubUrl, demoUrl } = projectContentObject;
  const projectImageArray = mobileImage ? images.mobile : images.desktop;

  const setImageType = (imageType) => {
    setMobileImage(imageType)
  }

  const ToggleButton = ({ condition, handleClick, text }) => {
    return (
      <button
        className={condition ? `${styles.switchButton} ${styles.switchButtonActive}` : styles.switchButton}
        onClick={handleClick}>
        {text}
      </button >
    )
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

  return (
    <div className={styles.projectContainer}>
      <p className={styles.name}>{t('projects.' + projectName + '.name')}</p>
      {images.mobile &&
        <div className={styles.switchButtonsContainer}>
          <button className={`button ${styles.buttonPosition}`} onClick={closeProject}>{t('projects.backButton')}</button>
          <ToggleButton condition={!mobileImage} text='Desktop' handleClick={() => setImageType(false)} />
          <ToggleButton condition={mobileImage} text='Mobile' handleClick={() => setImageType(true)} />
        </div>
      }
      <div className={mobileImage ? styles.mobileImageContentContainer : styles.desktopImageContentContainer}>
        <ProjectImageComponent
          projectImageArray={projectImageArray}
          demoUrl={demoUrl}
          projectName={projectName}
          mobileImage={mobileImage}
        />
        <div className={mobileImage ? styles.sideDescriptionContainer : styles.bottomDescriptionContainer}>
          <ProjectSectionTitle title={t('projects.titles.description')} />
          <span className={styles.projectDescription}>
            {t('projects.' + projectName + '.description')}
          </span>
        </div>
      </div>

      <ProjectSectionTitle title={t('projects.titles.technologies')} />

      <div className={techStack.backEnd ? styles.techStackContainer : styles.singleTechStackContainer}>
        <TechStackList techStack={techStack.frontEnd} title='Front-End' />
        {techStack.backEnd &&
          <TechStackList techStack={techStack.backEnd} title='Back-End' />
        }
      </div>
      <a className="button" href={githubUrl}>GitHub</a>
    </div>
  )
}

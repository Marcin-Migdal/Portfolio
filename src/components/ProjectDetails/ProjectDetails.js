import React, { useState } from 'react'
import styles from './ProjectDetails.module.css'
import { useTranslation } from 'react-i18next';
import ProjectImage from '../ProjectImage/ProjectImage';

export default function ProjectDetails({ projectObject, closeProject }) {
  const { t } = useTranslation();
  const [mobileImage, setMobileImage] = useState(false);
  const [isImageVisible, setImageVisible] = useState(true);

  const { projectName, images, techStack, githubUrl, demoUrl } = projectObject;
  const projectImageArray = mobileImage ? images.mobile : images.desktop;

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
      <p className={styles.projectName}>{t('projects.' + projectName + '.name')}</p>
      <div className={styles.buttonContainer}>
        <button
          className="button"
          onClick={closeProject}>
          {t('projects.backButton')}
        </button>
        {images.mobile &&
          <div className={styles.switchButtonContainer}>
            <button
              disabled={!isImageVisible}
              onClick={() => setMobileImage(false)}
              className={!mobileImage && isImageVisible ?
                `${styles.switchButton} ${styles.active}` :
                styles.switchButton
              }>
              Desktop
            </button >
            <button
              disabled={!isImageVisible}
              onClick={() => setMobileImage(true)}
              className={mobileImage && isImageVisible ?
                `${styles.switchButton} ${styles.active}` :
                styles.switchButton
              }>
              Mobile
            </button >
          </div>
        }
        <button
          className="button"
          onClick={toggleDescription}>
          {isImageVisible ? t('projects.details') : t('projects.imageButton')}
        </button>
      </div>

      {isImageVisible ?
        <ProjectImage
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

import React, { useState } from 'react'
import styles from './Projects.module.css'
import { useTranslation } from 'react-i18next';
import ProjectBox from '../ProjectBox/ProjectBox';
import ProjectComponent from '../ProjectDetails/ProjectDetails'
import { contentObjectArray } from '../../helpers/getContentObjectArray';

export default function Projects({ refArray }) {
  const { t } = useTranslation();
  const [projectObject, setProjectObject] = useState(false);

  const handleClick = (newProjectObject) => {
    setProjectObject(newProjectObject);
    refArray.current[1].scrollIntoView(
      {
        behavior: 'smooth',
        block: 'start'
      }
    )
  }

  return (
    <div className={styles.container}>
      <div className="titleContainer">
        <p className="title">{t('navbar.projects')}</p>
      </div>

      {!projectObject ?
        <div className={styles.projectsBoxContainer}>
          {contentObjectArray.map((content, index) => {
            return (
              <ProjectBox
                key={index}
                boxContent={content.data}
                handleClick={() => handleClick(content)} />
            )
          })}

          {contentObjectArray.length % 2 !== 0 &&
            <div className={styles.fillingEmptySpaceChilds} />
          }
        </div> :
        <ProjectComponent
          projectObject={projectObject}
          closeProject={() => setProjectObject(false)} />
      }
    </div>
  )
}

import React from 'react'
import styles from './Technologies.module.css'

export default function Technologies({ refArray }) {
  const skillsArray = ['Html', 'Css', 'JavaScript', 'React', 'Scrum', 'Git', 'Java', 'DataBase'];

  return (
    <div ref={el => refArray.current[1] = el} className={styles.container}>
      <p className="title">Umiejętności i Technologie</p>
      <div className={styles.skillsContainer}>
        {skillsArray.map((item, index) => {
          return (
            <div className={styles.skillBox} key={index}>
              <div className={styles.icon} />
              <p className={styles.skillName}>{item}</p>
              <span className={styles.skillDescription} >

              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

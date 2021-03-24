import React from 'react'
import styles from './SkillBox.module.css'

export default function SkillBox({ image, name, description, wide }) {
  return (
    <div className={styles.skillBox}>
      <img className={styles.icon} src={image} alt={name + " Icon"}/>
      <p className="subTitle">{name} </p>
      <span className={wide ? styles.wideSkillDescription: styles.skillDescription} >
        {description}
      </span>
    </div>
  )
}

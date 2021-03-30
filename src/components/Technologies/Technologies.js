import React from 'react'
import styles from './Technologies.module.css'

import html5Icon from '../../resourse/images/skills/html5.png'
import css3Icon from '../../resourse/images/skills/css3.png'
import datebaseIcon from '../../resourse/images/skills/database.png'
import gitIcon from '../../resourse/images/skills/git.png'
import javaIcon from '../../resourse/images/skills/java.png'
import javaScriptIcon from '../../resourse/images/skills/javaScript.png'
import reactIcon from '../../resourse/images/skills/react.png'
import scrumIcon from '../../resourse/images/skills/scrum.png'
import SkillBox from '../SkillBox/SkillBox'
import { useTranslation } from 'react-i18next';

export default function Technologies() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className="titleContainer">
        <p className="title">{t('technologies.title')}</p>
      </div>
      <div className={styles.skillsContainer}>
        <SkillBox
          image={html5Icon}
          name="Html"
          description={t('technologies.skillDescriptions.html')} />
        <SkillBox
          image={css3Icon}
          name="Css"
          description={t('technologies.skillDescriptions.css')} />
        <SkillBox
          image={javaScriptIcon}
          name="JavaScript"
          description={t('technologies.skillDescriptions.javaScript')} />
        <SkillBox
          image={reactIcon}
          name="React"
          description={t('technologies.skillDescriptions.react')}
          wide={true} />
        <SkillBox
          image={scrumIcon}
          name="Scrum"
          description={t('technologies.skillDescriptions.scrum')} />
        <SkillBox
          image={gitIcon}
          name="Git"
          description={t('technologies.skillDescriptions.git')} />
        <SkillBox
          image={javaIcon}
          name="Java"
          description={t('technologies.skillDescriptions.java')} />
        <SkillBox
          image={datebaseIcon}
          name={t('technologies.skillName.dataBase')}
          description={t('technologies.skillDescriptions.dataBase')} />
      </div>
    </div>
  )
}

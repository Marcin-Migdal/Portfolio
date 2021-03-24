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

export default function Technologies() {
  return (
    <div className={styles.container}>
      <div className="titleContainer">
        <p className="title">Umiejętności i Technologie</p>
      </div>
      <div className={styles.skillsContainer}>
        <SkillBox
          image={html5Icon}
          name="Html"
          description="Znajomość struktury dokumentu html, umiejętność posługiwania się tagami semantycznymi i non-semantycznymi" />
        <SkillBox
          image={css3Icon}
          name="Css"
          description="Umiejętność tworzenia responsywnych stron, płynnych przejść oraz kreatywność podczas tworzenia, dobra znajomość flex-box'u" />
        <SkillBox
          image={javaScriptIcon}
          name="JavaScript"
          description="Znajomość mechanizmów JavaScript jak i funkcjonalności ES6" />
        <SkillBox
          image={reactIcon}
          name="React"
          description={
            "Tworzenie aplikacji React, komunikowanie się z api za pomocą biblioteki Axios, znajomość react-hooks, react-redux, react-router. " +
            "Stylowania komponentów za pomocą klasycznego css jak i css-in-js. " +
            "Znajomość zewnętrznych bibliotek takich jak Material-Ui oraz i18next która umożliwia umiędzynarodowienie aplikacji"}
          wide={true} />
        <SkillBox
          image={scrumIcon}
          name="Scrum"
          description="Kilku miesięczne doświadczenie z pracy w zespole scrumowym gdzie miałem okazje poznać metodyke scrum. Potrafie odnaleźć się w zespole oraz nie boje się poznawać oraz uczyć nowych rzeczy" />
        <SkillBox
          image={gitIcon}
          name="Git"
          description="Podstawowe umiejętność korzystania z rozproszonego systemu kontroli wersji, kilku miesięczne doświadczenie z pracy przy komercyjnych projektach" />
        <SkillBox
          image={javaIcon}
          name="Java"
          description="Umiejętność pisania aplikaji za pomocą jezyka Java, tworzenie oprogramowania back-end za pomocą frameworku Spring-Boot, testowanie aplikacji za pomocą środowiska spock" />
        <SkillBox
          image={datebaseIcon}
          name="DataBase"
          description="Znajomość relacyjnych baz danych MySql jak i podstawowa umiejetność obsługiwania narzędzia MySql Workbench" />
      </div>
    </div>
  )
}

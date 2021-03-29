import React, { useState } from 'react'
import styles from './Projects.module.css'
import welcomeImage from '../../resourse/images/projects/munchtrack/desktop/welcomePage.png'
import extendedGameImage from '../../resourse/images/projects/munchtrack/desktop/extendedGame.png'
import gameImage from '../../resourse/images/projects/munchtrack/desktop/game.png'
import roomImage from '../../resourse/images/projects/munchtrack/desktop/room.png'
import roomsImage from '../../resourse/images/projects/munchtrack/desktop/rooms.png'
import searchBarImage from '../../resourse/images/projects/munchtrack/desktop/searchBar.png'
import searchResultImage from '../../resourse/images/projects/munchtrack/desktop/searchResult.png'
import settingsImage from '../../resourse/images/projects/munchtrack/desktop/settings.png'

import welcomeImageMobile from '../../resourse/images/projects/munchtrack/mobile/welcomePage.png'
import extendedGameImageMobile from '../../resourse/images/projects/munchtrack/mobile/extendedGame.png'
import gameImageMobile from '../../resourse/images/projects/munchtrack/mobile/game.png'
import roomImageMobile from '../../resourse/images/projects/munchtrack/mobile/room.png'
import roomsImageMobile from '../../resourse/images/projects/munchtrack/mobile/rooms.png'
import searchBarImageMobile from '../../resourse/images/projects/munchtrack/mobile/searchBar.png'
import searchResultImageMobile from '../../resourse/images/projects/munchtrack/mobile/searchResult.png'
import settingsImageMobile from '../../resourse/images/projects/munchtrack/mobile/settings.png'

export default function Projects() {
  const [imageIndex, setImageIndex] = useState(0);
  const [mobileImage, setMobileImage] = useState(false);

  const projectImageArray = mobileImage ?
    [
      welcomeImageMobile,
      roomsImageMobile,
      searchBarImageMobile,
      searchResultImageMobile,
      roomImageMobile,
      settingsImageMobile,
      gameImageMobile,
      extendedGameImageMobile
    ] :
    [
      welcomeImage,
      roomsImage,
      searchBarImage,
      searchResultImage,
      roomImage,
      settingsImage,
      gameImage,
      extendedGameImage
    ]

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
    <div className={styles.container}>
      <div className="titleContainer">
        <p className="title">Projekty</p>
      </div>
      <div className={styles.projectContainer}>
        <p className={styles.name}>Munchtrack</p>
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
        <div className={mobileImage ? styles.mobileImageContentContainer : styles.desktopImageContentContainer}>
          <div className={styles.imageContainer}>
            <button className={styles.imageButton} onClick={prevImage}>
              {'<'}
            </button>
            <div className={styles.upperRightHighlight} />
            <img className={mobileImage ? styles.mobileImage : styles.image} src={projectImageArray[imageIndex]} />
            <div className={styles.lowerLeftHighlight} />
            <button className={styles.imageButton} onClick={nextImage}>
              {'>'}
            </button>
          </div>
          <div className={mobileImage ? styles.sideDescriptionContainer : styles.bottomDescriptionContainer}>
            <div className={styles.nameContainer}>
              <hr className={styles.nameLine} />
              <p className={styles.projectSectionTitle}>Opis</p>
              <hr className={styles.nameLine} />
            </div>
            <span className={styles.projectDescription}>
              Serwis Munchtrack został stworzony z myślą aby umożliwić łatwiejsze śledzenie rozgrywki w grze karcianej munchkin,
              serwis umożliwia założenie konta użytkownika oraz stworzenie pokoi do których mogą dołączać inni użytkownicy,
              po dołączeniu do pokoju mogą oni zapisywać postęp swojej postaci oraz obserwować postacie swoich przeciwników.
            </span>
          </div>
        </div>
        <div className={styles.nameContainer}>
          <hr className={styles.nameLine} />
          <p className={styles.projectSectionTitleShort}>Technologie i biblioteki</p>
          <hr className={styles.nameLine} />
        </div>
        <div className={styles.techStackContainer}>
          <ul className={styles.techStackList}>
            <p className={styles.projectSectionSubTitle}>Front-End:</p>
            <li className={styles.listText}>
              React
            </li>
            <li className={styles.listText}>
              React-Redux
            </li>
            <li className={styles.listText}>
              Material-Ui
            </li>
            <li className={styles.listText}>
              i18next
            </li>
            <li className={styles.listText}>
              React-Icons
            </li>
            <li className={styles.listText}>
              React-Perfect-Scrollbar
            </li>
          </ul>

          <ul className={styles.techStackList}>
            <p className={styles.projectSectionSubTitle}>Back-End:</p>
            <li className={styles.listText}>
              Java
            </li>
            <li className={styles.listText}>
              Spring-Boot
            </li>
            <li className={styles.listText}>
              MySql
            </li>
          </ul>
        </div>
        <a className="button" href="https://github.com/Marcin-Migdal/Munchtrack-client">GitHub</a>
      </div>

      <hr className={styles.horizontalHr} />
    </div>
  )
}

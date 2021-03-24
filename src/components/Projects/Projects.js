import React, { useState } from 'react'
import styles from './Projects.module.css'
import editRoomImage from '../../resourse/images/projects/munchtrack/desktop/editRoom.png'
import extendedGameImage from '../../resourse/images/projects/munchtrack/desktop/extendedGame.png'
import gameImage from '../../resourse/images/projects/munchtrack/desktop/game.png'
import roomImage from '../../resourse/images/projects/munchtrack/desktop/room.png'
import roomsImage from '../../resourse/images/projects/munchtrack/desktop/rooms.png'
import searchBarImage from '../../resourse/images/projects/munchtrack/desktop/searchBar.png'
import searchResultImage from '../../resourse/images/projects/munchtrack/desktop/searchResult.png'
import settingsImage from '../../resourse/images/projects/munchtrack/desktop/settings.png'

export default function Projects() {
  const [imageIndex, setImageIndex] = useState(0);
  const projectImageArray = [editRoomImage, extendedGameImage, gameImage, roomImage, roomsImage, searchBarImage, searchResultImage, settingsImage]

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

  return (
    <div className={styles.container}>
      <div className="titleContainer">
        <p className="title">Projekty</p>
      </div>
      <p className="subTitle">Munchtrack</p>
      <div className={styles.projectContainer}>
        <div className={styles.imageContainer}>
          <button className={styles.imageButton} onClick={prevImage}>
            {'<'}
          </button>
          <div className={styles.upperRightHighlight} />
          <img className={styles.image} src={projectImageArray[imageIndex]} />
          <div className={styles.lowerLeftHighlight} />
          <button className={styles.imageButton} onClick={nextImage}>
            {'>'}
          </button>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.title}>Opis</p>
          <span className={styles.projectDescription}>
            Serwis Munchtrack został stworzony z myślą aby umożliwić łatwiejsze śledzenie rozgrywki w grze karcianej munchkin,
            serwis umożliwia założenie konta użytkownika, stworzenie pokoi do których mogą dołączać gracze,
            po dołączeniu do pokoju gracze mogą zapisywać postęp swojej postaci oraz obserwować postacie swoich przeciwników.
          </span>
          <hr className={styles.shortHorizontalHr} />
          <p className={styles.title}>Technologie i biblioteki</p>
          <div className={styles.techStackContainer}>
            <ul className={styles.techStackList}>
              <p className={styles.subTitle}>Front-End:</p>
              <li className={styles.listText}>
                - React
              </li>
              <li className={styles.listText}>
                - React-Redux
              </li>
              <li className={styles.listText}>
                - i18next
              </li>
              <li className={styles.listText}>
                - Material-Ui
              </li>
              <li className={styles.listText}>
                - React-Icons
              </li>
              <li className={styles.listText}>
                - React-Perfect-Scrollbar
              </li>
            </ul>
            <hr className={styles.verticalHr} />
            <ul className={styles.techStackList}>
              <p className={styles.subTitle}>Back-End:</p>
              <li className={styles.listText}>
                - Java
              </li>
              <li className={styles.listText}>
                - Spring-Boot
              </li>
              <li className={styles.listText}>
                - MySql
              </li>
            </ul>
          </div>
        </div>
        <a className="button" href="https://github.com/Marcin-Migdal/Munchtrack-client">GitHub</a>
      </div>
    </div>
  )
}

import React from 'react'
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
import ProjectComponent from '../ProjectComponent/ProjectComponent'

export default function Projects() {
  const munchtrackContentObject = {
    projectName: 'Munchtrack',
    description: 'Serwis Munchtrack został stworzony z myślą aby umożliwić łatwiejsze śledzenie rozgrywki w grze karcianej munchkin,' +
      'serwis umożliwia założenie konta użytkownika oraz stworzenie pokoi do których mogą dołączać inni użytkownicy,' +
      'po dołączeniu do pokoju mogą oni zapisywać postęp swojej postaci oraz obserwować postacie swoich przeciwników.',
    images: {
      mobile: [
        welcomeImageMobile,
        roomsImageMobile,
        searchBarImageMobile,
        searchResultImageMobile,
        roomImageMobile,
        settingsImageMobile,
        gameImageMobile,
        extendedGameImageMobile
      ],
      desktop: [
        welcomeImage,
        roomsImage,
        searchBarImage,
        searchResultImage,
        roomImage,
        settingsImage,
        gameImage,
        extendedGameImage
      ]
    },
    techStack: {
      frontEnd: ['React', 'React-Hooks', 'React-Redux', 'React-Router', 'Material-Ui', 'i18next', 'React-Icons', 'React-Perfect-Scrollbar'],
      backEnd: ['Java', 'Spring-Boot', 'MySql']
    },
    githubUrl: "https://github.com/Marcin-Migdal/Munchtrack-client"
  }

  const portfolioContentObject = {
    projectName: 'Portfolio',
    description: 'Moje portfolio',
    images: {
      mobile: [welcomeImageMobile],
      desktop: [welcomeImage]
    },
    techStack: {
      frontEnd: ['React', 'React-Hooks', 'i18next'],
      backEnd: false
    },
    githubUrl: "https://github.com/Marcin-Migdal/Portfolio"
  }

  const lotteryContentObject = {
    projectName: 'EthoLottery',
    description: 'loteria cyca',
    images: {
      mobile: [welcomeImageMobile],
      desktop: [welcomeImage]
    },
    techStack: {
      frontEnd: ['React', 'React-Hooks', 'web3'],
      backEnd: ['Solidity']
    },
    githubUrl: "https://github.com/Marcin-Migdal/Portfolio"
  }

  return (
    <div className={styles.container}>
      <div className="titleContainer">
        <p className="title">Projekty</p>
      </div>
      <ProjectComponent projectContentObject={munchtrackContentObject} />
      <hr className={styles.horizontalHr} />
      <ProjectComponent projectContentObject={portfolioContentObject} />
      <hr className={styles.horizontalHr} />
      <ProjectComponent projectContentObject={lotteryContentObject} />
    </div>
  )
}

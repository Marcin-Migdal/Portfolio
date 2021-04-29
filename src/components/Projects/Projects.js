import React, { useState } from 'react'
import styles from './Projects.module.css'
import { useTranslation } from 'react-i18next';

import welcomeImage from '../../resourse/images/projects/munchtrack/desktop/welcomePage.png'
import extendedGameImage from '../../resourse/images/projects/munchtrack/desktop/extendedGame.png'
import gameImage from '../../resourse/images/projects/munchtrack/desktop/game.png'
import roomImage from '../../resourse/images/projects/munchtrack/desktop/room.png'
import roomsImage from '../../resourse/images/projects/munchtrack/desktop/rooms.png'
import searchBarImage from '../../resourse/images/projects/munchtrack/desktop/searchBar.png'
import searchResultImage from '../../resourse/images/projects/munchtrack/desktop/searchResult.png'
import settingsImage from '../../resourse/images/projects/munchtrack/desktop/settings.png'
import ProjectComponent from '../ProjectComponent/ProjectComponent'

import welcomeImageMobile from '../../resourse/images/projects/munchtrack/mobile/welcomePage.png'
import extendedGameImageMobile from '../../resourse/images/projects/munchtrack/mobile/extendedGame.png'
import gameImageMobile from '../../resourse/images/projects/munchtrack/mobile/game.png'
import roomImageMobile from '../../resourse/images/projects/munchtrack/mobile/room.png'
import roomsImageMobile from '../../resourse/images/projects/munchtrack/mobile/rooms.png'
import searchBarImageMobile from '../../resourse/images/projects/munchtrack/mobile/searchBar.png'
import searchResultImageMobile from '../../resourse/images/projects/munchtrack/mobile/searchResult.png'
import settingsImageMobile from '../../resourse/images/projects/munchtrack/mobile/settings.png'

import portfolioHomeImage from '../../resourse/images/projects/portfolio/desktop/PortfolioHome.png'
import portfolioHomeImageMobile from '../../resourse/images/projects/portfolio/mobile/PortfolioHomeMobile.png'

import ethoLotteryImage from '../../resourse/images/projects/ethoLottery/desktop/ethoLottery.png'
import ethoLotteryEnteredImage from '../../resourse/images/projects/ethoLottery/desktop/ethoLotteryEntered.png'
import ethoLotteryImageMobile from '../../resourse/images/projects/ethoLottery/mobile/ethoLotteryMobile.png'
import ethoLotteryEnteredMobile from '../../resourse/images/projects/ethoLottery/mobile/ethoLotteryEnteredMobile.png'

import toDoListImage from '../../resourse/images/projects/toDoList/desktop/toDoList.png'
import addTaskImage from '../../resourse/images/projects/toDoList/desktop/addTask.png'
import emptyListImage from '../../resourse/images/projects/toDoList/desktop/emptyList.png'
import extendedTaskImage from '../../resourse/images/projects/toDoList/desktop/extendedTask.png'

import toDoListImageMobile from '../../resourse/images/projects/toDoList/mobile/toDoList.png'
import addTaskImageMobile from '../../resourse/images/projects/toDoList/mobile/addTask.png'
import emptyListImageMobile from '../../resourse/images/projects/toDoList/mobile/emptyList.png'
import extendedTaskImageMobile from '../../resourse/images/projects/toDoList/mobile/extendedTask.png'
import ProjectBox from '../ProjectBox/ProjectBox';

export default function Projects({ refArray }) {
  const { t } = useTranslation();
  const [projectObject, setProjectObject] = useState(false);

  const munchtrackContentObject = {
    projectName: 'munchtrack',
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
      backEnd: ['Java', 'Spring-Boot', 'JPA', 'MySql']
    },
    githubUrl: "https://github.com/Marcin-Migdal/Munchtrack-client",
    demoUrl: false
  }

  const portfolioContentObject = {
    projectName: 'portfolio',
    images: {
      mobile: [portfolioHomeImageMobile],
      desktop: [portfolioHomeImage]
    },
    techStack: {
      frontEnd: ['React', 'React-Hooks', 'i18next'],
      backEnd: false
    },
    githubUrl: "https://github.com/Marcin-Migdal/Portfolio",
    demoUrl: false
  }

  const lotteryContentObject = {
    projectName: 'ethoLottery',
    images: {
      mobile: [ethoLotteryImageMobile, ethoLotteryEnteredMobile],
      desktop: [ethoLotteryImage, ethoLotteryEnteredImage]
    },
    techStack: {
      frontEnd: ['React', 'React-Hooks', 'web3'],
      backEnd: ['Solidity']
    },
    githubUrl: "https://github.com/Marcin-Migdal/EthoLottery",
    demoUrl: "https://marcin-migdal.github.io/EthoLottery/"
  }

  const toDoListContentObject = {
    projectName: 'toDoList',
    images: {
      mobile: [emptyListImageMobile, toDoListImageMobile, extendedTaskImageMobile, addTaskImageMobile],
      desktop: [emptyListImage, toDoListImage, extendedTaskImage, addTaskImage]
    },
    techStack: {
      frontEnd: ['React', 'React-Hooks'],
    },
    githubUrl: "https://github.com/Marcin-Migdal/to-do-list",
    demoUrl: "https://marcin-migdal.github.io/to-do-list/"
  }

  const handleClick = (newProjectObject) => {
    setProjectObject(newProjectObject);
    refArray.current[1].scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const closeProject = () => {
    setProjectObject(false);
  }

  return (
    <div className={styles.container}>
      <div className="titleContainer">
        <p className="title">{t('navbar.projects')}</p>
      </div>

      {!projectObject ?
        <div className={styles.projectsBoxContainer}>
          <ProjectBox
            backGroundIcon={welcomeImage}
            handleClick={() => handleClick(munchtrackContentObject)} />
          <ProjectBox
            backGroundIcon={portfolioHomeImage}
            handleClick={() => handleClick(portfolioContentObject)} />
          <ProjectBox
            backGroundIcon={ethoLotteryImage}
            handleClick={() => handleClick(lotteryContentObject)}
            demoUrl={lotteryContentObject.demoUrl} />
          <ProjectBox
            backGroundIcon={toDoListImage}
            handleClick={() => handleClick(toDoListContentObject)}
            demoUrl={toDoListContentObject.demoUrl} />
        </div> :
        <ProjectComponent projectContentObject={projectObject} closeProject={closeProject} />
      }
    </div>
  )
}

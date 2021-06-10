
import welcomeImage from '../resourse/images/projects/munchtrack/desktop/welcomePage.png'
import extendedGameImage from '../resourse/images/projects/munchtrack/desktop/extendedGame.png'
import gameImage from '../resourse/images/projects/munchtrack/desktop/game.png'
import roomImage from '../resourse/images/projects/munchtrack/desktop/room.png'
import roomsImage from '../resourse/images/projects/munchtrack/desktop/rooms.png'
import searchBarImage from '../resourse/images/projects/munchtrack/desktop/searchBar.png'
import searchResultImage from '../resourse/images/projects/munchtrack/desktop/searchResult.png'
import settingsImage from '../resourse/images/projects/munchtrack/desktop/settings.png'

import welcomeImageMobile from '../resourse/images/projects/munchtrack/mobile/welcomePage.png'
import extendedGameImageMobile from '../resourse/images/projects/munchtrack/mobile/extendedGame.png'
import gameImageMobile from '../resourse/images/projects/munchtrack/mobile/game.png'
import roomImageMobile from '../resourse/images/projects/munchtrack/mobile/room.png'
import roomsImageMobile from '../resourse/images/projects/munchtrack/mobile/rooms.png'
import searchBarImageMobile from '../resourse/images/projects/munchtrack/mobile/searchBar.png'
import searchResultImageMobile from '../resourse/images/projects/munchtrack/mobile/searchResult.png'
import settingsImageMobile from '../resourse/images/projects/munchtrack/mobile/settings.png'

import portfolioHomeImage from '../resourse/images/projects/portfolio/desktop/PortfolioHome.png'
import portfolioHomeImageMobile from '../resourse/images/projects/portfolio/mobile/PortfolioHomeMobile.png'
import ethoLotteryImage from '../resourse/images/projects/ethoLottery/desktop/ethoLottery.png'
import ethoLotteryEnteredImage from '../resourse/images/projects/ethoLottery/desktop/ethoLotteryEntered.png'
import ethoLotteryImageMobile from '../resourse/images/projects/ethoLottery/mobile/ethoLotteryMobile.png'
import ethoLotteryEnteredMobile from '../resourse/images/projects/ethoLottery/mobile/ethoLotteryEnteredMobile.png'

import toDoListImage from '../resourse/images/projects/toDoList/desktop/toDoList.png'
import addTaskImage from '../resourse/images/projects/toDoList/desktop/addTask.png'
import emptyListImage from '../resourse/images/projects/toDoList/desktop/emptyList.png'
import extendedTaskImage from '../resourse/images/projects/toDoList/desktop/extendedTask.png'

import toDoListImageMobile from '../resourse/images/projects/toDoList/mobile/toDoList.png'
import addTaskImageMobile from '../resourse/images/projects/toDoList/mobile/addTask.png'
import emptyListImageMobile from '../resourse/images/projects/toDoList/mobile/emptyList.png'
import extendedTaskImageMobile from '../resourse/images/projects/toDoList/mobile/extendedTask.png'

import signinImage from '../resourse/images/projects/chatApp/desktop/signin.png'
import signupImage from '../resourse/images/projects/chatApp/desktop/signup.png'
import addingUserToChatImage from '../resourse/images/projects/chatApp/desktop/addingUserToChat.png'
import addedUserToChatImage from '../resourse/images/projects/chatApp/desktop/addedUserToChat.png'
import sendMessageImage from '../resourse/images/projects/chatApp/desktop/sendMessage.png'

import reservationHomeImage from '../resourse/images/projects/reservationApp/desktop/reservationHome.png';
import reservationSummaryImage from '../resourse/images/projects/reservationApp/desktop/reservationSummary.png';
import reservedSeatsImage from '../resourse/images/projects/reservationApp/desktop/reservedSeats.png';
import seatsImage from '../resourse/images/projects/reservationApp/desktop/seats.png';

const munchtrackContentObject = {
  data: {
    projectName: 'munchtrack',
    boxBackground: welcomeImage,
    demoUrl: false,
    workInProgress: false,
  },
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
    frontEnd: [
      'React',
      'React-Hooks',
      'React-Redux',
      'React-Router',
      'Material-Ui',
      'i18next',
      'React-Icons',
      'React-Perfect-Scrollbar'],
    backEnd: [
      'Java',
      'Spring-Boot',
      'JPA',
      'MySql'
    ]
  },
  githubUrl: "https://github.com/Marcin-Migdal/Munchtrack-client",
};

const portfolioContentObject = {
  data: {
    projectName: 'portfolio',
    boxBackground: portfolioHomeImage,
    demoUrl: false,
    workInProgress: false
  },
  images: {
    mobile: [portfolioHomeImageMobile],
    desktop: [portfolioHomeImage]
  },
  techStack: {
    frontEnd: ['React', 'React-Hooks', 'i18next'],
    backEnd: false
  },
  githubUrl: "https://github.com/Marcin-Migdal/Portfolio",
};

const lotteryContentObject = {
  data: {
    projectName: 'ethoLottery',
    boxBackground: ethoLotteryImage,
    demoUrl: "https://marcin-migdal.github.io/EthoLottery/",
    workInProgress: false
  },
  images: {
    mobile: [ethoLotteryImageMobile, ethoLotteryEnteredMobile],
    desktop: [ethoLotteryImage, ethoLotteryEnteredImage]
  },
  techStack: {
    frontEnd: ['React', 'React-Hooks', 'web3'],
    backEnd: ['Solidity']
  },
  githubUrl: "https://github.com/Marcin-Migdal/EthoLottery",
};

const toDoListContentObject = {
  data: {
    projectName: 'toDoList',
    boxBackground: toDoListImage,
    demoUrl: "https://marcin-migdal.github.io/to-do-list/",
    workInProgress: false
  },
  images: {
    mobile: [
      emptyListImageMobile,
      toDoListImageMobile,
      extendedTaskImageMobile,
      addTaskImageMobile
    ],
    desktop: [
      emptyListImage,
      toDoListImage,
      extendedTaskImage,
      addTaskImage
    ]
  },
  techStack: {
    frontEnd: ['React', 'React-Hooks'],
  },
  githubUrl: "https://github.com/Marcin-Migdal/to-do-list",
};

const chatAppContentObject = {
  data: {
    projectName: 'chatApp',
    boxBackground: signinImage,
    demoUrl: "https://chat-app-two-taupe.vercel.app",
    workInProgress: true
  },
  images: {
    desktop: [
      signinImage,
      signupImage,
      addingUserToChatImage,
      addedUserToChatImage,
      sendMessageImage
    ]
  },
  techStack: {
    frontEnd: [
      'React',
      'React-Hooks',
      'React-Router',
      'Semantic-UI',
      'Firebase',
      'Chat-Engine',
      'Formik'
    ],
  },
  githubUrl: "https://github.com/Marcin-Migdal/Chat-web-app",
};

const reservationAppContentObject = {
  data: {
    projectName: 'reservationApp',
    boxBackground: reservationHomeImage,
    demoUrl: "https://rezerwacja-miejsc.vercel.app",
    workInProgress: true
  },
  images: {
    desktop: [
      reservationHomeImage,
      seatsImage,
      reservedSeatsImage,
      reservationSummaryImage,
    ]
  },
  techStack: {
    frontEnd: [
      'React',
      'React-Hooks',
      'React-Router',
      'React-Redux',
      'Semantic-UI',
      'Jest',
      'Immer'
    ],
  },
  githubUrl: "https://github.com/Marcin-Migdal/rezerwacja-miejsc",
};

export const contentObjectArray = [
  munchtrackContentObject,
  toDoListContentObject,
  chatAppContentObject,
  lotteryContentObject,
  portfolioContentObject,
  reservationAppContentObject
];

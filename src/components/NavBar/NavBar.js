import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import styles from './NavBar.module.css'

export default function NavBar({ refArray }) {
  const { t, i18n } = useTranslation();
  const [toggle, toggleOverlay] = useState(false);
  const [navbar, toggleNavBar] = useState(false);

  useEffect(() => {
    handleSrcoll()
    window.addEventListener('scroll', handleSrcoll)
    return () => {
      window.removeEventListener('scroll', handleSrcoll)
    }
  }, []);

  const handleSrcoll = () => {
    if (window.scrollY > 0) {
      toggleNavBar(true)
    } else {
      toggleNavBar(false)
    }
  }

  const handleClick = () => {
    toggleOverlay(!toggle)
  }

  const scroolTo = (ref, block) => {
    toggle && toggleOverlay(false)
    ref.scrollIntoView({ behavior: 'smooth', block: block })
  }

  const scroolToTop = () => {
    toggle && toggleOverlay(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const NavBarList = ({ style }) => {
    return (
      <ul className={style}>
        <li className={styles.listElement}>
          <p className={styles.navBarSectionText} onClick={scroolToTop}>
            {t('navbar.home')}
          </p>
        </li>
        <li className={styles.listElement}>
          <p className={styles.navBarSectionText} onClick={() => scroolTo(refArray.current[0], 'center')}>
            {t('navbar.aboutMe')}
          </p>
        </li>
        <li className={styles.listElement}>
          <p className={styles.navBarSectionText} onClick={() => scroolTo(refArray.current[1], 'start')}>
            {t('navbar.projects')}
          </p>
        </li>
        <li className={styles.listElement}>
          <p className={styles.navBarSectionText} onClick={() => scroolTo(refArray.current[2], 'start')}>
            {t('navbar.technologies')}
          </p>
        </li>
        <li className={styles.listElement}>
          <p className={styles.navBarSectionText} onClick={() => scroolTo(refArray.current[3], 'start')}>
            {t('navbar.contact')}
          </p>
        </li>
        <div className={styles.buttonContainer}>
          <button
            className={styles.lngButton}
            onClick={() => changeLanguage('en')}>
            EN
          </button>/
          <button
            className={styles.lngButton}
            onClick={() => changeLanguage('pl')}>
            PL
          </button>
        </div>
      </ul>
    )
  }

  return (
    <>
      <div className={navbar ? `${styles.navBar} ${styles.active}` : styles.navBar}>
        <NavBarList style={styles.list} />
      </div>
      <button className={styles.navIcon} onClick={handleClick}>
        <span className={toggle ? `${styles.line} ${styles.open}` : styles.line} />
        <span className={toggle ? `${styles.line} ${styles.open}` : styles.line} />
        <span className={toggle ? `${styles.line} ${styles.open}` : styles.line} />
      </button>
      <div className={toggle ? `${styles.overlay} ${styles.open}` : `${styles.overlay} ${styles.closed}`}>
        <NavBarList style={styles.overlayMenu} />
      </div>
    </>
  )
}

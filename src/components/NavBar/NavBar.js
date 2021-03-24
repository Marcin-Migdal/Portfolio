import React, { useEffect, useState } from 'react'
import styles from './NavBar.module.css'

export default function NavBar({ refArray }) {
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

  const NavBarList = ({ style }) => {
    return (
      <ul className={style}>
        <li className={styles.listElement}>
          <p className={styles.navBarSectionText} onClick={scroolToTop}>
            Strona główna
          </p>
        </li>
        <li className={styles.listElement}>
          <p className={styles.navBarSectionText} onClick={() => scroolTo(refArray.current[0], 'center')}>
            O mnie
          </p>
        </li>
        <li className={styles.listElement}>
          <p className={styles.navBarSectionText} onClick={() => scroolTo(refArray.current[1], 'start')}>
            Projekty
          </p>
        </li>
        <li className={styles.listElement}>
          <p className={styles.navBarSectionText} onClick={() => scroolTo(refArray.current[2], 'start')}>
            Technologie
          </p>
        </li>
        <li className={styles.listElement}>
          <p className={styles.navBarSectionText} onClick={() => scroolTo(refArray.current[3], 'start')}>
            Kontakt
          </p>
        </li>
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

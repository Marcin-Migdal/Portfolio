import React, { useEffect, useState } from 'react'
import styles from './NavBar.module.css'

export default function NavBar() {
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

  const NavBarList = ({ style }) => {
    return (
      <ul className={style}>
        <li>
          <p className={styles.navBarSectionText}>
            O mnie
        </p>
        </li>
        <li>
          <p className={styles.navBarSectionText}>
            Technologie
        </p>
        </li>
        <li>
          <p className={styles.navBarSectionText}>
            Projekty
        </p>
        </li>
        <li>
          <p className={styles.navBarSectionText}>
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
        <span className={toggle ? `${styles.line} ${styles.open}` : `${styles.line} ${styles.closed}`} />
        <span className={toggle ? `${styles.line} ${styles.open}` : `${styles.line} ${styles.closed}`} />
        <span className={toggle ? `${styles.line} ${styles.open}` : `${styles.line} ${styles.closed}`} />
      </button>
      <div className={toggle ? `${styles.overlay} ${styles.open}` : `${styles.overlay} ${styles.closed}`}>
        <NavBarList style={styles.overlayMenu} />
      </div>
    </>
  )
}

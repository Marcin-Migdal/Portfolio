import React, { useState } from 'react'
import styles from './NavBar.module.css'

export default function NavBar() {
  const [toggle, toggleNav] = useState(false);

  return (
    <div className={styles.navBarContainer}>
      <ul className={styles.list}>
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
      <button className={styles.navIcon} onClick={() => toggleNav(!toggle)}>
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </button>
      <div className={toggle ? styles.OverlayOpen : styles.OverlayClosed}>
        <ul className={styles.OverlayMenu}>
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
      </div>
    </div >
  )
}

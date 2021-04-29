import React, { useState } from 'react'
import styles from './ProjectImageComponent.module.css'
import backArrowIcon from '../../resourse/images/backArrow.png'

export default function ProjectImageComponent({ projectImageArray, demoUrl, projectName, mobileImage }) {
  const [imageIndex, setImageIndex] = useState(0);

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

  const ArrowImageButton = ({ condition, handleClick, alt }) => {
    return (
      <>
        {(projectImageArray.length > 1 && condition) ?
          <div className={styles.imageArrowButton} onClick={handleClick}>
            <img className={styles.arrowIcon} src={backArrowIcon} alt={alt} />
          </div> :
          <div className={styles.emptyDummyButton}></div>
        }
      </>
    )
  }

  return (
    <div className={styles.imageContainer}>
      <div className={styles.upperRightHighlight} />
      <div className={mobileImage ? styles.lowerRightHighlight : styles.lowerLeftHighlight} />
      <img
        className={mobileImage ? styles.mobileImage : styles.image}
        src={projectImageArray[imageIndex]}
        alt={projectName + "Image"} />

      <div className={styles.overlayBackGround} />
      <div className={styles.overlay} >
        <ArrowImageButton
          condition={imageIndex > 0}
          handleClick={prevImage}
          alt='previous' />

        {demoUrl && <a className={styles.demoButton} href={demoUrl}>Demo</a>}

        <ArrowImageButton
          condition={imageIndex + 1 < projectImageArray.length}
          handleClick={nextImage}
          alt='next' />
      </div >

    </div>
  )
}

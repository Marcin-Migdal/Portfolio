import React from 'react'
import styles from './AboutMe.module.css'

export default function AboutMe({ refArray }) {
  return (
    <div ref={el => refArray.current[0] = el} className={styles.container}>
      <div className={styles.backgroundColor}>
        <div className="titleContainer">
          <p className="title">O mnie</p>
        </div>
        <span className={styles.description}>
          Od lipca 2019 roku odbyłem cztero miesięczny staż w firmie Hcm Deck,<br className={styles.breakLine} />
        gdzie byłem stażystą na stanowisku Junior Java Developer.
        Do moich obowiązków należało tworzenie komponentów mikroserwisów w technologi
        Java Spring jak również tworzenie komponentów front-end w technologi React,
        to tam po raz pierwszy miałem styczność z tworzeniem prawdziwych aplikaji <br className={styles.breakLine} />
        front-end.
      </span>
        <br />
        <span className={styles.description}>
          Zdobyłem tytuł Inżyniera w czerwcu 2020 roku na kierunku Informatyka Stosowana, ze specjalizacją w zakresie inżynierii systemów informatycznych.<br className={styles.breakLine} />
        W momencie zakończenia studiów zdecydowałem że chce robić to co sprawia mi największą przyjemność w dziedzinie programowania, czyli tworzenie aplikacji front-end.
      </span>
        <span className={styles.description}>
          Wybrałem tworzenie aplikacji <br className={styles.breakLine} /> front-end ponieważ tworzenie nowych aplikacji
        oraz usprawnianie tych przy których obecnie pracuje daje mi wiele satysfakcji,
        a poznawanie nowych technologii oraz funkcjonalości dzięki którym będę mógł
        usprawnić moje projekty napędza moją ciekawość.
      </span>
        <div className={styles.buttonContainer}>
          <button className="button">
            <a className="buttonText" href="https://github.com/Marcin-Migdal?tab=repositories">GitHub</a>
          </button>
          <button className="button">
            <a className="buttonText" href="https://www.linkedin.com/in/marcin-migdał-1320881b3">Linkedin</a>
          </button>
        </div>
      </div>
    </div>
  )
}

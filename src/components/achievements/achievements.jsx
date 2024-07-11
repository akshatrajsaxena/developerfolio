import React from "react";
import styles from "./achievements.module.css";
import { getImageUrl } from "../../utils.js";

export const Achievements = () => {
  return (
    <section className={styles.container} id="achievements">
      <h2 className={styles.title}>Achievements</h2>
      <div className={styles.content}>
        <ul className={styles.achievementsItems}>
          <li className={styles.achievementsItem}>
          <img src={getImageUrl("achievements/React_icon.png")} alt="React icon" className={styles.ReactImage} />
            <div className={styles.achievementsItemText}>
              <h3>React Developer</h3>
              <p>
                Being a Fanatic of React, I have built multiple projects using React and its ecosystem. I have also contributed to open-source projects and have written articles on React development. In fact, the website you are currently viewing is built using React.
              </p>
            </div>
          </li>
          <li className={styles.achievementsItem}>
            <img src={getImageUrl("achievements/codeforces.png")} alt="Trophy icon" className={styles.codeforcesImage} />
            <div className={styles.achievementsItemText}>
              <h3 style={{ color: "cyan" }}>Codeforces Specialist</h3>
              <p>
                Achieved the Codeforces Specialist title with consistent performance in competitive programming contests. With Constant dedication and daily practise, I have solved over 200+ problems and my next goal is to reach the Expert level.
              </p>
            </div>
          </li>
          <li className={styles.achievementsItem}>
          <img src={getImageUrl("achievements/blockchain.png")} alt="Trophy icon" className={styles.blockchainImage} />
            <div className={styles.achievementsItemText}>
              <h3>Top Blockchain Developer</h3>
              <p>
                Enthusiastic about blockchain technology and its applications. I have completed multiple courses on blockchain development and have built projects on Ethereum and Binance Smart Chain. I have also contributed to the blockchain community by writing articles on Medium and Dev too.
              </p>
            </div>
          </li>
          <li className={styles.achievementsItem}>
            <img src={getImageUrl("achievements/karateka.png")} alt="Trophy icon" className={styles.codeforcesImage} />
            <div className={styles.achievementsItemText}>
              <h3 style={{ color: "White" }}>KARATEKA</h3>
              <p>
                I have been practising Karate for last 16 years and have achieved the Black Belt 1st Dan. I have also participated in multiple state and national level championships and have won several medals. Karate has taught me discipline, focus and perseverance which has helped me in my professional life too.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

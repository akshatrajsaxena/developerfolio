/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils.js";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="I wanna be a good developer"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Competitive Programmer</h3>
              <p>
                I do <a href="https://codeforces.com/profile/Baski_Flex" style={{ color: 'White', textDecoration: 'underline' }}> Competitive Programming </a> regularly. I have a good Codeforces in which I am a Specialist and my max is Specialist. I have also participated in HackOn with Amazon Hackathons Organised by Amazon. Check my  <a href="https://codeforces.com/profile/Baski_Flex" style={{ color: 'cyan', textDecoration: 'underline' }}>Codeforces Profile</a>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I have a strong base in Web Development and have worked on multiple projects. I have worked on multiple projects and have experience in working with React, Node, Express. I have also worked on a few projects using Next.js.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Blockchain Enthusiast</h3>
              <p>
                I have a strong base in Blockchain and have worked on projects. I have experience in working with Solidity, Web3, and Ethers.js. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

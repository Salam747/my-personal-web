"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import picBImage from "../../../../public/assets/picB.jpg";
import styles from "./about.module.css";

const About = () => {
  return (
    <div id="about" className={styles.aboutSection}>
      <section className={styles.aboutBackground}>
        <div className={styles.aboutContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              alt="about"
              src={picBImage}
              width={330}
              height={330}
            />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.description}>
              Hi, I&apos;m Abdul Salam, a passionate web developer skilled in HTML, CSS, Next.js, TypeScript, JavaScript,
              and Tailwind CSS. My journey began at S.Q.A.Z.A.B High School in Mirpur Khas.
              I furthered my education at Shah Abdul Latif Boys College in Mirpur Khas, where I completed my intermediate studies.
              I later earned a Bachelor&apos;s Degree from Allama Iqbal Open University in Islamabad.
              Additionally, I have a Diploma in Information Technology (DIT) from Genious Academy, Mirpur Khas. 
              I love turning creative ideas into functional and visually appealing websites.
            </p>
            <div className={styles.buttonContainer}>
              <Link href="../../../picture/CV.pdf">
                <button className={styles.viewCVButton}>View CV</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

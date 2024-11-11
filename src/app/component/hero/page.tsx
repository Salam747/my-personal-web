"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';
import proImage from "../../../../public/assets/pro.jpg";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <section className={styles.heroBackground}>
        <div className={styles.heroContainer}>
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTitle}>
              Hello
              <br />
              <Typewriter
                options={{
                  strings: ['I am Abdul Salam', 'I am Web Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className={styles.divider}></div>
            <p className={styles.heroDescription}>
              Welcome to My Portfolio! Hi, I&apos;m Abdul Salam, a web developer with a passion for crafting dynamic and user-friendly websites.
              I specialize in HTML, CSS, Next.js, TypeScript, JavaScript, and Tailwind CSS. My goal is to create seamless, efficient,
              and visually stunning web experiences. With a strong foundation in modern web technologies, 
              I transform ideas into engaging digital solutions. Let&apos;s build something amazing together!
            </p>
            <div className={styles.contactButtonContainer}>
              <Link href="#Contact">
                <button className={styles.contactButton}>Contact</button>
              </Link>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <Image
              className={styles.heroImage}
              alt="hero"
              width={500}
              height={500}
              src={proImage}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

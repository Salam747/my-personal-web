"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './project.module.css';
import lockImage from "../../../../public/assets/lock.jpg";
import clockImage from "../../../../public/assets/clock2.jpg";
import resumeImage from "../../../../public/assets/resume.jpg";
import portfolio from "../../../../public/assets/portfolio.jpg";
import facebook from "../../../../public/assets/fb.jpg";
import website from "../../../../public/assets/web.jpg";

const Projects = () => {
  return (
    <div id="projects">
      <section className={styles.container}>
        <h1 className={styles.sectionTitle}>My Projects</h1>
        <div className={styles.projectsGrid}>
          {/* Project 1: Analog Clock */}
          <div className={styles.projectCard}>
            <Image alt="Analog Clock" src={lockImage} className={styles.projectImage} width={500} height={500} />
            <div className={styles.projectOverlay}>
              <h2 className={styles.projectTitle}>Analog Clock Project</h2>
              <p className={styles.projectDescription}>I have created an Analog Clock Project</p>
              <Link target="_blank" href="https://vercel.com/abdul-salams-projects-29c00320/analog-clock">
                <p className={styles.projectLink}>View Project</p>
              </Link>
            </div>
          </div>

          {/* Project 2: Analog Clock (Duplicate for testing purposes) */}
          <div className={styles.projectCard}>
            <Image alt="Analog Clock" src={clockImage} className={styles.projectImage} width={500} height={500} />
            <div className={styles.projectOverlay}>
              <h2 className={styles.projectTitle}>Analog Clock Project</h2>
              <p className={styles.projectDescription}>I have created an Analog Clock</p>
              <Link target="_blank" href="https://vercel.com/abdul-salams-projects-29c00320/analog-clock">
                <p className={styles.projectLink}>View Project</p>
              </Link>
            </div>
          </div>

          {/* Project 3: Dynamic Resume */}
          <div className={styles.projectCard}>
            <Image alt="Dynamic Resume" src={resumeImage} className={styles.projectImage} width={500} height={500} />
            <div className={styles.projectOverlay}>
              <h2 className={styles.projectTitle}>Dynamic Resume Project</h2>
              <p className={styles.projectDescription}>I have created a Dynamic Resume Project</p>
              <Link target="_blank" href="https://vercel.com/abdul-salams-projects-29c00320/milestone-03">
                <p className={styles.projectLink}>View Project</p>
              </Link>
            </div>
          </div>

          {/* Project 4: HTML CSS Portfolio */}
          <div className={styles.projectCard}>
            <Image alt="Portfolio" src={portfolio} className={styles.projectImage} width={500} height={500} />
            <div className={styles.projectOverlay}>
              <h2 className={styles.projectTitle}>Portfolio Project</h2>
              <p className={styles.projectDescription}>I have created a Portfolio website using HTML CSS</p>
              <Link target="_blank" href="https://vercel.com/abdul-salams-projects-29c00320/html-css-portfolio">
                <p className={styles.projectLink}>View Project</p>
              </Link>
            </div>
          </div>

          {/* Project 5: Facebook Login Page */}
          <div className={styles.projectCard}>
            <Image alt="Facebook Login Page" src={facebook} className={styles.projectImage} width={500} height={500} />
            <div className={styles.projectOverlay}>
              <h2 className={styles.projectTitle}>Facebook Login Page Project</h2>
              <p className={styles.projectDescription}>I have created a Facebook login page clone using HTML CSS</p>
              <Link target="_blank" href="https://vercel.com/abdul-salams-projects-29c00320/facebook-login-page">
                <p className={styles.projectLink}>View Project</p>
              </Link>
            </div>
          </div>

          {/* Project 6: Website with Tailwind */}
          <div className={styles.projectCard}>
            <Image alt="Website with Tailwind" src={website} className={styles.projectImage} width={500} height={500} />
            <div className={styles.projectOverlay}>
              <h2 className={styles.projectTitle}>Website Project</h2>
              <p className={styles.projectDescription}>I have created a website using Next.js with Tailwind</p>
              <Link target="_blank" href="https://vercel.com/abdul-salams-projects-29c00320/blog-website-tailwind-css">
                <p className={styles.projectLink}>View Project</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

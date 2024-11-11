"use client";
import React from 'react';
import { BsGithub } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import Link from 'next/link';
import styles from './footer.module.css'; // Import the CSS file

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <a className={styles.title}>
            <div className={styles.titleText}>ABDUL SALAM</div>
          </a>
          <p className={styles.copyText}>
            © 2024 All rights reserved
          </p>
          <span className={styles.socialLinks}>
            <Link target="_blank" href={"https://github.com/Salam747?tab=repositories"} className={styles.link}>
              <BsGithub className={styles.icon} />
            </Link>

            <Link target="_blank" href={"https://www.instagram.com/codewith_abdulsalam/profilecard/?igsh=YnFsa3d4aHYwb2lm"} className={styles.link}>
              <SiInstagram className={styles.icon} />
            </Link>

            <Link target="_blank" href={"https://www.linkedin.com/in/abdul-sallam-9248bb244?"} className={styles.link}>
              <FaLinkedin className={styles.icon} />
            </Link>

            <Link target="_blank" href={"https://vercel.com/abdul-salams-projects-29c00320"} className={styles.link}>
              <SiVercel className={styles.icon} />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

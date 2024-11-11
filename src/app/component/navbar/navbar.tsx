"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdDownloadForOffline } from "react-icons/md";
import proImage from "../../../../public/assets/pro.jpg";
import styles from "../navbar/navbar.module.css"; // Correctly import the CSS module

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <header className={styles.navbarHeader}>
        <div className={styles.navbarContent}>
          <a className={styles.navbarLogo}>
            <Image
              src={proImage}
              alt="Logo"
              width="30"
              height="30"
              className={styles.navbarLogoImg}
            />
            <span className={styles.navbarTitle}>ABDUL SALAM</span>
          </a>

          <nav className={styles.navbarLinks}>
            <Link href="/" className={styles.navbarLink}>
              Home
            </Link>
            <Link href="#about" className={styles.navbarLink}>
              About
            </Link>
            <Link href="#projects" className={styles.navbarLink}>
              Projects
            </Link>
            <Link href="#skills" className={styles.navbarLink}>
              Skills
            </Link>
            <Link href="#Contact" className={styles.navbarLink}>
              Contact
            </Link>
          </nav>

          <a href="/assets/CV.pdf" target="_blank">
            <button className={styles.navbarDownloadBtn}>
              Download CV
              <MdDownloadForOffline className={styles.downloadIcon} />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

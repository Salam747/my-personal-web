"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div id="skills" className={styles.skillsSection}>
      <section className={styles.skillsBackground}>
        <div className={styles.skillsContainer}>
          <div className={styles.headerContainer}>
            <h2 className={styles.skillsLabel}>SKILLS</h2>
            <h1 className={styles.skillsTitle}>My Skills</h1>
          </div>
          <div className={styles.skillsGrid}>
            {/* Skill Item */}
            {[
              { name: "HTML", percentage: 94 },
              { name: "CSS", percentage: 90 },
              { name: "TypeScript/JavaScript", percentage: 80 },
              { name: "Next.js", percentage: 65 },
              { name: "Tailwind CSS", percentage: 90 },
              { name: "UI/UX", percentage: 60 },
            ].map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <div className={styles.skillHeader}>
                  <div className={styles.iconContainer}>
                    <FaCheckCircle className={styles.icon} />
                  </div>
                  <h2 className={styles.skillName}>{skill.name}</h2>
                </div>
                <div className={styles.skillProgressContainer}>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                  <p className={styles.percentageText}>{skill.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

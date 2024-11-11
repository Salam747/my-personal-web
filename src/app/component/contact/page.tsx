"use client";
import React from 'react';
import styles from './contact.module.css'; // Import the custom CSS module

const Contact = () => {
  return (
    <div id="Contact">
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          {/* Google Map Section */}
          <div className={styles.contactMap}>
            <iframe
              width="100%"
              height="450px"
              className={styles.contactMapIframe}
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14482.149123200355!2d67.14796087967336!3d24.84549296686452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33a41c56bec25%3A0x8d2d62302faf98e8!2sJamia%20Darul%20Uloom%20Karachi!5e0!3m2!1sen!2s!4v1730099591968!5m2!1sen!2s"
            />
            <div className={styles.contactInfo}>
              <div className={styles.contactInfoItem}>
                <h2>ADDRESS</h2>
                <p>Korangi 5, Industrial area, Karachi, Pakistan</p>
              </div>
              <div className={styles.contactInfoItem}>
                <h2>EMAIL</h2>
                <a href="mailto:salamabsul466@gmail.com">salamabsul466@gmail.com</a>
                <h2>PHONE</h2>
                <p>0311-3050866</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className={styles.contactForm}>
            <h2>Contact</h2>
            <p>Feel free to contact me.</p>
            <form target='_blank' action="https://formspree.io/f/movqeqwj" method="POST">
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                />
              </div>
              <button className={styles.submitButton} type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

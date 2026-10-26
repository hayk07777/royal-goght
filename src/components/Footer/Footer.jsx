import React from 'react';
import Contact from './contact/Contact';
import Social from './social/Social';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.footerLogo}>ROYAL GOGHT</div>
            <Contact />
            <Social />

            {/* Interactive Google Map */}
            <div className={styles.mapContainer}>
                <iframe
                    title="Royal Goght Location"
                    src="https://maps.google.com/maps?q=Goght,Armenia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                ></iframe>
            </div>

            <div className={styles.copy}>
                &copy; {new Date().getFullYear()} Royal Goght. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
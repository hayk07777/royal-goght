import React from 'react';
import NavPanel from '../NavPanel/NavPanel';
import styles from './Header.module.scss';
import logoImg from '../../../assets/images/avatarka.PNG';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                {/* Լոգոն և Ավատարը */}
                <div className={styles.logoWrapper}>
                    <div className={styles.avatarBorder}>
                        <img src={logoImg} alt="Royal Goght Avatar" className={styles.avatarImg} />
                    </div>
                    <span className={styles.logoText}>ROYAL GOGHT</span>
                </div>

                {/* Նավիգացիոն պանել */}
                <NavPanel />

                {/* Ամրագրել կոճակը */}
                <a href="#contact" className={styles.bookBtn}>
                    Ամրագրել
                </a>
            </div>
        </header>
    );
};

export default Header;
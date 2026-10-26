import React from 'react';
import styles from './NavPanel.module.scss';

const NavPanel = () => {
    return (
        <ul className={styles.navPanel}>
            <li><a href="#about">Հարմարություններ</a></li>
            <li><a href="#gallery">Նկարներ</a></li>
            <li><a href="#contact">Կոնտակտ</a></li>
        </ul>
    );
};

export default NavPanel;
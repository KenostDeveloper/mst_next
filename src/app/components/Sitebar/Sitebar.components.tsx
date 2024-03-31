/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react';
import styles from './Sitebar.module.scss'
import Link from 'next/link';

const Sitebar = () => {

    const [active, setActive] = useState(false);

    return (
        <div className={active? `${styles.sitebar} ${styles.active}` : `${styles.sitebar}`}>
            <Link href="/" className={styles.sitebar__logo}>
                <img src="/logo-small.svg" alt="Логотип" />
                <span>МСТ Аналитика</span>
            </Link>
            <div className={styles.sitebar__close} onClick={() => setActive(!active)}>
                <i className={`pi pi-angle-right ${styles.sitebar__close_icon}`} style={{color: "#FFF"}}></i>
            </div>
        </div>
    );
}

export default Sitebar;
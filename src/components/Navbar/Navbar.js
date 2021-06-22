import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

import styles from './Navbar.module.css'

export default function Navbar({ openSidebar }) {
    return (
        <div className={styles.navbar}> 
            <div className={styles.logo}>
                <img src="https://genshin.mihoyo.com/_nuxt/img/09cac33.png" alt="" className={styles.logoImg} />
            </div>
            <button className={styles.btn}><GiHamburgerMenu onClick={() => openSidebar()} /></button>
            <ul className={styles.navbarNav}>
                <li className={styles.navItems}>
                    <Link to="/" className={styles.linkBtn}>Home</Link>
                </li>
                <li className={styles.navItems}>
                    <Link to="/character" className={styles.linkBtn}>Character</Link> 
                </li>
                <li className={styles.navItems}>
                    <Link to="/more-info" className={styles.linkBtn}>More info</Link> 
                </li>
            </ul>
        </div>
    )
}

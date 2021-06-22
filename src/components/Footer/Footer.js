import React from 'react'

import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.Allinfo}>
                <div className={styles.info}>
                    <h1 className={styles.infoTitle}>About us</h1>
                    <ul className={styles.infoList}>
                        <li>How it works</li>
                        <li>Careers</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div className={styles.info}>
                    <h1 className={styles.infoTitle}>Contact</h1>
                    <ul className={styles.infoList}>
                        <li>Contact</li>
                        <li>Support</li>
                        <li>Destinations</li>
                    </ul>
                </div>
                <div className={styles.info}>
                    <h1 className={styles.infoTitle}>Social Media</h1>
                    <ul className={styles.infoList}>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Youtube</li>
                        <li>Twiiter</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

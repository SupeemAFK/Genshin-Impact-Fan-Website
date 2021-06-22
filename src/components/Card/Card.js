import React from 'react'

import styles from './Card.module.css'

export default function Card({ img, title, info }) {
    return (
        <div className={styles.card}>
            <div className={styles.imgWrapper}>
                <img src={img} alt={title} className={styles.img} />
            </div>
            <div className={styles.info}>
                <h1>{title}</h1>
                <p>{info}</p>
            </div>
        </div>
    )
}

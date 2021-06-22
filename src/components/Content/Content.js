import React from 'react'
import { contentDataArray } from '../../contentData/data'

import styles from './Content.module.css'

//components
import Card from '../Card/Card'

export default function Content() {    
    return (
        <div className={styles.content}>
            <div className={styles.news}>
                <div className={styles.title}>
                    <h1>NEWS</h1>
                </div>
                <div className={styles.cardContainer}>
                    {contentDataArray.map((contentData, index) => <Card key={index} {...contentData} />)}
                </div>
            </div>
        </div>
    )
}

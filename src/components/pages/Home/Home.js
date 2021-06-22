import React from 'react'

import styles from './Home.module.css'

//components
import Hero from '../../Hero/Hero'
import Content from '../../Content/Content'
import Footer from '../../Footer/Footer'

export default function Home() {
    return (
        <div className={styles.home}>
            <Hero />
            <Content />
            <Footer />
        </div>
    )
}

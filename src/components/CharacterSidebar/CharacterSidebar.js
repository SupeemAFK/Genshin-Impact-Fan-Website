import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'

import styles from './CharacterSidebar.module.css'

export default function characterSidebar({ charactersNameArray, isCharacterSidebarOpen, closeSidebar }) {  
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <div className={isCharacterSidebarOpen ? `${styles.characterSidebar} ${styles.active}` : styles.characterSidebar}>
            <button onClick={() => closeSidebar()} className={styles.closeBtn}><AiOutlineClose /></button>
            <ul className={styles.nav}>
                {charactersNameArray.map((charactersName, index) => (
                    <li key={index} className={styles.navItems}>
                        <div className={styles.logoWrapper}>
                            <img src={`https://api.genshin.dev/characters/${charactersName}/icon`} alt={charactersName} className={styles.logoImg} />
                        </div>
                        <Link to={`/${charactersName}`} onClick={() => closeSidebar()} className={styles.linkBtn}>
                            {capitalizeFirstLetter(charactersName)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

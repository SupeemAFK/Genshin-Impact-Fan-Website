import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'

import styles from './CharacterSidebar.module.css'

export default function characterSidebar({ charactesrNameArray, isCharacterSidebarOpen, closeSidebar }) {  
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <div className={isCharacterSidebarOpen ? `${styles.characterSidebar} ${styles.active}` : styles.characterSidebar}>
            <button onClick={() => closeSidebar()} className={styles.closeBtn}><AiOutlineClose /></button>
            <ul className={styles.nav}>
                {charactesrNameArray.map((charactesrNameArray, index) => (
                    <li key={index} className={styles.navItems}>
                        <div className={styles.logoWrapper}>
                            <img src={`/assets/images/characters/${charactesrNameArray}/icon.png`} alt={charactesrNameArray} className={styles.logoImg} />
                        </div>
                        <Link to={`/${charactesrNameArray}`} onClick={() => closeSidebar()} className={styles.linkBtn}>
                            {capitalizeFirstLetter(charactesrNameArray)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import { getCharacterName } from '../../../api/api'
import { MdPlayArrow } from 'react-icons/md'

import styles from './Characters.module.css'

//components
import CharacterSidebar from '../../CharacterSidebar/CharacterSidebar';
import CharacterInfo from '../../CharacterInfo/CharacterInfo'

export default function Characters() {
    const [charactersNameArray, setCharactersNameArray] = useState([])
    const [isCharacterSidebarOpen, setIsCharacterSidebarOpen] = useState(false)

    useEffect( () => {
        async function fetchAPI() {
            const response = await getCharacterName()
            setCharactersNameArray(response)
        }
        fetchAPI()
    }, [])

    function openSidebar() {
        setIsCharacterSidebarOpen(true)
    }

    function closeSidebar() {
        setIsCharacterSidebarOpen(false)
    }

    return (
        <div className={styles.character}>
            <button onClick={() => openSidebar()} className={styles.openCharacterSidebarBtn}><MdPlayArrow /></button>
            <CharacterSidebar charactesrNameArray={charactersNameArray} isCharacterSidebarOpen={isCharacterSidebarOpen} closeSidebar={closeSidebar} />
            <CharacterInfo />
        </div>
    )
}

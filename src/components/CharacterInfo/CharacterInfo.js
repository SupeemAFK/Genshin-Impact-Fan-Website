import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCharacterData } from '../../api/api'

import styles from './CharacterInfo.module.css'

export default function CharacterInfo() {   
    const [characterData, setCharacterData] = useState([]) 
    const [isLoading, setisLoading] = useState(false)
    const { characterNameParam } = useParams()
    
    useEffect(() => {
        async function fetchAPI() {
            try {
                setisLoading(true)
                const response = await getCharacterData(characterNameParam)
                setCharacterData(response)
                setisLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAPI()
    }, [characterNameParam])

    const { name, vision, weapon, nation, affiliation, rarity, constellation, description } = characterData

    if (isLoading) {
        return (
            <div className={styles.characterInfo}>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className={styles.characterInfo}>
            <div className={styles.container}>
                <div className={styles.characterImgWrapper}>
                    <img src={`/assets/images/characters/${characterNameParam}/portrait.png`} alt={name} className={styles.characterImg} />
                </div>
                <div className={styles.characterText}>
                    <h1 className={styles.name}>{name}</h1>
                    <div className={styles.characterTextInfo}>
                        <h5 className={styles.title}>Vision:</h5>
                        <p className={styles.paragraph}>{vision}</p>
                        <div className={styles.visionWrapper}>
                            <img src={`/assets/images/visions/${vision}.jpg`} alt={vision} className={styles.vision} />
                        </div>
                    </div>
                    <div className={styles.characterTextInfo}>
                        <h5 className={styles.title}>Weapon:</h5>
                        <p className={styles.paragraph}>{weapon}</p>
                    </div>
                    <div className={styles.characterTextInfo}>
                        <h5 className={styles.title}>Nation:</h5>
                        <p className={styles.paragraph}>{nation}</p>
                    </div>
                    <div className={styles.characterTextInfo}>
                        <h5 className={styles.title}>Affiliation:</h5>
                        <p className={styles.paragraph}>{affiliation}</p>
                    </div>
                    <div className={styles.characterTextInfo}>
                        <h5 className={styles.title}>Rarity:</h5>
                        <p className={styles.paragraph}>{rarity}</p>
                    </div>
                    <div className={styles.characterTextInfo}>
                        <h5 className={styles.title}>Constellation:</h5>
                        <p className={styles.paragraph}>{constellation}</p>
                    </div>
                    <div className={styles.characterTextInfo}>
                        <h5 className={styles.title}>Description:</h5>
                        <p className={styles.paragraph}>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

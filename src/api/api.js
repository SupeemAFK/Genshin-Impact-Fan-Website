import axios from 'axios';

export async function getCharacterName() {
    const reponse = await axios.get('https://api.genshin.dev/characters')
    const charactersNameArray = reponse.data

    return charactersNameArray
}

export async function getCharacterData(characterName) {
    const reponse = await axios.get(`https://api.genshin.dev/characters/${characterName}`)
    const characterData = reponse.data

    return characterData
}
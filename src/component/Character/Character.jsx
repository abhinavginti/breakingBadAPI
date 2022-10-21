import { useParams } from "react-router"
import { useContext, useEffect, useState } from "react"
import { ContentContext } from "../../utils/ContextAPI/ContentContext"

import './character.css'

const Character = () => {
    const { char_id } = useParams()
    const { getCharacter, getQuotes } = useContext(ContentContext)
    const [character, setCharacter] = useState()
    useEffect(() => {
        const getCharacterData = async () => {
            const characterData = await getCharacter(char_id);
            setCharacter(characterData)
            if (characterData.char_id) {
                const characterQuotes = await getQuotes(characterData.name)
                setCharacter(prev => ({...prev, quotes: characterQuotes}))
            }
        }
        getCharacterData()
    }, [char_id])
    return character ? (
        <div className="__character-container">
            <div className="__character-info">
                <div>
                    <img className="character_img" src={character.img} onError={e => e.target.style.display = 'none'} />
                </div>
                <div className="__content">
                    <h1>{character.name}</h1>
                    <p className="__nickname">{character.nickname}</p>
                    <div className='bt-1'>
                        <p>Birthday</p>
                        <p>{character.birthday}</p>
                    </div>
                    <div className='bt-1'>
                        <p>Occupation</p>
                        <p>{character.occupation && character.occupation.join(', ')}</p>
                    </div>
                    <div className='bt-1'>
                        <p>ID</p>
                        <p>{character.char_id}</p>
                    </div>
                    <div className='bt-1'>
                        <p>Appeared in Season</p>
                        <p>{character.appearance && character.appearance.join(', ')}</p>
                    </div>
                    <div className='bt-1'>
                        <p>Portrayed By</p>
                        <p>{character.portrayed}</p>
                    </div>
                    <div className='bt-1'>
                        <p>Status</p>
                        <p>{character.status}</p>
                    </div>
                </div>
            </div>
            {character.quotes && character.quotes.length ? <div className="__character-quotes">
                <p className="heading">{character.nickname}'s Quotes</p>
                <div className="__quotes">
                    {character.quotes && character.quotes.map((quote,idx) => <p>" {quote.quote} "</p>)}
                </div>
            </div> : ''}
        </div>
    ) : <div id='preloader'/>
}

export default Character
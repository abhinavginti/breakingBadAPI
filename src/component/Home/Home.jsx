import './home.css'
import { useContext, useEffect } from 'react'
import { ContentContext } from '../../utils/ContextAPI/ContentContext'
import CharacterCard from './CharacterCard';

const Home = () => {
    const { characters, offset, loading, getCharacters } = useContext(ContentContext);

    useEffect(() => {
        const handleScroll = () => {
            if ((window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight)) {
                if (loading) return;
                offset.current += 12;
                getCharacters()
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className='__home-container'>
            {characters && characters.map((character, idx) => <CharacterCard key={character.name + idx} character={character} />)}
        </div>
    )
}

export default Home
import './home.css'
import { useContext } from 'react'
import { ContentContext } from '../../utils/ContextAPI/ContentContext'
import CharacterCard from './CharacterCard';

const Home = () => {
    const { characters} = useContext(ContentContext);

    return (
        <div className='__home-container'>
            {characters && characters.map((character, idx) => <CharacterCard key={character.name + idx} character={character} />)}
        </div>
    )
}

export default Home
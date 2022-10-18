import { GiCondorEmblem  } from 'react-icons/gi'

const CharacterCard = ({ character }) => {
    const { img, name, nickname } = character
    return (
        <div className='card'>
            <img src={img} alt={name} loading='lazy' onError={e => e.target.src = 'https://vignette.wikia.nocookie.net/breaking-bad-tv/images/c/ce/Sp.png/revision/latest?cb=20121016143623'} />
            <div className="content">
                <div className='nickname'>
                    <GiCondorEmblem />
                    <p>{nickname}</p>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard
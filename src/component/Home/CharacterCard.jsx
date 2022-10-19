import { GiCondorEmblem } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const CharacterCard = ({ character }) => {
    const { char_id, img, name, nickname, occupation, portrayed, status } = character
    const contentRef = useRef()

    const handleMobileClick = () => {
        if (window.innerWidth <= 756) {
            const hiddenContent = contentRef.current.querySelector('.__hidden-content')
            const isClicked = contentRef.current.classList.contains('clicked')
            contentRef.current.style.marginTop = isClicked ? 0 : '-200px';
            hiddenContent.style.height = isClicked ? 0 : '200px';
            contentRef.current.classList.toggle('clicked')
        }
    }

    return (
        <div className='card'>
            <Link to={`/character/${char_id}`}>
                <img src={img} alt={name} loading='lazy' onError={e => e.target.src = 'https://vignette.wikia.nocookie.net/breaking-bad-tv/images/c/ce/Sp.png/revision/latest?cb=20121016143623'} />
            </Link>
            <div className="content" ref={contentRef} onClick={handleMobileClick}>
                <p style={{
                    fontWeight: 700,
                    textAlign: 'center',
                    paddingTop: '0.75rem'
                }}>{name}</p>
                <div className='nickname'>
                    <GiCondorEmblem />
                    <p>{nickname}</p>
                </div>
                <div className='__hidden-content'>
                    <div className='bt-1'>
                        <p>Occupation</p>
                        <p>{occupation[0]}</p>
                    </div>
                    <div className='bt-1'>
                        <p>ID</p>
                        <p>{char_id}</p>
                    </div>
                    <div className='bt-1'>
                        <p>Portrayed By</p>
                        <p>{portrayed}</p>
                    </div>
                    <div className='bt-1'>
                        <p>Status</p>
                        <p>{status}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard
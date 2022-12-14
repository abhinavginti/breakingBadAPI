import './header.css'
import BrBaIcon from '../../Images/BrBaIcon.png'
import { BsSearch } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ContentContext } from '../../utils/ContextAPI/ContentContext'
import { logEvent, analytics } from '../../firebaseConfig';

const Header = () => {
  const { offset, getCharacters, setCharacters } = useContext(ContentContext)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault();
    navigate('/')
    offset.current = 0;
    setCharacters([])
    const fd = new FormData(e.target)
    await getCharacters(fd.get('search'))
    try {
      logEvent(analytics, 'character_search', {
        name: fd.get('search').toLowerCase()
      })
    } catch (err) { console.error(err) }
  }

  // const debounce = (cb,delay) => {
  //   let timeout;
  //   return (...args) => {
  //     clearTimeout(timeout)
  //     timeout = setTimeout(() => {
  //       cb(...args)
  //     },delay)
  //   }
  // }

  // const updateDebounceText = debounce(async (_search) => {
  //   navigate('/')
  //   setOffset(0);
  //   setCharacters([])
  //   await getCharacters(_search)
  // },2000)

  const handleSearch = async (e) => {
    if (e.target.value === '') {
      offset.current = 0
      setCharacters([])
      await getCharacters()
    }
  }

  return (
    <nav>
      <div id='icon'>
        <Link to='/'>
          <img alt='icon' src={BrBaIcon} />
        </Link>
      </div>
      <div id='search'>
        <form onSubmit={e => handleSubmit(e)}>
          <input onInput={e => handleSearch(e)} type='text' placeholder='Walter White' name='search' />
          <button className='btn' type='submit'><BsSearch /></button>
        </form>
      </div>
    </nav>
  )
}

export default Header
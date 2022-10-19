import './header.css'
import BrBaIcon from '../../Images/BrBaIcon.png'
import { BsSearch } from 'react-icons/bs'
import { Link,useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ContentContext } from '../../utils/ContextAPI/ContentContext'
const Header = () => {
  const { setOffset, getCharacters,setCharacters } = useContext(ContentContext)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault();
    navigate('/')
    setOffset(0);
    setCharacters([])
    const fd = new FormData(e.target)
    await getCharacters(fd.get('search'))
  }

  const debounce = (cb,delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        cb(...args)
      },delay)
    }
  }

  const updateDebounceText = debounce(async (_search) => {
    navigate('/')
    setOffset(0);
    setCharacters([])
    await getCharacters(_search)
  },1000)

  return (
    <nav>
      <div id='icon'>
        <Link to='/'>
          <img alt='icon' src={BrBaIcon} />
        </Link>
      </div>
      <div id='search'>
        <form onSubmit={e => handleSubmit(e)}>
          <input onInput={e => updateDebounceText(e.target.value)} type='text' placeholder='Walter White' name='search'/>
          <button className='btn' type='submit'><BsSearch /></button>
        </form>
      </div>
    </nav>
  )
}

export default Header
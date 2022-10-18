import './header.css'
import BrBaIcon from '../../Images/BrBaIcon.png'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div id='icon'>
        <Link to='/'>
          <img alt='icon' src={BrBaIcon} />
        </Link>
      </div>
      <div id='search'>
        <form>
          <input type='text' placeholder='Walter White' />
          <button className='btn' type='submit'><BsSearch /></button>
        </form>
      </div>
    </nav>
  )
}

export default Header
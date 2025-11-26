import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logoText from '../assets/logo_text.png';
const Header = () => {
    
    return <div className='flex justify-between items-center px-3 border-2 m-2 bg-blue-300'>
        <div className='flex items-center'>
            <img id="header-logo" width={100} src={logo}/>
            <img id='logo-txt' className="h-[65px]" width={100} src={logoText} />
        </div>
        <ul className='flex gap-5 text-xl font-bold mr-2'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
            <li><Link to={'/cart'}>Cart</Link></li>
        </ul>
        <Link to={'/'}>Hello</Link>
    </div>
}

export default Header;
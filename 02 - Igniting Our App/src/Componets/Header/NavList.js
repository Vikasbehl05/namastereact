import { Link } from "react-router-dom"

const NavList = () => {
    return (
        <div className='nav-iteams'>
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/about'>About Us</Link></li>
                <li> <Link to='/contact'>Contact Us</Link></li>
                <li> <Link to='/cart'>Cart</Link></li>
            </ul>
        </div>

    )
}


export default NavList
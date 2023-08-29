import { Link } from "react-router-dom"
import useOnlineStatus from "../../utils/useOnlineStatus"

const NavList = () => {
    const onlineStatus = useOnlineStatus()
    return (
        <div className='flex'>
            <ul className="flex flex-warp m-3 p-4 justify-between">
                <li className="m-3"> {onlineStatus ? "ONLINE" : "OFFLINE"}</li>
                <li className="m-3"> <Link to='/'>Home</Link> </li>
                <li className="m-3"> <Link to='/about'>About Us</Link></li>
                <li className="m-3"> <Link to='/contact'>Contact Us</Link></li>
                <li className="m-3"> <Link to='/cart'>Cart</Link></li>
            </ul>
        </div>

    )
}


export default NavList
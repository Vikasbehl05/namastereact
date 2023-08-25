import Logo from "./Logo";
import NavList from "./NavList";
import { LogOut } from "./LogOutBtn";

function Header() {
    return (
        <div className='header'>
            <Logo />
            <NavList />
            <LogOut />

        </div>

    );
}

export default Header
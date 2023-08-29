import Logo from "./Logo";
import NavList from "./NavList";
import { LogOut } from "./LogOutBtn";

function Header() {
    return (
        <div className='flex items-start justify-between border border-solid flex-row'>
            <Logo />
            <NavList />
            <LogOut />

        </div>

    );
}

export default Header
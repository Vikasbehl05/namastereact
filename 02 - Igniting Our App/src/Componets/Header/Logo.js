import { LOGO_URL } from "../../utils/constance"

const Logo = () => {
    return (
        <div className='logoContainer'>
            <img className='logo' src={LOGO_URL}>
            </img>
        </div>
    )

}

export default Logo
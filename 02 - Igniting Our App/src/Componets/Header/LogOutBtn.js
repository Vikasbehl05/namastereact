import { useState } from "react"

export const LogOut = () => {
    const [loginBtn, setLoginBtn] = useState("Login")

    const onClickToggle = () => {
        if (loginBtn === "Login") {
            setLoginBtn("Logout")
        } else {
            setLoginBtn("Login")
        }
    }
    return (
        <button className='Loginbtn' onClick={() => { onClickToggle() }}>
            {loginBtn}
        </button>
    )
}


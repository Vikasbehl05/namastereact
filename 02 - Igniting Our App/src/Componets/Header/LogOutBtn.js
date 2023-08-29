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
        <button className='cursor-pointer border-0 border-solid rounded font-semibold m-3 w-40 py-3 px-0 shadow-[0_0_20px_rgba(104,85,224,0.2)] text-[rgb(104,85,224)] ' onClick={() => { onClickToggle() }}>
            {loginBtn}
        </button>
    )
}


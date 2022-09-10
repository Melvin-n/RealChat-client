import React from 'react'
import { useState } from 'react'
import LoginSignupForm from './components/LoginSignupForm'
import './styles/homepage.css'

const Homepage = (): JSX.Element => {
    const [loginOrSignup, setLoginOrSignup] = useState<string>("login")
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleLoginOrSignupClick = (option: string) => {
        setLoginOrSignup(option)
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
        setter(e.target.value)
    }
  return (
    <div className='homepage__main'>
        <div className="homepage__container">
            <h1 className='homepage__header'> Welcome to RealChat </h1>
            <div className="homepage__login-signup-option">
                <h3 className={`homepage__login homepage__option ${loginOrSignup == "login" ? 'homepage__option-active' : ''}` } 
                onClick={() => handleLoginOrSignupClick("login")}>
                    Login
                </h3>
                <h3 className={`homepage__signup homepage__option ${loginOrSignup == "signup" ? 'homepage__option-active' : ''}` }
                onClick={() => handleLoginOrSignupClick("signup")}>
                    Signup
                </h3>
            </div>
            {loginOrSignup === "login" && 
            <LoginSignupForm containerClass="homepage__login" formType={loginOrSignup} />}

            {loginOrSignup === "signup" && 
            <LoginSignupForm containerClass="homepage__signup" formType={loginOrSignup}/>}
        </div>
    </div>
  )
}

export default Homepage
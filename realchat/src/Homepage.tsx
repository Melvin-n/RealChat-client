import React from 'react'
import { useState } from 'react'
import LoginSignupForm from './components/LoginSignupForm'

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
    <>
      <h1> Welcome to RealChat </h1>
        <div className="container__homepage">
            <div className="homepage__login-signup-option">
                <h3 className="homepage__login homepage__option" 
                onClick={() => handleLoginOrSignupClick("login")}>
                    Login
                </h3>
                <h3 className="homepage__signup homepage__option"
                onClick={() => handleLoginOrSignupClick("signup")}>
                    Signup
                </h3>
            </div>
            {loginOrSignup === "login" && 
            <LoginSignupForm containerClass="homepage__login" />}

            {loginOrSignup === "signup" && 
            <LoginSignupForm containerClass="homepage__signup" />}
        </div>
    </>
  )
}

export default Homepage
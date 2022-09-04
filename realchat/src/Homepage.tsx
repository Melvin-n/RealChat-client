import React from 'react'
import { useState } from 'react'

const Homepage = (): JSX.Element => {
    const [loginOrSignup, setLoginOrSignup] = useState<string>("login")

    const handleLoginOrSignupClick = (option: string) => {
        setLoginOrSignup(option)
    }
  return (
    <>
      <h1> Welcome to RealChat </h1>
        <div className="container">
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
        </div>
    </>
  )
}

export default Homepage
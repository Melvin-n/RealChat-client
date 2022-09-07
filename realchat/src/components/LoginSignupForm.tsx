import {useState} from 'react'

export declare interface formProps {
    inputValue?: string;
    containerClass: string;
}

const LoginSignupForm = ( props: formProps) => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
        setter(e.target.value)
    }

  return (
    <div className={props.containerClass}>
        <form>
            <label>Username: 
                <input type="text" value={username} onChange={(e) => handleInput(e, setUsername)} />
            </label>
        </form>
        <form>
            <label>Password: 
                <input type="password" value={password} onChange={(e) => handleInput(e, setPassword)} />
            </label>
        </form>
    </div>
  )
}

export default LoginSignupForm
import {useState} from 'react'
import axios from 'axios'

export declare interface formProps {
    inputValue?: string;
    containerClass: string;
    formType: string;
}
const baseURL = "http://localhost:8080"

const LoginSignupForm = ( props: formProps) => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [response, setResponse] = useState<string>("")

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
        setter(e.target.value)
    }

const handleSubmit = (path: string) => {
    axios.post(`${baseURL}/${path}`, {
        username: username,
        password: password
    })
    .then((res) => {
        setResponse(res.data.message)
    })
}

  return (
    <div className={props.containerClass}>
        <form className='homepage__form'>
            <label>Username: 
                <input type="text" value={username} onChange={(e) => handleInput(e, setUsername)} />
            </label>
        </form>
        <form className='homepage__form'>
            <label>Password: 
                <input type="password" value={password} onChange={(e) => handleInput(e, setPassword)} />
            </label>
        </form>
        {response != '' ? response : "no res"}
        <button onClick={() => handleSubmit(props.formType)}></button>
    </div>
  )
}

export default LoginSignupForm
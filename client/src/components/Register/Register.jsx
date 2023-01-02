import { useState } from 'react'
import './Register.css'
import { registerUser } from '../../Services/users'
import { useNavigate } from 'react-router-dom'


export default function Register(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState('')

    const navigate = useNavigate()



  return (
    <div className='Register' align='center'>
        <form className='Form' onSubmit={async (e) => {
            e.preventDefault()
            const user = {
                username,
                password,
                email,
                image
            }
            const res = await registerUser(user)
            props.setCurrentUser(res)

            navigate('/')
        }}>
            <fieldset id='border'>
            <legend className='legend'>Register</legend>
            <input placeholder='Username' className='Inputs' type='text' value={username} onChange={(e) => setUsername(e.target.value) }></input>
            <input placeholder='Email' className='Inputs' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input placeholder='Password' className='Inputs' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <input placeholder='image Url' className='Inputs' type='text' value={image} onChange={(e) => setImage(e.target.value)}></input>
            <button>Register</button>
            </fieldset>
        </form>
    </div>
  )
}

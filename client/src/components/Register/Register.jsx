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
            <input placeholder='Username' className='Inputs' type='text'></input>
            <input placeholder='Email' className='Inputs' type='email'></input>
            <input placeholder='Password' className='Inputs' type='password'></input>
            <input placeholder='image Url' className='Inputs' type='text' ></input>
            <button>Register</button>
            </fieldset>
        </form>
    </div>
  )
}

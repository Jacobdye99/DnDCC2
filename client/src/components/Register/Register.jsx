import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <div className='Register'>
        <form className='Form'>
            <fieldset id='border'>
            <legend className='legend'>Register</legend>
            <input placeholder='Username' className='Inputs'></input>
            <input placeholder='Email' className='Inputs'></input>
            <input placeholder='Password' className='Inputs'></input>
            </fieldset>
        </form>
    </div>
  )
}

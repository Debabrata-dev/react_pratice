import { useState } from 'react'

import './App.css'

function App() {
  const [formData, setFromData] = useState({
    username:"",
    email:"",
    password:"",
    confirm_password:"",
  });

const handleInput=(event)=>{
const name=event.target.name;
const value=event.target.value;
setFromData((prev)=>{
  return {...prev,[name]: value};
})
}  

  return (
  <wrapper>
  <div className='container'>
    <div className='card'>
      <h2 className='card-title text-center'>
        Register
      </h2>
    <div className='card-body py-md-4'>
      <form>
        <div className='form-group'>
          <input type='text'
          className='form-control'
          id="name"
          name="username"
          placeholder='Name'
          autoComplete='off'
          value={formData.username}
          onChange={handleInput}/>
        </div>
        <div className='form-group'>
          <input type='email'
          className='form-control'
          id='email'
          name='email'
          autoComplete='off'
          placeholder='Email'  
          value={formData.email}  
            onChange={handleInput}
          />          
        </div>
        <div className='form-group'>
        <input type='password'
          className='form-control'
          id='password'
          name='password'
          autoComplete='off'
          placeholder='password'
          value={formData.password}  
            onChange={handleInput}        
          />  
        </div>
        <div className='form-group'>
        <input type='password'
          className='form-control'
          id='password'
          name='password'
          autoComplete='off'
          placeholder='confirm-password'
          value={formData.confirm_password}
            onChange={handleInput}          
          />  
        </div>
        <div className='d-flex flex-row align-items-center justify-content-between'>
          <button className='btn btn-primary'>Create Account</button>
        </div>
      </form>
      <div>
        <p>{`My name is ${formData.username} and email is  ${formData.email}`}</p>
      </div>
    </div>
    </div>
    </div> 
  </wrapper>
  )
}

export default App

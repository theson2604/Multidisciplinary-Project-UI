import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import useAuth from '../../../hooks/useAuth';

import './login.scss'

function Login(props) {
  
  const { auth, setAuth } = useAuth()

  const navigate = useNavigate()
//   const location = useLocation()
//   const from = location.state?.from?.pathname || "/task"

  const [errMsg, setErrMsg] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [state, setState] = useState(false)
  
  useEffect(() =>{
    if (JSON.stringify(auth) !== '{}') 
      navigate('/setting')
  })
  
  useEffect(() => {
    setErrMsg("")
  }, [username, password])

  const handleSubmit = async(e) => {
    console.log('test:', username, password)
    e.preventDefault()
    const loginName = username
    const response = await axios.post('http://localhost:3000/users/login', 
      {loginName, password}
    )
    if (response?.data !== null) {  
      setAuth(response.data) 
      setUsername('')
      setPassword('')
      console.log(auth)
      // navigate(-1)
    }
    else {
      setErrMsg('Your username or password is Wrong')
      setState(true)
    }
  }
  
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Login</span>
      {state && (<p style={{color : "red"}}>{errMsg}</p>)}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="username" name='username' onChange={e => setUsername(e.target.value)} value={username} required />
          <input type="password" placeholder="password" name='password' onChange={e => setPassword(e.target.value)} value={password} required/>
          <button type='submit' >Sign in</button>
        </form>
        <p>You don't have an account? <Link to="/register" style={{color: 'rgba(43, 122, 120, 0.8)'}}>Register</Link></p>
      </div>
    </div>
    
  );
}

export default Login;
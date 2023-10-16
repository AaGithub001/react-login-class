import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    function handleLogin(e){
        e.preventDefault()
        if (username ==="achyut" && password==="12345"){
            navigate("/home");
        }
    }
  return (
    <div> 
    <form className="form">
    <input type="text" placeholder="Username" onChange = {(e)=>{setUsername(e.target.value)}}/>
    <input type="password" placeholder="Password" onChange = {(e)=>{setPassword(e.target.value)}}/>
    <button onClick={(e) => handleLogin(e)}> Login </button> 
  </form>
  </div>
  )
}


export default Login


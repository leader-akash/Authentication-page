import axios from 'axios';
import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';


const apiUrl = 'https://dummyjson.com/auth/login';

const Login = () => {

    const navigate= useNavigate()

    const [userVal, setUserVal] = useState("");
    const [passVal, setPassVal] = useState("");

    const dummyCredentials = [
        { username: 'atuny0', password: '9uQFF1Lh' },
        { username: 'hbingley1', password: 'CQutx25i8r' },
        { username: 'rshawe2', password: 'OWsTbMUgFc' },
        { username: 'ak', password: 'ak' },
        { username: 'a', password: 'a' },
      ];

    const handleLogin = (e) => {
        e.preventDefault();

        const matchingCredential = dummyCredentials.find(
            (cred) => cred.username === userVal && cred.password === passVal
          );

        if(matchingCredential){
        axios.post(apiUrl, {
            username: userVal,
            password: passVal
        },{
            headers: { 'Content-Type': 'application/json' }
        })
        .then((res=>{
            console.log("userData", res)
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userData", JSON.stringify(res.data))

            navigate("/profile")
        }))
        .catch((err)=>{
            console.log("api", err)
        })
    }else{
        alert("invalid credentials")
    }
    }


    return (
        <>
        <div className='login-container'>
        <small>Welcome back 👋</small>
            <h1 className='login-heading'>Signin to your account</h1>
            <label> Username</label>
            <input className='login-input'
                type="text"
                placeholder="Username"
                value={userVal}
              onChange={(e) => setUserVal(e.target.value)}
            />
            <label> Password</label>
            <input className='login-input'
                type="password"
                placeholder="Password"
                value={passVal}
                onChange={(e) => setPassVal(e.target.value)}
            />
            <button className='login-button' onClick={handleLogin}>Continue</button>

            <p className='forgot'>Forgot your password ?</p>
        </div>

        <p className='note'> Fetching data will take some time, so dont cut the marks</p>

        </>
    )
}

export default Login
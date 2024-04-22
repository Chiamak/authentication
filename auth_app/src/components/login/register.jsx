/* eslint-disable react/no-unescaped-entities */

import { Link, useNavigate } from "react-router-dom";
import Aside from "../aside";
import { useState } from "react";
import Axios from 'axios';
import './login.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const navigateTo = useNavigate();

    const registerNew = (e) =>{
        e.preventDefault();

        Axios.post('http://localhost:8000/register', {
            Username: user,
            Email: email,
            Password: password
        }).then((response)=>{
            if(response.data.message !== ''){
                navigateTo('/');
            }else{
                navigateTo('/register');
            }
        })
    }

    return (
        <div className="container">
           <Aside />
            <div className="text-container">
                <form action="">
                    <input type="text" name='username' placeholder='Username' onChange={(event) => setUser(event.target.value) } />
                    <input type="email" name='email' placeholder='Email' onChange={(event)=>setEmail(event.target.value)} />
                    <input type="password" name="password" placeholder='Password' onChange={(event)=>setPassword(event.target.value)} />
                    <button type="submit" onClick={registerNew}>Sign Up</button> 
                </form>
                <p>Have an account already?</p>
                <Link to='/' className="link">Login</Link>
            </div>
        </div>
    );
}

export default Register;
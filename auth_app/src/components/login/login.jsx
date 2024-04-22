/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Aside from '../aside';
import './login.css'
import Axios from 'axios';

function Login() {
    const [message, setMessage] = useState('');
    const [loginpassword, setLoginpassword] = useState('');
    const [loginuser, setLoginuser] = useState('');
    const navigateTo = useNavigate();

    const submitLog = (e) =>{
        e.preventDefault();

        Axios.post('http://localhost:8000/login',{
            Username: loginuser,
            Password: loginpassword
        }).then((response)=>{
            // console.log(response.data.message);
            if(response.data.message){
                setMessage(response.data.message);
                navigateTo('/');

            }else{
                navigateTo('/dashboard');
            }
        })
    }

    return (
        <div className="container">
            <Aside />
            <div className="text-container">
                <h3 style={message ? {display: 'block'} : {display:'none'}}>{message}</h3>
                <form action="">
                    <input type="text" name='username' placeholder='Username' onChange={(event)=>{setLoginuser(event.target.value)}}/>
                    <input type="password" name="password" placeholder='Password' onChange={(event)=>{setLoginpassword(event.target.value)}}/>
                    <button type="submit" onClick={submitLog}>Login</button> 
                </form>
                <p>Forgot password? <Link to='/' className='link'>Create new</Link></p>
                <p>Don't have an account yet? <Link to='/register' className='link'>Sign up</Link></p>
            </div>
        </div>
    );
}

export default Login;
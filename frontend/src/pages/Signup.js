import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import { handleError, handleSuccess } from '../utiles';
function Signup() {
    const [signupInfo,setSignupInfo]=useState({
        name:'',
        email:'',
        password:''
    })
    const navigate=useNavigate();
    const handleSignup = async (e) =>{
        e.preventDefault();
        const {name,email,password}=signupInfo;
        if(!name || !email || !password){
            return handleError("All fileds are require")
        }
        try {
            const url ="http://localhost:8000/auth/signup";
            const response=await fetch(url,{
                method:"POST",
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(signupInfo)
            })
            const result=await response.json()
            const {success,message,error}=result;
            if(success){
                handleSuccess(message,setTimeout(()=>{
                    navigate('/login')
                },1000));
            }
            else if(error){
                const details=error?.details[0].message
                handleError(details)
            }else if(!success){
                handleError(message); 
            }
            
        } catch (error) {
            handleError(error)
        }
    }

    const handleChange=(e)=>{
        const {name,value}=e.target;
        console.log(name,value)
        const copySignupinfo = { ...signupInfo };
        copySignupinfo[name] = value;
        setSignupInfo(copySignupinfo);
    }
  return (
    <div className='container'>
        <h1>Signup page</h1>
        <form onSubmit={handleSignup}>
            <div>
                <label htmlFor='name'>Name</label>
                <input
                
                onChange={handleChange}
                    type='text'
                    name='name'
                    autoFocus
                    placeholder='Enter you name....'
                    value={signupInfo.name}
                />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                onChange={handleChange}

                    type='email'
                    name='email'
                    placeholder='Enter you email....'
                    value={signupInfo.email}
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                onChange={handleChange}
                    type='text'
                    name='password'
                    placeholder='Enter you password....'
                    value={signupInfo.password}
                />
            </div>
            <button type='submit'>Signup</button>
            <span>
            Already have any account?
            <Link to={'/login'}>Login</Link>
            </span>
        </form>
        <ToastContainer/>
    </div>
  )
}

export default Signup
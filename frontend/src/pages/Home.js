import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError } from '../utiles';
import { ToastContainer } from 'react-toastify';

function Home() {
    const [isloggedinuser,setIsLoggedInUser]=useState('');
    const [products,setProduct]=useState();
    const navigate=useNavigate();
    useEffect(()=>{
        setIsLoggedInUser(localStorage.getItem('loggedinUser'));
    },[])
    const handleLogout=(e)=>{
        localStorage.removeItem('token');
        localStorage.removeItem('loggedinUser');
        setTimeout(()=>{
            navigate("/login");
        },1000)
    }
    const fetchProducts = async () => {
        try {
            const url="http://localhost:8000/products";
            const headers={
                headers : {
                    'Authorization':localStorage.getItem('token')
                }
            }
        const response=await fetch(url,headers);
        const result=await response.json();
        console.log(result);
            setProduct(result);
        } catch (error) {
            handleError(error);
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[])

  return (
    <div>
        <h1>{isloggedinuser}</h1>
        <button onClick={handleLogout}>Logout</button>
        <div>{
           products && products?.map((item,index)=>(
                <ul key={index}>
                    <span>{item.name} : {item.price}</span>
                </ul>
            ))
        } 
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Home
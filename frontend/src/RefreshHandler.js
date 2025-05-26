import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const RefreshHandler = ({setIsAuthorization}) => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token')){
            setIsAuthorization(true);
            if(location.pathname === '/'  || 
                location.pathname === '/login' || 
                location.pathname === '/signup'
            ) {
                navigate('/home',{replace:false})
            }

        }
    },[location,navigate,setIsAuthorization])
  return (
    <div>
      null
    </div>
  )
}

export default RefreshHandler

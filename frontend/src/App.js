import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import { useState } from 'react';
import RefreshHandler from './RefreshHandler';

function App() {
  const [isAuthorization,setIsAuthorization]=useState(false);
  const PrivateRoute=({element})=>{
    return isAuthorization ? element : <Navigate to={'/login'} />
  }
  return (
    <div>
    <RefreshHandler setIsAuthorization={setIsAuthorization}/>
      <Routes>
      <Route path='/' element={<Navigate to={'/login'}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<PrivateRoute element={<Home/>}/>}/>
      </Routes>
    </div>
  );
}

export default App;

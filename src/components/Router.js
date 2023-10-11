import React,{useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = ()=>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return(
    <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<Home/>}></Route>
        ) : (
        <Route path="/" element={<Auth/>}></Route>
        )
      }
    </Routes>
  )
}
export default AppRouter;
import React,{useState, useEffect} from 'react';
import AppRouter from './Router';
import { authService } from '../firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(()=>{
    const auth = getAuth();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLoggedIn(true);
          console.log(user);
        } else {
          // User is signed out
          setIsLoggedIn(false);
        }
        setInit(true);
      });
  },[]);


  return (
    <>
    {init ?
      <AppRouter isLoggedIn={isLoggedIn}/>
      : "회원정보 확인중..."
    }
    </>
  )
}

export default App;

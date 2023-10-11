import React, {useState} from 'react';
import { authService } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = ()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const onSubmit = (e)=>{
    e.preventDefault();
    if(newAccount){
      //Create Account 회원가입
      authService.createUserWithEmailAndPassword(email, password);
    }else{
      //로그인
      authService.signInWithEmailAndPassword(email, password);
    }
  }
  const onChange = (e) =>{
    // let name = e.target.value;
    const {target:{name, value}} = e;
    if(name ==="email"){
      setEmail(value);
    }else{
      setPassword(value);
    }    
  }
  return(
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder='email' value={email} onChange={onChange}/>
        <input name="password" type="password" placeholder='password' value={password} onChange={onChange}/>
        <button>{newAccount ? "create Account" : "Login in"} </button>
      </form>
    </div>
  )
}

export default Auth;
import React,{useState} from 'react';
import { collection, addDoc } from "firebase/firestore"; 

const Home = ()=>{
  const [post,setPost] = useState('');
  const onChange = (e)=>{
    //const value = e.target.value; //ECMA Script 2012
    const {target:{value}} = e; //ES6
    setPost(value);
  }
  const onSubmit = (e) =>{
    e.preventDefault();

  }
  return(
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={post} placeholder='포스트 쓰기' onChange={onChange}></input>
        <input type="submit" value="입력"></input>
      </form>
    </div>
  )
}

export default Home;
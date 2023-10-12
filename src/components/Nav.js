import React from "react";
import {Link} from 'react-router-dom';
/*
function Nav(){
  return(
    <nav>Navigation</nav>
  ) 
}
const Nav = ()=>{
  const test = ()=>{}
  return(
    <nav>Navigation</nav>
  )
}
*/
const Nav = ()=>(
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/profile">profile</Link></li>
    </ul>
  </nav>
);  

export default Nav;
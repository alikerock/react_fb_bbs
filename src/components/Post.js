import React, { useState } from "react";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

const Post = ({postObj,userConfirm})=>{

  const deletePost = async () =>{
    if(window.confirm('정말 삭제할까요')){
      await deleteDoc(doc(db, "posts", postObj.id));
    }    
  }
  const [edit, setEdit] = useState(false);
  const [newPost, setNewPost] = useState(postObj.content);
  const toggleEditMode = () => setEdit((prev)=>!prev);
  const onChange = (e) =>{
    //setNewPost(e.targer.value)
    const {target:{value}} = e;
    setNewPost(value);
  }
  const onSubmit = (e) =>{
    e.preventDefault();
  }
  return( 
  <li>
    {edit ? (
      <>
        <form onSubmit={onSubmit}>
          <input value={postObj.content} onChange={onChange} required/>
          <button>Update Post</button>
        </form>
        <button onClick={toggleEditMode}>cancel</button>
      </>
    ): (
      <>
      <h4>{postObj.content}</h4>
      { 
        userConfirm && (
          <>
            <button onClick={deletePost}>Delete</button>  
            <button onClick={toggleEditMode}>Edit</button>  
          </>
        )
      }
      </>
    )
  }
  </li>
  )
};

export default Post;

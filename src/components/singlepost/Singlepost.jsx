import { useContext, useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import './singlepost.css';
import axios from 'axios';
import { Context } from '../../context/Context';

const Singlepost = () => {
    let location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post ,setPost] = useState({})
    const [title ,setTitle] = useState("")
    const [desc ,setDesc] = useState("")
    const [updateMode ,setUpdateMode] = useState(false)
    const {user} = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleUpdate = async ()=>{
        try{
            await axios.put(`http://localhost:5000/api/posts/${post._id}` ,
            {
                username : user.username,
                title,
                desc
            });
            setUpdateMode(false)
        }catch(err){
            console.log(err)
        }
    }

    const handleDelete =async () =>{
        try{
            await axios.delete(`http://localhost:5000/api/posts/${post._id}` ,{data:{username:user.username}});
            window.location.replace("/");
        }catch(err){
            console.log(err)
        }
    }


    useEffect(()=>{
        const getPost = async () =>{
            const res = await axios.get("http://localhost:5000/api/posts/"+ path);
            setPost(res.data)
            setDesc(res.data.desc)
            setTitle(res.data.title)
        };
        getPost();
    },[path])
  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
            {post.photo &&(
                <img src={PF + post.photo} className="singlepostImg" />
            )}
            {
                updateMode ?  <input type="text" value={title} className="singlePostTitleInput" onChange={(e)=>setTitle(e.target.value)} autoFocus/> : (
                    <h1 className="singlepostTitle"> {post.title}
                {post.username === user?.username  && (
                    <div className="singlepostEdit">
                        <i className="singlepostIcon fa-solid fa-pen-to-square" onClick={()=> setUpdateMode(true)}></i>
                        <i className="singlepostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                    </div>
                )}
            </h1>
                )
            }
            <div className="singlepostInfo">
                <span className='singlepostAuthor'>
                    Author :
                    <Link className='link' to={`/?user=${post.username}`}>{post.username}</Link>
                    </span>
                <span className='singlepostDate'></span>
            </div>
            {
                updateMode ? (
                    <textarea className='singlePostDescInput' value ={desc}  onChange={(e)=>setDesc(e.target.value)} /> 
                ) : 
                (
                    <p className='singlepostDesc'>{post.desc}</p>
                )
            }
            {
                updateMode && ( <button onClick={handleUpdate} className="singlePostButton">Update</button>)
            }
        </div>
    </div>
  )
}

export default Singlepost

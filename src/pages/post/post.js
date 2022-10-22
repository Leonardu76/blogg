import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './post.css'
import {useEffect} from 'react'
import  { useState } from 'react'
import { useParams } from "react-router-dom"
import { FaCalendarAlt } from 'react-icons/fa';
import User from '../../components/userDetails/userDetails'




const Post = () => {
    // const [data, setData] = useState([])
    // const [postagens, setPostagens] = useState([])
    const [post, setPost] = useState([])
    const [, setError] = useState()
    const { id } = useParams()



    const GetPost  = async () => {
    
    
        fetch(`https://lavapi.000webhostapp.com/api/posts/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json()
        }
            throw response;
        })
         .then(post => {

            setPost(post.data)
         })
        .catch(error => {
            console.error("Error fetcj data: ", error)
            setError(error);
         } ) 
        }

   useEffect(() => {
    GetPost();
   })
   const url = 'home'
   const page = 'post'
   const id_user = post.id_user
    return (
        <div>

            <Navbar  url={url}/>
            {/* <h1 className='title'>Posts da categoria:{categoria}</h1> */}

                     {/* {Object.values(data).map(post => ( */}

<div className='post'>
<aside className='sider col-md-8'>
    
        <User id_user={id_user}/>

        </aside>

    <h1 className='post-top-titulo'>{post.titulo}</h1> 
    <img className='postImage' src={post.image} alt="" />

<div className='post-details'>
<b className='post-top-autor'>Autor: {post.autor}</b>
<b className='post-bottom-calendar'><FaCalendarAlt/>{post.created_at}</b>
</div>

    <br />
     <div className='post-body'>
     <h3 className='post-content'>
     {post.conteudo}</h3>

     </div>
   


            </div>

              {/* ) */}
             {/* )}  */}
        </div>
      

    )
}

export default Post
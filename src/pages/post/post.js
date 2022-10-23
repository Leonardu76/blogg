import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './post.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom"
import { FaCalendarAlt } from 'react-icons/fa';
import User from '../../components/userDetails/userDetails'
import {GetPost} from '../../components/api/Api'




const Post = () => {
    // const [data, setData] = useState([])
    // const [postagens, setPostagens] = useState([])
    const [post, setPost] = useState([])
    const { id } = useParams()

    const PostaById = async () => {

        try {
          const result = await GetPost(id)
          setPost(result)
    
        } catch (error) {
          
        }

      }
      useEffect(() => {
        PostaById();
      })
 
   
    const url = 'home'
    const idd = post.id_user
    return (
        <div>

            <Navbar url={url} />

            <div className='container'>
                <div className='post col-md-8'>

                    <aside className='sider'>
                        <User idd = {idd} />
                    </aside>

                    <h1 className='post-top-titulo'>{post.titulo}</h1>
                    <img className='post-image img-fluid' src={post.image} alt="" />

                    <div className='post-details col-md-12 '>
                        <b className='post-bottom-calendar'><FaCalendarAlt />{post.created_at}</b>
                    </div>
                        <br />
                    <div className='post-body'>
                        <br />
                        <h3 className='post-content'>{post.conteudo}</h3>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Post
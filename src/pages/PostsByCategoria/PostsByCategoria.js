import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './PostsByCategoria.css'
import { FaCalendarAlt } from 'react-icons/fa';
import {useEffect} from 'react'
import  { useState } from 'react'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { GetPostsByCat } from '../../components/api/Api'



const PostsByCategoria = () => {
    const [categoria, setCategoria] = useState([])
    const [postagens, setPostagens] = useState([])
    const { id } = useParams()
    
    
   const Post = async () => {

    try {
      const result = await GetPostsByCat(id)
      setPostagens(result.data.postagens)
      setCategoria(result.data.categoria)

    } catch (error) {
      
    }}

useEffect(() => {
Post()
})


    const url = 'home'

    return (
        <div>
            <Navbar  url={url}/>

<div className='container'>
<h1 className='title-cat title'>categoria:{categoria}</h1>

{Object.values(postagens).map(post => (

<div className='posts-cat posts col-md-12'>

<div>
        <h2 className='card-top-titulo'>{post.titulo}</h2> 
        <b className='card-top-autor'>De: {post.autor}</b>
</div>

<div className='card-body'> 

 <img className='img-post' src={post.image} alt="" />
    <p className='content-post'>{post.conteudo}.</p>

    <Link to={"/post/" + post.id} > 

    <button className='btnOpen  col-md-4'>Ver conteúdo</button></Link>            
    </div>
    <div className='card-bottom'>   
                    <p className='card-bottom-calendar'><FaCalendarAlt/>
                    <b>{post.created_at} </b></p></div>
             </div>
              )
             )} 
     </div>

        </div>
      

    )
}

export default PostsByCategoria
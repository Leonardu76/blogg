import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './PostsByCategoria.css'
import { FaCalendarAlt } from 'react-icons/fa';
import {useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom"
import { api } from '../../components/api/Api'



const PostsByCategoria = () => {
    const [categoria, setCategoria] = useState([])
    const [postagens, setPostagens] = useState([])
    const { id } = useParams()
    
    
   const Post = async (id) => {
    await api.get(`post/${id}/categoria`).then((response) => setCategoria(response.data.data.categoria))
    await api.get(`post/${id}/categoria`).then((response) => setPostagens(response.data.data.postagens))

   }
   useEffect(() => {
    if(id){
        Post(+id)
    }
  })

//   console.log(postagens)
//   console.log(id)
  console.log(categoria)
  const url = 'home'

    return (
        <div>
            <Navbar  url={url}/>

<div className='container'>
<h1 className='title-cat title'>categoria:{categoria}</h1>
{postagens && postagens.map((post) => (


<div className='posts-cat  col-md-12'>

<div>
        <h2 className='card-top-titulo'>{post.titulo}</h2> 
        <b className='card-top-autor'>De: {post.autor}</b>
</div>

<div className='card-body'> 

 <img className='img-post' src={post.image} alt="" />
    <p className='content-post-cat'>{post.conteudo}.</p>

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
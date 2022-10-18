import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './PostsByCategoria.css'
import { FaCalendarAlt } from 'react-icons/fa';
import {useEffect} from 'react'
import  { useState } from 'react'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"



const PostsByCategoria = () => {
    const [categoria, setCategoria] = useState([])
    // const [data, setData] = useState([])
    const [postagens, setPostagens] = useState([])
    const [, setError] = useState()
    const { id } = useParams()



    const GetPostsByCat  = async () => {
    
    
        fetch(`https://lavapi.000webhostapp.com/api/post/${id}/categoria`)
        .then(response => {
            if (response.ok) {
                return response.json()
        }
            throw response;
        })
         .then(postagens => {

            setCategoria(postagens.data.categoria)
            setPostagens(postagens.data.categoria_de)
         })
        .catch(error => {
            console.error("Error fetcj data: ", error)
            setError(error);
         } ) 
        }

   useEffect(() => {
    GetPostsByCat();
   },[])

    const url = 'home'

    return (
        <div>
            <Navbar  url={url}/>
            <h1 className='title'>categoria:{categoria}</h1>

                     {Object.values(postagens).map(post => (

<div className='posts-cat posts'>

<div className='cardTop'>
    <b className='card-top-titulo'>{post.titulo}</b> 
    <b className='card-top-titulo'>categoria {categoria}</b> <hr />
    <b className='card-top-titulo'>De: {post.autor}</b>
    </div>

<div className='cardBody'> 

 <img className='imgPost' src={post.image} alt="" />
    <p className='contentPost'>{post.conteudo}.</p>

    <Link to={"/post/" + post.id} > 

    <button className='btnOpen'>Ler</button></Link>
    <hr />
    </div>
    <div className='cardBottom'>   
            <p className='card-bottom-calendar'><FaCalendarAlt/><b>{post.created_at} </b></p></div>
     </div>
        
              )
             )} 

        </div>
      

    )
}

export default PostsByCategoria
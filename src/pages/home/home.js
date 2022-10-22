import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Side from '../../components/side/side'
import { Link } from "react-router-dom"
import './home.css'
import { FaCalendarAlt } from 'react-icons/fa';
import {useEffect} from 'react'
import  { useState } from 'react'





const Home = () => {
    const [data, setData] = useState([])
    const [, setError] = useState()

    const GetPosts  = async () => {
    
    
        fetch("https://lavapi.000webhostapp.com/api/posts")
        .then(response => {
            if (response.ok) {
                return response.json()
        }
            throw response;
        })
         .then(data => {
            setData(data)
         })
        .catch(error => {
            console.error("Error fetcj data: ", error)
            setError(error);
         } ) 
        }

   useEffect(() => {
    GetPosts();
      },[])

    const url = 'home'


    return (
        <div >
            <Navbar  url={url}/>
            <div className='container'>
        <h1 className='title'>Todas publicações</h1>
        <div className='post-div col-md-8'>
        <aside className='sider'>
 
         <Side/>
        </aside>

             {Object.values(data).map(post => ( 


    <div className='posts'>

        <div>
            <h2 className='card-top-titulo'>{post.titulo}</h2> 
            <b className='card-top-autor'>De: {post.autor}</b>
        </div>

        <div className='cardBody'> 

         <img className='imgPost img-fluid' src={post.image} alt="" />
            <p className='contentPost'>{post.conteudo}.</p>
            
            <Link to={"/post/" + post.id} > 

<button className='btnOpen col-md-3'>Ver conteúdo</button></Link>            

            </div>
            <div className='cardBottom'>   
                    <p className='card-bottom-calendar'><FaCalendarAlt/>
                    <b>{post.created_at} </b></p></div>
             </div>


))}



        </div>
        </div>
        </div>

    )
}

export default Home
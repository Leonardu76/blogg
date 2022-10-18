import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Side from '../../components/side/side'
import { Link } from "react-router-dom"

import './home.css'
import { FaCalendarAlt } from 'react-icons/fa';
import {useEffect} from 'react'
import  { useState } from 'react'


const home = () => {
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

    console.log(Object.values(data))

    return (
        <div>
            <Navbar  url={url}/>
            <h1 className='title'>Blog</h1>

        <div className='post-div'>
              <aside className='sider'>
        <Side/>

        </aside>
        {/* {data.map((post) => */}
             {Object.values(data).map(post => ( 

//    <div className='Post'>
        
    <div className='posts'>

        <div className='cardTop'>
            <b className='card-top-titulo'>{post.titulo}</b> <hr />
            <b className='card-top-titulo'>De: {post.autor}</b>
            </div>

        <div className='cardBody'> 

         <img className='imgPost' src={post.image} alt="" />
            <p className='contentPost'>{post.conteudo}.</p>
          
            <Link to={"/post/" + post.id} > 

<button className='btnOpen'>Ler</button></Link>            <hr />
            </div>
            <div className='cardBottom'>   
                    <p className='card-bottom-calendar'><FaCalendarAlt/><b>{post.created_at} </b></p></div>
             </div>

))}



        </div>
      
        </div>

    )
}

export default home
import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Side from '../../components/side/side'
import { Link } from "react-router-dom"
import './home.css'
import { FaCalendarAlt } from 'react-icons/fa';
import {useEffect} from 'react'
import  { useState } from 'react'
import {GetPosts} from '../../components/api/Api'

const Home = () => {
    const [data, setData] = useState([])

    const Posts = async () => 
    {
        try {
          const result = await GetPosts()
          setData(result.data)
        } catch (error) {
            
        }
    }

   useEffect(() => {
    Posts();
      },[])
    const url = 'home'


    return (
        <div >
            <Navbar  url={url}/>
            <div className=' post-div container'>
        <h1 className='title'>Todas publicações</h1>
        <div className=' col-md-8'>
        <aside className='sider'>
 
         <Side/>
        </aside>

             {Object.values(data).map(post => ( 


    <div className='posts'>

        <div>
            <h2 className='card-top-titulo'>{post.titulo}</h2> 
            <b className='card-top-autor'>De: {post.autor}</b>
        </div>

        <div className='card-body'> 

         <img className='img-post img-fluid' src={post.image} alt="" />
            <p className='contentPost'>{post.conteudo}.</p>
            
            <Link to={"/post/" + post.id} > 

<button className='btnOpen col-md-3'>Ver conteúdo</button></Link>            

            </div>
            <div className='card-bottom'>   
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
import React from 'react'
import './userDetails.css'
import {useEffect} from 'react'
import  { useState } from 'react'
import { FaFacebook, FaInstagram,  FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// import {GetUser} from '../../components/api/Api'
// import {GetPostsByIdUser} from '../../components/api/Api'
import { Link } from "react-router-dom"
import { api } from '../../components/api/Api'



const UserDetails = (props) => {
   const { idd } = props

   const [user, setUser] = useState([])
   const [posts, setPosts] = useState([])

  const PostByUser = async (idd) => {
    await api.get(`usuario/${idd}/postagens`).then((response) => setUser(response.data))
    await api.get(`usuario/${idd}/postagens`).then((response) => setPosts(response.data.post))
  }

useEffect(() => {
  if(idd){
    PostByUser(+idd)
  }
})


    return (

<div className='container'>

  <div className='user-details col-md-12'>
  <Link to={"/profile/" + user.id} style={{ textDecoration: "none", color: "white"}}>     

    <div className='user-card-top ' >
    <img className='user-image img-fluid' src={user.image} alt="" />
    </div>

    <div className='user-card-body col-md-12'>
    <p className='user-name'>{user.nome}</p>
    <p className='user-email'>{user.email}</p>
    <p className='user-sobre'>{user.sobre}</p>
   
  </div>
  </Link>
  <hr />
  <div className='user-card-footer'>
  <a target="_blank" rel="noreferrer" href={user.insta}><span className='user-rede insta'><FaInstagram/></span></a>
  
  
  <a target="_blank" rel="noreferrer" href={user.face}><span className='user-rede face'><FaFacebook/></span></a>

  <a target="_blank" rel="noreferrer" href={user.twitter}><span className='user-rede twitter'><FaTwitter/></span></a>

  <a target="_blank" rel="noreferrer" href=  {user.linkdin}><span className='user-rede linkdin'><FaLinkedinIn/></span></a>

  </div>
  <hr />
  <div className='container'>
  
      <h4 className='title-side'>POSTS RELACIONADOS</h4>
{posts && posts.map((post) => (

<div className='posts-relacioned ' key={post.id} >
<Link to={"/post/" + post.id}  style={{ textDecoration: "none", color: "white"}} target={"_blank"}>

    <div >
        <h4 className='titulo-posts-relacioned'>{post.titulo}</h4>
    </div>

    <div className='card-body row'>
        <img className='img-posts-relacioned img-fluid col-md-4 ' src={post.image} alt="" />
        <p className='content-posts-relacioned col-md-8' >{post.conteudo}.</p>
    </div>

    <div className='card-bottom-relacioned'>
        
    </div>
    </Link>

</div>
))}
</div>
  </div>
   
  
</div>
              


        
      
   )
}



    


export default UserDetails
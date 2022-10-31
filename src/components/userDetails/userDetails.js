import React from 'react'
import './userDetails.css'
import {useEffect} from 'react'
import  { useState } from 'react'
import { FaFacebook, FaInstagram,  FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import {GetUser} from '../../components/api/Api'
import { Link } from "react-router-dom"



const UserDetails = (props) => {
   const { idd } = props

    const [user, setUser] = useState([])


    const User = async () => {

      try {
        const result = await GetUser(idd)
        setUser(result)
  
      } catch (error) {
        
      }

    }
   useEffect(() => {
    User()
  })
console.log(user.id)

    return (
        <div>

<div className='container'>

  <div className='user-details col-md-12'>
  <Link to={"/profile/" + user.id} >     

    <div className='user-card-top nav'>
    <img className='user-image img-fluid' src={user.image} alt="" />
    <p className='user-name'>{user.nome}</p>
    </div>

    <div className='user-card-body'>
    <p className='user-email col-md-12'>{user.email}</p>
    <p className='user-sobre'>sobre</p>
    Lorem ipsum dolor sit amet consectetur, adipisici
    ng elit. At nulla possimus nobis, ipsam architec
    to placeat laboriosam odio ad excepturi
    dicta molestias a eius sint quis iure
    magni inventore maiores sit?
  </div>
  </Link>
  <div className='user-card-footer'>
  <a target="_blank" rel="noreferrer" href={user.insta}><span className='user-rede insta'><FaInstagram/></span></a>
  
  
  <a target="_blank" rel="noreferrer" href={user.face}><span className='user-rede face'><FaFacebook/></span></a>

  <a target="_blank" rel="noreferrer" href={user.twitter}><span className='user-rede twitter'><FaTwitter/></span></a>

  <a target="_blank" rel="noreferrer" href={user.linkdin}><span className='user-rede'><FaLinkedinIn/></span></a>

  </div>
  </div>
   
  
</div>
              

        {/* ))} */}

        </div>
        
      
   )
}



    


export default UserDetails
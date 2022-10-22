import React from 'react'
import './userDetails.css'
import {useEffect} from 'react'
import  { useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';



const UserDetails = (props) => {
   const { id_user } = props

    const [user, setUser] = useState([])
    const [, setError] = useState()

    const GetUser  = async () => {
    
      fetch(`https://lavapi.000webhostapp.com/api/usuarios/${id_user}`)
      .then(response => {
          if (response.ok) {
              return response.json()
      }
          throw response;
      })
       .then(user => {
        setUser(user.data)
       })
      .catch(error => {
          console.error("Error fetcj data: ", error)
          setError(error);
       } ) 
            
          
          
        }

   useEffect(() => {
    GetUser();
      })


    return (
        <div>


        




<div className='container'>
  <div className='user-details col-md-12'>

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

  <div className='user-card-footer'>
  <span className='user-rede insta'><FaInstagram/></span>
  <span className='user-rede face'><FaFacebook/></span>
  <span className='user-rede twitter'><FaTwitter/></span>
  <span className='user-rede'><FaTwitch/></span>
  </div>




  </div>
</div>
              

        {/* ))} */}

        </div>
        
      
   )
}



    


export default UserDetails
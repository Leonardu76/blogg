import React from 'react'
import './userDetails.css'
import {useEffect} from 'react'
import  { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';



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

{/* <Col md='8'>  */}

        

        {/* {Object.values(data).map(user => ( */}



<div>
<h1 className='teste'>{user.nome}
</h1>
</div>
              

        {/* ))} */}

        </div>
        
      
   )
}



    


export default UserDetails
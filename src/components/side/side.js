import React from 'react'
import './side.css'
import {useEffect} from 'react'
import  { useState } from 'react'
import { Link } from "react-router-dom"



const Side = (props) => {
   const { page } = props

    const [data, setData] = useState([])
    const [, setError] = useState()

    const GetCategorias  = async () => {
    
      fetch("https://lavapi.000webhostapp.com/api/categorias")
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
    GetCategorias();
      },[])




    return (
        <div>
        <div className={page === 'post' ? ('card-side card-side-post') :
       ('card-side') 
    }
        
        >
        <div className='card-topo'>
                <h3 className='card-titulo'>CATEGORIAS</h3>
                </div>
                <hr /> 

        {Object.values(data).map(categoria => (

<>

<Link to={"/categoria/" + categoria.id} >


                <div className='card-body'> 
                    
                      <p>{categoria.categoria}</p>
                      <hr /> 
                    </div>

                    <div className='card-bottom'>
                    
                    </div>
                    </Link>
                    </>

        ))}

        </div>
        </div>
   )
}



    


export default Side
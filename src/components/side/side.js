import React from 'react'
import './side.css'
import {useEffect} from 'react'
import  { useState } from 'react'
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';



const Side = () => {

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
        <div className='container'>
 <input type="checkbox" value="1" id="checkbox_toggle_cat" />
 <label for="checkbox_toggle_cat" class="hamburger-cat">&#9776;</label>
        <div className= "card-side col-md-5 menu-cat " 
    
        
        >
        <div className='card-topo'>
                <h4 className='card-titulo'>CATEGORIAS</h4>
        </div>
        <hr /> 

        {Object.values(data).map(categoria => (

<>

<Link to={"/categoria/" + categoria.id}  style={{ textDecoration: "none"}}>

                <div className='card-body' > 
                    <p className='categoria' >{categoria.categoria}</p>
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
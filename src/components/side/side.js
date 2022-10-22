import React from 'react'
import './side.css'
import {useEffect} from 'react'
import  { useState } from 'react'
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import {GetCategorias} from '../../components/api/Api'

const Side = () => {

    const [data, setData] = useState([])
    const Categorias = async () => {

        try {
          const result = await GetCategorias()
          setData(result)
    
        } catch (error) {
          
        }
    }

   useEffect(() => {
    Categorias();
      },[])

    return (
        <div className='container'>
        <input type="checkbox" value="1" id="checkbox_toggle_cat" />
        <label htmlFor="checkbox_toggle_cat" className="hamburger-cat">&#9776;</label>
        <div className= "card-side col-md-5 menu-cat ">
        <div className='card-topo'>
        <h4 className='card-titulo'>CATEGORIAS</h4>
        </div>

        {Object.values(data).map(categoria => (

<>

<Link to={"/categoria/" + categoria.id}  style={{ textDecoration: "none"}}>

                <div className='card-body' > 
                    <p className='categoria' >{categoria.categoria}</p>
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
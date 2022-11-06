import './side.css'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import { api } from '../../components/api/Api'


const Side = () => {

  const [data, setData] = useState([])
  const Categorias = async () => {
    await api.get("categorias").then((response) => setData(response.data.data))
  }

  useEffect(() => {
    Categorias();
  }, [])

  return (
    <div className='container'>
      <input type="checkbox" value="1" id="checkbox_toggle_cat" />
      <label htmlFor="checkbox_toggle_cat" className="hamburger-cat">&#9776;</label>
      <div className="card-side col-md-3 menu-cat ">

        <div className='card-topo'>
          <h4 className='card-titulo'>CATEGORIAS</h4>
        </div>

        {data && data.map((categoria) => (

          <Link to={"/categoria/" + categoria.id} style={{ textDecoration: "none" }} key={categoria.id}>

            <div className='card-body' key={categoria.id} >
              <p className='categoria' >{categoria.categoria}</p>
            </div>

            <div className='card-bottom'></div>
          </Link>
        ))}
      </div>
    </div>
  )
}






export default Side
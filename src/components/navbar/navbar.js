import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';



const Navbar = (props) => {

  const { url } = props



  return (
    <div>    

<nav className="navbar">
 <Link to='/'> <img className='logo' src="https://play-lh.googleusercontent.com/cWG9-bk2_zLdKsN9vsYEdbCReVfzgXU6FeHUmLI8a24FoZ05TpOLYXInCQ278FTwCw" alt="" />
  </Link>
 <div className="nav-links">
 <label  htmlFor="checkbox_toggle_nav" className="hamburger">&#9776;</label>
 <input type="checkbox" id="checkbox_toggle_nav" />
 <div className={url === 'register' ? ('navbarRegister menu') :
      url === 'login' ? ('navbarLogin menu') :
        url === 'home' ? ('navbarHome menu') : null
    }>
<div className='navBtn'>
        {url === 'register' ?
          <div>
            <Link to='/' >  <button className='registerBtn'> News</button></Link>
            <Link to='/login'> <button className='LoginBtn'><b>Login</b></button> </Link>
          </div> 

          :
          url === 'login' ?
          <div>
           <Link  to='/'><button className='registerBtn'><b>News</b></button></Link>
           <Link to='/register'> <button className='registerBtn'><b>Registrar-se</b></button></Link>
          </div>
        :

          url === 'home' ?
            <div>
               <Link to='/login' ><button className='NewsBtn' ><b>Login</b></button></Link>
               <Link to='/register' >  <button className='NewsBtn'> <b>Registrar-se</b></button></Link>
              <div className='searchDiv'>
                <input className='srchInput' type="text" placeholder='Pesquise aqui' />
                <button   className='btnSrch'><FaSearch /></button>
              </div>

            </div>
          : 
          null
      }
          </div>
 </div>
 </div>
 </nav>
    </div>
 )
}
    
 

export default Navbar

import React, { useState } from "react";
import './login.css'

// import {useEffect} from 'react'

import Navbar from '../../components/navbar/navbar'

import { FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const url = 'login'
  const [data] = useState([])
  
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  // const [status, setStatus] = useState({
  //   type: '',
  //   mensagem: ''
  // })

  const GetUser  = async e =>{
    e.preventDefault()

   let reqs =  await fetch("https://blogg-api.000webhostapp.com/login.php", {
      method: 'POST',
      headers: {
    'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, senha})
    })
    const ret = await reqs.json();
    // console.log(ret)

    // .then((response) =>response.json())
    // .then((responseJson) => {
    //   setData(responseJson.user)
    //       })
    //       console.log(email)


// if(responseJson.erro){
//   setStatus({
//     type:'erro', 
//     mensagem: responseJson.messagem
//    })

// }else{
//   setStatus({
//     type:'sucess', 
//     mensagem: responseJson.messagem
//    })

// }
    
//     }).catch(() => {
//       setStatus({
//        type:'erro', 
//        mensagem: 'Usuário não encontrado, tente mais tarde!'
//       })
//     })
  }
          
        

  const onChangeHandlerEmail = (e) => {

    setEmail(e.target.value)

  }

  const onChangeHandlerSenha = (e) => {

    setSenha(e.target.value)

  }

  // const onButtonClickHandler = () =>{
  //   useEffect(() => {
  //     GetUser();
  //       },[])
  // }




  return (

    <div className=" loginBackground">
    <Navbar url={url}/>

    <div className='container'>
          {/* <div className={status.type === 'erro' ? "errResponse" : status.type === 'sucess' ? "sucResponse" : null}>
{status.type === 'erro' ? <p> {status.mensagem}</p> : status.type === 'sucess' ? <p> {alert("Eu sou um alert!")}</p>: null}
</div> */}


    <div className='login-div col-md-12'>

     <form className='form-login col-md-4' onSubmit={GetUser}>  
     <h1 className='login-title'>Login</h1>
 {data}
    <label><b>Email</b></label> 
    <input className='inputForm' name='email' type="email" onChange={onChangeHandlerEmail} />

    <label><b>Senha</b></label> 
    <input className='inputForm' type="password" name='password'  onChange={onChangeHandlerSenha}/>

    <button className='btnLogin'  >Login</button>
    <p className='text'>Login com redes sociais</p>

  <div className='redesLogin'>
  <FaFacebook />
  <FaLinkedin />
  <FaGoogle/>
    </div>
    <p className='forget'>Esqueceu a senha?</p>

    </form>
    {/* <div className='img'>
        <img className='imgLogin' src={Login} alt="" />
    </div> */}
    </div>



    </div>
    </div>
  )
}

export default Login

import React, { useState } from "react";

import Navbar from '../../components/navbar/navbar'
import './register.css'
import { FaFacebook, FaLinkedin, FaGoogle } from 'react-icons/fa';


const Register = () => {
  const url = 'register'

  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })
  const onChangeHandlerNome = (e) => {

    setNome(e.target.value)

  }

  const onChangeHandlerEmail = (e) => {

    setEmail(e.target.value)

  }

  const onChangeHandlerSenha = (e) => {

    setSenha(e.target.value)

  }

  const onButtonClickHandler = async e =>{
    // console.log(nome, email, senha)
    e.preventDefault()

    await fetch("http://127.0.0.1:8000/api/usuarios", {
      method: 'POST',
      headers: {
    'Content-Type': 'application/json'
      },
      body: JSON.stringify({nome, email, senha})
    })
    .then((response) =>response.json())
    .then((responseJson) => {
if(responseJson.erro){
  setStatus({
    type:'erro', 
    mensagem: responseJson.errors
   })

}else{
  setStatus({
    type:'sucess', 
    mensagem: 'Usuário  cadastrado com sucesso!'
   })

}
    
    }).catch(() => {
      setStatus({
       type:'erro', 
       mensagem: 'Usuário não cadastrado, tente mais tarde!'
      })
    })
  }


  return (


    <div className="registerBackground">
      <Navbar url={url}/>
    <div className='container'>

<div className='register-div col-md-12'>
<div className={status.type === 'erro' ? "errResponse" : status.type === 'sucess' ? "sucResponse" : null}>
{status.type === 'erro' ? <p> {status.mensagem}</p> : status.type === 'sucess' ? <p> {status.mensagem}</p>: null}
</div>

<form className='form-register col-md-4'>  

<h1 className='RegisterTitle'>Registrar-se</h1>

<label><b>Nome</b></label> 
<input className='inputForm' type="text" name='name'  onChange={onChangeHandlerNome} placeholder='Digite seu nome'  required="required" 
/> 

<label><b>Email</b></label> 
<input className='inputForm' type="email"  name='email'  onChange={onChangeHandlerEmail} placeholder='Digite seu email'required="required" 
/>  

<label><b>Senha</b></label> 
<input className='inputForm' type="password" name='senha'  onChange={onChangeHandlerSenha} placeholder='Digite sua senha'   required="required" 
/>  

<button className='btnRegister' type='submit'onClick={onButtonClickHandler}>Registrar</button>
<p className='text'>Registrar com redes sociais</p>

<div className='redesRegister'>
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

export default Register
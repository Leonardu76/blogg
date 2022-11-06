import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './profile.css'
import { useEffect, useState } from 'react'
import { useParams,Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter,FaCalendarAlt } from 'react-icons/fa';
import { api } from '../../components/api/Api'


const User = () => {

    const { id } = useParams()


    const [user, setUser] = useState([])
    const [posts, setPosts] = useState([])

    const User = async (id) => {
        await api.get(`usuario/${id}/postagens`).then((response) => setUser(response.data))
        await api.get(`usuario/${id}/postagens`).then((response) => setPosts(response.data.post))
    }

    useEffect(() => {
        if (id) {
            User(+id)
        }
    })
    console.log(user)
    console.log(posts)

    const url = 'home'
    return (
        <div>
                        <Navbar url={url} />

            <aside className='sider-details'>
                <div className='user-details col-md-12'>
                    <Link to={"/profile/" + user.id} style={{ textDecoration: "none", color: "white" }}>

                        <div className='user-card-top ' >
                            <img className='user-image img-fluid' src={user.image} alt="" />
                        </div>

                        <div className='user-card-body'>
                            <p className='user-name'>{user.nome}</p>
                            <p className='user-email'>{user.email}</p>
                            <p className='user-sobre'>{user.sobre}</p>

                        </div>
                    </Link>
                    <hr />
                    <div className='user-card-footer'>
                        <a target="_blank" rel="noreferrer" href={user.insta}><span className='user-rede insta'><FaInstagram /></span></a>


                        <a target="_blank" rel="noreferrer" href={user.face}><span className='user-rede face'><FaFacebook /></span></a>

                        <a target="_blank" rel="noreferrer" href={user.twitter}><span className='user-rede twitter'><FaTwitter /></span></a>

                        <a target="_blank" rel="noreferrer" href={user.linkdin}><span className='user-rede linkdin'><FaLinkedinIn /></span></a>

                    </div>
                    <hr />

                </div>
            </aside>
            <div className='container'>
                <div className=' post-div-profile row'>
                    <h1 className='title-profile'>Publicações de {user.nome}</h1>
                    <div className=' col-md-8'>


                        {posts && posts.map((post) => (


                            <div className='posts-profile' key={post.id} >

                                <div >
                                    <h2 className='card-top-titulo-profile'>{post.titulo}</h2>
                                    <b className='card-top-autor-profile'>De: {post.autor}</b>
                                </div>

                                <div className='card-body'>
                                    <img className='img-post-profile img-fluid' src={post.image} alt="" />
                                    <p className='contentPost-profile'>{post.conteudo}.</p>
                                    <Link to={"/post/" + post.id} >
                                        <button className='btnOpen col-md-3'>Ver conteúdo</button></Link>
                                </div>

                                <div className='card-bottom'>
                                    <p className='card-bottom-calendar-profile'><FaCalendarAlt />
                                    <b>{post.created_at} </b></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>







            </div>
        </div>


    )
}

export default User
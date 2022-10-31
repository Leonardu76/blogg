import React from 'react'
import Navbar from '../../components/navbar/navbar'
import './profile.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom"
import { GetUser } from '../../components/api/Api'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';


const User = () => {
    // const [data, setData] = useState([])
    // const [postagens, setPostagens] = useState([])
    const [user, setUser] = useState([])
    const { id } = useParams()

    const UserById = async () => {

        try {
            const result = await GetUser(id)
            setUser(result)

        } catch (error) {

        }

    }
    useEffect(() => {
        UserById();
    })
    console.log(user)

    const url = 'home'
    return (
        <div>

            <Navbar url={url} />

            <div className='container'>

                <div className='profile col-md-12 row'>

                    <div className='profile-top col-md-6'>

                        <img className='profile-image img-fluid' src={user.image} alt="" />
                        
                        <h1 className='profile-top-titulo'>{user.nome} {user.sobrenome}</h1>

                        <h2 className='profile-top-titulo '>{user.email}</h2>

                        <div className='profile-card-footer'>

                            <a target="_blank" rel="noreferrer" href={user.insta}><span className='profile-rede insta'><FaInstagram /></span></a>


                            <a target="_blank" rel="noreferrer" href={user.face}><span className='profile-rede face'><FaFacebook /></span></a>

                            <a target="_blank" rel="noreferrer" href={user.twitter}><span className='profile-rede twitter'><FaTwitter /></span></a>

                            <a target="_blank" rel="noreferrer" href={user.linkdin}><span className='profile-rede'><FaLinkedinIn /></span></a>

                        </div>
                    </div>
                    <div className='profile-body col-md-5'>

                        <h3 className='profile-content'>{user.sobre}
                            Lorem ipsum dolor sit amet consectetur adipi
                            sicing elit. Quibusdam, perspiciatis nam similique incidunt inven
                            tore ipsum tempora quos pariatur, saepe odio nemo, voluptates aliquid
                            fugit illo sequi architecto dolorem quidem autem.
                        </h3>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default User
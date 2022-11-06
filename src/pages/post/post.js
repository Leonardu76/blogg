import Navbar from '../../components/navbar/navbar'
import './post.css'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { FaCalendarAlt } from 'react-icons/fa';
import User from '../../components/userDetails/userDetails'
import { api } from '../../components/api/Api'




const Post = () => {

    const [post, setPost] = useState([])
    const { id } = useParams()

    const PostById = async (id) => {
        await api.get(`posts/${id}`).then((response) => setPost(response.data))
    }
    useEffect(() => {
        if (id) {
            PostById(+id)
        }
    })


    const url = 'home'
    const idd = post.id_user
    return (
        <div>

            <Navbar url={url} />
            <aside className='sider-details row'>
                <User idd={idd} />
            </aside>
            <div className='container'>
                <div className='post col-md-8'>
                    <h1 className='post-top-titulo'>{post.titulo}</h1>
                    <h3 className='post-top-subtitulo'>{post.subtitulo}</h3>
                    <img className='post-image img-fluid' src={post.image} alt="" />

                    <div className='post-details col-md-12 '>
                        <b className='post-bottom-calendar'><FaCalendarAlt />{new Date(post.created_at).toDateString()}</b>

                    </div>

                    <br />
                    <div className='post-body'>
                        <br />
                        <h3 className='post-content'>{post.conteudo}</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Post
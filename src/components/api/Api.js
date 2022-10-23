// import  { useState } from 'react'
// const [data, setData] = useState([])



export const GetUsuarios  = async () => {
    // const [data, setData] = useState


    fetch("http://127.0.0.1:8000/api/usuarios/")
    .then((response) => response.json())
    .then((responseJson) => (
        console.log(responseJson)
        // setData(responseJson.records)
        ));
    }
    
    export const GetPosts  = async () => {
    
        try {
            let url = "http://127.0.0.1:8000/api/posts"
            const response = await fetch(url)
            return await response.json()
        
        } catch (error){
            console.log("error", error)
        }
    }

    
    export const GetCategorias  = async () => {
    
    
        try {
            let url = "http://127.0.0.1:8000/api/categorias"
            const response = await fetch(url)
            return await response.json()
        
        } catch (error){
            console.log("error", error)
        }
    }

   export const GetPostsByCat  = async (id) => {
    
        try {
            let url = `http://127.0.0.1:8000/api/post/${id}/categoria`
            const response = await fetch(url)
            return await response.json()
        
        } catch (error){
            console.log("error", error)
        }
        }

     export  const GetUser  = async (id) => {
    
            try {
                let url = `http://127.0.0.1:8000/api/usuarios/${id}`
                const response = await fetch(url)
                return await response.json()
            
            } catch (error){
                console.log("error", error)
            }
              }


         export     const GetPost = async (id) => {

                try {
                    let url = `http://127.0.0.1:8000/api/posts/${id}`
                    const response = await fetch(url)
                    return await response.json()
                
                } catch (error){
                    console.log("error", error)
                }
                  }
            
                  
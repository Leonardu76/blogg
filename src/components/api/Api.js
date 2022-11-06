import   axios from 'axios'
// const [data, setData] = useState([])


 const apiUrl = 'https://larapi-blog.000webhostapp.com/api'

 export const api = axios.create({
    baseURL: apiUrl
 })

// export const GetUsuarios  = async () => {
//     // const [data, setData] = useState


//     fetch("https://larapi-blog.000webhostapp.com/api/usuarios/")
//     .then((response) => response.json())
//     .then((responseJson) => (
//         console.log(responseJson)
//         // setData(responseJson.records)
//         ));
//     }
    
   
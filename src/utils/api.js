export const URL_API = "http://localhost:5000"
import toast from 'react-hot-toast';
import Cookies from 'universal-cookie';


export const isLive =  async () => {
     try{
         await fetch(URL_API)
     }catch(e){
         toast.error("Error en el servidor")
     } 
}

export const fecthApiAuth = async (path,method, body) => {
   const response = await fetch(`${URL_API}${path}`, {
      method: method,
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
   })
   const data = await response.json()
   return data
}

export const fecthApiPost =  async (path,method, body) => {
   const cookies = new Cookies
   const jwt = cookies.get(jwt)
   
   if (!jwt){
      return
   }

   const response = await fetch(`${URL_API}${path}`, {
      method: method,
      headers: {
         "Content-Type": "application/json",
         'Authorization': `Bearer ${jwtToken}`
         
      },
      body: JSON.stringify(body)
   })
   const data = await response.json()
   return data
}
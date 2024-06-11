import { fecthApiAuth } from "../api"
import toast from 'react-hot-toast';
import Cookies from "universal-cookie" 

export const SignUpAPI = async (name, email, password) => {
    const body = {
        name: name,
        password: password,
        email: email,
    }
    
    const response = await fecthApiAuth("/user/create", "POST", body)
    if(response.mode == "error"){
        const message = response.msg
        if(message.includes("duplicate")){
            toast.error("El correo ya existe")
            return false
        }
        toast.error(response.msg)
        return false
    }else{
        const {data} = response
        const cookies = new Cookies
        cookies.set("jwt", data.jwt, {path:'/'})
        cookies.set("username", data.username, {path:'/'})
        return true
    }
}

export const LoginAPI = async (email, password) => {
    const body = {
        password: password,
        email: email,
    }
    
    const response = await fecthApiAuth("/user/login", "POST", body)
    if(response.mode == "error"){
        toast.error(response.msg)
        return false
    }else{
        const { data } = response
        const cookies = new Cookies
        cookies.set("jwt", data.jwt, {path:'/'})
        cookies.set("username", data.username, {path:'/'})
        return true
    }
}

export const Logout = () => {
    const cookies = new Cookies
    cookies.remove("jwt", {path:'/'}) 
    cookies.remove("username", {path:'/'}) 
}
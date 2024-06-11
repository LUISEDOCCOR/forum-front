import { LayoutAuth } from "../layout/LayoutAuth";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { useRef } from "react";
import {useNavigate} from "react-router-dom"
import { LoginAPI } from "../utils/auth/auth"; 
import toast from "react-hot-toast"

export const Login = () => {

    const navigate = useNavigate()
    const emailRef = useRef("")
    const passwordRef = useRef("")

    const handelAPI = async (e) => {
        const email = emailRef.current.value
        const password = passwordRef.current.value
        
        if (email == "" || password == "") {
            toast.error("Rellene todos los campos")
        }else {
            const ok = await LoginAPI(email, password)
            if(ok){
                navigate("/")
                e.target.reset()
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handelAPI(e)

    }

    return (
        <LayoutAuth type="login">
            <form onSubmit={e => {handleSubmit(e)}} className="space-y-8">
                <Input reference={emailRef} placeholder="Correo" type="email"/>
                <Input reference={passwordRef} placeholder="Contraseña" type="text"/>
                <Button label="Entrar"/>
            </form>
        </LayoutAuth>
    )
}
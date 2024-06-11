import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useEffect } from "react";

export const useNavigateToHome = () => {
    const navigate = useNavigate();
        const cookies = new Cookies();
        const jwt = cookies.get('jwt');

    useEffect(() => {
        if(jwt){
            navigate("/")
        }
    },[])
}

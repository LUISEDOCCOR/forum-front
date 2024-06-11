import { useEffect } from "react"
import { isLive } from "../utils/api"

export const Layaot = ({children}) => {
    useEffect(() => {
        isLive()   
    },[])

    return (
        <div className="bg-cBlack min-h-screen">
            {children}
        </div>
    )
}
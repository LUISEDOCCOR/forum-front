export const Button = ({label}) => {
    return(
        <button 
            className="bg-neonColor text-cBlack w-full max-w-xl text-xl font-semibold py-2
            rounded-lg hover:opacity-70 transition-opacity">
            {label}
        </button>
    )
}
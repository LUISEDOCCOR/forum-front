export const Spin = () => {
    return (
        <div className="relative inline-flex">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
    )
}
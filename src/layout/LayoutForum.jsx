import { Layaot } from "./Layout"
import { useAuth } from "../context/authContex"

export const LayoutForum = ({children, header}) => {
    const { isLogged, handelClickLogout, username } = useAuth() 

    return (
       <Layaot>
            <header className="px-12 py-4">
                <nav className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <img 
                            className="rounded-full object-cover object-center h-16 w-16 aspect-square" 
                            src="/icon.webp" 
                            alt="icon codetopia" 
                        />
                        <h1 className="text-2xl font-semibold">Codetopia</h1>
                    </div>
                    {
                        isLogged ? (
                            <div className="flex items-center gap-6 text-xl font-semibold">
                                <a 
                                className="border px-3 py-1 border-transparent rounded 
                                hover:bg-neutral-800 hover:border-neutral-700 transition-colors"
                                href=""
                                >
                                    Publicar
                                </a>
                                <a 
                                className="border px-3 py-1 border-transparent rounded 
                                hover:bg-neutral-800 hover:border-neutral-700 transition-colors"
                                href=""
                                >
                                    Mis Publicaciones
                                </a>
                                <button 
                                className="border px-3 py-1 border-transparent rounded 
                                hover:bg-neutral-800 hover:border-neutral-700 transition-colors"
                                onClick={handelClickLogout}
                                >
                                    Salir
                                </button>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-medium">{username}</span>
                                    <img 
                                    className="rounded-full object-cover object-center h-8 w-8 aspect-square" 
                                    src={`https://ui-avatars.com/api/?name=${username}&background=random` }
                                    alt={`Profile image ${username}`}
                                />
                                </div>

                            </div>
                        ) : (
                            <a 
                                className="border px-4 py-1 border-transparent rounded 
                                hover:bg-neutral-800 hover:border-neutral-700 text-2xl transition-colors"
                                href="/login"
                                >
                                    Todas las funciones
                                </a>
                        )
                    }
                </nav>
            </header>
            <main className="mx-auto max-w-7xl py-12 space-y-8">
                <span className="text-lg">{header}</span>
                {children}
            </main>
       </Layaot>
    )
}
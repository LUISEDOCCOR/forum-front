import { Layaot } from "./Layout"
import { useNavigateToHome } from "../hooks/useNavigateToHome";

export const LayoutAuth = ({ children, type }) => {

    useNavigateToHome()

    return (
        <Layaot>
            <main className="h-screen grid place-content-center">
                <article className="space-y-12 w-full max-w-xl">
                    <img
                        className="rounded-full object-cover object-center h-20 w-20 aspect-square"
                        src="/icon.webp"
                        alt="icon codetopia"
                    />
                    <section className="space-y-5">
                        <h1
                            className="text-4xl font-medium"
                        >
                            {type == "login" ? "Bienvenido" : "Unete"} a Codetopia
                        </h1>
                        <p className="text-xl font-medium w-96 leading-snug">
                            Únete a nuestra comunidad y
                            descubre un mundo de conocimientos,
                            recursos y amigos apasionados por el
                            código.
                        </p>
                    </section>
                    {children}
                </article>
                <a className="mt-6 text-right" href={type == "login" ? "/signup" : "login"}>
                    {
                        type == "login" ?
                            "¿No tienes cuenta? Únete" :
                            "¿Ya tienes cuenta? Inicia sesión"
                    }
                </a>
            </main>
        </Layaot>
    )
}
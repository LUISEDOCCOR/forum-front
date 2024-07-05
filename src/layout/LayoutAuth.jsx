import { Layaot } from "./Layout";
import { useNavigateToHome } from "../hooks/useNavigateToHome";
import { Link } from "react-router-dom";

export const LayoutAuth = ({ children, type }) => {
  useNavigateToHome();

  return (
    <Layaot>
      <main className="grid h-screen place-content-center">
        <article className="w-full max-w-xl space-y-12">
          <img
            className="aspect-square h-20 w-20 rounded-lg object-cover object-center"
            src="/icon.webp"
            alt="icon codetopia"
          />
          <section className="space-y-5">
            <h1 className="text-4xl font-medium">
              {type == "login" ? "Bienvenido" : "Unete"} a Codetopia
            </h1>
            <p className="w-96 text-xl font-medium leading-snug">
              Únete a nuestra comunidad y descubre un mundo de conocimientos,
              recursos y amigos apasionados por el código.
            </p>
          </section>
          {children}
        </article>
        <Link
          className="mt-6 text-right"
          to={type == "login" ? "/signup" : "/login"}
        >
          {type == "login"
            ? "¿No tienes cuenta? Únete"
            : "¿Ya tienes cuenta? Inicia sesión"}
        </Link>
      </main>
    </Layaot>
  );
};

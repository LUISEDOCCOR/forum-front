import { Layaot } from "./Layout";
import { useAuth } from "../context/authContex";
import { Link } from "react-router-dom";

export const LayoutForum = ({ children, header }) => {
  const { isLogged, handelClickLogout, username } = useAuth();

  return (
    <Layaot>
      <header className="px-12 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="aspect-square h-12 w-12 rounded-lg"
              src="/icon.webp"
              alt="icon codetopia"
            />
            <a href="/">
              <h1 className="text-2xl font-semibold">Codetopia</h1>
            </a>
          </div>
          {isLogged ? (
            <div className="flex items-center gap-8 text-xl font-semibold">
              <Link
                className="shadow-nb shadow-nb-animation bg-[#ff69b4] px-6 py-2 text-xl"
                to="/addpost"
              >
                Publicar
              </Link>
              <Link
                className="shadow-nb shadow-nb-animation bg-[#ff7a5c] px-6 py-2 text-xl"
                to="/myposts"
              >
                Mis Publicaciones
              </Link>
              <button
                className="shadow-nb shadow-nb-animation bg-[#f4d738] px-6 py-2 text-xl"
                onClick={handelClickLogout}
              >
                Salir
              </button>
              <img
                className="aspect-square h-12 w-12 rounded-full border-2 border-black object-cover object-center"
                src={`https://ui-avatars.com/api/?name=${username}&background=random`}
                alt={`Profile image ${username}`}
              />
            </div>
          ) : (
            <Link
              className="shadow-nb shadow-nb-animation bg-[#a388ee] px-6 py-2 text-2xl"
              to="/login"
            >
              Todas las funciones
            </Link>
          )}
        </nav>
      </header>
      <main className="mx-auto max-w-7xl space-y-8 py-12">
        <h2 className="text-xl font-semibold">{header}</h2>
        {children}
      </main>
    </Layaot>
  );
};

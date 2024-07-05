import { Layaot } from "./Layout";
import { useAuth } from "../context/authContex";

export const LayoutForum = ({ children, header }) => {
  const { isLogged, handelClickLogout, username } = useAuth();

  return (
    <Layaot>
      <header className="px-12 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="aspect-square h-16 w-16 rounded-full object-cover object-center"
              src="/icon.webp"
              alt="icon codetopia"
            />
            <a href="/">
              <h1 className="text-2xl font-semibold">Codetopia</h1>
            </a>
          </div>
          {isLogged ? (
            <div className="flex items-center gap-6 text-xl font-semibold">
              <a
                className="rounded border border-transparent px-3 py-1 transition-colors hover:border-neutral-700 hover:bg-neutral-800"
                href="/addpost"
              >
                Publicar
              </a>
              <a
                className="rounded border border-transparent px-3 py-1 transition-colors hover:border-neutral-700 hover:bg-neutral-800"
                href="/myposts"
              >
                Mis Publicaciones
              </a>
              <button
                className="rounded border border-transparent px-3 py-1 transition-colors hover:border-neutral-700 hover:bg-neutral-800"
                onClick={handelClickLogout}
              >
                Salir
              </button>
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium">{username}</span>
                <img
                  className="aspect-square h-8 w-8 rounded-full object-cover object-center"
                  src={`https://ui-avatars.com/api/?name=${username}&background=random`}
                  alt={`Profile image ${username}`}
                />
              </div>
            </div>
          ) : (
            <a
              className="rounded border border-transparent px-4 py-1 text-2xl transition-colors hover:border-neutral-700 hover:bg-neutral-800"
              href="/login"
            >
              Todas las funciones
            </a>
          )}
        </nav>
      </header>
      <main className="mx-auto max-w-7xl space-y-8 py-12">
        <span className="text-xl font-semibold">{header}</span>
        {children}
      </main>
    </Layaot>
  );
};

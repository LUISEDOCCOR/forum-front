import { Layaot } from "./Layout";

export const LayoutPost = ({ children, type }) => {
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
            <h1 className="text-4xl font-medium">
              {type == "add" ? "Publica en Codetopa" : "Edita tu publicacion"}
            </h1>
          </section>
          {children}
          <div className="mt-4 text-lg text-right">
            <a href="/">Cancelar</a>
          </div>
        </article>
      </main>
    </Layaot>
  );
};

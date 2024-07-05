import { Layaot } from "./Layout";

export const LayoutPost = ({ children, type }) => {
  return (
    <Layaot>
      <main className="grid h-screen place-content-center">
        <article className="w-full max-w-xl space-y-12">
          <img
            className="aspect-square h-20 w-20 rounded-full object-cover object-center"
            src="/icon.webp"
            alt="icon codetopia"
          />
          <section className="space-y-5">
            <h1 className="text-4xl font-medium">
              {type == "add" ? "Publica en Codetopa" : "Edita tu publicacion"}
            </h1>
          </section>
          {children}
          <div className="mt-4 text-right text-lg">
            <a href="/">Cancelar</a>
          </div>
        </article>
      </main>
    </Layaot>
  );
};

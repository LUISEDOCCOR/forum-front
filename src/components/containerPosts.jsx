import { Spin } from "../components/spin"

export const ContainerPosts = ({isLoading, Posts}) =>     {
    
    return(
        <section className="space-y-6">
               {
                isLoading ? (
                    <div className="flex justify-center">
                        <Spin/>
                    </div>
                ) : (
                    
                    Posts.map(({ title, ID, content, author }) => (
                        <article key={ID} className="border border-neonColor rounded-md py-4">
                            <div className="px-2 flex items-center gap-2">
                                <img 
                                    className="rounded-full object-cover object-center h-8 w-8 aspect-square" 
                                    src={`https://ui-avatars.com/api/?name=${author}&background=random` }
                                    alt="icon codetopia" 
                                />
                                <span className="text-xl">{author}</span>
                            </div>
                            <div className="px-4 mt-6">
                                <h3 className="text-2xl font-bold">{title}</h3>
                                <p className="text-lg leading-sung mt-2">{content}</p>
                                <div className="flex items-center justify-end gap-6 mt-4">
                                    <a href="/">
                                        <svg className="h-6 w-6 stroke-cGray hover:scale-125 transition-transform" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.69995 8.70005L13.3 5.30005M6.69995 11.3L13.3 14.7M1 10C1 10.7956 1.31607 11.5587 1.87868 12.1213C2.44129 12.6839 3.20435 13 4 13C4.79565 13 5.55871 12.6839 6.12132 12.1213C6.68393 11.5587 7 10.7956 7 10C7 9.20435 6.68393 8.44129 6.12132 7.87868C5.55871 7.31607 4.79565 7 4 7C3.20435 7 2.44129 7.31607 1.87868 7.87868C1.31607 8.44129 1 9.20435 1 10ZM13 4C13 4.79565 13.3161 5.55871 13.8787 6.12132C14.4413 6.68393 15.2044 7 16 7C16.7956 7 17.5587 6.68393 18.1213 6.12132C18.6839 5.55871 19 4.79565 19 4C19 3.20435 18.6839 2.44129 18.1213 1.87868C17.5587 1.31607 16.7956 1 16 1C15.2044 1 14.4413 1.31607 13.8787 1.87868C13.3161 2.44129 13 3.20435 13 4ZM13 16C13 16.7956 13.3161 17.5587 13.8787 18.1213C14.4413 18.6839 15.2044 19 16 19C16.7956 19 17.5587 18.6839 18.1213 18.1213C18.6839 17.5587 19 16.7956 19 16C19 15.2044 18.6839 14.4413 18.1213 13.8787C17.5587 13.3161 16.7956 13 16 13C15.2044 13 14.4413 13.3161 13.8787 13.8787C13.3161 14.4413 13 15.2044 13 16Z" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))
                )
               }
            </section>
    )
}
import { Spin } from "../components/spin";
import { useAuth } from "../context/authContex";
import { deletePost } from "../utils/posts/post";

export const ContainerPosts = ({ isLoading, Posts, fetchData }) => {
  const { id } = useAuth();
  const handleClickDelete = async (post_id) => {
    const ok = await deletePost(post_id);
    if (ok) {
      fetchData();
    }
  };
  return (
    <section className="space-y-6">
      {isLoading ? (
        <div className="flex justify-center">
          <Spin />
        </div>
      ) : (
        Posts.map(({ title, ID, content, author, user_id }) => (
          <article key={ID} className="border border-neonColor rounded-md py-4">
            <div className="px-2 flex items-center gap-2">
              <img
                className="rounded-full object-cover object-center h-8 w-8 aspect-square"
                src={`https://ui-avatars.com/api/?name=${author}&background=random`}
                alt="icon codetopia"
              />
              <span className="text-xl">{author}</span>
            </div>
            <div className="px-4 mt-6">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-lg leading-sung mt-2">{content}</p>
              <div className="flex items-center justify-end gap-6 mt-4">
                {user_id == id && (
                  <>
                    <button
                      onClick={() => {
                        handleClickDelete(ID);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 stroke-cGray"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </button>
                    <a href={`editpost/${ID}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 stroke-cGray"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                        <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                        <path d="M16 5l3 3" />
                      </svg>
                    </a>
                  </>
                )}
              </div>
            </div>
          </article>
        ))
      )}
    </section>
  );
};

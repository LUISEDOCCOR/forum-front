export const Input = ({ type, placeholder, reference }) => {
  return (
    <input
      ref={reference}
      type={type}
      placeholder={placeholder}
      className="w-full max-w-xl rounded-lg border-2 border-cGray bg-transparent px-3 py-2 text-xl font-semibold text-white outline-none placeholder:text-cGray"
    ></input>
  );
};

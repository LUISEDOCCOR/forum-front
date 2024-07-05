export const Input = ({ type, placeholder, reference }) => {
  return (
    <input
      ref={reference}
      type={type}
      placeholder={placeholder}
      className="bg-transparent text-white w-full max-w-xl text-xl font-semibold py-2 px-3
            rounded-lg outline-none border-2 border-cGray placeholder:text-cGray "
    ></input>
  );
};

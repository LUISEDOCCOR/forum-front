export const Input = ({ type, placeholder, reference }) => {
  return (
    <input
      ref={reference}
      type={type}
      placeholder={placeholder}
      aria-label={placeholder}
      className="shadow-nb w-full max-w-xl bg-[#ff69b4] px-3 py-2 text-xl font-semibold text-cBlack outline-none placeholder:text-cBlack"
    ></input>
  );
};

export const TextArea = ({ contentRef }) => {
  return (
    <textarea
      ref={contentRef}
      placeholder="Que estás pensando?"
      className="shadow-nb h-96 w-full max-w-xl bg-[#7fbc8c] px-3 py-2 text-xl font-semibold text-cBlack outline-none placeholder:text-cBlack"
    ></textarea>
  );
};

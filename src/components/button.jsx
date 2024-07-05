export const Button = ({ label }) => {
  return (
    <button className="w-full max-w-xl rounded-lg bg-neonColor py-2 text-xl font-semibold text-cBlack transition-opacity hover:opacity-70">
      {label}
    </button>
  );
};

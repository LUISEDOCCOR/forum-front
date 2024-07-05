export const Spin = () => {
  return (
    <div className="relative inline-flex">
      <div className="h-6 w-6 rounded-full bg-blue-500"></div>
      <div className="absolute left-0 top-0 h-6 w-6 animate-ping rounded-full bg-blue-500"></div>
      <div className="absolute left-0 top-0 h-6 w-6 animate-pulse rounded-full bg-blue-500"></div>
    </div>
  );
};

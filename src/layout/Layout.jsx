import { useEffect } from "react";
import { isLive } from "../utils/api";
import { Toaster } from "react-hot-toast";

export const Layaot = ({ children }) => {
  useEffect(() => {
    isLive();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#daf5f0] text-cBlack">
      {children}
      <Toaster />
    </div>
  );
};

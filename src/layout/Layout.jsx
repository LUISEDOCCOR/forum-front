import { useEffect } from "react";
import { isLive } from "../utils/api";
import { Toaster } from "react-hot-toast";

export const Layaot = ({ children }) => {
  useEffect(() => {
    isLive();
  }, []);

  return (
    <div className="bg-cBlack min-h-screen w-full">
      {children}
      <Toaster />
    </div>
  );
};

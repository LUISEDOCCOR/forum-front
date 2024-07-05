import { useState } from "react";
import { useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logout } from "../utils/auth/auth";
import Cookies from "universal-cookie";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const jwt = cookies.get("jwt");
  const username = cookies.get("username");
  const id = cookies.get("id");
  const [isLogged, setLogged] = useState(false);

  const handelClickLogout = () => {
    Logout();
    navigate("/");
  };

  useEffect(() => {
    if (!jwt) {
      setLogged(false);
      navigate("/preview");
    } else {
      setLogged(true);
    }
  }, [jwt, navigate]);

  return (
    <AuthContext.Provider value={{ isLogged, handelClickLogout, username, id }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

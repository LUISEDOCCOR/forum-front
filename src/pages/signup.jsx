import { LayoutAuth } from "../layout/LayoutAuth";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { useRef } from "react";
import toast from "react-hot-toast";
import { SignUpAPI } from "../utils/auth/auth";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handelAPI = async (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (name == "" || email == "" || password == "") {
      toast.error("Rellene todos los campos");
    } else {
      const ok = await SignUpAPI(name, email, password);
      if (ok) {
        navigate("/");
        e.target.reset();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handelAPI(e);
  };

  return (
    <LayoutAuth type="signup">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="space-y-8"
      >
        <Input reference={nameRef} placeholder="Nombre" type="text" />
        <Input reference={emailRef} placeholder="Correo" type="email" />
        <Input reference={passwordRef} placeholder="Contraseña" type="text" />
        <Button label="Entrar" />
      </form>
    </LayoutAuth>
  );
};

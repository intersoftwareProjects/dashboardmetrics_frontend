import { useState, useEffect } from "react";
import Router from "next/router";
import { loginUser } from "@/lib/utils/auth";
import { removeToken } from "@/lib/utils/local_variables";
import { title } from "@/components/primitives";
import { Button, Divider, Input } from "@nextui-org/react";

import DefaultLayout from "@/layouts/default";
 
export function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    // Remove the User's token which saved before.
    removeToken();
  }, []);

  async function handleSubmit() {
    // e.preventDefault();

    try {
      setIsLoading(true);
      // API call:
      const data = await loginUser(username, password);
        console.log("Data is :", data);
      if (data.message && data.message.token) {
        if (rememberMe) {
          window.localStorage.setItem("token", data.message.token);
        } else {
          window.sessionStorage.setItem("token", data.message.token);
        }
        setTimeout(() => {
          Router.push("/dashboard");
        }, 1000);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <DefaultLayout>
      {/*  */}
      <div className="flex h-screen ">
        <div className="w-1/2 h-full">
          <img
            src="/login-background.jpg"
            alt="Login Background"
            className="w-full h-full object-cover filter blur-lg"
          />
        </div>
        <div className="w-1/2 h-full bg-[#EBE9E9] flex items-center justify-center relative">
          <div className="w-1/2 h-80 rounded-2xl bg-[#1b1d36] flex flex-col items-center justify-center p-5">
            <h1 className={`${title({ size: "sm", class: "mb-5" })} text-center`}>
              INICIO DE SESIÓN
            </h1>
            <Divider className="w-full mb-4" />
            <Input
              type="email"
              label="Correo electrónico"
              className="w-full mb-4 h-12"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              label="Contraseña"
              type="password"
              className="w-full mb-4 h-12"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className="w-full h-10 bg-[#007396] mb-6 text-md"
              onClick={() => handleSubmit()}
              isDisabled = {isLoading}
            >
              Iniciar Sesión
            </Button>
            <img
              src="/intersw.png"
              alt="Intersw Logo"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-0 h-40"
            />
          </div>
        </div>
      </div>
      {/*  */}
    </DefaultLayout>
  );
}
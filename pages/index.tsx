import { title, subtitle } from "@/components/primitives";
import { Button, Divider, Input } from "@nextui-org/react";
import * as React from "react";

import DefaultLayout from "@/layouts/default";

export default function LoginPage() {
  return (
    <DefaultLayout>
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
            />
            <Input
              label="Contraseña"
              type="password"
              className="w-full mb-4 h-12"
            />
            <Button
              className="w-full h-10 bg-[#007396] mb-6 text-md"
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
    </DefaultLayout>
  );
}
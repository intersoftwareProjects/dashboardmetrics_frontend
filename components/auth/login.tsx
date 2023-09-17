import {useEffect, useState} from "react";
import Router from "next/router";
import {loginUser} from "@/lib/utils/auth";
import {removeToken} from "@/lib/utils/local_variables";
import {title} from "@/components/primitives";
import {Button, Divider, Input} from "@nextui-org/react";
import {LogoIntersoftware} from "@/components/images";
import Image from "next/image";

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
        try {
            setIsLoading(true);
            setErrorMessage("");
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
                setErrorMessage("Usuario o contraseña incorrectos");
            }
        } catch (error) {
            console.log(error);
            setErrorMessage("Error al iniciar sesión");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <DefaultLayout>
            <div className="flex h-screen ">
                <div className=" h-full hidden lg:block">
                    <Image
                        src="/login-background.webp"
                        alt="Login Background"
                        width={5500}
                        height={3700}
                        className="h-full object-cover"
                        priority
                    />
                </div>
                <div
                    className="min-w-[100%] h-full bg-[#EBE9E9] flex flex-col items-center justify-center relative lg:min-w-[50%] overflow-y-auto">
                    <div
                        className="w-1/2 rounded-2xl bg-[#1b1d36] flex flex-col items-center justify-center p-5 overflow-y-auto">
                        <h1 className={`${title({size: "sm", class: "mb-5"})} text-center`}>
                            INICIO DE SESIÓN
                        </h1>
                        <Divider className="w-full mb-4 "/>
                        <Input
                            type="email"
                            label="Correo electrónico"
                            className="w-full mb-4 h-12 text-black"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            label="Contraseña"
                            type="password"
                            className="w-full mb-4 h-12 text-black"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errorMessage && (
                            <div className="text-red-500 text-center mb-4">{errorMessage}</div>
                        )}
                        {isLoading ? (
                            <Button
                                className="w-full h-10 bg-[#007396] mb-6 text-md"
                                style={{minHeight: "40px"}}
                                disabled
                            >
                                <i className="fa fa-spinner fa-spin"></i> Iniciando sesión...
                            </Button>
                        ) : (
                            <Button
                                className="w-full h-10 bg-[#007396] mb-6 text-md text-white"
                                onClick={() => handleSubmit()}
                                style={{minHeight: "40px"}}
                            >
                                Iniciar Sesión
                            </Button>
                        )}


                    </div>

                    <div className="flex-col relative top-[25%] mb-0 h-40">
                        <LogoIntersoftware
                            scale={0.6}
                        />
                    </div>


                </div>
            </div>
        </DefaultLayout>
    );
}
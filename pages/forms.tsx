import * as React from "react";
import Router from "next/router";
import { SiteNavbar } from "@/components/common/site_navbar";
import { Button } from "@nextui-org/react";
import { BsFillPersonFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

import Head from "next/head";

import DefaultLayout from "@/layouts/default";

export default function FormMainPage() {
    // Watchers
    React.useEffect(() => {
        const token = window.localStorage.getItem("token") || window.sessionStorage.getItem("token");
        if (!token) {
            redirectToLogin();
        }
    }, []);

    function redirectToLogin() {
        Router.push("/");
    }

    function handleForm1Click() {
        Router.push("/forms/internacionalizacion");
    }

    function handleForm2Click() {
        Router.push("/forms/talento_humano");
    }

    return (
        <DefaultLayout>
            <Head>
                <title>Intersoftware | Formularios</title>
            </Head>
            <SiteNavbar />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "30vh",
                }}
            >
                <Button
                    startContent={<BsFillPersonFill size={32} />}
                    onClick={handleForm2Click}
                    size="lg"
                    style={{ marginBottom: "5vh", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                    className="intersoftware bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-[350px]"
                >
                    <div style={{ borderRight: "1px solid white", height: "70%", marginLeft: "5px"}}></div>
                    <span style={{ textAlign: "center", flex: "1" }}>Encuesta de Talento Humano</span>
                </Button>
                <Button
                    startContent={<BiWorld size={32} />}
                    onClick={handleForm1Click}
                    size="lg"
                    style={{ marginBottom: "5vh", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                    className="intersoftware bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-[350px]"
                >
                    <div style={{ borderRight: "1px solid white", height: "70%", marginLeft: "5px"}}></div>
                    <span style={{ textAlign: "center", flex: "1" }}>Encuesta de Internacionalización</span>
                </Button>
                {/* <Button
                    startContent={<Gi3DGlasses size={32} />}
                    onClick={handleForm3Click}
                    size="lg"
                    className="intersoftware bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-[350px]"
                >
                    Formulario Para Gente Rarita
                </Button> */}
            </div>


        </DefaultLayout>
    );
}
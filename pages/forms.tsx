import * as React from "react";
import Router from "next/router";
import { SiteNavbar } from "@/components/common/site_navbar";
import { Button } from "@nextui-org/react";
import { BsFillPhoneFill } from "react-icons/bs";
import { Gi3DGlasses, GiCow } from "react-icons/gi";

import Head from "next/head";

import DefaultLayout from "@/layouts/default";

export default function FormNormPage() {
    // Watchers
    React.useEffect(() => {
        const token = window.localStorage.getItem("token") || window.sessionStorage.getItem("token");
        if (!token) {
            redirectToLogin();
        }
    }, []);

    function redirectToLogin() {
        // Router.push("/");
    }

    function handleForm1Click() {
        Router.push("/forms/form_norm");
    }

    function handleForm2Click() {
        Router.push("/forms/form_norm2");
    }

    function handleForm3Click() {
        Router.push("/forms/form_norm3");
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
                    startContent={<BsFillPhoneFill size={32} />}
                    onClick={handleForm1Click}
                    size="lg"
                    style={{ marginBottom: "5vh" }}
                    className="intersoftware bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-[350px]"
                >
                    Formulario Para Gente Normal
                </Button>
                <Button
                    startContent={<GiCow size={32} />}
                    onClick={handleForm2Click}
                    size="lg"
                    style={{ marginBottom: "5vh" }}
                    className="intersoftware bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-[350px]"
                >
                    Formulario Para Gente Normaln&apos;t
                </Button>
                <Button
                    startContent={<Gi3DGlasses size={32} />}
                    onClick={handleForm3Click}
                    size="lg"
                    className="intersoftware bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-[350px]"
                >
                    Formulario Para Gente Rarita
                </Button>
            </div>


        </DefaultLayout>
    );
}
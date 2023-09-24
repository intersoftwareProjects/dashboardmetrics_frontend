import * as React from "react";
import Router from "next/router";
import {SiteNavbar} from "@/components/common/site_navbar";
import Head from "next/head";

import DefaultLayout from "@/layouts/default";

export default function FormNormPage2() {
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

    return (
        <DefaultLayout>
            <Head>
                <title>Intersoftware | Formularios</title>
            </Head>
            <SiteNavbar/>

            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <p style={{
                    textAlign: "center",
                    margin: `calc(50vh - ${90}px) 0`,
                    fontSize: "50px",
                    color: "black"
                }}>Formulario Gente Normaln't</p>
            </div>
        </DefaultLayout>
    );
}
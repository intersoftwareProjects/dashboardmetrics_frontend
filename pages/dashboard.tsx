import { title, subtitle } from "@/components/primitives";
import { Button, Divider, Input } from "@nextui-org/react";
import * as React from "react";
import { useState } from "react";
import Router from "next/router";
import { Navbar } from "@/components/navbar";


import DefaultLayout from "@/layouts/default";

export default function DashboardPage() {
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
        <Navbar />
  
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
          <p style={{ textAlign: "center", margin: `calc(50vh - ${90}px) 0`, fontSize: "50px", color: "black" }}>Bienvenido</p>
        </div>
      </DefaultLayout>
    );
  }
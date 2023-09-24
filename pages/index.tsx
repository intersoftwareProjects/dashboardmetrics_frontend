import { title, subtitle } from "@/components/primitives";
import { Button, Divider, Input } from "@nextui-org/react";
import * as React from "react";
import { LoginForm } from "@/components/auth/login";
import Head from "next/head";

import DefaultLayout from "@/layouts/default";

export default function LoginPage() {
  return (
    <DefaultLayout>
      <Head>
        <title>Intersoftware | Inicio de Sesión</title>
      </Head>

      <LoginForm />

    </DefaultLayout>
  );
}
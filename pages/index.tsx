import "dotenv/config";
import { title, subtitle } from "@/components/primitives";
import { Button, Divider, Input } from "@nextui-org/react";
import * as React from "react";
import { LoginForm } from "@/components/auth/login";

import DefaultLayout from "@/layouts/default";

export default function LoginPage() {
  return (
    <DefaultLayout>

      <LoginForm />
      
    </DefaultLayout>
  );
}
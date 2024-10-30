"use client"

import React from "react";
import { Inter } from "next/font/google";
import { Amplify } from "aws-amplify";
import "./app.css";
import outputs from "@/amplify_outputs.json";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
       
    <html lang="en">
      <body>      
        <Authenticator>
          {children}
        </Authenticator>
      </body>
    </html>
  );
}

import type { Route } from "./+types/home";
import React from "react";
import Header from "~/components/header/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Content Copyright Controler" },
    { name: "Content Copyright Controller", content: "A content copyright checker for youtube videos, tiktokvideos, online content and more. For all copyright requirments check before you post. The tool can make mistakes and takes no responsability for any missed copyright infringment." },
  ];
}

export default function Home() {
  return(
    <h1>Home</h1>
 )
}

import type { Route } from "./+types/home";
import Header from "~/components/header/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Video Copyright Checker" },
    { name: "Video Controller", content: "A content copyright checker for youtube videos, tiktokvideos, online content and more. For all copyright requirments check before you post. The tool can make mistakes and takes no responsability for any missed copyright infringment." },
  ];
}

export default function About() {
  return (<h1>About</h1>)
}

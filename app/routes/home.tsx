import ContentChecker from "api/ContentChecker";
import type { Route } from "./+types/home";
import React, { useState } from "react";
import Header from "~/components/header/header";
import AudioPlayer from "~/components/player/audioPlayer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Content Copyright Controler" },
    {
      name: "Content Copyright Controller",
      content:
        "A content copyright checker for youtube videos, tiktokvideos, online content and more. For all copyright requirments check before you post. The tool can make mistakes and takes no responsability for any missed copyright infringment.",
    },
  ];
}

export default function Home() {
  return (
    <main className="flex items-center mt-8 flex-col gap-6">
      <h1 className="font-bold text-3xl">Upload music</h1>

      <AudioPlayer />
      <ContentChecker />
    </main>
  );
}

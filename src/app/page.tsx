"use client";
import React from "react";
import Summary from "@/components/Summary";
import Career from "@/components/Career";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Summary />
      <div className='border-t border-zinc-300 my-6'></div>
      <Career />
      <div className='border-t border-zinc-300 my-6'></div>
      <Skills />
      <div className='border-t border-zinc-300 my-6'></div>
      <Projects />
    </>
  );
}

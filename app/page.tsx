// import Image from "next/image";
"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}

"use client"
import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import BodySection from "./components/body";
import TextSection from "./components/text";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-10 bg-black text-white">
      <Navbar/>
      <Hero/>
      <BodySection/>
      <TextSection/>
    </main>
  );
}

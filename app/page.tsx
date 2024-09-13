

import Approch from "@/components/Approch";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import React from "react";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        <FloatingNav navItems= {navItems}></FloatingNav>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <Experience></Experience>
        <Approch></Approch>
        <Footer></Footer>
      </div>
    </main>
  );
}

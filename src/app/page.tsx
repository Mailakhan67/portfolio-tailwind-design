'use client';
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Image from "next/image";


export default function Home() {
  useEffect(()=>{
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay :100,
      mirror : true,
      anchorPlacement:'bottom-bottom',
      offset:160,
    })
    AOS.refresh()
  },[])
  return (
   <div>
   
   <Header/>
<Hero/>

   </div>
  );
}

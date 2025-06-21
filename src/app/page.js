"use client";

import { StarField } from "@/particles/StarField";

console.log("StarField component loaded" , StarField);

export default function Home() {

  return (
   <div className="relative h-screen overflow-hidden">
    <StarField className="absolute inset-0 z-0"  />
    <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-white text-8xl font-bold">TRLVDSGN</h1>
  </div>
    </div>


  );
}

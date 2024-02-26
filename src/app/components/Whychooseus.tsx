
"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import musicSchoolContent from "../data/musicSchoolContent";

function Whychooseus() {
  return (
    <div>
       <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default Whychooseus

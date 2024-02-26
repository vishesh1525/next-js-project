'use client'
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import musicSchoolTestimonials from "../data/musictestimonials"
function TestimonialCards() {
  return (
    <div className="h-[30rem] w-3/4 m-4 dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden ml-28">
      <h2 className="text-3xl font-bold text-center mb-8 z-10 mt-5">Hear our Harmony:Voice of Sucess</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
        items={musicSchoolTestimonials}
        direction="right"
        speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCards

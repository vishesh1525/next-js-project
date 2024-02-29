import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import Whychooseus from "./components/Whychooseus";
import TestimonialCards from "./components/TestimonialCards";
import Upcomingwebinars from "./components/upcomingwebinars";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    
    <h1 className="text-2xl text-center text-white">Vishesh Musics</h1>
    <HeroSection/>
    <FeaturedCourses/>
    <Whychooseus/>
    <TestimonialCards/>
    <Upcomingwebinars/>
    <Instructors/>
    <Footer/>
    </main>
  
  );
}

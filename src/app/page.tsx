import Courses from "@/components/Courses";
import HeroSection from "@/components/HeroSection";
import TestimoniaCards from "@/components/TestimoniaCards";
import WhyChooseUs from "@/components/WhyChooseUs";

import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <Courses/>
    <WhyChooseUs/>
    <TestimoniaCards/>
    </>
  );
}

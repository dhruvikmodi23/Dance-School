import Courses from "@/components/Courses";
import HeroSection from "@/components/HeroSection";
import TestimoniaCards from "@/components/TestimoniaCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <Courses/>
    <WhyChooseUs/>
    <TestimoniaCards/>
    <UpcomingWebinars/>
    </>
  );
}

import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
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
    <Instructors/>
    </>
  );
}

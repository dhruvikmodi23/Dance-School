"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { cn } from "@/lib/utils";
const danceSchoolTestimonials = [
    {
      quote:
        "Joining this dance academy was the best decision of my life. I not only learned Bharatanatyam but also built immense confidence in performing.",
      name: 'Ananya Rao',
      title: 'Bharatanatyam Student',
    },
    {
      quote:
        "The energy and joy in every Garba session are unmatched. I've made lifelong friends and feel more connected to my culture than ever before.",
      name: 'Kunal Shah',
      title: 'Garba Student',
    },
    {
      quote:
        "Thanks to the supportive instructors here, I mastered my first Kathak performance with grace and precision. They truly care about your growth.",
      name: 'Ritika Mehta',
      title: 'Kathak Student',
    },
    {
      quote:
        "I never imagined learning Bhangra online could be this fun and effective! The classes are super engaging, and the feedback is instant.",
      name: 'Arjun Verma',
      title: 'Bhangra Student',
    },
    {
      quote:
        "From classical Odissi to contemporary fusion, this school offers so many opportunities to explore and grow as a dancer. I feel inspired every day.",
      name: 'Ishita Roy',
      title: 'Fusion Dance Student',
    },
  ];
  

function TestimoniaCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
    <h2 className="text-3xl font-bold text-center mb-8 z-10">Echoes of Expression: Real Moves, Real Stories</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
            items={danceSchoolTestimonials}
            direction="right"
            speed="slow"
  />
        </div>
    </div>
</div>
  )
}

export default TestimoniaCards

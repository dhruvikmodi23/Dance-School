'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomingWebinars() {
    const featuredDanceWebinars = [
        {
          title: 'Foundations of Classical Indian Dance',
          description:
            'Explore the roots and techniques of classical dance forms like Bharatanatyam, Kathak, and Odissi.',
          slug: 'foundations-of-classical-indian-dance',
          isFeatured: true,
        },
        {
          title: 'Mastering Expressions in Dance (Abhinaya)',
          description:
            'Learn how to convey emotion and story through facial expressions and body language in classical dance.',
          slug: 'mastering-abhinaya',
          isFeatured: true,
        },
        {
          title: 'Folk Dance from India: A Cultural Journey',
          description:
            'Get introduced to vibrant folk dances like Bhangra, Garba, Ghoomar, and Lavani across India.',
          slug: 'folk-dance-cultural-journey',
          isFeatured: true,
        },
        {
          title: 'Contemporary Dance Techniques',
          description:
            'Blend modern and traditional dance styles with creative choreography and storytelling.',
          slug: 'contemporary-dance-techniques',
          isFeatured: true,
        },
        {
          title: 'Perfecting Your Stage Performance',
          description:
            'Learn tips for stage presence, posture, and performing confidently during live dance shows.',
          slug: 'perfecting-stage-performance',
          isFeatured: true,
        },
        {
          title: 'Building a Career in Dance',
          description:
            'Explore various paths in the dance industry — from choreography and teaching to stage and screen.',
          slug: 'building-career-in-dance',
          isFeatured: true,
        },
      ];
      
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Dance Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
           items={featuredDanceWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: webinar.slug
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars

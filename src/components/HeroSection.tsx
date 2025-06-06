import React from 'react'
import Link  from 'next/link'
import { Spotlight } from './ui/spotlight-new'
import { Button } from './ui/moving-border'

function HeroSection() {
  return (
    <div 
    className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 '
    >
        <Spotlight/>
       <div className="p-4 relative z-10 w-full text-center">
            <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl
            font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400
            '>Master the Art of Dance</h1>
            <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Celebrate the vibrant soul of India through its classical elegance and folk energy. From Bharatanatyam to Bhangra, dance is not just movement—it's storytelling, tradition, and joy in motion.</p>
            <div className='mt-4'>
            <Link href={"/courses"}>
                <Button>
              Explore courses
              </Button>
            </Link>    
            </div>    
       </div>

    </div>
  )
}

export default HeroSection

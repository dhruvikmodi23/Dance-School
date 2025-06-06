import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';

const danceSchoolContent = [
    {
      title: 'Find Your Rhythm: A Personal Journey Through Dance',
      description:
        'Embark on a dance journey that reflects your unique style and passion. Our personalized training adapts to your pace and preferences, guiding you to discover the dancer within. With expert support and inspiring lessons, your dream to dance becomes reality.',
    },
    {
      title: 'Master the Art of Expression',
      description:
        'Dance is more than movement — it’s emotion, culture, and connection. Our courses help you master storytelling through graceful gestures, powerful footwork, and vibrant rhythm. Express yourself with every step you take.',
    },
    {
      title: 'Explore the Diversity of Indian Dance',
      description:
        'From classical Bharatanatyam to energetic Bhangra and soulful Odissi, experience the incredible variety of dance forms India has to offer. Each class is a cultural experience, connecting you with tradition, history, and creativity.',
    },
    {
      title: 'Interactive Classes with Real-Time Feedback',
      description:
        'Our live sessions provide immediate guidance from experienced instructors. Get corrections, tips, and encouragement in real time, helping you improve quickly and confidently with each move you learn.',
    },
    {
      title: 'Innovative and Evolving Curriculum',
      description:
        'Stay in step with the latest in dance education. We combine traditional techniques with modern approaches, ensuring every dancer receives a well-rounded and up-to-date learning experience.',
    },
    {
      title: 'Unlimited Possibilities for Growth',
      description:
        'Whether you’re a beginner or advanced performer, our broad course offerings and resource-rich platform support continuous growth. There’s always a new style to learn, routine to perfect, and stage to conquer.',
    },
  ];
  
function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={danceSchoolContent} />
    </div>
  )
}

export default WhyChooseUs

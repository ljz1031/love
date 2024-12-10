import React from 'react'
import HomeLayout from '../components/layout/HomeLayout'
import HeroSection from '../components/sections/HeroSection'
import FeatureSection from '../components/sections/FeatureSection'
import TestimonialSection from '../components/sections/TestimonialSection'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <HomeLayout>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <CTASection />
    </HomeLayout>
  )
} 
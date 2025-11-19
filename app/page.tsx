'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import ExpertiseSection from '@/components/expertise-section'
import ServicesPreview from '@/components/services-preview'
import CtaSection from '@/components/cta-section'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ServicesPreview />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}

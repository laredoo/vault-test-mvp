import Link from 'next/link'
import { Zap } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full">
            <Zap className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-semibold text-primary-foreground">Ready to secure your application?</span>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          Let's discuss your testing needs
        </h2>

        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          I'm here to help you identify vulnerabilities, ensure data integrity, and build confidence in your application's security. Get in touch to discuss your project requirements.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
            Schedule Consultation
          </Link>
          <Link href="/portfolio" className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { Shield, CheckCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold text-sm">Trusted Security Testing</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Security Testing You Can Trust
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I specialize in comprehensive QA testing with an unwavering commitment to data security and application integrity. Every test is conducted with meticulous attention to detail and security best practices.
            </p>

            {/* Value Props */}
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">10+ years of QA expertise with security focus</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Data integrity verification on every project</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Comprehensive penetration and vulnerability testing</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center">
                Start a Project
              </Link>
              <Link href="/portfolio" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center">
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 shadow-xl">
              <div className="space-y-4">
                <div className="bg-card/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-mono text-primary-foreground">Security Status</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-foreground">100% Secure</div>
                  <div className="text-sm text-primary-foreground/80">All systems verified</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card/20 rounded-lg p-4">
                    <div className="text-3xl font-bold text-primary-foreground">500+</div>
                    <div className="text-sm text-primary-foreground/80">Tests Completed</div>
                  </div>
                  <div className="bg-card/20 rounded-lg p-4">
                    <div className="text-3xl font-bold text-primary-foreground">98%</div>
                    <div className="text-sm text-primary-foreground/80">Client Satisfaction</div>
                  </div>
                </div>

                <div className="bg-card/20 rounded-lg p-4">
                  <div className="text-sm font-mono text-primary-foreground text-pretty">
                    Vulnerability scanning • Penetration testing • Performance audit • Security compliance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

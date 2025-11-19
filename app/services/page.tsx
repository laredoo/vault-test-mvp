import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Lock, Zap, BarChart3, Shield, Bug, CheckCircle, FileCheck, Eye } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Lock,
      title: 'Security Penetration Testing',
      description: 'In-depth penetration testing to identify vulnerabilities before attackers do.',
      includes: [
        'Network vulnerability scanning',
        'Application penetration testing',
        'Social engineering assessment',
        'Detailed security reports'
      ],
      timeframe: '2-4 weeks'
    },
    {
      icon: Bug,
      title: 'Functional QA Testing',
      description: 'Comprehensive functional testing ensuring all features work as intended.',
      includes: [
        'Requirements analysis',
        'Test case development',
        'Manual and automated testing',
        'Regression testing'
      ],
      timeframe: '1-3 weeks'
    },
    {
      icon: BarChart3,
      title: 'Performance & Load Testing',
      description: 'Verify application performance under various load conditions.',
      includes: [
        'Load testing (concurrent users)',
        'Stress testing (breaking points)',
        'Performance profiling',
        'Optimization recommendations'
      ],
      timeframe: '1-2 weeks'
    },
    {
      icon: Shield,
      title: 'Compliance & Security Audit',
      description: 'Ensure adherence to industry standards and security frameworks.',
      includes: [
        'OWASP Top 10 assessment',
        'GDPR/HIPAA compliance check',
        'SOC 2 Type II readiness',
        'Security policy review'
      ],
      timeframe: '2-3 weeks'
    },
    {
      icon: Eye,
      title: 'Data Integrity Verification',
      description: 'Rigorous validation of data consistency and integrity across systems.',
      includes: [
        'Database validation',
        'Data accuracy testing',
        'Integration data flow',
        'Backup/recovery testing'
      ],
      timeframe: '1-2 weeks'
    },
    {
      icon: FileCheck,
      title: 'Test Automation Implementation',
      description: 'Build scalable automated testing frameworks for continuous validation.',
      includes: [
        'Test strategy development',
        'Framework implementation',
        'CI/CD integration',
        'Ongoing maintenance'
      ],
      timeframe: '3-8 weeks'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Comprehensive Testing Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Tailored testing solutions designed to meet your specific project requirements. Each service is customized to ensure maximum security, performance, and reliability.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon
                return (
                  <div key={idx} className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-foreground mb-3">What's Included:</p>
                      <ul className="space-y-2">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center pt-6 border-t border-border">
                      <span className="text-sm text-muted-foreground">Timeframe: {service.timeframe}</span>
                      <Link href="/contact" className="text-primary hover:text-accent transition-colors font-semibold text-sm">
                        Inquire →
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 sm:py-24 lg:py-32 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Our Testing Process</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: '1', title: 'Planning', desc: 'Define scope, requirements, and testing strategy' },
                { num: '2', title: 'Execution', desc: 'Conduct comprehensive testing across all areas' },
                { num: '3', title: 'Analysis', desc: 'Document findings and provide recommendations' },
                { num: '4', title: 'Reporting', desc: 'Deliver detailed reports with actionable insights' }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-background rounded-xl border border-border p-6 text-center h-full">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                      {step.num}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border transform -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact me to discuss your testing needs and receive a custom proposal.
            </p>
            <Link href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Schedule Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

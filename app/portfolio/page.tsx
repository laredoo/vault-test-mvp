import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight, TrendingUp, Users, Lock } from 'lucide-react'

export default function PortfolioPage() {
  const projects = [
    {
      title: 'E-Commerce Platform Security Audit',
      client: 'Global Retail Corporation',
      industry: 'E-commerce',
      challenge: 'Needed comprehensive security testing before Black Friday sales surge',
      solution: 'Conducted penetration testing and vulnerability assessment, implemented 150+ security fixes',
      results: [
        '100% PCI-DSS compliance achieved',
        '50+ vulnerabilities identified and fixed',
        '$2M+ in potential fraud prevented'
      ],
      icon: Lock
    },
    {
      title: 'Mobile App Automation Testing',
      client: 'Financial Services Startup',
      industry: 'FinTech',
      challenge: 'Needed rapid testing for weekly release cycles without compromising quality',
      solution: 'Built automated testing framework covering 5000+ test scenarios',
      results: [
        '70% faster testing cycles',
        '95% test coverage achieved',
        'Zero production bugs in 18 months'
      ],
      icon: TrendingUp
    },
    {
      title: 'SaaS Performance Optimization',
      client: 'Enterprise Software Company',
      industry: 'SaaS',
      challenge: 'Application performance degraded under 10,000+ concurrent users',
      solution: 'Comprehensive load testing and performance profiling with optimization',
      results: [
        '40% improvement in response time',
        'Handled 100,000+ concurrent users',
        'Annual infrastructure savings of $500K'
      ],
      icon: Users
    },
    {
      title: 'Healthcare Compliance Testing',
      client: 'Medical Technology Provider',
      industry: 'Healthcare',
      challenge: 'HIPAA compliance verification required for system deployment',
      solution: 'In-depth security and data integrity testing with compliance mapping',
      results: [
        'HIPAA audit passed on first attempt',
        'Zero data breach incidents',
        'Reduced compliance risks by 95%'
      ],
      icon: Lock
    },
    {
      title: 'Data Migration Validation',
      client: 'Fortune 500 Financial Institution',
      industry: 'Finance',
      challenge: 'Moving 50M+ records across legacy and modern systems',
      solution: 'Developed specialized data validation framework ensuring 100% accuracy',
      results: [
        'Perfect data integrity (100%)',
        '$0 data loss or discrepancies',
        'Seamless migration completed on schedule'
      ],
      icon: TrendingUp
    },
    {
      title: 'API Security Testing',
      client: 'Tech Startup',
      industry: 'SaaS',
      challenge: 'Public APIs exposed to potential security threats',
      solution: 'Complete API penetration testing and security hardening',
      results: [
        '25+ API vulnerabilities fixed',
        'Rate limiting and authentication enhanced',
        'Zero security incidents post-launch'
      ],
      icon: Lock
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
              Portfolio of Success
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Real-world projects where comprehensive testing and security expertise made a measurable impact on business outcomes.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {projects.map((project, idx) => {
                const Icon = project.icon
                return (
                  <div key={idx} className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <Icon className="w-5 h-5 text-primary" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{project.industry}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      </div>

                      <p className="text-muted-foreground mb-6">{project.client}</p>

                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-2">Challenge</p>
                          <p className="text-foreground">{project.challenge}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-2">Solution</p>
                          <p className="text-foreground">{project.solution}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-2">Key Results</p>
                          <ul className="space-y-1">
                            {project.results.slice(0, 2).map((result, i) => (
                              <li key={i} className="text-foreground text-sm">✓ {result}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-border">
                        <div className="flex flex-wrap gap-2">
                          {project.results.map((result, i) => (
                            <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                              {result.split(' ').slice(0, 2).join(' ')}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-24 lg:py-32 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Projects Tested' },
                { value: '50+', label: 'Vulnerabilities Found' },
                { value: '$100M+', label: 'Client Asset Protected' },
                { value: '98%', label: 'Client Satisfaction' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Let's add your project to this list
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact me to discuss how I can help secure and optimize your application.
            </p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Start Your Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

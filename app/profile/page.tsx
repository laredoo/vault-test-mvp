import Header from '@/components/header'
import Footer from '@/components/footer'
import { Award, Briefcase, Code, Users } from 'lucide-react'

export default function ProfilePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-card border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                  Professional QA Testing Expert
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With over 10 years of dedicated experience in quality assurance and security testing, I've helped hundreds of companies identify vulnerabilities, ensure data integrity, and deploy secure applications with confidence. My passion lies in creating robust testing strategies that protect both user data and business interests.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <p className="text-muted-foreground">Projects Tested</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <p className="text-muted-foreground">Years Experience</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <p className="text-muted-foreground">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Technical Skills</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Testing Methodologies</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">Functional Testing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">Security & Penetration Testing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">Performance & Load Testing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">Automated Test Automation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">Data Integrity Verification</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Tools & Technologies</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">Selenium, Cypress, Playwright</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">OWASP ZAP, Burp Suite</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">JMeter, LoadRunner</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">SQL, Git, CI/CD Pipelines</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">AWS, Azure, Docker</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 sm:py-24 lg:py-32 bg-card">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Certifications & Credentials</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, title: 'ISTQB Certified', desc: 'Test Engineer Certification' },
                { icon: Briefcase, title: 'OWASP Certified', desc: 'Application Security Expert' },
                { icon: Code, title: 'AWS Certified', desc: 'Security Fundamentals' },
                { icon: Users, title: 'SOC 2 Auditor', desc: 'Compliance Verification' }
              ].map((cert, idx) => {
                const Icon = cert.icon
                return (
                  <div key={idx} className="bg-background rounded-xl p-6 border border-border text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Professional Experience</h2>
            
            <div className="space-y-8">
              {[
                {
                  role: 'Senior QA Security Specialist',
                  company: 'Enterprise Security Solutions',
                  period: '2019 - Present',
                  description: 'Led comprehensive security testing initiatives for Fortune 500 companies. Designed and implemented automated testing frameworks reducing test cycles by 40%.'
                },
                {
                  role: 'Lead QA Engineer',
                  company: 'FinTech Innovations',
                  period: '2015 - 2019',
                  description: 'Managed QA team for mission-critical payment processing systems. Established security testing standards ensuring 100% PCI-DSS compliance.'
                },
                {
                  role: 'QA Automation Engineer',
                  company: 'TechStart Platform',
                  period: '2013 - 2015',
                  description: 'Developed automated testing suites for cloud-based applications. Implemented continuous integration testing reducing production bugs by 60%.'
                }
              ].map((exp, idx) => (
                <div key={idx} className="border-l-2 border-primary pl-6 pb-8">
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-foreground leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

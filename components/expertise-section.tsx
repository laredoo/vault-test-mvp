import { Lock, Zap, BarChart3, Shield, Bug, FileCheck } from 'lucide-react'

export default function ExpertiseSection() {
  const expertise = [
    {
      icon: Lock,
      title: 'Security Testing',
      description: 'Advanced vulnerability scanning and penetration testing to identify and eliminate security risks.'
    },
    {
      icon: Bug,
      title: 'QA Automation',
      description: 'Comprehensive automated testing frameworks ensuring consistent and reliable test coverage.'
    },
    {
      icon: BarChart3,
      title: 'Performance Testing',
      description: 'Load and stress testing to ensure applications handle peak usage without degradation.'
    },
    {
      icon: Shield,
      title: 'Compliance Verification',
      description: 'Validate adherence to security standards (SOC 2, HIPAA, GDPR, PCI-DSS).'
    },
    {
      icon: Zap,
      title: 'Data Integrity',
      description: 'Rigorous data validation and integrity checks across all systems and databases.'
    },
    {
      icon: FileCheck,
      title: 'Test Documentation',
      description: 'Detailed test reports and documentation for complete audit trails and compliance.'
    }
  ]

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Core Expertise Areas
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized testing services designed for enterprises that demand the highest standards of quality and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

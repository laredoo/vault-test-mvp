import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ServicesPreview() {
  const services = [
    {
      title: 'Full-Cycle Testing',
      description: 'End-to-end testing from requirements analysis through UAT and production validation.',
      price: 'Custom'
    },
    {
      title: 'Security Audit',
      description: 'Comprehensive security assessment including vulnerability scanning and penetration testing.',
      price: 'Custom'
    },
    {
      title: 'Performance Optimization',
      description: 'Load testing, profiling, and optimization recommendations for peak performance.',
      price: 'Custom'
    }
  ]

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Featured Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Tailored testing solutions designed to meet your specific project requirements.
            </p>
          </div>
          <Link href="/services" className="hidden sm:flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold">
            View All Services <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all">
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="flex justify-between items-end">
                <span className="text-primary font-semibold">{service.price}</span>
                <Link href="/services" className="text-primary hover:text-accent transition-colors">
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link href="/services" className="md:hidden block text-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
          View All Services
        </Link>
      </div>
    </section>
  )
}

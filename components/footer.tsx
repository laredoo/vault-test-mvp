import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">SecureTest</h3>
            <p className="text-muted-foreground text-sm">
              Professional QA testing with a focus on security and data integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/profile" className="text-muted-foreground hover:text-primary transition-colors text-sm">Profile</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">Portfolio</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Security Testing</li>
              <li className="text-muted-foreground text-sm">Performance QA</li>
              <li className="text-muted-foreground text-sm">Penetration Testing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-sm text-center">
            © 2025 SecureTest. All rights reserved. | <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

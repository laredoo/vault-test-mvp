'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">QA</span>
            </div>
            <span className="hidden sm:inline font-semibold text-foreground">SecureTest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/profile" className="text-foreground hover:text-primary transition-colors">
              Profile
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link href="/profile" className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg">
              Profile
            </Link>
            <Link href="/services" className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg">
              Services
            </Link>
            <Link href="/portfolio" className="block px-3 py-2 text-foreground hover:bg-muted rounded-lg">
              Portfolio
            </Link>
            <Link href="/contact" className="block px-3 py-2 bg-primary text-primary-foreground rounded-lg text-center">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b-2 border-accent/30 shadow-lg shadow-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-48 h-14">
              <Image src="/light-constellation-official-logo.png" alt="Light Constellation Official Logo" width={320} height={100} className="w-full h-full object-contain group-hover:brightness-110 transition-all duration-300" priority />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-base font-bold text-foreground hover:text-accent transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-dark to-accent-light group-hover:w-full transition-all duration-300 animate-shimmer-gold" />
            </Link>
            <Link
              href="#team"
              className="text-base font-bold text-foreground hover:text-accent transition-colors duration-300 relative group"
            >
              Our Team
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-dark to-accent-light group-hover:w-full transition-all duration-300 animate-shimmer-gold" />
            </Link>
            <Link
              href="#vision"
              className="text-base font-bold text-foreground hover:text-accent transition-colors duration-300 relative group"
            >
              Vision
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-dark to-accent-light group-hover:w-full transition-all duration-300 animate-shimmer-gold" />
            </Link>
            <Link
              href="#footer"
              className="text-base font-bold text-foreground hover:text-accent transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-dark to-accent-light group-hover:w-full transition-all duration-300 animate-shimmer-gold" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-accent/20 rounded-lg transition-all duration-300 hover:scale-110 text-accent"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-3 animate-fade-in-up">
            <Link href="#about" className="block text-base font-bold hover:text-accent transition-colors py-2">
              About
            </Link>
            <Link href="#team" className="block text-base font-bold hover:text-accent transition-colors py-2">
              Our Team
            </Link>
            <Link href="#vision" className="block text-base font-bold hover:text-accent transition-colors py-2">
              Vision
            </Link>
            <Link href="#footer" className="block text-base font-bold hover:text-accent transition-colors py-2">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

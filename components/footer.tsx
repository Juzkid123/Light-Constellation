"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="relative bg-gradient-to-b from-background to-background/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="relative w-28 h-auto mb-4">
              <Image src="/light-constellation-official-logo.png" alt="Light Constellation Official Logo" width={320} height={100} className="w-full h-auto object-contain" priority />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A professional body of work under Brand MBA, dedicated to developing the next generation of global leaders
              through mentorship and community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#vision" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Connect
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:thelightconstellation@gmail.com" className="hover:underline">thelightconstellation@gmail.com</a>
                  <a href="mailto:info@thelightconstelation.com" className="hover:underline">info@thelightconstelation.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+233595320299" className="hover:underline">+233 59 532 0299</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Section */}
        <div className="py-8">
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <a
              href="https://www.facebook.com/share/18JEWcrSyj/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
              title="Follow on Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/thelightconstellation?igsh=bnkyZWd4MDg2cHZ0&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
              title="Follow on Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@lightconstellation?_r=1&_t=ZS-94f1ajbvRkT"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
              title="Follow on TikTok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs sm:text-sm text-muted-foreground">
            <p>
              © 2026 Light Constellation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

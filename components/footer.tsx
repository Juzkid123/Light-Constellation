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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.498 3.75c1.381 0 2.499-1.133 2.499-2.525S20.879-1.3 19.498-1.3s-2.5 1.133-2.5 2.525 1.119 2.525 2.502 2.525zM13.496 8c-2.854 0-5.369 2.269-5.369 5.07v8.179c0 .355.266.637.631.637h4.236c.344 0 .631-.282.631-.637V13.07c0-1.252.988-2.269 2.265-2.269 1.25 0 2.268.987 2.268 2.269v8.179c0 .355.267.637.632.637h4.236c.349 0 .63-.282.63-.637V13.07c0-2.801-2.515-5.07-5.36-5.07z" />
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

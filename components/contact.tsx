"use client"

import { Mail, Linkedin, Instagram, Facebook } from "lucide-react"

export default function Contact() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/30 rounded-2xl p-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-accent">Contact Information</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Find our complete contact details below
          </p>
          
          <a href="#footer" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent/20 text-accent font-semibold hover:bg-accent/30 transition-all duration-300">
            View Contact Details
          </a>
        </div>
      </div>
    </section>
  )
}

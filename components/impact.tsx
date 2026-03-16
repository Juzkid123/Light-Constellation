"use client"

import { Users } from "lucide-react"

export default function Impact() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-primary/5" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-accent">Our Community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Who we serve and the impact we create
          </p>
        </div>

        {/* Main Impact Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group animate-in fade-in slide-in-from-bottom-4 duration-700 p-8 sm:p-12 rounded-2xl border border-accent/30 bg-gradient-to-br from-background/50 to-background/30 hover:border-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Users className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent">Grooming Tomorrow's Future Leaders</h3>
              <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
                Light Constellation is dedicated to developing ambitious young individuals into better versions of themselves. Through mentorship, learning, and community support, we are preparing the next generation of leaders who will create meaningful impact in their societies and industries.
              </p>
              <div className="pt-6 border-t border-accent/20">
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed max-w-2xl mx-auto">
                  Under the leadership of Moses B Arthur, we gather as a unified force to build, learn, and grow together. Light Constellation represents the commitment to excellence, continuous improvement, and the belief that together, we can inspire positive change across our networks and industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

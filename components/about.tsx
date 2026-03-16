"use client"

import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-background via-background to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Light Constellation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A professional constellation dedicated to developing the next generation of leaders. "Why are we here if we can't do great things?"
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-3 animate-in fade-in slide-in-from-left-4 duration-700">
              <h3 className="text-2xl font-bold text-primary">Our Constellation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Light Constellation is a professional body of work under Brand MBA, representing a commitment to
                excellence in mentorship and leadership development. We showcase the collective expertise and
                achievements of our community.
              </p>
            </div>

            <div className="space-y-3 animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
              <h3 className="text-2xl font-bold text-primary">Our Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Through structured mentorship, knowledge sharing, and community engagement, we empower ambitious youth
                and entrepreneurs to achieve their highest potential and contribute meaningfully to society.
              </p>
            </div>

            <div className="space-y-3 animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
              <h3 className="text-2xl font-bold text-primary">Our Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our members have launched ventures, secured leadership positions, built lasting networks, and created
                positive impact across industries and communities globally.
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 rounded-2xl overflow-hidden border border-accent/30 bg-gradient-to-br from-primary/10 to-accent/10 animate-in fade-in slide-in-from-right-4 duration-700">
            <Image
              src="/mba-speaking-event.png"
              alt="Moses B Arthur speaking at Brand MBA event"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

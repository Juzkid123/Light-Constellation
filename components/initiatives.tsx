"use client"

import type React from "react"
import Image from "next/image"

import { Sparkles, Users, BookOpen, Zap } from "lucide-react"

interface Initiative {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  highlights: string[]
}

const initiatives: Initiative[] = [
  {
    id: 1,
    title: "Annual Starfluence",
    description: "Our flagship exclusive gathering bringing together the brightest minds in the constellation for an annual transformational experience",
    icon: <Sparkles className="w-8 h-8" />,
    highlights: ["Networking", "Keynote Speeches", "Workshops", "Awards & Recognition"],
  },
  {
    id: 2,
    title: "Business on Prophetic Wings (BOPW)",
    description: "A non-denominational Christian network under Brand MBA where we gather to pray, strengthen our faith, and grow spiritually as Kingdom Entrepreneurs. We believe life cannot be done without God.",
    icon: <Zap className="w-8 h-8" />,
    highlights: ["Spiritual Growth", "Kingdom Entrepreneurship", "Faith & Business", "Community Prayer"],
  },
  {
    id: 3,
    title: "Leadership Bootcamps & Workshops",
    description: "Intensive training programs designed to develop next-generation leaders",
    icon: <BookOpen className="w-8 h-8" />,
    highlights: ["Leadership Skills", "Decision Making", "Team Building", "Crisis Management"],
  },
  {
    id: 4,
    title: "Constellation Gatherings & Virtual Meetings",
    description: "Regular community meetings for personal development and knowledge sharing",
    icon: <Users className="w-8 h-8" />,
    highlights: ["Monthly Meetups", "Virtual Sessions", "Peer Learning", "Mentorship Circles"],
  },
]

export default function Initiatives() {
  return (
    <section id="initiatives" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-accent">Exclusive Initiatives & Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the transformative programs and gatherings exclusively available to Light Constellation members
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.id}
              className="group relative animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden border border-accent/30 bg-gradient-to-br from-background to-background/50 hover:border-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-2 p-8">
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-all duration-300">
                  {initiative.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-primary mb-3">{initiative.title}</h3>
                <p className="text-muted-foreground mb-6">{initiative.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {initiative.highlights.map((highlight, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mentorship CTA */}
        <div className="relative rounded-2xl overflow-hidden border border-accent/30 bg-gradient-to-r from-primary/10 to-accent/10 p-12 text-center shadow-lg shadow-black/10">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-primary mb-4">Want to Join Light Constellation?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-semibold">
              Join Light Constellation under Brand MBA — a group of like-minded individuals who dream, dare, and do.
            </p>

            {/* CTA Button */}
            <a
              href="https://chat.whatsapp.com/ECXDDAqVGkV81ZfWtCms7Y"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-background font-bold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 animate-pulse-subtle"
            >
              <span>Join Waitlist Group</span>
              <span className="text-xl">→</span>
            </a>
          </div>

          {/* Books Section */}
          <div className="mt-16 border-t border-accent/20 pt-12">
            <h3 className="text-2xl font-bold text-primary mb-2 text-center">Discover MBA&apos;s Published Works</h3>
            <p className="text-muted-foreground text-center mb-8">Explore the wisdom and insights from our President&apos;s collection of transformational books</p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Book 1: The Entrepreneur's Journey */}
              <div className="text-center group">
                <div className="relative h-80 rounded-lg overflow-hidden mb-4 border border-accent/30 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 group-hover:-translate-y-2">
                  <Image
                    src="/book-entrepreneurs-journey.png"
                    alt="The Entrepreneur's Journey by Moses B Arthur"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-semibold text-foreground">The Entrepreneur's Journey</p>
              </div>

              {/* Book 2: The Seven Universal Currencies */}
              <div className="text-center group">
                <div className="relative h-80 rounded-lg overflow-hidden mb-4 border border-accent/30 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 group-hover:-translate-y-2">
                  <Image
                    src="/book-seven-universal-currencies.png"
                    alt="The Seven Universal Currencies by Moses B Arthur"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-semibold text-foreground">The Seven Universal Currencies</p>
              </div>

              {/* Book 3: Understanding Systems Thinking */}
              <div className="text-center group">
                <div className="relative h-80 rounded-lg overflow-hidden mb-4 border border-accent/30 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 group-hover:-translate-y-2">
                  <Image
                    src="/book-systems-thinking.png"
                    alt="Understanding Systems Thinking by Moses B Arthur"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-semibold text-foreground">Understanding Systems Thinking</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">For inquiries about purchasing MBA&apos;s books, please contact us:</p>
              <a 
                href="tel:+233595320299" 
                className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-all duration-300"
              >
                📞 Call: +233 59 532 0299
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { CheckCircle2, Users, Zap, BookOpen } from "lucide-react"

interface MentorshipProps {
  onJoinClick: () => void
}

export default function Mentorship({ onJoinClick }: MentorshipProps) {
  const benefits = [
    {
      icon: Users,
      title: "Exclusive Community",
      description: "Connect with 500+ ambitious youth and entrepreneurs",
    },
    {
      icon: Zap,
      title: "Personalized Mentorship",
      description: "One-on-one guidance from industry leaders",
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access premium courses and exclusive content",
    },
    {
      icon: CheckCircle2,
      title: "Career Acceleration",
      description: "Fast-track your professional growth",
    },
  ]

  return (
    <section id="mentorship" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Join Light Constellation?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Transform your potential into achievement</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border border-accent/30 bg-gradient-to-br from-background/50 to-background/30 hover:border-accent/60 hover:bg-background/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-3xl overflow-hidden border border-accent/30 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-12 text-center">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Future?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the Light Constellation waitlist and get exclusive access to our mentorship program. Connect with
              industry leaders and a community of ambitious youth.
            </p>
            <button
              onClick={onJoinClick}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 inline-block"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

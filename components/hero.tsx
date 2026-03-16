"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background pb-0">
      {/* Background Image with Enhanced Visibility and Subtle Animation */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.jpg" alt="Futuristic constellation background" fill className="object-cover brightness-110 contrast-110" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/25 to-background/35" />
        {/* Subtle constellation animation overlay */}
        <div className="absolute inset-0 animate-constellation-drift opacity-30">
          <div className="absolute top-10 left-10 w-2 h-2 bg-accent rounded-full animate-pulse" />
          <div className="absolute top-1/4 right-20 w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden z-1">
        {/* Orbiting gold particles */}
        <div
          className="absolute w-96 h-96 rounded-full border-2 border-accent/20 opacity-30"
          style={{
            left: `${mousePosition.x / 80}px`,
            top: `${mousePosition.y / 80}px`,
            transition: "all 0.3s ease-out",
          }}
        />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full border border-accent/10 opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading with "Light Constellation" typing animation */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 animate-fade-in-up leading-tight">
          <div className="text-accent mb-2">Light</div>
          <span className="text-primary animate-typing-constellation inline-block min-h-20 sm:min-h-24">Constellation</span>
        </h1>

        <p className="text-xl sm:text-2xl text-white font-black mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          DREAM, DARE AND DO
        </p>

        <p
          className="text-base sm:text-lg text-foreground mb-4 max-w-3xl mx-auto animate-fade-in-up font-semibold"
          style={{ animationDelay: "0.3s" }}
        >
          A premier constellation showcasing excellence, mentorship, and transformational leadership
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#vision"
            className="px-8 py-4 rounded-full bg-accent text-primary font-bold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 inline-block animate-glow-pulse"
          >
            Discover the Vision
          </a>
          <a
            href="#team"
            className="px-8 py-4 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-all duration-300"
          >
            Meet the Team
          </a>
        </div>
      </div>


    </section>
  )
}

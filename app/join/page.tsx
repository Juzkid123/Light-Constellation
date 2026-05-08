"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle, Send } from "lucide-react"

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    email: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
  }

  const handleJoinWhatsApp = () => {
    const whatsappUrl = `https://chat.whatsapp.com/ECXDDAqVGkV81ZfWtCms7Y`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/form background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative w-full max-w-md rounded-2xl border border-accent/30 bg-background/80 backdrop-blur-xl shadow-2xl">
        {!submitted ? (
          <>
            {/* Header */}
            <div className="p-8 border-b border-accent/20">
              <h1 className="text-3xl font-bold text-primary mb-2">Join Us</h1>
              <p className="text-sm text-muted-foreground">Become part of the Light Constellation community</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-accent/30 bg-background/50 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Country/Location</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-accent/30 bg-background/50 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your country or location"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-accent/30 bg-background/50 focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 mt-6"
              >
                <Send size={18} />
                Submit & Join WhatsApp
              </button>
            </form>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="mb-4">
              <span className="text-5xl">✅</span>
            </div>
            <h2 className="text-xl font-bold text-primary mb-2">Welcome to Light Constellation Waitlist!</h2>
            <p className="text-muted-foreground mb-4">You've joined our WhatsApp community waitlist group. This is not the official main group - you'll be engaged with soon.</p>
            <p className="text-muted-foreground mb-6">Click below to join the waitlist group:</p>
            <button
              onClick={handleJoinWhatsApp}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="inline-flex items-center justify-center w-5 h-5 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.149-.198.297-.768.967-.942 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.611-.92-2.205-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.148.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347z" />
                  <path d="M20.52 3.48A11.872 11.872 0 0012.004 0C5.373 0 .037 5.337.037 11.967c0 2.106.55 4.164 1.6 5.963L0 24l6.221-1.615a11.922 11.922 0 005.784 1.48h.004c6.63 0 11.966-5.337 11.966-11.967 0-3.19-1.245-6.181-3.484-8.418zm-8.513 18.773h-.003c-1.807 0-3.579-.487-5.123-1.406l-.366-.219-3.688.957.984-3.596-.238-.37a9.936 9.936 0 01-1.516-5.176c0-5.486 4.458-9.945 9.944-9.945 2.66 0 5.157 1.036 7.035 2.915a9.87 9.87 0 012.919 7.03c0 5.486-4.46 9.944-9.946 9.944z" />
                </svg>
              </span>
              Join WhatsApp Waitlist
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
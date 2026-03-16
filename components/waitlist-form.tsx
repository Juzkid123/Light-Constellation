"use client"

import type React from "react"

import { useState } from "react"
import { X, Send, MessageCircle } from "lucide-react"

interface WaitlistFormProps {
  onClose: () => void
}

export default function WaitlistForm({ onClose }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      // Redirect to WhatsApp
      const whatsappUrl = `https://wa.me/1234567890?text=Hi%20Light%20Constellation!%20I%20want%20to%20join%20the%20mentorship%20program.%20Name:%20${formData.name}%20Email:%20${formData.email}`
      window.open(whatsappUrl, "_blank")
      onClose()
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-md rounded-2xl border border-accent/30 bg-background shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-accent/10 rounded-lg transition-colors"
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="p-8 border-b border-accent/20">
              <h2 className="text-2xl font-bold text-primary mb-2">Join the Waitlist</h2>
              <p className="text-sm text-muted-foreground">Get exclusive access to Light Constellation mentorship</p>
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
                  placeholder="Your name"
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

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-accent/30 bg-background/50 focus:border-primary focus:outline-none transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">I'm interested in</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-accent/30 bg-background/50 focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="student">Student</option>
                  <option value="entrepreneur">Entrepreneur</option>
                  <option value="professional">Professional</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 mt-6"
              >
                <Send size={18} />
                Join WhatsApp Group
              </button>
            </form>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 animate-in zoom-in">
              <MessageCircle className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Welcome!</h3>
            <p className="text-muted-foreground mb-4">Redirecting you to our WhatsApp community...</p>
            <div className="w-full h-1 bg-accent/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-accent animate-pulse" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

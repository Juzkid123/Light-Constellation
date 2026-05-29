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
  })
  const [submitted, setSubmitted] = useState(false)
  const [dataStored, setDataStored] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          source: "waitlist-modal",
        }),
      })

      if (!response.ok) {
        throw new Error("Form submission failed")
      }
      
      // After data is stored, show the WhatsApp button
      setTimeout(() => {
        setDataStored(true)
        setSubmitted(false)
      }, 1000)
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitted(false)
      setDataStored(true)
    }
  }

  const handleWhatsAppRedirect = () => {
    const whatsappUrl = `https://wa.me/1234567890?text=Hi%20Light%20Constellation!%20I%20want%20to%20join%20the%20mentorship%20program.%20Name:%20${formData.name}%20Email:%20${formData.email}`
    window.open(whatsappUrl, "_blank")
    onClose()
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

        {!dataStored ? (
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
                  disabled={submitted}
                  className="w-full px-4 py-2 rounded-lg border border-accent/30 bg-background/50 focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
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
                  disabled={submitted}
                  className="w-full px-4 py-2 rounded-lg border border-accent/30 bg-background/50 focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
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
                  disabled={submitted}
                  className="w-full px-4 py-2 rounded-lg border border-accent/30 bg-background/50 focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Submit
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 animate-in zoom-in">
              <MessageCircle className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
            <p className="text-muted-foreground mb-6">Your details have been saved successfully. Now join our WhatsApp community!</p>
            
            <button
              onClick={handleWhatsAppRedirect}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Join WhatsApp Group
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

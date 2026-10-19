import Navigation from "@/components/navigation"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden pt-20">
      <Navigation />
      <Contact />
      <Footer />
    </main>
  )
}

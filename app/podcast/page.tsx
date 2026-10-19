import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Headphones } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const spotifyUrl = "https://open.spotify.com/show/4bQotVzTmuP8v2FdTpcvK2"
const appleUrl = "https://podcasts.apple.com/gh/podcast/thoughts-become-things-podcast-by-moses-b-arthur/id1740609367"

export const metadata: Metadata = {
  title: "Thoughts Become Things Podcast | Brand MBA",
  description: "Listen to Thoughts Become Things with Moses B. Arthur on Apple Podcasts and Spotify. New episode every Friday.",
}

function ApplePodcastsMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 shrink-0">
      <defs>
        <linearGradient id="apple-podcasts-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b44bff" />
          <stop offset="1" stopColor="#7224c8" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="15" fill="url(#apple-podcasts-gradient)" />
      <circle cx="16" cy="16" r="2.4" fill="white" />
      <path d="M12.1 22.2a7.9 7.9 0 0 1 0-12.4M19.9 9.8a7.9 7.9 0 0 1 0 12.4M9.1 25.1a11.7 11.7 0 0 1 0-18.2M22.9 6.9a11.7 11.7 0 0 1 0 18.2" fill="none" stroke="white" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  )
}

function SpotifyMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 shrink-0">
      <circle cx="16" cy="16" r="15" fill="#1DB954" />
      <path d="M7.5 12.1c5.9-1.7 12.2-1.1 17.2 1.9M9 16.4c4.7-1.3 9.8-.8 13.8 1.6M10.4 20.5c3.7-1 7.5-.6 10.5 1.2" fill="none" stroke="#101010" strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}

export default function PodcastPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <Navigation />
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/25 via-transparent to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-5xl font-black uppercase leading-[1.02] tracking-tight text-accent-light sm:text-7xl">
              <span className="block">Thoughts</span>
              <span className="mt-1 block text-[#e87500]">Become Things</span>
              <span className="mt-3 block text-3xl font-semibold normal-case italic tracking-normal text-accent-light sm:text-4xl [font-family:'Segoe_Print','Bradley_Hand',cursive]">Podcast</span>
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-6xl">Ideas that shape the life you build.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Join Moses B. Arthur for conversations and reflections on mindset, business, personal growth, spirituality, and the power of thought.
            </p>
            <p className="mt-7 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-3 font-extrabold text-primary">
              <Headphones size={19} /> New episode every Friday
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={appleUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-bold text-primary transition hover:bg-accent-light">
                Listen on Apple Podcasts <ArrowUpRight size={18} />
              </a>
              <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-bold text-white transition hover:border-accent hover:text-accent-light">
                Listen on Spotify <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl shadow-black/40">
            <Image
              src="/thoughts-become-things-cover.jpg"
              alt="Thoughts Become Things Podcast cover featuring Moses B. Arthur"
              fill
              sizes="(min-width: 1024px) 448px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-dark">Listen your way</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Find the podcast on your favorite platform</h2>
          <p className="mt-4 text-muted-foreground">Follow the show and catch a new episode every Friday.</p>
        </div>
        <div className="mx-auto mt-9 grid max-w-3xl gap-4 sm:grid-cols-2">
          <a href={appleUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg">
            <span><span className="block text-sm font-semibold text-muted-foreground">Listen on</span><span className="mt-1 flex items-center gap-2 text-xl font-extrabold"><ApplePodcastsMark />Apple Podcasts</span></span>
            <ArrowUpRight className="text-accent-dark transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg">
            <span><span className="block text-sm font-semibold text-muted-foreground">Listen on</span><span className="mt-1 flex items-center gap-2 text-xl font-extrabold"><SpotifyMark />Spotify</span></span>
            <ArrowUpRight className="text-accent-dark transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">Produced by <span className="font-semibold text-accent-dark">Moses B. Arthur</span></p>
      </section>
      <Footer />
    </main>
  )
}

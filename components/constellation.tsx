"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"

interface Member {
  id: number
  name: string
  role: string
  image: string
  bio: string
}

const members: Member[] = [
  {
    id: 1,
    name: "Mr. Justice Liassidzi",
    role: "Leader",
    image: "/team-justice-liassidzi.jpeg",
    bio: "Visionary leader guiding our constellation towards transformational excellence and collective success",
  },
  {
    id: 2,
    name: "Mr. Bilchris Oheneba",
    role: "Head of Social Media",
    image: "/team-bilchris-oheneba.jpeg",
    bio: "Amplifying our message and connecting hearts through authentic storytelling and digital presence",
  },
  {
    id: 3,
    name: "Mr. Franklyn Ofori Baah",
    role: "Head of Recruitment",
    image: "/team-franklin-ofori.jpeg",
    bio: "Building a constellation of brilliant minds, one visionary at a time",
  },
  {
    id: 4,
    name: "Miss Portia",
    role: "Head of Organization Committee",
    image: "/team-portia.jpeg",
    bio: "Orchestrating harmony and structure, ensuring every initiative sparkles with precision",
  },
  {
    id: 5,
    name: "Miss Gloria Duah",
    role: "Assistant to Head of Organization",
    image: "/team-gloria-duah.jpeg",
    bio: "Supporting excellence through dedication and meticulous attention to every detail",
  },
  {
    id: 6,
    name: "Mr. Christopher Felix Cudjoe",
    role: "Head of Innovation",
    image: "/team-christopher-cudjoe.jpeg",
    bio: "Pioneering breakthrough ideas that shape the future and challenge the status quo",
  },
  {
    id: 7,
    name: "Mr. Owusu Derrick",
    role: "Assistant to Head of Innovation",
    image: "/team-owusu-derrick.jpeg",
    bio: "Fueling creativity and turning bold visions into reality through tireless collaboration",
  },
  {
    id: 8,
    name: "Miss Vida Ayoma",
    role: "General Secretary",
    image: "/team-vida-ayama.jpeg",
    bio: "The backbone of our constellation, keeping our vision alive through strategic communication",
  },
  {
    id: 9,
    name: "Mr. Ohene Gyan",
    role: "Assistant Social Media Manager",
    image: "/team-ohene-gyan.jpeg",
    bio: "Championing integrity and leadership in everything we do",
  },
  {
    id: 10,
    name: "Mr. Lesley Obiri",
    role: "Head of Coordination",
    image: "/team-lesly-obiri.jpeg",
    bio: "Orchestrating seamless collaboration and strategic coordination across all initiatives",
  },
  {
    id: 11,
    name: "Mr. Elisha Opoku Mensah",
    role: "Assistant to Head of Coordination",
    image: "/team-elisha-mensah.jpeg",
    bio: "Supporting excellence through strategic coordination and meticulous execution",
  },
  {
    id: 12,
    name: "Mr. Stephen Ayoma",
    role: "Executive",
    image: "/team-stephen-ayama.jpeg",
    bio: "Making a difference by serving our community with passion and purpose",
  },
  {
    id: 13,
    name: "Miss Dorcas Afi Delali Hazel Tofio",
    role: "Executive",
    image: "/team-dorcas.jpeg",
    bio: "Bringing energy and determination to every initiative we undertake",
  },
]

export default function Constellation() {
  const [liked, setLiked] = useState<Set<number>>(new Set())

  const toggleLike = (id: number) => {
    const newLiked = new Set(liked)
    if (newLiked.has(id)) {
      newLiked.delete(id)
    } else {
      newLiked.add(id)
    }
    setLiked(newLiked)
  }

  return (
    <section id="team" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Image Section */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-accent/30 shadow-lg shadow-primary/20">
          <div className="relative h-64 sm:h-80 lg:h-96">
            <Image 
              src="/constellation-event-banner.png" 
              alt="Light Constellation Event Banner" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Constellation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the constellation executives and leaders shaping the community.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => {
            // Define which members need special adjustment for proper head visibility
            const specialAlignMembers = [1, 3, 7, 10, 11, 12] // Justice, Franklyn, Derrick, Lesley, Elisha, Stephen
            const useSpecialAlign = specialAlignMembers.includes(member.id)
            
            return (
            <div
              key={member.id}
              className="group relative animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden border border-accent/30 bg-gradient-to-br from-background to-background/50 hover:border-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 animate-card-breathe">
                {/* Image Container */}
                <div className={`relative overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 ${useSpecialAlign ? 'h-screen max-h-96' : 'h-80'}`}>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className={`object-cover group-hover:scale-110 transition-transform duration-500 ${useSpecialAlign ? 'object-top' : 'object-center'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-accent mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                  {/* Like Button */}
                  <button
                    onClick={() => toggleLike(member.id)}
                    className={`w-full py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      liked.has(member.id)
                        ? "bg-accent/20 text-accent"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    <Heart size={18} className={liked.has(member.id) ? "fill-current" : ""} />
                    {liked.has(member.id) ? "Interested" : "Show Interest"}
                  </button>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

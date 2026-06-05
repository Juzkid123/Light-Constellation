import Image from "next/image"

export default function President() {
  return (
    <section id="vision" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-black text-accent mb-4">ABOUT OUR BRAND PRESIDENT</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto font-semibold">
            The Vision Bearer <span className="text-accent">(President of Brand MBA GLOBAL NETWORK)</span>
          </p>
        </div>

        {/* President Card */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full rounded-2xl overflow-hidden border-2 border-accent animate-slide-in-left" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/moses-arthur-portrait.png"
              alt="H.E. Moses B Arthur - Brand MBA President"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              quality={72}
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
            <div className="absolute inset-0 border-2 border-accent/30 rounded-2xl animate-glow-pulse" />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-in-right md:col-span-1">
            <div>
              <p className="text-accent font-black text-sm tracking-widest mb-2">PRESIDENT, BRAND MBA GLOBAL NETWORK</p>
              <h3 className="text-4xl font-black text-white mb-2">H.E. Moses B Arthur</h3>
              <p className="text-lg text-white/90 font-bold">
                Global Speaker | Knowledge Merchant | Real Estate Developer
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t-2 border-accent/30">
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent/20 transition-all duration-300">
                <h4 className="font-black text-accent mb-2">Serial Entrepreneur and Speaker</h4>
                <p className="text-white/80 leading-relaxed">
                  An award-winning speaker, TEDx speaker, and transformational author with over 8 years of experience in real estate development, digital transformation, agriculture, business development, and community building across multiple continents.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent/20 transition-all duration-300">
                <h4 className="font-black text-accent mb-2">The Man in the Arena</h4>
                <p className="text-white/80 leading-relaxed">
                  Co-Founder & CEO of Afrimart Atlantic Limited. He strives to be a beacon for excellence, leaving his fellow man better than he found them. Living by the principle of being "the man in the arena," he leads Brand MBA GLOBAL NETWORK with unwavering commitment to transformational impact.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="relative h-24 rounded-lg overflow-hidden bg-white/5 border border-accent/30 flex items-center justify-center">
              <Image
                src="/moses-signature.png"
                alt="Moses B Arthur Signature"
                width={300}
                height={100}
                quality={75}
                className="object-contain h-full w-auto filter brightness-0 invert"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-accent/30 bg-white/5 p-6 sm:p-8 shadow-lg shadow-black/10">
          <h3 className="text-2xl sm:text-3xl font-black text-accent mb-4">Moses B. Arthur (MBA)</h3>
          <div className="space-y-4 text-white/85 leading-relaxed">
            <p>
              Moses B. Arthur is a transformational leader whose life&apos;s mission is simple yet profound: to leave fellow man better than he found them.
            </p>
            <p>
              Through his teachings, speaking engagements, and the community that has formed around the BRAND MBA, he has inspired thousands of people to think bigger, dream louder, act bolder, and pursue lives of impact. His work is built on the belief that true success is not measured by what we accumulate, but by the lives we influence and the positive change we leave behind.
            </p>
            <p>
              The MBA community is more than a network - it is a movement of individuals committed to growth, leadership, service, and transformation. Across different backgrounds, industries, and nations, people have found encouragement, direction, and renewed purpose through the values and principles he shares.
            </p>
            <p>
              At the heart of everything Moses does is a commitment to helping people discover their potential, overcome limitations, and become agents of change in their families.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

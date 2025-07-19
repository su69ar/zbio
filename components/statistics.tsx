export default function Statistics() {
  const stats = [
    { number: '1.6M+', label: 'Tons of waste produced annually in Bali' },
    { number: '40%', label: 'Of organic waste produced by hospitality sector' },
    { number: '70%', label: 'Of waste in Bali is organic' },
    { number: '2026', label: 'Organic waste can no longer go to landfills (TPA)' },
  ]

  return (
    <section id="waste-crisis" className="relative overflow-hidden py-24 px-4 text-white">
      {/* ✅ Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/bali-waste.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ✅ Overlay (optional darkening) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#1f382b]/50  z-10" />

      {/* ✅ Main Content */}
      <div className="relative z-20 lg:container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Bali's <span className="text-[#779952]"> Organic Waste </span>Crisis
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-[16px]  text-white/90 leading-relaxed">
              Bali generates a significant amount of waste each year, much of it organic and harmful to the environment
              when left unmanaged. A major contributor is the hospitality sector, including hotels, resorts, and
              restaurants. With a 2027 goal to manage waste sustainably, hospitality businesses must take action now.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-[#3A5B42]/20 backdrop-blur-lg border border-white/30 rounded-2xl px-6 py-10 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <div className="text-4xl md:text-4xl font-extrabold text-white mb-4 group-hover:text-[#779952] transition-colors">
                {stat.number}
              </div>
              <p className="text-sm md:text-base text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
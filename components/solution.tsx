import { Truck, Cog, Sprout, Package } from "lucide-react"

export default function Solution() {
  const steps = [
    {
      icon: Truck,
      title: "COLLECT",
      description: "your organic food waste.",
    },
    {
      icon: Cog,
      title: "PROCESS",
      description: "on-site or at our facility, transforming waste into highly nutritious fertilizer or animal feed.",
    },
    {
      icon: Sprout,
      title: "REGENERATE",
      description: "local farmlands through sustainable agriculture.",
    },
    {
      icon: Package,
      title: "HARVEST",
      description: "is delivered back to you as traceable food ingredients",
    },
  ]

  return (
    <section id="solution" className="py-16 px-4 bg-gradient-to-l from-[#1F382B]/5 to-emerald-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">ZBIO's Solution</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-xl">
              <div className="w-16 h-16 bg-[#1F382B]/10 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-[#1F382B]" />
              </div>
              <h3 className="text-xl font-bold text-[#1F382B] mb-2">{step.title}</h3>
              <p className="text-gray-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

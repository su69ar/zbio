import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Miguel Rivera",
      text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    },
    {
      name: "Larissa Charter",
      text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    },
    {
      name: "Larissa Charter",
      text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    },
  ]

  return (
    <section id="testimonials" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">"{testimonial.text}"</p>
              <div className="font-semibold text-[#1F382B]">{testimonial.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

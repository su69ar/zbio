'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = await res.json()
      alert(result.message)
    } catch (err) {
      alert("Failed to send message.")
    }
  }

  return (
    <section id="contact" className="relative py-20 px-4 bg-gradient-to-r from-[#1F382B]/10 to-emerald-100/50 overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bali-farmers4.webp"
          alt="Bali Farmers"
          className="w-full h-full object-cover object-center opacity-100"
        />
      </div>
      <div className="md:container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-4 lg:p-14 md:p-6 sm:p-6 pt-12 shadow-xl">
          {/* Left */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <div className="w-20 h-20 bg-[#1F382B] rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F382B] mb-6">Get in Touch Today!</h2>
            <p className="text-xl text-[#1F382B] mb-8">
              Ready to transform your waste into worth? Join Bali's circular food ecosystem and make a real impact.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#1F382B] hover:bg-[#1F382B]/90 text-white px-8 py-4 text-lg">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#1F382B] text-[#1F382B] hover:bg-[#1F382B] hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                Schedule a Call
              </Button>
            </div> */}
          </div>

          {/* Right - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="bg-white"
                placeholder="How can we help you?"
              />
            </div>
            <Button type="submit" className="w-full bg-[#1F382B] hover:bg-[#1F382B]/90 text-white py-3">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { ArrowRight, Recycle } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-4 overflow-hidden h-[100vh] content-center">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="zbiovideo.webm" // Replace with your actual video URL later
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for darkening or styling */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/20 backdrop-blur-sm z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-8">
            <Recycle className="w-5 h-5 text-[#1F382B]" />
            <span className="text-[#1F382B] font-medium lg:text-[24px] sm:text-[20px]">From Waste to Worth</span>
          </div>

          <h1 className="text-[42px] md:text-7xl font-bold text-gray-900 mb-6 leading-tight ">
          Bali's First <span className="text-[#1F382B] ">Circular Food Ecosystem</span>  <span className="text-[#1F382B]"></span>
          </h1>

          

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Button size="lg" className="bg-[#1F382B] hover:bg-[#1F382B]/90 text-white px-8 py-4 text-lg">
              <a href="#contact">  Start Your Journey </a>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
           
            
            <Button
              size="lg"
              variant="outline"
              className="border-[#1F382B] text-[#1F382B] hover:bg-[#1F382B] hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              <a href="#about">Learn More</a>
            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}

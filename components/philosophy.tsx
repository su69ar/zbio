import { Leaf, RefreshCw } from "lucide-react"
import {  Recycle } from "lucide-react"
import { HeroHighlightText } from "./custom/HeroHighlightText"


export default function Philosophy() {
  return (
    <section className="py-16 px-4 content-center text-center">
        <HeroHighlightText />
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#1F382B]/10 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#1F382B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1F382B]">Nature Doesn't Waste</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nature creates no waste. Everything is reused, recycled, or repurposed in the cycle of life.
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#1F382B]/10 rounded-full flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-[#1F382B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1F382B]">Neither Should We</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              We should imitate nature by creating regenerative systems where waste becomes resource.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

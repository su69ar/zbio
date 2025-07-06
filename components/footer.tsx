import { Leaf, Facebook, Instagram, Linkedin, Twitter, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1F382B] text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Intro */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Leaf className="w-6 h-6 text-[#1F382B]" />
              </div>
              <span className="text-2xl font-bold">ZBIO</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transforming Bali's food waste into regenerative resources through our complete circular ecosystem. From
              waste to worth, for your business, for Bali, and for the planet.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Waste Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Processing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Organic Fertilizer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Animal Feed</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300 space-y-2">
          <p>&copy; {new Date().getFullYear()} ZBIO. All rights reserved. Building a sustainable future for Bali.</p>
          
          {/* Made with love */}
          <p className="flex items-center justify-center gap-1 text-sm text-gray-400">
            Made with
            <Heart className="w-4 h-4 text-red-500 inline" />
            by{" "}
            <a
              href="https://wa.me/6281339138188"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition"
            >
              Bali Micro Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

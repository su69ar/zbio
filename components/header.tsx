import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 z-[100]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/ZBIO_black.png" alt="ZBIO Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-[#1F382B]">ZBIO</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-[#1F382B] transition-colors">
            About
          </a>
          <a href="#waste-crisis" className="text-gray-700 hover:text-[#1F382B] transition-colors">
            Why It Matters
          </a>
          <a href="#zbio-solution" className="text-gray-700 hover:text-[#1F382B] transition-colors">
            ZBio Solution
          </a>
          <a href="#benefits" className="text-gray-700 hover:text-[#1F382B] transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-[#1F382B] transition-colors">
            Testimonials
          </a>
        </nav>

        {/* CTA */}
        <a href="#testimonials">
          <Button className="bg-[#1F382B] hover:bg-[#1F382B]/90 text-white">Get Started</Button>
        </a>
      </div>
    </header>
  )
}

'use client'

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/ZBIO_black.png" alt="ZBIO Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-[#1F382B]">ZBIO</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="#testimonials">
              <Button className="bg-[#1F382B] hover:bg-[#1F382B]/90 text-white">Get Started</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden z-[60]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-[#1F382B]" /> : <Menu className="w-6 h-6 text-[#1F382B]" />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col space-y-6 pt-24">
          <NavLinks onClick={() => setIsOpen(false)} mobile />
          <a href="#testimonials" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-[#1F382B] text-white">Get Started</Button>
          </a>
        </div>
      </div>
    </>
  )
}

function NavLinks({ onClick, mobile = false }: { onClick?: () => void; mobile?: boolean }) {
  const base = "text-gray-700 hover:text-[#1F382B] transition-colors"
  const mobileStyle = "text-lg font-semibold block"
  const desktopStyle = "inline"

  const className = `${base} ${mobile ? mobileStyle : desktopStyle}`

  return (
    <>
      <a href="#about" className={className} onClick={onClick}>About</a>
      <a href="#waste-crisis" className={className} onClick={onClick}>Why It Matters</a>
      <a href="#zbio-solution" className={className} onClick={onClick}>ZBio Solution</a>
      <a href="#benefits" className={className} onClick={onClick}>Benefits</a>
      <a href="#testimonials" className={className} onClick={onClick}>Testimonials</a>
    </>
  )
}

'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/assets/HT_logo.png"
              alt="Homburger Taxi Logo"
              className="h-12 w-auto mr-2"
            />
            {/* Optional: Altes Figma-Logo entfernen oder als Fallback lassen */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#F7C600] transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#preise" className="text-gray-700 hover:text-[#F7C600] transition-colors duration-200 font-medium">
              Preise
            </a>
            <a href="#leistungen" className="text-gray-700 hover:text-[#F7C600] transition-colors duration-200 font-medium">
              Leistungen
            </a>
            <a href="#kontakt" className="text-gray-700 hover:text-[#F7C600] transition-colors duration-200 font-medium">
              Kontakt
            </a>
          </nav>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center">
            <Button 
              className="bg-[#F7C600] hover:bg-[#222222] text-[#222222] hover:text-[#F7C600] transition-all duration-300 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              size="lg"
            >
              <Phone className="h-4 w-4 mr-2" />
              Jetzt anrufen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-[#F7C600] transition-colors duration-200 px-2 py-1 font-medium"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="#preise" 
                className="text-gray-700 hover:text-[#F7C600] transition-colors duration-200 px-2 py-1 font-medium"
                onClick={toggleMenu}
              >
                Preise
              </a>
              <a 
                href="#leistungen" 
                className="text-gray-700 hover:text-[#F7C600] transition-colors duration-200 px-2 py-1 font-medium"
                onClick={toggleMenu}
              >
                Leistungen
              </a>
              <a 
                href="#kontakt" 
                className="text-gray-700 hover:text-[#F7C600] transition-colors duration-200 px-2 py-1 font-medium"
                onClick={toggleMenu}
              >
                Kontakt
              </a>
              <Button 
                className="bg-[#F7C600] hover:bg-[#222222] text-[#222222] hover:text-[#F7C600] transition-all duration-300 mx-2 rounded-full"
                size="sm"
              >
                <Phone className="h-4 w-4 mr-2" />
                Jetzt anrufen
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
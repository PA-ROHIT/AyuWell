'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Heart, MessageCircle } from 'lucide-react'
import Button from './ui/Button'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About Dr. Pooja', href: '/#about' },
    { name: 'Book Appointment', href: '/book-appointment' },
    { name: 'Contact', href: '/#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'}`}>
      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <Heart className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform" />
            <div>
              <span className="text-2xl font-bold text-gray-900">Ayu Well</span>
              <div className="text-xs text-gray-500">Physiotherapy & Rehabilitation</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="default">
              <MessageCircle className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">Ayu Well</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 text-lg font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <Button variant="default" className="w-full justify-center">
                <MessageCircle className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                Chat on WhatsApp
              </Button>
            </div>


          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
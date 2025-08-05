import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Physiotherapy', href: '/#services' },
      { name: 'Neuro Rehabilitation', href: '/#services' },
      { name: 'Sports Rehabilitation', href: '/#services' },
      { name: 'Pediatric Care', href: '/#services' },
      { name: 'Geriatric Care', href: '/#services' },
    ],
    about: [
      { name: 'About Dr. Pooja', href: '/#about' },
      { name: 'Our Approach', href: '/#about' },
      { name: 'Patient Stories', href: '#' },
      { name: 'Blog & Tips', href: '#' },
      { name: 'FAQs', href: '#' },
    ],
    support: [
      { name: 'Book Appointment', href: '/book-appointment' },
      { name: 'Insurance Information', href: '#' },
      { name: 'Payment Options', href: '#' },
      { name: 'Patient Forms', href: '#' },
      { name: 'Emergency Contact', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Patient Rights', href: '#' },
      { name: 'Accessibility', href: '#' },
      { name: 'Sitemap', href: '#' },
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-500 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="group flex items-center space-x-2 mb-6 hover:-translate-y-0.5 transition-transform duration-300"
            >
              <Heart className="w-8 h-8 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <span className="text-2xl font-bold">Ayu Well</span>
                <div className="text-sm text-gray-400">Physiotherapy & Rehabilitation</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Providing compassionate, personalized physiotherapy care for over 8 years. 
              Dr. Pooja and our team are dedicated to your recovery and well-being.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="group flex items-center space-x-3 text-gray-300 hover:-translate-y-0.5 transition-transform duration-300">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-primary-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span>+91 82758 51544</span>
              </div>
              <div className="group flex items-center space-x-3 text-gray-300 hover:-translate-y-0.5 transition-transform duration-300">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-primary-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span>info@ayuwell.com</span>
              </div>
              <div className="group flex items-center space-x-3 text-gray-300 hover:-translate-y-0.5 transition-transform duration-300">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-primary-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span>123 Wellness Street, City, State 12345</span>
              </div>
              <div className="group flex items-center space-x-3 text-gray-300 hover:-translate-y-0.5 transition-transform duration-300">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                  <Clock className="w-4 h-4 text-primary-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span>Mon-Fri: 9AM-7PM, Sat: 9AM-5PM</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="relative">
            <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <span className="inline-block w-8 h-0.5 bg-primary-500"></span>
              <span>Services</span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="group flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="inline-block w-2 h-2 bg-primary-500 rounded-full opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"></span>
                    <span className="ml-2">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div className="relative">
            <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <span className="inline-block w-8 h-0.5 bg-primary-500"></span>
              <span>About</span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="group flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="inline-block w-2 h-2 bg-primary-500 rounded-full opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"></span>
                    <span className="ml-2">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="relative">
            <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <span className="inline-block w-8 h-0.5 bg-primary-500"></span>
              <span>Support</span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="group flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="inline-block w-2 h-2 bg-primary-500 rounded-full opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"></span>
                    <span className="ml-2">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-300">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Quick contact:</span>
              <button className="group px-6 py-2 bg-green-600 hover:bg-green-700 rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center space-x-2 shadow-lg shadow-green-900/20 hover:shadow-green-900/30">
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Ayu Well Physiotherapy & Rehabilitation Center. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="bg-red-900/90 backdrop-blur-sm text-white py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-red-800/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 animate-pulse" />
              <span className="font-medium">Urgent Consultation:</span>
              <span className="font-bold">+91 98765 43210</span>
            </div>
            <span className="text-red-200 text-sm">| Available during clinic hours</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
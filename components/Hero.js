import { ArrowRight, CheckCircle, Clock, Users, Phone, MessageCircle } from 'lucide-react'
import Button from './ui/Button'
import Link from 'next/link'

const Hero = () => {
  const features = [
    { icon: CheckCircle, text: 'Experienced Physiotherapist' },
    { icon: Clock, text: 'Flexible Appointment Times' },
    { icon: Users, text: 'Patient-Centered Care' },
  ]

  return (
    <section id="home" className="relative gradient-bg overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 animate-gradient-slow"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-200 rounded-full opacity-20 animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight slide-up">
                Expert Physiotherapy for<br />
                <span className="text-gradient font-extrabold">Better Health</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl slide-up" style={{animationDelay: '0.2s'}}>
                Regain your strength and mobility with personalized rehabilitation care.
                Our evidence-based approach ensures the best outcomes for your recovery journey.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={feature.text}
                    className="flex items-center space-x-2 slide-up"
                    style={{animationDelay: `${0.3 + index * 0.1}s`}}
                  >
                    <feature.icon className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 slide-up" style={{animationDelay: '0.6s'}}>
              <Link href="/book-appointment" className="flex-1 sm:flex-none">
                <Button className="w-full sm:w-auto group hover-lift">
                  Book Appointment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#" className="flex-1 sm:flex-none">
                <Button variant="secondary" className="w-full sm:w-auto group hover-lift">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative lg:block fade-in" style={{animationDelay: '0.4s'}}>
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/doctor-image.jpg"
                alt="Dr. Pooja - Physiotherapist"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg slide-up" style={{animationDelay: '0.8s'}}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-sm text-gray-700 font-medium">
                      <Users className="w-4 h-4 mr-2 text-primary-600" />
                      500+ Happy Patients
                    </span>
                    <span className="flex items-center text-sm text-gray-700 font-medium">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary-600" />
                      Evidence-Based Care
                    </span>
                  </div>
                  <Link href="/book-appointment">
                    <Button size="sm" className="hover-lift">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
import { Star, Award, MapPin, Phone, Mail, Heart, Users, Clock, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card'
import Link from 'next/link'
import Button from './ui/Button'

const About = () => {
  const qualifications = [
    'Bachelor of Physiotherapy (BPT)',
    'Master of Physiotherapy (MPT)',
    'Specialized in Neurological Rehabilitation',
    'Certified in Manual Therapy',
    'Advanced Training in Sports Rehabilitation'
  ]

  const experience = [
    { icon: Users, title: '500+ Patients', description: 'Successfully treated patients' },
    { icon: Clock, title: '8+ Years', description: 'Clinical experience' },
    { icon: Star, title: '95% Success Rate', description: 'Patient recovery rate' },
    { icon: Heart, title: 'Patient-First', description: 'Care approach' }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse"></span>
            About Dr. Pooja
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Your Physiotherapist
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Pooja is a dedicated and experienced physiotherapist committed to helping 
            patients achieve their recovery goals and improve their quality of life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/doctor-image.jpg"
                alt="Dr. Pooja"
                width={800}
                height={600}
                className="w-full h-[600px] object-cover transition-transform duration-500 hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Experience Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {experience.map((item, index) => (
                    <div 
                      key={item.title} 
                      className="text-white slide-up"
                      style={{animationDelay: `${0.2 + index * 0.1}s`}}
                    >
                      <item.icon className="w-6 h-6 mb-2" />
                      <div className="text-lg font-bold">{item.title}</div>
                      <div className="text-sm opacity-80">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 slide-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Expertise & Qualifications
              </h3>
              <p className="text-gray-600">
                With over 8 years of experience in physiotherapy, Dr. Pooja specializes in
                providing comprehensive rehabilitation services using evidence-based techniques
                and personalized treatment approaches.
              </p>
            </div>

            {/* Qualifications */}
            <Card variant="default">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary-600" />
                  <span>Professional Qualifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {qualifications.map((qualification, index) => (
                    <li 
                      key={qualification} 
                      className="flex items-center text-gray-600 slide-up"
                      style={{animationDelay: `${0.4 + index * 0.1}s`}}
                    >
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      {qualification}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card variant="default" className="bg-primary-50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <span>123 Wellness Street, City, State 12345</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span>+91 82758 51544</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span>info@ayuwell.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/book-appointment">
                <Button variant="default" className="w-full sm:w-auto group">
                  Book an Appointment
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
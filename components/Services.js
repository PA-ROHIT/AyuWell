import { 
  Activity, 
  Brain, 
  Heart, 
  Baby, 
  Users, 
  Shield, 
  Zap, 
  Target,
  ArrowRight
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card'
import Link from 'next/link'
import Button from './ui/Button'

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: 'Physiotherapy',
      description: 'Comprehensive physical therapy for pain relief, mobility improvement, and functional recovery.',
      features: ['Pain Management', 'Mobility Training', 'Strength Building', 'Functional Exercises']
    },
    {
      icon: Brain,
      title: 'Neuro Rehabilitation',
      description: 'Specialized rehabilitation for neurological conditions and stroke recovery.',
      features: ['Stroke Rehabilitation', 'Balance Training', 'Coordination Exercises', 'Cognitive Training']
    },
    {
      icon: Heart,
      title: 'Cardiac Rehabilitation',
      description: 'Safe and effective rehabilitation programs for heart patients.',
      features: ['Cardiac Exercise', 'Endurance Training', 'Risk Management', 'Lifestyle Guidance']
    },
    {
      icon: Baby,
      title: 'Pediatric Physiotherapy',
      description: 'Gentle and effective therapy for children with developmental and physical challenges.',
      features: ['Developmental Delay', 'Sports Injuries', 'Postural Correction', 'Growth Monitoring']
    },
    {
      icon: Users,
      title: 'Sports Rehabilitation',
      description: 'Specialized treatment for sports injuries and athletic performance enhancement.',
      features: ['Injury Recovery', 'Performance Enhancement', 'Prevention Programs', 'Return to Sport']
    },
    {
      icon: Shield,
      title: 'Geriatric Care',
      description: 'Specialized physiotherapy for elderly patients focusing on mobility and independence.',
      features: ['Balance Training', 'Fall Prevention', 'Strength Building', 'Pain Management']
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse"></span>
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Physiotherapy Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of specialized physiotherapy services tailored to your needs,
            ensuring the best possible care and recovery outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="overflow-hidden slide-up transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full -mr-16 -mt-16 opacity-20"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <service.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/book-appointment" className="block mt-4">
                  <Button 
                    variant="secondary" 
                    className="w-full group hover:bg-primary-50 hover:text-primary-700"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center slide-up" style={{ animationDelay: '0.6s' }}>
          <Link href="/book-appointment">
            <Button variant="default" className="group">
              Book Your Session
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
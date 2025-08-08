import { Star, Award, MapPin, Phone, Mail } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card'

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Primary Care Physician',
      credentials: 'MD, FACP',
      experience: '15+ years',
      education: 'Harvard Medical School',
      image: '/doctor-placeholder.svg',
      rating: 4.9,
      reviews: 127,
      location: 'Main Clinic',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@medcare.com',
      description: 'Dr. Johnson specializes in preventive medicine and chronic disease management. She is committed to building long-term relationships with her patients.',
      specialties: ['Preventive Care', 'Chronic Disease Management', 'Health Screenings', 'Vaccinations']
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Cardiologist',
      credentials: 'MD, FACC',
      experience: '12+ years',
      education: 'Stanford Medical School',
      image: '/doctor-placeholder.svg',
      rating: 4.8,
      reviews: 89,
      location: 'Cardiology Department',
      phone: '+1 (555) 123-4568',
      email: 'michael.chen@medcare.com',
      description: 'Dr. Chen is a board-certified cardiologist with expertise in interventional cardiology and heart failure management.',
      specialties: ['Interventional Cardiology', 'Heart Failure', 'ECG Interpretation', 'Cardiac Rehabilitation']
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      credentials: 'MD, FAAP',
      experience: '10+ years',
      education: 'Johns Hopkins University',
      image: '/doctor-placeholder.svg',
      rating: 4.9,
      reviews: 156,
      location: 'Pediatrics Department',
      phone: '+1 (555) 123-4569',
      email: 'emily.rodriguez@medcare.com',
      description: 'Dr. Rodriguez is passionate about children&apos;s health and provides comprehensive care from birth through adolescence.',
      specialties: ['Well-Child Care', 'Immunizations', 'Behavioral Health', 'Adolescent Medicine']
    },
    {
      name: 'Dr. David Kim',
      specialty: 'Neurologist',
      credentials: 'MD, PhD',
      experience: '18+ years',
      education: 'Yale Medical School',
      image: '/doctor-placeholder.svg',
      rating: 4.7,
      reviews: 73,
      location: 'Neurology Department',
      phone: '+1 (555) 123-4570',
      email: 'david.kim@medcare.com',
      description: 'Dr. Kim specializes in the diagnosis and treatment of complex neurological disorders with a focus on patient-centered care.',
      specialties: ['Stroke Treatment', 'Epilepsy Management', 'Headache Disorders', 'Memory Disorders']
    },
    {
      name: 'Dr. Lisa Thompson',
      specialty: 'Ophthalmologist',
      credentials: 'MD, FACS',
      experience: '14+ years',
      education: 'UCLA Medical School',
      image: '/doctor-placeholder.svg',
      rating: 4.8,
      reviews: 94,
      location: 'Ophthalmology Department',
      phone: '+1 (555) 123-4571',
      email: 'lisa.thompson@medcare.com',
      description: 'Dr. Thompson provides comprehensive eye care services including medical and surgical treatment of eye diseases.',
      specialties: ['Cataract Surgery', 'Glaucoma Treatment', 'Retinal Care', 'Corneal Surgery']
    },
    {
      name: 'Dr. Robert Wilson',
      specialty: 'Emergency Medicine',
      credentials: 'MD, FACEP',
      experience: '16+ years',
      education: 'University of Michigan',
      image: '/doctor-placeholder.svg',
      rating: 4.9,
      reviews: 203,
      location: 'Emergency Department',
      phone: '+1 (555) 123-4572',
      email: 'robert.wilson@medcare.com',
      description: 'Dr. Wilson leads our emergency medicine team, providing critical care and trauma management 24/7.',
      specialties: ['Trauma Care', 'Critical Care', 'Emergency Surgery', 'Disaster Medicine']
    }
  ]

  return (
    <section id="doctors" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of experienced and compassionate healthcare professionals is dedicated to providing 
            the highest quality medical care for you and your family.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{doctor.name}</CardTitle>
                    <CardDescription className="text-primary-600 font-medium">
                      {doctor.specialty}
                    </CardDescription>
                    <p className="text-sm text-gray-500 mt-1">{doctor.credentials}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                    <span className="text-xs text-gray-500">({doctor.reviews})</span>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">{doctor.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="w-4 h-4 mr-2" />
                    <span>{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{doctor.location}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>{doctor.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>{doctor.email}</span>
                    </div>
                  </div>

                  <button className="w-full btn-primary mt-4">
                    Book Appointment
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can&apos;t Find the Right Doctor?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team can help you find the perfect doctor for your specific needs. 
              Contact us for a personalized recommendation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Doctor Recommendation
              </button>
              <button className="btn-secondary">
                View All Doctors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Doctors
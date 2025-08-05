'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card'
import Button from './ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      notes: ''
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+91 82758 51544',
        '+91 82758 51544 (Emergency)'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@ayuwell.com',
        'dr.pooja@ayuwell.com'
      ]
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        '123 Wellness Street',
        'City, State 12345'
      ]
    },
    {
      icon: Clock,
      title: 'Hours',
      details: [
        'Mon-Fri: 9:00 AM - 7:00 PM',
        'Sat: 9:00 AM - 5:00 PM',
        'Sun: By Appointment Only'
      ]
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your recovery journey? Contact Dr. Pooja today to schedule 
            your consultation or ask any questions about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Book Your Appointment</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Appointment Request Sent!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for choosing Ayu Well. Dr. Pooja will contact you soon to confirm your appointment.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Book Another Appointment
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter your email (optional)"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Select Service *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Choose a service</option>
                        <option value="physiotherapy">Physiotherapy</option>
                        <option value="neuro-rehabilitation">Neuro Rehabilitation</option>
                        <option value="cardiac-rehabilitation">Cardiac Rehabilitation</option>
                        <option value="pediatric-physiotherapy">Pediatric Physiotherapy</option>
                        <option value="sports-rehabilitation">Sports Rehabilitation</option>
                        <option value="geriatric-care">Geriatric Care</option>
                        <option value="electrotherapy">Electrotherapy</option>
                        <option value="manual-therapy">Manual Therapy</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        >
                          <option value="">Select time</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                          <option value="17:00">5:00 PM</option>
                          <option value="18:00">6:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Tell us about your condition or any specific concerns..."
                      />
                    </div>

                    <Button type="submit" className="w-full group">
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Book Appointment
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* WhatsApp Contact */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      WhatsApp Consultation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Get quick answers to your questions via WhatsApp
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">123 Wellness Street</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Need Immediate Help?
                </h3>
                <p className="text-gray-600 mb-4">
                  For urgent physiotherapy consultations, please call us directly.
                </p>
                <div className="text-2xl font-bold text-red-600">
                  +91 98765 43210
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Available during clinic hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact 
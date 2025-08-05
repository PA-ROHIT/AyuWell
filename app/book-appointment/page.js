'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, ArrowLeft, Calendar, User, FileText } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function BookAppointment() {
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
        '+91 98765 43210',
        '+91 98765 43211 (Emergency)'
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
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-gray-900 hover:text-primary-600">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">Book Your Appointment</h1>
              <p className="text-gray-600">Schedule your consultation with Dr. Pooja</p>
            </div>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Appointment Form */}
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
                    <div className="space-y-3">
                      <Button onClick={() => setIsSubmitted(false)}>
                        Book Another Appointment
                      </Button>
                      <Link href="/appointment" className="block">
                        <Button variant="secondary" className="w-full">
                          View Appointment Details
                        </Button>
                      </Link>
                    </div>
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
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              {contactInfo.map((info, index) => (
                <Card key={index} className="mb-4">
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
            </div>

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

            {/* What to Expect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Please arrive 10 minutes before your appointment
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Bring any relevant medical reports or prescriptions
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Wear comfortable clothing for your session
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    First session typically lasts 45-60 minutes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 
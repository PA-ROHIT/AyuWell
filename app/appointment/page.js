import { CheckCircle, Calendar, Clock, Phone, MessageCircle, ArrowLeft, MapPin, FileText, User, Heart, Mail } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

export default function Appointment() {
  // This would typically come from a database or state management
  const appointmentDetails = {
    name: "John Doe",
    service: "Physiotherapy",
    date: "2024-01-15",
    time: "10:00 AM",
    status: "Confirmed",
    appointmentId: "APT-2024-001",
    notes: "Lower back pain consultation"
  }

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
              <h1 className="text-2xl font-bold text-gray-900">Your Appointment</h1>
              <p className="text-gray-600">Appointment details and confirmation</p>
            </div>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Appointment Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Success Status */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Appointment Confirmed!</h2>
                    <p className="text-gray-600">Your appointment has been successfully scheduled</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appointment Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Appointment Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-primary-600" />
                      <div>
                        <span className="text-sm text-gray-500">Patient Name</span>
                        <p className="font-medium">{appointmentDetails.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-primary-600" />
                      <div>
                        <span className="text-sm text-gray-500">Service</span>
                        <p className="font-medium">{appointmentDetails.service}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <div>
                        <span className="text-sm text-gray-500">Date</span>
                        <p className="font-medium">{appointmentDetails.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary-600" />
                      <div>
                        <span className="text-sm text-gray-500">Time</span>
                        <p className="font-medium">{appointmentDetails.time}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-primary-600" />
                      <div>
                        <span className="text-sm text-gray-500">Notes</span>
                        <p className="font-medium">{appointmentDetails.notes}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Appointment ID:</strong> {appointmentDetails.appointmentId}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dr. Pooja's Message */}
            <Card className="bg-primary-50 border-primary-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      A Message from Dr. Pooja
                    </h3>
                    <p className="text-gray-600">
                      &quot;Thank you for choosing Ayu Well for your physiotherapy care. I&apos;m looking forward to helping you 
                      achieve your recovery goals. Please don&apos;t hesitate to reach out if you have any questions before 
                      your appointment. Your health and well-being are my top priorities.&quot;
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Button className="w-full group">
                  <Calendar className="w-4 h-4 mr-2" />
                  Add to Calendar
                </Button>
                <Button variant="secondary" className="w-full group">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Clinic
                </Button>
              </div>
              
              <Button className="w-full bg-green-600 hover:bg-green-700 group">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Location & Directions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900">Ayu Well Clinic</h4>
                    <p className="text-sm text-gray-600">123 Wellness Street</p>
                    <p className="text-sm text-gray-600">City, State 12345</p>
                  </div>
                  
                  <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Interactive Map</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
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

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-primary-600" />
                    <span className="text-sm">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-4 h-4 text-primary-600" />
                    <span className="text-sm">WhatsApp Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-primary-600" />
                    <span className="text-sm">info@ayuwell.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reschedule/Cancel */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-4">
                <h4 className="font-medium text-gray-900 mb-2">Need to Reschedule?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Please contact us at least 24 hours before your appointment.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    Reschedule
                  </Button>
                  <Button variant="outline" size="sm" className="w-full text-red-600 border-red-300 hover:bg-red-50">
                    Cancel Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
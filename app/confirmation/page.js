import { CheckCircle, Calendar, Clock, Phone, MessageCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function AppointmentConfirmation() {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Appointment Confirmed!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for choosing Ayu Well. Dr. Pooja will contact you soon to confirm your appointment details.
          </p>

          {/* Appointment Summary */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Appointment Details</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700">Date: <span className="font-medium">[Selected Date]</span></span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700">Time: <span className="font-medium">[Selected Time]</span></span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700">Service: <span className="font-medium">[Selected Service]</span></span>
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="bg-primary-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              A Message from Dr. Pooja
            </h3>
            <p className="text-gray-600">
              &quot;Thank you for trusting us with your recovery journey. I&apos;m looking forward to helping you 
              achieve your health and mobility goals. Please don&apos;t hesitate to reach out if you have 
              any questions before your appointment.&quot;
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Add to Calendar</span>
              </button>
              <Link href="/" className="btn-secondary flex items-center justify-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Go to Homepage</span>
              </Link>
              <button className="btn-accent flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Call Clinic</span>
              </button>
            </div>

            {/* WhatsApp Contact */}
            <div className="mt-6">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">What to Expect</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Please arrive 10 minutes before your appointment</li>
              <li>• Bring any relevant medical reports or prescriptions</li>
              <li>• Wear comfortable clothing for your session</li>
              <li>• First session typically lasts 45-60 minutes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
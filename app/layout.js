import './globals.css'

export const metadata = {
  title: 'Ayu Well - Physiotherapy & Rehabilitation Center | Dr. Pooja',
  description: 'Professional physiotherapy and rehabilitation services with Dr. Pooja. Book your appointment for personalized care and recovery.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
} 
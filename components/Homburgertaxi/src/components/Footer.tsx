import { Card, CardContent } from './ui/card'
import { Separator } from './ui/separator'
import { MapPin, Phone, Mail, Clock, CreditCard, Building2 } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-[#222222] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#F7C600] p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-[#222222]" />
              </div>
              <h3 className="text-xl">Taxi Bad Homburg</h3>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Seit über 15 Jahren Ihr zuverlässiger Partner für alle Transportbedürfnisse in Bad Homburg und Umgebung. 
              24/7 Service, faire Preise und höchste Qualität.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#F7C600] flex-shrink-0" />
                <span className="text-gray-300">
                  Louisenstraße 45, 61348 Bad Homburg v.d.H.
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#F7C600] flex-shrink-0" />
                <span className="text-gray-300">
                  +49 (0) 6172 / 123-456
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#F7C600] flex-shrink-0" />
                <span className="text-gray-300">
                  info@taxi-bad-homburg.de
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#F7C600] flex-shrink-0" />
                <span className="text-gray-300">
                  24 Stunden täglich verfügbar
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[#F7C600] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#preise" className="text-gray-300 hover:text-[#F7C600] transition-colors">
                  Preise
                </a>
              </li>
              <li>
                <a href="#leistungen" className="text-gray-300 hover:text-[#F7C600] transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-gray-300 hover:text-[#F7C600] transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-6">Unsere Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-300">Flughafentransfer</li>
              <li className="text-gray-300">Hauptbahnhof Transfer</li>
              <li className="text-gray-300">Krankenfahrten</li>
              <li className="text-gray-300">Pauschalreisen</li>
              <li className="text-gray-300">Kurierdienst</li>
              <li className="text-gray-300">24/7 Notfall-Service</li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-0 relative h-64 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1636353503718-4284c320d07b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWQlMjBob21idXJnJTIwY2l0eSUyMGNlbnRlcnxlbnwxfHx8fDE3NTU4NzMzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bad Homburg Stadtansicht"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-[#F7C600] mx-auto mb-2" />
                  <p className="text-white">Unser Standort in Bad Homburg</p>
                  <p className="text-gray-300 text-sm">Klicken für Routenplanung</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <div className="mb-8">
          <h3 className="text-lg mb-4 text-center">Akzeptierte Zahlungsmittel</h3>
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
              <CreditCard className="h-5 w-5 text-[#F7C600]" />
              <span className="text-gray-300 text-sm">Visa</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
              <CreditCard className="h-5 w-5 text-[#F7C600]" />
              <span className="text-gray-300 text-sm">Mastercard</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
              <CreditCard className="h-5 w-5 text-[#F7C600]" />
              <span className="text-gray-300 text-sm">EC-Karte</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
              <CreditCard className="h-5 w-5 text-[#F7C600]" />
              <span className="text-gray-300 text-sm">American Express</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
              <span className="text-gray-300 text-sm">Barzahlung</span>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center space-x-6">
            <a href="#impressum" className="text-gray-400 hover:text-[#F7C600] text-sm transition-colors">
              Impressum
            </a>
            <a href="#datenschutz" className="text-gray-400 hover:text-[#F7C600] text-sm transition-colors">
              Datenschutz
            </a>
            <a href="#agb" className="text-gray-400 hover:text-[#F7C600] text-sm transition-colors">
              AGB
            </a>
          </div>
          
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>© 2025 Taxi Bad Homburg. Alle Rechte vorbehalten.</p>
            <p className="mt-1">Konzessionsnummer: T-12345 | IHK Frankfurt</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
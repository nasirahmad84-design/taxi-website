'use client'

import { useState, useEffect } from 'react'
// Hilfskomponente für das Datumfeld, um Hydration-Mismatch zu vermeiden
interface DateInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
function DateInput({ value, onChange, className }: DateInputProps) {
  const [min, setMin] = useState<string | undefined>(undefined);
  useEffect(() => {
    setMin(new Date().toISOString().split('T')[0]);
  }, []);
  return (
    <Input
      type="date"
      value={value}
      onChange={onChange}
      className={className}
      {...(min ? { min } : {})}
    />
  );
}
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent } from './ui/card'
import { MapPin, Calendar, Clock, Star, Users, Shield } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import GoogleMapsAutocomplete from './GoogleMapsAutocomplete'

export default function HeroSection() {
  const [bookingData, setBookingData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking data:', bookingData)
    // Here would be the booking logic
  }

  const handleDestinationSelect = (place: { description: string; placeId: string }) => {
    setBookingData({...bookingData, destination: place.description})
  }

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Mobile: Booking Form First, Desktop: Right Side */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-6 lg:p-8">
                <div className="text-center mb-6 lg:mb-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#222222] mb-2">
                    Jetzt Taxi buchen
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Schnell, einfach und transparent
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700">
                      <MapPin className="h-4 w-4 mr-2 text-[#F7C600]" />
                      Abholort
                    </label>
                    <Input
                      placeholder="z.B. Bad Homburg, Louisenstraße 45"
                      value={bookingData.pickup}
                      onChange={(e) => setBookingData({...bookingData, pickup: e.target.value})}
                      className="border-gray-300 focus:border-[#F7C600] focus:ring-[#F7C600] rounded-xl h-11 lg:h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700">
                      <MapPin className="h-4 w-4 mr-2 text-[#F7C600]" />
                      Zielort
                    </label>
                    <GoogleMapsAutocomplete
                      placeholder="z.B. Frankfurt Flughafen"
                      value={bookingData.destination}
                      onChange={(value) => setBookingData({...bookingData, destination: value})}
                      onPlaceSelect={handleDestinationSelect}
                      className="border-gray-300 focus:border-[#F7C600] focus:ring-[#F7C600] rounded-xl h-11 lg:h-12"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    <div className="space-y-2">
                      <label className="flex items-center text-sm font-medium text-gray-700">
                        <Calendar className="h-4 w-4 mr-2 text-[#F7C600]" />
                        Datum
                      </label>
                      <DateInput
                        value={bookingData.date}
                        onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                        className="border-gray-300 focus:border-[#F7C600] focus:ring-[#F7C600] rounded-xl h-11 lg:h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center text-sm font-medium text-gray-700">
                        <Clock className="h-4 w-4 mr-2 text-[#F7C600]" />
                        Uhrzeit
                      </label>
                      <Input
                        type="time"
                        value={bookingData.time}
                        onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                        className="border-gray-300 focus:border-[#F7C600] focus:ring-[#F7C600] rounded-xl h-11 lg:h-12"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#F7C600] hover:bg-[#222222] text-[#222222] hover:text-[#F7C600] transition-all duration-300 rounded-xl h-12 lg:h-14 text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    Taxi buchen
                  </Button>
                </form>

                {/* Price Info */}
                <div className="mt-4 lg:mt-6 p-3 lg:p-4 bg-gradient-to-r from-[#F7C600]/10 to-[#F7C600]/5 rounded-xl border border-[#F7C600]/20">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-2 w-2 bg-[#F7C600] rounded-full animate-pulse"></div>
                    <p className="text-xs lg:text-sm font-medium text-[#222222] text-center">
                      <strong>Festpreise ab 45 € nach Frankfurt Flughafen</strong>
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 text-center mt-1">
                    Keine versteckten Kosten • Transparente Preisgestaltung
                  </p>
                </div>

                {/* Contact Options */}
                <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-gray-100">
                  <p className="text-center text-xs lg:text-sm text-gray-600 mb-3">
                    Oder direkt anrufen für sofortige Buchung:
                  </p>
                  <div className="flex items-center justify-center">
                    <Button 
                      variant="outline"
                      className="border-[#F7C600] text-[#F7C600] hover:bg-[#F7C600] hover:text-[#222222] rounded-full text-sm lg:text-base"
                      size="sm"
                    >
                      📞 +49 (0) 6172 / 123-456
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile: Content Second, Desktop: Left Side */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
            {/* Headlines */}
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#F7C600]/10 rounded-full px-3 lg:px-4 py-2">
                <Star className="h-4 w-4 text-[#F7C600]" />
                <span className="text-xs lg:text-sm font-medium text-[#222222]">4.8 ★ von 150+ Bewertungen</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#222222] leading-tight text-balance">
                Ihr Taxi in <span className="text-[#F7C600]">Bad Homburg</span> – zuverlässig & fair
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                24/7 Service für Flughafen, Bahnhof, Krankenfahrten und mehr. 
                Über 15 Jahre Erfahrung und 50.000+ zufriedene Fahrgäste.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              <div className="text-center">
                <div className="bg-[#F7C600]/10 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mx-auto mb-2 lg:mb-3">
                  <Clock className="h-6 w-6 lg:h-8 lg:w-8 text-[#F7C600]" />
                </div>
                <h4 className="font-semibold text-[#222222] mb-1 text-sm lg:text-base">24/7 Service</h4>
                <p className="text-xs lg:text-sm text-gray-600">Immer erreichbar</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#F7C600]/10 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mx-auto mb-2 lg:mb-3">
                  <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-[#F7C600]" />
                </div>
                <h4 className="font-semibold text-[#222222] mb-1 text-sm lg:text-base">Vollversichert</h4>
                <p className="text-xs lg:text-sm text-gray-600">Sicher & legal</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#F7C600]/10 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mx-auto mb-2 lg:mb-3">
                  <Users className="h-6 w-6 lg:h-8 lg:w-8 text-[#F7C600]" />
                </div>
                <h4 className="font-semibold text-[#222222] mb-1 text-sm lg:text-base">50.000+</h4>
                <p className="text-xs lg:text-sm text-gray-600">Zufriedene Kunden</p>
              </div>
            </div>

            {/* Customer Images */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              <div className="relative rounded-2xl overflow-hidden group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1636057457377-715da92c02b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVycyUyMHRheGklMjBwYXNzZW5nZXJzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU1ODczNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Zufriedene Taxi-Kunden"
                  className="w-full h-36 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 text-white">
                  <p className="font-semibold text-sm lg:text-base">Geschäftskunden</p>
                  <p className="text-xs lg:text-sm opacity-90">Pünktlich zum Meeting</p>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1649186019834-18ee06d7d5ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0YXhpJTIwZHJpdmVyJTIwc21pbGluZyUyMHVuaWZvcm18ZW58MXx8fHwxNzU1ODczNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professioneller Taxi-Fahrer"
                  className="w-full h-36 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 text-white">
                  <p className="font-semibold text-sm lg:text-base">Unser Team</p>
                  <p className="text-xs lg:text-sm opacity-90">Freundlich & professionell</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
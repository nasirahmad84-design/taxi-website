'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Badge } from './ui/badge'
import { Plane, Train, MapPin, Building2, Car } from 'lucide-react'

interface PriceItem {
  id: string
  destination: string
  standardPrice: number
  largeCarPrice: number
  icon: React.ReactNode
  category: string
  description: string
}

const priceData: PriceItem[] = [
  {
    id: '1',
    destination: 'Frankfurt Flughafen',
    standardPrice: 45,
    largeCarPrice: 55,
    icon: <Plane className="h-6 w-6" />,
    category: 'flughafen',
    description: 'Terminal 1 & 2, alle Abflug-/Ankunftsbereiche'
  },
  {
    id: '2',
    destination: 'Frankfurt Hauptbahnhof',
    standardPrice: 35,
    largeCarPrice: 45,
    icon: <Train className="h-6 w-6" />,
    category: 'bahnhof',
    description: 'Direkt vor dem Haupteingang'
  },
  {
    id: '3',
    destination: 'Bad Homburg Bahnhof',
    standardPrice: 8,
    largeCarPrice: 12,
    icon: <Train className="h-6 w-6" />,
    category: 'bahnhof',
    description: 'Zentral gelegener Bahnhof'
  },
  {
    id: '4',
    destination: 'Düsseldorf Flughafen',
    standardPrice: 85,
    largeCarPrice: 95,
    icon: <Plane className="h-6 w-6" />,
    category: 'flughafen',
    description: 'Terminal A, B & C'
  },
  {
    id: '5',
    destination: 'Köln Hauptbahnhof',
    standardPrice: 65,
    largeCarPrice: 75,
    icon: <Train className="h-6 w-6" />,
    category: 'bahnhof',
    description: 'Dom/Hauptbahnhof'
  },
  {
    id: '6',
    destination: 'Innerhalb Bad Homburg',
    standardPrice: 12,
    largeCarPrice: 15,
    icon: <MapPin className="h-6 w-6" />,
    category: 'stadt',
    description: 'Alle Stadtteile und Kurgebiet'
  },
  {
    id: '7',
    destination: 'Kliniken & Praxen',
    standardPrice: 15,
    largeCarPrice: 20,
    icon: <Building2 className="h-6 w-6" />,
    category: 'medizin',
    description: 'Krankenfahrten mit Krankenkassen-Abrechnung'
  },
  {
    id: '8',
    destination: 'Umland (bis 20 km)',
    standardPrice: 25,
    largeCarPrice: 30,
    icon: <Car className="h-6 w-6" />,
    category: 'umland',
    description: 'Frankfurt, Oberursel, Friedrichsdorf'
  },
  {
    id: '9',
    destination: 'Mainz Hauptbahnhof',
    standardPrice: 55,
    largeCarPrice: 65,
    icon: <Train className="h-6 w-6" />,
    category: 'bahnhof',
    description: 'Hauptbahnhof & Innenstadt'
  }
]

export default function PricesSection() {
  const [filter, setFilter] = useState('alle')

  const filteredPrices = filter === 'alle' 
    ? priceData 
    : priceData.filter(item => item.category === filter)

  return (
    <section id="preise" className="py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#222222] mb-4">
            Transparente Festpreise
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Keine versteckten Kosten – Sie wissen vorher, was Sie zahlen
          </p>
          
          {/* Filter */}
          <div className="max-w-xs mx-auto">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Kategorie wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alle">Alle Preise</SelectItem>
                <SelectItem value="flughafen">Flughäfen</SelectItem>
                <SelectItem value="bahnhof">Bahnhöfe</SelectItem>
                <SelectItem value="stadt">Stadtgebiet</SelectItem>
                <SelectItem value="medizin">Krankenfahrten</SelectItem>
                <SelectItem value="umland">Umland</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Price Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrices.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#F7C600] p-2 rounded-lg text-[#222222]">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <CardTitle className="text-lg text-[#222222]">
                        {item.destination}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Standard (1-4 Personen)</span>
                    <Badge variant="outline" className="bg-[#F7C600] text-[#222222] border-[#F7C600]">
                      {item.standardPrice} €
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Großraum (5-8 Personen)</span>
                    <Badge variant="outline" className="bg-[#222222] text-white border-[#222222]">
                      {item.largeCarPrice} €
                    </Badge>
                  </div>
                </div>
                
                {item.category === 'medizin' && (
                  <div className="mt-4 p-2 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-xs text-green-700 text-center">
                      ✓ Krankenkassen-Abrechnung möglich
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-[#F7C600]/10 border-[#F7C600]/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl text-[#222222] mb-2">
                Wichtige Hinweise zu unseren Preisen
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  • Alle Preise gelten für Fahrten ab Bad Homburg
                </div>
                <div>
                  • Wartezeit: 0,50 € pro Minute (nach 5 Min.)
                </div>
                <div>
                  • Zuschlag für Nachtstunden (22-6 Uhr): 20%
                </div>
                <div>
                  • Zuschlag Sonn-/Feiertag: 20%
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
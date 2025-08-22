import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Plane, Train, Heart, Luggage, Package } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const services = [
  {
    id: 'flughafentransfer',
    title: 'Flughafentransfer',
    icon: <Plane className="h-8 w-8" />,
    description: 'Zuverlässiger Transfer zu allen deutschen und europäischen Flughäfen. Pünktlich, komfortabel und zu Festpreisen.',
    image: 'https://images.unsplash.com/photo-1736104761587-d9babea20923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdHJhbnNmZXIlMjBjYXJ8ZW58MXx8fHwxNzU1ODczMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Frankfurt Flughafen ab 45 €',
      'Düsseldorf, Köln/Bonn verfügbar',
      'Wartezeit bei Verspätungen inklusive',
      'Meet & Greet Service'
    ]
  },
  {
    id: 'hauptbahnhof',
    title: 'Hauptbahnhof Transfer',
    icon: <Train className="h-8 w-8" />,
    description: 'Komfortable Fahrten zu allen Hauptbahnhöfen der Region. Perfekt für Geschäfts- und Privatreisen.',
    image: 'https://images.unsplash.com/photo-1748262442969-1929ebfba868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbiUyMHN0YXRpb24lMjB0cmFuc3BvcnRhdGlvbnxlbnwxfHx8fDE3NTU4NzMyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Frankfurt Hauptbahnhof ab 35 €',
      'Köln, Mainz, Düsseldorf',
      'Gepäckservice verfügbar',
      'Barrierefreie Fahrzeuge'
    ]
  },
  {
    id: 'krankenfahrten',
    title: 'Krankenfahrten',
    icon: <Heart className="h-8 w-8" />,
    description: 'Professionelle Krankenfahrten mit Krankenkassen-Abrechnung. Einfühlsam, sicher und zuverlässig.',
    image: 'https://images.unsplash.com/photo-1721411480070-fcb558776d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdHJhbnNwb3J0JTIwYW1idWxhbmNlfGVufDF8fHx8MTc1NTg3MzI2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Krankenkassen-Abrechnung',
      'Rollstuhlgerechte Fahrzeuge',
      'Dialyse-, Chemo-Fahrten',
      'Geschultes Personal'
    ]
  },
  {
    id: 'pauschalreisen',
    title: 'Pauschalreisen',
    icon: <Luggage className="h-8 w-8" />,
    description: 'Entspannt in den Urlaub starten. Wir bringen Sie sicher zum Flughafen oder Bahnhof für Ihre Reise.',
    image: 'https://images.unsplash.com/photo-1571648393873-29bad2324860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHRyYXZlbCUyMGx1Z2dhZ2V8ZW58MXx8fHwxNzU1ODczMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Großraum-Fahrzeuge für Gruppen',
      'Gepäck-Transport inklusive',
      'Frühzeitige Buchung möglich',
      'Rückfahrt-Service'
    ]
  },
  {
    id: 'kurierdienst',
    title: 'Kurierdienst',
    icon: <Package className="h-8 w-8" />,
    description: 'Schneller und sicherer Transport Ihrer wichtigen Sendungen. Regional und überregional verfügbar.',
    image: 'https://images.unsplash.com/photo-1646920912229-bc0d5d94e68b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VyaWVyJTIwZGVsaXZlcnklMjBzZXJ2aWNlfGVufDF8fHx8MTc1NTg3MzI2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Same-Day Delivery',
      'Wichtige Dokumente',
      'Medikamenten-Transport',
      'Express-Service verfügbar'
    ]
  }
]

export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#222222] mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Von Flughafentransfers bis Krankenfahrten – wir sind Ihr zuverlässiger Partner für alle Transportbedürfnisse
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={`${service.title} Service`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-[#F7C600] p-2 rounded-lg text-[#222222]">
                  {service.icon}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-[#222222]">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 bg-[#F7C600] rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full border-[#F7C600] text-[#F7C600] hover:bg-[#F7C600] hover:text-[#222222] transition-all duration-300"
                >
                  Mehr erfahren
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-[#F7C600]/10 border-[#F7C600]/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl text-[#222222] mb-4">
                Benötigen Sie einen individuellen Service?
              </h3>
              <p className="text-gray-600 mb-6">
                Sprechen Sie uns an! Wir erstellen gerne ein maßgeschneidertes Angebot für Ihre besonderen Anforderungen.
              </p>
              <Button 
                size="lg"
                className="bg-[#F7C600] hover:bg-[#222222] text-[#222222] hover:text-[#F7C600] transition-all duration-300"
              >
                Jetzt Beratung anfordern
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
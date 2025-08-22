import { Card, CardContent } from './ui/card'
import { Clock, Wifi, Shield, Heart } from 'lucide-react'

const benefits = [
  {
    icon: <Clock className="h-8 w-8" />,
    title: '24/7 Service',
    description: 'Rund um die Uhr für Sie da. Auch nachts, an Wochenenden und Feiertagen erreichen Sie uns telefonisch.',
    features: [
      'Keine Wartezeiten',
      'Sofortige Buchung',
      'Notfall-Service'
    ]
  },
  {
    icon: <Wifi className="h-8 w-8" />,
    title: 'Kostenloses WLAN',
    description: 'Bleiben Sie unterwegs verbunden. Alle unsere Fahrzeuge sind mit kostenlosem WLAN ausgestattet.',
    features: [
      'Stabiles Internet',
      'Arbeiten während der Fahrt',
      'Unterhaltung für Kinder'
    ]
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Versichert & zuverlässig',
    description: 'Vollversicherte Fahrzeuge und geprüfte Fahrer sorgen für Ihre Sicherheit und unser Vertrauen.',
    features: [
      'Vollkaskoversicherung',
      'Geprüfte Fahrer',
      'Regelmäßige Wartung'
    ]
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Krankenkassen anerkannt',
    description: 'Offiziell zugelassener Anbieter für Krankenfahrten. Direkte Abrechnung mit Ihrer Krankenkasse möglich.',
    features: [
      'Direkte Abrechnung',
      'Alle Kassen',
      'Unkompliziert'
    ]
  }
]

export default function USPSection() {
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#222222] mb-4">
            Warum Taxi Bad Homburg?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vertrauen, Qualität und Service – das sind die Säulen unseres Erfolgs seit über 15 Jahren
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <div className="bg-[#F7C600] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#222222]">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl text-[#222222] mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {benefit.description}
                </p>

                <ul className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 bg-[#F7C600] rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center bg-white">
            <CardContent className="p-6">
              <div className="text-3xl text-[#F7C600] mb-2">15+</div>
              <p className="text-gray-600">Jahre Erfahrung</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white">
            <CardContent className="p-6">
              <div className="text-3xl text-[#F7C600] mb-2">50.000+</div>
              <p className="text-gray-600">Zufriedene Fahrgäste</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-white">
            <CardContent className="p-6">
              <div className="text-3xl text-[#F7C600] mb-2">24/7</div>
              <p className="text-gray-600">Stunden verfügbar</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Maria Schmidt',
    rating: 5,
    text: 'Absolut zuverlässig! Hatte einen frühen Flug und das Taxi war pünktlich da. Fahrer sehr freundlich und professionell. Gerne wieder!',
    service: 'Flughafentransfer',
    date: '2 Wochen her'
  },
  {
    id: 2,
    name: 'Thomas Weber',
    rating: 5,
    text: 'Nutze den Service regelmäßig für Geschäftsreisen. Immer pünktlich, saubere Fahrzeuge und faire Preise. Das WLAN ist ein echtes Plus.',
    service: 'Hauptbahnhof Transfer',
    date: '1 Monat her'
  },
  {
    id: 3,
    name: 'Petra Müller',
    rating: 5,
    text: 'Krankenfahrten werden hier sehr einfühlsam durchgeführt. Die Abrechnung mit der Krankenkasse klappte problemlos. Sehr zu empfehlen.',
    service: 'Krankenfahrt',
    date: '3 Wochen her'
  },
  {
    id: 4,
    name: 'Klaus Fischer',
    rating: 4,
    text: 'Guter Service und angemessene Preise. Das Fahrzeug war sauber und der Fahrer kannte sich bestens aus. Kleine Verspätung, aber wurde entschuldigt.',
    service: 'Stadtfahrt',
    date: '1 Woche her'
  },
  {
    id: 5,
    name: 'Anna Hoffmann',
    rating: 5,
    text: 'Perfekt für unseren Familienurlaub! Großraumtaxi hatte genug Platz für alle Koffer. Kinder konnten das WLAN nutzen. Top Service!',
    service: 'Pauschalreise',
    date: '2 Monate her'
  }
]

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setIsAutoPlay(false)
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)
  }

  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#222222] mb-4">
            Das sagen unsere Kunden
          </h2>
          
          {/* Average Rating */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-6 w-6 ${
                    star <= Math.floor(parseFloat(averageRating))
                      ? 'text-[#F7C600] fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl text-[#222222]">{averageRating}</span>
            <span className="text-gray-600">von {reviews.length} Bewertungen</span>
          </div>
          
          <p className="text-lg text-gray-600">
            Authentische Bewertungen unserer zufriedenen Fahrgäste
          </p>
        </div>

        {/* Review Slider */}
        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-[#F9F9F9] border-0 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <Quote className="h-12 w-12 text-[#F7C600] mx-auto mb-6" />
                
                {/* Rating Stars */}
                <div className="flex items-center justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= reviews[currentIndex].rating
                          ? 'text-[#F7C600] fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                  "{reviews[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg text-[#222222] mb-1">
                    {reviews[currentIndex].name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {reviews[currentIndex].service} • {reviews[currentIndex].date}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              className="border-[#F7C600] text-[#F7C600] hover:bg-[#F7C600] hover:text-[#222222]"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex items-center space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-[#F7C600] w-6'
                      : 'bg-gray-300'
                  }`}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlay(false)
                  }}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              className="border-[#F7C600] text-[#F7C600] hover:bg-[#F7C600] hover:text-[#222222]"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <Star className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-sm text-gray-600">Google Bewertungen</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <Star className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-sm text-gray-600">Geprüfte Qualität</p>
          </div>
          
          <div className="text-center">
            <div className="bg-[#F7C600]/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <Star className="h-6 w-6 text-[#F7C600]" />
            </div>
            <p className="text-sm text-gray-600">15+ Jahre Erfahrung</p>
          </div>
        </div>
      </div>
    </section>
  )
}
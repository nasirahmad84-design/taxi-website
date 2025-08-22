'use client'

import { useState, useRef, useEffect } from 'react'
import { Input } from './ui/input'
import { MapPin } from 'lucide-react'

interface GoogleMapsAutocompleteProps {
  placeholder?: string
  onPlaceSelect: (place: { description: string; placeId: string }) => void
  value: string
  onChange: (value: string) => void
  className?: string
}

export default function GoogleMapsAutocomplete({ 
  placeholder = "Zielort eingeben...", 
  onPlaceSelect, 
  value, 
  onChange,
  className 
}: GoogleMapsAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const debounceRef = useRef<NodeJS.Timeout>()

  // Mock Google Places API - In production, you would use the real Google Places API
  const mockPlaces = [
    { description: "Frankfurt Flughafen (FRA), Frankfurt am Main", placeId: "ChIJbfZq_mIMvUcRpPJhYk6WkqA" },
    { description: "Frankfurt Hauptbahnhof, Frankfurt am Main", placeId: "ChIJgxfOiKEOvUcRHaP8Yf6MFSI" },
    { description: "Bad Homburg Bahnhof, Bad Homburg v. d. Höhe", placeId: "ChIJExample1" },
    { description: "Düsseldorf Flughafen (DUS), Düsseldorf", placeId: "ChIJExample2" },
    { description: "Köln Hauptbahnhof, Köln", placeId: "ChIJExample3" },
    { description: "Mainz Hauptbahnhof, Mainz", placeId: "ChIJExample4" },
    { description: "Frankfurt Innenstadt, Frankfurt am Main", placeId: "ChIJExample5" },
    { description: "Bad Homburg Kurpark, Bad Homburg v. d. Höhe", placeId: "ChIJExample6" },
    { description: "Taunus Therme, Bad Homburg v. d. Höhe", placeId: "ChIJExample7" },
    { description: "Hochtaunusklinik, Bad Homburg v. d. Höhe", placeId: "ChIJExample8" }
  ]

  const searchPlaces = (query: string) => {
    if (!query || query.length < 2) {
      setSuggestions([])
      return
    }

    setIsLoading(true)
    
    // Simulate API delay
    setTimeout(() => {
      const filtered = mockPlaces.filter(place =>
        place.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
      
      setSuggestions(filtered)
      setIsLoading(false)
      setShowSuggestions(true)
    }, 300)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange(newValue)

    // Clear previous debounce
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    // Debounce search
    debounceRef.current = setTimeout(() => {
      searchPlaces(newValue)
    }, 300)
  }

  const handlePlaceSelect = (place: any) => {
    onChange(place.description)
    onPlaceSelect(place)
    setShowSuggestions(false)
    setSuggestions([])
  }

  const handleFocus = () => {
    if (value && suggestions.length > 0) {
      setShowSuggestions(true)
    }
  }

  const handleBlur = () => {
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => {
      setShowSuggestions(false)
    }, 200)
  }

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [])

  return (
    <div className="relative">
      <div className="relative">
        <Input
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`pl-10 ${className}`}
        />
        <MapPin className="h-4 w-4 text-[#F7C600] absolute left-3 top-1/2 transform -translate-y-1/2" />
        {isLoading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#F7C600]"></div>
          </div>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
          {suggestions.map((place, index) => (
            <button
              key={place.placeId}
              type="button"
              className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
              onClick={() => handlePlaceSelect(place)}
            >
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{place.description}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* No results message */}
      {showSuggestions && value.length >= 2 && suggestions.length === 0 && !isLoading && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          <div className="flex items-center space-x-3 text-gray-500">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Keine Orte gefunden</span>
          </div>
        </div>
      )}
    </div>
  )
}
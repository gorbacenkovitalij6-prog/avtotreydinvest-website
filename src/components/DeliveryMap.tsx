"use client";

import { useState } from "react";
import { MapPin, Truck, Clock, CheckCircle } from "lucide-react";

const countries = [
  {
    name: "Германия",
    flag: "🇩🇪",
    position: { x: 35, y: 40 },
    deliveryTime: "12-14 дней",
    cost: "€800",
    popular: true,
  },
  {
    name: "Польша",
    flag: "🇵🇱",
    position: { x: 45, y: 35 },
    deliveryTime: "10-12 дней",
    cost: "€600",
    popular: true,
  },
  {
    name: "Бельгия",
    flag: "🇧🇪",
    position: { x: 25, y: 38 },
    deliveryTime: "13-15 дней",
    cost: "€900",
    popular: false,
  },
  {
    name: "Нидерланды",
    flag: "🇳🇱",
    position: { x: 28, y: 35 },
    deliveryTime: "13-15 дней",
    cost: "€900",
    popular: false,
  },
];

const destination = {
  name: "Смоленск",
  flag: "🇷🇺",
  position: { x: 75, y: 30 },
};

export function DeliveryMap() {
  const [selectedCountry, setSelectedCountry] = useState(0);

  return (
    <section className="py-32 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 text-foreground">
            География <span className="gradient-text font-normal">доставки</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Работаем с проверенными партнерами по всей Европе
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <div className="luxury-card luxury-card-hover p-8">
            <div className="relative aspect-video bg-gradient-to-br from-muted/20 to-muted/5 rounded-lg overflow-hidden border border-primary/10">
              {/* Map background */}
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Simple Europe map outline */}
                  <path
                    d="M20,30 L30,25 L40,30 L50,28 L60,32 L70,28 L75,35 L80,32 L85,40 L80,50 L75,55 L70,60 L60,58 L50,60 L40,62 L30,60 L25,55 L20,50 Z"
                    fill="currentColor"
                    className="text-primary"
                  />
                </svg>
              </div>

              {/* Country markers */}
              {countries.map((country, index) => (
                <button
                  key={country.name}
                  onClick={() => setSelectedCountry(index)}
                  className={`absolute w-12 h-12 -ml-6 -mt-6 rounded-full border-2 flex items-center justify-center text-2xl transition-all duration-300 hover:scale-125 ${
                    selectedCountry === index
                      ? "border-primary bg-primary/20 shadow-[0_0_20px_rgba(212,175,55,0.5)] scale-110"
                      : "border-primary/30 bg-background/80 hover:border-primary/60"
                  }`}
                  style={{
                    left: `${country.position.x}%`,
                    top: `${country.position.y}%`,
                  }}
                >
                  {country.flag}
                  {country.popular && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
                  )}
                </button>
              ))}

              {/* Destination marker */}
              <div
                className="absolute w-14 h-14 -ml-7 -mt-7 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(212,175,55,0.6)] animate-pulse-glow"
                style={{
                  left: `${destination.position.x}%`,
                  top: `${destination.position.y}%`,
                }}
              >
                {destination.flag}
              </div>

              {/* Animated route line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(43 74% 66% / 0.3)" />
                    <stop offset="50%" stopColor="hsl(43 74% 66% / 0.8)" />
                    <stop offset="100%" stopColor="hsl(43 74% 66% / 0.3)" />
                  </linearGradient>
                </defs>
                <path
                  d={`M ${countries[selectedCountry].position.x} ${countries[selectedCountry].position.y} Q ${(countries[selectedCountry].position.x + destination.position.x) / 2} ${Math.min(countries[selectedCountry].position.y, destination.position.y) - 10} ${destination.position.x} ${destination.position.y}`}
                  stroke="url(#routeGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>

          {/* Country Info Cards */}
          <div className="space-y-4">
            {countries.map((country, index) => (
              <button
                key={country.name}
                onClick={() => setSelectedCountry(index)}
                className={`w-full luxury-card p-6 text-left transition-all duration-300 ${
                  selectedCountry === index
                    ? "border-primary/50 shadow-[0_0_30px_rgba(212,175,55,0.2)] scale-[1.02]"
                    : "luxury-card-hover"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{country.flag}</span>
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-foreground">
                        {country.name}
                      </h3>
                      {country.popular && (
                        <span className="text-xs text-primary font-medium">
                          Популярное направление
                        </span>
                      )}
                    </div>
                  </div>
                  {selectedCountry === index && (
                    <CheckCircle className="w-6 h-6 text-primary" />
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{country.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Truck className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{country.cost}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

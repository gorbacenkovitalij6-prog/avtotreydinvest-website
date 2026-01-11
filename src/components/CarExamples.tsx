"use client";

import { Card } from "@/components/ui/card";
import { MapPin, Calendar, CheckCircle } from "lucide-react";

const examples = [
  {
    model: "Mercedes-Benz GLE 350",
    year: "2020",
    country: "Германия",
    image: "https://i.ibb.co/qFmJx47n/photo-2025-12-18-13-42-32.jpg",
    price: "3 060 000 ₽",
    deliveryTime: "13 дней",
  },
  {
    model: "BMW X1",
    year: "2021",
    country: "Бельгия",
    image: "https://i.ibb.co/wZjLxrML/photo-2025-12-18-13-42-39.jpg",
    price: "2 060 000 ₽",
    deliveryTime: "14 дней",
  },
  {
    model: "Volkswagen Tiguan",
    year: "2020",
    country: "Бельгия",
    image: "https://i.ibb.co/9HbF1FjB/photo-2025-12-18-13-42-45.jpg",
    price: "1 800 000 ₽",
    deliveryTime: "14 дней",
  },
  {
    model: "Mitsubishi Pajero",
    year: "2017",
    country: "Германия",
    image: "https://i.ibb.co/N2qsMfqy/photo-2025-12-18-13-42-49.jpg",
    price: "1 860 000 ₽",
    deliveryTime: "11 дней",
  },
  {
    model: "BMW X1",
    year: "2020",
    country: "Германия",
    image: "https://i.ibb.co/cKtvrtGp/photo-2025-12-16-13-29-11.jpg",
    price: "1 400 000 ₽",
    deliveryTime: "12 дней",
  },
  {
    model: "Volkswagen T-Roc",
    year: "2020",
    country: "Польша",
    image: "https://i.ibb.co/LzTf5gn8/photo-2025-12-16-13-29-25.jpg",
    price: "1 560 000 ₽",
    deliveryTime: "10 дней",
  },
  {
    model: "BMW X3 30i",
    year: "2021",
    country: "Бельгия",
    image: "https://i.ibb.co/DDH7m5Nf/photo-2025-12-16-13-29-58.jpg",
    price: "2 320 000 ₽",
    deliveryTime: "14 дней",
  },
  {
    model: "Volkswagen Touran",
    year: "2017",
    country: "Нидерланды",
    image: "https://i.ibb.co/20N4zmg3/photo-2025-12-16-13-29-42.jpg",
    price: "1 400 000 ₽",
    deliveryTime: "15 дней",
  },
  {
    model: "Mercedes-Benz CLA 200",
    year: "2015",
    country: "Польша",
    image: "https://i.ibb.co/40d0y7X/photo-2025-12-16-13-29-50.jpg",
    price: "1 280 000 ₽",
    deliveryTime: "10 дней",
  },
];

export function CarExamples() {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Наши <span className="gradient-text">работы</span>
          </h2>
          <a
            href="https://t.me/+79016202702"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 neo-card neo-card-hover px-6 py-3 rounded-full group transition-all"
          >
            <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-3.146 6.537-3.146 6.537s-.178.457-.534.457c-.178 0-.356-.089-.534-.268l-2.344-1.983-1.25-.982-2.057-1.518c-.267-.178-.356-.446-.267-.714.089-.268.356-.446.624-.446h.089l9.642-3.572c.267-.089.534 0 .624.268.09.178.09.446-.089.624z"/>
            </svg>
            <span className="text-sm font-semibold group-hover:text-cyan-600 transition-colors text-foreground">
              Связаться в Telegram
            </span>
            <svg className="w-4 h-4 text-cyan-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((car, index) => (
            <Card
              key={`${car.model}-${car.year}-${index}`}
              className="neo-card neo-card-hover overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
                <img
                  src={car.image}
                  alt={car.model}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 neo-card px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-600 shadow-lg">
                  <CheckCircle className="w-3 h-3 inline mr-1" />
                  Доставлен
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-foreground">{car.model}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {car.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {car.country}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-purple-100">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Стоимость</div>
                    <div className="text-xl font-bold text-cyan-600">{car.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground mb-1">Срок</div>
                    <div className="text-lg font-semibold text-orange-500">{car.deliveryTime}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

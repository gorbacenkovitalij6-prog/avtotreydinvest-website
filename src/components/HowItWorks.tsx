"use client";

import { Search, FileText, Truck, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const steps = [
  {
    icon: Search,
    title: "Поиск автомобиля",
    description: "Подбираем автомобиль по вашим критериям из проверенных аукционов Европы",
  },
  {
    icon: FileText,
    title: "Оформление документов",
    description: "Проверяем историю, юридическую чистоту и оформляем все необходимые документы",
  },
  {
    icon: Truck,
    title: "Доставка в РФ",
    description: "Организуем логистику, растаможку и доставку автомобиля до границы России",
  },
  {
    icon: CheckCircle,
    title: "Постановка на учет",
    description: "Помогаем с регистрацией в ГИБДД и передаем вам ключи от автомобиля",
  },
];

export function HowItWorks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = (scrollY - 2000) * 0.2;

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Parallax background effect */}
      <div
        className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 text-foreground">
            Процесс <span className="gradient-text font-normal">работы</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Прозрачный процесс в 4 шага
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Elegant connection line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ top: "4rem" }} />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                <div className="luxury-card luxury-card-hover p-6 text-center h-full flex flex-col">
                  {/* Step number with gold border */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-primary bg-background flex items-center justify-center text-xl font-serif font-light text-primary z-10">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-md border border-primary/30 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-serif font-normal mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Shield, Clock, Wallet, FileCheck, Headphones, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

const advantages = [
  {
    icon: Shield,
    title: "Юридическая чистота",
    description: "Полная проверка истории автомобиля, гарантия отсутствия ограничений",
  },
  {
    icon: Clock,
    title: "Быстрая доставка",
    description: "Средний срок доставки 14 дней от момента покупки до границы РФ",
  },
  {
    icon: Wallet,
    title: "Прозрачные цены",
    description: "Никаких скрытых платежей, фиксируем цену в договоре",
  },
  {
    icon: FileCheck,
    title: "Полное сопровождение",
    description: "Помощь на всех этапах: от поиска до постановки на учет в ГИБДД",
  },
  {
    icon: Headphones,
    title: "24/7 поддержка",
    description: "Всегда на связи, отвечаем на вопросы в любое время",
  },
  {
    icon: Trophy,
    title: "Опыт работы",
    description: "Более 500 успешно доставленных автомобилей с 2022 года",
  },
];

export function Advantages() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = (scrollY - 1000) * 0.3;

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Parallax background effect */}
      <div
        className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 text-foreground">
            Наши <span className="gradient-text font-normal">преимущества</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Высокое качество услуг на каждом этапе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={advantage.title}
                className="luxury-card luxury-card-hover p-8 group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-14 h-14 rounded-md border border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary/60 transition-all">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-normal mb-3 text-foreground">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowRight, Car, Shield, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  const parallaxOffset = scrollY * 0.5;
  const opacityValue = Math.max(0, 1 - scrollY / 600);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 pb-20">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='1920' height='1080' fill='%23000000'/%3E%3C/svg%3E"
        >
          <source src="https://cdn.coverr.co/videos/coverr-luxury-car-on-the-road-5076/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      </div>

      {/* Parallax luxury background accents */}
      <div
        className="absolute inset-0 overflow-hidden opacity-30"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div
        className="container mx-auto relative z-10"
        style={{
          transform: `translateY(${parallaxOffset * 0.3}px)`,
          opacity: opacityValue
        }}
      >
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Premium badge with parallax */}
          <div
            className="inline-flex items-center gap-2 luxury-card px-6 py-3 rounded-full"
            style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-primary font-medium tracking-wide">С 2022 ГОДА</span>
          </div>

          {/* Main heading - Elegant typography with parallax */}
          <div
            className="space-y-6"
            style={{ transform: `translateY(${parallaxOffset * 0.15}px)` }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-light leading-tight text-foreground tracking-tight">
              Премиальный пригон
            </h1>
            <h2 className="text-5xl md:text-7xl font-serif font-extralight">
              <span className="gradient-text font-normal">автомобилей из Европы</span>
            </h2>
          </div>

          {/* Elegant subheading with parallax */}
          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed"
            style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}
          >
            Эксклюзивная доставка автомобилей премиум-класса из Германии, Польши,
            Бельгии и Нидерландов с полным юридическим сопровождением
          </p>

          {/* Stats with luxury design and parallax */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-12"
            style={{ transform: `translateY(${parallaxOffset * 0.05}px)` }}
          >
            <div className="luxury-card luxury-card-hover p-8 gold-border">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-primary/30 flex items-center justify-center">
                <Car className="w-7 h-7 text-primary" />
              </div>
              <div className="text-5xl font-serif font-light text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground font-light tracking-wider uppercase">Доставлено</div>
            </div>

            <div className="luxury-card luxury-card-hover p-8 gold-border">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-primary/30 flex items-center justify-center">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <div className="text-5xl font-serif font-light text-primary mb-2">14</div>
              <div className="text-sm text-muted-foreground font-light tracking-wider uppercase">Дней доставки</div>
            </div>

            <div className="luxury-card luxury-card-hover p-8 gold-border">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-primary/30 flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <div className="text-5xl font-serif font-light text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-light tracking-wider uppercase">Гарантия</div>
            </div>
          </div>

          {/* Premium CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              onClick={scrollToCalculator}
              className="text-base h-12 px-10 tracking-wide font-semibold"
            >
              РАССЧИТАТЬ СТОИМОСТЬ
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-base h-12 px-10 tracking-wide font-semibold"
            >
              КОНСУЛЬТАЦИЯ
            </Button>
          </div>

          {/* Decorative gold line */}
          <div className="flex items-center gap-4 max-w-xs mx-auto pt-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator with parallax */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ opacity: opacityValue }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </div>
    </section>
  );
}

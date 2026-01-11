"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { YandexMap } from "@/components/YandexMap";
import { Loader2, Send, Phone, Mail, MessageSquare, MapPin } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Свяжитесь <span className="gradient-text">с нами</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут
          </p>
        </div>

        {/* Yandex Map Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-cyan-500" />
              <h3 className="text-2xl font-bold text-foreground">Как нас найти</h3>
            </div>
            <a
              href="https://yandex.ru/maps/?text=Смоленск, ул. Фрунзе, 44"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-500 hover:text-cyan-600 transition-colors hidden md:flex items-center gap-1 font-semibold"
            >
              Построить маршрут
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <Card className="neo-card overflow-hidden h-[400px] md:h-[500px]">
            <YandexMap className="w-full h-full" />
          </Card>
          <div className="mt-4 text-center md:hidden">
            <a
              href="https://yandex.ru/maps/?text=Смоленск, ул. Фрунзе, 44"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-500 hover:text-cyan-600 transition-colors inline-flex items-center gap-1 font-semibold"
            >
              Построить маршрут
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <Card className="neo-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1 font-medium">Телефон</div>
                    <a href="tel:+79016202702" className="text-lg font-semibold hover:text-cyan-600 transition-colors text-foreground">
                      +7 901 620-27-02
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1 font-medium">Email</div>
                    <a href="mailto:info@autotrd.ru" className="text-lg font-semibold hover:text-orange-500 transition-colors text-foreground">
                      info@autotrd.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1 font-medium">Telegram</div>
                    <a href="https://t.me/+79016202702" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-cyan-600 transition-colors text-foreground">
                      +7 901 620-27-02
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="neo-card p-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">Часы работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Пн - Пт:</span>
                  <span className="font-semibold text-foreground">09:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Сб - Вс:</span>
                  <span className="font-semibold text-foreground">10:00 - 18:00</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Form */}
          <Card className="neo-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="font-semibold text-foreground">Ваше имя</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="font-semibold text-foreground">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (900) 123-45-67"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="font-semibold text-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@mail.com"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="font-semibold text-foreground">Сообщение</Label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите, какой автомобиль вас интересует..."
                  className="w-full min-h-32 rounded-md border border-input bg-muted/50 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground"
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 rounded-xl bg-cyan-50 border-2 border-cyan-200 text-cyan-700 text-sm font-medium">
                  Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200 text-red-700 text-sm font-medium">
                  Произошла ошибка. Попробуйте позже или свяжитесь с нами по телефону.
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-primary h-12 text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Отправить заявку
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

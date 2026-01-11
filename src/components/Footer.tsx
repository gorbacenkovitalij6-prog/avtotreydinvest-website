"use client";

import { Car, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 px-4 border-t border-primary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md border border-primary/30 flex items-center justify-center">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-light tracking-wider gradient-text">АВТОТРЕЙДИНВЕСТ</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              Премиальный пригон автомобилей из Европы с 2022 года
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-normal mb-6 text-foreground text-sm tracking-wider uppercase">Услуги</h3>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li>
                <a href="#calculator" className="hover:text-primary transition-colors">
                  Калькулятор стоимости
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Подбор автомобиля
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Доставка из Европы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Таможенное оформление
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-normal mb-6 text-foreground text-sm tracking-wider uppercase">Информация</h3>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Отзывы клиентов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-normal mb-6 text-foreground text-sm tracking-wider uppercase">Контакты</h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="tel:+79016202702" className="hover:text-primary transition-colors">
                  +7 901 620-27-02
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:info@autotrd.ru" className="hover:text-primary transition-colors">
                  info@autotrd.ru
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>г. Смоленск, ул. Фрунзе, д. 44, ком. 105</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-light">
            <div>© {currentYear} ООО "Автотрейдинвест"</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Пользовательское соглашение
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Building2, Award, Users, Target, CheckCircle, Calendar, MapPin, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 luxury-card px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">О компании</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-light mb-6">
                ООО <span className="gradient-text font-normal">"Автотрейдинвест"</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Профессиональная компания по торговле легковыми и грузовыми автомобилями
                с пригоном из Европы. Мы делаем процесс покупки авто прозрачным и комфортным.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <Card className="luxury-card p-6 text-center">
                <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-light text-primary mb-2">2022</div>
                <div className="text-sm text-muted-foreground">Год основания</div>
              </Card>
              <Card className="luxury-card p-6 text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-light text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </Card>
              <Card className="luxury-card p-6 text-center">
                <TrendingUp className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-light text-primary mb-2">14 дней</div>
                <div className="text-sm text-muted-foreground">Средний срок доставки</div>
              </Card>
              <Card className="luxury-card p-6 text-center">
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-light text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Юридическая чистота</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="luxury-card p-8 md:p-12">
              <h2 className="text-3xl font-light mb-8 text-center">Юридическая информация</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Полное наименование</div>
                  <div className="font-normal">ООО "Автотрейдинвест"</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">ОГРН</div>
                  <div className="font-normal">1226700020271</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Дата регистрации</div>
                  <div className="font-normal">20 октября 2022 года</div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Юридический адрес
                  </div>
                  <div className="font-normal">
                    214006, Смоленская область, г. Смоленск, ул. Фрунзе, д. 44, ком. 105
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-sm text-muted-foreground mb-1">Основной вид деятельности</div>
                  <div className="font-normal">
                    Торговля легковыми автомобилями и легкими автотранспортными средствами (ОКВЭД 45.31)
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

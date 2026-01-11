"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Loader2, Send } from "lucide-react";

export function CostCalculator() {
  const [carPrice, setCarPrice] = useState("");
  const [country, setCountry] = useState("");
  const [engineVolume, setEngineVolume] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const calculateCosts = () => {
    const price = Number.parseFloat(carPrice) || 0;
    const volume = Number.parseFloat(engineVolume) || 0;

    // Базовые расчеты (примерные)
    const deliveryCost = country === "germany" ? 800 : country === "poland" ? 600 : country === "belgium" ? 900 : country === "netherlands" ? 900 : 0;
    const customsDuty = price * 0.54; // 54% таможенная пошлина
    const recyclingFee = volume <= 1 ? 3400 : volume <= 2 ? 5200 : volume <= 3 ? 11000 : 150000;
    const registration = 15000;

    return {
      delivery: deliveryCost,
      customs: customsDuty,
      recycling: recyclingFee,
      registration: registration,
      total: price + deliveryCost + customsDuty + recyclingFee + registration,
    };
  };

  const handleCalculate = () => {
    if (!carPrice || !country || !engineVolume) {
      return;
    }

    setIsCalculating(true);
    setShowResults(false);

    // Имитация расчета 2-3 секунды
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
    }, 2500);
  };

  const costs = calculateCosts();
  const canCalculate = carPrice && country && engineVolume;

  return (
    <section id="calculator" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 neo-card px-5 py-2 rounded-full mb-6">
            <Calculator className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-600 font-semibold">Калькулятор</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Рассчитайте <span className="gradient-text">стоимость</span> пригона
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Узнайте примерную стоимость доставки вашего автомобиля
          </p>
        </div>

        <Card className="neo-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input form */}
            <div className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="car-price" className="text-base font-semibold text-foreground">Стоимость автомобиля (EUR)</Label>
                <Input
                  id="car-price"
                  type="number"
                  placeholder="Например: 25000"
                  value={carPrice}
                  onChange={(e) => setCarPrice(e.target.value)}
                  className="h-12 text-lg"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="country" className="text-base font-semibold text-foreground">Страна покупки</Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger id="country" className="h-12 rounded-xl border-2 border-purple-100 shadow-[inset_2px_2px_4px_rgba(163,163,163,0.1)]">
                    <SelectValue placeholder="Выберите страну" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="germany">Германия</SelectItem>
                    <SelectItem value="poland">Польша</SelectItem>
                    <SelectItem value="belgium">Бельгия</SelectItem>
                    <SelectItem value="netherlands">Нидерланды</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="engine" className="text-base font-semibold text-foreground">Объем двигателя (л)</Label>
                <Input
                  id="engine"
                  type="number"
                  step="0.1"
                  placeholder="Например: 2.0"
                  value={engineVolume}
                  onChange={(e) => setEngineVolume(e.target.value)}
                  className="h-12 text-lg"
                />
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              {!showResults && !isCalculating && (
                <div className="neo-inset p-8 rounded-2xl text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">Готовы рассчитать?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Заполните все поля и нажмите кнопку "Рассчитать стоимость"
                  </p>
                  <Button
                    onClick={handleCalculate}
                    disabled={!canCalculate}
                    className="w-full gradient-primary h-12 text-base"
                  >
                    Рассчитать стоимость
                  </Button>
                </div>
              )}

              {isCalculating && (
                <div className="neo-card p-8 rounded-2xl text-center border-2 border-purple-200">
                  <Loader2 className="w-12 h-12 text-purple-600 mx-auto mb-4 animate-spin" />
                  <h3 className="text-lg font-bold mb-2 text-purple-600">Производим расчет...</h3>
                  <p className="text-sm text-muted-foreground">
                    Анализируем данные и рассчитываем оптимальную стоимость
                  </p>
                </div>
              )}

              {showResults && (
                <div className="space-y-4">
                  <div className="neo-card p-6 rounded-2xl relative border-2 border-purple-200">
                    <h3 className="text-lg font-bold mb-4 text-purple-600">Расчет готов!</h3>

                    {/* Blurred results */}
                    <div className="space-y-3 relative">
                      <div className="absolute inset-0 backdrop-blur-md z-10 rounded-lg flex items-center justify-center bg-white/50">
                        <div className="text-center p-6">
                          <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 shadow-xl">
                            <Send className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-xl font-bold mb-2 text-foreground">Результаты готовы!</h4>
                          <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                            Для получения детального расчета свяжитесь с нами в Telegram
                          </p>
                          <a
                            href="https://t.me/+79016202702"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="gradient-primary">
                              <Send className="w-4 h-4 mr-2" />
                              Написать в Telegram
                            </Button>
                          </a>
                        </div>
                      </div>

                      {/* Actual blurred data */}
                      <div className="blur-sm select-none pointer-events-none opacity-50">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Стоимость авто:</span>
                          <span className="font-medium">€{Number.parseFloat(carPrice).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Доставка:</span>
                          <span className="font-medium">€{costs.delivery.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Таможня:</span>
                          <span className="font-medium">€{Math.round(costs.customs).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Утилизационный сбор:</span>
                          <span className="font-medium">₽{costs.recycling.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Оформление:</span>
                          <span className="font-medium">₽{costs.registration.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                        </div>
                        <div className="h-px bg-purple-200 my-4" />
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold">Итого:</span>
                          <span className="text-2xl font-bold gradient-text">
                            ~€{Math.round(costs.total).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => {
                      setShowResults(false);
                      setCarPrice("");
                      setCountry("");
                      setEngineVolume("");
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    Сделать новый расчет
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

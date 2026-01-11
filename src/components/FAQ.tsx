"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Сколько времени занимает доставка автомобиля?",
    answer: "Средний срок доставки составляет 14 дней с момента покупки автомобиля до границы РФ. Это включает оформление документов, логистику и таможенную очистку. Точный срок зависит от страны покупки и сложности оформления.",
  },
  {
    question: "Какие документы я получу после доставки?",
    answer: "Вы получите полный пакет документов: договор купли-продажи, таможенную декларацию, ПТС, сертификат соответствия ЭПТС, акт приема-передачи. Все документы легальные и позволяют беспрепятственно поставить автомобиль на учет в ГИБДД.",
  },
  {
    question: "Можно ли выбрать конкретный автомобиль?",
    answer: "Да, конечно! Мы работаем с крупнейшими европейскими аукционами и площадками. Вы можете прислать нам ссылку на понравившийся автомобиль, или мы подберем варианты по вашим критериям: марка, модель, год, бюджет, комплектация.",
  },
  {
    question: "Какие гарантии вы предоставляете?",
    answer: "Мы гарантируем юридическую чистоту автомобиля, отсутствие скрытых повреждений и соответствие описанию. Перед покупкой проводим детальную проверку истории авто. Все условия фиксируются в договоре, цена не меняется после подписания.",
  },
  {
    question: "Сколько стоят ваши услуги?",
    answer: "Стоимость зависит от страны покупки, стоимости автомобиля и объема двигателя. В среднем: доставка €600-900, таможенные пошлины около 54% от стоимости авто, утилизационный сбор от 3400₽. Используйте калькулятор на сайте для точного расчета.",
  },
  {
    question: "Помогаете ли вы с постановкой на учет в ГИБДД?",
    answer: "Да, мы предоставляем полное сопровождение вплоть до получения номеров. Помогаем собрать документы, записаться в ГИБДД, при необходимости можем представлять ваши интересы по доверенности.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 px-4 relative" id="faq">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 neo-card px-5 py-2 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-600 font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Частые <span className="gradient-text">вопросы</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ответы на популярные вопросы о пригоне автомобилей
          </p>
        </div>

        <div className="neo-card p-8 rounded-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="neo-inset rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-lg font-bold hover:text-purple-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

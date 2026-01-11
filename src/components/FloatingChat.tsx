"use client";

import { useState } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTelegramClick = () => {
    window.open("https://t.me/+79016202702", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/78452000000", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+78452000000";
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 glass rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Свяжитесь с нами</h3>
                    <p className="text-xs text-white/80">Мы онлайн!</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <button
                onClick={handleTelegramClick}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-white">Telegram</div>
                  <div className="text-xs text-muted-foreground">Напишите нам в мессенджер</div>
                </div>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-white">WhatsApp</div>
                  <div className="text-xs text-muted-foreground">Чат в WhatsApp</div>
                </div>
              </button>

              <button
                onClick={handlePhoneClick}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-white">Позвонить</div>
                  <div className="text-xs text-muted-foreground">+7 (845) 200-00-00</div>
                </div>
              </button>

              <div className="pt-2 border-t border-white/10">
                <p className="text-xs text-muted-foreground text-center">
                  Пн-Пт: 09:00 - 20:00 <br />
                  Сб-Вс: 10:00 - 18:00
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Main Chat Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6 text-white" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </>
          )}
        </button>
      </div>
    </>
  );
}

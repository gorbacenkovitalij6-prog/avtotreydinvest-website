"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ymaps: any;
  }
}

interface YandexMapProps {
  className?: string;
}

export function YandexMap({ className = "" }: YandexMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    // Проверяем, загружена ли библиотека Yandex Maps
    if (!window.ymaps) {
      const script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU";
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      window.ymaps.ready(() => {
        if (!mapRef.current || mapInstance.current) return;

        // Координаты офиса: Смоленск, ул. Фрунзе, 44
        const coordinates = [54.7918, 32.0456];

        // Создаем карту
        const map = new window.ymaps.Map(mapRef.current, {
          center: coordinates,
          zoom: 15,
          controls: ["zoomControl", "fullscreenControl"],
        });

        // Создаем метку
        const placemark = new window.ymaps.Placemark(
          coordinates,
          {
            balloonContentHeader: '<div style="font-weight: bold; font-size: 16px;">ООО "Автотрейдинвест"</div>',
            balloonContentBody:
              '<div style="margin-top: 8px;">' +
              '<p style="margin: 4px 0;"><b>Адрес:</b> г. Смоленск, ул. Фрунзе, д. 44, ком. 105</p>' +
              '<p style="margin: 4px 0;"><b>Телефон:</b> <a href="tel:+79016202702">+7 901 620-27-02</a></p>' +
              '<p style="margin: 8px 0 4px;"><b>Часы работы:</b></p>' +
              '<p style="margin: 2px 0;">Пн-Пт: 09:00 - 20:00</p>' +
              '<p style="margin: 2px 0;">Сб-Вс: 10:00 - 18:00</p>' +
              "</div>",
            balloonContentFooter:
              '<div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #e0e0e0;">' +
              '<a href="https://yandex.ru/maps/?text=Смоленск, ул. Фрунзе, 44" target="_blank" style="color: #eab308; text-decoration: none;">Построить маршрут →</a>' +
              "</div>",
            hintContent: "ООО Автотрейдинвест - Пригон автомобилей из Европы",
          },
          {
            preset: "islands#yellowAutoIcon",
            iconColor: "#eab308",
          }
        );

        map.geoObjects.add(placemark);

        // Настраиваем поведение карты
        map.behaviors.disable("scrollZoom");

        mapInstance.current = map;
      });
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

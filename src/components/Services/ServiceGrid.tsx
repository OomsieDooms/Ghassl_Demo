"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { CheckCircle2 } from "lucide-react";

export default function ServiceGrid() {
  const { language } = useLanguage();
  const services = [
    { id: "exterior", ar: { title: "غسيل خارجي فقط", desc: "اختر هذه الخدمة لتنظيف الجسم الخارجي لسيارتك. تلميع الإطارات ومسح الزجاج خارجيًا.", price: "29", currency: "ريال", cta: "احجز غسلتك" }, en: { title: "Exterior Only", desc: "Choose this for exterior cleaning only. Includes tire shine and window wipe.", price: "29", currency: "SR", cta: "Book Wash" }, popular: false },
    { id: "full", ar: { title: "غسيل كامل", desc: "لتنظيف الجسم الخارجي والداخلي واستخدام منتجات مخصصة للسيارات الفاخرة.", price: "49", currency: "ريال", cta: "احجز غسلتك" }, en: { title: "Full Wash", desc: "Interior and exterior wash using premium customized car care products.", price: "49", currency: "SR", cta: "Book Wash" }, popular: true },
    { id: "premium", ar: { title: "الغسلة الفاخرة", desc: "إذا كانت سيارتك متسخة جداً من الخارج والداخل. تلميع وتشميع وحماية.", price: "69", currency: "ريال", cta: "احجز غسلتك" }, en: { title: "Premium Wash", desc: "For very dirty cars inside and out. Deep clean, wax, and protection.", price: "69", currency: "SR", cta: "Book Wash" }, popular: false },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {language === "ar" ? "خدماتنا المتميزة" : "Our Premium Services"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === "ar" ? "اختر الباقة التي تناسب سيارتك واستمتع بنظافة تدوم" : "Choose the package that suits your car and enjoy a lasting shine."}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const content = language === "ar" ? service.ar : service.en;
            return (
              <div key={service.id} className={`relative rounded-3xl p-8 bg-white dark:bg-gray-800 shadow-xl border ${service.popular ? "border-blue-500 shadow-blue-500/10 scale-105 z-10" : "border-gray-100 dark:border-gray-700"} transition-transform duration-300 hover:-translate-y-2`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 outline outline-4 outline-gray-50 dark:outline-gray-900 text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm whitespace-nowrap">
                    {language === "ar" ? "الأكثر طلباً" : "Most Popular"}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{content.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 h-16">{content.desc}</p>
                </div>
                <div className="mb-8 flex items-end gap-2 text-gray-900 dark:text-white">
                  <span className="text-5xl font-black">{content.price}</span>
                  <span className="text-xl font-bold text-gray-400 pb-1">{content.currency}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[1, 2, 3].map((_, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                      <span>{language === "ar" ? "ميزة احترافية" : "Professional feature"}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-colors ${service.popular ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30" : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"}`}>
                  {content.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

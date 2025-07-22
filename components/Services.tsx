"use client";
import React from "react";
import { Code, ShoppingCart, User } from "lucide-react"; // Mengubah ikon agar lebih sesuai
import { useLang } from "@/context/LangContext";

const services = [
  {
    title: {
      id: "Web Landing Page",
      en: "Web Landing Page",
    },
    description: {
      id: "Membuat halaman landas (landing page) yang menarik dan dioptimalkan untuk konversi, cocok untuk marketing dan pengenalan produk.",
      en: "Creating engaging and conversion-optimized landing pages, ideal for marketing and product promotion.",
    },
    icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: {
      id: "Web E-Commerce",
      en: "Web E-Commerce",
    },
    description: {
      id: "Membangun toko online lengkap dengan manajemen produk, keranjang belanja, dan integrasi pembayaran untuk bisnis Anda.",
      en: "Building a complete online store with product management, shopping cart, and payment integration for your business.",
    },
    icon: (
      <ShoppingCart className="w-8 h-8 text-green-600 dark:text-green-400" />
    ),
  },
  {
    title: {
      id: "Web Portfolio",
      en: "Web Portfolio",
    },
    description: {
      id: "Merancang dan mengembangkan website portfolio yang profesional dan elegan untuk menampilkan karya dan keahlian Anda.",
      en: "Designing and developing a professional and elegant portfolio website to showcase your work and expertise.",
    },
    icon: <User className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
  },
];

const Services = () => {
  const { lang } = useLang();
  return (
    <section
      id="services"
      className="py-20 pt-32 min-h-screen bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-blue-500 dark:text-blue-400 text-lg font-semibold mb-2">
            {lang === "id" ? "Layanan" : "Services"}
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
            {lang === "id" ? "Layanan yang Saya Tawarkan" : "Services I Offer"}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto">
            {lang === "id"
              ? "Berikut beberapa layanan yang saya tawarkan dalam bidang pengembangan web, mulai dari landing page, toko online, hingga website portfolio."
              : "Here are some of the web development services I offer, including landing pages, online stores, and portfolio websites."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title[lang]}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

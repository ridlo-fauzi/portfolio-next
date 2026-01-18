"use client";
import { useLang } from "@/context/LangContext";
import { useEffect, useState } from "react";

export default function Contact() {
  const { lang } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // jangan render sebelum client siap
  return (
    <div
      id="contact"
      className="relative flex flex-col md:flex-row justify-between items-center overflow-hidden"
    >
      {/* Kiri - Contact Form */}
      <div className="w-full md:w-1/2 p-6 py-28 pb-48 md:pb-0 md:min-h-screen  items-center flex justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <form className="flex flex-col gap-4 max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {lang === "id" ? "Hubungi Kami" : "Contact Us"}
          </h2>
          <input
            type="text"
            placeholder={lang === "id" ? "Nama" : "Name"}
            className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
          />
          <textarea
            placeholder={lang === "id" ? "Pesan" : "Message"}
            className="w-full p-2 border rounded h-32 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
          >
            {lang === "id" ? "Kirim" : "Send"}
          </button>
        </form>
      </div>

      {/* SVG Pembatas */}
      <div className="absolute inset-0 pointer-events-none md:dark:bg-gray-900 md:-z-10 md:-rotate-90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-[350px] md:bottom-0 md:-translate-y-1/4 z-10"
        >
          <path
            className="fill-blue-500 dark:fill-blue-900  transition-colors duration-300"
            fill="#0099ff"
            fillOpacity="1"
            d="M0,224L17.1,197.3C34.3,171,69,117,103,96C137.1,75,171,85,206,85.3C240,85,274,75,309,101.3C342.9,128,377,192,411,213.3C445.7,235,480,213,514,192C548.6,171,583,149,617,160C651.4,171,686,213,720,202.7C754.3,192,789,128,823,133.3C857.1,139,891,213,926,213.3C960,213,994,139,1029,122.7C1062.9,107,1097,149,1131,181.3C1165.7,213,1200,235,1234,218.7C1268.6,203,1303,149,1337,149.3C1371.4,149,1406,203,1423,229.3L1440,256L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Kanan - Contact Info */}
      <div className="bg-blue-500 dark:bg-blue-900 w-full md:w-1/3 py-28 p-6 md:min-h-screen text-white items-center flex justify-center transition-colors duration-300">
        <div className="space-y-2 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">
            {lang === "id" ? "Info Kontak" : "Contact Information"}
          </h2>
          <p>
            <strong>Email:</strong> info@example.com
          </p>
          <p>
            <strong>{lang === "id" ? "Telepon" : "Phone"}:</strong> +62
            812-3456-7890
          </p>
          <p>
            <strong>{lang === "id" ? "Alamat" : "Address"}:</strong> Jl. Merdeka
            No.123, Surakarta
          </p>
        </div>
      </div>
    </div>
  );
}

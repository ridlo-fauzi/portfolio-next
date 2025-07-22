"use client";

import { useLang } from "@/context/LangContext";

export default function ContactPage() {
  const { lang } = useLang();
  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center overflow-hidden">
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
            d="M0,160L26.7,144C53.3,128,107,96,160,85.3C213.3,75,267,85,320,112C373.3,139,427,181,480,170.7C533.3,160,587,96,640,101.3C693.3,107,747,181,800,218.7C853.3,256,907,256,960,229.3C1013.3,203,1067,149,1120,133.3C1173.3,117,1227,139,1280,138.7C1333.3,139,1387,117,1413,106.7L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
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

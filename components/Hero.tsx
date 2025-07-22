"use client";
import { useLang } from "@/context/LangContext";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const { lang } = useLang();

  return (
    <div className="min-h-screen mt-10 py-16 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-between px-6 md:mt-0 md:flex-row md:px-16">
      {/* Kiri */}
      <div className="w-full mb-10 md:w-2/3  md:mb-0">
        <h1 className="text-2xl md:text-6xl dark:text-white font-bold mb-2">
          {lang === "id" ? "Halo, saya" : "Hello, I'm"}
        </h1>
        <h2 className="text-2xl md:text-6xl font-semibold text-blue-600 dark:text-blue-500 mb-4">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Ridlo Fauzi Rakhmadianto")
                .pauseFor(3000)
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
              delay: 85,
            }}
          />
        </h2>
        <p className="text-gray-700 dark:text-white text-lg">
          {lang === "id"
            ? "Saya adalah seorang Web Developer yang fokus pada teknologi web modern dan pengembangan UI/UX. Saya antusias menciptakan pengalaman web yang luar biasa dengan membangun aplikasi yang efisien, skalabel, serta solusi digital yang fungsional dan berorientasi pada kebutuhan pengguna."
            : "I am a university student currently learning modern web development and UI/UX design. I’m passionate about creating responsive interfaces and improving user experiences, while building efficient, scalable, and functional web applications."}
        </p>
        {/* ...lanjutkan seperti biasa */}
      </div>

      {/* Kanan */}
      <div className="w-full md:w-1/3 mt-10 flex justify-center">
        <div className="w-[300px] h-[450px] overflow-hidden shadow-xl rounded-2xl hover:scale-105 transition-transform duration-300 border border-gray-300 dark:border-gray-700">
          <Image
            src="/image/1748789495828.jpg"
            alt="Ridlo Fauzi Rakhmadianto"
            width={300}
            height={450}
            className="object-cover object-bottom w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

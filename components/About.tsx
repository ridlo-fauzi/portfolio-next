"use client";
import Image from "next/image";
import React from "react";
import { useLang } from "@/context/LangContext";

const About = () => {
  const { lang } = useLang();
  return (
    <section
      id="about"
      className="min-h-screen py-10 flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800  px-6"
    >
      <div className="max-w-6xl my-10 w-full flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Gambar Kiri */}
        <div className="w-full flex justify-center md:w-1/3 mt-10 ">
          <div className="w-[300px] h-[400px] md:w-[300px] md:h-[450px] overflow-hidden shadow-xl rounded-2xl hover:scale-105 transition-transform duration-300 border border-gray-300 dark:border-gray-700">
            <Image
              src="/image/1748789602466.jpg"
              alt="Ridlo Fauzi Rakhmadianto"
              width={300}
              height={450}
              className="object-cover object-bottom w-full h-full"
            />
          </div>
        </div>

        {/* Teks Kanan */}
        <div className="px-4 my-4 md:my-10 w-full md:w-2/3 space-y-6 text-gray-700 dark:text-white  leading-relaxed">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white  text-center md:text-left">
            {lang === "id" ? "Tentang Saya" : "About Me"}
          </h1>
          <div className="flex flex-col space-y-5 text-center md:text-left text-base">
            <p>
              {lang === "id"
                ? "Ketertarikan saya pada pemrograman dimulai saat SMK, ketika mencoba membuat halaman web dengan HTML dan CSS. Sejak itu, saya tertarik mempelajari cara kerja aplikasi."
                : "I became interested in programming in vocational school after trying to build a simple web page with HTML and CSS. Since then, I've been curious about how applications work."}
            </p>
            <p>
              {lang === "id"
                ? "Saat kuliah, saya fokus pada pengembangan web dan mobile. Saya menggunakan teknologi seperti JavaScript, React, PHP, Flutter, dan Laravel, dengan minat pada solusi teknologi untuk masalah nyata."
                : "In college, I focused on web and mobile development using technologies like JavaScript, React, PHP, Flutter, and Laravel. I'm especially interested in how tech solves real-world problems."}
            </p>
            <p>
              {lang === "id"
                ? "Bagi saya, pemrograman adalah cara untuk menyelesaikan masalah. Saya masih terus belajar dan mencoba hal baru di dunia teknologi."
                : "For me, programming is a way to solve problems. I'm still learning and trying new things in tech."}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl my-10 w-full flex flex-col gap-10 md:gap-20">
        {/* Judul Utama */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white  text-center">
          {lang === "id" ? "Pendidikan Saya" : "My Education"}
        </h1>

        {/* SMK */}
        <div className="flex flex-col mt-10 md:flex-row items-center gap-10">
          <div className="w-full md:w-2/3  text-gray-700 dark:text-white text-base leading-relaxed">
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white text-center md:text-left">
              {lang === "id"
                ? "SMK Negeri 2 Karanganyar"
                : "Vocational High School 2 Karanganyar"}
            </h2>
            <p className="p-4 italic">
              {lang === "id"
                ? "Rekayasa Perangkat Lunak"
                : "Software Engineering"}
              <br />
              2019 - 2022
            </p>
            {/* Pengalaman SMK */}
            <div className="px-4 pb-4">
              <p className="text-justify text-base md:text-lg">
                {lang === "id"
                  ? "Di SMK Negeri 2 Karanganyar, saya mulai mengenal dunia IT dan mempelajari berbagai bahasa pemrograman, khususnya pemrograman web. Selama belajar, saya mengembangkan beberapa aplikasi sederhana menggunakan framework seperti CodeIgniter dan Laravel."
                  : "At SMK Negeri 2 Karanganyar, I began exploring the world of IT and learned various programming languages, especially web development. During my studies, I developed several simple applications using frameworks such as CodeIgniter and Laravel."}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center md:w-1/3">
            <div className="w-[350px] h-[262px] md:w-[400px] md:h-[300px] overflow-hidden shadow-xl rounded-2xl hover:scale-105 transition-transform duration-300 border border-gray-300 dark:border-gray-700">
              <Image
                src="/image/17487898176758.jpg"
                alt="Foto SMK"
                width={1080}
                height={802}
                className="object-cover object-bottom w-full h-full"
              />
            </div>
          </div>
        </div>
        {/* Kampus */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:px-4 w-full md:w-2/3 text-gray-700 dark:text-white text-base leading-relaxed">
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white text-center md:text-left">
              {lang === "id"
                ? "Universitas Duta Bangsa Surakarta"
                : "Duta Bangsa University Of Surakarta"}
            </h2>
            <p className="p-4 italic">
              {lang === "id"
                ? "S1 Teknik Informatika"
                : "Bachelor of Computer Science"}
              S1 Teknik Informatika
              <br />
              2022 - {lang === "id" ? "Sekarang" : "Now"}
            </p>
            {/* Pengalaman Kampus */}
            <div className="px-4 pb-4">
              <p className="text-justify text-base md:text-lg">
                {lang === "id"
                  ? "Selama kuliah di Universitas Duta Bangsa Surakarta, saya mengambil program studi Teknik Informatika dan mempelajari pemrograman web, Python, mobile, IoT, dan sistem cerdas. Saya juga mengembangkan beberapa game edukasi sederhana sebagai bagian dari proyek pembelajaran."
                  : "During my studies at Universitas Duta Bangsa Surakarta, I majored in Informatics Engineering and learned about web programming, Python, mobile development, IoT, and intelligent systems. I also developed a few simple educational games as part of class projects."}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center md:w-1/3">
            <div className="w-[350px] h-[262px] md:w-[400px] md:h-[300px] overflow-hidden shadow-xl rounded-2xl hover:scale-105 transition-transform duration-300 border border-gray-300 dark:border-gray-700">
              <Image
                src="/image/1748789878765.jpg"
                alt="Foto Kampus"
                width={1080}
                height={802}
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

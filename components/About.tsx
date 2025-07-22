"use client";
import Image from "next/image";
import React from "react";
import { useLang } from "@/context/LangContext";

const About = () => {
  const { lang } = useLang();
  return (
    <section className="min-h-screen py-10 flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800  px-6">
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
                ? "Ketertarikan saya pada pemrograman dimulai sejak SMK. Awalnya hanya iseng mencoba membuat halaman web sederhana dengan HTML dan CSS, lalu jadi tertarik pada cara kerja aplikasi secara keseluruhan."
                : "My interest in programming began during my time in vocational high school (SMK). It started with a simple curiosity when I tried creating a basic web page using HTML and CSS. Since then, I've been fascinated by how applications work — from the user interface to the functionality behind the scenes."}
            </p>
            <p>
              {lang === "id"
                ? "Saat kuliah, saya mendalami pemrograman web dan mobile. Saya mengenal berbagai teknologi seperti JavaScript, React, PHP, Flutter, dan Laravel. Saya tidak hanya membangun aplikasi, tetapi juga tertarik bagaimana teknologi menyelesaikan masalah nyata."
                : "During college, I deepened my knowledge of programming, especially in web and mobile development. I became familiar with various technologies such as JavaScript, React, PHP, Flutter, and Laravel. My passion goes beyond just building apps — I'm driven by how technology can be used to solve real-world problems."}
            </p>
            <p>
              {lang === "id"
                ? "Bagi saya, pemrograman bukan sekadar menulis kode, tapi menciptakan solusi yang bermakna. Dengan semangat belajar yang tinggi, saya terus mengasah kemampuan dan menghadapi tantangan baru di dunia teknologi."
                : "I believe programming is not just about writing code, but about creating meaningful solutions. With a strong willingness to learn, I continue to sharpen my skills and embrace new challenges in the tech world."}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl my-10 w-full flex flex-col gap-10 md:gap-20">
        {/* Judul Utama */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white  text-center">
          {lang === "id" ? "Pendidikan Saya" : "My Education"}
        </h1>
        {/* Kampus */}
        <div className="flex flex-col md:flex-row items-center t gap-10">
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
                  ? "Selama kuliah di Universitas Duta Bangsa Surakarta, saya mendalami Teknik Informatika dan memperluas pengetahuan di bidang pemrograman web, Python, mobile, IoT, dan sistem cerdas. Saya juga mengembangkan beberapa game edukasi sederhana sebagai bagian dari proyek pembelajaran."
                  : "During my studies at Universitas Duta Bangsa Surakarta, I deepened my knowledge in Informatics Engineering and expanded my skills in web programming, Python, mobile development, IoT, and intelligent systems. I also developed several simple educational games as part of learning projects."}
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
      </div>
    </section>
  );
};

export default About;

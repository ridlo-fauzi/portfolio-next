"use client";
import { useLang } from "@/context/LangContext";
import Image from "next/image";
import React from "react";

const projects = [
  {
    title: { id: "Aplikasi Travel Laravel", en: "Laravel Travel App" },
    description: {
      id: "Aplikasi web untuk booking perjalanan wisata, menggunakan Laravel dan Bootstrap",
      en: "A web application for booking tours, built with Laravel and Bootstrap",
    },
    tech: ["Laravel", "Bootstrap", "MySQL"],
    image: "/image/proyek/pariwisata.png",
    link: "#",
  },
  {
    title: { id: "Cafe Bisa Ngopi", en: "Cafe Cashier App" },
    description: {
      id: "Aplikasi kasir berbasis web untuk cafe",
      en: "A web-based cashier application for cafes",
    },
    tech: ["Codeigniter", "Bootstrap"],
    image: "/image/proyek/cafe.png",
    link: "#",
  },
  {
    title: { id: "Web Film", en: "Movie Info Website" },
    description: {
      id: "Web untuk menampilkan informasi film yang disukai oleh pengguna.",
      en: "Website to display movies liked by users.",
    },
    tech: ["ReactJS", "Bootstrap"],
    image: "/image/proyek/film.png",
    link: "#",
  },
  {
    title: { id: "Toko Online", en: "Online Shop App" },
    description: {
      id: "Aplikasi web untuk menjual produk online, menggunakan Laravel dan Bootstrap",
      en: "A web application for selling products online, built with Laravel and Bootstrap",
    },
    tech: ["Laravel", "Bootstrap"],
    image: "/image/proyek/toko.png",
    link: "#",
  },
  {
    title: { id: "Aplikasi Perpustakaan", en: "Library Management App" },
    description: {
      id: "Aplikasi web untuk memanajemen perpustakaan, menggunakan Laravel dan Bootstrap",
      en: "Web application for managing a library, built with Laravel and Bootstrap",
    },
    tech: ["Laravel", "Bootstrap"],
    image: "/image/proyek/perpustakaan.png",
    link: "#",
  },
  {
    title: { id: "Aplikasi Pencarian Film", en: "Movie Search App" },
    description: {
      id: "Aplikasi web untuk mencari film, menggunakan Laravel dan Bootstrap dan API TMDB",
      en: "Web application to search for movies using Laravel, Bootstrap, and the TMDB API",
    },
    tech: ["Laravel", "Bootstrap", "Rest API"],
    image: "/image/proyek/filmlaravel.png",
    link: "#",
  },
];

const Projects = () => {
  const { lang } = useLang();
  return (
    <section
      id="projects"
      className="pt-36 pb-16 bg-slate-100 dark:bg-gray-800 "
    >
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h4 className="font-semibold text-lg text-blue-500 mb-2">
            Portfolio
          </h4>
          <h2 className="font-bold text-gray-800 dark:text-white text-3xl mb-4 sm:text-4xl lg:text-5xl ">
            {lang === "id" ? "Project Terbaru" : "New Projects"}
          </h2>
          <p className="font-medium text-md text-gray-600 dark:text-slate-200 md:text-lg ">
            {lang === "id"
              ? "Proyek pilihan yang mencerminkan ketertarikan saya di bidang pengembangan UI/UX dan web modern."
              : "Selected projects that reflect my interest in UI/UX development and modern web technologies."}
          </p>
        </div>

        <div className="flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md bg-red-400 shadow-md overflow-hidden">
                <div className="w-full h-40 md:h-60 relative">
                  <Image
                    src={project.image}
                    alt={project.title[lang]}
                    layout="fill"
                    objectFit="cover"
                    className="object-top"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 dark:text-white mt-5 mb-3 ">
                {project.title[lang]}
              </h3>
              <p className="font-medium text-base text-gray-600 dark:text-slate-200 mb-2">
                {project.description[lang]}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-700 dark:bg-indigo-500 dark:text-indigo-100  text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-sm text-indigo-500 dark:text-indigo-300 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === "id" ? "Lihat Project" : "View Project"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

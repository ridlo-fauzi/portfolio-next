"use client";
import Image from "next/image";
import React from "react";
import styles from "../components/Skills.module.css";
import { useLang } from "@/context/LangContext";

const Skills = () => {
  const { lang } = useLang();
  return (
    <section
      id="skills"
      className="min-h-screen pt-24 bg-gray-100 dark:bg-gray-800  px-6 flex flex-col items-center"
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-5 text-gray-900 dark:text-white   ">
        {lang === "id" ? "Keahlian Saya" : "My Skills"}
      </h1>
      <section className="flex flex-col items-center">
        <div className={styles.container}>
          <div className={styles.gallery_left}>
            {[
              {
                name: "HTML",
                src: "/image/skills/html.svg",
                monochrome: false,
              },
              { name: "CSS", src: "/image/skills/css.svg", monochrome: false },
              { name: "JS", src: "/image/skills/js.svg", monochrome: false },
              {
                name: "PostgreSQL",
                src: "/image/skills/postgree.svg",
                monochrome: false,
              },
              {
                name: "MySQL",
                src: "/image/skills/mysql.svg",
                monochrome: false,
              },
              { name: "PHP", src: "/image/skills/php.svg", monochrome: true },
              {
                name: "HTML",
                src: "/image/skills/html.svg",
                monochrome: false,
              },
              { name: "CSS", src: "/image/skills/css.svg", monochrome: false },
              { name: "JS", src: "/image/skills/js.svg", monochrome: false },
              {
                name: "PostgreSQL",
                src: "/image/skills/postgree.svg",
                monochrome: false,
              },
              {
                name: "MySQL",
                src: "/image/skills/mysql.svg",
                monochrome: false,
              },
              { name: "PHP", src: "/image/skills/php.svg", monochrome: true },
            ]
              // Duplikasi supaya scroll bisa terus berjalan
              .concat([
                {
                  name: "HTML",
                  src: "/image/skills/html.svg",
                  monochrome: false,
                },
                {
                  name: "CSS",
                  src: "/image/skills/css.svg",
                  monochrome: false,
                },
                { name: "JS", src: "/image/skills/js.svg", monochrome: false },
                {
                  name: "PostgreSQL",
                  src: "/image/skills/postgree.svg",
                  monochrome: false,
                },
                {
                  name: "MySQL",
                  src: "/image/skills/mysql.svg",
                  monochrome: false,
                },
                { name: "PHP", src: "/image/skills/php.svg", monochrome: true },
                {
                  name: "HTML",
                  src: "/image/skills/html.svg",
                  monochrome: true,
                },
                {
                  name: "CSS",
                  src: "/image/skills/css.svg",
                  monochrome: false,
                },
                { name: "JS", src: "/image/skills/js.svg", monochrome: false },
                {
                  name: "PostgreSQL",
                  src: "/image/skills/postgree.svg",
                  monochrome: false,
                },
                {
                  name: "MySQL",
                  src: "/image/skills/mysql.svg",
                  monochrome: false,
                },
                {
                  name: "PHP",
                  src: "/image/skills/php.svg",
                  monochrome: true,
                },
              ])
              .map((skill, index) => (
                <div
                  key={index}
                  className="hover:ring-1 
    ring-offset-2 
    ring-offset-slate-100 dark:ring-offset-slate-900 
    ring-slate-300 dark:ring-slate-600 
    hover:!border-slate-300 dark:hover:!border-slate-500 
    text-sm sm:text-lg inline-flex items-center justify-center gap-2 
    m-1 sm:m-2 
    border border-slate-300 dark:border-slate-600 
    bg-white dark:bg-gray-700
    text-gray-800 dark:text-gray-100 
    rounded-lg px-4 py-2 transition-all duration-300"
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={16}
                    height={16}
                    className={`w-[1em] h-[1em] ${
                      skill.monochrome ? "dark:invert" : ""
                    }`}
                  />

                  {skill.name}
                </div>
              ))}
          </div>
          <div className={styles.gallery_right}>
            {[
              {
                name: "Codeigniter",
                src: "/image/skills/codeigniter.svg",
                monochrome: false,
              },
              {
                name: "Laravel",
                src: "/image/skills/laravel.svg",
                monochrome: false,
              },
              {
                name: "Express.js",
                src: "/image/skills/express.svg",
                monochrome: true,
              },
              {
                name: "Node.js",
                src: "/image/skills/nodejs.svg",
                monochrome: false,
              },
              {
                name: "Next.js",
                src: "/image/skills/next.svg",
                monochrome: true,
              },
              {
                name: "React.js",
                src: "/image/skills/react.svg",
                monochrome: false,
              },
            ]
              // Duplikasi supaya scroll bisa terus berjalan
              .concat([
                {
                  name: "Codeigniter",
                  src: "/image/skills/codeigniter.svg",
                  monochrome: false,
                },
                {
                  name: "Laravel",
                  src: "/image/skills/laravel.svg",
                  monochrome: false,
                },
                {
                  name: "Express.js",
                  src: "/image/skills/express.svg",
                  monochrome: true,
                },
                {
                  name: "Node.js",
                  src: "/image/skills/nodejs.svg",
                  monochrome: false,
                },
                {
                  name: "Next.js",
                  src: "/image/skills/next.svg",
                  monochrome: true,
                },
                {
                  name: "React.js",
                  src: "/image/skills/react.svg",
                  monochrome: false,
                },
              ])
              .map((skill, index) => (
                <div
                  key={index}
                  className="hover:ring-1 
    ring-offset-2 
    ring-offset-slate-100 dark:ring-offset-slate-900 
    ring-slate-300 dark:ring-slate-600 
    hover:!border-slate-300 dark:hover:!border-slate-500 
    text-sm sm:text-lg inline-flex items-center justify-center gap-2 
    m-1 sm:m-2 
    border border-slate-300 dark:border-slate-600 
    bg-white dark:bg-gray-700
    text-gray-800 dark:text-gray-100 
    rounded-lg px-4 py-2 transition-all duration-300"
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={16}
                    height={16}
                    className={`w-[1em] h-[1em] ${
                      skill.monochrome ? "dark:invert" : ""
                    }`}
                  />
                  {skill.name}
                </div>
              ))}
          </div>
          <div className={styles.gallery_left}>
            {[
              {
                name: "Bootstrap",
                src: "/image/skills/bootstrap.svg",
                monochrome: false,
              },
              {
                name: "Tailwind",
                src: "/image/skills/tailwind.svg",
                monochrome: false,
              },
              {
                name: "jQuery",
                src: "/image/skills/jquery.svg",
                monochrome: true,
              },
              {
                name: "Canva",
                src: "/image/skills/canva.svg",
                monochrome: false,
              },
              {
                name: "Figma",
                src: "/image/skills/figma.svg",
                monochrome: false,
              },
              {
                name: "Bootstrap",
                src: "/image/skills/bootstrap.svg",
                monochrome: false,
              },
              {
                name: "Tailwind",
                src: "/image/skills/tailwind.svg",
                monochrome: false,
              },
              {
                name: "jQuery",
                src: "/image/skills/jquery.svg",
                monochrome: true,
              },
              {
                name: "Canva",
                src: "/image/skills/canva.svg",
                monochrome: false,
              },
              {
                name: "Figma",
                src: "/image/skills/figma.svg",
                monochrome: false,
              },
            ]
              // Duplikasi supaya scroll bisa terus berjalan
              .concat([
                {
                  name: "Bootstrap",
                  src: "/image/skills/bootstrap.svg",
                  monochrome: false,
                },
                {
                  name: "Tailwind",
                  src: "/image/skills/tailwind.svg",
                  monochrome: false,
                },
                {
                  name: "jQuery",
                  src: "/image/skills/jquery.svg",
                  monochrome: true,
                },
                {
                  name: "Canva",
                  src: "/image/skills/canva.svg",
                  monochrome: false,
                },
                {
                  name: "Figma",
                  src: "/image/skills/figma.svg",
                  monochrome: false,
                },
                {
                  name: "Bootstrap",
                  src: "/image/skills/bootstrap.svg",
                  monochrome: false,
                },
                {
                  name: "Tailwind",
                  src: "/image/skills/tailwind.svg",
                  monochrome: false,
                },
                {
                  name: "jQuery",
                  src: "/image/skills/jquery.svg",
                  monochrome: true,
                },
                {
                  name: "Canva",
                  src: "/image/skills/canva.svg",
                  monochrome: false,
                },
                {
                  name: "Figma",
                  src: "/image/skills/figma.svg",
                  monochrome: false,
                },
              ])
              .map((skill, index) => (
                <div
                  key={index}
                  className="hover:ring-1 
    ring-offset-2 
    ring-offset-slate-100 dark:ring-offset-slate-900 
    ring-slate-300 dark:ring-slate-600 
    hover:!border-slate-300 dark:hover:!border-slate-500 
    text-sm sm:text-lg inline-flex items-center justify-center gap-2 
    m-1 sm:m-2 
    border border-slate-300 dark:border-slate-600 
    bg-white dark:bg-gray-700
    text-gray-800 dark:text-gray-100 
    rounded-lg px-4 py-2 transition-all duration-300"
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={16}
                    height={16}
                    className={`w-[1em] h-[1em] ${
                      skill.monochrome ? "dark:invert" : ""
                    }`}
                  />
                  {skill.name}
                </div>
              ))}
          </div>
          <div className={styles.gallery_right}>
            {[
              {
                name: "VS Code",
                src: "/image/skills/vscode.svg",
                monochrome: false,
              },
              {
                name: "Gitlab",
                src: "/image/skills/gitlab.svg",
                monochrome: false,
              },
              {
                name: "Vercel",
                src: "/image/skills/vercel.svg",
                monochrome: true,
              },
              {
                name: "ChatGPT",
                src: "/image/skills/chatgpt.svg",
                monochrome: true,
              },
              {
                name: "Postman",
                src: "/image/skills/postman.svg",
                monochrome: false,
              },
              {
                name: "Github",
                src: "/image/skills/github.svg",
                monochrome: true,
              },
              { name: "Git", src: "/image/skills/git.svg", monochrome: false },
            ]
              // Duplikasi supaya scroll bisa terus berjalan
              .concat([
                {
                  name: "VS Code",
                  src: "/image/skills/vscode.svg",
                  monochrome: false,
                },
                {
                  name: "Gitlab",
                  src: "/image/skills/gitlab.svg",
                  monochrome: false,
                },
                {
                  name: "Vercel",
                  src: "/image/skills/vercel.svg",
                  monochrome: true,
                },
                {
                  name: "ChatGPT",
                  src: "/image/skills/chatgpt.svg",
                  monochrome: true,
                },
                {
                  name: "Postman",
                  src: "/image/skills/postman.svg",
                  monochrome: false,
                },
                {
                  name: "Github",
                  src: "/image/skills/github.svg",
                  monochrome: true,
                },
                {
                  name: "Git",
                  src: "/image/skills/git.svg",
                  monochrome: false,
                },
              ])
              .map((skill, index) => (
                <div
                  key={index}
                  className="hover:ring-1 
    ring-offset-2 
    ring-offset-slate-100 dark:ring-offset-slate-900 
    ring-slate-300 dark:ring-slate-600 
    hover:!border-slate-300 dark:hover:!border-slate-500 
    text-sm sm:text-lg inline-flex items-center justify-center gap-2 
    m-1 sm:m-2 
    border border-slate-300 dark:border-slate-600 
    bg-white dark:bg-gray-700
    text-gray-800 dark:text-gray-100 
    rounded-lg px-4 py-2 transition-all duration-300"
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={16}
                    height={16}
                    className={`w-[1em] h-[1em] ${
                      skill.monochrome ? "dark:invert" : ""
                    }`}
                  />
                  {skill.name}
                </div>
              ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;

"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/context/LangContext";
// import { translations, Lang } from "../utils/i18n";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { lang, t, toggleLang } = useLang();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 dark:text-white  shadow fixed top-0 w-full z-50">
      {/* Hamburger Menu */}
      <button
        onClick={toggleMenu}
        className="hamburger md:hidden flex flex-col justify-between w-8 h-6 cursor-pointer z-50"
      >
        <span
          className={`block h-1 bg-black dark:bg-white  rounded transition-all duration-300 transform ${
            isOpen ? "rotate-45 translate-x-[-1px] translate-y-3" : ""
          }`}
        ></span>
        <span
          className={`block h-1 bg-black dark:bg-white rounded transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 bg-black dark:bg-white rounded transition-all duration-300 transform ${
            isOpen ? "-rotate-45 translate-x-[-1px] translate-y-[-8.5px]" : ""
          }`}
        ></span>
      </button>
      {/* Mobile Menu  */}
      <div
        className={`md:hidden text-center absolute top-0 left-0 w-full p-8 bg-white dark:bg-gray-900   z-10 
                    transform transition-all duration-500 ease-in-out
                    ${
                      isOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-8 pointer-events-none"
                    }`}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="block mx-20 py-2 text-gray-700 dark:text-white  hover:text-blue-500 transition-colors duration-300"
        >
          {t.welcome}
        </Link>
        <Link
          href="/about"
          onClick={() => setIsOpen(false)}
          className="block mx-20 py-2 text-gray-700 dark:text-white  hover:text-blue-500 transition-colors duration-300"
        >
          {t.about}
        </Link>
        <Link
          href="/skills"
          onClick={() => setIsOpen(false)}
          className="block mx-20 py-2 text-gray-700 dark:text-white  hover:text-blue-500 transition-colors duration-300"
        >
          {t.skills}
        </Link>
        <Link
          href="/projects"
          onClick={() => setIsOpen(false)}
          className="block mx-20 py-2 text-gray-700 dark:text-white  hover:text-blue-500 transition-colors duration-300"
        >
          {t.projects}
        </Link>
        <Link
          href="/services"
          onClick={() => setIsOpen(false)}
          className="block mx-20 py-2 text-gray-700 dark:text-white  hover:text-blue-500 transition-colors duration-300"
        >
          {t.services}
        </Link>
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="block mx-20 py-2 text-gray-700 dark:text-white  hover:text-blue-500 transition-colors duration-300"
        >
          {t.contact}
        </Link>
      </div>
      {/* Desktop Menu */}
      <div className="font-bold text-lg ">RFR Portfolio</div>
      <div className="space-x-10 hidden md:flex">
        <Link href="/">{t.welcome}</Link>
        <Link href="/about">{t.about}</Link>
        <Link href="/skills">{t.skills}</Link>
        <Link href="/projects">{t.projects}</Link>
        <Link href="/services">{t.services}</Link>
        <Link href="/contact">{t.contact}</Link>
      </div>
      <div className="flex gap-2">
        <button onClick={toggleDarkMode}>{darkMode ? "🌙" : "☀️"}</button>
        <button onClick={toggleLang}>{lang === "en" ? "EN" : "ID"}</button>
      </div>
    </nav>
  );
}

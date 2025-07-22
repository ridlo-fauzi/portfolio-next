export const translations = {
  en: {
    welcome: "Welcome",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    services: "Services",
    contact: "Contact",
  },
  id: {
    welcome: "Selamat Datang",
    about: "Tentang",
    skills: "Keahlian",
    projects: "Proyek",
    services: "Layanan",
    contact: "Kontak",
  },
} as const;

export type Lang = keyof typeof translations;

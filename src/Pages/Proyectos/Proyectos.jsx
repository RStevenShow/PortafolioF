"use client";

import React from "react";
import { ExternalLink, Github, Presentation, Download } from "lucide-react";
import { Marquee } from "../../Components/ui/marquee";
import { FlickeringGrid } from "@/Components/ui/flickering-grid";
import { cn } from "@/lib/utils";

/* =======================
   STACK TECNOLÓGICO
======================= */
const techStack = [
  { name: "Python", logo: "/Logos/Python.png" },
  { name: "C#", logo: "/Logos/csharp.png" },
  { name: "JavaScript", logo: "/Logos/JavaScript.png" },
  { name: "React", logo: "/Logos/react.png" },
  { name: "NextJS", logo: "/Logos/nextjs.png" },
  { name: "Django", logo: "/Logos/django.svg" },
  { name: "FastAPI", logo: "/Logos/fastapi.svg" },
  { name: "MySQL", logo: "/Logos/mysql.png" },
  { name: "PostgreSQL", logo: "/Logos/postgre.png" },
  { name: "SQL Server", logo: "/Logos/SqlServer.jpg" },
  { name: "Firebase", logo: "/Logos/firebase.png" },
  { name: "Figma", logo: "/Logos/Figma.png" },
  { name: "GitHub", logo: "/Logos/github.png" },
  { name: "HTML", logo: "/Logos/html.png" },
  { name: "CSS", logo: "/Logos/css.png" },
  { name: "Java", logo: "/Logos/java.png" },
  { name: "Kotlin", logo: "/Logos/Kotlin.png" },
];

/* =======================
   PROYECTOS
======================= */
const proyectos = [
  {
    titulo: "Chatbot Psicológico - HealthAI",
    categoria: "Inteligencia Artificial",
    rol: "Programador Full Stack - Ganador Feria STEM 2025",
    desc: "Proyecto galardonado como el mejor en ciencia y tecnología en la Feria STEM 2025. Integra IA avanzada para brindar soporte y orientación psicológica automatizada.",
    tecnologias: ["IA", "Firebase", "Vite-React", "TailwindCSS", "Javascript"],
    fecha: "Sept 2025",
    linkGithub: "https://github.com/RStevenShow/Health-AI.git",
    linkDemo: "https://health-ai-psi-roan.vercel.app/",
    imagen: "/Proyectos/Health-AI.png",
  },
  {
    titulo: "Landing Page Con React",
    categoria: "Frontend Development",
    rol: "Programador",
    desc: "Creación de una Landing Page totalmente responsive con React, implementando buenas prácticas de desarrollo web y optimización.",
    tecnologias: ["Vite-React", "Javascript"],
    fecha: "Sept 2025",
    linkGithub: "https://github.com/RStevenShow/landing-react",
    linkDemo: "https://landing-react-topaz.vercel.app/",
    imagen: "/Proyectos/2.png",
  },
  {
    titulo: "Sistema de Reclutamiento con IA",
    categoria: "Inteligencia Artificial",
    rol: "Programador Full Stack",
    desc: "Sistema avanzado que utiliza modelos de Embedding, redes neuronales y NLP para filtrar candidatos de forma inteligente. Implementa la metodología CommonKADS.",
    tecnologias: ["Python", "NLP", "FastAPI", "PostgreSQL", "Transfer Learning"],
    linkGithub: "https://github.com/RStevenShow/Sistema-de-Reclutamiento-Personal-Con-IA/tree/main",
    linkDescarga: "https://drive.google.com/file/d/1Lb9RSSL08ctxl4qhKT5uP4OHPSBwRkai/view",
    imagen: "/Proyectos/HR.png",
  },
  {
    titulo: "Hackathon Nicaragua EntornOs 2024",
    categoria: "Competencia Tecnológica",
    rol: "Programador Full Stack",
    desc: "Participación destacada en el evento tecnológico más grande del país. Desarrollo de 'Assistrack', aplicación móvil diseñada para optimizar el registro de personal.",
    tecnologias: ["Kotlin", "MySQL", "UI/UX", "Figma"],
    fecha: "2024",
    imagen: "/Proyectos/ht.png",
  },
  {
    titulo: "Olimpiadas Universitarias de Ingeniería",
    categoria: "Investigación e Ingeniería",
    rol: "Expositor del Proyecto Health-AI",
    desc: "Participante en la primera edición de las olimpiadas universitarias. Demostración técnica del funcionamiento del sistema ante audiencia académica.",
    tecnologias: ["IA", "NLP", "Análisis de Datos", "Salud Digital"],
    fecha: "Dic 2025",
    imagen: "/Proyectos/1.jpg",
  },
  {
    titulo: "Mantenimiento de Equipos Tecnológicos",
    categoria: "Soporte e Infraestructura",
    rol: "Soporte Técnico",
    desc: "Ejecución de mantenimiento preventivo y correctivo en laboratorios de la UNICIT. Labores de limpieza física e instalación de sistemas operativos.",
    tecnologias: ["Hardware", "Sistemas Operativos", "Software", "Optimización"],
    fecha: "Julio 2024",
    imagen: "/Proyectos/hrd.png",
  },
];

/* =======================
   CARD DE PROYECTO
======================= */
const ProyectoCard = ({
  titulo,
  categoria,
  rol,
  desc,
  tecnologias,
  linkGithub,
  linkDemo,
  linkDescarga,
  imagen,
}) => (
  <div className="group relative bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500 shadow-2xl flex flex-col min-h-[550px] z-20">
    {/* IMAGEN */}
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
      />
      <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2 pr-4">
        <span className="bg-white/10 border border-white/20 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase">
          {categoria}
        </span>
        {rol && (
          <span className="bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[9px] font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1">
            <Presentation size={10} /> {rol}
          </span>
        )}
      </div>
    </div>

    {/* CONTENIDO */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-white font-bold text-xl mb-3 uppercase group-hover:text-blue-400 transition-colors">
        {titulo}
      </h3>
      <p className="text-gray-400 text-sm mb-6 line-clamp-4">
        {desc}
      </p>

      {/* TECNOLOGÍAS */}
      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
        {tecnologias.map((tech) => (
          <span
            key={tech}
            className="text-[10px] bg-white/5 border border-white/10 text-gray-300 px-2 py-1 rounded-md uppercase font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* BOTONES UNIFICADOS */}
      <div className="pt-4 border-t border-white/5">
        <div className="flex gap-3">
          {linkGithub && (
            <a
              href={linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-bold border border-white/5 uppercase transition-all"
            >
              <Github size={14} /> GitHub
            </a>
          )}

          {(linkDemo || linkDescarga) && (
            <a
              href={linkDemo || linkDescarga}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white text-black hover:bg-gray-200 rounded-xl text-xs font-bold uppercase transition-all"
            >
              <ExternalLink size={14} />
              {linkDemo ? "Demo" : "Descargar"}
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

/* =======================
   PAGE
======================= */
const Proyectos = () => {
  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20 overflow-hidden">

      {/* FONDO */}
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#ffffff"
        maxOpacity={0.2}
        flickerChance={0.1}
        height={2000}
        width={2000}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-4 uppercase tracking-tighter">
            Proyectos Académicos
          </h1>
          <p className="text-gray-300 md:text-xl max-w-2xl">
            Ingeniería de Sistemas. Desarrollos destacados en IA, Base de datos, Web y Soporte IT.
          </p>
        </header>

        {/* STACK */}
        <div className="mb-24">
          <Marquee pauseOnHover className="[--duration:40s]">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-5 mx-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
                <span className="text-white font-black text-2xl hidden md:block uppercase">
                  {tech.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proy, i) => (
            <ProyectoCard key={i} {...proy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;

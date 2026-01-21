"use client";

import React from 'react';
import { ExternalLink, Github, Presentation, Code2, Download } from 'lucide-react';
import { Ripple } from "../../Components/ui/ripple"; 
import { Marquee } from "../../Components/ui/marquee"; 
import { cn } from '@/lib/utils';

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

const proyectos = [
  {
    titulo: "Chatbot Psicológico - HealthAI",
    categoria: "Inteligencia Artificial",
    rol: "Programador Full Stack-Ganador Feria STEM 2025 en UNICIT",
    desc: "Proyecto galardonado como el mejor en ciencia y tecnología en la Feria STEM 2025. Integra IA avanzada para brindar soporte y orientación psicológica automatizada, mejorando la accesibilidad a la salud mental digital.",
    tecnologias: ["IA", "Firebase", "Vite-React", "TailwindCSS", "Javascript"],
    fecha: "Sept 2025",
    linkGithub: "https://github.com/RStevenShow/Health-AI.git",
    linkDemo: "https://health-ai-psi-roan.vercel.app/",
    imagen: "/Proyectos/Health-AI.png"
  },
  {
    titulo: "Landing Page Con React",
    categoria: "Frontend Development",
    rol: "Programador",
    desc: "Creación de una Landing Page totalmente responsive con React, implementando buenas prácticas de desarrollo web y optimización como parte de prácticas profesionales.",
    tecnologias: ["Vite-React", "Javascript"],
    fecha: "Sept 2025",
    linkGithub: "https://github.com/RStevenShow/landing-react",
    linkDemo: "https://landing-react-topaz.vercel.app/",
    imagen: "/Proyectos/2.png"
  },
  {
    titulo: "Sistema de Reclutamiento con IA",
    categoria: "Inteligencia Artificial",
    rol: "Programador Full Stack",
    desc: "Sistema avanzado que utiliza modelos de Embedding, redes neuronales y NLP para filtrar candidatos de forma inteligente. Implementa la metodología CommonKADS y transferencia de aprendizaje.",
    tecnologias: ["Python", "NLP", "FastAPI", "PostgreSQL", "Transfer Learning"],
    linkGithub: "https://github.com/RStevenShow/Sistema-de-Reclutamiento-Personal-Con-IA/tree/main",
    LinkDescarga: "https://drive.google.com/file/d/1Lb9RSSL08ctxl4qhKT5uP4OHPSBwRkai/view?usp=sharing",
    imagen: "/Proyectos/HR.png"
  },
  {
    titulo: "Hackathon Nicaragua EntornOs 2024",
    categoria: "Competencia Tecnológica",
    rol: "Programador Full Stack",
    desc: "Participación destacada en el evento tecnológico más grande del país. Desarrollo de 'Assistrack', una aplicación móvil de asistencia digital diseñada para optimizar el registro y seguimiento de personal.",
    tecnologias: ["Kotlin", "MySQL", "UI/UX", "Figma"],
    fecha: "2024",
    imagen: "/Proyectos/ht.png"
  },
  {
    titulo: "Olimpiadas Universitarias de Ingeniería",
    categoria: "Investigación e Ingeniería",
    rol: "Expositor del Proyecto Health-AI",
    desc: "Participante en la primera edición de las olimpiadas universitarias. Realicé la demostración técnica del funcionamiento del sistema ante audiencia académica y evaluadores expertos.",
    tecnologias: ["IA", "NLP", "Análisis de Datos", "Salud Digital"],
    fecha: "Dic 2025",
    imagen: "/Proyectos/1.jpg",
  },
  {
    titulo: "Mantenimiento de Equipos Tecnológicos",
    categoria: "Soporte e Infraestructura",
    rol: "Soporte Técnico",
    desc: "Ejecución de mantenimiento preventivo y correctivo en laboratorios de la UNICIT. Labores de limpieza física, actualización de software e instalación de sistemas operativos.",
    tecnologias: ["Hardware", "Sistemas Operativos", "Software", "Optimización"],
    fecha: "Julio 2024",
    tipo: "tecnico",
    imagen: "/Proyectos/hrd.png"
  }
];

const ProyectoCard = ({ titulo, categoria, rol, desc, tecnologias, linkGithub, linkDemo, LinkDescarga, imagen, fecha }) => (
  <div className="group relative bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500 shadow-2xl flex flex-col h-full min-h-[550px] z-20">
    <div className="relative h-48 shrink-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-10" />
      <img src={imagen} alt={titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80" />
      <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2 pr-4">
        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase">{categoria}</span>
        {rol && (
          <span className="bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-300 text-[9px] font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1"><Presentation size={10} /> {rol}</span>
        )}
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow text-pretty">
      <h3 className="text-white font-bold text-xl mb-3 tracking-tight group-hover:text-blue-400 transition-colors uppercase">{titulo}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
        {tecnologias.map((tech) => (
          <span key={tech} className="text-[10px] bg-white/5 border border-white/5 text-gray-300 px-2 py-1 rounded-md uppercase font-semibold">{tech}</span>
        ))}
      </div>
      <div className="space-y-3 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          {linkGithub && <a href={linkGithub} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-bold transition-all border border-white/5 uppercase"><Github size={14} /> GitHub</a>}
          {linkDemo && <a href={linkDemo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white text-black hover:bg-gray-200 rounded-xl text-xs font-bold transition-all uppercase"><ExternalLink size={14} /> Demo</a>}
        </div>
        {LinkDescarga && <a href={LinkDescarga} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 rounded-xl text-xs font-bold transition-all uppercase"><Download size={14} /> Descargar Proyecto</a>}
      </div>
    </div>
  </div>
);

const Proyectos = () => {
  return (
    /* AJUSTE DE DEGRADADO RÁPIDO: via-10% y to-30% obliga al gris a aparecer casi de inmediato */
    <div className="relative min-h-screen bg-gradient-to-b from-black from-0% via-[#121212] via-10% to-[#1a1a1a] to-30% pt-32 pb-20 overflow-hidden">
      <Ripple mainCircleSize={200} numCircles={10} mainCircleOpacity={0.15} className="opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-24">
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter uppercase">Proyectos Académicos</h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Explora mis desarrollos y participaciones destacadas en eventos tecnológicos, donde aplico soluciones de Desarrollo web, Base de Datos, Inteligencia artificial y Soporte IT.
          </p>
        </header>

        {/* SECCIÓN DE STACK TECNOLÓGICO */}
        <div className="relative z-20 w-full mb-20 bg-transparent">
          <h2 className="text-center text-white text-xl font-bold uppercase tracking-[0.4em] mb-12">Tecnologías y Herramientas</h2>
          <Marquee pauseOnHover className="[--duration:40s]">
            {techStack.map((tech, i) => (
              <div key={i} className="flex items-center gap-5 mx-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img src={tech.logo} alt={tech.name} className="w-10 h-10 md:w-14 md:h-14 object-contain" />
                <span className="text-white font-black text-2xl hidden md:block">{tech.name}</span>
              </div>
            ))}
          </Marquee>
          {/* Difuminados laterales transparentes */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-transparent to-transparent"></div>
        </div>

        {/* Grid de Proyectos */}
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
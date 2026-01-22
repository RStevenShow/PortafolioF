"use client";

import React from "react";
import { Marquee } from "../../Components/ui/marquee";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { AnimatedGridPattern } from "@/Components/ui/animated-grid-pattern";

const misCursos = [
  { 
    nombre: "DESARROLLO DE PROYECTOS TECNOLÓGICOS CON MARCOS DE TRABAJO AGILES", 
    logo: "/Logos/1.png", 
    desc: "Certificación de 50h en gestión de proyectos con metodologías ágiles. Enfoque en entrega de valor iterativa y colaboración eficiente.",
    pdf: "/Cursos/marcos de trabajo.pdf" 
  },
  { 
    nombre: "DESARROLLO DE SOLUCION TECNOLOGICA HACKATHON ENTORNOS 2024", 
    logo: "/Proyectos/ht.png", 
    desc: "Certificación de Participacion en Hackathon Entornos 2024. Desarrollo colaborativo de soluciones innovadoras bajo presión.",
    pdf: "/Cursos/Certificado Hckt.png" 
  },
  { 
    nombre: "DISEÑO DE BASE DE DATOS", 
    logo: "/Logos/sql.png", 
    desc: "Competencias en diseño conceptual, lógico y físico. Modelado de datos y gestión integral bajo buenas prácticas.",
    pdf: "/Cursos/Diseno base de datos.pdf"
  },
  { 
    nombre: "CURSO EN BASES DE DATOS CON MYSQL WORKBENCH", 
    logo: "/Logos/mysql.png", 
    desc: "Creación y administración de DB relacionales. Implementación de integridad referencial y automatización de procesos.",
    pdf: "/Cursos/Base de datos con mysql.pdf"
  },
  { 
    nombre: "BACHILLER EN CIENCIAS Y LETRAS", 
    logo: "/Logos/grad.png", 
    desc: "Colegio Bautista Las Brisas, Managua. Graduado con honores académicos y excelencia educativa.",
    pdf: "/Cursos/bachiller.pdf"
  },
];

const CursoCard = ({ nombre, logo, desc, pdf }) => (
  <div className="w-96 h-[420px] bg-[#111]/90 backdrop-blur-md border border-white/10 p-7 rounded-3xl hover:border-white/30 hover:scale-[1.02] transition-all flex flex-col justify-between group z-20 mx-4 shadow-2xl">
    <div>
      <div className="flex items-start gap-4 mb-5">
        <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 shrink-0">
          <img src={logo} alt={nombre} className="w-9 h-9 object-contain" />
        </div>
        <h3 className="text-white font-bold text-lg leading-tight tracking-tight uppercase">
          {nombre}
        </h3>
      </div>
      <p className="text-gray-200 text-base leading-relaxed mb-6 line-clamp-6">
        {desc}
      </p>
    </div>

    <a 
      href={pdf}
      download
      className="flex items-center justify-center gap-2 w-full py-3.5 bg-white text-black hover:bg-gray-200 border border-white/10 rounded-xl text-sm font-bold transition-all duration-300"
    >
      <Download size={18} />
      DESCARGAR CERTIFICADO
    </a>
  </div>
);

const Cursos = () => {
  return (
    /* AJUSTE DE DEGRADADO: Más claro (gris grafito) para que la rejilla resalte */
    <div className="relative min-h-screen bg-gradient-to-b from-[#050505] via-[#121212] to-[#1a1a1a] pt-32 pb-20 overflow-hidden">

      {/* FONDO GRID ANIMADO REFORZADO */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <AnimatedGridPattern
          numSquares={80}   // Más cuadros para mayor actividad
          maxOpacity={0.6}  // Opacidad alta para visibilidad máxima
          duration={2.5}
          repeatDelay={0.5}
          className={cn(
            "h-[160%] w-full skew-y-12 opacity-100",
            "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]" // Radio de máscara masivo
          )}
        />
      </div>

      {/* TÍTULO */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase drop-shadow-2xl">
          Mis Cursos
        </h1>
        <p className="text-gray-100 text-base md:text-xl max-w-3xl leading-relaxed font-medium">
          Certificaciones y formación continua en tecnologías de desarrollo de software y gestión de datos.
        </p>
      </div>

      {/* CARRUSELES */}
      <div className="relative z-10 w-full flex flex-col gap-12">
        <Marquee className="[--duration:50s] py-4" pauseOnHover>
          {misCursos.map((curso, i) => (
            <CursoCard key={i} {...curso} />
          ))}
        </Marquee>

        <Marquee reverse className="[--duration:55s] py-4" pauseOnHover>
          {misCursos.map((curso, i) => (
            <CursoCard key={i} {...curso} />
          ))}
        </Marquee>

        {/* DEGRADADOS LATERALES: Ajustados para no tapar el fondo */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#050505]/80 to-transparent z-30" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#1a1a1a]/80 to-transparent z-30" />
      </div>
    </div>
  );
};

export default Cursos;
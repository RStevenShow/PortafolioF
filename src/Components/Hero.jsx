import React from 'react';
import { TextAnimate } from './ui/text-animate.jsx';
import { AnimatedGridPattern } from './ui/animated-grid-pattern.jsx'; // Asegúrate de tener instalada esta librería
import { useNavigate } from "react-router-dom";

import { cn } from '../lib/utils'; // Asegúrate de que esta carpeta exista

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-32 max-w-7xl mx-auto gap-12 overflow-hidden">
      
      {/* FONDO ANIMADO - Magic UI */}
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.20}
        duration={5}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-50"
        )}
      />

      {/* LADO IZQUIERDO: TEXTO (z-10 para estar por encima del fondo) */}
      <div className="relative z-10 flex-1 flex flex-col items-start space-y-6">
        <TextAnimate 
          animation="blurInUp" 
          by="character" 
          className="text-8xl font-bold text-white tracking-tighter"
        >
          Perfil
        </TextAnimate>

        <p className="text-gray-400 text-lg leading-relaxed max-w-xl text-pretty">
          Estudiante avanzado de Ingeniería en Sistemas con un fuerte enfoque en el desarrollo 
          de software y la programación. Poseo sólidas habilidades en bases de datos relacionales 
          (SQL Server, MySQL) ,dominio de lenguajes clave como C#, Python y JavaScript , ademas de frameworks como React, next Js, django . 
          Soy una persona autodidacta, apasionada por la resolución de problemas y el aprendizaje 
          continuo de nuevas tecnologías.
        </p>

        <button
      onClick={() => navigate("/contacto")}
      className="bg-white text-black px-8 py-3 rounded-full font-semibold"
    >
      Contacto
    </button>
      </div>

      {/* LADO DERECHO: TU FOTO */}
      <div className="relative z-10 flex-1 flex justify-end w-full">
        <div className="relative group w-full max-w-[420px]">
          {/* Resplandor detrás de la foto */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 to-gray-800 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[5/5] shadow-2xl">
            <img 
              src="/tu-foto-perfil.jpg" // Pon tu foto en la carpeta 'public' con este nombre
              alt="Ramon Lopez" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 hover:scale-100"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
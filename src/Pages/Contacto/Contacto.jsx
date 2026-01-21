"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { BackgroundPaths } from "@/Components/background-paths";
import { AnimatedShinyText } from "@/Components/ui/animated-shiny-text";

export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("SERVICE_ID", "TEMPLATE_ID", form.current, "PUBLIC_KEY")
      .then(
        () => {
          alert("¡Mensaje enviado!");
          form.current.reset();
        },
        (error) => {
          alert("Error: " + error.text);
        }
      );
  };

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 overflow-x-hidden">
      {/* EL FONDO AHORA ES ABSOLUTO Y CUBRE TODO EL ALTO DINÁMICO */}
      <div className="absolute inset-0 z-0">
        <BackgroundPaths />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Título Blanco Flotante */}
         <motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
>
  <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter uppercase">
    <AnimatedShinyText className="w-full flex justify-center py-2 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
      Conversemos
    </AnimatedShinyText>
  </h1>
</motion.div>

          <p className="text-gray-100 text-lg md:text-xl font-medium max-w-2xl mx-auto shadow-black drop-shadow-md">
            ¿Tienes un proyecto en mente? Estoy listo para ayudarte a construir
            el futuro.
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-black/80 backdrop-blur-3xl border border-white/20 p-8 md:p-14 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Columna de Datos */}
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight">
              Contacto
            </h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-5 bg-white/10 rounded-2xl border border-white/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail size={32} />
                </div>
                <span className="text-white text-xl font-bold tracking-wide">
                  ramonsteven10@yahoo.es
                </span>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-5 bg-white/10 rounded-2xl border border-white/10 text-green-400 group-hover:scale-110 transition-transform">
                  <MessageCircle size={32} />
                </div>
                <span className="text-white text-xl font-bold tracking-wide">
                  +505 8587 2276
                </span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
            <input
              name="user_name"
              placeholder="Nombre"
              required
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-lg"
            />
            <input
              name="user_email"
              type="email"
              placeholder="Email"
              required
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-lg"
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              rows="4"
              required
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none text-lg"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-white text-black font-black py-5 rounded-2xl text-xl shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all uppercase"
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

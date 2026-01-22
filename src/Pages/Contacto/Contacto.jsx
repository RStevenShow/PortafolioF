/* eslint-disable no-undef */
"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Send, MessageCircle } from "lucide-react";
import { BackgroundPaths } from "@/Components/background-paths";
import { AnimatedShinyText } from "@/Components/ui/animated-shiny-text";

export default function Contacto() {
  const form = useRef();
  const [cargando, setCargando] = useState(false);

  const enviarEmail = (e) => {
  e.preventDefault();
  setCargando(true);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error("Variables de entorno no configuradas correctamente");
    alert("Error de configuración. Revisa tu archivo .env");
    setCargando(false);
    return;
  }

  if (!form.current) {
    alert("Formulario no disponible");
    setCargando(false);
    return;
  }

  emailjs.sendForm(serviceId, templateId, form.current, publicKey)
    .then(() => {
      alert("¡Mensaje enviado con éxito a Ramon Steven!");
      form.current.reset();
      setCargando(false);
    })
    .catch((error) => {
      console.error("Fallo técnico:", error);
      alert("Error al enviar: " + (error?.text || "Hubo un problema con EmailJS"));
      setCargando(false);
    });
};

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundPaths />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.header className="text-center mb-16" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}>
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter uppercase">
              <AnimatedShinyText className="w-full flex justify-center py-2 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                Conversemos
              </AnimatedShinyText>
            </h1>
          </motion.div>
          <p className="text-gray-100 text-lg md:text-xl font-medium max-w-2xl mx-auto">
           ¿Tienes un proyecto en mente? Estoy listo para ayudarte a construir el futuro.
          </p>
        </motion.header>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-black/80 backdrop-blur-3xl border border-white/20 p-8 md:p-14 rounded-[3rem] shadow-2xl">
          {/* Información de Contacto Personalizada */}
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight">Contacto</h2>
            <div className="space-y-8 text-white">
              <div className="flex items-center gap-6">
                <div className="p-5 bg-white/10 rounded-2xl border border-white/10 text-blue-400"><Mail size={32} /></div>
                <span className="text-xl font-bold">ramonsteven10@yahoo.es</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="p-5 bg-white/10 rounded-2xl border border-white/10 text-green-400"><MessageCircle size={32} /></div>
                <span className="text-xl font-bold">+505 8587 2276</span>
              </div>
            </div>
          </div>

          {/* Formulario de Mensaje Rápido */}
          <form ref={form} onSubmit={enviarEmail} className="flex flex-col gap-5">
            <input name="user_name" placeholder="Tu Nombre" required className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-lg" />
            <input name="user_email" type="email" placeholder="Tu Email" required className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-lg" />
            <textarea name="message" placeholder="¿Cómo puedo ayudarte?" rows="4" required className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none text-lg" />
            
            <motion.button
              disabled={cargando}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-white text-black font-black py-5 rounded-2xl text-xl uppercase shadow-lg disabled:opacity-50"
            >
              {cargando ? "Enviando..." : "Enviar Mensaje"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative bg-black text-white p-4 md:p-6 w-full">

      {/* FILA PRINCIPAL */}
      <div className="relative flex items-center justify-between">

        {/* Nombre izquierda */}
        <div className="text-lg font-medium whitespace-nowrap">
          Mi Portafolio
        </div>

        {/* NAVBAR DESKTOP CENTRADO */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-[#111111] border border-white/10 px-8 py-3 rounded-full shadow-2xl">
          <ul className="flex space-x-8 items-center">
            <NavItem to="/" text="Inicio" />
            <NavItem to="/cursos" text="Cursos" />
            <NavItem to="/proyectos" text="Proyectos" />
            <NavItem to="/contacto" text="Contacto" />
            <NavItem to="/cv" text="Curriculum Vitae" />
          </ul>
        </nav>

        {/* BOTÓN MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* MENÚ MOBILE */}
      {open && (
        <nav className="md:hidden mt-4 bg-[#111111] border border-white/10 rounded-2xl shadow-xl">
          <ul className="flex flex-col divide-y divide-white/10">
            <MobileNavItem to="/" text="Inicio" setOpen={setOpen} />
            <MobileNavItem to="/cursos" text="Cursos" setOpen={setOpen} />
            <MobileNavItem to="/proyectos" text="Proyectos" setOpen={setOpen} />
            <MobileNavItem to="/contacto" text="Contacto" setOpen={setOpen} />
            <MobileNavItem to="/cv" text="Curriculum Vitae" setOpen={setOpen} />
          </ul>
        </nav>
      )}
    </header>
  )
}

/* COMPONENTES */

function NavItem({ to, text }) {
  return (
    <li>
      <Link
        to={to}
        className="text-sm text-gray-400 hover:text-white transition-colors"
      >
        {text}
      </Link>
    </li>
  )
}

function MobileNavItem({ to, text, setOpen }) {
  return (
    <li>
      <Link
        to={to}
        onClick={() => setOpen(false)}
        className="block px-6 py-4 text-gray-300 hover:text-white hover:bg-white/5 transition"
      >
        {text}
      </Link>
    </li>
  )
}

import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import logo from '../assets/logo.png'
import { useCart } from '../context/CartContext'

const NAV_LINKS = [
  { label: 'INICIO', to: '/' },
  { label: 'SOBRE NOSOTROS', to: '/sobre-nosotros' },
  { label: 'PRE-ORDER', to: '/pre-order' },
  { label: 'MÁS', to: '/mas' },
]

function CartIconButton() {
  const { totalItems } = useCart()
  return (
    <Link to="/carrito" className="relative flex items-center p-1 -mr-1 md:mr-0">
      <svg
        className="w-6 h-6 text-black"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        aria-label="Carrito"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
        />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-800 w-4 h-4 rounded-full flex items-center justify-center leading-none">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </Link>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="ECLIPSSE" className="h-10 w-auto object-contain" />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-[13px] font-700 tracking-widest text-gray-900 hover:text-black transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Derecha: icono carrito + hamburguesa (móvil) */}
        <div className="flex items-center gap-3">
          <CartIconButton />

          {/* Hamburguesa móvil */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-1"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span
              className={`block h-[2px] w-6 bg-black transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`block h-[2px] w-6 bg-black transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-[2px] w-6 bg-black transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="block px-6 py-4 text-[13px] font-700 tracking-widest text-gray-900 border-b border-gray-50 active:bg-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

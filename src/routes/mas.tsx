import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mas')({
  component: MasPage,
})

function MasPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20 animate-fade-in">
      <link rel="canonical" href="https://eclipssebrand.es/mas" />
      <p className="text-[10px] font-800 tracking-[0.4em] uppercase text-gray-400 mb-3 text-center">
        ECLIPSSE™ UNIVERSE
      </p>
      <h1 className="text-[24px] font-800 tracking-tight text-gray-900 mb-14 text-center">
        Más
      </h1>

      {/* Historia */}
      <section className="mb-14">
        <h2 className="text-[10px] font-800 tracking-[0.3em] uppercase text-gray-900 mb-6">
          Historia
        </h2>
        <p className="text-[13px] text-gray-500 leading-[1.8] italic mb-8">
          Nuestra marca trabaja mediante DROPS: lanzamientos de un número limitado de prendas,
          disponibles solo durante un periodo concreto o hasta agotar existencias. Cada DROP es
          único. Una vez se agota el stock, no vuelve a estar disponible.
        </p>

        <div className="space-y-8 border-l border-gray-100 pl-6">
          <div>
            <p className="text-[11px] font-800 tracking-[0.2em] uppercase text-gray-400 mb-1">
              DROP 001 — SUPERNOVA DROP
            </p>
            <p className="text-[14px] text-gray-600 leading-[1.8]">
              Nuestro primer lanzamiento oficial. Una camiseta oversize en dos colores, con el lema
              "Don't Stop Shining". Más de 50 unidades vendidas en formato PRE-ORDER. El inicio de todo.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-800 tracking-[0.2em] uppercase text-gray-400 mb-1">
              DROP 003 — YOUTH HOODIE
            </p>
            <p className="text-[14px] text-gray-600 leading-[1.8]">
              Una sudadera llamada "YOUTH HOODIE" para el invierno, con la mejor calidad posible y
              representando nuestra marca por y para jóvenes. Venta mediante PRE-ORDER.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-800 tracking-[0.2em] uppercase text-gray-400 mb-1">
              DROP 005 — De SVQ al mundo | Fulness of joy
            </p>
            <p className="text-[14px] text-gray-600 leading-[1.8]">
              Nuestro primer lanzamiento con stock. Dos diseños de camisetas blancas para la
              primavera. De Sevilla al mundo.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-800 tracking-[0.2em] uppercase text-gray-400 mb-1">
              Verano 2025 — Tres Drops
            </p>
            <ul className="text-[14px] text-gray-600 leading-[1.8] space-y-3 mt-2">
              <li>
                <strong className="text-gray-700">SUMMER DROP 006:</strong> Una camiseta para el
                verano en blanco, celeste y amarillo. Corte oversize y 100% algodón.
              </li>
              <li>
                <strong className="text-gray-700">DROP 002 / SUPERNOVA 1.0:</strong> Segunda edición
                de la camiseta del SUPERNOVA DROP 001. Blanca, oversize, 100% algodón.
              </li>
              <li>
                <strong className="text-gray-700">DROP 004:</strong> Camiseta blanca con diseño en
                rojo y negro, corte oversize y 100% algodón. "Creadores del futuro".
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-800 tracking-[0.2em] uppercase text-gray-400 mb-1">
              DROP 007 — ECLIPSSEBRAND × ANDEX
            </p>
            <p className="text-[14px] text-gray-600 leading-[1.8]">
              La crewneck en dos colores sacada en nuestro primer invierno oficial. Una sudadera sin
              capucha de unidades limitadas en colaboración con Andex Cáncer Infantil Sevilla, en la
              que el 75% del beneficio obtenido fue donado a la asociación.
            </p>
          </div>
        </div>
      </section>

      {/* Próximamente */}
      <section className="mb-14">
        <div className="border border-gray-100 p-6">
          <p className="text-[10px] font-400 tracking-[0.3em] uppercase text-gray-400 mb-3">
            DROP 008 — IN ORBIT
          </p>
          <p className="text-[14px] text-gray-600 leading-[1.8]">
            La información y los detalles del DROP se darán más adelante.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section>
        <h2 className="text-[10px] font-800 tracking-[0.3em] uppercase text-gray-900 mb-5">
          Contacto
        </h2>
        <ul className="text-[14px] text-gray-600 leading-[1.8] space-y-2">
          <li>
            Instagram:{' '}
            <a
              href="https://www.instagram.com/eclipssebrand"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-black transition-colors"
            >
              @eclipssebrand
            </a>
          </li>
          <li>
            WhatsApp:{' '}
            <a
              href="https://wa.me/+34638724885"
              className="underline underline-offset-2 hover:text-black transition-colors"
            >
              +34 638 72 48 85
            </a>
          </li>
          <li>
            Email:{' '}
            <a
              href="mailto:eclipssebrand@gmail.com"
              className="underline underline-offset-2 hover:text-black transition-colors"
            >
              eclipssebrand@gmail.com
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}

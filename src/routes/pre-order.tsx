import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/pre-order')({
  component: PreOrderPage,
})

function PreOrderPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <link rel="canonical" href="https://eclipssebrand.es/pre-order" />
      <p className="text-[10px] font-800 tracking-[0.4em] uppercase text-gray-400 mb-3 text-center">
        PRE-ORDER — DROP 008
      </p>
      <h1 className="text-[24px] font-800 tracking-tight text-gray-900 mb-12 text-center">
        ¿Qué es el Pre-Order?
      </h1>

      <div className="space-y-8 mb-14">
        <div>
          <h2 className="text-[10px] font-800 tracking-[0.3em] uppercase text-gray-900 mb-3">
            Sin pago por adelantado
          </h2>
          <p className="text-[14px] text-gray-600 leading-[1.8]">
            El pre-order es una reserva gratuita. No pagas nada ahora.
            Solo nos dices que quieres estar entre los primeros y te avisamos cuando el DROP 008 salga a la venta.
          </p>
        </div>

        <div>
          <h2 className="text-[10px] font-800 tracking-[0.3em] uppercase text-gray-900 mb-3">
            Cómo funciona
          </h2>
          <ol className="text-[14px] text-gray-600 leading-[1.8] space-y-2 list-none">
            <li>
              <span className="font-800 text-black">01 —</span> Elige las prendas que quieras de la colección.
            </li>
            <li>
              <span className="font-800 text-black">02 —</span> Cuando el DROP 008 salga a la venta, te avisamos directamente.
            </li>
            <li>
              <span className="font-800 text-black">03 —</span> En ese momento decides si confirmas la compra o no. Sin compromiso.
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-[10px] font-800 tracking-[0.3em] uppercase text-gray-900 mb-3">
            Stock limitado
          </h2>
          <p className="text-[14px] text-gray-600 leading-[1.8]">
            Los drops de ECLIPSSE son ediciones limitadas. Una vez agotado el
            stock, no vuelven. El pre-order te asegura prioridad cuando salga a la venta.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-10 text-center">
        <p className="text-[13px] text-gray-500 mb-6">
          Explora la colección y elige tus prendas.
        </p>
        <Link
          to="/"
          className="inline-block border border-black text-black text-[11px] font-800 tracking-[0.2em] uppercase px-8 py-3 hover:bg-black hover:text-white transition-all duration-300"
        >
          VER LA COLECCIÓN
        </Link>
      </div>
    </main>
  )
}

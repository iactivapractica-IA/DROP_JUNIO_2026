import { createFileRoute, Link } from '@tanstack/react-router'
import { useCart } from '../context/CartContext'

export const Route = createFileRoute('/carrito')({
  component: CarritoPage,
})

function CarritoPage() {
  const { items, totalItems, totalPrice, removeItem, updateQuantity } = useCart()

  if (items.length === 0) {
    return (
      <main className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="text-[10px] font-800 tracking-[0.4em] uppercase text-gray-400 mb-6">
          TU CARRITO
        </p>
        <p className="text-[15px] font-700 text-gray-900 mb-2">
          Tu carrito está vacío
        </p>
        <p className="text-[13px] text-gray-500 mb-10">
          Añade prendas desde la colección para reservarlas.
        </p>
        <Link
          to="/"
          className="inline-block border border-black text-black text-[11px] font-800 tracking-[0.2em] uppercase px-8 py-3 hover:bg-black hover:text-white transition-all duration-300"
        >
          VER LA COLECCIÓN
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* Cabecera */}
      <p className="text-[10px] font-800 tracking-[0.4em] uppercase text-gray-400 mb-8">
        TU CARRITO — {totalItems} {totalItems === 1 ? 'ARTÍCULO' : 'ARTÍCULOS'}
      </p>

      {/* Lista de artículos */}
      <div className="divide-y divide-gray-100">
        {items.map((item) => (
          <div
            key={`${item.productId}-${item.size}`}
            className="flex gap-4 py-6 items-start"
          >
            {/* Imagen */}
            <img
              src={item.image}
              alt={item.productName}
              className="w-20 h-24 object-cover bg-gray-50 flex-shrink-0"
            />

            {/* Detalle */}
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-800 uppercase tracking-[0.12em]">
                {item.productName}
              </p>
              <p className="text-[12px] text-gray-500 mt-0.5">
                Talla: <span className="font-700 text-black">{item.size}</span>
              </p>
              <p className="text-[13px] text-gray-500 mt-0.5">
                {item.price.toLocaleString('es-ES', { minimumFractionDigits: 2 })} € / ud.
              </p>

              {/* Cantidad + eliminar */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center border border-black/20">
                  <button
                    onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center text-[16px] text-gray-700 hover:bg-gray-50 transition-colors"
                    aria-label="Reducir cantidad"
                  >
                    −
                  </button>
                  <span className="w-8 h-8 flex items-center justify-center text-[13px] font-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-[16px] text-gray-700 hover:bg-gray-50 transition-colors"
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.productId, item.size)}
                  className="text-[11px] font-700 tracking-widest text-gray-400 hover:text-black uppercase transition-colors ml-1"
                >
                  Quitar
                </button>
              </div>
            </div>

            {/* Subtotal */}
            <p className="text-[14px] font-800 text-black flex-shrink-0">
              {(item.price * item.quantity).toLocaleString('es-ES', {
                minimumFractionDigits: 2,
              })} €
            </p>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="border-t border-black mt-2 pt-6 flex justify-between items-baseline">
        <span className="text-[12px] font-800 tracking-[0.2em] uppercase text-gray-500">
          Total
        </span>
        <span className="text-[20px] font-800">
          {totalPrice.toLocaleString('es-ES', { minimumFractionDigits: 2 })} €
        </span>
      </div>

      <p className="text-[11px] text-gray-400 mt-2 mb-8">
        Precio final confirmado al completar la reserva. Sin pago ahora.
      </p>

      <Link
        to="/reservar"
        className="block w-full bg-black text-white text-[12px] font-800 tracking-[0.3em] uppercase py-4 text-center hover:bg-gray-900 transition-colors"
      >
        RESERVAR AHORA
      </Link>

      <Link
        to="/"
        className="block w-full text-center mt-4 text-[11px] font-700 tracking-widest uppercase text-gray-400 hover:text-black transition-colors py-2"
      >
        Seguir viendo la colección
      </Link>
    </main>
  )
}

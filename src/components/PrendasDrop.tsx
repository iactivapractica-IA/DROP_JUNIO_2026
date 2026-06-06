import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { products, type Product } from '../data/products'

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [hover, setHover] = useState(false)
  const hasBack = product.images.length > 1

  return (
    <Link
      to="/producto/$productId"
      params={{ productId: product.id }}
      className="group block"
      style={{ animationDelay: `${index * 70}ms`, animationFillMode: 'both' }}
    >
      <div
        className="relative overflow-hidden bg-gray-50 aspect-[3/4]"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hover && hasBack ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {hasBack && (
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hover ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-[12px] font-800 uppercase tracking-[0.1em] text-black group-hover:opacity-60 transition-opacity duration-200">
          {product.name}
        </p>
        <p className="text-[12px] text-gray-500">
          {product.price.toLocaleString('es-ES', { minimumFractionDigits: 2 })} €
        </p>
      </div>
    </Link>
  )
}

export function PrendasDrop() {
  const total = products.length

  return (
    <section id="prendas" className="w-full px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[10px] font-800 tracking-[0.4em] uppercase text-gray-400 mb-12 animate-fade-up">
          LA COLECCIÓN
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
          {products.map((product, idx) => {
            const isOddLast = idx === total - 1 && total % 2 !== 0
            return (
              <div
                key={product.id}
                className={`animate-fade-up ${
                  isOddLast
                    ? 'col-span-2 justify-self-center w-[calc(50%-8px)] md:col-span-1 md:col-start-2 md:w-full md:justify-self-stretch lg:col-span-1 lg:col-start-auto'
                    : ''
                }`}
                style={{ animationDelay: `${idx * 70}ms`, animationFillMode: 'both' }}
              >
                <ProductCard product={product} index={idx} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

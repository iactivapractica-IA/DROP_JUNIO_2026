import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { products, type Product } from '../data/products'
import { useCart } from '../context/CartContext'

export const Route = createFileRoute('/producto/$productId')({
  component: ProductPage,
})

const SIZES = ['XS', 'S', 'M', 'L']

function ProductPage() {
  const { productId } = Route.useParams()
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-[14px] text-gray-500 mb-4">Producto no encontrado.</p>
        <Link
          to="/"
          className="text-[12px] font-800 tracking-widest uppercase underline underline-offset-4 hover:text-gray-500 transition-colors"
        >
          Volver a la colección
        </Link>
      </main>
    )
  }

  return <ProductDetail product={product} />
}

function ProductDetail({ product }: { product: Product }) {
  const [mainImg, setMainImg] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [sizeError, setSizeError] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  function handleAddToCart() {
    if (product.hasSizes && !selectedSize) {
      setSizeError(true)
      setTimeout(() => setSizeError(false), 1800)
      return
    }
    addItem({
      productId: product.id,
      productName: product.name,
      price: product.price,
      size: product.hasSizes ? selectedSize! : 'ÚNICA',
      image: product.images[0],
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 md:py-16 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="mb-10 flex items-center gap-2 text-[11px] font-700 tracking-widest uppercase text-gray-400">
        <Link to="/" className="hover:text-black transition-colors duration-200">
          Colección
        </Link>
        <span>›</span>
        <span className="text-black">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
        {/* Galería */}
        <div className="space-y-3">
          <div className="bg-gray-50 overflow-hidden aspect-[3/4]">
            <img
              key={mainImg}
              src={product.images[mainImg]}
              alt={product.name}
              className="w-full h-full object-cover animate-fade-in"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImg(i)}
                  className={`flex-1 aspect-square overflow-hidden border-2 transition-all duration-200 ${
                    mainImg === i
                      ? 'border-black'
                      : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-7">
          <div>
            <p className="text-[10px] font-800 tracking-[0.4em] uppercase text-gray-400 mb-2">
              ECLIPSSE™ IN ORBIT — DROP 008
            </p>
            <h1 className="text-[24px] font-800 tracking-tight text-black leading-tight mb-3">
              {product.name}
            </h1>
            <p className="text-[17px] text-gray-700 font-700">
              {product.price.toLocaleString('es-ES', { minimumFractionDigits: 2 })} €
            </p>
          </div>

          {/* Tallas */}
          <div>
            {product.hasSizes ? (
              <>
                <p
                  className={`text-[10px] font-800 tracking-[0.3em] uppercase mb-3 transition-colors duration-200 ${
                    sizeError ? 'text-red-500' : 'text-gray-700'
                  }`}
                >
                  {sizeError ? 'ELIGE UNA TALLA' : 'TALLA'}
                </p>
                <div className="flex gap-2">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size)
                        setSizeError(false)
                      }}
                      className={`w-12 h-10 text-[11px] font-800 tracking-widest border transition-all duration-200 ${
                        selectedSize === size
                          ? 'bg-black text-white border-black'
                          : sizeError
                            ? 'border-red-300 text-red-400'
                            : 'border-black/30 text-black hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-[10px] font-800 tracking-[0.3em] uppercase text-gray-500">
                TALLA ÚNICA
              </p>
            )}
          </div>

          {/* Botón */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-4 text-[12px] font-800 tracking-[0.25em] uppercase transition-all duration-300 ${
              added
                ? 'bg-black text-white border border-black'
                : 'border border-black text-black hover:bg-black hover:text-white'
            }`}
          >
            {added ? '✓ AÑADIDO' : 'AÑADIR AL CARRITO'}
          </button>

          {/* Descripción */}
          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-[10px] font-800 tracking-[0.3em] uppercase text-gray-900 mb-4">
              Descripción
            </h2>
            <p className="text-[14px] text-gray-600 leading-[1.85]">
              {product.description}
            </p>
          </div>

          {/* Detalles */}
          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-[10px] font-800 tracking-[0.3em] uppercase text-gray-900 mb-4">
              Detalles
            </h2>
            <ul className="space-y-2">
              {product.details.map((detail, i) => (
                <li key={i} className="flex gap-3 text-[14px] text-gray-600">
                  <span className="text-gray-300 shrink-0 mt-0.5">—</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

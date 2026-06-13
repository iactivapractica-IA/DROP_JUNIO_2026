import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

export const Route = createFileRoute('/reservar')({
  component: ReservarPage,
})

interface FormData {
  nombre: string
  apellidos: string
  telefono: string
  instagram: string
}

type Status = 'idle' | 'loading' | 'success' | 'error' | 'throttled'

const THROTTLE_KEY = 'eclipsse_last_submit'
const THROTTLE_MS = 5 * 60 * 1000

function isThrottled(): boolean {
  try {
    const last = localStorage.getItem(THROTTLE_KEY)
    if (!last) return false
    return Date.now() - parseInt(last) < THROTTLE_MS
  } catch {
    return false
  }
}

function markSubmitted(): void {
  try {
    localStorage.setItem(THROTTLE_KEY, Date.now().toString())
  } catch {}
}

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-().]/g, '')
  return /^(\+34)?[6-9]\d{8}$/.test(cleaned)
}

function validateName(name: string): boolean {
  return /^[a-zA-ZÀ-ÿÑñÜü\s\-']{2,50}$/.test(name.trim())
}

function validateInstagram(ig: string): boolean {
  const handle = ig.startsWith('@') ? ig.slice(1) : ig
  return /^[a-zA-Z0-9._]{1,30}$/.test(handle)
}

function normalizeInstagram(ig: string): string {
  const trimmed = ig.trim()
  if (!trimmed) return ''
  return trimmed.startsWith('@') ? trimmed : `@${trimmed}`
}

function ReservarPage() {
  const { items, totalPrice, clearCart } = useCart()

  const [form, setForm] = useState<FormData>({
    nombre: '',
    apellidos: '',
    telefono: '',
    instagram: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<Status>('idle')

  if (status === 'success') {
    return (
      <main className="max-w-2xl mx-auto px-6 py-24 text-center animate-fade-in">
        <p className="text-[10px] font-800 tracking-[0.4em] uppercase text-gray-400 mb-6">
          PRE-ORDER — DROP 008
        </p>
        <p className="text-[22px] font-800 tracking-tight text-gray-900 mb-4">
          ¡Reserva confirmada!
        </p>
        <p className="text-[14px] text-gray-500 leading-relaxed max-w-sm mx-auto mb-2">
          Hemos recibido tu reserva correctamente.
        </p>
        <p className="text-[14px] text-gray-500 leading-relaxed max-w-sm mx-auto">
          Te avisaremos en cuanto el DROP 008 salga a la venta para que puedas confirmar tu compra. Sin ningún compromiso hasta ese momento.
        </p>
        <Link
          to="/"
          className="inline-block mt-10 border border-black text-black text-[11px] font-800 tracking-[0.2em] uppercase px-8 py-3 hover:bg-black hover:text-white transition-all duration-300"
        >
          VOLVER AL INICIO
        </Link>
      </main>
    )
  }

  if (items.length === 0) {
    return (
      <main className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="text-[10px] font-800 tracking-[0.4em] uppercase text-gray-400 mb-6">
          TU RESERVA
        </p>
        <p className="text-[15px] font-700 text-gray-900 mb-3">
          Tu carrito está vacío
        </p>
        <p className="text-[13px] text-gray-500 mb-10">
          Añade prendas desde la colección antes de completar la reserva.
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

  function validate(): boolean {
    const newErrors: Partial<FormData> = {}

    if (!form.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio'
    } else if (!validateName(form.nombre)) {
      newErrors.nombre = 'Solo letras y espacios, mínimo 2 caracteres'
    }

    if (!form.apellidos.trim()) {
      newErrors.apellidos = 'Los apellidos son obligatorios'
    } else if (!validateName(form.apellidos)) {
      newErrors.apellidos = 'Solo letras y espacios, mínimo 2 caracteres'
    }

    if (!form.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio'
    } else if (!validatePhone(form.telefono)) {
      newErrors.telefono = 'Introduce un teléfono válido (ej. 600 000 000 o +34 600 000 000)'
    }

    if (form.instagram.trim() && !validateInstagram(form.instagram)) {
      newErrors.instagram = 'Usuario no válido (máx. 30 caracteres, sin espacios ni símbolos)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    if (isThrottled()) {
      setStatus('throttled')
      return
    }

    setStatus('loading')

    const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL
    if (!webhookUrl || webhookUrl === 'PEGAR_URL_AQUI') {
      setStatus('error')
      return
    }

    const payload = {
      nombre: form.nombre.trim(),
      apellidos: form.apellidos.trim(),
      telefono: form.telefono.trim(),
      instagram: normalizeInstagram(form.instagram) || null,
      carrito: items.map((item) => ({
        nombre: item.productName,
        talla: item.size,
        cantidad: item.quantity,
        precio: item.price,
      })),
      total: totalPrice,
      fecha_reserva: new Date().toISOString(),
    }

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      markSubmitted()
      clearCart()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
    if (status === 'error' || status === 'throttled') setStatus('idle')
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <link rel="canonical" href="https://eclipssebrand.es/reservar" />
      <p className="text-[10px] font-800 tracking-[0.4em] uppercase text-gray-400 mb-2">
        PRE-ORDER — DROP 008
      </p>
      <h1 className="text-[22px] font-800 tracking-tight text-gray-900 mb-1">
        Completa tu reserva
      </h1>
      <p className="text-[13px] text-gray-500 mb-10">
        Sin pago. Solo guardamos tu reserva y te avisamos cuando salga a la venta.
      </p>

      {/* Resumen del carrito */}
      <div className="bg-gray-50 border border-gray-100 p-5 mb-10">
        <p className="text-[10px] font-800 tracking-[0.3em] uppercase text-gray-400 mb-4">
          TU SELECCIÓN
        </p>
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={`${item.productId}-${item.size}`}
              className="flex justify-between items-baseline gap-4 text-[13px]"
            >
              <span className="text-gray-700 min-w-0">
                {item.productName}{' '}
                <span className="text-gray-400">
                  · Talla {item.size} · ×{item.quantity}
                </span>
              </span>
              <span className="font-800 text-black flex-shrink-0">
                {(item.price * item.quantity).toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                })}{' '}
                €
              </span>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 mt-4 pt-3 flex justify-between items-baseline">
          <span className="text-[11px] font-800 tracking-[0.2em] uppercase text-gray-400">
            Total estimado
          </span>
          <span className="text-[15px] font-800 text-black">
            {totalPrice.toLocaleString('es-ES', { minimumFractionDigits: 2 })} €
          </span>
        </div>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label
            htmlFor="nombre"
            className="block text-[10px] font-800 tracking-[0.25em] uppercase text-gray-500 mb-1.5"
          >
            Nombre <span className="text-black">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="given-name"
            maxLength={50}
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={`w-full border px-4 py-3 text-[14px] text-gray-900 bg-white outline-none focus:border-black transition-colors ${
              errors.nombre ? 'border-red-400' : 'border-gray-200'
            }`}
          />
          {errors.nombre && (
            <p className="text-[11px] text-red-500 mt-1">{errors.nombre}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="apellidos"
            className="block text-[10px] font-800 tracking-[0.25em] uppercase text-gray-500 mb-1.5"
          >
            Apellidos <span className="text-black">*</span>
          </label>
          <input
            id="apellidos"
            name="apellidos"
            type="text"
            autoComplete="family-name"
            maxLength={50}
            value={form.apellidos}
            onChange={handleChange}
            placeholder="Tus apellidos"
            className={`w-full border px-4 py-3 text-[14px] text-gray-900 bg-white outline-none focus:border-black transition-colors ${
              errors.apellidos ? 'border-red-400' : 'border-gray-200'
            }`}
          />
          {errors.apellidos && (
            <p className="text-[11px] text-red-500 mt-1">{errors.apellidos}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="telefono"
            className="block text-[10px] font-800 tracking-[0.25em] uppercase text-gray-500 mb-1.5"
          >
            Teléfono <span className="text-black">*</span>
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            maxLength={20}
            value={form.telefono}
            onChange={handleChange}
            placeholder="+34 600 000 000"
            className={`w-full border px-4 py-3 text-[14px] text-gray-900 bg-white outline-none focus:border-black transition-colors ${
              errors.telefono ? 'border-red-400' : 'border-gray-200'
            }`}
          />
          {errors.telefono && (
            <p className="text-[11px] text-red-500 mt-1">{errors.telefono}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="instagram"
            className="block text-[10px] font-800 tracking-[0.25em] uppercase text-gray-500 mb-1.5"
          >
            Instagram{' '}
            <span className="text-gray-300 normal-case tracking-normal font-400">
              (opcional)
            </span>
          </label>
          <input
            id="instagram"
            name="instagram"
            type="text"
            maxLength={31}
            value={form.instagram}
            onChange={handleChange}
            placeholder="@tuusuario"
            className={`w-full border px-4 py-3 text-[14px] text-gray-900 bg-white outline-none focus:border-black transition-colors ${
              errors.instagram ? 'border-red-400' : 'border-gray-200'
            }`}
          />
          {errors.instagram && (
            <p className="text-[11px] text-red-500 mt-1">{errors.instagram}</p>
          )}
        </div>

        {status === 'error' && (
          <p className="text-[12px] text-red-500 bg-red-50 border border-red-100 px-4 py-3 leading-relaxed">
            Ha ocurrido un error al enviar la reserva. Por favor, inténtalo de nuevo o
            escríbenos a{' '}
            <a href="mailto:eclipssebrand@gmail.com" className="underline">
              eclipssebrand@gmail.com
            </a>
            .
          </p>
        )}

        {status === 'throttled' && (
          <p className="text-[12px] text-amber-600 bg-amber-50 border border-amber-100 px-4 py-3 leading-relaxed">
            Ya enviaste una reserva hace menos de 5 minutos. Espera un momento antes de intentarlo de nuevo.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-black text-white text-[12px] font-800 tracking-[0.3em] uppercase py-4 hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
        >
          {status === 'loading' ? 'ENVIANDO...' : 'CONFIRMAR RESERVA'}
        </button>
      </form>

      <p className="text-[11px] text-gray-400 text-center mt-6 leading-relaxed">
        No se realiza ningún cargo. Recibirás un aviso cuando el drop salga a la venta.
      </p>

      <p className="text-[10px] text-gray-300 text-center mt-3 leading-relaxed">
        Al confirmar, aceptas que ECLIPSSE use tus datos para gestionar esta reserva.
        Nunca los cedemos a terceros. Puedes pedir su eliminación en{' '}
        <a href="mailto:eclipssebrand@gmail.com" className="underline hover:text-gray-500">
          eclipssebrand@gmail.com
        </a>
        .
      </p>
    </main>
  )
}

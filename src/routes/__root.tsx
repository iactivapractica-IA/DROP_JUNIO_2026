import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { AnnouncementBar } from '../components/AnnouncementBar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function NotFoundPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 text-center">
      <p className="text-[10px] font-800 tracking-[0.4em] uppercase text-gray-400 mb-6">
        ERROR 404
      </p>
      <p className="text-[22px] font-800 tracking-tight text-gray-900 mb-4">
        Página no encontrada
      </p>
      <p className="text-[14px] text-gray-500 leading-relaxed max-w-sm mx-auto mb-10">
        La página que buscas no existe o ha cambiado de dirección.
      </p>
      <Link
        to="/"
        className="inline-block border border-black text-black text-[11px] font-800 tracking-[0.2em] uppercase px-8 py-3 hover:bg-black hover:text-white transition-all duration-300"
      >
        VOLVER AL INICIO
      </Link>
    </main>
  )
}

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  ),
  notFoundComponent: NotFoundPage,
})

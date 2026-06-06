import { createRootRoute, Outlet } from '@tanstack/react-router'
import { AnnouncementBar } from '../components/AnnouncementBar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

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
})

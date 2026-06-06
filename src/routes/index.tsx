import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/Hero'
import { ConceptoDrop } from '../components/ConceptoDrop'
import { PrendasDrop } from '../components/PrendasDrop'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      <Hero />
      <PrendasDrop />
      <ConceptoDrop />
    </main>
  )
}

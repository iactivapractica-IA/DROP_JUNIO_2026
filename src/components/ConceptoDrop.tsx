import anuncioDrop from '../assets/anuncio_drop.jpeg'

export function ConceptoDrop() {
  return (
    <section className="w-full bg-white py-12 md:py-16 flex justify-center">
      <img
        src={anuncioDrop}
        alt="DROP 008 — ECLIPSSE™ IN ORBIT — Summer has its own gravity."
        className="w-full max-w-2xl px-4 md:px-8 block"
      />
    </section>
  )
}

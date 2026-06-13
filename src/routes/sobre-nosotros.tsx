import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sobre-nosotros')({
  component: SobreNosotros,
})

function SobreNosotros() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <link rel="canonical" href="https://eclipssebrand.es/sobre-nosotros" />
      <p className="text-[10px] font-800 tracking-[0.4em] uppercase text-gray-400 mb-3 text-center">
        ECLIPSSE™ UNIVERSE
      </p>
      <h1 className="text-[24px] font-800 tracking-tight text-gray-900 mb-12 text-center">
        Sobre Nosotros
      </h1>

      <p className="text-[14px] text-gray-700 leading-[1.8] mb-6">
        Somos una marca de ropa nacida en 2024 en Sevilla (España), fundada por un grupo de amigos
        jugadores de rugby. Bajo el lema <em>"por y para jóvenes"</em>, nuestro objetivo es ofrecer
        productos únicos, con la mejor calidad posible y con un estilo que conecte con nuestra
        generación. Apostamos por un modelo responsable y local, buscando siempre cuidar el
        medioambiente.
      </p>

      <p className="text-[14px] text-gray-500 leading-[1.8] italic mb-14">
        DE SEVILLA AL MUNDO, queremos demostrar que con esfuerzo y constancia se puede lograr lo
        que uno se propone, sin importar la edad.
      </p>

      <h2 className="text-[10px] font-800 tracking-[0.3em] uppercase text-gray-900 mb-4">
        Nuestro Objetivo
      </h2>
      <p className="text-[14px] text-gray-700 leading-[1.8] mb-14">
        Queremos demostrar que los jóvenes también podemos crear algo grande. Somos una marca de
        ropa hecha con una visión clara: destacar entre las marcas ya establecidas. Ofrecer
        productos con estilo, calidad y actitud con precios asequibles y sin perder la conexión
        con quienes somos: una generación que es constante, piensa diferente y quiere dejar huella.
        Buscamos inspirar a otros jóvenes a apostar por sus ideas y construir algo propio, como
        hacemos nosotros. Queremos diferenciarnos de otras marcas y usar este proyecto para algo
        más que vender. Tener una identidad, una historia y una misión, por ejemplo ayudando a
        personas que lo necesiten o creando productos únicos.
      </p>

      <p className="text-[13px] italic text-gray-400 text-center tracking-wide">
        Por y para jóvenes
      </p>
    </main>
  )
}

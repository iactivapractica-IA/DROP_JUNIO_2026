import camisetaAzulD from '../assets/camiseta_azul_delantera.jpeg'
import camisetaAzulT from '../assets/camiseta_azul_trasera.jpeg'
import camisetaAzulM from '../assets/camiseta_azul_modelo.jpeg'
import camisetaBlancaD from '../assets/camiseta_blanca_delantera.jpeg'
import camisetaBlancaT from '../assets/camiseta_blanca_trasera.jpeg'
import camisetaBlancaM from '../assets/camiseta_blanca_modelo.jpeg'
import camisetaBlancaRosaD from '../assets/camiseta_blancarosa_delantera.jpeg'
import camisetaBlancaRosaT from '../assets/camiseta_blancarosa_trasera.jpeg'
import camisetaBlancaRosaM from '../assets/camiseta_blancarosa_modelo.jpeg'
import camisetaBurdeosD from '../assets/camiseta_burdeos_delantera_1.jpeg'
import camisetaBurdeosT from '../assets/camiseta_burdeos_trasera_1.jpeg'
import camisetaBurdeosM from '../assets/camiseta_burdeos_modelo.jpeg'
import camisetaGrisD from '../assets/camiseta_gris_delantera.jpeg'
import camisetaGrisT from '../assets/camiseta_gris_trasera.jpeg'
import camisetaGrisM from '../assets/camiseta_gris_modelo.jpeg'
import sudaderaVerdeD from '../assets/sudadera_verde_delantera_2.jpeg'
import sudaderaVerdeT from '../assets/sudadera_verde_trasera.jpeg'
import sudaderaVerdeM from '../assets/sudadera_verde_modelo.jpeg'
import gorraImg from '../assets/gorra.jpeg'
import gorraM from '../assets/gorra_modelo.jpeg'

export interface Product {
  id: string
  name: string
  price: number
  images: string[]
  hasSizes: boolean
  description: string
  details: string[]
}

export const products: Product[] = [
  {
    id: 'camiseta-azul',
    name: 'Camiseta Azul',
    price: 23.97,
    images: [camisetaAzulD, camisetaAzulT, camisetaAzulM],
    hasSizes: true,
    description:
      'Camiseta azul grisáceo de corte oversize, fabricada en 100% algodón. Su color sobrio y su fit amplio la hacen una prenda cómoda, versátil y diferente. Perfecta para verano gracias a su tejido suave y transpirable, manteniendo un estilo limpio y relajado.',
    details: [
      '100% algodón.',
      'Corte oversize.',
      'Color azul grisáceo.',
      'Manga corta amplia.',
      'Cuello redondo.',
      'Tejido cómodo y transpirable.',
      'Perfecta para verano.',
      'Prenda unisex.',
    ],
  },
  {
    id: 'camiseta-blanca',
    name: 'Camiseta Blanca Orbit',
    price: 23.97,
    images: [camisetaBlancaD, camisetaBlancaT, camisetaBlancaM],
    hasSizes: true,
    description:
      'Camiseta blanca de corte oversize, confeccionada en 100% algodón. Una prenda fresca, limpia y cómoda, perfecta para los días de verano. Su fit amplio aporta libertad de movimiento y una estética relajada, manteniendo una sensación de calidad en el tejido.',
    details: [
      '100% algodón.',
      'Corte oversize.',
      'Color blanco.',
      'Manga corta amplia.',
      'Cuello redondo.',
      'Tejido transpirable y suave.',
      'Perfecta para verano.',
      'Prenda unisex.',
    ],
  },
  {
    id: 'camiseta-blanca-rosa',
    name: 'Camiseta Blanca Sun',
    price: 23.97,
    images: [camisetaBlancaRosaD, camisetaBlancaRosaT, camisetaBlancaRosaM],
    hasSizes: true,
    description:
      'Camiseta blanca oversize de 100% algodón, pensada para ofrecer comodidad, frescura y buena caída. Su color blanco la convierte en una prenda fácil de combinar, ideal para looks de verano y para llevar tanto sola como con otras capas ligeras.',
    details: [
      '100% algodón.',
      'Corte oversize.',
      'Color blanco.',
      'Manga corta.',
      'Cuello redondo.',
      'Tacto suave y cómodo.',
      'Tejido fresco para verano.',
      'Prenda unisex.',
    ],
  },
  {
    id: 'camiseta-burdeos',
    name: 'Camiseta Granate',
    price: 23.97,
    images: [camisetaBurdeosD, camisetaBurdeosT, camisetaBurdeosM],
    hasSizes: true,
    description:
      'Camiseta granate de corte oversize, fabricada en 100% algodón. Su tejido ligero, suave y transpirable la hace perfecta para el verano, manteniendo una sensación cómoda durante todo el día. Una prenda básica pero con presencia, ideal para combinar con cualquier look.',
    details: [
      '100% algodón.',
      'Corte oversize.',
      'Color granate.',
      'Manga corta amplia.',
      'Cuello redondo.',
      'Tejido suave, fresco y cómodo.',
      'Perfecta para verano.',
      'Prenda unisex.',
    ],
  },
  {
    id: 'camiseta-gris',
    name: 'Camiseta Gris',
    price: 23.97,
    images: [camisetaGrisD, camisetaGrisT, camisetaGrisM],
    hasSizes: true,
    description:
      'Camiseta gris oscuro de corte oversize, confeccionada en 100% algodón. Una prenda cómoda, fresca y resistente, con un color fácil de combinar y un acabado de gran calidad. Ideal para llevar en verano con un estilo relajado y versátil.',
    details: [
      '100% algodón.',
      'Corte oversize.',
      'Color gris oscuro.',
      'Manga corta amplia.',
      'Cuello redondo.',
      'Tejido suave y transpirable.',
      'Perfecta para verano.',
      'Prenda unisex.',
    ],
  },
  {
    id: 'sudadera-verde',
    name: 'Crewneck Verde',
    price: 38.97,
    images: [sudaderaVerdeD, sudaderaVerdeT, sudaderaVerdeM],
    hasSizes: true,
    description:
      'Crewneck verde de corte oversize, confeccionado en 100% algodón. Una prenda cómoda, resistente y con una caída amplia que aporta un estilo relajado sin perder calidad. Su tejido suave y consistente lo convierte en una opción perfecta para llevar en entretiempo, noches de verano o looks más cuidados del día a día.',
    details: [
      '100% algodón.',
      'Corte oversize.',
      'Color verde.',
      'Cuello redondo tipo crewneck.',
      'Tacto suave y estructura de gran calidad.',
      'Puños, cuello y bajo acanalados.',
      'Fit cómodo y amplio.',
      'Prenda unisex.',
    ],
  },
  {
    id: 'gorra-verde',
    name: 'Gorra Verde',
    price: 14.97,
    images: [gorraImg, gorraM],
    hasSizes: false,
    description:
      'Gorra verde con efecto vintage, cómoda y de gran calidad. Su acabado lavado le da un aspecto único y fácil de combinar, perfecto para completar cualquier outfit de verano o de diario. Una prenda ligera, versátil y con un estilo relajado.',
    details: [
      'Color verde vintage.',
      'Acabado lavado.',
      'Visera curva.',
      'Ajuste cómodo.',
      'Ligera y fácil de llevar.',
      'Perfecta para verano.',
      'Ideal para uso diario.',
      'Prenda unisex.',
    ],
  },
]

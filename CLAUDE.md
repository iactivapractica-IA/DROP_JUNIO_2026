# CLAUDE.md — ECLIPSSE™ IN ORBIT (DROP 008) — Landing de pre-order

Contexto del proyecto para Claude Code. Léelo entero antes de tocar nada.

## Qué es este proyecto

Landing page para el lanzamiento de una colección de ropa: **ECLIPSSE™ IN ORBIT — DROP 008**.
NO es una tienda con compra. Es una página de PRE-ORDER (reservas): el usuario ve la
colección, conoce el concepto del drop, y reserva prendas rellenando un formulario.
Sin pago, sin carrito real, sin login, sin ecommerce.

Es un proyecto independiente de la tienda principal de ECLIPSSE, pero pertenece a la misma
marca. Mantiene coherencia de marca, pero con una identidad visual propia del drop (ver abajo).

## Estado / fases

1. ACTUAL: construir la landing (estructura, estética, contenido, prendas).
2. Formulario de reservas conectado (Airtable vía función serverless) — PENDIENTE, se hará al final.

> Mientras tanto, el formulario puede funcionar "en seco" (validar y mostrar mensaje de
> confirmación) hasta que conectemos Airtable.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- TanStack Router
- (Al final) función serverless para enviar reservas a Airtable
- Deploy previsto en Vercel

## Identidad visual

Esta landing tiene DOS capas de estética:
- **Base de marca** (header, footer, tipografía): igual que la web de ECLIPSSE — fondo blanco,
  texto negro, logo de las TRES LUNAS, tipografía redondeada de la marca.
- **Estética del DROP "IN ORBIT"**: colores vivos, degradados (rosa, azul, naranja, amarillo,
  morado), textura granulada, halos de luz que se abren desde un centro, órbitas, rollo
  "universe in orbit". Esta estética manda en el hero y en los fondos de sección del drop.

Fidelidad de marca ALTA: usar el logo real (tres lunas) y las imágenes que aporta la clienta.
No recrear logos ni gráficos con CSS si hay archivo. Pedir los archivos si faltan.

## Estructura de la landing (página principal, de arriba a abajo)

1. **Franja superior negra** con la fecha de lanzamiento moviéndose horizontalmente (marquee):
   texto tipo "DROP 008 — **/06/2026" (la fecha exacta aún no está definida, dejar **/06/2026).
2. **Header**: logo de las tres lunas + menú: SOBRE NOSOTROS, PRE-ORDER, MÁS.
3. **Hero**: imagen de cabecera del drop SIN texto encima (la que aporta la clienta, el degradado
   con el destello central y "eclipssebrand universe in orbit").
4. **Concepto del DROP 008**: título "DROP 008" + "Summer has its own gravity." + el texto del
   concepto (ver sección CONTENIDO).
5. **Prendas del drop**: cuadrícula de productos. Cada uno con su foto, nombre y precio, y un
   botón que en vez de "comprar" pone "RESERVAR" y lleva al formulario de pre-order.
6. **Formulario de pre-order**: nombre, apellidos, teléfono, Instagram (opcional). Al enviar,
   mensaje de confirmación en pantalla (y, cuando se conecte, guarda la reserva en Airtable).
7. **Footer**: SOLO los iconos de Instagram y TikTok, enlazando a:
   - Instagram: https://www.instagram.com/eclipssebrand/
   - TikTok: https://www.tiktok.com/@eclipssebrand

## Otras páginas (mismo estilo y tono que la web actual de ECLIPSSE)

- **SOBRE NOSOTROS**: mismo contenido que https://www.eclipssebrand.es/p/sobre-nosotros
  (texto real de la marca: nacida en 2024 en Sevilla, por y para jóvenes, etc.)
- **PRE-ORDER**: página que explica qué es el pre-order y cómo funciona la reserva.
- **MÁS**: mismo tono y contenido que https://www.eclipssebrand.es/p/info

## Prendas del DROP 008 y precios

- Camisetas: 23,97 €
- Sudadera: 38,97 €
- Gorra: 14,97 €

(Las imágenes de las prendas las aporta la clienta. Hay varias camisetas en distintos colores
—blanca, granate, gris/azul, verde oscuro—, una sudadera verde y una gorra verde.)

## Formulario de reserva (campos)

- Nombre (obligatorio)
- Apellidos (obligatorio)
- Teléfono (obligatorio)
- Instagram (opcional)
- Botón: "RESERVAR" / "CONFIRMAR RESERVA"
- Al enviar: mensaje de confirmación en pantalla.

## Cómo trabajar conmigo

- Explica en español, claro y directo, sin relleno.
- Cambios acotados que yo pueda revisar. No refactors gigantes de golpe.
- Antes de instalar dependencias nuevas o cambiar estructura, avísame.
- Las claves/API keys (Airtable, etc.) van SIEMPRE en variables de entorno (.env.local),
  NUNCA en el código ni subidas a GitHub. .env.local debe estar en .gitignore.
- No crees cuentas de servicios por mí; dime qué crear y lo hago yo.

## Comandos

```bash
npm install
npm run dev
npm run build
```

## Contacto / marca (para enlaces)

- Instagram: https://www.instagram.com/eclipssebrand/
- TikTok: https://www.tiktok.com/@eclipssebrand
- Email marca: eclipssebrand@gmail.com
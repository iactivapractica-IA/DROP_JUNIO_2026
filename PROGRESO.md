# PROGRESO — Landing Drop Eclipse

Checklist de construcción. Se marca ✅ cuando está completo y funcionando.

---

## Estructura general

- ✅ Franja superior (announcement bar) — texto/oferta fija en lo alto de la página
- ✅ Header — logo, navegación, icono de carrito con badge
- ✅ Hero — imagen principal (sin botón CTA)

---

## Secciones de la página de inicio

- ✅ Concepto del drop — texto + visual que explica qué es Eclipse
- ✅ Prendas con galería — grid de prendas con fotos, nombre y precio
- ✅ Formulario de pre-order — campos, validación y envío a n8n webhook

---

## Páginas

- ✅ Página de inicio (`/`) — estructura base lista
- ✅ Sobre Nosotros (`/sobre-nosotros`)
- ✅ Pre-order (`/pre-order`) — explica qué es y cómo funciona la reserva
- ✅ Más (`/mas`) — historial de drops + contacto
- ✅ Carrito (`/carrito`) — lista de artículos, cantidades, total, CTA reservar
- ✅ Detalle de producto (`/producto/:id`) — galería, selector de talla, añadir al carrito
- ✅ Reservar (`/reservar`) — formulario de pre-order con validación
- ✅ Confirmación de reserva — pantalla de éxito tras enviar

---

## Carrito de reservas

- ✅ Estado global del carrito — Context + useReducer, sin localStorage
- ✅ Selector de talla por prenda (XS / S / M / L) — gorra con talla única
- ✅ Botón "AÑADIR AL CARRITO" con feedback visual ("✓ AÑADIDO")
- ✅ Validación: no se puede añadir sin elegir talla (error visual)
- ✅ Icono de bolsa en el header con badge numérico
- ✅ Página `/carrito`: artículos, stepper de cantidad, quitar, total
- ✅ Botón "RESERVAR AHORA" → lleva a `/reservar`

---

## Formulario de pre-order

- ✅ Campos: nombre, apellidos, teléfono, Instagram (opcional)
- ✅ Validación en cliente (regex, campos obligatorios)
- ✅ Throttling: 1 envío cada 5 minutos (localStorage)
- ✅ Envío POST a webhook n8n
- ✅ Pantalla de éxito con mensaje de confirmación
- ✅ Aviso RGPD bajo el botón de confirmar

---

## Integraciones

- ✅ n8n webhook configurado (URL en `.env.local`)
- [ ] Verificar que el workflow de n8n procesa y guarda en Airtable (prueba manual pendiente)

---

## Deploy

- [ ] Deploy a Vercel (pendiente)
- [ ] Variable de entorno `VITE_N8N_WEBHOOK_URL` configurada en Vercel

---

## Detalles pendientes

- [ ] Fecha exacta del drop en AnnouncementBar (la clienta confirma la fecha → actualizar `**/06/2026`)
- [ ] Favicon con logo ECLIPSSE (tres lunas)
- [ ] SEO básico: title + meta description por página
- [ ] Página 404 personalizada

---

## Productos del DROP 008 — referencia

Todas las prendas tienen foto delantera + trasera (galería de 2 imágenes), salvo donde se indica.

| Prenda | Archivo delantera | Archivo trasera | Precio |
|---|---|---|---|
| Camiseta Azul | `camiseta_azul_delantera` | `camiseta_azul_trasera` | 23,97 € |
| Camiseta Blanca | `camiseta_blanca_delantera` | `camiseta_blanca_trasera` | 23,97 € |
| Camiseta Blanca Rosa | `camiseta_blancarosa_delantera` | `camiseta_blancarosa_trasera` | 23,97 € |
| Camiseta Burdeos | `camiseta_burdeos_delantera` | `camiseta_burdeos_trasera` | 23,97 € |
| Camiseta Gris | `camiseta_gris_delantera` | `camiseta_gris_trasera` | 23,97 € |
| Sudadera Verde | `sudadera_verde_delantera` | `sudadera_verde_ytrasera` | 38,97 € |
| Gorra Verde | `gorra` | — (una sola foto) | 14,97 € |

---

## Estado actual

- ✅ Landing completa y funcional en local
- ✅ Formulario de pre-order conectado a n8n webhook
- ⏳ Pendiente: verificar n8n → Airtable, deploy a Vercel, favicon, SEO
a

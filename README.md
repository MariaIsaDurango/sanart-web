# Sanart Odontología Integral — Sitio Web

Sitio web oficial de **Sanart Odontología Integral**, clínica dental ubicada en Cali, Colombia.

🔗 **Sitio en vivo:** [sanartodontologia.com](https://sanartodontologia.com)

## Sobre el proyecto

Sitio multi-página enfocado en presentar los servicios de la clínica, su enfoque de odontología sistémica, un programa de turismo dental para pacientes internacionales, y en facilitar el agendamiento de citas por WhatsApp.

## Tecnologías

- HTML5
- CSS3 (diseño responsive, escala de grises, sin frameworks)
- JavaScript vanilla (sin dependencias)

No requiere build ni instalación de paquetes: es un sitio estático puro.

## Estructura

```
sanart-web/
├── index.html          → Inicio
├── tratamientos.html   → Servicios y tecnología
├── turismo.html        → Turismo dental (pacientes internacionales)
├── contacto.html       → Galería, formulario y ubicación
└── assets/
    ├── styles.css       → estilos compartidos (paleta en assets/styles.css :root)
    ├── script.js        → interacciones compartidas
    ├── logo-dark.png / logo-light.png
    └── fotos (.jpg)
```

## Funcionalidades

- 4 páginas independientes, con navegación y footer compartidos
- Diseño 100% responsive (móvil, tablet, escritorio)
- Menú con animación al hacer scroll, logo claro/oscuro automático
- Galería filtrable con lightbox (página Contacto)
- Página de Turismo Dental con planes para pacientes internacionales
- Formularios y botón flotante conectados directo a WhatsApp
- Animaciones de aparición al hacer scroll

## Cómo verlo en local

Abre `index.html` en el navegador, o sirve la carpeta con cualquier servidor estático:

```bash
npx serve .
```

## Editar colores

Todos los colores están centralizados en `assets/styles.css`, dentro de `:root` (primeras líneas del archivo). Cambia esas variables para ajustar la paleta en todo el sitio a la vez.

## Contacto

📍 Cra 42 # 3-30, Santiago de Cali, Colombia
📱 WhatsApp: +57 318 622 8700
📷 [Instagram](https://www.instagram.com/sanartodontologiaintegral)

---
© 2026 Sanart Odontología Integral

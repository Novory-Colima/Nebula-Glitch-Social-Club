# PROJECT RULES

## Nebula Glitch Social Club

> Development Rules & Engineering Standards

---

# Propósito

Este documento define las reglas obligatorias que deberán seguirse durante todo el desarrollo del proyecto.

Estas reglas tienen prioridad sobre cualquier preferencia del modelo.

Si alguna decisión contradice estas reglas, deberá solicitar aprobación antes de implementarse.

---

# Filosofía

Construir menos.

Pero construirlo extremadamente bien.

La prioridad nunca será terminar rápido.

La prioridad será construir un proyecto que pueda formar parte del portafolio de una agencia premium.

---

# Forma de Trabajo

El desarrollo se realizará por fases.

Nunca avanzar automáticamente.

Al finalizar cada fase deberá detenerse y esperar aprobación.

No asumir decisiones futuras.

No anticipar componentes.

---

# Principios de Ingeniería

Todo el proyecto deberá cumplir:

- Clean Architecture
- Clean Code
- SOLID cuando aplique
- Separation of Concerns
- DRY
- KISS
- Composition over Inheritance

---

# Organización

Toda responsabilidad deberá encontrarse claramente separada.

Ejemplos:

Componentes

Layouts

Animaciones

Utilidades

Tipos

Datos

Constantes

Assets

Nunca mezclar responsabilidades.

---

# Componentes

Cada componente deberá tener una única responsabilidad.

Los componentes deberán ser:

- pequeños
- reutilizables
- fáciles de mantener
- fáciles de extender

Evitar componentes enormes.

---

# Animaciones

Toda la lógica de GSAP deberá vivir fuera de los componentes.

Nunca mezclar presentación con motion.

Cada componente únicamente inicializará la animación correspondiente.

---

# JavaScript

Utilizar únicamente el JavaScript necesario.

Reducir al mínimo la hidratación.

Aprovechar Astro siempre que sea posible.

---

# Dependencias

No instalar nuevas dependencias sin una justificación técnica clara.

Antes de añadir una librería deberá responder:

¿Por qué es necesaria?

¿Qué ventaja aporta?

¿Por qué no puede resolverse con las herramientas existentes?

---

# TypeScript

Modo estricto.

Sin any.

Sin tipado implícito.

Interfaces claras.

Tipos reutilizables.

---

# Tailwind

Evitar clases repetidas.

Extraer patrones reutilizables.

Mantener consistencia visual.

No abusar de clases arbitrarias.

---

# Accesibilidad

Todo componente deberá ser accesible desde su primera implementación.

No dejar mejoras de accesibilidad para el final.

Incluir:

- navegación por teclado
- focus visible
- labels
- aria
- roles
- soporte para lectores de pantalla

cuando corresponda.

---

# Responsive

Mobile First.

No ocultar problemas.

Resolverlos.

Cada componente deberá adaptarse correctamente desde su entrega inicial.

---

# Performance

Cada decisión deberá favorecer:

menos JavaScript

menos Layout Shift

menos repaints

menos reflows

animaciones aceleradas por GPU

60 FPS estables

---

# Motion

Las animaciones deberán sentirse:

naturales

precisas

refinadas

Nunca exageradas.

Nunca caricaturescas.

Nunca utilizar animaciones porque "se ven bonitas".

Toda animación deberá mejorar la experiencia.

---

# Calidad

No generar código provisional.

No dejar TODOs.

No dejar comentarios indicando trabajo pendiente.

Cada componente deberá entregarse completamente terminado.

---

# Refactor

Si durante el desarrollo detectas una mejor arquitectura:

No implementarla inmediatamente.

Primero explica:

- el problema
- la solución
- ventajas
- impacto

Y espera aprobación.

---

# Convenciones

Mantener nombres consistentes.

Mantener estructura consistente.

Mantener estilo consistente.

No mezclar convenciones.

---

# Comunicación

Al finalizar cada fase entregar:

Resumen.

Decisiones tomadas.

Justificación técnica.

Posibles mejoras futuras.

Esperar aprobación.

---

# Prohibiciones

No improvisar funcionalidades.

No cambiar el alcance.

No inventar componentes.

No modificar la identidad visual.

No simplificar la experiencia.

No eliminar animaciones importantes por comodidad.

No introducir deuda técnica.

---

# Objetivo Final

El resultado deberá sentirse desarrollado por un equipo Senior especializado en experiencias digitales inmersivas.

Cada decisión deberá acercar el proyecto a ese objetivo.

Nunca alejarlo.

---

> "La excelencia no aparece al final del proyecto. Se construye en cada decisión."
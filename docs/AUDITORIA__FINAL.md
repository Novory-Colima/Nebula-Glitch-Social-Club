# Auditoría Final de Producción (Frontend)

Quiero que actúes como un equipo completo de revisión de calidad formado por:

* Senior Frontend Engineer
* UI/UX Designer
* Especialista en Accesibilidad (WCAG)
* Performance Engineer
* QA Tester
* Responsive Design Expert

Tu objetivo NO es hacer un rediseño completo ni cambiar la identidad visual del proyecto.

Tu trabajo consiste en dejar esta página con calidad de producción, corrigiendo absolutamente todos los detalles que encuentres.

---

# Filosofía de trabajo

Antes de modificar cualquier cosa:

* Comprende completamente la intención del diseño.
* Conserva la identidad visual.
* Conserva la personalidad del sitio.
* No reemplaces estilos únicamente por preferencia personal.
* Solo cambia aquello que realmente mejore la experiencia, la calidad o la robustez del sitio.

No quiero un reporte de problemas.

Quiero que los soluciones directamente.

Solo si una decisión es ambigua o cambia el comportamiento esperado, explícala brevemente.

---

# 1. Revisión visual

Analiza toda la interfaz buscando:

* inconsistencias visuales
* márgenes incorrectos
* paddings irregulares
* tamaños de texto poco consistentes
* jerarquía visual confusa
* exceso o falta de espacio
* alineaciones imperfectas
* elementos descentrados
* tarjetas con tamaños diferentes sin intención
* botones desproporcionados
* iconografía inconsistente
* colores mal aplicados
* problemas de contraste
* sombras exageradas
* bordes inconsistentes
* radios distintos entre componentes similares

Corrige todo aquello que mejore la calidad visual.

---

# 2. Responsive Design

La página debe funcionar perfectamente en:

* teléfonos pequeños
* teléfonos grandes
* tablets verticales
* tablets horizontales
* laptops
* monitores Full HD
* monitores 2K
* monitores 4K

Revisa especialmente:

* overflows horizontales
* contenido cortado
* imágenes deformadas
* textos que se salen
* grids rotos
* cards apiladas incorrectamente
* botones demasiado pequeños
* botones demasiado grandes
* navbar
* footer
* hero
* sliders
* carruseles
* timelines
* galerías
* secciones animadas

Todo debe adaptarse correctamente.

---

# 3. Navegación

Verifica absolutamente todos los enlaces.

Incluye:

Navbar.

Footer.

Botones.

CTA.

Cards.

Iconos.

Logos.

Links internos.

Anclas.

Comprueba que:

* todos funcionan
* llevan al lugar correcto
* no existen enlaces rotos
* no existen IDs incorrectos
* no existen anclas inexistentes

Si un enlace apunta a una sección inexistente:

* corrígelo si es un error.
* elimina el enlace si no aporta valor.
* crea la sección únicamente si es evidente que falta.

---

# 4. Consistencia del Navbar

Comprueba que:

* todas las secciones importantes aparecen en el navbar cuando tiene sentido.
* ninguna opción del navbar apunta a algo inexistente.
* los nombres coinciden con el contenido real.
* el orden tiene sentido.
* el comportamiento móvil funciona correctamente.
* el menú hamburguesa abre y cierra correctamente.
* el menú se puede cerrar al seleccionar una opción.
* el scroll hacia las secciones es correcto.

---

# 5. Acciones que aún no existen

Este proyecto es únicamente una pieza de portafolio.

No existe backend.

No existe autenticación.

No existe base de datos.

No existe e-commerce real.

No existe sistema de pagos.

No existe panel administrativo.

No existe envío de formularios reales.

Si algún botón intenta hacer algo que todavía no existe:

NO permitas que termine en una página de error.

En su lugar:

* muestra un modal elegante,
* un toast,
* una alerta personalizada,
* o un mensaje integrado con el diseño,

indicando que se trata de una demostración del portafolio.

El mensaje debe sentirse profesional y coherente con la identidad visual del sitio.

---

# 6. Accesibilidad

Revisa:

* navegación con teclado
* focus visible
* aria-labels
* aria-hidden
* labels de formularios
* contraste
* tamaño de fuentes
* orden semántico
* uso correcto de headings
* HTML semántico
* textos alternativos
* estados hover
* estados focus
* estados active

Corrige todo lo necesario.

---

# 7. Rendimiento

Optimiza:

* imágenes
* videos
* animaciones
* carga inicial
* lazy loading
* fuentes
* renderizado
* JavaScript innecesario
* CSS redundante
* re-renderizados
* listeners innecesarios
* imports sin usar

Mantén exactamente la misma apariencia.

---

# 8. Animaciones

Comprueba que:

* todas funcionan.
* ninguna produce saltos.
* ninguna causa lag.
* ninguna desaparece inesperadamente.
* funcionan al hacer scroll.
* funcionan tras redimensionar la ventana.
* funcionan también en móvil.

Si alguna animación perjudica el rendimiento, optimízala.

---

# 9. Recursos

Quiero que todos los recursos sean confiables.

Revisa:

* imágenes
* iconos
* videos
* texturas
* ilustraciones
* SVG

Siempre que sea posible:

* utiliza recursos locales.
* evita depender de imágenes externas.
* evita enlaces que puedan romperse.

Si algún recurso depende de una URL poco confiable:

* sustitúyelo por un recurso local equivalente.
* si no existe, genera uno adecuado o utiliza una alternativa libre que pueda almacenarse dentro del proyecto.

El proyecto debe poder funcionar completamente sin depender de recursos externos frágiles.

---

# 10. Código

Mejora el código:

* elimina duplicaciones
* simplifica lógica
* mejora nombres
* elimina código muerto
* elimina imports innecesarios
* mejora organización
* mejora legibilidad

Sin cambiar el comportamiento del sitio.

---

# 11. Experiencia de usuario

Detecta pequeños problemas de UX como:

* botones poco claros
* elementos que parecen clicables y no lo son
* animaciones demasiado lentas
* scroll incómodo
* transiciones inconsistentes
* formularios confusos
* CTAs poco visibles
* feedback insuficiente

Corrige todo aquello que mejore la experiencia.

---

# 12. Compatibilidad

Asegúrate de que la página funcione correctamente en los navegadores modernos.

Evita soluciones experimentales si existen alternativas estables.

---

# 13. Criterio general

Cada cambio debe responder a alguna de estas razones:

* mejora visual
* mejora de UX
* mejora de accesibilidad
* mejora de rendimiento
* mejora de robustez
* mejora de mantenibilidad

No hagas cambios únicamente porque "se ven diferentes".

---

# Criterio de finalización

No des por terminada la auditoría hasta haber recorrido toda la aplicación.

Verifica nuevamente todas las modificaciones realizadas para asegurarte de que ninguna corrección haya introducido nuevos problemas.

Antes de finalizar, realiza una segunda comprobación rápida de:

- Responsive
- Navbar
- Footer
- Navegación
- Accesibilidad
- Rendimiento
- Consola del navegador
- Errores de compilación
- Recursos rotos

Solo cuando todas esas verificaciones estén completas considera la auditoría finalizada.

# Resultado esperado

Quiero recibir el proyecto ya corregido.

No quiero únicamente una lista de observaciones.

Aplica directamente todas las mejoras posibles.

Al finalizar, entrega un breve resumen indicando:

* qué problemas importantes encontraste;
* qué cambios realizaste;
* qué limitaciones permanecen por tratarse de un sitio de demostración para portafolio.


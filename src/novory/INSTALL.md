# Instalación del Novory Experience Overlay System

Este proyecto contiene un sistema reutilizable de branding para las demos de Novory Studio.

Antes de modificar cualquier archivo:

1. Lee completamente:
   - brand-guidelines-Novory.md
   - novory.config.ts

2. Copia la carpeta src/novory al nuevo proyecto.

3. Analiza la estructura del proyecto Astro.

4. Importa únicamente los componentes necesarios.

5. Integra NovoryTopBar en el layout principal sobre la barra de navegación (navbar) e inmediatamente después de cerrar la etiqueta de NovoryTopBar agrega los componentes del layout.

6. Integra NovoryFloatingBadge en el layout principal como un componente flotante que se mantenga siempre visible incluso cuando se hace scroll en el mismo lugar.

7. Integra NovoryFinalCTA al final de la experiencia, después del footer.

8. No modifiques los componentes.

9. Si algún cambio es necesario, realiza únicamente adaptaciones de integración.

10. Nunca modifiques:
   - colores
   - tipografía
   - espaciados
   - animaciones
   - componentes

Todo eso pertenece al sistema de diseño de Novory.

La demo debe adaptarse al sistema.
Nunca el sistema a la demo.
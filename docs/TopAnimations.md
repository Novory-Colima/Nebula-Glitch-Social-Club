# Top 10 Animaciones y Efectos en Wander & Wonder

Este documento recopila las 10 mejores y más pulidas animaciones y efectos visuales desarrollados para la plataforma **Wander & Wonder**. Se detalla en qué consiste cada efecto, la técnica utilizada para lograrlo, el elemento o sección donde está aplicado y sugerencias para otros casos de uso en desarrollo web moderno.

---

## 1. Globo 3D Interactivo con Motor de Auto-Descubrimiento y Línea de Conexión SVG

### En qué consiste
Un globo terráqueo tridimensional translúcido y minimalista que rota suavemente sobre el lienzo de fondo. El globo contiene marcadores tridimensionales que representan historias fotográficas geolocalizadas. El usuario puede arrastrar y hacer girar el globo libremente con físicas de inercia y arrastre. Cuando la rotación posiciona a un marcador al frente de la cámara, el sistema detecta de forma autónoma su cercanía, destaca el punto y despliega una tarjeta de historia 2D flotante en el lateral de la pantalla. Una línea SVG elástica y dinámica calcula en tiempo real su trayectoria para conectar físicamente el marcador 3D del espacio virtual de WebGL con la esquina superior de la tarjeta 2D en el DOM convencional.

### Cómo se logró
* **Renderizado WebGL**: Desarrollado con **Three.js**, utilizando una esfera con material de malla de alambre (`MeshBasicMaterial` con `wireframe: true`) sobre un núcleo oscuro sólido para dar una sensación de opacidad y profundidad. Un halo exterior emula la atmósfera usando mezcla aditiva (`THREE.AdditiveBlending`).
* **Traducción de Coordenadas**: Las posiciones de las historias (Latitud y Longitud) se convierten matemáticamente a coordenadas cartesianas 3D ($X, Y, Z$) sobre el radio de la esfera.
* **Físicas de Inercia**: Durante el arrastre (eventos `mousedown` y `touchmove`), se calcula la velocidad del desplazamiento del cursor. Al soltar el globo, esta velocidad se reduce un `8%` por fotograma (`velocity * 0.92`), logrando una desaceleración orgánica y fluida.
* **Motor de Proximidad (Auto-Discovery)**: En cada fotograma, el script itera sobre los marcadores del globo, obtiene su posición global con `.getWorldPosition(vector)` y calcula su profundidad respecto a la cámara. Si la coordenada $Z$ del marcador es la más alta (más cercana al frente) y excede un umbral límite, activa la historia correspondiente.
* **Proyección 2D/3D (Línea SVG)**: Utiliza la función `vector.project(camera)` para proyectar el punto tridimensional del marcador en el plano bidimensional del visor (pantalla). Los valores obtenidos se aplican a los atributos `x1, y1` del elemento SVG `<line>`, mientras que `x2, y2` se sincronizan con las coordenadas en píxeles del elemento del DOM de la tarjeta, recalculándose dinámicamente en el bucle del renderizado.
* **Momento "Wow"**: Al revelarse la tarjeta, se gatilla un timeline de GSAP que genera un pulso expansivo translúcido tridimensional (`pulseMesh`) en el marcador y un suavizado con filtro de desenfoque (`blur(5px)` a `blur(0px)`) en la tarjeta HTML.

### Sección o elemento aplicado
Sección *Around the World* (`#around-the-world`), enlazando el contenedor tridimensional (`#globe-container`) y la tarjeta de datos flotante (`#dynamic-story-card`).

### Otros casos de uso recomendados
* Visualizaciones de datos geográficos interactivos (monitoreo de redes, envíos globales, sucursales corporativas).
* Gráficos interactivos de redes y nodos interconectados con anotaciones detalladas en tarjetas informativas.
* Selección interactiva de proyectos en un portafolio web en 3D.

---

## 2. Deformación por Inercia y Velocidad en Scroll ("Skew-on-Scroll")

### En qué consiste
A medida que el usuario navega a través del carrusel de memorias fotográficas horizontales, los contenedores de las imágenes experimentan una deformación o sesgado diagonal (*skew*) en su eje horizontal. La intensidad del sesgo es directamente proporcional a la velocidad del desplazamiento del scroll del usuario. En el momento en que el scroll se ralentiza o se detiene, la imagen recupera suavemente su alineación perpendicular de 90 grados, creando una ilusión interactiva de inercia, peso físico y comportamiento elástico.

### Cómo se logró
* **Monitoreo de Velocidad**: Se implementó `ScrollTrigger.create` de GSAP, extrayendo la velocidad del scroll actual mediante `self.getVelocity()`.
* **Tratamiento y Límite de Datos**: Para evitar deformaciones exageradas que rompan el diseño, la velocidad del scroll se divide por `-150` y se restringe a un rango estético de seguridad (de `-8` a `8` grados) con la función matemática `gsap.utils.clamp(-8, 8)`.
* **Modificación de Propiedades CSS**: Utiliza un objeto intermedio proxy `{ skew: 0 }` y la utilidad `gsap.quickSetter` para enlazar directamente el valor calculado con la propiedad CSS `skewX` del contenedor `.journey-image-wrapper`, evitando provocar repintados de diseño costosos en el navegador.
* **Efecto de Amortiguación**: Al detener el scroll, un tween de GSAP disminuye progresivamente el valor del proxy de vuelta a `0` empleando una curva de deceleración suave (`ease: "power3"` con una duración de `0.8` segundos).

### Sección o elemento aplicado
Los wrappers de imagen `.journey-image-wrapper` que contienen las postales fotográficas del carrusel horizontal de la sección *Journey* (`#journey`).

### Otros casos de uso recomendados
* Listados verticales largos de productos en tiendas virtuales (e-commerce) para hacer más dinámico el scroll rápido.
* Galerías de portafolios fotográficos o de diseño digital.
* Menús y carruseles con arrastre táctil (drag) en dispositivos móviles para reforzar la retroalimentación física.

---

## 3. Transición de Cierre de Ojos ("Eye-Closing Dark Dissolve")

### En qué consiste
Un efecto inmersivo y de transición cinemática que funciona como un umbral conceptual. Al avanzar en el scroll vertical, la página se fija en pantalla, interrumpiendo el desplazamiento normal de los contenidos. En ese punto, el fondo marfil de la página web se oscurece gradualmente hasta volverse un negro absoluto, imitando el acto de cerrar los ojos para adentrarse en la memoria. Durante esta oscuridad, emerge un texto reflexivo translúcido que brilla en blanco puro, permanece estático unos segundos para asegurar una lectura cómoda y finaliza desvaneciéndose hacia la nada.

### Cómo se logró
* **Anclaje de Scroll (Pinning)**: Se utilizó `ScrollTrigger` con la propiedad `pin: true` aplicada al contenedor `#memory-transition-screen`, extendiendo la duración del scroll por un `120%` de la altura del viewport (`end: "+=120%"`). Esto obliga al usuario a realizar scroll para experimentar la transición antes de poder avanzar.
* **Timeline de Color y Opacidad**: Un timeline de GSAP vinculado al scroll (`scrub: true`) se encarga de cambiar progresivamente la propiedad `backgroundColor` del contenedor del color marfil (`#F5F3EF`) al color negro medianoche (`#070F18`), mientras varía paralelamente la opacidad del contenedor de texto `#memory-intro-text` y cambia el color del título y subtítulo a blanco marfil (`#FAFAF8`).
* **Intervalo de Retención**: Para dar tiempo de lectura y evitar que el texto desaparezca de inmediato, se insertó un tween vacío al timeline (`tl.to({}, { duration: 0.8 })`). Esto mantiene el texto visible en blanco absoluto durante la mitad central del scroll del usuario.
* **Disolución**: En el último segmento de la animación, el texto se anima gradualmente a `opacity: 0`.

### Sección o elemento aplicado
Pantalla de transición intermedia `#memory-transition-screen` justo al inicio de la sección *Memories* (`#memories`).

### Otros casos de uso recomendados
* Divisiones de capítulos en narrativas web interactivas o de periodismo interactivo (scrollytelling).
* Cambios drásticos de sección temática (por ejemplo, pasar de una sección clara a una sección oscura).
* Introducciones o pantallas de carga en páginas web de diseño editorial o portafolios.

---

## 4. Desenfoque y Desplazamiento Tridimensional ("Memory Void Parallax")

### En qué consiste
En una dimensión de fondo negro infinito, varias fotografías con estética Polaroid flotan de forma desordenada a distintas alturas. Con el scroll del usuario, los elementos se desplazan a diferentes ritmos verticales (efecto de paralaje vertical tradicional) y se desvían de manera diagonal hacia el centro (efecto de paralaje horizontal). Además, cada foto realiza un efecto de enfoque fotográfico al aparecer: ingresan al viewport muy desenfocadas, convertidas a escala de grises y ampliadas, y al centrarse, adquieren nitidez completa, color vivo y dimensiones regulares.

### Cómo se logró
* **Cálculo de Dirección y Paralaque**: Cada bloque `.memory-fragment` posee un atributo personalizado `data-speed` de velocidad. A partir de este valor, se computa la traslación vertical `yPercent: (1 - speed) * 500`. La dirección horizontal se determina basándose en clases CSS (`left-` o `right-`): los elementos alineados a la izquierda se desplazan hacia la derecha, y los alineados a la derecha se mueven a la izquierda.
* **Interpolación de Filtros CSS**: En el bucle inicial, las imágenes se inician con valores de estilo de `filter: "blur(20px) grayscale(100%)"` y `scale: 1.25`.
* **Sincronización Asíncrona**: Con `ScrollTrigger` controlado por scroll (`scrub: true`), se configura un timeline de dos fases coordinadas: el movimiento de paralaje vertical/horizontal se desarrolla de forma uniforme a lo largo del 100% de la visualización, mientras que el revelado de enfoque, escala y color finaliza de forma temprana (en el primer 40% del recorrido) garantizando que el usuario visualice el contenido de forma clara y nítida.

### Sección o elemento aplicado
Tarjetas Polaroid individuales `.memory-fragment` dispersas de forma asimétrica en la sección *Memories* (`#memories`).

### Otros casos de uso recomendados
* Galerías de exhibición de productos, catálogos de arte o colecciones de fotografías artísticas.
* Sitios web de recuerdos de marcas, páginas de aniversarios o recopilatorios de hitos corporativos.
* Fondos de páginas interactivas donde se busque dar sensación de espacio tridimensional.

---

## 5. Inversión Dinámica de Colores e Intro Convergente de Collage

### En qué consiste
Una transición de impacto visual. Al hacer scroll vertical, el sitio fija la pantalla de fondo y el color del fondo (`#070F18`) se aclara y cambia gradualmente a un marfil cálido (`#F5F3EF`). Simultáneamente, los títulos de texto, subtítulos, etiquetas y los marcos de los contenedores ejecutan una inversión en su coloración, pasando de tonalidades claras a grises oscuros y negros medianoche para conservar el contraste. En este preciso instante, múltiples tarjetas de imágenes ocultas surgen velozmente desde fuera de los límites de la pantalla (las esquinas superior izquierda, superior derecha, etc.) con giros de rotación caóticos y una escala aumentada, colisionando y convergiendo hasta ensamblarse y ordenarse en una cuadrícula de collage estática.

### Cómo se logró
* **Inversión de Colores**: Un ScrollTrigger sobre `#dream` fija la pantalla durante tres viewports (`end: "+=300%"`). Con GSAP, se animan las propiedades `backgroundColor` del section y `color` de los textos de forma opuesta y sincronizada a través del marcador de alineación `<`.
* **Cálculo de Esquinas y Entrada**: Cada tarjeta `.collage-item` tiene asignada una posición de procedencia exterior según su índice en la estructura:
  * Primer tarjeta: Esquina superior izquierda (`x: -window.innerWidth`, `y: -window.innerHeight`).
  * Segunda tarjeta: Esquina superior derecha (`x: window.innerWidth`, `y: -window.innerHeight`).
  * Tercer tarjeta: Esquina inferior izquierda (`x: -window.innerWidth`, `y: window.innerHeight`).
  * Cuarta tarjeta: Esquina inferior derecha (`x: window.innerWidth`, `y: window.innerHeight`).
* **Alineación con Rotación**: Las tarjetas comienzan con una rotación aleatoria y distorsionada (ej. `rotation: (Math.random() - 0.5) * 60` y `scale: 1.5`). A medida que avanza el scroll, se animan hacia `x: 0, y: 0`, `rotation: 0`, y `scale: 1` con curvas de aceleración `power3.out`.
* **Micro-Magnetismo**: Una vez ensambladas, cada tarjeta reacciona al ratón del usuario; al pasar el cursor, la imagen interna se desplaza sutilmente hacia el ratón (`magnetX`, `magnetY`) y rota ligeramente (`magnetRotation`) mediante la función elástica `gsap.quickTo`.

### Sección o elemento aplicado
Sección *Dream* (`#dream`), abarcando el contenedor principal `#dream-pin-container` y las tarjetas `.collage-item`.

### Otros casos de uso recomendados
* Presentaciones de catálogos de servicios o características principales de un producto.
* Portadas para estudios creativos, agencias de publicidad o diseño gráfico.
* Grid interactivo de miembros de equipo o testimonios de clientes que se organizan al hacer scroll.

---

## 6. Desplazamiento y Desenfoque Cinemático de la Cámara en Hero

### En qué consiste
Un efecto cinemático que dota de dinamismo e interactividad a la primera sección del sitio web. Se compone de tres fases:
1. **Focus Pull (Enfoque Inicial)**: Al ingresar al sitio, el fondo está completamente borroso y el título principal está difuminado y oculto. En cuestión de 3 segundos, ambos elementos hacen un barrido de enfoque para volverse nítidos, atrayendo la atención del usuario hacia el texto central.
2. **Breathing Engine (Efecto de Respiración)**: Si el usuario permanece estático, la cámara flotante continúa activa de forma perpetua. El fondo y el título flotan sutilmente en direcciones opuestas e inclinaciones asimétricas de forma cíclica e infinita, imitando la vibración de una cámara de cine al hombro.
3. **Choreography Parallax (Paralaje de salida)**: Al empezar a hacer scroll hacia abajo, las capas del héroe reaccionan de manera distinta: el título e indicadores se hunden hacia arriba perdiendo nitidez y disolviéndose en una neblina difuminada, la atmósfera se desplaza más velozmente en paralaje inverso, y el fondo baja suavemente desvaneciéndose hacia la oscuridad.

### Cómo se logró
* **Enfoque inicial**: Orquestado mediante un timeline inicial de GSAP (`introTl`) que anima la propiedad CSS `filter: "blur(16px)"` a `blur(0px)` y la escala de `0.9` a `1.0` en la tipografía y la imagen de fondo de alto contraste.
* **Respiración perpetua**: Utiliza dos llamadas de bucle infinito e independiente `gsap.to` dirigidas a `.hero-camera` y `.hero-title` con parámetros `yoyo: true`, `repeat: -1` y una curva tipo onda sinusoidal `ease: "sine.inOut"`. Las duraciones son asimétricas (20 segundos para la cámara, 15 segundos para el título) para evitar que coincidan en el mismo punto geométrico y romper la repetitividad.
* **Paralaje en Scroll**: Se utiliza un `ScrollTrigger` que monitoriza la salida del héroe (`trigger: heroSection, start: "top top", end: "bottom top", scrub: 1`). En este timeline, se desplaza el título (`y: "-20vh"`), el manifiesto (`y: "-25vh"`), la atmósfera (`y: "-30vh"`) y la cámara (`y: "15vh"`) a diferentes velocidades y distancias, a la par que se aplica una interpolación hacia un desenfoque progresivo en los textos y un cambio de color de fondo del contenedor principal hacia un azul de transición oscuro (`#0D1B2A`).

### Sección o elemento aplicado
Sección principal de bienvenida *Hero* (`#hero`), incluyendo la cámara `.hero-camera`, la imagen nítida `.hero-bg-sharp`, el título principal `.hero-title` y el manifiesto.

### Otros casos de uso recomendados
* Encabezados cinemáticos en reportajes periodísticos visuales de alto presupuesto.
* Portadas de presentación para agencias de turismo de lujo, hoteles Boutique, o marcas premium.
* Secciones introductorias en portfolios interactivos de directores de arte, fotógrafos o cineastas.

---

## 7. Cursor con Retraso Físico (Lag) e Interacción Elástica

### En qué consiste
Un puntero interactivo personalizado que reemplaza al cursor predeterminado del sistema operativo para enriquecer los micropuntos de contacto. Consta de dos partes: un punto central de color crema que reacciona instantáneamente a la posición exacta del ratón y un anillo blanco exterior flotante que se desplaza de manera rezagada, persiguiendo al punto con un efecto amortiguado. Cuando el usuario sitúa el puntero sobre un enlace, botón u opción interactiva, el anillo se expande elásticamente a color blanco con opacidad, y el punto central desaparece en escala cero para destacar el elemento que se puede presionar.

### Cómo se logró
* **Seguimiento del Ratón**: Los movimientos de la mano del usuario se capturan mediante un escuchador global de `mousemove`. El punto interior se posiciona en las coordenadas exactas de forma instantánea mediante `gsap.set`.
* **Interpolación Lineal del Anillo (Lerp)**: Para lograr el efecto de suavidad rezagada, se utiliza el motor de renderizado `gsap.ticker.add`. En cada actualización de fotograma, se calcula la diferencia de distancia entre la posición actual del anillo y la posición del ratón. El anillo se mueve una fracción de esa distancia utilizando la fórmula: `const dt = 1.0 - Math.pow(1.0 - 0.15, gsap.ticker.deltaRatio()); cursorX += (mouseX - cursorX) * dt;`. El uso de `deltaRatio()` garantiza que la suavidad sea idéntica en pantallas de 60Hz, 120Hz o 144Hz.
* **Transición de Hover**: Mediante listeners de eventos `mouseenter` y `mouseleave` sobre enlaces e interactivos del DOM, GSAP realiza una transición rápida (`duration: 0.3`, `ease: "power2.out"`) para agrandar el anillo, volverlo opaco, y ocultar el punto central.

### Sección o elemento aplicado
Elementos globales del cursor personalizado (`#custom-cursor` y `#custom-cursor-dot`), interactuando con todas las etiquetas interactuables del sitio (`a, button, .cursor-pointer`).

### Otros casos de uso recomendados
* Experiencias web de gamificación interactiva o videojuegos en el navegador.
* Sitios web de agencias digitales creativas o de diseño web de vanguardia.
* Visores interactivos de productos en 3D donde la precisión visual y el diseño estético del puntero son clave.

---

## 8. Atracción Magnética de Proximidad en Botones

### En qué consiste
Los botones e iconos interactivos del sitio muestran un comportamiento magnético interactivo. Al aproximar el cursor a un botón, éste sale de su posición de diseño y se desliza con suavidad para alinearse hacia la ubicación exacta del cursor, como si fuera atraído por un imán. Al mover el cursor fuera del perímetro de acción del botón, éste se libera de la fuerza y retorna a su punto de origen con un rebote elástico oscilatorio de muelle.

### Cómo se logró
* **Cálculo de Proximidad**: Cada botón magnético escucha el evento `mousemove`. En la función de callback, se obtiene el rectángulo geométrico del botón mediante `getBoundingClientRect()`.
* **Cálculo del Desplazamiento**: Se calculan las coordenadas del centro del botón (ancho/2 y alto/2). Luego se mide la distancia del puntero con respecto a este punto medio.
* **Traslación Controlada**: El botón se desplaza en esa dirección en un factor de fuerza de `0.3` (30% de la distancia real entre el ratón y el centro) mediante un tween de GSAP suavizado con un ease `power3.out`.
* **Liberación y Rebote Elástico**: Al detectar el evento `mouseleave`, se lanza una animación que devuelve el botón a `x: 0`, `y: 0` empleando la curva de muelleo `elastic.out(1, 0.3)`. Esta curva de amortiguación genera un movimiento oscilatorio que deforma ligeramente el rebote antes de quedar estático, simulando físicas reales de muelle.

### Sección o elemento aplicado
Cualquier botón o enlace decorado con la clase CSS `.magnetic-button` (por ejemplo, botones principales de contacto, navegación o llamadas a la acción).

### Otros casos de uso recomendados
* Iconos de barras de navegación principales o menús flotantes.
* Flechas de paginación o mandos de control de carruseles.
* Iconos de redes sociales para incitar e incentivar al clic.

---

## 9. Desplazamiento Horizontal con Paralaje y Barra de Progreso Dinámica

### En qué consiste
El scroll vertical convencional del navegador se convierte en un movimiento puramente horizontal a lo largo de un carril de hitos o memorias cronológicas. A medida que el usuario hace scroll hacia abajo, la línea de tiempo de momentos viaja horizontalmente por la pantalla. Dentro de los contenedores de las imágenes, se observa un efecto de paralaje horizontal: las fotografías internas se desplazan a un ritmo más lento que sus marcos, provocando un efecto visual tridimensional ("ventana"). Paralelamente, los textos descriptivos de cada momento aparecen deslizándose y ganando opacidad cuando esa sección entra en la pantalla, mientras una barra de progreso en la parte superior se va rellenando indicando la porción recorrida.

### Cómo se logró
* **Traslación del Eje**: El bloque contenedor se fija con `ScrollTrigger` (`pin: true`, `scrub: 1`). Se calcula el ancho de desbordamiento horizontal total (`track.scrollWidth - window.innerWidth`) y se asocia a la traslación horizontal `x` de la pista de contenido (`.journey-track`).
* **Barra de Progreso**: Un elemento de barra superior `#journey-progress` tiene un tween asociado que escala su propiedad `width` de `0%` a `100%` sincronizado con la misma línea de tiempo de scroll vertical.
* **Scroll Horizontal Virtual (ContainerAnimation)**: Para activar las animaciones individuales (como los paralajes internos de las imágenes y la entrada de textos) sin depender del scroll vertical de la ventana del navegador, se utilizó la opción `containerAnimation` de GSAP. Esto permite que el sistema detecte cuándo una tarjeta entra en la pantalla lateralmente (ej. `start: "left right"`, `end: "right left"`) con respecto a la animación de traslación horizontal de la pista principal.

### Sección o elemento aplicado
Sección de hitos cronológicos *Journey* (`#journey`), enlazando el track `.journey-track` y los momentos individuales `.journey-moment`.

### Otros casos de uso recomendados
* Presentaciones de líneas de tiempo de empresas, infografías de historia o biografías cronológicas.
* Portafolios de diseño o fotografía de formato panorámico.
* Guías interactivas paso a paso o páginas de instrucciones detalladas (Walkthroughs).

---

## 10. Transición Ken Burns y Menú Tipográfico Interactivo

### En qué consiste
Una composición de dos paneles donde la tipografía interactúa de forma directa con la ambientación del sitio. En el panel izquierdo hay un menú de texto elegante de experiencias disponibles. En el panel derecho se ubica una galería fotográfica a pantalla completa. Cuando el usuario pasa el ratón o pulsa sobre una de las opciones del menú, la imagen de fondo asociada se desvanece sutilmente sobre la anterior (crossfade) e inicia una aproximación visual y paneo imperceptible de larga duración (efecto Ken Burns). De manera simultánea, la tipografía seleccionada se desplaza lateralmente, adquiere un estilo en cursiva estilizado y devela una descripción de texto oculta que se desliza desde un lado.

### Cómo se logró
* **Crossfade de Fondos**: El evento de activación (`mouseenter` o `click`) sobre un elemento del menú `.exp-item` inicia un fade de opacidad (`gsap.to(activeWrapper, { opacity: 1, duration: 1.5, ease: "power2.inOut" })`) mientras desvanece a opacidad 0 las imágenes inactivas.
* **Efecto Ken Burns**: En la imagen activa, se lanza un tween lento e ininterrumpido de escala (`fromTo` de `1.0` a `1.08`) durante 20 segundos (`duration: 20`) sin curvas de aceleración (`ease: "none"`), dando una sensación cinematográfica de cámara flotando sobre el paisaje. Al cambiar de imagen, los tweens activos de la imagen anterior se eliminan inmediatamente mediante `gsap.killTweensOf(img)`.
* **Choreography Typography**: El enlace de texto seleccionado se anima para cambiar su estilo visual (desplazamiento horizontal `x: 20`, cambio de color a blanco puro, y aplicación de estilo cursiva `fontStyle: 'italic'`). Al mismo tiempo, la caja de descripción asociada devela su contenido de forma suave (`opacity: 1`, `x: 0`).

### Sección o elemento aplicado
Sección *Experiences* (`#experiences`), vinculando la botonera de la izquierda `.exp-item` y los contenedores de las imágenes `.exp-image-wrapper`.

### Otros casos de uso recomendados
* Menús de navegación interactivos principales en sitios web artísticos o portfolios.
* Páginas de productos estrella en las que se deba seleccionar entre variaciones o funciones avanzadas de forma visual.
* Presentaciones interactivas de servicios para agencias creativas y tecnológicas.

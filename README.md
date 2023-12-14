# VortexSound
Nombre del proyecto: Vortex Sound
Integrantes:
- Joaquin Clarion
- Joel Chubrega
- Valeria Diaz
- Zacarias Chubrega
- Juan Dualibe

Descripción general del proyecto:
"Vortex Sound" es una página web que utiliza HTML, JavaScript y CSS para crear una experiencia de usuario atractiva. El proyecto tiene como objetivo principal permitir a los usuarios registrados cargar sus propios proyectos musicales (archivos de audio), permite escuchar los proyectos de otros usuarios y fomentar la interacción entre ellos. El propósito final es crear una comunidad de músicos independientes que puedan compartir y promocionar sus creaciones de manera global.
GitHub: https://github.com/Punkketo/VortexSound.git
Netlify: https://preeminent-chimera-5f5a67.netlify.app/
Procedimientos de Desarrollo
Herramientas
El desarrollo de "Vortex Sound" se realizó utilizando las siguientes herramientas:
•	Visual Studio Code: Editor de código utilizado para el desarrollo del proyecto.
Tecnologías
El proyecto hace uso de las siguientes tecnologías:
•	HTML5 (HyperText Markup Language 5): La última revisión del estándar de lenguaje de marcado utilizado para crear y estructurar contenido en la web. Introduce nuevas características y elementos para mejorar la semántica, el diseño y la funcionalidad de las páginas web.
•	CSS (Cascading Style Sheets): Un lenguaje de diseño utilizado en desarrollo web para controlar la apariencia y el formato de las páginas HTML. Permite definir estilos, como colores, fuentes y disposición, para mejorar el aspecto y la presentación de los elementos en un sitio web.
•	JavaScript: Un lenguaje de programación ampliamente utilizado en desarrollo web para agregar interactividad y dinamismo a las páginas HTML. Permite crear funciones y scripts que responden a eventos del usuario y modifican el contenido de la página en tiempo real.
Archivos
•	Favicon: Ícono de la página web que se muestra en la pestaña del navegador y en la barra de marcadores.
•	Archivos MP3: Música en el footer de la página de inicio (Home).
•	Archivos JPG: Imagen de fondo de todas las páginas.
APIs
El proyecto utiliza las siguientes APIs:
•	API de Font Awesome: Se utiliza para cargar íconos personalizados para su página web. Esta API permite la inclusión de íconos de Font Awesome en su sitio. Enlace a la API
•	API de Google Fonts: Se utiliza para cargar fuentes personalizadas para el diseño de texto en su página web. Enlace a la API
•	API de Boxicons: Se utiliza para cargar íconos vectoriales de Boxicons en su página web. Enlace a la API
Planificación
Esta planificación proporciona una guía paso a paso para el desarrollo del proyecto de diseño web "Vortex Sound," desde la definición inicial hasta la documentación final del proyecto. Cada etapa es crucial para asegurarse de que la página web cumpla con los objetivos y estándares de calidad establecidos.
1. Definición del Proyecto
•	Establecer los objetivos y requisitos del proyecto.
•	Definir el alcance, funcionalidades y características clave.
•	Identificar el público objetivo y la propuesta de valor.
2. Configuración del Repositorio
•	Crear un repositorio en GitHub para el proyecto.
•	Establecer los branchs para cada miembro del equipo.
3. Estructura de Archivos HTML5
•	Diseñar la estructura de las páginas HTML5.
•	Crear páginas para home, registro, login y términos y condiciones.
•	Organizar el contenido y enlaces internos.
4. Diseño con CSS
•	Diseñar estilos CSS para lograr una apariencia visual atractiva.
•	Asegurar la coherencia de la marca en toda la página.
5. Funcionalidades con JavaScript
•	Agregar interactividad y funcionalidades a la página web con JavaScript.
•	Desarrollar scripts para botones, formularios o elementos dinámicos.
•	Validar y optimizar el código JavaScript.
6. Pruebas y Optimización
•	Comprobar la funcionalidad de la página en diferentes navegadores y dispositivos.
7. Documentación
•	Crear documentación detallada que incluya:
•	Descripción del proyecto y sus objetivos.
•	Diagrama de la estructura de archivos y carpetas.
•	Descripción de los estilos CSS utilizados.
•	Funciones y scripts JavaScript implementados.
•	Detalles de la configuración del repositorio de GitHub.
•	Registro de problemas y soluciones encontradas durante el desarrollo.
•	Instrucciones para futuras actualizaciones y mantenimiento.
8. Retos y Desafíos a Desarrollar
•	Configurar un flujo de trabajo de control de versiones en GitHub.
•	Implementar un diseño web responsive para adaptarse a diferentes dispositivos.
•	Medir los tiempos de carga y realizar optimizaciones de rendimiento.
•	Asegurarse de que la página sea completamente responsive.

Estructura de Carpetas
VortexSound/
│
├── index.html (Página de inicio)
├── login.html (Espacio para iniciar sesión de usuario)
├── register.html (Botón para registro de nuevos usuarios)
├── terms.html (Términos y condiciones de uso de la página y sus contenidos)
│
├── audio/ (Archivos de audio y reproductor)
│
├── css/
│   ├── main.css (Estilos principales)
│   ├── nav.css (Estilos de navegación)
│   ├── responsive.css (Estilos de elementos responsivos)
│   ├── sections.css (Estilos de secciones)
│
├── favicon/
│   ├── galaxy.ico (Favicon/logo)
│
├── img/
│   ├── 5.jpg (Background)
│
├── js/
│   ├── audio.js (Funcionalidades relacionadas con audio)
│   ├── carousel.js (Funcionalidades de carrusel)
│   ├── login.js (Funcionalidades de inicio de sesión)
│   ├── menu.js (Funcionalidades de menú)

Descripción de hojas de estilos CSS
Hoja de Estilo Principal (main.css)
•	Valores Globales: Se establecen valores globales que afectan a todos los elementos de la página, como márgenes, rellenos, cajas ajustadas al modelo de caja, y selección de fuentes. Se utilizan dos fuentes principales: 'ADLaM Display' y 'Josefin Sans'. También se establece un fondo animado.
•	Estilo de la Página: Se aplica un fondo de imagen de manera que la página tenga un aspecto atractivo y se adapte a diferentes resoluciones de pantalla. Además, se definen estilos para la sección de inicio (clase .home), que incluyen colores de fondo, padding, sombras y tamaño de fuente.
•	Animación de Fondo: Se incluye una animación de fondo en la página principal (@keyframes zoominandout) que proporciona un efecto visual interesante de zoom.
•	Estilo del Cuerpo (body): Se establecen algunos valores para el cuerpo de la página, como márgenes y altura máxima y ancho máximo.
•	Estilo del Menú de Navegación (nav): Se definen los estilos para la barra de navegación que se encuentra en todas las páginas. Incluye colores de fondo, disposición de elementos y efectos de gradiente.
•	Estilo de Formulario de Registro y Login: Se establecen los estilos para los formularios de registro y inicio de sesión. Esto incluye colores de fondo, márgenes, tamaños de fuente, y efectos de sombra.
•	Estilo de Botones y Enlaces: Se definen los estilos para los botones de registro, los enlaces, y el botón "remember me". Esto incluye colores de fondo, bordes, fuentes y efectos de sombra.
•	Estilo del Footer: Se describe el estilo del pie de página (footer) que incluye colores, alineación de texto y márgenes.
•	Estilo del Reproductor de Audio: Se establecen los estilos para el reproductor de audio en la página, incluyendo colores de fondo y estilos de botones.
•	Estilo de los Botones de Reproducción de Audio: Se describen los estilos de los botones de reproducción de audio, incluyendo colores de fondo y efectos de escala al hacer clic.
•	Estilo del Texto "Create an Account": Se establecen los estilos para el texto "Create an Account" que incluye un fondo degradado y bordes.
•	Estilo de la Casilla de Verificación "Remember Me": Se describen los estilos para la casilla de verificación "Remember Me", incluyendo colores de fondo y efectos al hacer clic.
Hoja de Estilo para la Barra de Navegación (nav.css)
La hoja de estilo nav.css se centra en los estilos específicos relacionados con la barra de navegación (navbar) de la página web "Vortex Sound". A continuación, se describen los aspectos clave de esta hoja de estilo:
•	Estilo del Icono del Logo (logoicon): Define los estilos para el icono del logotipo en la barra de navegación. Incluye propiedades para el tamaño (height y width) y una animación de giro infinita (@keyframes giroh) que rota el icono 360 grados.
•	Estilo del Texto del Logo (logotext): Establece los estilos del texto del logotipo, que se encuentra en la barra de navegación. Esto incluye la alineación del texto, tamaño de fuente, fuente en gradiente y efecto de texto relleno transparente.
•	Estilo de la Lupa (lupa): Define los estilos de la lupa de búsqueda, que se utiliza en la barra de navegación. Esto incluye el cursor, tamaño, forma, posición y fondo en gradiente.
•	Estilo del Botón "Get Started" (action_btn): Establece los estilos para el botón "Get Started". Esto incluye colores de fondo, tamaño, bordes redondeados, fuente en gradiente y efectos de escala al pasar el mouse.
•	Estilo de la Barra de Búsqueda (searchbar): Define los estilos de la barra de búsqueda que se encuentra en la barra de navegación. Esto incluye el borde, posición, color de fondo, sombra, tamaño de fuente y efecto de escala.
•	Estilo del Icono del Menú (menu-icon): Establece los estilos para el icono del menú de navegación. Incluye el tamaño del icono, cursor y color de fondo en gradiente.
•	Estilo del Menú Desplegable (menu): Define los estilos para el menú desplegable que aparece al hacer clic en el icono del menú. Esto incluye colores de fondo, posición, bordes redondeados, sombra y espacio interno.
•	Estilo de los Elementos del Menú (menu li): Establece los estilos para los elementos del menú desplegable. Esto incluye el espaciado y la alineación del texto.
En resumen, la hoja de estilo nav.css se enfoca en la apariencia y el comportamiento de la barra de navegación de la página web "Vortex Sound", garantizando que los elementos sean atractivos y funcionales.
Hoja de Estilo para la Adaptabilidad (responsive.css)
La hoja de estilo responsive.css se encarga de garantizar que la página web "Vortex Sound" sea adaptable y responda de manera adecuada a diferentes tamaños de pantalla. A continuación, se describen los aspectos clave de esta hoja de estilo en relación con las consultas de medios (media queries):
Consulta de Medios para Pantallas Pequeñas (Máximo 667px)
•	Estilo del Cuerpo (body): Ajusta el margen, el relleno y la altura del cuerpo para aprovechar el 100% del alto de la ventana (viewport height) en pantallas pequeñas.
•	Estilo de la Barra de Navegación (nav): Ajusta el ancho, distribución y alineación de la barra de navegación. El botón "Get Started" (action_btn) se oculta, y el icono del menú (menu-icon) se ajusta en tamaño y posición. El icono del logo (logoiconn) también se modifica.
•	Estilo de la Barra de Búsqueda (searchbar-container): Oculta la barra de búsqueda en pantallas pequeñas.
•	Estilo del Pie de Página (footer): Fija el pie de página en la parte inferior de la pantalla y ajusta su posición.
•	Estilo del Menú Desplegable (ul.menu): Ajusta la posición y el ancho del menú desplegable.
•	Estilo de los Elementos del Menú (ul li a): Reduce el tamaño de fuente de los elementos del menú.
Consulta de Medios para Pantallas con Ancho Máximo de 1080px
•	Estilo de la Lupa (lupa): Modifica la apariencia de la lupa, ajustando su tamaño y posición.
•	Estilo de la Barra de Búsqueda (searchbar): Ajusta la posición y el ancho de la barra de búsqueda para adaptarse a pantallas más anchas.
•	Estilo del Pie de Página (footer): Ajusta la posición del pie de página para que sea relativo en lugar de fijo.
•	Estilo del Botón "Get Started" (action_btn): Se oculta en pantallas con ancho máximo de 1080px.
Consulta de Medios para Pantallas Pequeñas (Ancho de 820px a 1180px)
•	Estilo de la Barra de Búsqueda (searchbar-container): Oculta la barra de búsqueda en este rango de ancho de pantalla.
•	Estilo del Menú Desplegable (ul.menu): Ajusta la posición y el ancho del menú para centrarlo en el área designada.
En resumen, la hoja de estilo responsive.css asegura que la página web "Vortex Sound" se adapte de manera óptima a diversas pantallas, manteniendo la usabilidad y la experiencia del usuario en diferentes dispositivos. Las consultas de medios permiten aplicar estilos específicos en función del tamaño de la pantalla, optimizando la presentación de la página.
Hoja de Estilo para Secciones (secciones.css)
Estilo para Secciones Principales (section1, section2, section3, section4, section5)
•	display: block;: Define que las secciones sean bloques con un comportamiento de bloque estándar.
•	color: white;: Establece el color del texto en las secciones como blanco.
•	background-color: #3b005d;: Define un color de fondo sólido para las secciones.
•	background: linear-gradient(...): Aplica un fondo de degradado a las secciones con colores específicos.
•	margin-bottom: 20px;: Agrega un margen inferior a las secciones para espaciarlas entre sí.
•	opacity: 70%;: Reduce la opacidad de las secciones al 70%.
Estilo para Títulos de Sección (about, mission, comunity, descubre, plataform)
•	color: white;: Define el color del texto de los títulos de sección como blanco.
•	text-align: center;: Centra el texto en el título de la sección.
•	margin-bottom: 10px;: Agrega un pequeño margen inferior a los títulos de sección.
•	margin-top: 10px;: Agrega un pequeño margen superior a los títulos de sección.
Estilos para el Slide (slider)
•	position: relative;: Establece la posición relativa para el slider.
•	width: 100%;: Hace que el slider ocupe el 100% del ancho disponible.
•	height: 370px;: Define la altura del slider en 370 píxeles.
•	overflow: auto;: Agrega una barra de desplazamiento en caso de que el contenido del slider sea más grande que su área visible.
Estilo para las Cajas de Contenido (item)
•	position: absolute;: Define la posición absoluta para las cajas de contenido.
•	width: 25%;: Establece que las cajas ocupen el 25% del ancho disponible.
•	height: 90%;: Define la altura de las cajas en un 90% del contenedor.
•	text-align: justify;: Justifica el texto dentro de las cajas.
•	border-radius: 10px;: Agrega bordes redondeados a las cajas.
•	padding: 20px;: Agrega relleno a las cajas para separar el contenido del borde.
•	transition: 0.5s;: Establece una transición suave de medio segundo para los cambios de estilo.
•	left: calc(50% - 12%);: Centra horizontalmente las cajas.
•	margin-bottom: 300px;: Agrega un margen inferior grande para separar las cajas.
Estilo para el Pie de Página (section p)
•	line-height: 18px;: Establece la altura de línea del texto en 18 píxeles.
Estilo para Botones del Slider (next, prev)
•	position: absolute;: Define la posición absoluta para los botones del slider.
•	top: 50%;: Centra verticalmente los botones en su contenedor.
•	color: rgba(207, 130, 238, 0.727);: Define el color del texto de los botones.
•	padding: 1vh;: Agrega un relleno vertical a los botones.
•	background-color: #3b005d;: Establece un color de fondo para los botones.
•	border: 1px solid #3b005d;: Agrega un borde a los botones.
•	font-size: large;: Define el tamaño de fuente grande.
•	font-family: monospace;: Establece una fuente monoespaciada.
•	font-weight: bold;: Define el peso de fuente como negrita.
•	left: 10%;: Posiciona el botón "prev" a la izquierda y el botón "next" a la derecha.
•	border-radius: 20px;: Agrega bordes redondeados a los botones.
•	border-style: solid;: Establece el estilo del borde como sólido.
•	border-color: #1d012d;: Define el color del borde.
•	background: linear-gradient(...): Aplica un fondo de degradado a los botones con colores específicos.
•	hover: Define un cambio de estilo cuando los botones se colocan sobre ellos.
Estilo para Términos y Condiciones (terms-and-conditions)
•	width: 50%;: Establece el ancho de las secciones de términos y condiciones al 50%.
•	background: linear-gradient(...): Aplica un fondo de degradado a las secciones de términos y condiciones con colores específicos.
•	padding: 30px;: Agrega un relleno a las secciones.
•	position: relative;: Establece una posición relativa para las secciones de términos y condiciones.
•	display: flex;: Aplica un modelo de caja flexible para el contenido.
•	flex-direction: column;: Define una dirección de columna para los elementos flexibles.
•	flex-wrap: nowrap;: Evita que los elementos flexibles se envuelvan.
•	border-radius: 15px;: Agrega bordes redondeados a las secciones.
•	box-shadow: 12px 20px 37px #290038;: Agrega una sombra a las secciones.
•	overflow: auto;: Agrega una barra de desplazamiento si el contenido es más grande que el área visible.
•	left: 25%;: Desplaza las secciones hacia la derecha en un 25%.
•	p: Aplica estilos de párrafo dentro de las secciones de términos y condiciones.
Estilo para el Pie de Página de Términos y Condiciones (footer-terms)
•	position: relative;: Establece una posición relativa para el pie de página de términos y condiciones.
•	width: 100%;: Hace que el pie de página ocupe el 100% del ancho disponible.
•	margin-top: 5vh;: Agrega un margen superior al pie de página.
•	background-color: #3b005d;: Define un color de fondo para el pie de página.
•	color: white;: Establece el color del texto en el pie de página.
•	padding: 2vh;: Agrega un rell

Descripción de hojas de funcionalidad de java script

Hoja de Estilo para funcionalidades (audio.js)

1.	Obtención de elementos del HTML: Al principio del código, se obtienen varios elementos HTML utilizando sus identificadores (IDs). Estos elementos se utilizan más adelante en el script:
•	miAudio: Se obtiene un elemento de audio con el ID "miAudio". Esto se usa para controlar el reproductor de audio en la página.
•	audioElement, sourceElement, temaAnteriorButton, temaSiguienteButton: Estos elementos se utilizan para controlar el reproductor de audio y los botones de tema anterior y siguiente.
2.	Lista de temas: Se define una lista de temas (archivos de audio) como una matriz de rutas relativas a los archivos de audio. Cada elemento en la matriz representa la ubicación de un archivo de audio.
3.	Índice del tema actual: Se inicializa la variable indiceTemaActual en 0. Esta variable se utiliza para llevar un seguimiento del tema que se está reproduciendo actualmente.
4.	Función para cargar y reproducir el tema actual: La función cargarTemaActual() se utiliza para cambiar el tema que se está reproduciendo. Carga el archivo de audio correspondiente al indiceTemaActual, lo carga en el reproductor de audio y comienza a reproducirlo.
5.	Manejo del evento 'ended': El código agrega un event listener al elemento de audio para el evento 'ended'. Cuando un tema de audio termina de reproducirse, este evento se activa. La función manejadora de este evento incrementa el indiceTemaActual para reproducir automáticamente el siguiente tema en la lista. Si se llega al final de la lista, vuelve al primer tema.
6.	Manejo de clic en botones de tema anterior y siguiente: Se agregan event listeners a los botones de "tema anterior" y "tema siguiente". Cuando se hace clic en uno de estos botones, se cambia el indiceTemaActual y se carga el nuevo tema actual.
7.	Cargar el primer tema al cargar la página: Al final del código, se llama a la función cargarTemaActual() para cargar y reproducir el primer tema de la lista cuando se carga la página.
En resumen, este script permite a los usuarios reproducir una lista de temas musicales y navegar entre ellos con botones de "tema anterior" y "tema siguiente". Cuando un tema termina, se reproduce automáticamente el siguiente tema en la lista.
Hoja de Estilo para funcionalidades (carousel.js)

1.	Selección de elementos HTML: Al principio del código, se seleccionan los elementos HTML relevantes:
•	items: Selecciona todos los elementos con la clase "item" dentro del elemento con la clase "slider". Estos elementos representan las imágenes en el carrusel.
•	next y prev: Seleccionan los botones con los IDs "next" y "prev", que permiten navegar a la siguiente y anterior imagen, respectivamente.
2.	Variable active: Se inicializa una variable llamada active en 4. Esta variable lleva un seguimiento de la imagen activa en el carrusel. Inicialmente se establece en 4, lo que significa que la quinta imagen (índice 4) se mostrará como la imagen activa.
3.	Función loadShow(): Esta función se encarga de cargar y mostrar el efecto del carrusel. Hace lo siguiente:
•	Establece la configuración para la imagen activa, incluyendo la transformación, el índice Z, el filtro y la opacidad.
•	Configura las imágenes siguientes en el carrusel con una transformación que las desplaza hacia la derecha y reduce su escala.
•	Configura las imágenes anteriores en el carrusel con una transformación que las desplaza hacia la izquierda y reduce su escala.
4.	Llamada a loadShow(): Después de definir la función loadShow(), se llama a esta función para cargar el carrusel inicialmente y mostrar la imagen activa y las imágenes adyacentes.
5.	Configuración de eventos de botones: Los botones de "Siguiente" y "Anterior" tienen eventos click asociados. Cuando se hace clic en el botón "Siguiente", la variable active se actualiza para mostrar la siguiente imagen en el carrusel. Si se llega al final del carrusel, vuelve al principio. De manera similar, cuando se hace clic en el botón "Anterior", se actualiza la variable active para mostrar la imagen anterior en el carrusel. Si se está en la primera imagen, retrocede al final.
En resumen, este código JavaScript permite crear un carrusel de imágenes con efectos de desplazamiento y escala al navegar entre ellas. Los botones de "Siguiente" y "Anterior" controlan la navegación entre las imágenes.
Hoja de Estilo para funcionalidades (login.js)

•	Selecciona elementos HTML:
•	loginForm: Representa el formulario de inicio de sesión.
•	usernameInput: Representa el campo de entrada del nombre de usuario.
•	passwordInput: Representa el campo de entrada de la contraseña.
•	usernameValidation: Representa un elemento HTML para mostrar mensajes de validación del nombre de usuario.
•	passwordValidation: Representa un elemento HTML para mostrar mensajes de validación de la contraseña.
•	Agrega un evento al formulario:
loginForm.addEventListener('submit', function (event) {
// Código de validación aquí
});
•	Se agrega un evento de escucha para el evento de envío (submit) del formulario. Cuando el usuario intenta enviar el formulario, se ejecutará el código de validación.
•	Validación de campos:
•	Para el campo de nombre de usuario:
•	Comprueba si el valor del campo (usernameInput.value) está vacío o contiene solo espacios en blanco.
•	Si el campo está vacío, muestra un mensaje de validación, agrega una clase error-field para resaltar el campo y evita el envío del formulario (event.preventDefault()).
•	Si el campo no está vacío, oculta el mensaje de validación, elimina la clase error-field y permite el envío del formulario.
•	Para el campo de contraseña (similar al campo de nombre de usuario).
Hoja de Estilo para funcionalidades (menu.js)

El archivo menu.js contiene una función denominada toggleMenu(), que se encarga de gestionar la visibilidad del menú en la página. Cuando se llama a esta función, selecciona un elemento HTML con la clase CSS menu utilizando el método document.querySelector().
Luego, alterna la presencia de la clase active en el elemento del menú mediante classList.toggle().
Esto permite mostrar u ocultar el menú al activar o desactivar la clase active.
Hoja de Estilo para funcionalidades (register.js)

El archivo register.js contiene una función llamada validateForm(), que se utiliza para validar un formulario de registro en una página web. La función realiza varias comprobaciones para garantizar que los datos ingresados por el usuario sean válidos antes de permitir que se envíen al servidor. Aquí está una descripción de las validaciones que realiza:
•	Verificación de campos obligatorios: La función obtiene los valores de los campos del formulario, incluyendo el nombre de usuario, dirección de correo electrónico, contraseña, contraseña de verificación y un checkbox de aceptación de términos. Luego, verifica si alguno de estos campos es nulo o está en blanco. Si uno o más campos obligatorios no están completos, se muestra una alerta y se evita que el formulario se envíe.
•	Coincidencia de contraseñas: La función verifica si las contraseñas ingresadas en los campos de "contraseña" y "verificar contraseña" coinciden. Si las contraseñas no coinciden, se muestra una alerta y se evita que el formulario se envíe.
•	Aceptación de términos y condiciones: Se verifica si el checkbox de aceptación de términos y condiciones está marcado. Si no se marca este checkbox, se muestra una alerta y se evita que el formulario se envíe.
Si todas las validaciones pasan exitosamente, lo que significa que todos los campos obligatorios están completos, las contraseñas coinciden y se ha aceptado los términos y condiciones, la función devuelve true, lo que permite que el formulario se envíe al servidor.

Complicaciones y Problemas en el Proceso de Diseño
A lo largo del proceso de diseño y desarrollo del sitio web, surgieron algunas complicaciones y problemas que es importante destacar. Estos desafíos proporcionaron oportunidades para aprender y mejorar en futuros proyectos.
1. Problemas de Responsividad en Home:
•	Descripción: Durante el desarrollo del sitio web, se encontraron dificultades en la implementación de la responsividad en la página de inicio (Home). A pesar de los esfuerzos iniciales por garantizar que el sitio se viera bien en diferentes dispositivos, surgieron problemas inesperados.
•	Impacto: La falta de responsividad puede afectar negativamente la experiencia del usuario en dispositivos móviles o pantallas más pequeñas. Esto podría llevar a una reducción en la usabilidad y la satisfacción del usuario.
•	Solución Propuesta: Para abordar este problema, se puede realizar una revisión y ajuste del diseño y las hojas de estilo para garantizar que el sitio web se adapte correctamente a diferentes tamaños de pantalla y dispositivos.
2. Problemas en el Manejo de GitHub:
•	Descripción: Hubo dificultades iniciales en la gestión de los repositorios y las ramas en GitHub. La colaboración se realizó en un solo branch debido a la naturaleza de las interacciones en tiempo real mediante videollamadas en Discord.
•	Impacto: La gestión inadecuada de las ramas en GitHub puede dificultar el seguimiento de las contribuciones individuales y la implementación de buenas prácticas de desarrollo.
•	Solución Propuesta: Para futuros proyectos, se puede establecer una estructura de ramas clara y seguir prácticas recomendadas para la colaboración en GitHub. Esto incluye la creación de ramas específicas para tareas o características y la revisión de solicitudes de extracción.
3. Problemas de Carga del Background en Visual Studio Code:
•	Descripción: Se experimentaron dificultades al cargar correctamente el fondo de la página cuando se utiliza la función "Run --> Start Debug" en Visual Studio Code. Sin embargo, la página se carga correctamente en Netlify y cuando se inicia mediante la función "Open with Live Server" en Visual Studio Code.
•	Impacto: Esta discrepancia puede causar confusión y dificultades al probar y depurar el sitio web localmente, lo que podría ralentizar el proceso de desarrollo.
•	Solución Propuesta: Para abordar este problema, se puede investigar la causa subyacente de la discrepancia y garantizar que el fondo se cargue de manera consistente en todas las plataformas. Esto puede requerir ajustes en la configuración de Visual Studio Code o en el servidor de desarrollo.
En resumen, a lo largo del proceso de diseño y desarrollo del sitio web, es común encontrar desafíos y problemas técnicos. Identificar y abordar estos problemas de manera efectiva es fundamental para mejorar la calidad del trabajo entregado y garantizar una experiencia positiva para los usuarios finales. Cada desafío presenta oportunidades de aprendizaje y mejora en futuros proyectos.
Contribución
Si deseas contribuir al proyecto, puedes seguir estos pasos:
1.	Haz un fork del repositorio.
2.	Clona el repositorio a tu máquina local.
3.	Crea una rama para tu contribución.
4.	Realiza tus cambios y asegúrate de seguir las guías de estilo.

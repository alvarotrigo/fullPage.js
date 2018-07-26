# fullPage.js

![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.gif?v=2)

<p align="center">
  <a href="https://github.com/alvarotrigo/fullPage.js#fullpagejs">English</a> |
  <span>Español</span> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#fullpagejs">Pусский</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese#fullpagejs">中文</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs">한국어</a>
</p>

---

![fullPage.js version](http://img.shields.io/badge/fullPage.js-v3.0.2-brightgreen.svg)
[![License](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/fullpage.js/badge?style=rounded)](https://www.jsdelivr.com/package/npm/fullpage.js)
&nbsp;&nbsp; **|**&nbsp;&nbsp; *7Kb gziped* &nbsp;&nbsp;**|**&nbsp;&nbsp; *Creado por [@imac2](https://twitter.com/imac2)*

- [Vista previa - demostración](https://alvarotrigo.com/fullPage/)
- [Template de Wordpress](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [Extensiones de fullpage.js](https://alvarotrigo.com/fullPage/extensions/)
- [Preguntas frecuentes](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)

---

Una sencilla librería Javascript para la creación de páginas web con desplazamiento a pantalla completa. También conocida popularmente como "single page websites" o "onepage sites".
Permite crear un desplazamiento a pantalla completa, asi como añadir diapositivas horizontales en las secciones.

- [Introducción](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#introducción)
- [Compabitilidad](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#compatibilidad)
- [Licencia](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#licencia)
- [Uso](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#uso)
  - [Crear enlaces a secciones y diapositivas](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#crear-enlaces-a-secciones-y-diapositivas)
  - [Crear secciones más pequeñas o más grandes](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#crear-seciones-más-pequenas-o-más-grandes)
  - [Clases de estado añadidas por fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#classes-de-estado-añadidas-por-fullpagejs)
  - [Carga pasiva de elementos multimedia](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#carga-pasiva-de-elementos-multimedia)
  - [Autoplay de elementos multimedia](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#autoreproducir-elementos-multimedia)
  - [Uso de extensiones](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#uso-de-extensiones)
- [Opciones](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#opciones)
- [Metodos](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#métodos)
- [Callbacks](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#callbacks)
- [Reportar problemas](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#reportando-problemas)
- [Contribuir a fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#contribuir-con-fullpagejs)
- [Changelog](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#changelog)
- [Build tasks](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#build-tasks)
- [Recursos](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#recursos)
- [Quien usa fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#quién-usa-fullpagejs)
- [Donaciones](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish/#donaciones)

## Introducción
Las sugerencias serán más que bienvenidas, no solamente por pedidos de nuevas funcionalidades, sino también mejoras en el código.
¡Hagamos de fullPage.js una gran librería para facilitar la vida de las personas!

## Compatibilidad
fullPage.js es totalmente compatible y funcional con cualquier navegador moderno, así como en alguno de los antiguos tales como Internet Explorer 9 u Opera 12.
Funciona con navegadores que soportan CSS3 tanto en aquellos que no lo soportan, haciéndolo ideal incluso con navegadores antiguos.
También provee soporte táctil en dispositivos móviles, tabletas y ordenadores con pantalla táctil.

Gracias a [Browserstack](https://www.browserstack.com/) por dar soporte a fullPage.js.

### Licencia

#### Commercial license
Si quieres usar fullpage para desarrollo de páginas comerciales, templates, themes, proyectos y aplicaciones, la licencia Comercial es la licencia apropiada para ti. Con esta opción, tu código se mantendrá propietario. Es decir, no tendrás que cambiar la liencia del código de tu aplicación/web/theme etc a la licencia GPL de código abierto.
[[Compra la licencia comercial]](https://alvarotrigo.com/fullPage/pricing/)

#### Open source license
Si estás creando una aplicación de código libre bajo una licencia compatible con la liencia de [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), podrás hacer uso de fullPage bajo los términos de la licencia GPLv3.
[Read more about fullPage's license](https://alvarotrigo.com/fullPage/pricing/).

**The credit comments in the JavaScript and CSS files should be kept intact** (even after combination or minification)

## Uso
Como podéis ver en los ejemplos disponibles, es necesario incluir:
 - El archivo de JavaScript `fullpage.js` (o su versión minificada `fullpage.min.js`)
 - El archivo CSS `fullpage.css` (o su versión minificada `fullpage.min.css`)

**Opcionalmente**, cuando se usa la opcion `css3:false`, puedes añadir la librería de [jQuery UI](http://jqueryui.com/) en caso que desee usar otro efecto "easing" en lugar de los que están incluidos en la libreria (`easeInOutCubic`).

### Instalar usando bower o npm
**Opcionalmente**, puedes instalar fullPage.js haciendo uso de Bower o npm si lo prefieres:

Terminal:
```shell
// Con bower
bower install fullpage.js

// Con npm
npm install fullpage.js
```

### Incluyendo los archivos:
```html
<link rel="stylesheet" type="text/css" href="fullpage.css" />


<!-- Esta línea es opcional. Sólamente es necesaria si se hace uso de la opción `css3:false` y se quiere usar otro efecto `easing` en lugar de `linear`, `swing` o `easeInOutCubic`. -->
<script src="vendors/easings.min.js"></script>

<!-- Esta línea es opcional y sólamente es necesaria en caso de usar la opción `scrollOverflow:true`. -->
<script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>

<script type="text/javascript" src="fullpage.js"></script>
```

### Uso opcional de un CDN
Si lo prefieres puedes hacer uso de un CDN (Content Delivery Network o Red de distribución de contenido) para cargar los archivos de fullPage.js. FullPage.js está disponible en CDNJS:
https://cdnjs.com/libraries/fullPage.js

### Estructura HTML requerida
El documento HTML requerirá comenzar con el [HTML DOCTYPE obligatorio](http://www.corelangs.com/html/introduction/doctype.html) en la primera línea de tu archivo HTML. De lo contrario puedes tener problemas con el tamaño de las secciones y diapositivas. Todos los ejemplos disponibles aquí usan la etiqueta HTML 5 `<!DOCTYPE html>`.

Cada sección se ha de definir usando la clase `section`.
La sección activa por defecto será la primera, que será tratada como la página de inicio.

Las seciones tienen que estar contenidas en otro elemento (en este caso`<div id="fullpage">`). El elemento contenedor no puede ser el elemento `body` de la página.

```html
<div id="fullpage">
	<div class="section">Sección 1</div>
	<div class="section">Sección 2</div>
	<div class="section">Sección 3</div>
	<div class="section">Sección 4</div>
</div>
```
Si quieres definir una sección de inicio diferente de la primera sección o la primera diapositiva de la sección, simplemente añade la clase `active` en la sección o diapositiva que quieras que sea visible inicialmente.
```html
<div class="section active">Mi sección de inicio</div>
```
Puedes usar la clase `slide` para crear diapositivas horizontales dentro de una sección:
```html
<div class="section">
	<div class="slide"> Diapositiva 1 </div>
	<div class="slide"> Diapositiva 2 </div>
	<div class="slide"> Diapositiva 3 </div>
	<div class="slide"> Diapositiva 4 </div>
</div>
````
Puedes ver un ejemplo totalmente funcional de la estructura HTML en el ejemplo [`demostraciónPage.html`](https://github.com/alvarotrigo/fullPage.js/blob/master/examples/demostraciónPage.html).

### Inicialización
Todo lo que necesitas hacer es llamar a fullPage.js justo antes del cierre de la etiqueta `</body>`:
```javascript
var myFullpage = new fullpage('#fullpage');
```

#### Inicialización con Vanilla Javascript
Todo lo que necesitas hacer es llamar a fullPage.js justo antes de la etiqueta de cierre `</body>`.

```javascript
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

//métodos
fullpage_api.setAllowScrolling(false);
```

#### Inicialización con jQuery
También puedes usar fullPage.js como plugin de jQuery!

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	fullpage_api.setAllowScrolling(false);
});
```

Las métodos/funciones pueden ser usados como se haría en jQuery, tal y como se hacía en [fullpage.js v2.X](https://github.com/alvarotrigo/fullPage.js/tree/2.9.7).

#### Ejemplo de inicialización Vanilla JS

Una inizialización más compleja con todas las opciones definidas sería así:
```javascript
new fullpage('#fullpage', {
	//Navegación
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',

	//Desplazamiento
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	normalScrollElementTouchThreshold: 5,
	bigSectionsDestination: null,

	//Accesibilidad
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Diseno
	controlArrows: true,
	verticalCentered: true,
	sectionsColor : ['#ccc', '#fff'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

	//Selectores personalizados
	sectionSelector: '.section',
	slideSelector: '.slide',

	//Eventos
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});
```

### Crear enlaces a secciones y diapositivas
Si usas fullPage.js con enlaces de anclaje para las secciones (haciendo uso de la opción `anchors` o del atributo `data-anchor` en cada sección), entonces también podrás usar los enlaces de anclaje para navegar a una sección o diapositiva en particular.

Esto sería un ejemplo de un enlace con un enlace de anclaje: https://alvarotrigo.com/fullPage/#secondPage/2 (que es la URL que verás en la URL si accedes a esa sección/diapositiva manualmente).
Fíjate que la última parte de la URL termina en: `#secondPage/2`.

Teniendo la siguiente inicialización:

```javascript
new fullpage('#fullpage', {
	anchors:['firstPage', 'secondPage', 'thirdPage']
});
```

El enlace de anclaje al final de la URL `#secondPage/2` define la sección y diapositiva de destino respectivamente. En la URL anterior, la sección de destino será la que está definida con el enlace de anclaje `secondPage` y la diapositiva será la segunda de dicha sección porque estamos usando el índice `2` para ella. La primera diapositiva de una sección tendrá índice 0, porque técnicamente será tratada como una sección.

Podríamos haber usado un enlace de anclaje personalizado para la diapositiva en lugar de su índice si hubiésemos usado el atributo `data-anchor` en la estructura HTML:

```html
<div class="section">
	<div class="slide" data-anchor="slide1"> Slide 1 </div>
	<div class="slide" data-anchor="slide2"> Slide 2 </div>
	<div class="slide" data-anchor="slide3"> Slide 3 </div>
	<div class="slide" data-anchor="slide4"> Slide 4 </div>
</div>
```
En este último caso, la URL que usaríamos sería `#secondPage/slide3`, que es la equivalente a nuestra URL anterior `#secondPage/2`.

Ten en cuenta que los enlaces de anclaje en la sección también pueden definirse del mismo modo, es decir, usando el atributo `data-anchor` siempre y cuando no hayamos definido la opción `anchors` al iniciar fullPage.js.

**Ten cuidado!**, las etiquetas `data-anchor` no pueden tener el mismo valor que ninguna otra etiqueta ID en la página. (o `name` para Internet Explorer)

### Crear secciones más pequeñas o más grandes
[Demostración](https://codepen.io/alvarotrigo/pen/BKjRYm) fullPage.js provee un modo de eliminar la restricción de pantalla completa para secciones y diapositivas. Es posible crear secciones con una altura menor o mayor que el tamaño de la ventana del navegador. Esto es especialmente útil para pies de página.

Para crear este tipo de secciones simplemente usa la clase `fp-auto-height` en la sección donde quieres aplicarlo. De este modo fullPage.js ajustará el tamaño al dado por el contenido de dicha sección o diapositiva.

```html
<div class="section">Ventana completa</div>
<div class="section fp-auto-height">Alto automático</div>
```

#### Secciones de tamaño automático y responsive
[Demostración](https://codepen.io/alvarotrigo/pen/WZmMgZ) fullPage.js puede eliminar la restricción de pantalla completa únicamente bajo el modo `responsive` si asi lo deseas.
De este modo la sección pasará a ser una sección de tamaño automático cuando fullPage.js entre en modo responsive. (Usando la opcion `responsiveWidth` o `responsiveHeight`)

### Classes de estado añadidas por fullpage.js
Fullpage.js añade multiples clases en diferentes elementos para reflejar el estado en el que se encuentra la página web:

- `active` es añadido en la sección o diapositiva actual.
- `active` es añadido en el elemento actual del menú (si se usa la opción `menu`)
- Una clase con la forma `fp-viewing-SECCION-DIAPOSITIVA` es añadida al elemento `body` de la página. (ej: [`fp-viewing-secondPage-0`](https://alvarotrigo.com/fullPage/#secondPage)) Las partes de `SECCION` Y `DIAPOSITVA` serán los enlaces de anclaje (o los índices) de la sección o diapositiva actual.
- `fp-responsive` es añadido al elemento `body` cuando se entra en modo "responsive".
- `fp-enabled` es añadido al elemento `html` cuando fullPage.js está activo (y se elimina cuando se destruye).
- `fp-destroyed` es añadido al contenedor usado para iniciar fullPage.js cuando se destruye fullPage.js.

### Carga pasiva de elementos multimedia
[Demostración](https://codepen.io/alvarotrigo/pen/eNLBXo) fullPage.js provee un modo de cargar pasivamente imágenes, vídeos y audio de manera que dichos elementos no ralenticen la carga de la página web y gasten recursos de transferencia innecesarios.
Cuando se usa la carga pasiva de elementos, éstos solamente se cargarán cuando entren dentro de la parte visible de la ventana.
Para activar esta funcionalidad bastará con cambiar el atributo `src` por `data-src` tal y como se muestra a continuación:

```
<img data-src="image.png">
<video>
	<source data-src="video.webm" type="video/webm" />
	<source data-src="video.mp4" type="video/mp4" />
</video>
 ```
Si ya estabas usando otra librería de carga pasiva (lazy loading) que usa el atributo `data-src` también, puedes desactivar la carga pasiva de fullpage.js que está activa por defecto usando la opción `lazyLoading: false`.

### Autoreproducir elementos multimedia

**Note**: esta funcionalidad puede que no funcione en dispositivos móviles. Ésto dependerá del sistema operativo y del navegador usado.

#### Reproducir al cargar la sección o diapositiva:
Usando el atributo `autoplay` para videos y audios, o el parámetro `autoplay=1` para iframes de Youtube causará que el elemento empiece a reproducirse al cargar la página web.
Usa el atributo `data-autoplay` para comenzar a reproducirlo cuando la sección o diapositiva a la que pertenece sea visible en la ventana. Por ejemplo:

```html
<audio data-autoplay>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

#### Pausar al abandonar la sección o diapositiva
Los elementos multimedia HTML 5 incrustados `<video>` / `<audio>` y los iframes de Youtube serán automáticamente pausados al abandonar la sección o diapositiva a la que pertenecen. Esto puede deshabilitarse usando el atributo `data-keepplaying`. Por ejemplo:
```html
<audio data-keepplaying>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

### Uso de extensiones
fullPage.js [provee varias extensiones](https://alvarotrigo.com/fullPage/extensions/) que puedes usar para mejorar sus ya increíbles efectos. Todas las extensiones están la lista de [las opciones de fullPage.js](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#opciones)

Las extensiones requieren el uso del archivo comprimido [`fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js) disponible [en la carpeta `dist`](https://github.com/alvarotrigo/fullPage.js/tree/master/dist) en lugar del archivo habitual de fullPage (`fullpage.js` o `fullpage.min.js`).
Una vez que obtengas el archivo correspondiente a la extensión que deseas usar, tendrás que añadirlo antes del archivo de fullPage. Por ejemplo, si deseo usar la extensión Continuous Horizontal tendré que añadir el fichero de la extension y después el fichero de fullPage versión extensiones.

```html
<script type="text/javascript" src="fullpage.continuousHorizontal.min.js"></script>
<script type="text/javascript" src="fullpage/fullpage.extensions.min.js"></script>
```

Cada extensión requiere de una licencia y de una clave de activación. [Ver más detalles sobre el uso de licencias aquí](https://github.com/alvarotrigo/fullPage.js/blob/master/lang/spanish/how-to-activate-fullpage-extension.md).

Luego podrás usar la extensión y configurarla tal y como se explica en las [opciones](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#opciones).

## Opciones

- `licenseKey`: (por defecto `null`). **Esta opción es obligatoria.** Si usas fullPage.js en un proyecto que no sea código abierto, entonces tendrás que usar la clave de licencia que obtendrás al adquirir la licencia comercial de fullPage. De lo contrario, podrás usar la cadena `OPEN-SOURCE-GPLV3-LICENSE`.
Puedes leer más acerca de las lencencias [aquí](https://github.com/alvarotrigo/fullPage.js#license) y en la [página web](https://alvarotrigo.com/fullPage/pricing/).

- `v2compatible`: (por defecto `false`). Determina si será 100% compatible con código escrito para la version 2 de fullpage.js, ignorando nuevas funcionalides de la nueva version. Callbacks y clases de estado se comportarán como lo hacían en la version 2. **Esta opción será eliminada en algún momento en un futuro**

- `controlArrows`: (por defecto `true`) Determina si usar flechas de control en las diapositivas para deslizar hacia la derecha o izquierda.

- `verticalCentered`: (por defecto `true`) centrado vertical de las secciones y diapositivas. Cuando se usa `true`, el contenido de cada sección y diapositiva será envuelto por la librería dentro de un elemento contenedor. Considera usar delegación en eventos Javascript o usar los eventos dentro del callback `afterRender`.

- `scrollingSpeed`: (por defecto `700`) Velocidad de deslizamiento en milisegundos.

- `sectionsColor`: (por defecto `none`) Define la propiedad CSS `background-color` para cada sección.

Ejemplo:
```javascript
new fullpage('#fullpage', {
	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});
```

- `anchors`: (por defecto `[]`) Define los enlaces de anclaje (#ejemplo) que serán mostrados en la URL para cada sección. Los enlaces de anclaje deben ser únicos. La posición de los enlaces en el array definirá a qué sección serán aplicados. (la segunda posición será la segunda sección y así). Usar la navegación del navegador para moverse a la página anterior y siguiente será posible cuando se usen enlaces de anclaje. Éstos también ofrecen la posibilidad de guardar una sección o diapositiva específica a favoritos. **Ten cuidado!**: las etiquetas `data-anchor` no pueden tener el mismo valor que ninguna otra etiqueta ID en la página (o `name` para Internet Explorer).
Ahora los enlaces de anclaje también se pueden definir directamente en la estructura HTML usando el atributo `data-anchor`.

- `lockAnchors`: (por defecto `false`) Determina si los enlaces de anclaje en la URL tendrán efecto en fullPage.js. Puedes usar los `anchor` de manera interna para tus propias funciones o dento de los callbacks, pero no tendrán ningún efecto en el desplazamiento de la página web. Útiles cuando quieres combinar fullPage.js con otros plugins que usan enlaces de anclaje en la URL.

- `easing`: (por defecto `easeInOutCubic`) Define el tipo de transición que usará fullPage.js para el desplazamiento vertical y horizontal de la página cuando se usa `css3:false` o el navegador no soporta animaciones CSS3.
Requiere el archivo `vendors/easings.min.js` o [jQuery UI](http://jqueryui.com/) para usar algunas de [sus transiciones](http://api.jqueryui.com/easings/)
Otras librerías puede ser usadas si se desea.

- `easingcss3`: (por defecto `ease`) Define el efecto de transición que usará fullPage.js cuando se usa `css3:true`. Puedes usar los [efectos predefinidos](http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) (como `linear`, `ease-out`...) o puedes crear tus propios efectos usando la función `cubic-bezier`. Puede que quieras ojear [Matthew Lein CSS Easing Animation Tool](https://matthewlein.com/ceaser/) para ello.

- `loopTop`: (por defecto `false`) Determina si hacer scroll hacia arriba estando en la primera sección te desplazará a la última o no.

- `loopBottom`: (por defecto `false`) Determina si hacer scroll hacia abajo estando en la última sección te desplazará a la primera o no.

- `loopHorizontal`: (por defecto `true`) Determina si las diapositivas horizontales volverán a la primera o última diapositiva al llegar a la última o primera respectivamente.

- `css3`: (por defecto `true`). Determina si fullPage.js usará JavasScript o animaciones CSS3 para realizar los desplazamientos entre secciones y diapositivas. Útil para mejorar el rendimiento en tabletas y dispositivos móviles así como en navegadores con soporte CSS3. Si esta opción se pone a `true` y el navegador no soporta animaciones CSS3, fullPage.js automáticamente lo volverá a poner a `false` para usar animaciones JavaScript.

- `autoScrolling`: (por defecto `true`) Determina si usar desplazamiento "automático" o "a saltos" o usar el desplazamiento tradicional de cualquier página. También afecta al modo en el que las secciones se ajustan a la ventana en tabletas y dispositivos móviles.

- `fitToSection`: (por defecto `true`) Determina si "encajar" las secciones en el navegador o no. Esto tiene sentido cuando se usa `autoScrolling:false` o `scrollBar:false` o el modo responsive. Cuando se usa `true` la sección actual se desplazará en la pantalla hasta llegar el contenido de la ventana. De lo contrario el usuario podrá desplazarse libremente y parar en mitad de 2 secciones.

- `fitToSectionDelay`: (por defecto `1000`). Si `fitToSection` está activo, esta opción define el tiempo en milisegundos que esperará fullpage.js desde que el usuario dejó de desplazarse hasta que la sección se encaja en la ventana.

- `scrollBar`: (por defecto `false`) Determina si se utiliza la barra de desplazamiento del navegador o no. En caso afirmativo, la funcionalidad de `autoScrolling` (de desplazamiento automático o "a saltos") funcionará como se espera. El usuario será también libre de desplazarse por la página usando la barra de navegación y fullpage.js encajará la sección cuando el desplazamiento cese siempre y cuando se use `fitToSection`.

- `paddingTop`: (por defecto `0`) Determina el "padding" superior para cada sección con un valor numérico y su unidad de medida (paddingTop: '10px', paddingTop: '10em'...). Útil cuando se usan cabeceras fijas (`fixed`).

- `paddingBottom`: (por defecto `0`) Determina el "padding" inferior para cada sección con un valor número y su unidad de medida (paddingBottom: '10px', paddingBottom: '10em'...) Útil cuando se usa un pie de página fijo (`fixed`).

- `fixedElements`: (por defecto `null`) Determina qué elementos serán extraídos de la estructura de fullPage.js. Cosa que es necesaria cuando se usa la opción `css3` para mantenerlos fijos (`fixed`). Requiere una cadena de texto con el selector de Javascript para dichos elementos. (Por ejemplo: `fixedElements: '#element1, .element2'`)

- `normalScrollElements`: (por defecto `null`) Si quieres evitar el auto desplazamiento (o desplazamiento a saltos) cuando se haga scroll encima de ciertos elementos, ésta es la opción a usar. (Útil para mapas, divs con scroll etc.). Requiere una cadena de texto con el selector de Javascript para dichos elementos.(Por ejemplo: `normalScrollElements: '#element1, .element2'`). Esta opción no debe ser aplicada directamente en las mismas secciones o diapositivas en sí, sino a elementos dentro de ellas.

- `normalScrollElementTouchThreshold`: (por defecto  `5`) Determina el límite para el número de saltos hacia arriba en el árbol de nodos que Fullpage.js mirará para ver si cuadra con `normalScrollElements`. (Por ejemplo: `normalScrollElementTouchThreshold: 3`)

- `bigSectionsDestination`: (por defecto `null`) Determina cómo desplazarse hacia una sección mayor que la ventana del navegador. Por defecto fullPage.js se desplazará hacia la parte superior de la sección si llegas desde una sección situada por encima y hacia la parte inferior si llegas desde una sección situada por debajo. Los posibles valores para esta opción son:  `top`, `bottom`, `null`.

- `keyboardScrolling`: (por defecto `true`) Determina si el contenido puede ser navegado usando el teclado.

- `touchSensitivity`: (por defecto `5`) Determina cierto porcentaje de la ventana del navegador a partir del cual fullpage.js registra un desplazamiento vertical.

- `continuousVertical`: (por defecto `false`) Determina si hacer scroll hacia abajo en la última sección producirá un desplazamiento hacia abajo hacia la primera sección o no, y si hacer scroll hacia arriba en la primera sección producirá un desplazamiento hacia arriba hacia la última sección. No es compatible con `loopTop`, `loopBottom` y ninguna barra de desplazamiento (usando `scrollBar:true` o `autoScrolling:false`).

- `continuousHorizontal`: (por defecto `false`) [Extensión de fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Determina si desplazarse hacia la derecha en la última diapositiva causará un desplazamiento hacia la derecha hacia la primera diapositiva, y si desplazarse hacia la izquierda en la primera diapositiva causará un desplazamiento hacia la izquierda hacia la última diapositiva. No es compatible con `loopHorizontal`.

- `scrollHorizontally`: (por defecto `false`) [Extensión de fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Determina si desplazarse horizontalmente entre las diapositivas de la sección cuando se usa la ruleta del ratón o el trackpad. Sólamente funciona cuando se usa `autoScrolling:true`. Ideal para contar historias.

- `interlockedSlides`: (por defecto  `false`) [Extensión de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Determina si al moverse horizontalmente una sección con diapositivas, ésto forzará el movimiento de otras diapositivas en otras secciones en la misma dirección. Los posibles valores son `true`, `false` o un array con las secciones que estarán interconectadas. Por ejemplo `[1,3,5]` empezando por 1.

- `dragAndMove`: (por defecto `false`) [Extensión de fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Habilita o deshabilita el desplazamiento de secciones y diapositivas usando el ratón o los dedos en dispositivos táctiles. Los posibles valores para esta opción son:
  - `true`: habilita la función.
  - `false`: deshabilita la función.
  - `vertical`: habilita la funcion sólo verticalmente.
  - `horizontal`: habilita la funcion sólo horizontalmente.
  - `fingersonly`: habilita la función sólo para dispositivos táctiles.
  - `mouseonly`: habilita la función sólo para ratón y trackpad (desktop).

- `offsetSections`: (por defecto `false`)[Extensión de fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Provee una manera de usar secciones que no toman la pantalla completa sino un porcentaje determinado de la misma. Ideal para mostrar a los visitantes que hay más contenido en la página mostrando parte de sección siguiente o anterior.
Para definir el porcentaje de la sección hay que hacer uso del atributo `data-percentage`. El centrado de la sección en la ventana puede definirse usando un valor booleano (true o false) en el atributo `data-centered`. (Por defecto será `true` si no se especifica). Por ejemplo:
``` html
	<div class="section" data-percentage="80" data-centered="true">
```

- `resetSliders`: (por defecto `false`). [Extensión de fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Determina cuando reiniciar el carrusel de diapositivas de la sección al salir de ella, de modo que muestre la primera diapositiva cuando se vuelva a dicha sección.

- `fadingEffect`: (por defecto `false`). [Extensión de fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Determina cuando usar el efecto de desvanecimiento (fading) en lugar del efecto de desplazamiento habitual de fullPage.js. Los posibles valores son `true`, `false` `sections`, `slides`. Puede por lo tanto, aplicarse únicamente vertical u horizontalmente o ambos al tiempo.

- `animateAnchor`: (por defecto `true`) Determina si al cargar la página usando un enlace de anclaje (#) ésta se desplazará a la sección de destino o si por el contrario cargará la página directamente en dicha sección.

- `recordHistory`: (por defecto `true`) Determina si el estado de la página se guardará en la historia del navegador. Cuando se define la opción a `true` cada sección/diapositiva de la página actuará como una nueva página y el botón de "página anterior" o "página siguiente" del navegador desplazará las secciones/diapositivas de la página hasta alcanzar el estado de la página anterior o siguiente respectivamente. Cuando se define la opción a `false`, la URL seguirá cambiando con los enlaces de anclaje correspondientes pero no tendrán ningún efecto en la historia del navegador. Esta opción está automáticamente definida como `false` cuando se usa la opción `autoScrolling:false`.

- `menu`: (por defecto `false`) Se puede usar un selector para especificar el menú de la página al que las secciones hacen referencia. De este modo, el desplazamiento vertical entre las secciones activará el elemento correspondiente del menú usando la clase `active`.
Esta opción no generará ningún menú, sino que simplemente añade la clase `active` al elemento del menú con el enlace de anclaje correspondiente a la sección.
Para relacionar los elementos del menú con las secciones se requiere del uso del atributo `data-menuanchor` que tendrá que tener el mismo valor que el enlace de anclaje que la sección a la que haga referencia. Por ejemplo:
```html
<ul id="myMenu">
	<li data-menuanchor="firstPage" class="active"><a href="#firstPage">First section</a></li>
	<li data-menuanchor="secondPage"><a href="#secondPage">Second section</a></li>
	<li data-menuanchor="thirdPage"><a href="#thirdPage">Third section</a></li>
	<li data-menuanchor="fourthPage"><a href="#fourthPage">Fourth section</a></li>
</ul>
```
```javascript
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	menu: '#myMenu'
});
```

**Nota:** el menú tiene que estar situado fuera del contenedor de fullpage para evitar problemas cuando se use `css3:true`. De lo contrario, el menú será automáticamente movido fuera de la estructura de fullPage.js y añadido en el `body`.

- `navigation`: (por defecto `false`) Si se define a `true`, se mostrará una navegación lateral de círculos haciendo referencia a las secciones de la página.

- `navigationPosition`: (por defecto `none`) Puede ser definido a `left` o `right` y determina la posición que tomará la navegación (si es que se usa).

- `navigationTooltips`: (por defecto `[]`) Determina el texto para usar en cada círculo de la navegación. Por ejemplo:  `navigationTooltips: ['firstSlide', 'secondSlide']`. También puedes definir dichos textos usando el atributo `data-tooltip` en cada sección si así lo prefieres.

- `showActiveTooltip`: (por defecto `false`) Determina si mostrar siempre visible el texto para el círculo de la navegación que se encuentre activo en ese momento.

- `slidesNavigation`: (por defecto `false`) Si se define a `true` mostrará la navegación para las diapositivas horizontales de la página.

- `slidesNavPosition`: (por defecto `bottom`) Determina la posición que tomará la navegación para las diapositivas horizontales de la página. Admite los valores `top` y `bottom`. Tal vez quieras modificar la distancia inferior o superior usando estilos CSS así como el color de los mismos.

- `scrollOverflow`: (por defecto `false`) Determina si crear o no una barra de desplazamiento para las secciones/diapositivas donde el contenido de las mismas sea mayor que la altura de la ventana del navegador. Cuando se define a `true`, el contenido de la sección/diapositiva será envuelto por fullPage.js en un elemento contenedor. En estos casos, considera usar delegación o usar los eventos Javascript en el callback `afterRender`.
Cuando se usa `true` esta opción requiere del uso de la librería externa [`scrolloverflow.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/vendors/scrolloverflow.min.js) y ésta debe de ser añadida antes que fullPage.js, pero después de jQuery (en caso de usarlo). Por ejemplo:

```html
<script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>
<script type="text/javascript" src="fullpage.js"></script>
```

Para evitar que fullPage.js cree la barra de desplazamiento en ciertas secciones o diapositivas, haz uso de la clase `fp-noscroll`. Por ejemplo: `<div class="section fp-noscroll">`

Puedes evitar que `scrolloverflow` se aplique en modo responsive si usas la clase `fp-auto-height-responsive` en la sección. [Más información](https://github.com/alvarotrigo/fullPage.js#responsive-auto-height-sections).

- `scrollOverflowReset`: (por defecto `false`) [Extensión de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Cuando se define a `true` fullPage.js moverá el contenido de la seccion o diapositiva hacia arriba cuando se abandone la seccion o diapositiva hacia otra sección vertical. De este modo, cuando se llega a una sección que usa barra de desplazamiento, se mostrará siempre el principio de su contenido.

- `scrollOverflowOptions`: cuando se usa la opción de `scrollOverflow:true` fullPage.js hará uso de una versión modificada de la [librería iScroll.js](https://github.com/cubiq/iscroll/). Puedes personalizar el comportamiento de dicho componente aportando a fullPage.js las opciones de iScroll que deseas usar haciendo uso de esta opción. Mira [la documentacion de iScroll](http://iscrolljs.com/) para más información.

- `sectionSelector`: (por defecto `.section`) Determina el selector Javascript que fullPage.js usará para determinar lo que es una sección. Puede que necesites cambiarlo para evitar problemas con otras librerías que usen el mismo selector que usa fullPage.js por defecto.

- `slideSelector`: (por defecto `.slide`) Determina el selector de Javascript que fullPage.js usará para determinar lo que es una diapositiva. Puede que necesites cambiarlo para evitar problemas con otras librerías que usen el mismo selector que usa fulPage.js por defecto.

- `responsiveWidth`: (por defecto `0`) Usará el desplazamiento por defecto de cualquier otra página cuando la ventana tenga un valor de `anchor` menor que el definido en esta opción. La clase `fp-resposive` será añadida al elemento `body` de página en caso de que quieras usar dicho selector en tu hoja de estilos CSS para determinar cuando fullpage.js ha entrado en modo responsive. Por ejemplo, si se define como `900`, cuando la ventana del navegador sea menor que 900 píxeles el desplazamiento de fullpage.js actuará como en una página normal.

- `responsiveHeight`: (por defecto `0`) Usará el desplazamiento por defecto de cualquier otra página cuando la ventana tenga un valor de altura menor que el definido en esta opción. La clase `fp-resposive` será añadida al elemento `body` de página en caso de que quieras usar dicho selector en tu hoja de estilos CSS para determinar cuando fullpage.js ha entrado en modo responsive. Por ejemplo, si se define como `900`, cuando la ventana del navegador sea menor que 900 píxeles, el desplazamiento de fullpage.js actuará como en una página normal.

- `responsiveSlides`: (por defecto `false`) [Extensión de fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Cuando se define a `true` las diapositivas horizontales se convertirán en secciones verticales cuando el modo responsive se active (haciendo uso de las opciones `responsiveWith` o `responsiveHeight` detalladas arriba).

- `parallax`: (por defecto `false`) [Extensión de fullpage.js](https://alvarotrigo.com/fullPage/extensions/). Determina si usar fondos de sección y diapositiva con efecto parallax o no. [Lee más acerca de la opción parallax aquí](https://github.com/alvarotrigo/fullPage.js/blob/master/lang/spanish/parallax-extension.md).

- `parallaxOptions`: (por defecto: `{ type: 'reveal', percentage: 62, property: 'translate'}`). Permite configurar los parámetros para el efecto de parallax cuando se usa la opción `parallax:true`. [Lee más acerca de la opción parallax aquí](https://github.com/alvarotrigo/fullPage.js/blob/master/lang/spanish/parallax-extension.md).

- `lazyLoading`: (por defecto `true`) La carga pasiva está activa por defecto, lo que significa que cargará pasivamente cualquier elemento multimedia que contenga el atributo `data-src` como se detalla en la [carga pasiva de elementos multimedia](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#carga-pasiva-de-elementos-multimedia). Si quieres usar otra librería de carga pasiva puedes deshabilitar esta funcionalidad usando `false`.

## Métodos
Puedes verlos en acción [aquí](https://alvarotrigo.com/fullPage/examples/methods.html)

### moveSectionUp()
[Demostración](https://codepen.io/alvarotrigo/pen/GJXNMN) Desplaza la página hacia arriba una sección:
```javascript
fullpage_api.moveSectionUp();
```
---
### moveSectionDown()
[Demostración](https://codepen.io/alvarotrigo/pen/jPvVZx) Desplaza la página hacia abajo una sección:
```javascript
fullpage_api.moveSectionDown();
```
---
### moveTo(section, slide)
[Demostración](https://codepen.io/alvarotrigo/pen/doqOmY) Desplaza la página hacia la sección o diapositiva que se le indique. La primera diapositiva en una sección, que es la visible por defecto, tendrá índice 0.
```javascript
/* Desplazando la página a la sección con el enlace de anclaje `firstSlide` y a la diapositiva número 2*/
fullpage_api.moveTo('firstSlide', 2);

```

```javascript
//Desplazándo a la tercera sección de la página
fullpage_api.moveTo(3, 0);

//Que sería lo mismo que hacer esto
fullpage_api.moveTo(3);
```
---
### silentMoveTo(section, slide)
[Demostración](https://codepen.io/alvarotrigo/pen/doqOeY)
Exactamente lo mismo que [`moveTo`](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#movetosection-slide) pero en este caso el desplazamiento se hará sin animación. Un salto directo al destino sin transición.
```javascript
/* Desplzando la página a la sección con el link the anclaje `firstSlide` y a la diapositiva numero 2*/
fullpage_api.silentMoveTo('firstSlide', 2);
```
---
### moveSlideRight()
[Demostración](http://codepen.io/alvarotrigo/pen/Wvgoyz)
Desplaza el carrusel de diapostivas de la sección actual hacia la siguiente diapositiva.
```javascript
fullpage_api.moveSlideRight();
```
---
### moveSlideLeft()
[Demostración](http://codepen.io/alvarotrigo/pen/gpdLjW)
Desplaza el carrusel de diapositivas de la sección actual hacia la diapositiva anterior.
```javascript
fullpage_api.moveSlideLeft();
```
---
### setAutoScrolling(boolean)
[Demostración](https://codepen.io/alvarotrigo/pen/rVZWrR) Permite definir la configuración de la opción `autoScrolling` después de la inicialización.
Determina si usar desplazamiento "automático" o "a saltos" o usar el desplazamiento tradicional de cualquier página.

```javascript
fullpage_api.setAutoScrolling(false);
```
---
### setFitToSection(boolean)
[Demostración](https://codepen.io/alvarotrigo/pen/GJXNYm)
Determina el valor para la opción `fitToSection` definiendo si ajustar la sección más cercana a la pantalla o no.

```javascript
fullpage_api.setFitToSection(false);
```
---
### fitToSection()
[Demostración](https://codepen.io/alvarotrigo/pen/JWWagj)
Desplaza la página hacia la sección activa más cercana encajándola en la pantalla.

```javascript
fullpage_api.fitToSection();
```
---
### setLockAnchors(boolean)
[Demostración](https://codepen.io/alvarotrigo/pen/yNxVRQ)
Define el valor para la opción `lockAnchors` determinando si los enlaces de anclaje tendrán algún efecto en la URL o no.

```javascript
fullpage_api.setLockAnchors(false);
```
---
### setAllowScrolling(boolean, [directions])
[Demostración](http://codepen.io/alvarotrigo/pen/EjeNdq)
Añade o elimina la posibilidad de desplazarse a través de las secciones o diapositivas usando la ruleta del ratón, el trackpad del portátil o con los dedos en dispositivos táctiles. Ten en cuenta que ésto no deshabilitará el desplazamiento usando el teclado. Para ello necesitarás hacer uso de `setKeyboardScrolling`.

- `directions`: (parámetro opcional) Los posibles valores son `all`, `up`, `down`, `left`, `right` o una combinación de lo mismos usando comas, por ejemplo: `down, right`. Determina la dirección para la que el desplazamiento estará habilitado o deshabilitado.

```javascript

//desabilitando cualquier tipo de desplazamiento
fullpage_api.setAllowScrolling(false);

//desabilitando desplazamiento hacia abajo
fullpage_api.setAllowScrolling(false, 'down');

//desabilitando desplazamiento hacia abajo y hacia la derecha
fullpage_api.setAllowScrolling(false, 'down, right');
```
---
### setKeyboardScrolling(boolean, [directions])
[Demostración](https://codepen.io/alvarotrigo/pen/GJXNwm) Añade o elimina la posibilidad de desplazarse a través de las secciones usando las teclas del teclado (activo por defecto).

- `directions`: (parámetro opcional) Los posibles valores son `all`, `up`, `down`, `left`, `right` o una combinación de los mismos usando comas, por ejemplo: `down, right`. Determina la dirección para la que el desplazamiento estará habilitado o deshabilitado.

```javascript
//deshabilitando todo tipo de desplazamiento con el teclado
fullpage_api.setKeyboardScrolling(false);

//deshabilitando el desplazamiento hacia abajo con el teclado
fullpage_api.setKeyboardScrolling(false, 'down');

//deshabilitando el desplazamiento hacia abajo y hacia la derecha con el teclado
fullpage_api.setKeyboardScrolling(false, 'down, right');
```
---
### setRecordHistory(boolean)
[Demostración](https://codepen.io/alvarotrigo/pen/rVZWQb) Determina si fullPage.js modificará la historia del navegador con cada cambio de enlace de anclaje (#) en la URL.

```javascript
fullpage_api.setRecordHistory(false);
```
---
### setScrollingSpeed(milliseconds)
[Demostración](https://codepen.io/alvarotrigo/pen/NqLbeY) Define la velocidad de desplazamiento en milisegundos.

```javascript
fullpage_api.setScrollingSpeed(700);
```
---
### destroy(type)
[Demostración](https://codepen.io/alvarotrigo/pen/bdxBzv) Destruye los eventos de fullPage.js y opcionalmente la estructura HTML creada por el mismo así como cualquier estilo que haya aplicado.
Ideal para usar cuando se usa en páginas AJAX.

- `type`: (parámetro opcional) Si se define como `all` la estructura HTML creada por fullPage.js así como cualquier estilo que haya aplicado serán eliminados. De este modo, se mantendrá el HTMl original, es decir, el usado antes de que fullPage.js se iniciase.

```javascript
//destrozando los eventos Javascript de fullPage.js (scrolls, hashchange in the URL...)
fullpage_api.destroy();

//destrozando los eventos Javascript asi como cualquier modificación en el HTML hecha tras iniciar fullPage.js
fullpage_api.destroy('all');
```
---
### reBuild()
Ajusta el tamaño de las secciones y diapositivas así como su posición y su posible barra de desplazamiento si se usa `scrollOverflow:true`.
Ideal para usar en combinación con llamadas AJAX o cambios externos en la estructura DOM de la página, especialmente cuando se usa `scrollOverflow:true`.

```javascript
fullpage_api.reBuild();
```
---
### setResponsive(boolean)
[Demostración](https://codepen.io/alvarotrigo/pen/WxOyLA) Define el modo "responsive". Cuando se define a `true` la funcionalidad de `autoScrolling` será desactivada tal y como sucedería si se disparasen las opciones `responsiveWidth` o `responsiveHeight`.

```javascript
fullpage_api.setResponsive(true);
```
---
### responsiveSlides.toSections()
[Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/).
Convierte diapositivas horizontales en secciones verticales.

```javascript
fullpage_api.responsiveSlides.toSections();
```
---
### responsiveSlides.toSlides()
[Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/).
Deshace el cambio de las diapositivas horizontales que han sido convertidas a secciones verticales, dejándolas nuevamente como diapositivas horizontales dentro de una sección.

```javascript
fullpage_api.responsiveSlides.toSlides();
```

## Callbacks
[Demostración](https://codepen.io/alvarotrigo/pen/XbPNQv) Puedes verlas en acción [aquí](https://alvarotrigo.com/fullPage/examples/callbacks.html).

Algunos eventos de callback, como `onLeave`, contienen Objectos como parámetros. Dichos objetos son de tipo Section o Slide y continen las siguientes propiedades:

- `anchor`: *(String)* link de anclaje.
- `index`: *(Number)* índice.
- `item`: *(DOM element)* elemento DOM.
- `isFirst`: *(Boolean)* determina si el elemento es el primero de su tipo.
- `isLast`: *(Boolean)* determina si el elemento es el último de su tipo.

### afterLoad (`origin`, `destination`, `direction`)
Se dispara cuando una sección ha sido cargada completamente en la ventana, una vez que el desplazamiento ha terminado.
Parámetros:

- `origin`: *(Object)* sección de origin.
- `destination`: *(Object)* sección de destino.
- `direction`: *(String)* `up` o `down` dependiendo de la dirección de desplazamiento.

Por ejemplo:

```javascript
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterLoad: function(origin, destination, direction){
		var loadedSection = this;

		//usando su índice
		if(destination.index == 2){
			alert("Section 3 ended loading");
		}

		//usando su link de anclaje
		if(destination.anchor == 'secondSlide'){
			alert("Section 2 ended loading");
		}
	}
});
```
---
### onLeave (`origin`, `destination`, `direction`)
Se dispara una vez que el usuario abandona la sección, durante la transición a la nueva sección.
Si devuelves `false` el movimiento se cancelará antes de que tenga lugar.

Parámetros:

- `origin`: *(Object)* sección de origin.
- `destination`: *(Object)* sección de destino.
- `direction`: *(String)* `up` o `down` dependiendo de la dirección de desplazamiento.

Por ejemplo:

```javascript
new fullpage('#fullpage', {
	onLeave: function(origin, destination, direction){
		var leavingSection = this;

		//después de abandonar la sección 2
		if(origin.index == 1 && direction =='down'){
			alert("Me estoy moviendo a la sección 3!");
		}

		else if(origin.index == 1 && direction == 'up'){
			alert("Me estoy moviendo a la sección 1!");
		}
	}
});
```

#### Cancelando un desplazamiento antes de que tenga lugar
Puedes cancelar un desplazamiento si devuelves `false` en el callback `onLeave`:

```javascript
new fullpage('#fullpage', {
	onLeave: function(origin, destination, direction){
		//prevenimos el desplazamiento si la sección de destino es la tercera de la página
		if(destination.index == 2){
			return false;
		}
	}
});
```

---
### afterRender()
Será disparado justo después de que la estructura de la página sea generada por fullPage.js. Este callback es útil si quieres iniciar otros plugins o ejecutar cualquier otro código que requiera que la estructura de la página esté lista (ready). fullPage.js modifica la estructura DOM de la página y por lo tanto puede que los elementos en la página se consideren dinámicos. Mira [las FAQs](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions) para más información.

Ejemplo:

```javascript
new fullpage('#fullpage', {
	afterRender: function(){
		var pluginContainer = this;
		alert("La estructura resultante ya está lista para su uso");
	}
});
```
---
### afterResize(width, height)
Será disparado después de que la ventana del navegador sea reajustada en tamaño. Justo después de que las secciones se hayan reajustado.

Parámetros:

- `width`:  *(Number)* ancho de ventana.
- `height`: *(Number)* alto de ventana.

Ejemplo:

```javascript
new fullpage('#fullpage', {
	afterResize: function(width, height){
		var pluginContainer = this;
		alert("Las secciones han terminado de reajustarse");
	}
});
```
---
### afterResponsive(`isResponsive`)
Será disparado después de que fullPage.js cambie de su estado normal a "responsive" o viceversa.

Parámetros:

- `isResponsive`: booleano que determina si entra (`true`) o sale (`false`) del modo "responsive" hacia su modo normal.

Ejemplo:

```javascript
new fullpage('#fullpage', {
	afterResponsive: function(isResponsive){
		alert("Es responsive: " + isResponsive);
	}
});
```
---
### afterSlideLoad (`section`, `origin`, `destination`, `direction`)
Será disparado una vez cargue la diapositiva de una sección, después que el desplazamiento haya terminado.

Parámetros:

- `section`: *(Object)* sección activa.
- `origin`: *(Object)* diapositiva de origen.
- `destination`: *(Object)* diapositiva de destino.
- `direction`: *(String)* `right` or `left` depending on the scrolling direction.

Ejemplo:

```javascript
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterSlideLoad: function( section, origin, destination, direction){
		var loadedSlide = this;

		//primera diapositiva de la segunda sección
		if(section.anchor == 'secondPage' && destination.index == 1){
			alert("Primera diapositiva cargada");
		}

		//segunda diapositiva de la segunda sección (suponiendo que #secondSlide es
		//el enlace de anclaje de la segunda diapositiva
		if(section.index == 1 && destination.anchor == 'secondSlide'){
			alert("Segunda diapositiva cargada");
		}
	}
});
```


---
### onSlideLeave (`section`, `origin`, `destination`, `direction`)
Será disparado una vez que el usuario abandone la diapositiva actual para ir a otra, durante la transición hacia la nueva diapositiva.
Devolver `false`.
Si devuelves `false`, el movimiento se cancelará antes de que tenga lugar.

Parámetros:

- `section`: *(Object)* sección activa.
- `origin`: *(Object)* diapositiva de origen.
- `destination`: *(Object)* diapositiva de destino.
- `direction`: *(String)* `right` or `left` depending on the scrolling direction.

Ejemplo:

```javascript
new fullpage('#fullpage', {
	onSlideLeave: function( section, origin, destination, direction){
		var leavingSlide = this;

		//abandonando la primera diapositiva de la segunda sección y moviendo hacia la derecha
		if(section.index == 1 && origin.index == 0 && direction == 'right'){
			alert("Abandonando la diapositiva 1!!");
		}

		//abandonando la tercera diapositiva de la segunda sección y moviendo hacia la izquierda
		if(section.index == 1 && origin.index == 2 && direction == 'left'){
			alert("Yendo a la diapositiva 2! ");
		}
	}
});
```

#### Cancelando un desplazamiento antes de que tenga lugar
Puedes cancelar el desplazamiento devolviendo `false` en el callback `onSlideLeave`. Exactamente igual que cuando se usa [`onLeave`](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#cancelando-un-desplazamiento-antes-de-que-tenga-lugar).

# Reportando problemas
1. Por favor, usa el buscador en Github issues para buscar tu duda o problema antes de preguntar.
2. Asegurate de que estás usando la última versión de fullPage.js. No se provee soporte a versiones anteriores.
3. Usa el [foro de Github](https://github.com/alvarotrigo/fullPage.js/issues) para crear la pregunta o tema y **házlo en inglés** a ser posible.
4. **Se requerirá la reproducción aislada del problema.** Usa [jsfiddle](https://jsfiddle.net/1kyuL4em/2/) o [codepen](https://codepen.io/alvarotrigo/pen/NxyPPp) si es posible.

# Contribuir con fullPage.js
Por favor mira [Contributing to fullpage.js](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)

# Changelog
Para ver la lista de cambios recientes, mira [la sección de releases](https://github.com/alvarotrigo/fullPage.js/releases).
Sólo disponible en inglés :)

# Build tasks
¿Deseas crear archivos de distribución de fullpage.js? Lee los [Build Tasks](https://github.com/alvarotrigo/fullPage.js/wiki/Build-tasks)

# Recursos
- [Template de Wordpress](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [Vue.js wrapper component](https://github.com/alvarotrigo/vue-fullpage.js)
- [Herramienta de animacion de CSS Easing - Matthew Lein](https://matthewlein.com/ceaser/) (útil para definir la opción `easingcss3`)
- [fullPage.js jsDelivr CDN](https://www.jsdelivr.com/package/npm/fullpage.js)
- [fullPage.js plugin para October CMS](http://octobercms.com/plugin/freestream-parallax)
- [fullPage.js wordpress plugin](https://wordpress.org/plugins/wp-fullpage/)
- [fullPage.js Angular2 directive](https://github.com/meiblorn/ng2-fullpage)
- [fullPage.js angular directive](https://github.com/hellsan631/angular-fullpage.js)
- [fullPage.js ember-cli addon](https://www.npmjs.com/package/ember-cli-fullpagejs)
- [fullPage.js Rails Ruby Gem](https://rubygems.org/gems/fullpagejs-rails)
- [Angular fullPage.js - Adaptation for Angular.js v1.x](https://github.com/mmautomatizacion/angular-fullpage.js)
- [Integrating fullPage.js con Wordpress (Tutorial)](http://premium.wpmudev.org/blog/build-apple-inspired-full-page-scrolling-pages-for-your-wordpress-site/)

## Quién usa fullPage.js

[![Google](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/google-4.png)](http://www.yourprimer.com/)
[![Coca-cola](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/cocacola-4.png)](https://www.coca-colacompany.com/annual-review/2017/index.html)
![eBay](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ebay-4.png)
[![BBC](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/bbc-4.png)](http://www.bbc.co.uk/news/resources/idt-d88680d1-26f2-4863-be95-83298fd01e02)
![Sony](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sony-4.png)

![Vodafone](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/vodafone-5.png)
![British Airways](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/british-airways-5.png)
![McDonalds](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mcdonalds-6.png)
![EA](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ea-6.png)
[![Vogue](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/vogue-6.png)](http://www.vogue.fr/chaumet-histoires-de-liens)
![Mi](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mi-6.png)

[![Mercedes](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mercedes-5.png)](https://www.x-class.com.au/)
[![sym](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sym-5.png)](http://www.sanyang.com.tw/service/Conception/)
![Bugatti](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/bugatti-5.png)
[![eDarling](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/edarling-5.png)](https://www.edarling.de/)
![Ubisoft](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ubisoft-5.png)

- https://www.coca-colacompany.com/annual-review/2017/index.html
- http://www.bbc.co.uk/news/resources/idt-d88680d1-26f2-4863-be95-83298fd01e02
- https://www.x-class.com.au
- http://www.yourprimer.com/
- http://www.vogue.fr/chaumet-histoires-de-liens
- http://burntmovie.com/
- http://www.newjumoconcept.com/
- http://www.shootinggalleryasia.com/
- http://medoff.ua/en/
- http://promo.prestigio.com/grace1/
- http://www.commoditiesdemystified.info/en/
- http://torchbrowser.com/
- http://thekorner.fr/
- https://www.edarling.de/
- http://urban-walks.com/
- http://lingualeo.com/
- http://charlotteaimes.com/
- http://collection.madeofsundays.com
- http://www.boxreload.com/
- http://educationaboveall.org/
- http://camfindapp.com/
- http://rockercreative.com/
- http://usescribe.com/
- http://lucilecazanave.com/
- http://boxx.hk/
- http://bearonunicycle.com/
- http://rawmilk.dk/en/
- http://www.famavolat.com/
- http://www.sanyang.com.tw/service/Conception/
- http://www.batzaya.net/
- http://medissix.com/
- http://trasmissione-energia.terna.it/
- http://www.thefoodmovie.com/
- http://www.villareginateodolinda.it
- http://www.kesstrio.com
- http://ded-morozz.kiev.ua/
- http://unabridgedsoftware.com/
- http://atlanticcorp.us/
- http://moysport.ru/
- http://themify.me/demo/#theme=fullpane
- http://dancingroad.com
- http://www.camanihome.com/
- https://life2film.com/en/

Puedes encontrar otra lista más extensa [aquí](http://libscore.com/#$.fn.fullpage).

## Donaciones
¡Agradeceré cualquier donación!

[Dona en Patreon](https://www.patreon.com/fullpagejs)

[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## Sponsors
Conviértete en un sponsor y añade tu logo aquí en Github y en la página principal de fullpage.js con un link a tu página. [[Conviértete en un sponsor](https://alvarotrigo.com/#contact)] | [[Dona en Patreon](https://www.patreon.com/fullpagejs)]

[![Stackpath](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/stackpath3.png)](https://www.stackpath.com/)
[![Browserstack](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/browserstack3.png)](http://www.browserstack.com/)
[![HostPresto](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/hostpresto3.png)](https://hostpresto.com/?utm_source=alvaro)
[![CodePen](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codepen3.png)](https://codepen.com)

### People
<a href="https://github.com/donsalvadori" target="_blank" rel="nofollow">
	<img src="http://wallpapers-for-ipad.com/fullpage/imgs3/avatars/donsalvadori.jpg">
</a>
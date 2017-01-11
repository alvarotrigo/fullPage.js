# fullPage.js

![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.gif)

<p align="center">
  <a href="https://github.com/alvarotrigo/fullPage.js"><img src="https://raw.githubusercontent.com/alvarotrigo/fullPage.js/dev/examples/imgs/en-language-inactive.png" /></a><a href="https://github.com/alvarotrigo/fullPage.js/blob/dev/README_SPANISH.md#fullpagejs"><img src="https://raw.githubusercontent.com/alvarotrigo/fullPage.js/dev/examples/imgs/es-language.png?v=2" /></a>
</p>


![fullPage.js version](http://img.shields.io/badge/fullPage.js-v2.9.2-brightgreen.svg)
[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)
7Kb en gzip!

Un sencillo plugin de jQuery para la creación de páginas web con scroll a pantalla completa. (también conocido popularmente como "single page websites" o "onepage sites")
Permite crear un desplazamiento a pantalla completa asi como añadir diapositivas horizontales en las secciones. 

- [Vista previa - demostración](http://alvarotrigo.com/fullPage/)
- [Template de Wordpress](http://alvarotrigo.com/fullPage/utils/wordpress.html)
- [Extensiones de fullpage.js](http://alvarotrigo.com/fullPage/extensions/)
- [Preguntas frecuentes](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)

Invítame a un café:
[![Donate](https://www.paypalobjects.com/es_ES/ES/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

Personalizaciones del plugin y solicitudes urgentes a pedido por un precio razonable. <a href="http://alvarotrigo.com/#contact-page">Contacta conmigo</a>.

Te gustaría tener una página que usase fullpage.js pero no sabes como usarlo? Puedo hacertelo por un precio razonable. <a href="http://alvarotrigo.com/#contact-page">Contacta conmigo</a>.

- [Introducción](https://github.com/alvarotrigo/fullPage.js#introduction)
- [Compabitilidad](https://github.com/alvarotrigo/fullPage.js#compatibility)
- [Uso](https://github.com/alvarotrigo/fullPage.js#uso)
  - [Crear links a secciones y diapositivas](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#crear-links-a-secciones-y-diapositivas)
  - [Crear secciones más pequenas o más grandes](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#crear-seciones-más-pequenas-o-más-grandes)
  - [Classes de estado añadidas por fullpage.js](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#classes-de-estado-añadidas-por-fullpagejs)
  - [Carga pasiva de elementos multimedia](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#carga-pasiva-de-elementos-multimedia)
  - [Autoplay de elementos multimedia](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#autoreproducir-elementos-multimedia)
  - [Uso de extensiones](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#uso-de-extensiones)
- [Opciones](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#opciones)
- [Metodos](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#métodos)
- [Callbacks](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#callbacks)
- [Reportar problemas](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#reportando-problemas)
- [Contribuir a fullpage.js](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#contribuir-con-fullpagejs)
- [Changelog](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#changelog)
- [Build tasks](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#build-tasks)
- [Recursos](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#recursos)
- [Quien usa fullpage.js](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#quién-usa-fullpagejs)
- [Donaciones](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#donaciones)
- [Licencia](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#licencia)

## Introducción
Las sugerencias serán más que bienvenidas, no solamente de pedidos de nuevas funcionalidades sino también de mejoras de código.
Hagamos de fullPage.js un gran plugin para facilitar la vida de las personas!

## Compatibilidad
fullPage.js es totalmente compatible y funcional en cualquier navegador moderno asi como en algunos de los antiguos como Internet Explorer 8 y 9 u Opera 12.
Funciona con navegadores que soportan CSS3 y con los que no lo soportan, haciendolo ideal incluso para con navegadores antiguos.
También provee soporte táctil para dispositivos móbiles, tabletas y ordenadores con pantalla táctil.

[![Browserstack](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/browserstack2.png)](http://www.browserstack.com/)

Gracias a [Browserstack](http://www.browserstack.com/) por dar soporte a fullPage.js.

## Uso
Como podéis ver en los ejemplos disponibles, es necesario incluir:
 - [La librería de jQuery](http://jquery.com/). (1.6.0 minimum)
 - El archivo de JavaScript `jquery.fullPage.js` (o su versión minificada `jquery.fullPage.min.js`)
 - El archivio CSS `jquery.fullPage.css` (o su versión minificada `jquery.fullpage.min.css`)

**Opcionalmente**, cuando se usa la opcion `css3:false`, puedes anadir la libreríóa de [jQuery UI](http://jqueryui.com/) en caso de que quiera susar otro efecto "easing" en lugar de los que están incluidos en la libreria de jQuery por defecto (`linear` y `swing`) o el includo en fullPage.js por defecto (`easeInOutCubic`).

### Instarlar usando bower o npm
**Opcionalmente**, puedes instalar fullPage.js haciendo uso de bower o npm si lo prefieres:

Terminal:
```shell
// Con bower
bower install fullpage.js

// Con npm
npm install fullpage.js
```

###Incluyendo los archivos:
```html
<link rel="stylesheet" type="text/css" href="jquery.fullPage.css" />

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<!-- Esta linea es opcional. Sólamente es necesaria si se hace uso de la opcion `css3:false` y se quiere usar otro efecto `easing` en lugar de "linear", "swing" o "easeInOutCubic". -->
<script src="vendors/jquery.easings.min.js"></script>


<!-- Esta linea es opcional y sólamente es necesaria en caso de usar la opcion `scrollOverflow:true`. -->
<script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>

<script type="text/javascript" src="jquery.fullPage.js"></script>
```

###Uso opcional de un CDN
Si lo prefieres puedes hacer uso de un CDN (Content Delivery Network o Red de distrubución de contenido) para cargar los archivos de fullPage.js. FullPage.js está disponible en CDNJS: 
https://cdnjs.com/libraries/fullPage.js

###Estructura HTML requerida
El documento HTML requerirá comenzar la el [HTML DOCTYPE obligatorio](http://www.corelangs.com/html/introduction/doctype.html) en la primera linea de tu archivo HTML. De lo contrario puedes tener problemas con el tamaño de las secciones y diapositivas. Todos los ejemplos disponibles aqui usan la etiqueta HTML 5 `<!DOCTYPE html>`.

Cada sección se ha de definir usando la clase `section`
La sección activa por defecto será la primera, que será tratada com la página de inicio.

Las seciones tienes que estar contenidas en otro elemento (`<div id="fullpage">` en este caso). El elemento contenedor no puede ser el elemento `body` de la página.

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
Puedes ver un ejemplo totalmetne funciona de la estructura HTML en el ejemplo [`demostraciónPage.html`](https://github.com/alvarotrigo/fullPage.js/blob/master/examples/demostraciónPage.html).

###Inicialización
Todo lo que neceistas hacer es llamar al plugin dentro de la función `$(document).ready`.
```javascript
$(document).ready(function() {
	$('#fullpage').fullpage();
});
```

Una inizialización más compleja con todas las opciones definidas sería asi:
```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
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

		//Selectores personalizados
		sectionSelector: '.section',
		slideSelector: '.slide',

		//Eventos
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});
```

### Crear links a secciones y diapositivas
Si usas fullPage.js con links de anclaje para las secciones (haciendo uso de la opcion `anchors` o del atributo `data-anchor` en cada sección), entonces también podrás usar los links de anclaje para navegar a una sección o diapositiva en particular.

Esto sería un ejemplo de un link con un link de anclaje: http://alvarotrigo.com/fullPage/#secondPage/2 (que es la URL que verás en la URL si accedes a esa sección/diapositiva manualmente)
Fíjate que la última parte de la URL termina en: `#secondPage/2`

Teniendo la siguiente inicialización:

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage']
	});
});
```

El link de anclaje al final de la URL `#secondPage/2` define la sección y diapostiiva de destino respectivamente. In la URL anterior, la sección de destino será la que está definida con el link de anclaje `secondPage` y la diapositiva será la segunda de dicha sección porque estamos usando el índice `2` para ella. (la primera diapositiva de una sección tendrá índice 0, porque técnicamente será tratada como una sección)index 0, as technically it is a section).

Podríamos haber usado un link de anclaje personalizado para la diapositiva en lugar de su índice si hubiesemos usado el atributo `data-anchor` en la estructura HTML:

```html
<div class="section">
	<div class="slide" data-anchor="slide1"> Slide 1 </div>
	<div class="slide" data-anchor="slide2"> Slide 2 </div>
	<div class="slide" data-anchor="slide3"> Slide 3 </div>
	<div class="slide" data-anchor="slide4"> Slide 4 </div>
</div>
```
En este último caso, la URL que usaríamos sería `#secondPage/slide3`, que es le equivalente a nuestra URL anterior `#secondPage/2`.

Nota que los links de anclaje en la sección también pueden definirse del mismo modo, es decir, usando el atributo `data-anchor` siempre y cuando no hayamos definido la opcion `anchors` al iniciar el plugin.

**Ten cuidado!** las etiquetas `data-anchor` no pueden tener el mismo valor que ninguna otra etiqueta ID en la página. (o `name` para Internet Explorer)

### Crear seciones más pequenas o más grandes
[demostración](http://codepen.io/alvarotrigo/pen/BKjRYm) fullPage.js provee un modo de eliminar la restricción de pantalla completa para secciones y diapositivas. Es posible crear secciones con una altura menor o mayor que el tamano de la ventana del navegador. Esto es especialmente útil para pies de página.

Para crear este tipo de secciones simplemente usa la clase `fp-auto-height` en la sección donde quieres aplicarlo. De este modo fullPage.js ajustará el tamaño al dado por el contenido de dicha sección o diapositiva.

```html
<div class="section">Ventana completa</div>
<div class="section fp-auto-height">Alto automático</div>
```

#### Secciones de tamano automático y responsive 
fullPage.js puede eliminar la restricción de pantalla completa únicamente bajo el modo `responsive` si asi lo deseas.
De este modo la seccion pasará a ser una sección de tamaño automático cuando fullPage.js entre en modo responsive. (Usando la opcion `responsiveWidth` o `responsiveHeight`)

### Classes de estado añadidas por fullpage.js
Fullpage.js añade multiples clases en diferentes elementos para reflejar el estado en el que se encuentra la página web:

- `active` es añadido en la sección o diapositiva actual.
- `active` es añadido en el elemento actual del menu (si se usa la opcion `menu`)
- Una clase con la forma `fp-viewing-SECCION-DIAPOSITIVA` es añadida al elemento `body` de la página. (ej: [`fp-viewing-secondPage-0`](http://alvarotrigo.com/fullPage/#secondPage)) Las partes de `SECCION` Y `DIAPOSITVA` serán los links de anclaje (o los índices) de la sección o diapositiva actual.
- `fp-responsive` es añadido al element `body` cuando se entra en modo "responsive".
- `fp-enabled` es añadido al elemento `html` cuando fullPage.js está activo. (y se elimina cuando se destruye)
- `fp-destroyed` es añadido al contenedor usado para iniciar fullPage.js cuando se destruye el plugin.
- `fp-enabled` es añadido al elemento `html` una vez se ha inicializado fullPage.js.

###Carga pasiva de elementos multimedia
[demostración](http://codepen.io/alvarotrigo/pen/eNLBXo) fullPage.js provee un modo e cargar pasivamente imágenes, vídeos y audio de manera que dichos elementos no ralentizen la carga de la página web y gasten recursos de transferencia innecesarios.
Cuando se usa la carga pasiva de elementos, éstos solamente se cargarán cuando entren dentro de la parte visible de la ventana.
Para activar esta funcionalidad bastará con cambiar el atributo `src` por `data-src` tal y como se muestra a continuación:

```
<img data-src="image.png">
<video>
	<source data-src="video.webm" type="video/webm" />
	<source data-src="video.mp4" type="video/mp4" />
</video>
 ```
Si ya estabas usando otra librería de carga pasiva (lazy loading) que usa el atributo `data-src` también, puedes desactivar la carga pasiva de fullpage.js que está activa por defecto usando la opcion `lazyLoading: false`.

###Autoreproducir elementos multimedia

**Note**: esta funcionalidad puede que no funcione en dispositivos móviles. Ésto dependerá del sistema operativo y del navegador usado.

#### Reproducir al cargar la sección o diapositiva:
Usando el atributo `autoplay` para videos y audios, o el parámetro `autoplay=1` para iframes de youtube causará que el elemento empiece a reproducirse al cargar la página web. 
Usa el atributo `data-autplay` para comenzar a reproducirlo cuando la sección o diapositiva a la que pertenece sea visible en la ventana. Por ejemplo:

```html
<audio data-autoplay>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

#### Pausar al abandonar la sección o diapositiva
Los elementos multimedia HTML 5 incrustados `<video>` / `<audio>` y los iframes de Youtube serán automaticamente pausados al abandonar la sección o diapositiva a la que pertenecen. Esto puede desabilitarse usando el atributo `data-keepplaying`. Por ejemplo:
```html
<audio data-keepplaying>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

###Uso de extensiones
fullPage.js [provee varias extensiones](http://alvarotrigo.com/fullPage/extensions/) que puedes usar para mejorar sus ya increibles efectos. Todas las extensiones están la lista de [las opciones de fullPage.js](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#opciones)

Las extensiones requiren el uso del archivo comprimido [`jquery.fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/jquery.fullpage.extensions.min.js) disponible [en la carpeta `dist`](https://github.com/alvarotrigo/fullPage.js/tree/master/dist) en lugar del archivo habitual de fullPage (`jquery.fullpage.js` o `jquery.fullpage.min.js`).
Una vez adquiras el archivo correspondiente a la extensión que quieras usar, tendrás que añadirlo antes del archivo de fullPage. Por ejemplo, si quiero usar la extension Continuous Horizontal tendré que añadir el fichero de la extension y después el fichero de fullPage version extensiones.

```html
<script type="text/javascript" src="fullpage.continuousHorizontal.min.js"></script>
<script type="text/javascript" src="fullpage/jquery.fullpage.extensions.min.js"></script>
```

Cada extensión requiere de una licencia y de una clave de activación. [Ver más detalles sobe el uso de licencias aquí](https://github.com/alvarotrigo/fullPage.js/wiki/How-to-activate-a-fullPage.js-extension).

Luego podrás usar la extension y configurarla tal y como se explica en las [opciones](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#opciones).

## Opciones

- `controlArrows`: (default `true`) Determina si usar flechas de contrl en las diapostiivas para deslizar hacia la derecha o izquierda.

- `verticalCentered`: (default `true`) centrado vertical de las secciones y diapositivas. Cuando se usa `true`, el contenido de cada sección y diapositiva será embuelto dentro de un contenedor por el plugin. Considera usar delegacion en eventos Javascript o usar los eventos dentro del callback `afterRender`.

- `scrollingSpeed`: (default `700`) Velocidad de deslizamiento en milisegundos.

- `sectionsColor`: (default `none`) Define la propiedad CSS `background-color` property para cada sección.
Ejemplo:
```javascript
$('#fullpage').fullpage({
	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});
```

- `anchors`: (default `[]`) Define los links de anclaje (#ejemplo) que serán mostrados en la URL para cada sección. Los links de anclaje deben de ser únicos. La posición de los links en el array definirá a qué sección serán aplicados. (la segunda posición será la segunda sección y así). Usar la navegación del navegador para moverse al a página anterior y siguiente será posible cuando se usen links de anclaje. Éstos también ofrecen la posibilidad de guardar una sección o diapositiva específica a favoritos. **Ten cuidado!** las etiquetas `data-anchor` no pueden tener el mismo valor que ninguna otra etiqueta ID en la página. (o `name` para Internet Explorer)
Ahora los links de anclaje también se pueden definir directamente en la estructura HTML usando el atributo `data-anchor`.

- `lockAnchors`: (default `false`) Determina si los links de anclaje en la URL tendrán efecto en el plugin. Puedes usar los anchor de manera interna para tus propias funciones o dento de los callbacks, pero no tendrán ningún efecto en el desplazamiento de la página web. Útiles cuando quieres combinar fullPage.js con otros plugins que usan links de anclaje en la URL.

- `easing`: (default `easeInOutCubic`) Define el tipo de transición que usará fullPage.js para el desplazamiento vertical y horizontal de la página cuando se usa `css3:false` o el navegador no soporta animaciones CSS 3.
Requiere el archivo `vendors/jquery.easings.min.js` o [jQuery UI](http://jqueryui.com/) para usar algunas de [sus transiciones](http://api.jqueryui.com/easings/)
Otras librerías puede ser usadas si se desea.

- `easingcss3`: (default `ease`) Define el efecto de transición que usará fullPage.js cuando se usa `css3:true`. Puedes usar los [efectos predefinidos](http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) (como `linear`, `ease-out`...) o puedes crear tus propios efectos usando la función `cubic-bezier`. Puede que quieras ojear [Matthew Lein CSS Easing Animation Tool](http://matthewlein.com/ceaser/) para ello.

- `loopTop`: (default `false`) Determina si hacer scroll hacia arriba estando en la primera sección te desplazará a la última o no.

- `loopBottom`: (default `false`) Determina si hacer scroll hacia abajo estando en la última sección te desplazá al a primera o no.

- `loopHorizontal`: (default `true`) Determina si las diapositivas horizontales volverán a la primera o última diaposivia al al llegar al a última o primera respectivamente. 

- `css3`: (default `true`). Determina si fullPage.js usará JavasScript o animaciones CSS3 para realizar los desplazamientos entre secciones y diapositivas. Útil para mejorar el rendimiento en tabletas y dispositivos móbiles asi como en navegadores con soporte CSS 3. Si esta opción se pone a `true` y el navegador no soporta animaciones CSS 3, fullPage.js automáticamente lo volverá a poner a `false` para usar animaciones JavaScript.

- `autoScrolling`: (default `true`) Determina si usar desplazamiento "automático" o "a saltos" o usar el desplazamiento tradicional de cualquier página. También afecta al modo en el que las secciones se ajustan a la ventana en tabletas y dispositivos móbiles.

- `fitToSection`: (default `true`) Determina si "encajar" las secciones en el navegador o no. Esto tiene sentido cuando se usa `autoScrolling:false` o `scrollBar:false` o el modo responsive. Cuando se usa `true` la sección actual se desplazará en la pantalla hasta llegar el contenido den la ventana. De lo contrario el usuario podrá desplazarse libremente y parar en mitad de 2 secciones.

- `fitToSectionDelay`: (default 1000). Si `fitToSection` está activo, esta opción define el tiempo en milisegundos que esperará fullpage.js desde que el usuario dejó de desplazarse hasta que la sección se encaja en la ventana. 

- `scrollBar`: (default `false`) Determina si usar la barra de desplazamiento del navegador o no. En caso de usarla, la funcionalidad de `autoScrolling` (de desplazamiento automático o "a saltos") funcionará como se espera. El usuario será también libre de desplazarse por la página usando la barra de navegación y fullpage.js encajará la sección cuando el desplazamiento cese siempre y cuando se use `fitToSection`.

- `paddingTop`: (default `0`) Determina el "padding" superior para cada sección con un valor numerico y su unidad de medida (paddingTop: '10px', paddingTop: '10em'...). Útil cuando se usan cabezeras fijas (fixed).

- `paddingBottom`: (default `0`) Determina el "padding" inferior para cada sección con un valor numero y su unidad de medida (paddingBottom: '10px', paddingBottom: '10em'...) Útil cuando se usa un pie de página fijo (fixed).

- `fixedElements`: (default `null`) Determina qué elementos serán extraidos de la estructura del plugin. Cosa que es necesria cuando se usa la opción `css3` para mantenerlos fijos (fixed). Require una cadena de texto con el selector de jQuery para dichos elementos. (Por ejemplo: `fixedElements: '#element1, .element2'`)

- `normalScrollElements`: (default `null`) Si quieres evitar el auto desplazamiento (o desplazamiento a saltos) cuando se haga scroll encima de ciertos elementos, ésta es la opción a usar. (Útil para mapas, divs con scroll etc.). Require una cadena de texto con el selector de jQuery para dichos elementos.(Por ejemplo: `normalScrollElements: '#element1, .element2'`). Esta opción no debe ser aplicada directamente en las mismas secciones o disapositas en si. Sino a elementos dentro de ellas.

- `normalScrollElementTouchThreshold` : (default `5`) Determina el límite para el número de saltos hacia arriba en el árbol de nodos que Fullpage.js mirará para ver si cuadra con `normalScrollElements`. (For example: `normalScrollElementTouchThreshold: 3`)

- `bigSectionsDestination`: (default `null`) Determina cómo desplazarse hacia una sección mayor que la ventana del navegador. Por defecto fullPage.js se desplazará hacia la parte superior de la sección  si llegas desde una sección situada por encima y hacia la parte inferior si llegas desde una sección situada por debajo. Los posibles valores para esta opción son:  `top`, `bottom`, `null`.

- `keyboardScrolling`: (default `true`) Determina si el contenido puede ser navegado usando el teclado.

- `touchSensitivity`: (default `5`) Determina cierto porcentage de la ventana del navegador a partir del cual fullpage.js registra un desplazamiento vertical.

- `continuousVertical`: (default `false`) Determina si hacer scroll hacia abajo en la última sección producirá un desplazamiento hacia abajo hacia la primera sección o no, y si hacer scroll hacia arriba en la primera sección producirá un desplazamiento hacia arriba hacia la última sección. No es compatible con `loopTop`, `loopBottom` y ninguna barra de desplazamiento (usando `scrollBar:true` o `autoScrolling:false`).

- `continuousHorizontal`: (default `false`) [Extensión de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Determina si desplazarse hacia la derecha en la última diapositiva causará un desplazamiento hacia la derecha hacia la primera diapositiva, y si un desplazarse hacia la izquierda en la primera diapositiva causará un desplazamiento hacia la izquierda hacia la última diapositiva. No es compatible con `loopHorizontal`. 

- `scrollHorizontally`: (default `false`) [Extensión de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Determina si moverse horizontalmente entre las diapositivas de la sección cuando se usa la ruleta del ratón o el trackpad. Ideal para contar historias. 

- `interlockedSlides`: (default `false`) [Extensión de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Determina si al mover horizontalmente una sección con diapositivas ésto forzará el movimiento de otras diapositivas en otras secciones en la misma dirección. Los posibles valores son `true`, `false` o un array con las secciones que estarán interconectadas. Por ejemplo `[1,3,5]` empeznado por 1. 

- `dragAndMove`: (default `false`) [Extensión de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Habilita o deshabilita el desplazamiento de secciones y diapositivas usando el ratón o los dedos en dispositivos táctiles. Los posibles valores para esta opción son `false`, `true`, `fingersonly`. La opción `fingersonly` habilita esta funcionalidad sólo para el desplazamienton con los dedos en dispositivos táctiles.

- `offsetSections`: (default `false`)[Extensión de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Provee una manera de usar secciones que no toman la pantalla completa sino un porcentage determinado de la misma. Ideal para mostrar a los visitantes que hay más contenido en la página mostrando parte de sección siguiente o anterior.
Para definir el porcentage de la sección hay que hacer uso del atributo `data-percentage`. El centrado de la sección en la ventana puede definirse usando un valor booleano (true o false) en el atributo `data-centered`. (Por defecto será `true` si no se especifica) Por ejemplo:
``` html
    <div class="section" data-percentage="80" data-centered="true">
```

- `resetSliders`: (default `false`). [Extensión de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Determina cuando reiniciar el carousel de diapositivas de la sección al salir de ella de modo que muestre la primera diapositiva cuando se vuelva a dicha sección.

- `fadingEffect`: (default `false`). [Extensión de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Determina cuando usar el efecto de desvanecimiento (fading) en lugar del efecto de desplazamiento habitual de fullPage.js. Los posibiles valores son `true`, `false` `sections`, `slides`. Puede por lo tanto aplicarse únicamente vertical u horizontalmente o ambos al tiempo.

- `animateAnchor`: (default `true`) Determina si al cargar la página usando un link the anclaje (#) ésta se desplazará a la sección de destino o si por el contrario cargará la página directamente en dicha sección.

- `recordHistory`: (default `true`) Determina si el estado de la página se guardará en la historia del navegador. Cuando se define la opción a `true` cada sección/diapositiva de la página actuará como una nueva página y el botón de "página anterior" o "página siguiente" del navegador desplazará las secciones/diapositivas del página hasta alcanzar el estado de la página anterior o siguiente respectivamente. Cuando se define la opción a `false`, la URL seguirá cambiando con los links de anclaje correspondientes pero no tendrán ningún efecto en la historia del navegador. Esta opción está automáticamente definida como `false` cuanso se usa la opcion `autoScrolling:false`.

- `menu`: (default `false`) Se puede usear un selector para especificar el menú de la página al que las secciones hacen referencia. De este modo el desplazamiento vertical entre las secciones activará el elemento correspondiente del menú usando la clase `active`.
Esta opción no generará ningún menú sino que simplemente añade la clase `active` al elemento del menu con el link de anclaje correspondiente a la sección.
Para relacionar los elementos del menú con las secciones se requiere del uso del atributo `data-menuanchor` que tendrá que tener el mismo valor que el link de anclaje que la sección a la que haga referencia. Por ejemplo:
```html
<ul id="myMenu">
	<li data-menuanchor="firstPage" class="active"><a href="#firstPage">First section</a></li>
	<li data-menuanchor="secondPage"><a href="#secondPage">Second section</a></li>
	<li data-menuanchor="thirdPage"><a href="#thirdPage">Third section</a></li>
	<li data-menuanchor="fourthPage"><a href="#fourthPage">Fourth section</a></li>
</ul>
```
```javascript
$('#fullpage').fullpage({
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	menu: '#myMenu'
});
```

**Nota:** el menú tiene que estar situado fuera del contenedor de fullpage para evitar problemas cuando se use `css3:true`. De lo contrario el menú será automáticamente movido fuera de la estructura del plugin y anadido en el `body`.

- `navigation`: (default `false`) Si se define a `true`, se mostrará una navegación lateral de círculos haciendo referencia a las secciones de la página.

- `navigationPosition`: (default `none`) Puede ser definido a `left` o `right` y determina la posición que tomará la navegación (si es que se usa).

- `navigationTooltips`: (default []) Determina el texto para usar en cada circulo de la navegación. Por ejemplo:  `navigationTooltips: ['firstSlide', 'secondSlide']`. También puedes definir dichos textos usando el atributo `data-tooltip` en cada sección si así lo prefieres.

- `showActiveTooltip`: (default `false`) Determina si mostrar siempre visibile el texto para el circulo de la navegación que se encuentre activo en ese momento.

- `slidesNavigation`: (default `false`) Si se define a `true` mostrará la navegación para las diapositivas horizontales de la página.

- `slidesNavPosition`: (default `bottom`) Determina la posición que tomará la navegación para las diapositivas horizontales de la página. Admite los valores `top` y `bottom`. Tal vez quieras modificar la distancia inferior o superior usando estilos CSS así como el color de los mismos.

- `scrollOverflow`: (default `false`) (no compatible con IE 8) Determina si crear o no una barra de desplazamiento para las secciones/diapositivas donde el contenido de las mismas sea mayor que la altura de la ventana del navegador. Cuando se define a `true`, el contenido de la sección/diapositiva será embuelto por el plugin en un contenedor. En estos casos, considera usar delegación o usar los eventos Javascript en el callback `afterRender`.
Cuando se usa `true` esta opción requiere del uso de la librería externa [`scrolloverflow.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/vendors/scrolloverflow.min.js) y debe de ser añadida antes que fullPage.js. Por ejemplo

```html
<script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>
<script type="text/javascript" src="jquery.fullPage.js"></script>
```

Para evitar que fullPage.js crea la barra de desplazamiento en ciertas secciones o diapositivas, haz uso de la clase ` fp-noscroll`. Por ejemplo: `<div class="section fp-noscroll">`

- `scrollOverflowReset`: (default `false`) [Extensión de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Cuando se define a `true` fullPage.js moverá el contenido de la seccion o diapositiva hacia arriba cuando se abandone la seccion o diapositiva hacia otra sección vertical. De este modo, cuando se llega a una sección que usa barra de desplazamiento, se mostrará siempre el principio de su contenido.

- `scrollOverflowOptions`: cuando se usa la opcion de scrollOverflow:true fullPage.js hará uso de una versión modificada de la [libería iScroll.js](https://github.com/cubiq/iscroll/). Puedes personalizar el comportamiento de dicho componente aportando a fullPage.js las opciones de iScroll que quieras usar haciendo uso de esta opción. Mira [la documentacion de iScroll](http://iscrolljs.com/) para más información.

- `sectionSelector`: (default `.section`) Determina el selector de jQuery que fullPage.js usará para determinar lo que es una sección. Puede que necesites cambiarlo para evitar problemas con otras librerías que usen el mismo selector que usa fullPage.js por defecto.

- `slideSelector`: (default `.slide`)  Determina el selector de jQuery que fullPage.js usará para determinar lo que es una diapositiva. Puede que necesites cambiarlo para evitar problemas con otras liberías que usen el mismo selector que usa fulPage.js por defecto.

- `responsiveWidth`: (default `0`)  Usará el desplazamiento por defecto de cualquier otra página cuando la ventana tenga un valor de anchor menor que el definido en esta opción. La clase `fp-resposive` será añadida al elemento `body` de página en caso de que quieras usar dicho selector en tu hoja de estilos CSS para determinar cuando fullpage.js ha entrado en modo responsive. Por ejemplo, si se define como 900, cuando la ventana del navegador sea menor que 900 pixels el desplazamiento de fullpage.js actuará como en una página normal.

- `responsiveHeight`: (default `0`)  Usará el desplazamiento por defecto de cualquier otra página cuando la ventana tenga un valor de altura menor que el definido en esta opción. La clase `fp-resposive` será añadida al elemento `body` de página en caso de que quieras usar dicho selector en tu hoja de estilos CSS para determinar cuando fullpage.js ha entrado en modo responsive. Por ejemplo, si se define como 900, cuando la ventana del navegador sea menor que 900 pixels el desplazamiento de fullpage.js actuará como en una página normal.

- `responsiveSlides`: (default `false`) [Extensión de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Cuando se define a `true` las diapositivas horizontales se convertirán en secciones verticales cuando el modo responsive se active (haciendo uso de las opciones `responsiveWith` o `responsiveHeight` detalladas arriba).

- `lazyLoading`: (default `true`) La carga pasiva está activa por defecto, lo que significa que cargará pasivamente cualquier elemento multimedia que contenga el atributo `data-src` como se detalla en la [carga pasiva de elementos multimedia](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#carga-pasiva-de-elementos-multimedia). Si quieres usar otra librería de carga pasiva puedes desabilitar esta funcionalidad usando `false`.

## Métodos
Puedes verlos en acción [aquí](http://alvarotrigo.com/fullPage/examples/methods.html)

### moveSectionUp()
[demostración](http://codepen.io/alvarotrigo/pen/GJXNMN) Desplaza la página hacia arriba una sección:
```javascript
$.fn.fullpage.moveSectionUp();
```
---
### moveSectionDown()
[demostración](http://codepen.io/alvarotrigo/pen/jPvVZx) Desplaza la página hacia abajo una sección:
```javascript
$.fn.fullpage.moveSectionDown();
```
---
### moveTo(section, slide)
[demostración](http://codepen.io/alvarotrigo/pen/doqOmY) Desplaza la página hacia la sección o diapositiva que se le indique. La primera diapositiva en una sección, que es la visible por defecto, tendrá índice 0.
```javascript
/* Desplzando la página a la sección con el link the anclaje `firstSlide` y a la diapositiva numero 2*/
$.fn.fullpage.moveTo('firstSlide', 2);

```

```javascript
//Desplazándo a la tercera sección de la página
$.fn.fullpage.moveTo(3, 0);

//Que sería lo mismo que hacer esto
$.fn.fullpage.moveTo(3);
```
---
### silentMoveTo(section, slide)
[demostración](http://codepen.io/alvarotrigo/pen/doqOeY)
Exáctamente lo mismo que [`moveTo`](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#movetosection-slide) pero en este caso el desplazamiento se hará sin animación. Un salto directo al destino sin transición.
```javascript
/* Desplzando la página a la sección con el link the anclaje `firstSlide` y a la diapositiva numero 2*/
$.fn.fullpage.silentMoveTo('firstSlide', 2);
```
---
### moveSlideRight()
[demostración](http://codepen.io/alvarotrigo/pen/Wvgoyz)
Desplaza el carousle de diapostivas de la sección actual hacia la siguiente diapositiva. 
```javascript
$.fn.fullpage.moveSlideRight();
```
---
### moveSlideLeft()
[demostración](http://codepen.io/alvarotrigo/pen/gpdLjW)
Desplaza el carousle de diapostivas de la sección actual hacia la diapositiva anterior. 
```javascript
$.fn.fullpage.moveSlideLeft();
```
---
### setAutoScrolling(boolean)
[demostración](http://codepen.io/alvarotrigo/pen/rVZWrR) Permite definir la configuración de la opción `autoScrolling` después de la inicialización.
Determina si usar desplazamiento "automático" o "a saltos" o usar el desplazamiento tradicional de cualquier página.

```javascript
$.fn.fullpage.setAutoScrolling(false);
```
---
### setFitToSection(boolean)
[demostración](http://codepen.io/alvarotrigo/pen/GJXNYm)
Sets the value for the option `fitToSection` determining whether to fit the section in the screen or not.

```javascript
$.fn.fullpage.setFitToSection(false);
```
---
### setLockAnchors(boolean)
[demostración](http://codepen.io/alvarotrigo/pen/yNxVRQ)
Define el valor para la opción `lockAnchors` determinando si los links de anclaje tendrán algún efecto en la URL o no.

```javascript
$.fn.fullpage.setLockAnchors(false);
```
---
### setAllowScrolling(boolean, [directions])
[demostración](http://codepen.io/alvarotrigo/pen/EjeNdq) 
Añade o elemina la posibilidad de desplazarse a través de las secciones o diapositivas usando la ruleta del ratón, el trackpad del portátil o con los dedos en dispositivos tátctiles. Ten en cuenta que ésto no desabilitará el desplazamiento usando el teclado. Para ello necesitarás hacer uso de `setKeyboardScrolling`.

- `directions`: (parámetro opcional) Los posibles valores son `all`, `up`, `down`, `left`, `right` o una combinación de lo mismos usando comas, por ejemplo: `down, right`. Determina la dirección para la que el desplazamiento estará habilitado o desabilitado. 

```javascript

//desabilitando cualquier tipo de desplazamiento
$.fn.fullpage.setAllowScrolling(false);

//desabilitando desplazamiento hacia abajo
$.fn.fullpage.setAllowScrolling(false, 'down');

//desabilitando desplazamiento hacia abajo y hacia la derecha
$.fn.fullpage.setAllowScrolling(false, 'down, right');
```
---
### setKeyboardScrolling(boolean, [directions])
[demostración](http://codepen.io/alvarotrigo/pen/GJXNwm) Añade o elimina la posibilidad de desplazarse a través de las secciones usando las teclas del teclado (activo por defecto).

- `directions`: (parámetro opcional) Los posibles valores son `all`, `up`, `down`, `left`, `right` o una combinación de lo mismos usando comas, por ejemplo: `down, right`. Determina la dirección para la que el desplazamiento estará habilitado o desabilitado. 

```javascript
//desabilitando todo tipo de desplazamiento con el teclado
$.fn.fullpage.setKeyboardScrolling(false);

//desabilitando el desplazamiento hacia abajo con el teclado 
$.fn.fullpage.setKeyboardScrolling(false, 'down');

//desabilitando el desplazamiento hacia abajo y hacia la derecha con el teclado
$.fn.fullpage.setKeyboardScrolling(false, 'down, right');
```
---
### setRecordHistory(boolean)
[demostración](http://codepen.io/alvarotrigo/pen/rVZWQb) Determina si fullPage.js modificará la historia del navegador con cada cambio de link the anclaje (#) en la URL.

```javascript
$.fn.fullpage.setRecordHistory(false);
```
---
### setScrollingSpeed(milliseconds)
[demostración](http://codepen.io/alvarotrigo/pen/NqLbeY) Define la velocidad de desplazamiento en milisegundos. 

```javascript
$.fn.fullpage.setScrollingSpeed(700);
```
---
### destroy(type)
[demostración](http://codepen.io/alvarotrigo/pen/bdxBzv) Destruye los eventos de fullPage.js y opcionalmente la estructura HTML creada por el mismo asi como cualquier estilo que haya aplicado.
Ideal para usar cuando se usa en páginas AJAX.

- `type`: (parámetro opcional) Si se define como `all` la estructura HTML creada por fullPage.js asi como cualquier estilo que haya aplicado serán eliminados. De este modo se mantendrá el HTMl original, es decir, el usado antes de que fullPage.js se iniciase. 

```javascript
//destrozando los eventos Javascript de fullPage.js (scrolls, hashchange in the URL...)
$.fn.fullpage.destroy();

//destrozando los eventos Javascript asi como cualquier modificación en el HTML echa tras iniciar fullPage.js
$.fn.fullpage.destroy('all');
```
---
### reBuild()
Ajusta el tamano de las secciones y diapositivas así como su posición y su posible barra de desplazamiento si se usa `scrollOverflow:true`.
Ideal para usar en combinación con llamadas AJAX o cambios externos en la estructura DOM de la página, especialmente cuando se usa `scrollOverflow:true`.

```javascript
$.fn.fullpage.reBuild();
```
---
### setResponsive(boolean)
[demostración](http://codepen.io/alvarotrigo/pen/WxOyLA) Define el modo "responsive". Cuando se define a `true` la funcionalidad de autoScrolling será desactivada tal y como sucedería si se disparasen las opciones `responsiveWidth` o `responsiveHeight`.

```javascript
$.fn.fullpage.setResponsive(true);
```
---
### responsiveSlides.toSections()
[Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/).
Convierte diapositivas horizontales en secciones verticales.

```javascript
$.fn.fullpage.responsiveSlides.toSections();
```
---
### responsiveSlides.toSlides()
[Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). 
Desace el cambio de las diapositivas horizontales que han sido convertidas a secciones verticales. Dejándolas de nuevo como diapositivas horizontales dentro de una sección.

```javascript
$.fn.fullpage.responsiveSlides.toSlides();
```

## Callbacks
[demostración](http://codepen.io/alvarotrigo/pen/XbPNQv) Puedes verlas en acción [aquí](http://alvarotrigo.com/fullPage/examples/callbacks.html)..

###afterLoad (`anchorLink`, `index`)
Se dispara cuando una sección ha sido cargada completamente en la ventana, una vez el desplazamiento ha terminado.
Parámetros:

- `anchorLink`: link de anclaje correspondiente a la sección.
- `index`: índice de la sección. Empezando por 1.

En caso de no terner links de anclaje definidos, el parámetro `index` será el que podrás usar.

Por ejemplo:

```javascript
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

		afterLoad: function(anchorLink, index){
			var loadedSection = $(this);

			//usando su índice
			if(index == 3){
				alert("Section 3 ended loading");
			}

			//usando su link de anclaje
			if(anchorLink == 'secondSlide'){
				alert("Section 2 ended loading");
			}
		}
	});
```
---
###onLeave (`index`, `nextIndex`, `direction`)
Se dispara una vez que el usuario abandone la sección, durante la transición a la nueva sección.
Si devuelves `false` el movimiento se cancelará antes de que tenga lugar.

Parámetros:

- `index`: índice de la sección que se deja atrás. Empezando por 1.
- `nextIndex`: índice de la sección de destino. Empezando por 1.
- `direction`: podrá tomar los valores `up` o `down` dependiendo de la dirección del desplazamiento.

Por ejemplo:

```javascript
	$('#fullpage').fullpage({
		onLeave: function(index, nextIndex, direction){
			var leavingSection = $(this);

			//después de abandonar la sección 2
			if(index == 2 && direction =='down'){
				alert("Me estoy moviendo a la sección 3!");
			}

			else if(index == 2 && direction == 'up'){
				alert("Me estoy moviendo a la sección 1!");
			}
		}
	});
```

####Cancelando un desplazamiento antes de que tenga lugar
Puedes cancelar un desplazamiento si devuelves `false` en el callback `onLeave`:

```javascript
	$('#fullpage').fullpage({
		onLeave: function(index, nextIndex, direction){
			//prevenimos el desplazamiento si la sección de destino es la tercera de la página
			if(nextIndex == 3){
				return false;
			}
		}
	});
```

---
###afterRender()
Será disparado justo después de que la estructura de la página sea generada por fullPage.js. Este callback es útil si quieres iniciar otros plugins o ejectuar cualquier otro código que requiera que la estructura de la página esté lista (ready). fullPage.js modifica la estructura DOM  de la página y por lo tanto puede que los elementos en la página se consideren dinámicos. Mira [las FAQs](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions) para mas información.

Ejemplo:

```javascript
	$('#fullpage').fullpage({
		afterRender: function(){
			var pluginContainer = $(this);
			alert("La estructura resultante ya está lista para su uso");
		}
	});
```
---
###afterResize()
Será disparado después de que la ventana del navegador sea reajustada en tamaño. Justo después de que las secciones se hayan reajustado.

Ejemplo:

```javascript
	$('#fullpage').fullpage({
		afterResize: function(){
			var pluginContainer = $(this);
			alert("Las secciones han terminado de reajustarse");
		}
	});
```
---
###afterResponsive(`isResponsive`)
Será disparado después de que fullPage.js cambie de su estado normal a "responsive" o biceversa. 

Parámetros:

- `isResponsive`: boolean que determina si entra (`true`) o sale (`false`) del modo "responsive" hacia su modo normal. 

Ejemplo:

```javascript
	$('#fullpage').fullpage({
		afterResponsive: function(isResponsive){
			alert("Es responsive: " + isResponsive);
		}
	});
```
---
###afterSlideLoad (`anchorLink`, `index`, `slideAnchor`, `slideIndex`)
Será disparado una vez cargue la diapositiva de una sección, después de que el desplazamiento haya terminado.

Parámetros:

- `anchorLink`: link de anclaje de la sección correspondiente.
- `index`: índice de la sección. Empezando por 1.
- `slideAnchor`: link de anclaje correspondiente a la diapositiva que se acaba de cargar (en caso de que se use un link de anclaje)
- `slideIndex`: índice de la diapositiva cargada. Empezando por 1. (la diapositiva inicial no contará como diapositiva sino como una sección).

En caso de que no haya links de anclaje definidos para las diapositivas podrás hacer uso del parámetro `slideIndex`.
Ejemplo:

```javascript
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

		afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
			var loadedSlide = $(this);

			//primera diapositiva de la segunda sección
			if(anchorLink == 'secondPage' && slideIndex == 1){
				alert("Primera diapositiva cargada");
			}

			//segunda diapositiva de la segunda sección (suponiendo que #secondSlide es 
			//el link de anclaje d ela segunda diapositiva
			if(index == 2 && slideIndex == 'secondSlide'){
				alert("Segunda diapositiva cargada");
			}
		}
	});
```


---
###onSlideLeave (`anchorLink`, `index`, `slideIndex`, `direction`, `nextSlideIndex`)
Será disparado una vez el usuario abandone la diapositiva acutal para ir a otra, durante la transición hacia la nueva diapositiva. 
Devolver `false` 
Si devuelves `false` el movimiento se cancelará antes de que tenga lugar.

Parámetros:

- `anchorLink`: link de anclaje correspondiente a la sección.
- `index`: índice de la sección. Empezando por 1.
- `slideIndex`: índice de la diapositiva. **Empezando por 0.**
- `direction`: toma los valores `right` or `left` dependiendo de la dirección de desplazamiento.
- `nextSlideIndex`: índice de la diapositiva de destino. **Empezando por from 0.**


Ejemplo:

```javascript
	$('#fullpage').fullpage({
		onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
			var leavingSlide = $(this);

			//abandonando la primera diapositiva de la segunda sección y moviendo hacia la derecha
			if(index == 2 && slideIndex == 0 && direction == 'right'){
				alert("Abandonando la diapositiva 1!!");
			}

			//abandonando la tercera diapositiva de la segunda sección y moviendo hacia la izquierda 
			if(index == 2 && slideIndex == 2 && direction == 'left'){
				alert("Yendo a la diapositiva 2! ");
			}
		}
	});
```

####Cancelando un desplazamiento antes de que tenga lugar
Puedes cancelar el desplazamiento devolviendo `false` en el callback `onSlideLeave`. Exáctametne igual que cuando se usa [`onLeave`](https://github.com/alvarotrigo/fullPage.js/blob/master/README_SPANISH.md#cancelando-un-desplazamiento-antes-de-que-tenga-lugar).

#Reportando problemas
1. Por favor, usa el buscador en github issues para buscar tu duda o problema antes de pregunar.
2. Asegurate de que estás usando la última versión de fullPage.js. No se provee soporte para versiones anteriores.
3. Usa el [foro de Github](https://github.com/alvarotrigo/fullPage.js/issues) para crear la pregunta o tema y **házlo en ingles** a ser posible.
4. **Se requerirá la reproducción aislada del problema.** Usa [jsfiddle](http://jsfiddle.net/97tbk/418/) o [codepen](http://codepen.io/alvarotrigo/pen/NxyPPp) si es posible.

#Contribuir con fullPage.js
Por favor mira [Contributing to fullpage.js](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)

#Changelog
Para ver la lista de cambios recientes, mira [la sección de releases](https://github.com/alvarotrigo/fullPage.js/releases).
Solo disponible en ingles :)

#Build tasks
Want to build fullpage.js distribution files? Please see [Build Tasks](https://github.com/alvarotrigo/fullPage.js/wiki/Build-tasks)

#Recursos
- [Template de Wordpress](http://alvarotrigo.com/fullPage/utils/wordpress.html)
- [Herramienta de animacion de CSS Easing - Matthew Lein](http://matthewlein.com/ceaser/) (útil para definir la opción `easingcss3`)
- [fullPage.js jsDelivr CDN](http://www.jsdelivr.com/#!jquery.fullpage)
- [fullPage.js plugin para October CMS](http://octobercms.com/plugin/freestream-parallax)
- [fullPage.js wordpress plugin](https://wordpress.org/plugins/wp-fullpage/)
- [fullPage.js React implementación](https://github.com/subtirelumihail/react-fullpage)
- [fullPage.js Angular2 directive](https://github.com/meiblorn/ng2-fullpage)
- [fullPage.js angular directive](https://github.com/hellsan631/angular-fullpage.js)
- [fullPage.js ember-cli addon](https://www.npmjs.com/package/ember-cli-fullpagejs)
- [fullPage.js Rails Ruby Gem](https://rubygems.org/gems/fullpagejs-rails)
- [Angular fullPage.js - Adaptation for Angular.js v1.x](https://github.com/mmautomatizacion/angular-fullpage.js)
- [Integrating fullPage.js con Wordpress (Tutorial)](http://premium.wpmudev.org/blog/build-apple-inspired-full-page-scrolling-pages-for-your-wordpress-site/)

## Quién usa fullPage.js

[![Google](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/google.png)](http://www.yourprimer.com/)
[![Sony](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sony.gif)](http://www.sony-asia.com/microsite/mdr-10/)
![Vodafone](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/vodafone.png)
[![British Airways](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/british-airways-fullpage.gif)](http://www.britishairways.com/en-gb/information/travel-classes/experience-our-cabins)
[![McDonalds](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mcdonalds.png)](https://mcdonalds.com.au/create-your-taste)
[![EA](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ea.png)](http://www.battlefield.com/)
[![Mi](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mi.png)](http://www.mi.com/shouhuan)
[![scribe](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/scribe.png)](http://usescribe.com/)
[![redd](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sym.png)](http://www.sanyang.com.tw/service/Conception/)
[![Bugatti](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/bugatti.gif)](http://www.bugatti.com/veyron/veyron-164/)
[![Bugatti](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/edarling.png)](https://www.edarling.de/)

- http://www.britishairways.com/en-gb/information/travel-classes/experience-our-cabins
- http://www.sony-asia.com/microsite/mdr-10/
- http://www.yourprimer.com/
- http://mcdonalds.com.au/create-your-taste
- http://burntmovie.com/
- http://essenso.com/
- http://www.bugatti.com/veyron/veyron-164/
- http://www.kibey.com/
- http://www.newjumoconcept.com/
- http://www.shootinggalleryasia.com/
- http://medoff.ua/en/
- http://promo.prestigio.com/grace1/
- http://www.mi.com/shouhuan
- http://www.commoditiesdemystified.info/en/
- https://moneytree.jp/
- http://torchbrowser.com/
- http://thekorner.fr/
- http://www.restaurantwoods.nl/
- https://www.edarling.de/
- http://urban-walks.com/
- http://lingualeo.com/
- http://charlotteaimes.com/
- http://collection.madeofsundays.com
- http://thiswasmybest.com/
- http://www.boxreload.com/
- http://lawinenstift.com/
- http://duis.co/
- http://educationaboveall.org/
- http://camfindapp.com/
- http://bnacademy.com.au/
- http://rockercreative.com/
- http://wantnova.com/
- http://usescribe.com/
- http://lucilecazanave.com/
- http://boxx.hk/
- http://bearonunicycle.com/
- http://rawmilk.dk/en/
- http://www.famavolat.com/
- http://www.carpetloverclub.com/
- http://www.sanyang.com.tw/service/Conception/
- http://www.batzaya.net/
- http://www.graphicid.dk/
- http://portfolio.io.utwente.nl/student/dijkavan/
- http://www.carlphot.com/
- http://medissix.com/
- http://trasmissione-energia.terna.it/
- http://www.thefoodmovie.com/
- http://www.villareginateodolinda.it
- http://www.kesstrio.com
- http://www.karmaffne.com/
- http://fossdistillery.is
- http://www.conversionculture.com/
- http://ded-morozz.kiev.ua/
- http://yizeng.me/
- http://unabridgedsoftware.com/
- http://wc2014.plnwrx.com/
- http://organice.io/
- http://atlanticcorp.us/
- http://moysport.ru/
- http://wcfixtures.co.uk/
- http://www.dopehustleinc.com/default.php
- http://themify.me/demostración/#theme=fullpane
- http://dancingroad.com
- http://www.camanihome.com/
- http://www.exapoint.ch/
- https://life2film.com/en/
- http://www.altamirarecovery.com/shame/

Puedes encontrar otra lista más larga [aquí](http://libscore.com/#$.fn.fullpage).

## Donaciones
Agradeceré cualquier donación!

[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)


## Licencia

**Los creditos en los comentarios en los archivo sde Javascript y CSS han de mantenerse intactos.** (incluso despues de minificar y combinar archivos)

(The MIT License)

Copyright (c) 2013 Alvaro Trigo &lt;alvaro@alvarotrigo.com&gt;

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia de este software y de los archivos de documentación asociados (el "Software"), para utilizar el Software sin restricción, incluyendo sin limitación los derechos a usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar, y/o vender copias del Software, y a permitir a las personas a las que se les proporcione el Software a hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O CUALQUIER OTRO MOTIVO, QUE SURJA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U OTRO TIPO DE ACCIONES EN EL SOFTWARE
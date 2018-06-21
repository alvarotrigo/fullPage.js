![](https://cloud.githubusercontent.com/assets/1706326/23580315/f28edab4-00f6-11e7-90f9-81ffafd77b0e.gif)

Lee [como usar Extensiones](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish#uso-de-extensiones) antes de usar la opción de parallax.
- [Ejemplo online](http://alvarotrigo.com/fullPage/extensions/parallax.html)
- [Estructura HTML necesaria](#estructura-html-necesaria)
- [Añadiendo la imagen de fondo](#a%C3%B1adiendo-la-imagen-de-fondo)
- [Opciones](#opciones)
  - [Opciones del efecto parallax](#opciones-del-efecto-parallax)
- [Métodos](#m%C3%A9todos)

## Estructura HTML necesaria
Para usar el efecto de parallax en secciones o diapositivas, tendremos que añadir un nuevo elemento que use la clase `fp-bg`. Será un elemento `div` vacío que situaremos como primer elemento debajo de la sección o diapositiva a la que pertenece.

```html
<div class="fp-bg"></div>
```

Sobre éste elemento tendremos que aplicar la imagen de fondo, en lugar de hacerlo diréctamente sobre la sección o las diapositivas a las que pertenece.

Por ejemplo:
```html
<div id="fullpage">
    <div class="section" id="section1">
        <div class="fp-bg"></div>
        Diapositiva 1.1
    </div>
    <div class="section" id="section2">
        <div class="slide" id="slide2-1">
            <div class="fp-bg"></div>
            Diapositiva 2.1
        </div>
        <div class="slide" id="slide2-2">
            <div class="fp-bg"></div>
            Diapositiva 2.2
        </div>
    </div>
</div>
```

Podrás observar esta misma estructura en el código fuente del [ejemplo de parallax](http://alvarotrigo.com/fullPage/extensions/parallax.html).

> Si por alguna razón no quieres añadir un nuevo elemento fp-bg en la estructura de la página, puedes usar la opción `property` dentro de `parallaxOptions` y definir su valor a `background`. De este modo podrás aplicar el fondo directamente sobre la sección o diapositiva.
> Como se explicará luego en la sección de Opciones del efecto parallax, solamente recomiendo hacer ésto si es realmente necesario, pues el rendimiento no será el mismo que cuando se usa el elemento `fp-bg`.

<br>

## Añadiendo la imagen de fondo
El fondo debe aplicarse directamente sobre el elemento `fp-bg` del mismo modo que lo harías en una sección o diapositiva.
Puedes usar CSS para ello o bien usar estilos inline a través del atributo `style`.

Por ejemplo:
```css
#section1 .fp-bg{
    background-image: url('imgs/alvaro-genious.jpg');
    background-size: cover;
    background-position: center 80%;
}
```

## Opciones

| Opción  | Descripción |
| ------------- | ------------- |
| **parallax**  | (por defecto `false`). [Extension of fullPage.js](http://alvarotrigo.com/fullPage/extensions/). Determina si usar el efecto de parallax en secciones y diapositivas.  |
| **parallaxOptions:**   | (por defecto: `{ type: 'reveal', percentage: 62, property: 'translate'}`). Permite configurar los parámetros para el efecto de parallax cuando se usa la opción `parallax: true`.     |
<br>

### Opciones del efecto parallax
Puedes verlas en acción en [la página de ejemplo](http://alvarotrigo.com/fullPage/extensions/parallax.html).

Descripción de las opciones de configuración disponibles en la opción `parallaxOptions`:

| parallaxOptions  | Descripción |
| ------------- | ------------- |
| **type**  | (por defecto `reveal`) Los posibles valores para esta opción son `cover` y `reveal`. Permiten escoger el modo en el que se superponen las secciones o diapositivas determinando si la sección/diapositiva actual estará encima o debajo de la de destino. Cuando se usa la opción `cover` la sección/diapositiva destino aparecerá cubriendo parte de la sección/diapositiva actual. Si se usa `reveal` el efecto será el contrario y se cubrirá parte de la sección/diapositiva de destino mientras ésta va apareciendo. |
| **percentage**  | (por defecto 62 ) permite definir el porcentaje del efecto parallax en relación con el viewport (tamaño de la pantalla). Usar un valor pequeño resultará en un efecto parallax menor, y usar 100, que es el máximo, mostrará un fondo estático.  |
| **property** | Determina si se aplicará el efecto parallax sobre el elemento `fp-bg` o directamente sobre la propiedad background de la sección/diapositva. Se recomienda usar el valor por defecto para esta opción. |

Se ha de tener en cuenta que usar el elemento `fp-bg` proporciona un rendimiento mucho mejor y más fluido a la hora de realizar el efecto. Ésto es así porque de este modo se hace uso de la aceleración por hardware al usar translate3d. La opción `background` está disponible para  aquellos que por alguna razón no quieran añadir el elemento extra `fp-bg` o que no puedan modificar el código HTML.

## Métodos
Puedes verlos en acción en [la página de ejemplo](http://alvarotrigo.com/fullPage/extensions/parallax.html).

### setOption(optionName, value)
Define un valor para la opción que se le pase como parámetro. `optionName` puede ser cualquiera de las opciones disponibles en `parallaxOptions`. (`type`, `percentage`, o `property`).

```javascript
//cambiando el valor de la propiedad `typo`
fullpage_api.parallax.setOption('type', 'cover');

//cambiando el valor de la propiedad `percentage`
fullpage_api.parallax.setOption('percentage', '30');
```
---

### init()
Habilita el efecto parallax. Es útil cuando se necesita habilitar dicho efecto de modo dinámico en cierto momento determinado.
```javascript
fullpage_api.parallax.init();
```
---
### destroy()
Deshabilita el efecto parallax.
```javascript
fullpage_api.parallax.destroy();
```

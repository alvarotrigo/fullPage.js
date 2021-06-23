# fullPage.js
![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.gif?v=2)

<p align="center">
  <a href="https://github.com/MercureTony/fullPage.js">English</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish#fullpagejs">Español</a> |
  <span>Français</span> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#fullpagejs">Pусский</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese#fullpagejs">中文</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs">한국어</a>
</p>

<p align="center">
	Disponible pour <a href="https://github.com/alvarotrigo/vue-fullpage.js">Vue</a>, <a href="https://github.com/alvarotrigo/react-fullpage">React</a> et <a href="https://github.com/alvarotrigo/angular-fullpage">Angular</a>.
</p>

---

![fullPage.js version](http://img.shields.io/badge/fullPage.js-v3.1.2-brightgreen.svg)
[![License](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/fullpage.js/badge?style=rounded)](https://www.jsdelivr.com/package/npm/fullpage.js)
&nbsp;&nbsp; **|**&nbsp;&nbsp; *7Kb gziped* &nbsp;&nbsp;**|**&nbsp;&nbsp; *Created by [@imac2](https://twitter.com/imac2)*

- [Demo en ligne](http://alvarotrigo.com/fullPage/) | [Codepen](https://codepen.io/alvarotrigo/pen/NxyPPp)
- [Wordpress plugin for Gutenberg](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/) and [WordPress pluging fo Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)
- [Thème Wordpress](http://alvarotrigo.com/fullPage/utils/wordpress.html)
- [Extensions fullpage.js](http://alvarotrigo.com/fullPage/extensions/)
- [Questions fréquemment demandées](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)

---

Une bibliothèque simple et facile à utiliser pour créer des sites Web qui défile en plein écran (aussi connus sous le nom de sites web d'une seule page ou d'une page).
Elle permet la création de sites Web à défilement en plein écran, ainsi que l'ajout de quelques carousel panoramique à l'intérieur des sections du site.

- [Introduction](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#introduction)
- [Compatibilité](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#compatibilité)
- [Licence](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#licence)
- [Usage](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#usage)
  - [Créer des liens vers des sections ou des diapositives](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#cr%C3%A9er-des-liens-vers-des-sections-ou-des-diapositives)
  - [Créer des sections plus petites ou plus grandes](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#créer-des-sections-plus-petites-ou-plus-grandes)
  - [Classes d'états ajoutées par fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#classes-d%C3%A9tats-ajout%C3%A9es-par-fullpagejs)
  - [Lazy loading](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#lazy-loading)
  - [Lecture automatique/pause automatique des médias intégrés](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#lecture-automatiquepause-automatique-des-médias-intégrés)
  - [Utiliser des extensions](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#utiliser-des-extensions)
- [Options](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#options)
- [Méthodes](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#méthodes)
- [Callbacks](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#callbacks)
- [Signaler les problèmes](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#signaler-les-problèmes)
- [Contribuer à fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#contribuer-à-fullpagejs)
- [Changelog](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#changelog)
- [Build tasks](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#build-tasks)
- [Ressources](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#ressources)
- [Qui utilise fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#qui-utilise-fullpagejs)
- [Dons](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#dons)
- [Sponsors](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#sponsors)

## Introduction
Les suggestions sont les bienvenues, non seulement pour les demandes de fonctionnalités mais aussi pour l'amélioration du style de codage.
Faisons de cette bibliothèque une grande bibliothèque pour rendre la vie des gens plus facile !

## Compatibilité
fullPage.js est entièrement fonctionnel sur tous les navigateurs modernes, ainsi que sur certains anciens comme Internet Explorer 9, Opera 12, etc.
Il fonctionne avec les navigateurs supportant CSS3 et avec ceux qui ne l'ont pas, ce qui le rend idéal pour la compatibilité avec les anciens navigateurs.
Il fournit également un support tactile pour les téléphones mobiles, les tablettes et les ordinateurs à écran tactile.

Remerciements particuliers à [Browserstack](http://www.browserstack.com/) pour son soutien à fullpage.js.

## Licence

### Licence commercial
Si vous voulez utiliser fullPage pour développer des sites, thèmes, projets et applications non open-source, la licence commerciale est la licence appropriée. Avec cette option, votre code source reste propriétaire. Ce qui signifie que vous n'aurez pas à changer tout le code source de votre application pour une licence open source. [Achat d'une licence commerciale pleine page](https://alvarotrigo.com/fullPage/pricing/)

### Licence open-source
Si vous créez une application open source sous une licence compatible avec la [licence GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.html), vous pouvez utiliser fullPage sous les termes de la GPLv3.

**Les commentaires de crédit dans les fichiers JavaScript et CSS doivent être conservés intacts.** (même après la combinaison ou la minification)

[En savoir plus sur la licence de fullPage](https://alvarotrigo.com/fullPage/pricing/).

## Usage
Comme vous pouvez le voir dans les fichiers d'exemple, vous devrez inclure :
 - Le fichier JavaScript `fullpage.js` (ou sa version minifié `fullpage.min.js`)
 - Le fichier css `fullpage.css`.

 **Optionnellement**, lorsque vous utilisez `css3:false`, vous pouvez ajouter le fichier [easings file](https://github.com/alvarotrigo/fullPage.js/tree/master/vendors/easings.min.js) au cas où vous voudriez utiliser d'autres effets d'assouplissement que celui inclus dans la bibliothèque (`easeInOutCubic`).

 #### Installer avec bower ou npm
 **En option**, vous pouvez installer fullPage.js avec bower ou npm si vous préférez :

 Terminal :
 ```shell
 // Avec bower
 bower install fullpage.js

 // Avec npm
 npm installer fullpage.js
 ```

 #### Y compris les fichiers :

```html
<link rel="stylesheet" type="text/css" href="fullpage.css" />

<!-- Cette ligne suivante est facultative. Seulement nécessaire si vous utilisez l'option css3:false et que vous voulez utiliser d'autres effets d'assouplissement plutôt que "easeInOutCubic". -->
<script src="vendors/easings.min.js"></script>

<!-- This following line is only necessary in the case of using the option `scrollOverflow:true` -->
<script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>

<script type="text/javascript" src="fullpage.js"></script>
```


Vous utilisez Webpack, Browserify ou Require.js ? Vérifiez <a href="https://github.com/alvarotrigo/fullPage.js/wiki/Use-module-loaders-for-fullPage.js">comment utiliser fullPage.js avec les chargeurs de modules </a>.

### Utilisation facultative du CDN
Si vous préférez utiliser un CDN pour charger les fichiers nécessaires, fullPage.js est dans CDNJS :
https://cdnjs.com/libraries/fullPage.js

### Structure HTML requise
Commencez votre document HTML avec la déclaration obligatoire[déclaration DOCTYPE HTML](http://www.corelangs.com/html/introduction/doctype.html) sur la 1ère ligne de votre code HTML. Sinon, vous pourriez avoir des problèmes avec la hauteur des sections. Les exemples fournis utilisent HTML 5 doctype `<!DOCTYPE html>`.

Chaque section sera définie avec un élément contenant la classe `section`.
La section active par défaut sera la première section, qui sera considérée comme la page d'accueil.

Les sections doivent être placées dans un emballage (`<div id="fullpage">` dans ce cas). L'emballage ne peut pas être l'élément `body`.

```html
<div id="fullpage">
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
</div>
```

Si vous voulez définir un point de départ différent de la première section ou de la première diapositive d'une section, ajoutez simplement la classe `active` à la section et à la diapositive que vous voulez charger en premier.

```html
<div class="section active">Some section</div>
```

Afin de créer un curseur paysage dans une section, chaque diapositive sera définie par défaut avec un élément contenant la classe `slide`:

```html
<div class="section">
	<div class="slide"> Slide 1 </div>
	<div class="slide"> Slide 2 </div>
	<div class="slide"> Slide 3 </div>
	<div class="slide"> Slide 4 </div>
</div>
```

Vous pouvez voir un exemple entièrement fonctionnel de la structure HTML dans le [fichier `simple.html`](https://github.com/alvarotrigo/fullPage.js/blob/master/examples/simple.html).

### Initialisation

#### Initialisation avec Vanilla Javascript
Tout ce que vous avez à faire est d'appeler fullPage.js avant de fermer la balise `</body>`.

```javascript
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

//methods
fullpage_api.setAllowScrolling(false);
```

#### Initialisation avec jQuery
Vous pouvez utiliser fullpage.js comme plugin jQuery si vous le souhaitez !

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});
```

Les fonctions et méthodes peuvent toujours être appelées de la manière jQuery, comme [dans  fullPage.js v2.X](https://github.com/alvarotrigo/fullPage.js/tree/2.9.7).

#### Exemple de Vanille JS avec toutes les options
Une initialisation plus complexe avec toutes les options définies pourrait ressembler à ceci :

```javascript

var myFullpage = new fullpage('#fullpage', {
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Défilement
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
	bigSectionsDestination: null,

	//Accessibilité
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
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
	dropEffect: false,
	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
	waterEffect: false,
	waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Sélecteurs personnalisés
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//événements
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});
```

### Créer des liens vers des sections ou des diapositives
Si vous utilisez fullPage.js avec des liens d'ancrage pour les sections (en utilisant l'option `anchors` ou l'attribut `data-anchor` dans chaque section), alors vous pourrez également utiliser des liens d'ancrage pour naviguer directement vers une certaine diapositive dans une section.

Ceci serait un exemple d'un lien avec un ancre : http://alvarotrigo.com/fullPage/#secondPage/2 (qui est l'URL que vous verrez une fois que vous accéderez à cette section/diapositive manuellement)
Remarquez que la dernière partie de l'URL se termine par `#secondPage/2`.

Avoir l'initialisation suivante :

```javascript
new fullpage('#fullpage', {
	ancres :['firstPage','secondPage','thirdPage']
}) ;
```

L'ancre à la fin de l'URL `#secondPage/2` définit respectivement la section et la diapositive de destination. Dans l'URL précédente, la section de destination sera celle définie avec l'ancre `secondPage` et la diapositive sera la 2ème diapositive, car nous utilisons l'index `2` pour cela. (la première diapositive d'une section a l'index 0, car techniquement c'est une section).

Nous aurions pu utiliser une ancre personnalisée pour la diapositive au lieu de son index si nous avions utilisé l'attribut `data-anchor` sur le balisage HTML de cette façon :

```html
<div class="section">
	<div class="slide" data-anchor="slide1"> Slide 1 </div> Slide 1
	<div class="slide" data-anchor="slide2"> Slide 2 </div>
	<div class="slide" data-anchor="slide 3"> slide 3 </div>
	<div class="slide" data-anchor="slide4"> Slide 4 </div>
</div>
```
Dans ce dernier cas, l'URL que nous utiliserions serait `#secondPage/slide3`, qui est l'équivalent de notre précédente `#secondPage/2`.

Notez que les ancres de section peuvent aussi être définies de la même manière, en utilisant l'attribut `data-anchor`, si aucun tableau `anchors` n'est fourni.

**Attention!**, les balises `data-anchor` ne peuvent pas avoir la même valeur que n'importe quel élément ID sur le site (ou élément NAME pour IE).

### Créer des sections plus petites ou plus grandes
[Démo](http://codepen.io/alvarotrigo/pen/BKjRYm) fullPage.js fournit un moyen de supprimer la restriction de hauteur complète de ses sections et diapositives. Il est possible de créer des sections dont la hauteur est plus petite ou plus grande que la fenêtre. C'est idéal pour les pieds de page.
Il est important de réaliser qu'il n'est pas logique d'avoir toutes vos sections utilisant cette fonctionnalité. S'il y a plus d'une section dans le chargement initial du site, fullPage.js ne défilera pas du tout pour voir la section suivante comme elle sera déjà dans la fenêtre.

Pour créer des sections plus petites, utilisez simplement la classe `fp-auto-height` dans la section que vous voulez appliquer. Il prendra alors la hauteur définie par le contenu de votre section/diapositive.



```html
<div class="section">Vue d'ensemble </div>
<div class="section fp-auto-height">Auto height</div>
```

##### Sections de hauteur automatique réactives
Une hauteur automatique réactive peut être appliquée en utilisant la classe `fp-auto-haut-responsive`. De cette façon, les sections seront en plein écran jusqu'à ce que le mode réactif soit activé. Ensuite, ils prendront la taille requise par leur contenu, qui peut être plus grand ou plus petit que la fenêtre d'affichage.

#### Classes d'états ajoutées par fullpage.js
Fullpage.js ajoute plusieurs classes dans différents éléments pour garder une trace de l'état du site :

- `active` est ajouté la section visible actuelle et la diapositive.
- `active` est ajouté à l'élément de menu courant (si vous utilisez l'option "menu").
- Une classe de la forme `fp-viewing-SECTION-SLIDE` est ajoutée à l'élément `body` du site. (ex :[`fp-viewing-secondPage-0`](http://alvarotrigo.com/fullPage/#secondPage))) Les parties ` SECTION ` et ` SLIDE ` seront les ancres (ou index si aucune ancre n'est fournie) de la section et de la glissière courante.
- `fp-responsive` est ajouté à l'élément `body` lorsque l'entrée en mode réactif
- `fp-enabled ` est ajouté à l'élément `html` lorsque fullpage.js est activé. (et enlevés lorsqu'ils sont détruits).
- `fp-destroyed` est ajouté au conteneur fullpage.js lorsque fullPage.js est détruit.

#### Lazy Loading
[Demo](http://codepen.io/alvarotrigo/pen/eNLBXo) fullPage.js fournit un moyen de charger paresseusement des images, des vidéos et des éléments audio pour qu'ils ne ralentissent pas le chargement de votre site ou le transfert de données inutilement gaspillé.
Si vous utilisez un chargement paresseux, tous ces éléments ne seront chargés qu'en entrant dans la fenêtre d'affichage.
Pour activer le lazy loading, il vous suffit de changer votre attribut `src` en `data-src` comme indiqué ci-dessous :

```html
<img data-src="image.png">
<vidéo>
	<source data-src="video.webm" type="video/webm" />
	<source data-src="video.mp4" type="video/mp4" />
</vidéo>
 ```

Si vous utilisez déjà une autre solution de chargement paresseux qui utilise également `data-src`, vous pouvez désactiver le chargement paresseux de fullPage.js en définissant l'option `lazyLoading : false`.

### Lecture automatique/pause automatique des médias intégrés

[Demo](https://codepen.io/alvarotrigo/pen/pXEaaK) **Note** : la fonction de lecture automatique peut ne pas fonctionner sur certains appareils mobiles selon le système d'exploitation et le navigateur (i.e. [Safari on iOS](https://webkit.org/blog/6784/new-video-policies-for-ios/) version < 10.0).

##### Jouer sur la section/charge de diapositives :
L'utilisation de l'attribut `autoplay` pour les vidéos ou l'audio, ou du paramètre `autoplay=1` pour les iframes youtube entraînera la lecture de l'élément média au chargement de la page.
Pour le lire sur le chargement de sections/diapositives, utilisez à la place l'attribut `data-autoplay`. Par exemple :

```html
<audio data-autoplay>
	<source src="horse.ogg" type="audio/ogg">
</audio>
```

##### Pause en congé
Les iframes HTML5 `<video>` / `<audio>` et Youtube sont automatiquement mis en pause lorsque vous vous éloignez d'une section ou d'une diapositive. Ceci peut être désactivé en utilisant l'attribut `data-autoplay`. Par exemple :

```html
<audio data-autoplay>
	<source src="horse.ogg" type="audio/ogg">
</audio>
```

#### Utiliser des extensions
fullpage.js [fournit un ensemble d'extensions](http://alvarotrigo.com/fullPage/extensions/) que vous pouvez utiliser pour améliorer ses fonctionnalités par défaut. Toutes ces options sont listées comme [options fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/dev/lang/french/#options).

Extensions nécessite que vous utilisiez le fichier minifié [`fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js) qui se trouve dans le dossier [`dist`](https://github.com/alvarotrigo/fullPage.js/tree/master/dist) au lieu du fichier fullPage.js habituel (`fullpage.js` ou `fullpage.min.js`).

Une fois le fichier d'extension acquis, vous devrez l'ajouter avant fullPage. Par exemple, si je veux utiliser l'extension Continuous Horizontal, j'aurais inclus le fichier d'extension puis la version des extensions du fichier fullPage.

```html
<script type="text/javascript" src="fullpage.continuousHorizontal.min.js"></script>
<script type="text/javascript" src="fullpage/fullpage.extensions.min.js"></script>
```

Une clé d'activation et une clé de licence seront requises pour chaque extension. [Voir plus de détails à ce sujet ici](https://github.com/alvarotrigo/fullPage.js/wiki/How-to-activate-a-fullPage.js-extension).

Vous pourrez ensuite les utiliser et les configurer comme expliqué dans [options](https://github.com/alvarotrigo/fullPage.js/tree/dev/lang/french#options).

## Options

- `licenseKey` : (par défaut `null`).**Cette option est facultltative.** Si vous utilisez fullPage dans un projet non open source, vous devez utiliser la clé de licence fournie lors de l'achat de la Licence Commerciale fullPage. Si votre projet est open source, [contactez-moi](https://alvarotrigo.com/#contact) avec un lien vers son répertoire et je vous fournirai une clé de licence. Pour en savoir plus sur les licences [ici] (https://github.com/alvarotrigo/fullPage.js#license) et [sur le site Web] (https://alvarotrigo.com/fullPage/pricing/). Par exemple :

```javascript
new fullpage({ {
    licenceKey:'VOTRE_CLÉ_ICI'.
});
```

- `v2compatible` : (par défaut `false`). Détermine s'il faut le rendre 100% compatible avec n'importe quel code écrit pour la version 2, en ignorant les nouvelles fonctionnalités ou les changements api de la version 3. Les classes d'état, la signature de rappel, etc. fonctionneront exactement de la même manière que sur la version 2. **Notez que cette option sera supprimée à un moment donné dans le futur.

- `controlArrows` : (par défaut `true`) Détermine s'il faut utiliser les flèches de contrôle pour que les diapositives se déplacent vers la droite ou vers la gauche.

- `verticalCentered` : (par défaut `true`) Centrer verticalement le contenu à l'intérieur des sections. Lorsqu'il est réglé sur ` true `, votre contenu sera enveloppé par la bibliothèque. Envisagez d'utiliser la délégation ou de charger vos autres scripts dans le callback `afterRender`.

- `scrollingSpeed` : (par défaut `700`) Vitesse en millisecondes pour les transitions de défilement.

- `sectionsColor` : (default `none`) Définissez la propriété CSS `background-color` pour chaque section.
Exemple :

```Javascript
new fullpage('#fullpage', {
	sectionsCouleur : ['#f2f2f2f2','#4BBFC3','#7BAABE','whitesmoke','#000'],
}) ;
```

- `anchors` : (default `[]`) Définit les liens d'ancrage (#exemple) à afficher sur l'URL de chaque section. La valeur des ancres doit être unique. La position des ancres dans le tableau définira à quelles sections l'ancre est appliquée. (deuxième position pour la deuxième section et ainsi de suite). L'utilisation des ancres permet également de naviguer vers l'avant et vers l'arrière par le biais du navigateur. Cette option permet également aux utilisateurs de mettre en signet une section ou une diapositive spécifique. **Attention**, les ancres ne peuvent pas avoir la même valeur que n'importe quel élément ID sur le site (ou élément NOM pour IE). Maintenant les ancres peuvent être définies directement dans la structure HTML en utilisant l'attribut `data-anchor` comme expliqué ici.

- `lockAnchors` : (default `false`) Détermine si les ancres dans l'URL auront un effet dans la bibliothèque. Vous pouvez toujours utiliser les ancres en interne pour vos propres fonctions et rappels, mais elles n'auront aucun effet sur le défilement du site. Utile si vous voulez combiner fullPage.js avec d'autres plugins en utilisant l'ancre dans l'URL.

**important :** Il est utile de comprendre que les valeurs du tableau d'options `anchors` sont en corrélation directe avec l'élément avec la classe de `.section`par sa position dans le balisage.

- `easing` : (default `easeInOutCubic`) Définit l'effet de transition à utiliser pour le défilement vertical et horizontal. Il nécessite le fichier `vendors/easings.min.js` ou [jQuery UI](http://jqueryui.com/) pour utiliser certaines de[ses transitions](http://api.jqueryui.com/easings/). D'autres bibliothèques pourraient être utilisées à la place.

- `easingcss3` : (default `ease`) Définit l'effet de transition à utiliser en cas d'utilisation de `css3:true`. Vous pouvez utiliser les [prédéfinis](http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) (tels que `linear`, `ease-out`...) ou créer vos propres en utilisant la fonction `cubic-bezier`. Vous pouvez utiliser [Matthew Lein CSS Easing Animation Tool](http://matthewlein.com/ceaser/) pour cela.

- `loopTop` : (défaut `false`) Définit si le défilement vers le haut dans la première section doit défiler jusqu'à la dernière section ou non.

- ` loopBottom` : (défaut `false`) Définit si le défilement vers le bas dans la dernière section doit défiler vers la première ou non.

- `loopHorizontal` : (par défaut `true`) Définit si les curseurs horizontaux boucleront après avoir atteint la dernière diapositive ou la précédente ou non.

- `css3` :  (par défaut `true`). Définit s'il faut utiliser des transformations JavaScript ou CSS3 pour faire défiler les sections et les diapositives. Utile pour accélérer le mouvement dans les tablettes et les appareils mobiles avec les navigateurs supportant CSS3. Si cette option est définie sur `true` et que le navigateur ne supporte pas CSS3, un repli sera utilisé à la place.

- `autoScrolling` : (par défaut `true`) Définit s'il faut utiliser le défilement "automatique" ou "normal". Cela a également une incidence sur la façon dont les sections s'intègrent dans la fenêtre du navigateur/de l'appareil dans les tablettes et les téléphones mobiles.

- `fitToSection`: (par défaut `true`) Détermine si des sections doivent ou non être ajustées à la fenêtre d'affichage. Lorsqu'elle est réglée sur `true`, la section active courante remplira toujours toute la fenêtre d'affichage. Sinon, l'utilisateur sera libre de s'arrêter au milieu d'une section.

- `fitToSectionDelay` : (par défaut 1000). Si `fitToSection` est mis à true, cela retarde l'adaptation par millisecondes configurées.

- `scrollBar` : (par défaut `false`) Détermine s'il faut utiliser la barre de défilement pour le site ou non. En cas d'utilisation de la barre de défilement, la fonctionnalité `autoScrolling` fonctionnera toujours comme prévu. L'utilisateur sera également libre de faire défiler le site avec la barre de défilement et fullPage.js s'adaptera à la section à l'écran lorsque le défilement sera terminé.

- `paddingTop` : (par défaut `0`) Définit le remplissage supérieur de chaque section avec une valeur numérique et sa mesure (paddingTop:'10px', paddingTop:'10em'...) Utile en cas d'utilisation d'un en-tête fixe.

- `paddingBottom` : (par défaut `0`) Définit le rembourrage inférieur de chaque section avec une valeur numérique et sa mesure (rembourrageBottom:'10px', rembourrageBottom:'10em'...). Utile en cas d'utilisation d'un pied de page fixe.

- `fixedElements` : (default `null`) Définit les éléments qui seront retirés de la structure déroulante du plugin, ce qui est nécessaire lorsque l'option `css3` est utilisée pour les garder fixes. Il faut une chaîne de caractères avec les sélecteurs Javascript pour ces éléments. (Par exemple : `fixedElements:'#element1, .element2'`)

- `normalScrollElements`: (défaut `null`) [Demo](https://codepen.io/alvarotrigo/pen/RmVazM) Si vous voulez éviter le défilement automatique lorsque vous faites défiler certains éléments, c'est l'option que vous devez utiliser. (utile pour les cartes, les scrolling divs, etc.) Il faut une chaîne de caractères avec les sélecteurs Javascript pour ces éléments. (Par exemple : `normalScrollElements:'#element1, .element2'`). Cette option ne doit pas être appliquée à une section ou à un élément de diapositive en soi.

- `bigSectionsDestination` : (défaut `null`) Définit comment faire défiler jusqu'à une section dont la taille est supérieure à celle de la fenêtre. Par défaut, fullPage.js fait défiler vers le haut si vous venez d'une section située au-dessus de celle de destination et vers le bas si vous venez d'une section située au-dessous de celle de destination. Les valeurs possibles sont `haut`,`bas` et `null`.


- `KeyboardScrolling` : (par défaut `true`) Définit si le contenu peut être navigué à l'aide du clavier.

- `touchSensitivity` : (par défaut `5`) Définit un pourcentage de la largeur/hauteur de la fenêtre du navigateur, et la distance que doit mesurer un glissement pour naviguer vers la section / diapositive suivante

- `continuousVertical` : (par défaut `false`) Définit si le défilement vers le bas dans la dernière section ou doit descendre jusqu'à la première et si le défilement vers le haut dans la première section doit monter jusqu'à la dernière. Non compatible avec `loopTop`, `loopBottom` ou toute barre de défilement présente dans le site (`scrollBar:true` ou `autoScrolling:false`).

- `continuousHorizontal` : (par défaut `false`) [Extension de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Définit si le défilement à droite dans la dernière diapositive doit glisser à droite vers la première ou non, et si le défilement à gauche dans la première diapositive doit glisser à gauche vers la dernière ou non. Non compatible avec `loopHorizontal`. Nécessite fullpage.js >= 3.0.1.

- `scrollHorizontally` : (par défaut `false`) [Extension de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Définit si l'on doit glisser horizontalement dans les curseurs en utilisant la molette de la souris ou le pavé tactile. Il ne peut être utilisé que lors de l'utilisation : `autoScrolling:true`. Idéal pour raconter une histoire. Nécessite fullpage.js >= 3.0.1.

- `interlockedSlides` : (par défaut `false`) [Extension de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Détermine si le déplacement d'un curseur horizontal va forcer le glissement des curseurs de l'autre section dans la même direction. Les valeurs possibles sont `true`, `false` ou un tableau avec les sections imbriquées. Par exemple, `[1,3,5]` commençant par 1. Nécessite fullpage.js >= 3.0.1.

- `dragAndMove` : (par défaut `false`) [Extension de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Active ou désactive le glisser-déposer de sections et de diapositives en utilisant la souris ou les doigts. Nécessite fullpage.js >= 3.0.1. Les valeurs possibles sont :
  - `true` : active la fonction.
  - `false` : désactive la fonctionnalité.
  - `vertical` : active la fonctionnalité uniquement verticalement.
  - `horizontal` : active la fonctionnalité seulement horizontalement.
  - `fingersonly` : active la fonction pour les périphériques tactiles seulement.
  - `mouseonly` : active la fonctionnalité pour les périphériques de bureau uniquement (souris et trackpad).

- `offsetSections` : (par défaut `false`) [Extension de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Fournit un moyen d'utiliser des sections non plein écran basées sur le pourcentage. Idéal pour montrer aux visiteurs qu'il y a plus de contenu dans le site en affichant une partie de la section suivante ou précédente. Nécessite fullPage.js >= 3.0.1.
Pour définir le pourcentage de chaque section, l'attribut `data-percentage` doit être utilisé. Le centrage de la section dans le viewport peut être déterminé en utilisant une valeur booléenne dans l'attribut `data-centered` (par défaut à `true` si non spécifié). Par exemple :
``` html
    <div class="section" data-percentage="80" data-centered="true">
```

- `resetSliders` : (par défaut `false`). Extension de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Définit s'il faut ou non réinitialiser chaque curseur après avoir quitté sa section. Nécessite fullpage.js >= 3.0.1.

- `fadingEffect` : (par défaut `false`). [Extension de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Définit si un effet de fondu enchaîné doit être utilisé ou non à la place de l'effet de défilement par défaut. Les valeurs possibles sont `true`, `false`, `sections`, `slides`. Il peut donc être appliqué juste verticalement ou horizontalement, ou aux deux à la fois. Il ne peut être utilisé que lors de l'utilisation : `autoScrolling:true`. Nécessite fullpage.js >= 3.0.1.

- `animateAnchor` : (par défaut `true`) Définit si le chargement du site quand on lui donne une ancre (#) va défiler avec l'animation jusqu'à sa destination ou va se charger directement sur la section donnée.

- `recordHistory` : (par défaut `true`) Définit si l'état du site doit être poussé dans l'historique du navigateur. Quand il est défini à `true`, chaque section/glissière du site agira comme une nouvelle page et les boutons avant et arrière du navigateur feront défiler les sections/glissières pour atteindre l'état précédent ou suivant du site. Quand il est réglé sur `false`, l'URL continuera à changer mais n'aura aucun effet sur l'historique du navigateur. Cette option est automatiquement désactivée lors de l'utilisation de `autoScrolling:false`.

- `menu` : (par défaut `false`) Un sélecteur peut être utilisé pour spécifier le menu à lier avec les sections. De cette façon, le défilement des sections activera l'élément correspondant dans le menu en utilisant la classe `active`.
Cela ne générera pas de menu mais ajoutera simplement la classe `active` à l'élément du menu donné avec les liens d'ancrage correspondants.
Afin de lier les éléments du menu avec les sections, un data-tag HTML 5 (`data-menuanchor`) sera nécessaire à utiliser avec les mêmes liens d'ancrage que ceux utilisés dans les sections. Exemple :
```html
<ul id="myMenu">
	<li data-menuanchor="firstPage" class="active"><a href="#firstPage">Première section</a></li>
	<li data-menuanchor="secondPage"><a href="#secondPage">Seconde section</a></li>
  <li data-menuanchor="thirdPage"><a href="#thirdPage">Troisième section</a></li>
<li data-menuanchor="fourthPage"><a href="#fourthPage">Quatrième section</a></li>
</ul>
```
```javascript
new fullpage('#fullpage', {
anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
menu : #myMenu
}) ;
```

**Note:** l'élément de menu doit être placé en dehors du wrapper de la page entière afin d'éviter tout problème lors de l'utilisation de `css3:true`. Sinon, il sera ajouté au `body` par le plugin lui-même.

- `navigation` : (par défaut `false`) Si elle est définie à `true`, elle affichera une barre de navigation composée de petits cercles.

- `navigationPosition` : (par défaut `none`) Il peut être mis à `left` ou `right` et définit quelle position la barre de navigation sera affichée (si vous en utilisez une).

- `navigationTooltips` : (par défaut []) Définit les info-bulles à afficher pour les cercles de navigation au cas où ils seraient utilisés. Exemple : `navigationTooltips` : 'premierSlide', 'secondSlide']`. Vous pouvez aussi les définir en utilisant l'attribut `data-tooltip` dans chaque section si vous préférez.

- Voir aussi l'attribut `showActiveTooltip` : (par défaut `false`) Affiche une info-bulle persistante pour la section visualisée activement dans la navigation verticale.

- `slidesNavigation` : (par défaut `false`) Si défini à `true`, il affichera une barre de navigation composée de petits cercles pour chaque curseur de paysage sur le site.

- `slidesNavPosition` : (par défaut `bottom`) Définit la position de la barre de navigation en mode paysage pour les curseurs. Admet les valeurs `top` et `bottom`. Vous pouvez modifier les styles CSS pour déterminer la distance du haut ou du bas ainsi que tout autre style tel que la couleur.

- `scrollOverflow` : (par défaut `false`) définit si oui ou non il faut créer un défilement pour la section/glissière dans le cas où son contenu est plus grand que la hauteur de celle-ci. Quand il est défini à `true`, votre contenu sera enveloppé par le plugin. Pensez à utiliser la délégation ou à charger vos autres scripts dans le callback `afterRender`.
Dans le cas où vous le mettez à `true`, il nécessite la bibliothèque du fournisseur [`scrollloverflow.min.js`] (https://github.com/alvarotrigo/fullPage.js/blob/master/vendors/scrolloverflow.min.js). Ce fichier doit être chargé avant le plugin fullPage.js, mais après jQuery ( en cas d'utilisation).
Par exemple :

```html
<script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>
<script type="text/javascript" src="fullpage.js"></script>
```

Afin d'éviter que fullpage.js ne crée la barre de défilement dans certaines sections ou diapositives, utilisez la classe `fp-noscroll`. Par exemple : `<div class="section fp-noscroll">`

Vous pouvez aussi empêcher le scrolloverflow d'être appliqué en mode réactif lorsque vous utilisez `fp-auto-height-responsive` dans l'élément section.

- Le `scrollOverflowReset` : (par défaut `false`) [Extension de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Quand il est défini à `true`, il fait défiler le contenu de la section/glissière avec la barre de défilement en partant vers une autre section verticale. De cette façon, la section/glissière affichera toujours le début de son contenu, même si elle défile à partir d'une section située en dessous.

- `scrollOverflowOptions` : en utilisant scrollOverflow:true fullpage.js utilisera une version bifurquée et modifiée de la bibliothèque [iScroll.js](https://github.com/cubiq/iscroll/). Vous pouvez personnaliser le comportement de défilement en fournissant à fullpage.js les options iScroll.js que vous souhaitez utiliser. Consultez [sa documentation](https://github.com/cubiq/iscroll) pour plus d'informations.

- `sectionSelector` : (par défaut `.section`) Définit le sélecteur Javascript utilisé pour les sections du plugin. Il peut avoir besoin d'être changé parfois pour éviter des problèmes avec d'autres plugins utilisant les mêmes sélecteurs que fullpage.js.

- `slideSelector` : (par défaut `.slide`) Définit le sélecteur Javascript utilisé pour les diapositives du plugin.  Il peut avoir besoin d'être changé parfois pour éviter des problèmes avec d'autres plugins utilisant les mêmes sélecteurs que fullpage.js.

- `responsiveWidth` : (par défaut `0`) Un défilement normal (`autoScrolling:false`) sera utilisé sous la largeur définie en pixels. Une classe `fp-responsive` est ajoutée à la balise body au cas où l'utilisateur voudrait l'utiliser pour son propre CSS réactif. Par exemple, si elle est définie à 900, chaque fois que la largeur du navigateur est inférieure à 900, le plugin défile comme un site normal.

- `responsiveHeight` : (par défaut `0`) Un défilement normal (`autoScrolling:false`) sera utilisé sous la hauteur définie en pixels. Une classe `fp-responsive` est ajoutée à la balise body au cas où l'utilisateur voudrait l'utiliser pour son propre CSS réactif. Par exemple, si elle est définie à 900, chaque fois que la hauteur du navigateur est inférieure à 900, le plugin défile comme un site normal.

- Les `responsiveSlides` : (par défaut `false`) [Extension de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Quand il est réglé sur `true`, les diapositives seront transformées en sections verticales quand le mode réactif est activé. (en utilisant les options `responsiveWidth` ou `responsiveHeight` détaillées ci-dessus). Nécessite fullpage.js >= 3.0.1.

- `parallax:true`. [En savoir plus sur la façon d'appliquer l'option parallax](https://github.com/alvarotrigo/fullPage.js/blob/master/lang/french/parallax-extension.md).

- `parallaxOptions`: (default: `{ type: 'reveal', percentage: 62, property: 'translate'}`). Allows to configure the parameters for the parallax backgrounds effect when using the option `parallax:true`. [Read more about how to apply the parallax option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax).

- `dropEffect` (default `false`) [Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Defines whether or not to use the drop effect on sections / slides. [Read more about how to apply the the drop effect option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Drop-Effect).

- `dropEffectOptions`: (default: `{ speed: 2300, color: '#F82F4D', zIndex: 9999}`). Allows to configure the parameters for the drop effect when using the option `dropEffect:true`.[Read more about how to apply the the drop effect option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Drop-Effect).

- `waterEffect` (default `false`) [Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Defines whether or not to use the water effect on sections / slides. [Read more about how to apply the the water effect option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Water-Effect).

- `waterEffectOptions`: (default: `{ animateContent: true, animateOnMouseMove: true}`). Allows to configure the parameters for the water effect when using the option `waterEffect:true`.[Read more about how to apply the the water effect option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Water-Effect).

- `cards` : (par défaut `false`) [Extension de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Définit s'il faut ou non utiliser l'effet des cartes sur les sections/glissières. [Lire plus sur comment appliquer l'option cartes](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards).

- `cardsOptions` : (par défaut : `{ perspective : 100, fadeContent : true, fadeBackground : true}`). Vous permet de configurer les paramètres pour l'effet des cartes quand vous utilisez l'option `cards:true`. [Lire plus sur comment appliquer l'option cartes](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards).

- `lazyLoading` : (par défaut `true`) Le chargement paresseux est actif par défaut ce qui signifie qu'il chargera paresseusement tout élément média contenant l'attribut `data-src` comme détaillé dans la [Lazy Loading docs](https://github.com/alvarotrigo/fullPage.js/tree/dev/lang/french/#lazy-loading) . Si vous voulez utiliser une autre bibliothèque de chargement paresseux, vous pouvez désactiver cette fonctionnalité de fullpage.js.

## Méthodes
Vous pouvez les voir en action [ici](http://alvarotrigo.com/fullPage/examples/methods.html)

### getActiveSection()
[Demo](https://codepen.io/alvarotrigo/pen/VdpzRN/) Obtient un objet (type [Section](https://github.com/alvarotrigo/fullPage.js/tree/dev/lang/french/#callbacks)) contenant la section active et ses propriétés.

```javascript
fullpage_api.getActiveSection() ;
```

### getActiveSlide()
[Demo](https://codepen.io/alvarotrigo/pen/VdpzRN/) Obtient un objet (type [Diapositive](https://github.com/alvarotrigo/fullPage.js/tree/dev/lang/french/#callbacks)) contenant la diapositive active et ses propriétés.

```javascript
fullpage_api.getActiveSlide() ;
```

### moveSectionUp()
[Demo](http://codepen.io/alvarotrigo/pen/GJXNMN) Fait défiler une section vers le haut :
```javascript
fullpage_api.moveSectionUp() ;
```
---
### moveSectionDown()
[Demo](http://codepen.io/alvarotrigo/pen/jPvVZx) Fait défiler une section vers le bas :
```javascript
fullpage_api.moveSectionDown() ;
```
---
### moveTo(section, slide)
[Demo](http://codepen.io/alvarotrigo/pen/doqOmY) Fait défiler la page jusqu'à la section donnée et fait glisser. La première section aura l'index 1 tandis que la première diapositive, celle qui est visible par défaut, aura l'index 0.
```javascript
/*Défilement vers la section avec le lien d'ancrage `firstSlide` et vers le 2nd Slide */
fullpage_api.moveTo('firstSlide', 2) ;

```

```javascript
//Se rendre à la 3ème section (avec l'index 3) du site
fullpage_api.moveTo(3, 0) ;

//Qui est identique à
fullpage_api.moveTo(3) ;
```
---
### silentMoveTo(section, slide)
[Démo](http://codepen.io/alvarotrigo/pen/doqOeY)
Exactement la même chose que [`moveTo`](https://github.com/alvarotrigo/fullPage.js/tree/dev/lang/french/#movetosection-slide) mais dans ce cas il effectue le défilement sans animation. Un saut direct vers la destination.
```javascript
/*Défilement vers la section avec le lien d'ancrage `firstSlide` et vers le 2nd Slide */
fullpage_api.silentMoveTo('firstSlide', 2) ;
```
---
### moveSlideRight()
[Démo](http://codepen.io/alvarotrigo/pen/Wvgoyz)
Fait défiler le curseur horizontal de la section en cours jusqu'à la diapositive suivante :
```javascript
fullpage_api.moveSlideRight() ;
```
---
### moveSlideLeft()
[Démo](http://codepen.io/alvarotrigo/pen/gpdLjW)
Fait défiler le curseur horizontal de la section en cours jusqu'à la diapositive précédente :
```javascript
fullpage_api.moveSlideLeft() ;
```
---
### setAutoScrolling(booléen)
[Demo](http://codepen.io/alvarotrigo/pen/rVZWrR) Définit la configuration de défilement en temps réel.
Définit le comportement du défilement de la page. S'il est réglé sur `true`, il utilisera le défilement `automatique`, sinon, il utilisera le défilement `manuel` ou `normal` du site.

```javascript
fullpage_api.setAutoScrolling(false) ;
```
---
### setFitToSection(booléen)
[Démo](http://codepen.io/alvarotrigo/pen/GJXNYm)
Définit la valeur de l'option `fitToSection` déterminant si la section doit être affichée à l'écran ou non.

```javascript
fullpage_api.setFitToSection(false) ;
```
---
### fitToSection()
[Démo](http://codepen.io/alvarotrigo/pen/JWWagj)
Fait défiler jusqu'à la section active la plus proche qui s'adapte dans la fenêtre de visualisation.

```javascript
fullpage_api.fitToSection() ;
```
---
### setLockAnchors(booléen)
[Démo](http://codepen.io/alvarotrigo/pen/yNxVRQ)
Définit la valeur de l'option `lockAnchors` déterminant si les ancres auront un effet dans l'URL ou non.

```javascript
fullpage_api.setLockAnchors(false) ;
```
---
### setKeyboardScrolling(boolean, [directions])
[Demo](http://codepen.io/alvarotrigo/pen/EjeNdq) Ajoute ou supprime la possibilité de faire défiler les sections/glissières en utilisant la roulette de la souris/le trackpad ou les gestes du toucher (qui est actif par défaut). Notez que cela ne désactivera pas le défilement du clavier. Vous
aurait besoin d'utiliser `setKeyboardScrolling` pour cela.

- `directions` : (paramètre optionnel) Valeurs admises : `all`, `up`, `down`, `left`, `right` ou une combinaison de ces valeurs séparées par des virgules comme `down, right`. Il définit la direction pour laquelle le défilement sera activé ou désactivé.

```javascript
//désactivation de tout le défilement du clavier
fullpage_api.setKeyboardScrolling(false) ;

//désactivation du défilement du clavier
fullpage_api.setKeyboardScrolling(false, 'down') ;

//désactivation du défilement du clavier vers le bas et vers la droite
fullpage_api.setKeyboardScrolling(false, 'down, right') ;
```
---
### setRecordHistory(booléen)
[Demo](http://codepen.io/alvarotrigo/pen/rVZWQb) Définit s'il faut enregistrer l'historique pour chaque changement de hachage dans l'URL.

```javascript
fullpage_api.setRecordHistory(false) ;
```
---
### setScrollingSpeed(millisecondes)
[Démo](http://codepen.io/alvarotrigo/pen/NqLbeY) Définit la vitesse de défilement en millisecondes.

```javascript
fullpage_api.setScrollingSpeed(700) ;
```
---
### destroy(type)
[Demo](http://codepen.io/alvarotrigo/pen/bdxBzv) Détruit les événements du plugin et éventuellement son balisage HTML et ses styles.
Idéal à utiliser lorsque vous utilisez AJAX pour charger du contenu.

- `type` : (paramètre optionnel) peut être vide ou `all`. Si `all` est passé, le balisage HTML et les styles utilisés par fullpage.js seront supprimés. De cette façon, le balisage HTML original, celui utilisé avant toute modification du plugin, sera maintenu.

```javascript
//destruction de tous les événements Javascript créés par fullPage.js (défilement, hashchange dans l'URL...)
fullpage_api.destroy() ;

//déstruction de tous les événements Javascript et de toute modification faite par fullPage.js par rapport à votre balisage HTML d'origine.
fullpage_api.destroy('all') ;
```
---
### reBuild()
Met à jour la structure du DOM pour l'adapter à la nouvelle taille de la fenêtre ou à son contenu.
 Idéal à utiliser en combinaison avec des appels AJAX ou des changements externes dans la structure DOM du site, spécialement quand on utilise `scrollOverflow:true`.

```javascript
fullpage_api.reBuild() ;
```
---
### setResponsive(booléen)
[Demo](http://codepen.io/alvarotrigo/pen/WxOyLA) Définit le mode de réponse de la page. Quand il est réglé sur `true`, le défilement automatique sera désactivé et le résultat sera exactement le même que lorsque les options `responsiveWidth` ou `responsiveHeight` sont activées.
```javascript
fullpage_api.setResponsive(true) ;
```
---
### responsiveSlides.toSections()
[Extension de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Nécessite fullpage.js >= 3.0.1.
Transforme les diapositives horizontales en sections verticales.

```javascript
fullpage_api.responsiveSlides.toSections() ;
```
---
### responsiveSlides.toSlides()
[Extension de fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Nécessite fullpage.js >= 3.0.1.
Retourne les diapositives originales (maintenant converties en sections verticales) en diapositives horizontales à nouveau.

```javascript
fullpage_api.responsiveSlides.toSlides() ;
```

## Callbacks
[Démo](http://codepen.io/alvarotrigo/pen/XbPNQv) Vous pouvez les voir en action [ici](http://alvarotrigo.com/fullPage/examples/callbacks.html).

Certains callbacks, tels que `onLeave` contiendront des paramètres de type Object contenant les propriétés suivantes :

- `anchor` : *(String)* l'ancre de l'objet.
- Index : *( Number)* index de l'objet.
- `item` : *(élément DOM)* élément de l'article.
- `isFirst` : *( Boolean )* détermine si l'item est le premier enfant.
- `isLast` : *( Boolean)* détermine si l'item est le dernier enfant.

### afterLoad (origine, destination, direction)
Le callback est déclenché une fois que les sections ont été chargées, après la fin du défilement.
Paramètres :

- `origin` : *(Objet)* section d'origine.
- `destination` : *(Objet)* section de destination.
- `direction` : *(Chaîne)* elle prendra les valeurs `up` ou `down` selon la direction de défilement.

Exemple :

```javascript
new fullpage('#fullpage', {
	des ancres : ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterLoad : function(origine, destination, direction){
		var loadedSection = this;

		//indice d'utilisation
		if(origin.index == 2){
			alert("Section 3 a terminé le chargement") ;
		}

		//utilisation de anchorLink
		if(origin.anchor == 'secondSlide'){
			alert("Section 2 a terminé le chargement") ;
		}
	}
}) ;
```

Exemple:s

```javascript
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterLoad: function(origin, destination, direction){
		var loadedSection = this;

		//using index
		if(origin.index == 2){
			alert("Section 3 ended loading");
		}

		//using anchorLink
		if(origin.anchor == 'secondSlide'){
			alert("Section 2 ended loading");
		}
	}
});
```
---
#### onLeave (`origin`, `destination`, `direction`)
Ce callback est déclenché dès que l'utilisateur quitte une section, dans la transition vers la nouvelle section.
Si vous retournez `false`, le coup sera annulé avant qu'il n'ait lieu.

Paramètres :

- `origine` : *(Objet)* Section d'origine .
- `destination` : *(Objet)* Section de destination.
- `direction` : *(Chaîne de caractères)* il prendra les valeurs `up` ou `down` en fonction du sens de défilement.

Exemple :

```javascript
new fullpage('#fullpage', {
	onLeave : function(origine, destination, direction){(onLeave)
		var leavingSection = this;

		//après avoir quitté la section 2
		if(origin.index == 1 && direction ==='down'){
			alert("Aller à la section 3 !");
		}

		else if(origin.index == 1 && direction =='up'){
			alert("Aller à la section 1 !");
		}
	}
}) ;
```

#### Annuler le parchemin avant qu'il n'ait lieu
Vous pouvez annuler le parchemin en retournant `false` sur le callback `onLeave` :

```Javascript
new fullpage('#fullpage', {
	onLeave : function(origine, destination, direction){(onLeave)
		//il ne défilera pas si la destination est la 3ème section
		if(destination.index == 2){
			return false;
		}
	}
}) ;
```

---
### afterRender()
Ce callback est déclenché juste après la génération de la structure de la page. C'est le callback que vous voulez utiliser pour initialiser d'autres plugins ou lancer tout code qui nécessite que le document soit prêt (car ce plugin modifie le DOM pour créer la structure résultante). Voir [FAQs](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions) pour plus d'informations.

Exemple :

```javascript
new fullpage('#fullpage', {
	afterRender : function(){
		var pluginContainer = this ;
		alert("La structure DOM résultante est prête");
	}
}) ;
```
---
### afterResize(largeur, hauteur)
Ce rappel est déclenché après le redimensionnement de la fenêtre du navigateur. Juste après le redimensionnement des sections.

Paramètres :

- `Largeur` : *(Nombre)*  Largeur de la fenêtre.
- `Hauteur` : *(Nombre)* Hauteur de la fenêtre.

Exemple :

```Javascript
new fullpage('#fullpage', {
	afterResize : function(largeur, hauteur){
		var fullpageContainer = this;
		alert("Le redimensionnement des sections est terminé");
	}
}) ;
```
---
### afterReBuild()
Ce rappel est lancé après la reconstruction manuelle de fullpage.js en appelant `fullpage_api.reBuild()`.

Exemple :

```javascript
new fullpage('#fullpage', {
	afterReBuild : function(){
		console.log("fullPage.js a été reconstruit manuellement");
	}
}) ;
```
---
### afterResponsive(`isResponsive`)
Ce callback est déclenché après le passage de fullpage.js du mode normal au mode réactif ou du mode réactif au mode normal.

Paramètres :

- ìsResponsive : *(Booléen)* détermine s'il entre en mode réactif (`true`) ou retourne en mode normal (`false`).

Exemple :

```javascript
new fullpage('#fullpage', {
	afterResponsive : function(isResponsive){
		alert("Is responsive : " + isResponsive);
	}
}) ;
```
---
### afterSlideLoad (`section`), `origine`, `destination`, `direction`)
Callback tiré une fois que la diapositive d'une section a été chargée, après que le défilement soit terminé.

Paramètres :

- `section` : *(Objet)* Section verticale active.
- `Origin` : *(Objet)* Diapositive horizontale d'origine.
- `destination` : *(Objet)* Diapositive horizontale de destination.
- `direction` : *(Chaîne)* `à droite` ou `à gauche` selon le sens de défilement.


Exemple :

```Javascript
new fullpage('#fullpage', {
	anchors : 'firstPage','secondPage','thirdPage','fourthPage','lastPage'],

	afterSlideLoad : function( section, origin, destination, direction){
		var loadedSlide = this;

		//première diapositive de la deuxième section
		if(section.anchor =='secondPage' && destination.index == 1){
			alert("Première diapositive chargée");
		}

		//seconde diapositive de la deuxième section (en supposant que #secondSlide est le
		//anchor pour la deuxième diapositive)
		if(section.index == 1 && destination.anchor =='secondSlide'){
			alert("Deuxième diapositive chargée");
		}
	}
}) ;
```


---
### onSlideLeave (`section`, `origine`, `destination`, `direction`)
Ce callback est déclenché une fois que l'utilisateur quitte une glissière pour aller vers une autre, dans la transition vers la nouvelle glissière.
Si vous retournez `false', le coup sera annulé avant qu'il n'ait lieu.

Paramètres :

- `section` : *(Objet)* Section verticale active .
- `Origin` : *(Objet)* Diapositive horizontale d'origine.
- `destination` : Diapositive horizontale de destination *(Objet)*.
- `direction` : *(Chaîne)* `à droite` ou `à gauche` selon le sens de défilement.

Exemple :

```javascript
new fullpage('#fullpage', {
	onSlideLeave : function( section, origine, destination, direction){
		var leavingSlide = this;

		//en laissant la première diapositive de la 2ème section vers la droite
		if(section.index == 1 && origine.index == 0 && direction =='right'){
			alert("Quitter la première diapositive!!");
		}

		//en laissant la 3ème diapositive de la 2ème section vers la gauche
		if(section.index == 1 && origine.index == 2 && direction =='left'){
			alert("Going to slide 2 !");
		}
	}
}) ;
```

#### Annuler un coup avant qu'il n'ait lieu
Vous pouvez annuler un coup en retournant `false` sur le callback `onSlideLeave`. [Identique à l'annulation d'un mouvement avec `onLeave`](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french/#annuler-le-parchemin-avant-quil-nait-lieu).

# Signaler les problèmes
1. S'il vous plaît, cherchez votre problème avant de demander à l'aide de la recherche de problèmes github.
2. Assurez-vous d'utiliser la dernière version de fullpage.js. Aucun support n'est fourni pour les anciennes versions.
3. Utilisez [le forum Github Issues] (https://github.com/alvarotrigo/fullPage.js/issues) pour créer des problèmes.
4. **Une reproduction isolée du numéro sera exigée.** Si possible, utilisez[jsfiddle](https://jsfiddle.net/alvarotrigo/ea17skjr/) ou[codepen](http://codepen.io/alvarotrigo/pen/NxyPPp) pour cela.

# Contribuer à fullpage.js
Veuillez consulter[Contribuer à fullpage.js] (https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)

# Changelog
Pour voir la liste des changements récents, voir la section[Communiqués] (https://github.com/alvarotrigo/fullPage.js/releases).

# Build tasks
Vous voulez créer des fichiers de distribution fullpage.js ? Veuillez consulter [Tâches de construction](https://github.com/alvarotrigo/fullPage.js/wiki/Build-tasks)

# Ressources
- Wordpress Plugin [for Gutenberg](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/) and [for Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/).
- [Thème Wordpress](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [composant d'emballage officiel de Vue.js](https://github.com/alvarotrigo/vue-fullpage.js)
- [composant d'emballage officiel de React.js](https://github.com/alvarotrigo/react-fullpage)
- [Composant d'emballage angulaire officiel](https://github.com/alvarotrigo/angular-fullpage)
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (utile pour définir la valeur `easingcss3`)
- [fullPage.js jsDelivr CDN](https://www.jsdelivr.com/package/npm/fullpage.js)
- [plugin fullPage.js pour octobre CMS](https://github.com/freestream/oc-parallax-plugin)
- [Directive fullPage.js Angular2](https://github.com/meiblorn/ng2-fullpage)
- [directive angulaire fullPage.js](https://github.com/hellsan631/angular-fullpage.js)
- [fullPage.js ember-cli addon](https://www.npmjs.com/package/ember-cli-fullpagejs)
- [fullPage.js Rails Ruby Gem](https://rubygems.org/gems/fullpagejs-rails)
- [Angular fullPage.js - Adaptation for Angular.js v1.x](https://github.com/mmautomatizacion/angular-fullpage.js)
- [Intégration de fullPage.js avec Wordpress (Tutoriel)](http://premium.wpmudev.org/blog/build-apple-inspired-full-page-scrolling-pages-for-your-wordpress-site/)

## Qui utilise fullPage.js
Si vous voulez que votre page soit listée ici, veuillez <a href="mailto:alvaro@alvarotrigo.com">contactez-moi </a> avec l'URL.


[![Google](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/google-4.png)](http://www.yourprimer.com/)
![Coca-cola](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/cocacola-4.png)
![eBay](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ebay-4.png)
[![BBC](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/bbc-4.png)](http://www.bbc.co.uk/news/resources/idt-d88680d1-26f2-4863-be95-83298fd01e02)
![Sony](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sony-4.png)

![Vodafone](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/vodafone-5.png)
![British Airways](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/british-airways-5.png)
![McDonalds](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mcdonalds-6.png)
![EA](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ea-6.png)
![Vogue](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/vogue-6.png)
![Mi](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mi-6.png)

![Mercedes](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mercedes-5.png)
[![sym](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sym-5.png)](http://www.sanyang.com.tw/service/Conception/)
![Bugatti](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/bugatti-5.png)
![eDarling](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/edarling-5.png)
![Ubisoft](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ubisoft-5.png)

- http://www.bbc.co.uk/news/resources/idt-d88680d1-26f2-4863-be95-83298fd01e02
- http://www.newjumoconcept.com/
- http://www.shootinggalleryasia.com/
- http://promo.prestigio.com/grace1/
- http://torchbrowser.com/
- http://thekorner.fr/
- http://charlotteaimes.com/
- http://www.boxreload.com/
- http://educationaboveall.org/
- http://usescribe.com/
- http://boxx.hk/
- http://www.sanyang.com.tw/service/Conception/
- http://trasmissione-energia.terna.it/
- http://www.villareginateodolinda.it
- http://www.kesstrio.com
- http://ded-morozz.kiev.ua/
- http://dancingroad.com
- http://www.camanihome.com/

Vous pouvez trouver une autre liste [ici](http://libscore.com/#$.fn.fullpage).

## Des dons
Les dons seraient plus que bienvenus :)

[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## Les sponsors
Devenez sponsor et obtenez votre logo sur notre README sur Github avec un lien vers votre site. [[Devenez sponsor](https://alvarotrigo.com/#contact)] | [[Devenez patreon]](https://www.patreon.com/fullpagejs)

[![Stackpath](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/stackpath3.png)](https://www.stackpath.com/)
[![Browserstack](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/browserstack3.png)](http://www.browserstack.com/)
[![CodePen](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codepen3.png)](https://codepen.com)
[![CodeFirst](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codefirst2.png)](https://www.codefirst.co.uk)

### Gens
<a href="https://github.com/donsalvadori" target="_blank" rel="nofollow">
	<img src="http://wallpapers-for-ipad.com/fullpage/imgs3/avatars/donsalvadori.jpg">
</a>

# fullPage.js
![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.png)

<p align="center">
  <a href="https://github.com/alvarotrigo/fullPage.js/#fullpagejs">English</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish#fullpagejs">Español</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#fullpagejs">Français</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#fullpagejs">Pусский</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese#fullpagejs">中文</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs">한국어</a> |
  <span>Português Brasileiro</span>
</p>

<p align="center">
	Disponível para <a href="https://github.com/alvarotrigo/vue-fullpage.js">Vue</a>, <a href="https://github.com/alvarotrigo/react-fullpage">React</a> e <a href="https://github.com/alvarotrigo/angular-fullpage">Angular</a>.
</p>

---

![fullPage.js version](http://img.shields.io/badge/fullPage.js-v4.0.11-brightgreen.svg)
[![License](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/fullpage.js/badge?style=rounded)](https://www.jsdelivr.com/package/npm/fullpage.js)
&nbsp;&nbsp; **|**&nbsp;&nbsp; *7Kb gziped* &nbsp;&nbsp;**|**&nbsp;&nbsp; *Created by [@imac2](https://twitter.com/imac2)*

- [Demo online](http://alvarotrigo.com/fullPage/) | [Codepen](https://codepen.io/alvarotrigo/pen/NxyPPp)
- [Wordpress plugin for Gutenberg](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/) and [WordPress plugin for Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)
- [Tema para Wordpress](http://alvarotrigo.com/fullPage/utils/wordpress.html)
- [Extensões fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/)
- [Perguntas Frequentes](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)
- [Migration from fullPage v3 to fullpage v4](https://alvarotrigo.com/fullPage/help/migration-from-fullpage-3/)
---

Uma biblioteca simples e fácil de usar que cria sites de rolagem em tela cheia (também conhecidos como sites de página única ou sites de uma página) e adiciona controles deslizantes de paisagem dentro das seções do site.

- [Introdução](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#introdução)
- [Compatibilidade](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#compatibilidade)
- [Licença](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#licença)
- [Uso](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#uso)
  - [Criando Links para seções ou slides](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#criando-links-para-secoes-ou-slides)
  - [Criando seções maiores ou menores](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#criando-secoes-maiores-ou-menores)
  - [Classes de estado adicionadas pelo fullPage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#classes-de-estado-adicionadas-pelo-fullpagejs)
  - [Lazy loading](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#lazy-loading)
  - [Reprodução/pausa automática de mídias embutidas](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#reproducaopausa-automática-de-mídias-embutidas)
  - [Uso de extensões](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#uso-de-extensões)
- [Opções](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#opções)
- [Métodos](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#métodos)
- [Callbacks](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#callbacks)
- [Relatando problemas](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#relatando-problemas)
- [Contribuindo para o fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#contribuindo-para-o-fullpagejs)
- [Changelog](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#changelog)
- [Tarefas de Build](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#tarefas-de-build)
- [Recursos](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#recursos)
- [Quem está usando o fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#quem-está-usando-o-fullpagejs)
- [Doações](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#doações)
- [Patrocinadores](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#patrocinadores)

## Introdução
Sugestões são mais do que bem vindas, não apenas para solicitações de funções mas também para melhorias de estilo de código.
Vamos fazer isso ser uma boa biblioteca para tornar a vida das pessoas mais fácil!

## Compatibilidade
fullPage.js é totalmente funcional em todos os navegadores modernos e no IE 11. Se você precisa dar suporte a versões anteriores ao IE 11, considere usar [fullPage.js v3](https://github.com/alvarotrigo/fullPage.js/tree/3.1.2).
Ele também dá suporte ao toque para dispositivos móveis, tablets e computadores touch screen.

Um agradeicmento especial para [Browserstack](http://www.browserstack.com/) por apoiar o fullpage.js.

## Licença

### Licença comercial
Se você quiser usar fullPage para desenvolver sites, temas, projetos e aplicativos de código não aberto, a licença Comercial é a licença apropriada. Com esta opção, seu código-fonte é mantido proprietário. O que significa que você não precisará alterar todo o código-fonte do aplicativo para uma licença de código aberto. [Comprar uma licença comercial do Fullpage](https://alvarotrigo.com/fullPage/pricing/)

### Licença Open source
Se você estiver criando um aplicativo de código aberto sob uma licença compatível com a [licença GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.html), poderá usar o fullPage sob os termos da GPLv3 .

**Você terá que fornecer um aviso proeminente de que fullPage.js está em uso. Os comentários de crédito nos arquivos JavaScript e CSS devem ser mantidos intactos** (mesmo após combinação ou minificação).

[Leia mais sobre a licença do fullPage](https://alvarotrigo.com/fullPage/pricing/).

## Uso
Como você pode ver nos arquivos de exemplo, você precisará incluir:
  - O arquivo JavaScript `fullpage.js` (ou sua versão minificada `fullpage.min.js`)
  - O arquivo css `fullpage.css`

**Opcionalmente**, ao usar `css3:false`, você pode adicionar o [arquivo easings](https://github.com/alvarotrigo/fullPage.js/tree/master/vendors/easings.min.js) em caso você queira usar outros efeitos de atenuação além do incluído na biblioteca (`easeInOutCubic`).

### Instalar usando bower ou npm
**Opcionalmente**, você pode instalar fullPage.js com bower ou npm se preferir:

Terminal:
```shell
// Com bower
bower install fullpage.js

// Com npm
npm install fullpage.js
```

### Incluindo arquivos:
```html
<link rel="stylesheet" type="text/css" href="fullpage.css" />

<!-- Esta linha a seguir é opcional. Necessário apenas se você usar a opção css3:false e quiser usar outros efeitos de atenuação em vez de "easeInOutCubic". -->
<script src="vendors/easings.min.js"></script>

<script type="text/javascript" src="fullpage.js"></script>
```

Usando Webpack, Browserify ou Require.js? Confira <a href="https://github.com/alvarotrigo/fullPage.js/wiki/Use-module-loaders-for-fullPage.js">como usar fullPage.js com module loaders</a>.

### Uso opcional de CDN
Se você preferir usar um CDN para carregar os arquivos necessários, fullPage.js está em CDNJS:
https://cdnjs.com/libraries/fullPage.js

### Estrutura HTML necessária
Inicie seu documento HTML com a [declaração HTML DOCTYPE](http://www.corelangs.com/html/introduction/doctype.html) obrigatória na primeira linha do seu código HTML. Caso contrário, você pode ter problemas com as alturas das seções. Os exemplos fornecidos usam o tipo de documento HTML5 `<!DOCTYPE html>`.

Cada seção será definida com um elemento contendo a classe `section`.
A seção ativa por padrão será a primeira seção, que é considerada a página inicial.

As seções devem ser colocadas dentro de um wrapper (`<div id="fullpage">` neste caso). O wrapper não pode ser o elemento `body`.

```html
<div id="fullpage">
	<div class="section">Alguma seção</div>
	<div class="section">Alguma seção</div>
	<div class="section">Alguma seção</div>
	<div class="section">Alguma seção</div>
</div>
```

Se você quiser definir um ponto de partida diferente em vez da primeira seção ou do primeiro slide de uma seção, basta adicionar a classe `active` à seção e ao slide que deseja carregar primeiro.

```html
<div class="section active">Alguma seção</div>
```

Para criar um controle deslizante de paisagem dentro de uma seção, cada slide será definido por padrão com um elemento contendo a classe `slide`:

```html
<div class="section">
	<div class="slide"> Slide 1 </div>
	<div class="slide"> Slide 2 </div>
	<div class="slide"> Slide 3 </div>
	<div class="slide"> Slide 4 </div>
</div>
```

Você pode ver um exemplo totalmente funcional da estrutura HTML no arquivo [`simple.html`](https://github.com/alvarotrigo/fullPage.js/blob/master/examples/simple.html).

### Inicialização

#### Inicialização com Vanilla Javascript
Tudo que você precisa fazer é chamar fullPage.js antes da tag de fechamento `</body>`.

```javascript
new fullpage('#fullpage', {
	//opções aqui
	autoScrolling:true,
	scrollHorizontally: true
});
```

#### Inicialização com jQuery
Você pode usar fullpage.js como um plugin do jQuery se quiser!

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		//Opções aqui
		autoScrolling:true,
		scrollHorizontally: true
	});

	//métodos
	$.fn.fullpage.setAllowScrolling(false);
});
```

Funções e métodos ainda podem ser chamados no jeito jQuery, como [no fullPage.js v2.X](https://github.com/alvarotrigo/fullPage.js/tree/2.9.7).

#### Exemplo de Vanilla JS com todas as opções
Uma inicialização mais complexa com todas as opções definidas pode ser assim:

```javascript

var myFullpage = new fullpage('#fullpage', {
	// Navegação
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	// Rolagem
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 600,
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
	scrollOverflow: true,
	scrollOverflowMacStyle: false,
	scrollOverflowReset: false,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	// Acessibilidade
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	// Design
	controlArrows: true,
	controlArrowsHTML: [
		'<div class="fp-arrow"></div>', 
		'<div class="fp-arrow"></div>'
	],
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

	// Seletores customizados
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,
	observer: true,
	credits: { enabled: true, label: 'Made with fullPage.js', position: 'right'},

	// Evento
	beforeLeave: function(origin, destination, direction, trigger){},
	onLeave: function(origin, destination, direction, trigger){},
	afterLoad: function(origin, destination, direction, trigger){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction, trigger){},
	onSlideLeave: function(section, origin, destination, direction, trigger){},
	onScrollOverflow: function(section, slide, position, direction){}
});
```

### Criando links para seções ou slides
Se você estiver usando fullPage.js com links âncora para as seções (usando a opção `anchors` ou o atributo `data-anchor` em cada seção), poderá usar links âncora também para navegar diretamente para um determinado slide dentro de uma seção.

Este seria um exemplo de um link com uma âncora: http://alvarotrigo.com/fullPage/#secondPage/2 (que é a URL que você verá quando acessar essa seção/slide manualmente)
Observe que a última parte da URL termina em `#secondPage/2`.

Tendo a seguinte inicialização:

```javascript
new fullpage('#fullpage', {
	anchors:['firstPage', 'secondPage', 'thirdPage']
});
```

A âncora no final da URL `#secondPage/2` define a seção e o slide de destino, respectivamente. Na URL anterior, a seção de destino será aquela definida com a âncora `secondPage` e o slide será o 2º slide, pois estamos usando o índice `2` para isso. (o primeiro slide de uma seção tem índice 0, pois tecnicamente é uma seção).

Poderíamos ter usado uma âncora personalizada para o slide em vez de seu índice se tivéssemos usado o atributo `data-anchor` na marcação HTML assim:

```html
<div class="section">
	<div class="slide" data-anchor="slide1"> Slide 1 </div>
	<div class="slide" data-anchor="slide2"> Slide 2 </div>
	<div class="slide" data-anchor="slide3"> Slide 3 </div>
	<div class="slide" data-anchor="slide4"> Slide 4 </div>
</div>
```
Neste último caso, a URL que usaríamos seria `#secondPage/slide3`, que é equivalente à nossa anterior `#secondPage/2`.

Observe que as âncoras de seção também podem ser definidas da mesma maneira, usando o atributo `data-anchor`, se nenhum array `anchors` for fornecido.

**Cuidado!** As tags `data-anchor` não podem ter o mesmo valor que qualquer elemento de ID no site (ou elemento NAME para IE).

### Criando seções maiores ou menores
[Demonstração](http://codepen.io/alvarotrigo/pen/BKjRYm) fullPage.js fornece uma maneira de remover a restrição de altura total de suas seções e slides. É possível criar seções cuja altura seja menor ou maior que a viewport. Isso é ideal para rodapés.
É importante perceber que não faz sentido ter todas as suas seções usando esse recurso. Se houver mais de uma seção no carregamento inicial do site, fullPage.js não rolará para ver a próxima, pois ela já estará na janela de visualização.

Para criar seções menores, basta usar a classe `fp-auto-height` na seção que você deseja aplicá-la. Em seguida, ele terá a altura definida pelo conteúdo da sua seção/slide.

```html
<div class="section">Viewport completa</div>
<div class="section fp-auto-height">Altura automática</div>
```

#### Seções de altura responsiva
[Demonstração](https://codepen.io/alvarotrigo/pen/MzByMa) Uma altura automática responsiva pode ser aplicada usando a classe `fp-auto-height-responsive`. Dessa forma, as seções ficarão em tela cheia até que o modo responsivo seja acionado. Em seguida, eles terão o tamanho exigido pelo conteúdo, que pode ser maior ou menor que a janela de visualização.

### Classes de estado adicionadas pelo fullPage.js
Fullpage.js adiciona várias classes em diferentes elementos para manter um registro do status do site:

- `active` é adicionado à seção e slide visíveis atuais.
- `active` é adicionado ao elemento de menu atual (se estiver usando a opção `menu`).
- Uma classe no formato `fp-viewing-SECTION-SLIDE` é adicionada ao elemento `body` do site. (ex: [`fp-viewing-secondPage-0`](http://alvarotrigo.com/fullPage/#secondPage)) As partes `SECTION` e `SLIDE` serão as âncoras (ou índices se nenhuma âncora for fornecida) da seção e slide atuais.
- `fp-responsive` é adicionado ao elemento `body` ao entrar no modo responsivo
- `fp-enabled` é adicionado ao elemento `html` quando fullpage.js está habilitado. (e removido quando destruído).
- `fp-destroyed` é adicionado ao contêiner fullpage.js quando fullPage.js é destruído.

### Lazy Loading
[Demonstração](http://codepen.io/alvarotrigo/pen/eNLBXo) fullPage.js fornece uma maneira de carregar imagens, vídeos e elementos de áudio de forma lenta para que eles não retardem o carregamento do seu site ou desperdicem desnecessariamente a transferência de dados.
Ao usar o carregamento lento, todos esses elementos só serão carregados ao entrar na viewport.
Para habilitar o carregamento lento, tudo o que você precisa fazer é alterar seu atributo `src` para `data-src` como mostrado abaixo:

```html
<img data-src="image.png">
<video>
	<source data-src="video.webm" type="video/webm" />
	<source data-src="video.mp4" type="video/mp4" />
</video>
 ```

Se você já usa outra solução de carregamento lento que também usa `data-src`, você pode desabilitar o carregamento lento fullPage.js configurando a opção `lazyLoading: false`.

### Reprodução/pausa automática de mídias embutidas

[Demonstração](https://codepen.io/alvarotrigo/pen/pXEaaK) **Observação**: o recurso de reprodução automática pode não funcionar em alguns dispositivos móveis dependendo do sistema operacional e do navegador (ou seja, [Safari no iOS](https://webkit.org/blog/6784/new-video-policies-for-ios/) versão < 10.0).

#### Tocar ao carregar seção/slide:
Usar o atributo `autoplay` para vídeos ou áudio, ou o parâmetro `autoplay=1` para iframes do youtube resultará na reprodução do elemento de mídia no carregamento da página.
Para reproduzi-lo no carregamento de seção/slide, use o atributo `data-autoplay`. Por exemplo:

```html
<audio data-autoplay>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

#### Pausar ao sair
Os iframes HTML5 `<vídeo>` / `<áudio>` incorporados e do YouTube são pausados automaticamente quando você sai de uma seção ou slide. Isso pode ser desabilitado usando o atributo `data-keepplaying`. Por exemplo:
<audio data-keepplaying>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

### Uso de extensões
fullpage.js [fornece um conjunto de extensões](http://alvarotrigo.com/fullPage/extensions/br/) que você pode usar para aprimorar seus recursos padrão. Todos eles estão listados como [opções fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#opções).

Extensões requer que você use o arquivo minificado [`fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js) que é dentro da [pasta `dist`](https://github.com/alvarotrigo/fullPage.js/tree/master/dist) em vez do arquivo fullPage.js usual (`fullpage.js` ou `fullpage.min.js `).

Depois de adquirir o arquivo de extensão, você precisará adicioná-lo antes do fullPage. Por exemplo, se eu quiser usar a extensão Horizontal Contínua, teria que incluir o arquivo de extensão e, em seguida, a versão das extensões do arquivo fullPage.

```html
<script type="text/javascript" src="fullpage.continuousHorizontal.min.js"></script>
<script type="text/javascript" src="fullpage/fullpage.extensions.min.js"></script>
```

Uma chave de ativação e uma chave de licença serão necessárias para cada extensão. [Veja mais detalhes sobre isso aqui](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/how-to-activate-fullpage-extension.md).

Então você poderá usá-los e configurá-los conforme explicado em [Opções](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#opções).

## Opções

- `licenseKey`: (padrão `null`). **Esta opção é obrigatória.** Se você usar fullPage em um projeto de código não aberto, deverá usar a chave de licença fornecida na compra da licença comercial fullPage. Se o seu projeto for de código aberto e for compatível com a licença GPLv3, você pode usar a opção `gplv3-license`. Leia mais sobre licenças [aqui](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#licença) e [no site](https://alvarotrigo.com/fullPage/pricing/). Exemplo de uso:

```javascript
new fullpage('#fullpage', {
    licenseKey: 'YOUR_KEY_HERE'
});
```

- `controlArrows`: (padrão `true`) Determina se as setas de controle devem ser usadas para mover os slides para a direita ou para a esquerda.

- `controlArrowsHTML`: (padrão `['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'],`). Fornece uma maneira de definir a estrutura HTML e as classes que você deseja aplicar às setas de controle para seções com slides horizontais. A matriz contém a estrutura para ambas as setas. O primeiro item é a seta para a esquerda e o segundo, a seta para a direita.

- `verticalCentered`: (padrão `true`) Centralização vertical do conteúdo usando flexbox. Você pode querer envolver seu conteúdo em um `div` para evitar possíveis problemas. (Usa `flex-direction: column; display: flex; justify-content: center;`)

- `scrollingSpeed`: (padrão `700`) Velocidade em milissegundos para as transições de rolagem.

- `sectionsColor`: (padrão `none`) Defina a propriedade CSS `background-color` para cada seção.
Example:
```javascript
new fullpage('#fullpage', {
	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});
```

- `anchors`: (padrão `[]`) Define os links âncora (#example) a serem mostrados na URL de cada seção. O valor das âncoras deve ser único. A posição das âncoras na matriz definirá em quais seções a âncora será aplicada. (segunda posição para a segunda seção e assim por diante). O uso de âncoras de navegação para frente e para trás também será possível através do navegador. Essa opção também permite que os usuários marquem uma seção ou slide específico. **Cuidado!** âncoras não podem ter o mesmo valor que qualquer elemento de ID no site (ou elemento NAME para IE).
Agora as âncoras podem ser definidas diretamente na estrutura HTML usando o atributo `data-anchor` conforme explicado aqui.

- `lockAnchors`: (padrão `false`) Determina se as âncoras na URL terão algum efeito na biblioteca. Você ainda pode usar âncoras internamente para suas próprias funções e retornos de chamada, mas elas não terão nenhum efeito na rolagem do site. Útil se você quiser combinar fullPage.js com outros plugins usando âncora na URL.

**Importante** É útil entender que os valores no array de opções `anchors` se correlacionam diretamente com o elemento com a classe `.section` por sua posição na marcação.

- `easing`: (padrão `easeInOutCubic`) Define o efeito de transição a ser usado para a rolagem vertical e horizontal.
Requer o arquivo `vendors/easings.min.js` ou [jQuery UI](http://jqueryui.com/) para usar algumas de [suas transições](http://api.jqueryui.com/easings/) . Outras bibliotecas podem ser usadas em vez disso.

- `easingcss3`: (padrão `ease`) Define o efeito de transição a ser usado no caso de usar `css3:true`. Você pode usar os [predefinidos](http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) (como `linear`, `ease-out`...) ou criar seu próprios usando a função `cubic-bezier`. Você pode querer usar [Matthew Lein CSS Easing Animation Tool](http://matthewlein.com/ceaser/) para isso.

- `loopTop`: (padrão `false`) Define se a rolagem para cima na primeira seção deve rolar para a última ou não.

- `loopBottom`: (padrão `false`) Define se a rolagem para baixo na última seção deve rolar para a primeira ou não.

- `loopHorizontal`: (padrão `true`) Define se os controles deslizantes horizontais farão um loop após alcançar o último slide ou o anterior ou não.

- `css3`: (padrão `true`). Define se as transformações JavaScript ou CSS3 devem ser usadas para rolar nas seções e slides. Útil para acelerar o movimento em tablets e dispositivos móveis com navegadores que suportem CSS3. Se esta opção estiver definida como `true` e o navegador não suportar CSS3, um substituto será usado.

- `autoScrolling`: (padrão `true`) Define se deve ser usada a rolagem "automática" ou a "normal". Também afeta a maneira como as seções se encaixam na janela do navegador/dispositivo em tablets e telefones celulares.

- `fitToSection`: (padrão `true`) Determina se as seções devem ou não ser ajustadas à viewport. Quando definido como `true`, a seção ativa atual sempre preencherá toda a janela de visualização. Caso contrário, o usuário estará livre para parar no meio de uma seção.

- `fitToSectionDelay`: (default 1000). If `fitToSection` is set to true, this delays
the fitting by the configured milliseconds.

- `scrollBar`: (padrão `false`) Determina se a barra de rolagem deve ser usada para as **seções verticais** no site ou não. No caso de usar a barra de rolagem, a funcionalidade `autoScrolling` ainda funcionará conforme o esperado. O usuário também estará livre para rolar o site com a barra de rolagem e fullPage.js caberá na seção na tela quando a rolagem terminar.

- `paddingTop`: (padrão `0`) Define o preenchimento superior para cada seção com um valor numérico e sua medida (paddingTop: '10px', paddingTop: '10em'...) Útil no caso de usar um cabeçalho fixo.

- `paddingBottom`: (padrão `0`) Define o preenchimento inferior de cada seção com um valor numérico e sua medida (paddingBottom: '10px', paddingBottom: '10em'...). Útil no caso de usar um rodapé fixo.

- `fixedElements`: (padrão `null`) Define quais elementos serão retirados da estrutura de rolagem do plugin que é necessário ao usar a opção `css3` para mantê-los fixos. Requer uma string com os seletores Javascript para esses elementos. (Por exemplo: `fixedElements: '#element1, .element2'`)

- `normalScrollElements`: (padrão `null`) [Demonstração](https://codepen.io/alvarotrigo/pen/RmVazM) Se você quiser evitar a rolagem automática ao rolar sobre alguns elementos, esta é a opção que você precisa usar. (útil para mapas, divs de rolagem etc.) Requer uma string com os seletores Javascript para esses elementos. (Por exemplo: `normalScrollElements: '#element1, .element2'`). Esta opção não deve ser aplicada a nenhum elemento de seção/slide.

- `bigSectionsDestination`: (padrão `null`) [Demonstração](https://codepen.io/alvarotrigo/pen/vYLdMrx) Define como rolar para uma seção cuja altura é maior que a viewport e quando não estiver usando `scrollOverflow: verdadeiro`. (Leia [como criar seções menores ou maiores](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#criando-seções-maiores-ou-menores)). Por padrão, fullPage.js rola para o topo se você vier de uma seção acima do destino e para baixo se você vier de uma seção abaixo do destino. Os valores possíveis são `top`, `bottom`, `null`.

- `keyboardScrolling`: (padrão `true`) Define se o conteúdo pode ser navegado usando o teclado.

- `touchSensitivity`: (padrão `5`) Define uma porcentagem da largura/altura da janela do navegador e a distância que um deslize deve medir para navegar para a próxima seção/slide

- `continuousVertical`: (padrão `false`) Define se a rolagem para baixo na última seção deve rolar para a primeira e se a rolagem para cima na primeira seção deve rolar para a última. Não compatível com `loopTop`, `loopBottom` ou qualquer barra de rolagem presente no site (`scrollBar:true` ou `autoScrolling:false`).

- `continuousHorizontal`: (padrão `false`) [Extensão de fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/). Define se deslizar para a direita no último slide deve deslizar para a direita para o primeiro ou não, e se rolar para a esquerda no primeiro slide deve deslizar para a esquerda para o último ou não. Não compatível com `loopHorizontal`. Requer fullpage.js >= 3.0.1.

- `scrollHorizontally`: (padrão `false`) [Extensão de fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/). Define se desliza horizontalmente nos controles deslizantes usando a roda do mouse ou o trackpad. Ele só pode ser usado ao usar: `autoScrolling:true`. Ideal para contar histórias. Requer fullpage.js >= 3.0.1.

- `interlockedSlides`: (padrão `false`) [Extensão de fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/). Determina se mover um controle deslizante horizontal forçará o deslizamento dos controles deslizantes em outra seção na mesma direção. Os valores possíveis são `true`, `false` ou uma matriz com as seções interligadas. Por exemplo, `[1,3,5]` começando por 1. Requer fullpage.js >= 3.0.1.

- `dragAndMove`: (padrão `false`) [Extensão de fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/). Ativa ou desativa o arrastar e deslizar de seções e slides usando o mouse ou os dedos. Requer fullpage.js >= 3.0.1. Os valores possíveis são:
  - `true`: habilita o recurso.
  - `false`: desativa o recurso.
  - `vertical`: habilita o recurso apenas verticalmente.
  - `horizontal`: habilita o recurso apenas horizontalmente.
  - `fingersonly`: habilita o recurso apenas para dispositivos de toque.
  - `mouseonly`: habilita o recurso apenas para dispositivos desktop (mouse e trackpad).

- `offsetSections`: (padrão `false`)[Extensão de fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/). Fornece uma maneira de usar seções que não sejam de tela cheia com base na porcentagem. Ideal para mostrar aos visitantes que há mais conteúdo no site, mostrando parte da seção seguinte ou anterior. Requer fullPage.js >= 3.0.1.
Para definir a porcentagem de cada seção deve-se usar o atributo `data-percentage`. A centralização da seção na janela de visualização pode ser determinada usando um valor booleano no atributo `data-centered` (o padrão é `true` se não for especificado). Por exemplo:
``` html
    <div class="section" data-percentage="80" data-centered="true">
```

- `resetSliders`: (padrão `false`). [Extensão de fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/). Define se deve ou não redefinir cada controle deslizante após sair de sua seção. Requer fullpage.js >= 3.0.1.

- `fadingEffect`: (padrão `false`). [Extensão de fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/). Define se deve usar um efeito de desvanecimento ou não em vez do efeito de rolagem padrão. Os valores possíveis são `true`, `false`, `sections`, `slides`. Portanto, pode ser aplicado apenas verticalmente ou horizontalmente, ou em ambos ao mesmo tempo. Ele só pode ser usado ao usar: `autoScrolling:true`. Requer fullpage.js >= 3.0.1.

- `animateAnchor`: (padrão `true`) Define se o carregamento do site quando dado uma âncora (#) rolará com a animação até seu destino ou será carregado diretamente na seção dada.

- `recordHistory`: (padrão `true`) Define se o estado do site deve ser enviado para o histórico do navegador. Quando definido como "true", cada seção/slide do site funcionará como uma nova página e os botões voltar e avançar do navegador rolarão as seções/slides para alcançar o estado anterior ou seguinte do site. Quando definido como `false`, o URL continuará mudando, mas não terá efeito no histórico do navegador. Esta opção é desativada automaticamente ao usar `autoScrolling:false`.

- `menu`: (padrão `false`) Um seletor pode ser usado para especificar o menu a ser vinculado às seções. Desta forma, a rolagem das seções ativará o elemento correspondente no menu usando a classe `active`.
Isso não gerará um menu, mas apenas adicionará a classe `active` ao elemento no menu fornecido com os links âncora correspondentes.
Para vincular os elementos do menu com as seções, será necessária uma tag de dados HTML 5 (`data-menuanchor`) para usar com os mesmos links âncora usados nas seções. Exemplo:

```html
<ul id="myMenu">
	<li data-menuanchor="firstPage" class="active"><a href="#firstPage">Primeira section</a></li>
	<li data-menuanchor="secondPage"><a href="#secondPage">Segunda section</a></li>
	<li data-menuanchor="thirdPage"><a href="#thirdPage">Terceira section</a></li>
	<li data-menuanchor="fourthPage"><a href="#fourthPage">Quarta section</a></li>
</ul>
```
```javascript
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	menu: '#myMenu'
});
```

**Observação:** o elemento de menu deve ser colocado fora do wrapper de página inteira para evitar problemas ao usar `css3:true`. Caso contrário, ele será anexado ao `body` pelo próprio plugin.

- `navigation`: (padrão `false`) Se definido como `true`, mostrará uma barra de navegação composta por pequenos círculos.

- `navigationPosition`: (padrão `none`) Pode ser definido como `left` ou `right` e define em qual posição a barra de navegação será mostrada (se estiver usando uma).

- `navigationTooltips`: (padrão []) Define as dicas de ferramentas a serem exibidas para os círculos de navegação caso estejam sendo usadas. Exemplo: `navigationTooltips: ['firstSlide', 'secondSlide']`. Você também pode defini-los usando o atributo `data-tooltip` em cada seção, se preferir.

- `showActiveTooltip`: (padrão `false`) Mostra uma dica de ferramenta persistente para a seção visualizada ativamente na navegação vertical.

- `slidesNavigation`: (padrão `false`) Se definido como `true`, mostrará uma barra de navegação composta de pequenos círculos para cada controle deslizante de paisagem no site.

- `slidesNavPosition`: (padrão `bottom`) Define a posição da barra de navegação de paisagem para controles deslizantes. Admite `top` e `bottom` como valores. Você pode querer modificar os estilos CSS para determinar a distância da parte superior ou inferior, bem como qualquer outro estilo, como cor.

- `scrollOverflow`: (padrão `true`) define se deve ou não criar um scroll para a seção/slide caso seu conteúdo seja maior que a altura do mesmo. Para evitar que fullpage.js crie a barra de rolagem em certas seções ou slides, use a classe `fp-noscroll`. Por exemplo: `<div class="section fp-noscroll">` Você também pode impedir que o scrolloverflow seja aplicado no modo responsivo ao usar `fp-auto-height-responsive` no elemento section.

- `scrollOverflowReset`: (padrão `false`) [Extensão de fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/). Os valores possíveis são `true`, `false`, `sections`, `slides`. Quando definido como `true`, ele rola o conteúdo da seção/slide com uma barra de rolagem ao sair para outra seção/slide. Dessa forma, a seção/slide sempre mostrará o início de seu conteúdo, mesmo ao rolar de uma seção abaixo dela. Adicionar a classe `fp-no-scrollOverflowReset` na seção ou slide desativará esse recurso para esse painel específico.

- `scrollOverflowMacStyle`: (padrão `false`). Quando ativa, esta opção usará um "estilo mac" para a barra de rolagem em vez do padrão, que será bem diferente em computadores Windows.

- `sectionSelector`: (padrão `.section`) Define o seletor Javascript usado para as seções do plugin. Ele pode precisar ser alterado algumas vezes para evitar problemas com outros plugins usando os mesmos seletores que fullpage.js.

- `slideSelector`: (padrão `.slide`) Define o seletor Javascript usado para os slides do plugin. Ele pode precisar ser alterado algumas vezes para evitar problemas com outros plugins usando os mesmos seletores que fullpage.js.

- `responsiveWidth`: (padrão `0`) Uma rolagem normal (`autoScrolling:false`) será usada sob a largura definida em pixels. Uma classe `fp-responsive` é adicionada à tag body caso o usuário queira usá-la para seu próprio CSS responsivo. Por exemplo, se definido como 900, sempre que a largura do navegador for menor que 900, o plug-in rolará como um site normal.

- `responsiveHeight`: (padrão `0`) Um scroll normal (`autoScrolling:false`) será usado sob a altura definida em pixels. Uma classe `fp-responsive` é adicionada à tag body caso o usuário queira usá-la para seu próprio CSS responsivo. Por exemplo, se definido como 900, sempre que a altura do navegador for menor que 900, o plug-in rolará como um site normal.

- `responsiveSlides`: (padrão `false`) [Extensão de fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/). Quando definido como "true", os slides serão transformados em seções verticais quando o modo responsivo for acionado. (usando as opções `responsiveWidth` ou `responsiveHeight` detalhadas acima). Requer fullpage.js >= 3.0.1.

- `parallax`: (padrão `false`) [Extensão de fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/). Define se deve ou não usar os efeitos de fundo de paralaxe em seções/slides. [Leia mais sobre como aplicar a opção de paralaxe](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax).

- `parallaxOptions`: (padrão: `{ tipo: 'reveal', porcentagem: 62, propriedade: 'translate'}`). Permite configurar os parâmetros para o efeito de fundo de paralaxe ao usar a opção `parallax:true`. [Leia mais sobre como aplicar a opção de paralaxe](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax).

- `dropEffect` (padrão `false`) [Extensão de fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/). Define se deve ou não usar o efeito de soltar nas seções/slides. [Leia mais sobre como aplicar a opção de efeito de soltar](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Drop-Effect).

- `dropEffectOptions`: (padrão: `{ velocidade: 2300, cor: '#F82F4D', zIndex: 9999}`). Permite configurar os parâmetros para o efeito de soltar ao usar a opção `dropEffect:true`.[Leia mais sobre como aplicar a opção de efeito de soltar](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Drop-Effect).

- `waterEffect` (padrão `false`) [Extensão de fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/). Define se deve ou não usar o efeito água nas seções/slides. [Leia mais sobre como aplicar a opção de efeito de água](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Water-Effect).

- `waterEffectOptions`: (padrão: `{ animateContent: true, animateOnMouseMove: true}`). Permite configurar os parâmetros para o efeito água ao usar a opção `waterEffect:true`.[Leia mais sobre como aplicar a opção efeito água](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Water-Effect).

- `cards`: (default `false`) [Extensões do fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/). Defines whether or not to use the cards effect on sections/slides. [Read more about how to apply the cards option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards).

- `cardsOptions`: (default: `{ perspective: 100, fadeContent: true, fadeBackground: true}`). Allows you to configure the parameters for the cards effect when using the option `cards:true`. [Read more about how to apply the cards option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards).

- `lazyLoading`: (padrão `true`) O carregamento lento está ativo por padrão, o que significa que carregará lentamente qualquer elemento de mídia contendo o atributo `data-src` conforme detalhado nos [documentos de carregamento lento](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#lazy-loading). Se você quiser usar qualquer outra biblioteca de carregamento lento, você pode desativar esse recurso fullpage.js.

- `observer`: (padrão `true`) Define se deve ou não observar mudanças na estrutura HTML da página. Quando ativado, fullPage.js reagirá automaticamente a essas alterações e se atualizará de acordo. Ideal ao adicionar, remover ou ocultar seções ou slides.

- `créditos`. (padrão `{enabled: true, label: 'Made with fullpage.js', position: 'right'}`). Define se os créditos fullPage.js devem ser usados. De acordo com as cláusulas 0, 4, 5 e 7 da licença GPLv3, aqueles que usam fullPage.js sob a GPLv3 são obrigados a fornecer um aviso proeminente de que fullPage.js está em uso. Recomendamos incluir a atribuição mantendo essa opção ativada.

## Métodos
Você pode vê-los em ação [aqui](http://alvarotrigo.com/fullPage/examples/methods.html)

### getActiveSection()
[Demonstração](https://codepen.io/alvarotrigo/pen/VdpzRN/) Obtém um objeto (tipo [Section](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#callbacks)) contendo a seção ativa e suas propriedades.

```javascript
fullpage_api.getActiveSection();
```

### getActiveSlide()
[Demonstração](https://codepen.io/alvarotrigo/pen/VdpzRN/) Obtém um objeto (tipo [Slide](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#callbacks)) contendo o slide ativo e suas propriedades.

```javascript
fullpage_api.getActiveSlide();
```

### getScrollY() & getScrollX
[Demonstração](https://codepen.io/alvarotrigo/pen/GRyGqro) `getScrollY` Obtém a posição Y do wrapper fullPage. `getScrollX` obtém a posição X do slide horizontal ativo.

```javascript
fullpage_api.getScrollY();
fullpage_api.getScrollX();
```

### moveSectionUp()
[Demonstração](http://codepen.io/alvarotrigo/pen/GJXNMN) Rola uma seção para cima:
```javascript
fullpage_api.moveSectionUp();
```
---
### moveSectionDown()
[Demonstração](http://codepen.io/alvarotrigo/pen/jPvVZx) Rola uma seção para baixo:
```javascript
fullpage_api.moveSectionDown();
```
---
### moveTo(section, slide)
[Demonstração](http://codepen.io/alvarotrigo/pen/doqOmY) Rola a página até a seção e o slide fornecidos. A primeira seção terá o índice 1 enquanto o primeiro slide, o visível por padrão, terá o índice 0.
```javascript
/*Rolando para a seção com o link âncora `firstSlide` e para o 2º Slide */
fullpage_api.moveTo('firstSlide', 2);

```

```javascript
//Rolando para a 3ª seção (com índice 3) no site
fullpage_api.moveTo(3, 0);

//Que é o mesmo que
fullpage_api.moveTo(3);
```
---
### silentMoveTo(section, slide)
[Demonstração](http://codepen.io/alvarotrigo/pen/doqOeY)
Exatamente igual ao [`moveTo`](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#movetosection-slide) mas neste caso ele realiza o scroll sem animação. Um salto direto para o destino.
```javascript
/*Rolando para a seção com o link âncora `firstSlide` e para o 2º Slide */
fullpage_api.silentMoveTo('firstSlide', 2);
```
---
### moveSlideRight()
[Demonstração](http://codepen.io/alvarotrigo/pen/Wvgoyz)
Rola o controle deslizante horizontal da seção atual para o próximo slide:
```javascript
fullpage_api.moveSlideRight();
```
---
### moveSlideLeft()
[Demonstração](http://codepen.io/alvarotrigo/pen/gpdLjW)
Rola o controle deslizante horizontal da seção atual para o slide anterior:
```javascript
fullpage_api.moveSlideLeft();
```
---
### setAutoScrolling(boolean)
[Demonstração](http://codepen.io/alvarotrigo/pen/rVZWrR) Define a configuração de rolagem em tempo real.
Define a forma como a rolagem da página se comporta. Se estiver definido como `true`, usará a rolagem "automática", caso contrário, usará a rolagem "manual" ou "normal" do site.

```javascript
fullpage_api.setAutoScrolling(false);
```
---
### setFitToSection(boolean)
[Demonstração](http://codepen.io/alvarotrigo/pen/GJXNYm)
Define o valor para a opção `fitToSection` determinando se cabe ou não a seção na tela.

```javascript
fullpage_api.setFitToSection(false);
```
---
### fitToSection()
[Demonstração](http://codepen.io/alvarotrigo/pen/JWWagj)
Rola para a seção ativa mais próxima, ajustando-a na viewport.

```javascript
fullpage_api.fitToSection();
```
---
### setLockAnchors(boolean)
[Demonstração](http://codepen.io/alvarotrigo/pen/yNxVRQ)
Define o valor para a opção `lockAnchors` determinando se as âncoras terão algum efeito na URL ou não.

```javascript
fullpage_api.setLockAnchors(false);
```
---
### setAllowScrolling(boolean, [directions])
[Demonstração](http://codepen.io/alvarotrigo/pen/EjeNdq) Adiciona ou remove a possibilidade de rolar pelas seções/slides usando a roda do mouse/trackpad ou gestos de toque (que está ativo por padrão). Observe que isso não desativará a rolagem do teclado. Você precisaria usar `setKeyboardScrolling` para isso.

- `directions`: (parâmetro opcional) Valores admitidos: `all`, `up`, `down`, `left`, `right` ou uma combinação deles separados por vírgulas como `down, right`. Define a direção para a qual a rolagem será habilitada ou desabilitada.

```javascript

//desabilitando rolagem
fullpage_api.setAllowScrolling(false);

//desabilitando rolagem para baixo
fullpage_api.setAllowScrolling(false, 'down');

//desabilitando rolagem para baixo e direita
fullpage_api.setAllowScrolling(false, 'down, right');
```
---
### setKeyboardScrolling(boolean, [directions])
[Demonstração](http://codepen.io/alvarotrigo/pen/GJXNwm) Adiciona ou remove a possibilidade de rolar pelas seções usando o teclado (que está ativo por padrão).

- `directions`: (parâmetro opcional) Valores admitidos: `all`, `up`, `down`, `left`, `right` ou uma combinação deles separados por vírgulas como `down, right`. Ele define a direção para a qual a rolagem será habilitada ou desabilitada.

```javascript
//desabilitando toda a rolagem do teclado
fullpage_api.setKeyboardScrolling(false);

//desabilitando a rolagem do teclado para baixo
fullpage_api.setKeyboardScrolling(false, 'down');

//desabilitando a rolagem do teclado para baixo e para a direita
fullpage_api.setKeyboardScrolling(false, 'down, right');
```
---
### setRecordHistory(boolean)
[Demonstração](http://codepen.io/alvarotrigo/pen/rVZWQb) Define se deve registrar o histórico para cada alteração de hash na URL.

```javascript
fullpage_api.setRecordHistory(false);
```
---
### setScrollingSpeed(milliseconds)
[Demonstração](http://codepen.io/alvarotrigo/pen/NqLbeY) Define a velocidade de rolagem em milissegundos.

```javascript
fullpage_api.setScrollingSpeed(700);
```
---
### destroy(type)
[Demonstração](http://codepen.io/alvarotrigo/pen/bdxBzv) Destrói os eventos do plug-in e, opcionalmente, sua marcação e estilos HTML.
Ideal para usar ao usar AJAX para carregar conteúdo.

- `type`: (parâmetro opcional) pode ser vazio ou `all`. Se `all` for passado, a marcação HTML e os estilos usados por fullpage.js serão removidos. Desta forma, a marcação HTML original, aquela usada antes de qualquer modificação do plugin, será mantida.

```javascript
//destruindo todos os eventos Javascript criados pelo fullPage.js (scrolls, hashchange na URL...)
fullpage_api.destroy();

//destruindo todos os eventos Javascript e qualquer modificação feita pelo fullPage.js sobre sua marcação HTML original.
fullpage_api.destroy('all');
```
---
### reBuild()
Atualiza a estrutura DOM para ajustar o novo tamanho da janela ou seu conteúdo.
  Ideal para usar em combinação com chamadas AJAX ou mudanças externas na estrutura DOM do site, especialmente quando se utiliza `scrollOverflow:true`.

```javascript
fullpage_api.reBuild();
```
---
### setResponsive(boolean)
[Demonstração](http://codepen.io/alvarotrigo/pen/WxOyLA) Define o modo responsivo da página. Quando definido como `true`, o autoScrolling será desativado e o resultado será exatamente o mesmo de quando as opções `responsiveWidth` ou `responsiveHeight` forem acionadas.
```javascript
fullpage_api.setResponsive(true);
```
---
### responsiveSlides.toSections()
[Extensões do fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/). Requer fullpage.js >= 3.0.1.
Transforma slides horizontais em seções verticais.

```javascript
fullpage_api.responsiveSlides.toSections();
```
---
### responsiveSlides.toSlides()
[Extensões do fullpage.js](http://alvarotrigo.com/fullPage/extensions/br/). Requer fullpage.js >= 3.0.1.
Volta os slides originais (agora convertidos em seções verticais) em slides horizontais novamente.

```javascript
fullpage_api.responsiveSlides.toSlides();
```

## Callbacks
[Demonstração](http://codepen.io/alvarotrigo/pen/XbPNQv) Você pode vê-los em ação [aqui](http://alvarotrigo.com/fullPage/examples/callbacks.html).

Alguns retornos de chamada, como `onLeave`, conterão parâmetros do tipo Object contendo as seguintes propriedades:

- `âncora`: *(String)* âncora do item.
- `index`: *(Number)* índice do item.
- `item`: *(elemento DOM)* elemento item.
- `isFirst`: *(Boolean)* determina se o item é o primeiro filho.
- `isLast`: *(Boolean)* determina se o item é o último filho.

### afterLoad (`origin`, `destination`, `direction`, `trigger`)
[Demonstração](http://codepen.io/alvarotrigo/pen/XbPNQv) Callback acionado após o carregamento das seções, após o término da rolagem.
Parâmetros:

- `origin`: *(Object)* seção de origem.
- `destination`: *(Object)* seção de destino.
- `direction`: *(String)* levará os valores `up` ou `down` dependendo da direção de rolagem.
- `trigger`: *(String)* indica o que acionou o scroll. Pode ser: "wheel", "keydown", "menu", "slideArrow", "verticalNav", "horizontalNav".

Exemplo:

```javascript
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterLoad: function(origin, destination, direction, trigger){
		var origin = this;

		//usando index
		if(origin.index == 2){
			alert("Section 3 ended loading");
		}

		//usando anchorLink
		if(origin.anchor == 'secondSlide'){
			alert("Section 2 ended loading");
		}
	}
});
```

---
### onLeave (`origin`, `destination`, `direction`, `trigger`)
[Demonstração](http://codepen.io/alvarotrigo/pen/XbPNQv) Esse retorno de chamada é acionado quando o usuário sai de uma seção, na transição para a nova seção.
Retornar `false` cancelará a movimentação antes que ela ocorra.

Parâmetros:

- `origin`: *(Object)* seção de origem.
- `destination`: *(Object)* seção de destino.
- `direction`: *(String)* levará os valores `up` ou `down` dependendo da direção de rolagem.
- `trigger`: *(String)* indica o que acionou o scroll. Pode ser: "wheel", "keydown", "menu", "slideArrow", "verticalNav", "horizontalNav".

Exemplo:

```javascript
new fullpage('#fullpage', {
	onLeave: function(origin, destination, direction, trigger){
		var leavingSection = this;

		//depois de sair da seção 2
		if(origin.index == 1 && direction =='down'){
			alert("Going to section 3!");
		}

		else if(origin.index == 1 && direction == 'up'){
			alert("Going to section 1!");
		}
	}
});
```


---
### beforeLeave (`origin`, `destination`, `direction`, `trigger`)
[Demonstração](http://codepen.io/alvarotrigo/pen/XbPNQv) Esse retorno de chamada é acionado imediatamente **antes** de sair da seção, pouco antes da transição.

Você pode usar esse retorno de chamada para impedir e cancelar a rolagem antes que ela ocorra retornando `false`.

Parâmetros:

- `origin`: *(Object)* seção de origem.
- `destination`: *(Object)* seção de destino.
- `direction`: *(String)* levará os valores `up` ou `down` dependendo da direção de rolagem.
- `trigger`: *(String)* indica o que acionou o scroll. Pode ser: "wheel", "keydown", "menu", "slideArrow", "verticalNav", "horizontalNav".

Example:

```javascript

var cont = 0;
new fullpage('#fullpage', {
	beforeLeave: function(origin, destination, direction, trigger){

		// impede scroll até que tenhamos rolado 4 vezes
		cont++;
		return cont === 4;
	}
});
```

---
### afterRender()
[Demonstração](http://codepen.io/alvarotrigo/pen/XbPNQv) Esse retorno de chamada é acionado logo após a geração da estrutura da página. Este é o retorno de chamada que você deseja usar para inicializar outros plugins ou disparar qualquer código que exija que o documento esteja pronto (já que este plugin modifica o DOM para criar a estrutura resultante). Consulte [Perguntas Frequentes](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions) para obter mais informações.

Example:

```javascript
new fullpage('#fullpage', {
	afterRender: function(){
		var pluginContainer = this;
		alert("A estrutura DOM resultante está pronta");
	}
});
```
---
### afterResize(`width`, `height`)
[Demonstração](http://codepen.io/alvarotrigo/pen/XbPNQv) Este retorno de chamada é acionado após o redimensionamento da janela do navegador. Logo após as seções serem redimensionadas.

Parâmetros:

- `width`: *(Number)* largura da janela.
- `altura`: *(Number)* altura da janela.

Exemplo:

```javascript
new fullpage('#fullpage', {
	afterResize: function(width, height){
		var fullpageContainer = this;
		alert("As seções terminaram de escalonar");
	}
});
```
---
### afterReBuild()
[Demonstração](http://codepen.io/alvarotrigo/pen/XbPNQv) Este retorno de chamada é acionado após a reconstrução manual de fullpage.js chamando `fullpage_api.reBuild()`.

Exemplo:

```javascript
new fullpage('#fullpage', {
	afterReBuild: function(){
		console.log("fullPage.js foi reconstruído manualmente");
	}
});
```
---
### afterResponsive(`isResponsive`)
[Demonstração](http://codepen.io/alvarotrigo/pen/XbPNQv) Esse retorno de chamada é acionado depois que fullpage.js muda do modo normal para o modo responsivo ou do modo responsivo para o modo normal.

Parâmetros:

- `isResponsive`: *(Boolean)* determina se entra no modo responsivo (`true`) ou volta ao modo normal (`false`).

Exemplo:

```javascript
new fullpage('#fullpage', {
	afterResponsive: function(isResponsive){
		alert("É responsivo: " + isResponsive);
	}
});
```
---
### afterSlideLoad (`section`, `origin`, `destination`, `direction`, `trigger`)
[Demonstração](http://codepen.io/alvarotrigo/pen/XbPNQv) O retorno de chamada é acionado quando o slide de uma seção é carregado, após o término da rolagem.

Parâmetros:

- `section`: *(Object)* seção vertical ativa.
- `origin`: *(Object)* slide horizontal de origem.
- `destination`: *(Object)* slide horizontal de destino.
- `direction`: *(String)* `right` ou `left` dependendo da direção de rolagem.
- `trigger`: *(String)* indica o que acionou o scroll. Pode ser: "wheel", "keydown", "menu", "slideArrow", "verticalNav", "horizontalNav".

Exemplo:

```javascript
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterSlideLoad: function( section, origin, destination, direction, trigger){
		var loadedSlide = this;

		//Primeiro slide da segunda seção
		if(section.anchor == 'secondPage' && destination.index == 1){
			alert("Primeiro slide carregado");
		}

		//Segundo slide da segunda seção (supondo que #secondSlide é âncora para a segunda seção)
		if(section.index == 1 && destination.anchor == 'secondSlide'){
			alert("Segundo slide carregado");
		}
	}
});
```


---
### onSlideLeave (`section`, `origin`, `destination`, `direction`, `trigger`)
[Demonstração](http://codepen.io/alvarotrigo/pen/XbPNQv) Esse retorno de chamada é acionado quando o usuário sai de um slide para ir para outro, na transição para o novo slide.
Retornar `false` cancelará a movimentação antes que ela ocorra.

Parâmetros:

- `section`: *(Object)* seção vertical ativa.
- `origin`: *(Object)* slide horizontal de origem.
- `destination`: *(Object)* slide horizontal de destino.
- `direction`: *(String)* `right` ou `left` dependendo da direção de rolagem.
- `trigger`: *(String)* indica o que acionou o scroll. Pode ser: "wheel", "keydown", "menu", "slideArrow", "verticalNav", "horizontalNav".

Example:

```javascript
new fullpage('#fullpage', {
	onSlideLeave: function( section, origin, destination, direction, trigger){
		var leavingSlide = this;

		//deixando o primeiro slide da 2ª Seção à direita
		if(section.index == 1 && origin.index == 0 && direction == 'right'){
			alert("Saindo do primeiro slide!!");
		}

		//deixando o 3º slide da 2ª Seção para a esquerda
		if(section.index == 1 && origin.index == 2 && direction == 'left'){
			alert("Indo pro slide 2");
		}
	}
});
```

#### Cancelando um movimento antes que ele ocorra
Você pode cancelar um movimento retornando `false` no retorno de chamada `onSlideLeave`. [O mesmo que cancelar um movimento com `onLeave`](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese/#cancelling-the-scroll-before-it-takes-place).


---
### onScrollOverflow (`section`, `slide`, `position`, `direction`)
[Demonstração](http://codepen.io/alvarotrigo/pen/XbPNQv) Este retorno de chamada é disparado quando uma rolagem dentro de uma seção rolável ao usar a opção fullPage.js `scrollOverflow: true`.

Parâmetros:

- `section`: *(Object)* seção vertical ativa.
- `slide`: *(Object)* slide horizontal de origem.
- `position`: *(Integer)* quantidade rolada dentro da seção/slide. Começa em 0.
- `direction`: *(String)* `up` ou `down`

Exemplo:

```javascript
new fullpage('#fullpage', {
	onScrollOverflow: function( section, slide, position, direction){
		console.log(section);
		console.log("Posição: " + position);
	}
});
```

# Relatando problemas
1. Por favor, procure seu problema antes de perguntar usando a pesquisa de Issues do github.
2. Certifique-se de usar a versão mais recente do fullpage.js. Nenhum suporte é fornecido para versões mais antigas.
3. Use o [fórum de Issues do Github](https://github.com/alvarotrigo/fullPage.js/issues) para criar Issues.
4. **Será necessária uma reprodução isolada da edição.** Use o [jsfiddle](https://jsfiddle.net/alvarotrigo/ea17skjr/) ou [codepen](http://codepen.io/alvarotrigo /pen/NxyPPp) para isso, se possível.

# Contribuindo para fullpage.js
Consulte [Contribuindo para o fullpage.js](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)

# Changelogs
Para ver a lista de alterações recentes, consulte a [seção Releases](https://github.com/alvarotrigo/fullPage.js/releases)

# Tarefas de Build
Quer buildar arquivos de distribuição do fullpage.js? Consulte [Tarefas de Build](https://github.com/alvarotrigo/fullPage.js/wiki/Build-tasks)

# Recursos
- Plugin Wordpress [para Gutenberg](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/) and [for Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/).
- [Tema de Wordpress](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [Componente wrapper Oificial para Vue.js](https://github.com/alvarotrigo/vue-fullpage.js)
- [Componente wrapper Oificial para React.js ](https://github.com/alvarotrigo/react-fullpage)
- [Angular Componente wrapper Oificial para Angular](https://github.com/alvarotrigo/angular-fullpage)
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (useful to define the `easingcss3` value)
- [fullPage.js jsDelivr CDN](https://www.jsdelivr.com/package/npm/fullpage.js)
- [fullPage.js plugin for October CMS](https://github.com/freestream/oc-parallax-plugin)
- [fullPage.js Angular2 directive](https://github.com/meiblorn/ng2-fullpage)
- [fullPage.js angular directive](https://github.com/hellsan631/angular-fullpage.js)
- [fullPage.js ember-cli addon](https://www.npmjs.com/package/ember-cli-fullpagejs)
- [fullPage.js Rails Ruby Gem](https://rubygems.org/gems/fullpagejs-rails)
- [Angular fullPage.js - Adaptation for Angular.js v1.x](https://github.com/mmautomatizacion/angular-fullpage.js)
- [Integrating fullPage.js with Wordpress (Tutorial)](http://premium.wpmudev.org/blog/build-apple-inspired-full-page-scrolling-pages-for-your-wordpress-site/)
- [Wordpress Plugin for Divi](https://alvarotrigo.com/fullPage/wordpress-plugin-divi/)
- [Wordpress Plugin for Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)

## Quem está usando o fullPage.js

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
![sym](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sym-5.png)
![Bugatti](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/bugatti-5.png)
![eDarling](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/edarling-5.png)
![Ubisoft](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ubisoft-5.png)

- http://www.bbc.co.uk/news/resources/idt-d88680d1-26f2-4863-be95-83298fd01e02
- http://www.shootinggalleryasia.com/
- http://medoff.ua/en/
- http://promo.prestigio.com/grace1/
- http://torchbrowser.com/
- http://thekorner.fr/
- http://charlotteaimes.com/
- http://www.boxreload.com/
- http://educationaboveall.org/
- http://usescribe.com/
- http://boxx.hk/
- http://www.villareginateodolinda.it
- http://ded-morozz.kiev.ua/

## Doações
Doações serão mais que bem-vindas :)

[![Doe](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## Patrocinadores
Torne-se um patrocinador e obtenha seu logotipo em nosso README no Github com um link para seu site. [[Seja um patrocinador](https://alvarotrigo.com/#contact)] | [[Torne-se um patreon]](https://www.patreon.com/fullpagejs)

[![Stackpath](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/stackpath3.png)](https://www.stackpath.com/)
[![Browserstack](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/browserstack3.png)](http://www.browserstack.com/)
[![CodePen](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codepen3.png)](https://codepen.com)
[![CodeFirst](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codefirst2.png)](https://www.codefirst.co.uk)

### Pessoas
<a href="https://github.com/donsalvadori" target="_blank" rel="nofollow">
	<img src="http://wallpapers-for-ipad.com/fullpage/imgs3/avatars/donsalvadori.jpg">
</a>

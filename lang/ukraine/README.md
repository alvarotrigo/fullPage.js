# fullPage.js
! [Попередній переглядання] (https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
! [Сумісність] (https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.gif?v=2)

<P align = "center">
  <a href="https://github.com/alvarotrigo/fullPage.js/#fullpagejs"> English </a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish#fullpagejs"> Español </a> |
  <Span> Українська </ span> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese#fullpagejs"> 中文 </a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs"> 한국어 </a>
</ P>

<P align = "center">
Available for <a href="https://github.com/alvarotrigo/vue-fullpage.js"> Vue </a>, <a href="https://github.com/alvarotrigo/react-fullpage"> React </a> and <a href="https://github.com/alvarotrigo/angular-fullpage"> Angular </a>.
</ P>

-

Проста і зручна у використанні бібліотека для створення веб-сайтів з повноекранної прокруткою (також відомих, як односторінкові сайти).
Вона дозволяє створювати веб-сайти з повноекранної прокруткою, а також додавати горизонтальні повзунки для розділів сайту.

- [Введення] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Введение)
- [Сумісність] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Совместимость)
- [Ліцензія] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Лицензия)
- [Використання] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Использование)
  - [Створення посилань на розділи або слайди] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Создание-ссылок-на-разделы-или-слайды)
  - [Створення великих і малих розділів] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Создание-больших-и-малых-разделов)
  - [Класи станів, що додаються fullpage.js] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Классы-состояний-добавляемые-fullpagejs)
  - [Відкладене завантаження] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Отложенная-загрузка)
  - [Автопроігриваніе вбудованого медіа] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Автопроигрываниеприостановка-встроенного-медиа)
  - [Використання розширень] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Использование-расширений)
- [Опції] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Опции)
- [Функції] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Функции)
- [Зворотні виклики] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Обратные-вызовы)
- [Повідомлення про проблему] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Сообщение-о-проблемах)
- [Внесення пропозицій для fullpage.js] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Внесение-предложений-для-fullpagejs)
- [Change Log] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#changelog)
- [Завдання щодо побудови] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Задачи-по-построению)
- [Ресурси] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Ресурсы)
- [Хто користується fullpage.js] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Кто-пользуется-fullpagejs)
- [Грошові перекази] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Денежные-переводы)

## Вступ
Більш ніж вітаються ваші пропозиції, що стосуються не тільки функцій і можливостей, але і поліпшення стилю кодування.
Давайте разом створимо чудову бібліотеку, щоб полегшити життя користувачам!

## Сумісність
fullPage.js повністю функціонує у всіх сучасних браузерах, також, як і в деяких застарілих, таких як Internet Explorer 9, Opera 12 і т.д.
Працює в браузерах, що мають і не мають підтримку CSS3, що забезпечує ідеальну сумісність з застарілими браузерами.
Забезпечує підтримку сенсорного управління для мобільних телефонів, планшетів і комп'ютерів з сенсорним екраном.

Висловлюємо особливу подяку [Browserstack] (http://www.browserstack.com/) за підтримку fullpage.js.

## Ліцензія

### Комерційна ліцензія
Якщо ви хочете використовувати fullPage для розробки комерційних сайтів, тим, проектів і програм, то вам підійде комерційна ліцензія. З такою опцією ваш вихідний код буде закритим. Це означає, що вам не доведеться міняти весь вихідний код вашої програми на ліцензію з відкритим вихідним кодом. [[Придбайте Комерційну ліцензію Fullpage тут]] (https://alvarotrigo.com/fullPage/pricing/)

### Ліцензія з відкритим вихідним кодом
Якщо ви створюєте додаток з відкритим вихідним кодом за ліцензією, сумісною з [Ліцензією GNU GPL v3] (https://www.gnu.org/licenses/gpl-3.0.html), ви можете використовувати fullPage на умовах GPLv3.

** Відомості про автора в JavaScript і файлах CSS повинні залишатися без змін ** (даже після комбінації або мініфікаціі)

[Прочитати більше про ліцензії fullPage] (https://alvarotrigo.com/fullPage/pricing/).

## Використання
Як ви можете побачити в файлах-прикладах, вам необхідно буде включити:
 - Файл JavaScript `fullpage.js` (або його мініфіцірованную версію` fullpage.min.js`)
 - Файл css `fullpage.css`

 ** Опціонально **, при використанні `css3: false` ви можете додати [бібліотеку jQuery UI] (http://jqueryui.com/), в разі якщо ви хочете використовувати інші анімаційні ефекти, на додаток до включеним в бібліотеку (` easeInOutCubic`).

### Установка bower або npm
** Опціонально **, ви можете встановити fullPage.js з bower або npm згідно вашим перевагам:

Введіть:
`` `Shell
// З bower
bower install fullpage.js

// З npm
npm install fullpage.js
`` `

### Включення файлів:
`` `Html
<Link rel = "stylesheet" type = "text / css" href = "fullpage.css" />


<! - Наступна рядок опціонально. Необхідна лише в разі, якщо ви використовуєте опцію css3: false і хочете використовувати інші анімаційні ефекти, крім "linear", "swing" або "easeInOutCubic". ->
<Script src = "vendors / easings.min.js"> </ script>

<! - Наступна рядок опціонально, необхідна лише в разі, якщо ви хочете використовувати опцію `scrollOverflow: true` ->
<Script type = "text / javascript" src = "vendors / scrolloverflow.min.js"> </ script>

<Script type = "text / javascript" src = "fullpage.js"> </ script>
`` `

Using Webpack, Browserify or Require.js? Check <a href="https://github.com/alvarotrigo/fullPage.js/wiki/Use-module-loaders-for-fullPage.js"> how to use fullPage.js with module loaders </a>.

### Опціональне використання CDN
Якщо ви віддаєте перевагу використовувати CDN для завантаження необхідних файлів, fullPage.js є в CDNJS:
https://cdnjs.com/libraries/fullPage.js

### Необхідна HTML-структура
Починаючи свій документ HTML, обов'язково введіть [HTML DOCTYPE declaration] (http://www.corelangs.com/html/introduction/doctype.html) в першому рядку вашого HTML-коду. Інакше у вас можуть виникнути проблеми з вертикальним розміром розділів. У наведених прикладах використовується тип документа HTML 5 `<! DOCTYPE html>`.

Кожен розділ буде визначений елементом, що містить клас `section`.
Активний розділ за замовчуванням буде першим розділом, тобто домашньою сторінкою.

Розділи повинні поміщатися в обгортковий код (в даному випадку - `<div id =" fullpage ">`). Обгортковий код не може бути елементом `body`.
`` `Html
<Div id = "full page">
<Div class = "section"> Певний розділ </ div>
<Div class = "section"> Певний розділ </ div>
<Div class = "section"> Певний розділ </ div>
<Div class = "section"> Певний розділ </ div>
</ Div>
`` `
Якщо ви хочете визначити іншу точку входу (не перший розділ або перший слайд розділу), просто додайте клас `active` до розділу і слайду, які ви хочете завантажувати в першу чергу.
`` `Html
<Div class = "section active"> Певний розділ </ div>
`` `

Щоб створити горизонтальний повзунок в розділі, кожен слайд повинен визначатися за замовчуванням за допомогою елемента, що містить клас `slide`:
`` `Html
<Div class = "section">
<Div class = "slide"> Слайд 1 </ div>
<Div class = "slide"> Слайд 2 </ div>
<Div class = "slide"> Слайд 3 </ div>
<Div class = "slide"> Слайд 4 </ div>
</ Div>
`` ``
Ви можете подивитися на повністю працездатний приклад HTML-структури тут: [файл `simple.html`] (https://github.com/alvarotrigo/fullPage.js/blob/master/examples/simple.html).

### Ініціалізація

#### Ініціалізація з Vanilla Javascript
Все, що вам потрібно зробити, - це вказати fullPage.js перед закриває тегом `</ body>`.

`` `Javascript
new fullpage ( '# fullpage', {
// options here
autoScrolling: true,
scrollHorizontally: true
});

// methods
fullpage_api.setAllowScrolling (false);
`` `

#### Ініціалізація з jQuery
Якщо хочете, можете також використовувати fullpage.js в якості плагіна jQuery!

`` `Javascript
$ (Document) .ready (function () {
$ ( '# Fullpage'). Fullpage ({
// options here
autoScrolling: true,
scrollHorizontally: true
});

// methods
$ .Fn.fullpage.setAllowScrolling (false);
});
`` `

Функції і методи можна робити так само, як і з jQuery, як в [fullPage.js v2.X] (https://github.com/alvarotrigo/fullPage.js/tree/2.9.7).

#### Приклад Vanilla JS з усіма опціями

Складніша ініціалізація з установкою всіх параметрів може виглядати так:
`` `Javascript
var myFullpage = new fullpage ( '# fullpage', {
// Навігація
menu: '#menu',
lockAnchors: false,
anchors: [ 'firstPage', 'secondPage'],
navigation: false,
navigationPosition: 'right',
navigationTooltips: [ 'firstSlide', 'secondSlide'],
showActiveTooltip: false,
slidesNavigation: false,
slidesNavPosition: 'bottom',

// Скролінг
css3: true,
scrollingSpeed: 700,
autoScrolling: true,
fitToSection: true,
fitToSectionDelay 1000,
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
normalScrollElements: '# element1, .element2',
scrollOverflow: false,
scrollOverflowReset: false,
scrollOverflowOptions: null,
touchSensitivity: 15,
bigSectionsDestination: null,

// Доступ
keyboardScrolling: true,
animateAnchor: true,
recordHistory: true,

// Дизайн
controlArrows: true,
verticalCentered: true,
sectionsColor: [ '#ccc', '#fff'],
paddingTop: '3em',
paddingBottom: '10px',
fixedElements: '#header, .footer',
responsiveWidth: 0,
responsiveHeight: 0,
responsiveSlides: false,
parallax: false,
parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
cards: false,
cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

// Налаштувати селектори
sectionSelector: '.section',
slideSelector: '.slide',

lazyLoading: true,

// події
onLeave: function (origin, destination, direction) {},
afterLoad: function (origin, destination, direction) {},
afterRender: function () {},
afterResize: function (width, height) {},
afterReBuild: function () {},
afterResponsive: function (isResponsive) {},
afterSlideLoad: function (section, origin, destination, direction) {},
onSlideLeave: function (section, origin, destination, direction) {}
});
`` `

### Створення посилань на розділи або слайди
Якщо ви використовуєте fullPage.js з посиланнями прив'язки для розділів (користуючись опцією `anchors` або атрибутом` data-anchor` в кожному розділі), то ви зможете використовувати посилання прив'язки також для переміщення безпосередньо до певного слайду в розділі.

Ось приклад посилання з прив'язкою: http://alvarotrigo.com/fullPage/#secondPage/2 (це URL, який ви побачите при доступі до цього розділу / слайду вручну)
Зверніть увагу на те, що остання частина URL закінчується елементом `# secondPage / 2`.

При наступній ініціалізації:

`` `Javascript
new fullpage ( '# fullpage', {
anchors: [ 'firstPage', 'secondPage', 'thirdPage']
});
`` `

Прив'язка `# secondPage / 2` в кінці URL визначає заданий розділ і слайд відповідно. У попередньому URL заданим розділом буде розділ, певний прив'язкою `secondPage`, а заданим слайдом буде другий слайд, так як для цього ми і використовували індекс` 2`. (Перший слайд в розділі має індекс 0, так як технічно це розділ).

Ми могли б використовувати свою прив'язку для слайда, а не його індекс, якби ми використовували атрибут `data-anchor` в HTML-розмітці наступним чином:

`` `Html
<Div class = "section">
<Div class = "slide" data-anchor = "slide1"> Слайд 1 </ div>
<Div class = "slide" data-anchor = "slide2"> Слайд 2 </ div>
<Div class = "slide" data-anchor = "slide3"> Слайд 3 </ div>
<Div class = "slide" data-anchor = "slide4"> Слайд 4 </ div>
</ Div>
`` `
В даному випадку ми б використовували URL `# secondPage / slide3`, що є еквівалентним попереднього -` # secondPage / 2 `.

Зверніть увагу, що прив'язки до розділів можуть створюватися так само, за допомогою атрибута `data-anchor`, якщо не передбачений ряд будь-яких прив'язок -` anchors`.

** Увага! ** позначення `data-anchor` не можуть мати значення, яке співпадає з будь-яким елементом ID на сайті (або елементом NAME - для IE).

### Створення великих і малих розділів
[Демо] (http://codepen.io/alvarotrigo/pen/BKjRYm) fullPage.js забезпечує можливість прибрати обмеження по висоті розділів і слайдів. Є можливість створювати розділи, висота яких більше або менше вікна перегляду. Ця функція ідеальна при використанні колонтитулів.
Важливо розуміти, що немає сенсу в застосуванні даної функції до всіх ваших розділах. При наявності більш ніж одного розділу при первинному завантаженні сайту fullPage.js не зможе зробити прокрутку, щоб побачити наступний розділ, так як він вже і так буде знаходитися в вікні перегляду.

Для створення менших розділів просто використовуйте клас `fp-auto-height` в розділі, до якого хочете застосувати цю функцію. Тоді висота буде визначатися контентом вашого розділу / слайда.

`` `Html
<Div class = "section"> Повний вікно перегляду </ div>
<Div class = "section fp-auto-height"> Автовисота </ div>
`` `

#### Розділи з підстроюванням автовисоти
[Демо] (https://codepen.io/alvarotrigo/pen/MzByMa) Підстроювання автовисоти може бути застосована за допомогою класу `fp-auto-height-responsive`. В такому випадку розділи будуть відображатися в повну висоту, поки не буде активований режим підстроювання.

### Класи станів, що додаються fullpage.js
Fullpage.js додає різні класи до різних елементів, щоб відстежувати статус сайту:

- `active` додається до поточного отображаемому розділу і слайду.
- `active` додається до поточного елементу меню (якщо використовується опція` menu`).
- Клас виду `fp-viewing-SECTION-SLIDE` додається до елементу` body`. (Наприклад: [ `fp-viewing-secondPage-0`] (http://alvarotrigo.com/fullPage/#secondPage)) Частини` SECTION` і `SLIDE` будуть прив'язками (або індексами, якщо прив'язки не передбачені) до поточного розділу і слайду.
- `fp-responsive` додається до елементу` body` при вході в режим підстроювання
- `fp-enabled` додається до елементу` html`, коли fullpage.js актівірован. (І віддаляється при деактивації).
- `fp-destroyed` додається до сховища fullpage.js при деактивації fullPage.js.

### Відкладене завантаження
[Демо] (http://codepen.io/alvarotrigo/pen/eNLBXo) fullPage.js забезпечує можливість відкладеної завантаження зображень, відео- та аудіоелементов, щоб вони не сповільнювали завантаження вашого сайту і не витрачали без необхідності трафік при передачі даних.
При використанні відкладеного завантаження всі ці елементи будуть завантажуватися тільки при відкритті у вікні конструювання.
Все, що вам потрібно зробити для активації відкладеної завантаження, - це змінити ваш атрибут `src` на` data-src`, як показано нижче:

`` `
<Img data-src = "image.png">
<Video>
<Source data-src = "video.webm" type = "video / webm" />
<Source data-src = "video.mp4" type = "video / mp4" />
</ Video>
 `` `

Якщо ви вже застосовуєте інший спосіб для відкладеної завантаження, який також використовує `data-src`, ви можете відключити відкладену завантаження fullPage.js, встановивши опцію` lazyLoading: false`.

### Автопроігриваніе / призупинення вбудованого медіа

[Демо] (https://codepen.io/alvarotrigo/pen/pXEaaK) ** Примітка **: функція автопроігриванія може не працювати на деяких мобільних пристроях, в залежності від їх ОС і браузера (тобто, в [Safari в iOS ] (https://webkit.org/blog/6784/new-video-policies-for-ios/), в версіях до 10.0).

#### Відтворення при завантаженні розділу / слайда:
При використанні атрибуту `autoplay` для відео або аудіо, чи параметра` autoplay = 1 'для вбудованих фреймів youtube, медіа програватиметься при завантаженні сторінки.
Для програвання медіа при завантаженні розділу / слайда, використовуйте `data-autoplay`. наприклад:

`` `Html
<Audio data-autoplay>
<Source src = "http://metakoncept.hr/horse.ogg" type = "audio / ogg">
</ Audio>
`` `

#### Призупинення при покиданні сторінки
Вбудовані фрейми HTML5 `<video>` / `<audio>` і Youtube автоматично зупиняються, коли ви залишаєте розділ або слайд. Це можна відключити за допомогою атрибута `data-keepplaying`. наприклад:
`` `Html
<Audio data-keepplaying>
<Source src = "http://metakoncept.hr/horse.ogg" type = "audio / ogg">
</ Audio>
`` `

### Використання розширень
fullpage.js [надає ряд розширень] (http://alvarotrigo.com/fullPage/extensions/), які ви можете використовувати для поліпшення його функцій, передбачених за замовчуванням. Всі вони представлені як [опції fullpage.js] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Опции).

Для розширень вам потрібно використовувати мініфіцірованний файл [ `fullpage.extensions.min.js`] (https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js), що знаходиться в [папці `dist`] (https://github.com/alvarotrigo/fullPage.js/tree/master/dist), а не звичайний файл fullPage.js (` fullpage.js` або `fullpage.min.js`) .

Після придбання файлу розширення вам потрібно буде додати його перед fullPage. Наприклад, якщо я хочу використовувати розширення Continuos Horizontal, мені потрібно буде включити файл розширення, а потім - версію файлу fullPage для розширень.

`` `Html
<Script type = "text / javascript" src = "fullpage.continuousHorizontal.min.js"> </ script>
<Script type = "text / javascript" src = "fullpage / fullpage.extensions.min.js"> </ script>
`` `

Ключ активації і ключ ліцензії будуть потрібні для кожного розширення. [Дізнайтеся докладніше про це тут] (https://github.com/alvarotrigo/fullPage.js/blob/master/lang/russian/how-to-activate-fullpage-extension.md).

Потім ви зможете використовувати і налаштовувати їх, як пояснюється в розділі [опції] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Опции).

## Опції

- `licenseKey`: (за замовчуванням` null`). ** Ця опція є обов'язковою. ** Якщо ви використовуєте fullPage для проекту з закритим вихідним кодом, то вам слід скористатися ліцензійним ключем, що надаються при придбанні комерційної ліцензії fullPage.еслі ваш проект відкритий з відкритим вихідним кодом, [зв'яжіться зі мною] (https : //alvarotrigo.com/#contact), щоб отримати ліцензійний ключ .. Ви можете прочитати докладніше про ліцензії [тут] (https://github.com/alvarotrigo/fullPage.js#license) і [на веб-сайті] (https://alvarotrigo.com/fullPage/pricing/). приклад:

`` `Javascript
new fullpage ({
    licenseKey: 'YOUR_KEY_HERE'
});
`` `

- `v2compatible`: (значення за замовчуванням:` false`). Визначає 100% сумісність з будь-яким кодом, написаним для версії 2, ігноруючи нові функції або зміни API версії 3. Класи станів, сигнатури зворотних викликів і т.п. працюватимуть так само, як у версії 2. ** Звертаємо вашу увагу на те, що дана опція в майбутньому буде видалена. **.

- `controlArrows`: (за замовчуванням` true`) Визначає використання клавіш-стрілок для пересування вправо або вліво при перегляді слайдів.

- `verticalCentered`: (за замовчуванням` true`) Вертикальне центрування контенту в розділах. При установці даного розширення - `true`, ваш контент буде обгорнутий бібліотекою. Розгляньте можливість делегування або завантажте ваші скрипти для зворотного виклику `afterRender`.

- `scrollingSpeed`: (за замовчуванням` 700`) Пришвидшіть на мілісекунди переходи при скролінгу.

- `sectionsColor`: (за замовчуванням` none`) Дайте CSS-властивість `background-color` кожному розділу.
приклад:
`` `Javascript
new fullpage ( '# fullpage', {
sectionsColor: [ '# f2f2f2', '# 4BBFC3', '# 7BAABE', 'whitesmoke', '# 000'],
});
`` `

- `anchors`: (за замовчуванням` [] `) Забезпечує розміщення посилань з прив'язками (# приклад) в URL для кожного розділу. Значення прив'язок повинні бути унікальними. Положення прив'язок в ряду буде визначати те, до якого розділу застосовується прив'язка. (Друга позиція для другого розділу і так далі). Використання прив'язок також дає можливість навігації вперед і назад в браузері. Ця опція також дає користувачам можливість додавати в закладки певний розділ або слайд. ** Увага! ** прив'язки не можуть мати значення, яке співпадає з будь-яким елементом ID на сайті (або елементом NAME - для IE).
Тепер прив'язки можуть додаватися прямо в HTML-структурі за допомогою атрибута `data-anchor`, як пояснюється тут.

- `lockAnchors`: (за замовчуванням` false`) Визначає, чи будуть взагалі діяти в бібліотеці прив'язки в URL. Ви як і раніше зможете використовувати прив'язки в закритому форматі для ваших власних функцій і зворотних викликів, але в скроллинге сайту вони не братимуть участі. Це корисна функція, якщо ви хочете поєднати fullPage.js з іншими плагінами, що використовують прив'язки в URL.

** Важливо ** Потрібно розуміти, що значення в ряду опцій `anchors` безпосередньо співвідносяться з елементом класу` .section` за допомогою їх розташування в розмітці.

- `easing`: (за замовчуванням` easeInOutCubic`) Визначає ефект переходу, який використовується при вертикальному і горизонтальному скролінгу.
Необхідний файл `vendors / easings.min.js` або [jQuery UI] (http://jqueryui.com/) для використання деяких з [переходів] (http://api.jqueryui.com/easings/). Можуть використовуватися інші бібліотеки.

- `easingcss3`: (за замовчуванням` ease`) Визначає ефект переходу для застосування в разі використання `css3: true`. Ви можете використовувати [встановлені ефекти] (http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) (такі як `linear`,` ease-out` ...) або створити свої власні за допомогою функції `cubic-bezier`. Ви також можете використовувати для цієї мети [Matthew Lein CSS Easing Animation Tool] (http: // matthewlein.com / ceaser / `).

- `loopTop`: (за замовчуванням` false`) Визначає, чи буде здійснюватися скролінг до останнього розділу під час перегляду першого розділу вгору.

- `loopBottom`: (за замовчуванням` false`) Визначає, чи буде здійснюватися скролінг до першого розділу під час перегляду останнього розділу вниз.

- `loopHorizontal`: (за замовчуванням` true`) Визначає, чи будуть горизонтальні слайдери працювати циклічно після переходу до останнього або попереднього слайду.

- `css3`: (за замовчуванням` true`). Визначає використання JavaScript або CSS3-трансформацій для скролінгу в межах розділів і слайдів. Ця функція допомагає прискорити гортання для планшетів і мобільних пристроїв, браузери яких підтримують CSS3. Якщо встановлено значення `true` для цієї опції і браузер не підтримує CSS3, буде використана альтернатива.

- `autoScrolling`: (за замовчуванням` true`) Визначає використання «автоматичного» скролінгу або «звичайного». Також ця опція впливає на розміщення розділів у вікні браузера / пристрої для планшетів і мобільних пристроїв.

- `fitToSection`: (за замовчуванням` true`) Визначає, чи потрібна підстроювання розділів під вікно перегляду. При встановленні значення `true` для даної опції поточний активний розділ завжди буде заповнювати вікно перегляду. В іншому випадку користувач матиме можливість зупинитися на середині розділу (коли)

- `fitToSectionDelay`: (за замовчуванням 1000). Якщо для опції `fitToSection` встановлено значення` true`, дана функція сповільнить підстроювання на налаштовані мілісекунди.

- `scrollBar`: (за замовчуванням` false`) Визначає, чи буде використовуватися смуга прокрутки на сайті. При використанні смуги прокрутки функція `autoScrolling` буде працювати як зазвичай. Користувач і раніше зможе перегортати сайт за допомогою смуги прокрутки, і fullPage.js підлаштувати розділ під екран після закінчення скролінгу.

- `paddingTop`: (за замовчуванням` 0`) Визначає верхній відступ для кожного розділу в числовому форматі (paddingTop: '10px', paddingTop: '10em' ...) Ця функція зручна при використанні фіксованих верхніх колонтитулів.

- `paddingBottom`: (за замовчуванням` 0`) Визначає нижній відступ для кожного розділу в числовому форматі (paddingBottom: '10px', paddingBottom: '10em' ...). Ця функція зручна при використанні фіксованих нижніх колонтитулів.

- `fixedElements`: (за замовчуванням` null`) Визначає, які елементи будуть виключені зі структури скролінгу плагіна, що необхідно при використанні опції `css3` для їх фіксації. Для цього необхідна рядок з селекторами Javascript для даних елементів. (Наприклад: `fixedElements: '# element1, .element2'`)

- `normalScrollElements`: (за замовчуванням` null`) [Демо] (https: // codepen.io/alvarotrigo/pen/RmVazM) Якщо ви хочете уникнути автопрокрутки при скролінгу деяких елементів, вам потрібно використовувати цю опцію. (Знадобиться для карт, прокрутки div-елементів і т.д.) Для цього необхідна рядок з селекторами Javascript для даних елементів. (Наприклад: `normalScrollElements: '# element1, .element2'`). Дану опцію слід застосовувати до самих розділів / слайдів.

- `bigSectionsDestination`: (за замовчуванням` null`) Визначає, як повинна здійснюватися прокрутка до розділу, розмір якого перевищує розмір вікна перегляду. За замовчуванням fullPage.js перегортає вгору, якщо ви потрапляєте з розділу над заданим, і вниз, якщо ви потрапляєте з розділу під заданим. Можливі значення: `top`,` bottom`, `null`.

- `keyboardScrolling`: (за замовчуванням` true`) Визначає можливість навігації на сайті за допомогою клавіатури.

- `touchSensitivity`: (за замовчуванням` 5`) Визначає ширину і висоту браузерів в процентах, а також те, наскільки довгим повинно бути гортання для переходу до наступного розділу / слайду.

- `continuousVertical`: (за замовчуванням` false`) Визначає, чи буде здійснюватися скролінг до останнього розділу під час перегляду першого розділу вгору і до першого розділу під час перегляду останнього розділу вниз. Опція несумісна з опціями `loopTop`,` loopBottom` і будь-якими смугами прокрутки, використовуваними на сайті ( `scrollBar: true` або` autoScrolling: false`).

- `continuousHorizontal`: (за замовчуванням` false`) [Розширення fullpage.js] (http://alvarotrigo.com/fullPage/extensions/). Визначає, чи буде під час перегляду вправо останнього слайда здійснюватися прокрутка вправо до першого слайду, а також призведе чи прокрутка вліво першого слайда до прокручування вліво до останнього слайду. Опція несумісна з опцією `loopHorizontal`. Необхідна версія fullpage.js> = 3.0.1.

- `scrollHorizontally`: (за замовчуванням` false`) [Розширення fullpage.js] (http://alvarotrigo.com/fullPage/extensions/). Визначає здійснення горизонтального гортання повзунків за допомогою колеса миші або трекпада. Ідеальна для оповідань. It can only be used when using: `autoScrolling: true`. Необхідна версія fullpage.js> = 3.0.1.

- `interlockedSlides`: (за замовчуванням` false`) [Розширення fullpage.js] (http://alvarotrigo.com/fullPage/extensions/). Визначає, чи буде при пересуванні одного горизонтального повзунка здійснюватися гортання повзунків іншого розділу в тому ж напрямку. Можливі значення: `true`,` false` або послідовність взаємопов'язаних розділів. Наприклад: `[1,3,5]`, починаючи з 1. Необхідна версія fullpage.js> = 3.0.1.

- `dragAndMove`: (за замовчуванням` false`) [Розширення fullpage.js] (http://alvarotrigo.com/fullPage/extensions/). Активує або деактивує протягування і огляд розділів і слайдів за допомогою миші або пальців. Можливі значення: `true`,` false`, `vertical`,` horizontal`, `fingersonly`,` mouseonly` ,. Необхідна версія fullPage.js> = 3.0.1.

- `offsetSections`: (за замовчуванням` false`) [Розширення fullpage.js] (http://alvarotrigo.com/fullPage/extensions/). Забезпечує можливість використовувати неполноекранние розділи на підставі їх відсоткових значень. Опція ідеальна для демонстрації користувачеві того, що на сайті є більше контенту, показуючи частина наступного або попереднього розділу. Необхідна версія fullPage.js> = 3.0.1
Для визначення процентного значення кожного розділу необхідно використовувати атрибут `data-percentage`. Центрування розділу у вікні перегляду може визначатися за допомогою логічного значення в атрибуті `data-centered` (за замовчуванням` true`, якщо не визначено). наприклад:
`` `Html
    <Div class = "section" data-percentage = "80" data-centered = "true">
`` `

- `resetSliders`: (за замовчуванням` false`). [Розширення fullpage.js] (http://alvarotrigo.com/fullPage/extensions/). Визначає, чи потрібно повертати в початкове положення кожен повзунок після покидання розділу, в якому він розміщений. Необхідна версія fullpage.js> = 3.0.1.

- `fadingEffect`: (за замовчуванням` false`). [Розширення fullpage.js] (http://alvarotrigo.com/fullPage/extensions/). Визначає, чи буде використовуватися ефект загасання замість використовуваного за замовчуванням ефекту прокрутки. Можливі значення `true`,` false`, `sections`,` slides`. Таким чином, даний параметр може застосовуватися тільки вертикально або горизонтально, або ж одночасно в обох напрямках. Необхідна версія fullpage.js> = 3.0.1.

- `animateAnchor`: (за замовчуванням` true`) Визначає, чи буде під час завантаження сайту при використанні прив'язок (#) здійснюватися прокрутка з анімацією до призначеного розділу або ж безпосередньо.

- `recordHistory`: (за замовчуванням` true`) Визначає, чи потрібно відображати стан сайту в історії браузера. При встановленні значення `true` кожен розділ / слайд сайту буде діяти як нова сторінка, і кнопки браузера« назад »і« вперед »прокрутять розділи / слайди для переходу до попереднього або наступного стану сайту. При встановленні значення `false` URL буде продовжувати змінюватися, але не відіб'ється на історіїбраузера. Дана опція відключається автоматично при використанні опції `autoScrolling: false`.

- `menu`: (за замовчуванням` false`) Селектор може використовуватися для зв'язку елементів меню з розділами. Таким чином, скролінг розділів активує відповідний елемент меню за допомогою класу `active`.
Це не призведе до створення нового меню, а лише додасть клас `active` елементу в наявному меню з відповідними посиланнями з прив'язками.
Щоб зв'язати елементи меню з розділами, необхідно буде використовувати інформаційний блок HTML 5 ( `data-menuanchor`) з тими ж посиланнями з прив'язками, які використовуються в розділах. приклад:
`` `Html
<Ul id = "myMenu">
<Li data-menuanchor = "firstPage" class = "active"> <a href="#firstPage"> Перший розділ </a> </ li>
<Li data-menuanchor = "secondPage"> <a href="#secondPage"> Другий розділ </a> </ li>
<Li data-menuanchor = "thirdPage"> <a href="#thirdPage"> Третій розділ </a> </ li>
<Li data-menuanchor = "fourthPage"> <a href="#fourthPage"> Четвертий розділ </a> </ li>
</ Ul>
`` `
`` `Javascript
new fullpage ( '# fullpage', {
anchors: [ 'firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
menu: '#myMenu'
});
`` `

** Увага: ** елемент меню повинен поміщатися за межами обгортковий коду для повного екрану, щоб уникнути проблем при використанні `css3: true`. В іншому випадку він буде приєднаний до `body` самим плагіном.

- `navigation`: (за замовчуванням` false`) При встановленні значення `true` панель навігації буде відображена у вигляді невеликих гуртків.

- `navigationPosition`: (за замовчуванням` none`) Можуть бути встановлені значення `left` або` right`. Опція визначає, яке положення займають панель навігації (якщо вона використовується).

- `navigationTooltips`: (за замовчуванням []) Визначає довідкові написи, які будуть показані для гуртків навігаційної панелі, якщо вони використовуються. Наприклад: `navigationTooltips: [ 'firstSlide', 'secondSlide']`. Ви можете також визначити їх за допомогою атрибута `data-tooltip` в кожному розділі, якщо хочете.

- `showActiveTooltip`: (за замовчуванням` false`) Показує постійну довідкову напис для проглядається в даний момент розділу в вертикальної навігації.

- `slidesNavigation`: (за замовчуванням` false`) При встановленні значення `true` навігаційна панель буде відображатися у вигляді невеликих гуртків для кожного горизонтального повзунка сайту.

- `slidesNavPosition`: (за замовчуванням` bottom`) Визначає розташування горизонтальної навігаційної панелі для слайдерів. Можливі значення: `top` і` bottom`. При бажанні ви можете налаштувати стилі CSS для визначення відстані від верхньої до нижньої частини, так само як і будь-який інший стиль, наприклад, колір.

- `scrollOverflow`: (за замовчуванням` false`) визначає необхідність створення прокрутки для розділу / слайда, якщо контент перевищує його висоту. При встановленні значення `true` ваш контент буде обгорнутий плагіном. Розгляньте можливість делегування або завантажте ваші скрипти для зворотного виклику `afterRender`.
При встановленні значення `true` необхідна бібліотека розробника [` scrolloverflow.min.js`] (https://github.com/alvarotrigo/fullPage.js/blob/master/vendors/scrolloverflow.min.js), яка повинна бути завантажена до завантаження плагіна fullPage.js, але після jQuery (якщо використовується).
наприклад:

`` `Html
<Script type = "text / javascript" src = "vendors / scrolloverflow.min.js"> </ script>
<Script type = "text / javascript" src = "fullpage.js"> </ script>
`` `

Щоб запобігти створенню fullpage.js смуги прокрутки в певних розділах або слайдах, використовуйте клас `fp-noscroll`. Наприклад: `<div class =" section fp-noscroll ">`

Ви можете уникнути застосування scrolloverflow в чуйну режимі, використовуючи `fp-auto-height-responsive` в елементі розділу.

- `scrollOverflowReset`: (за замовчуванням` false`) [Розширення fullpage.js] (http://alvarotrigo.com/fullPage/extensions/). При встановленні значення `true` буде здійснюватися прокрутка контенту розділу / слайда за допомогою смуги прокрутки при покиданні іншого вертикального розділу. Таким чином, розділ / слайд буде завжди показувати початок контента навіть при скролінгу з розділу / слайда, розташованого нижче.

- `scrollOverflowOptions`: при застосуванні scrollOverflow: true fullpage.js буде використовувати модифіковану версію [iScroll.js libary] (https://github.com/cubiq/iscroll/). Ви можете налаштувати поведінку прокрутки, забезпечивши fullpage.js опціями iScroll.js, які ви хочете використовувати. Більш детальну інформацію ви можете знайти в [документації] (https://github.com/cubiq/iscroll).

- `sectionSelector`: (за замовчуванням` .section`) Визначає селектор Javascript, який використовується для розділів з плагінами. Іноді потрібно змінити його, щоб уникнути проблем з іншими плагінами, що використовують ті ж селектори, що і fullpage.js.

- `slideSelector`: (за замовчуванням` .slide`) Визначає селектор Javascript, який використовується для слайдів з плагінами. Іноді потрібно змінити його, щоб уникнути проблем з іншими плагінами, що використовують ті ж селектори, що і fullpage.js.

- `responsiveWidth`: (за замовчуванням` 0`) Буде искористуватися стандартна прокрутка ( `autoScrolling: false`), якщо ширина менше, ніж задане значення в пікселях. Клас `fp-responsive` додається до тегу body, якщо користувач бажає використовувати для власного чуйного CSS. Наприклад, при встановленні на 900, то, якщо ширина браузера становить менше 900, плагін буде прокручувати, як звичайний сайт.

- `responsiveHeight`: (за замовчуванням` 0`) Буде використовуватися стандартна прокрутка ( `autoScrolling: false`), якщо висота менше, ніж задане значення в пікселях. Клас `fp-responsive` додається до тегу body, якщо користувач бажає використовувати для власного чуйного CSS. Наприклад, при встановленні на 900, то, якщо висота браузера становить менше 900, плагін буде прокручувати, як звичайний сайт.


- `responsiveSlides`: (за замовчуванням` false`) [Розширення fullpage.js] (http://alvarotrigo.com/fullPage/extensions/). При встановленні значення `true` слайди будуть трансформуватися в вертикальні розділи при активації чуйного режиму. (За допомогою опцій `responsiveWidth` або` responsiveHeight`, детально описаних вище). Необхідна версія fullpage.js> = 3.0.1.

- `parallax`: (за замовчуванням` false`) [Розширення fullpage.js] (http://alvarotrigo.com/fullPage/extensions/). Визначає, чи будуть використовуватися ефекти паралакс для фону розділів / слайдів. [Дізнайтеся більше про використання опції паралакс тут] (https://github.com/alvarotrigo/fullPage.js/blob/master/lang/russian/parallax-extension.md).

- `parallaxOptions`: (за замовчуванням:` {type: 'reveal', percentage: 62, property: 'translate'} `). Дозволяє налаштовувати параметри ефекту паралакс для фону при використанні опції parallax: true. [Дізнайтеся більше про використання опції паралакс тут] (https://github.com/alvarotrigo/fullPage.js/blob/master/lang/russian/parallax-extension.md).

- `cards`: (default` false`) [Extension of fullpage.js] (http://alvarotrigo.com/fullPage/extensions/). Defines whether or not to use the cards effect on sections / slides. [Read more about how to apply the cards option] (https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards).

- `cardsOptions`: (default:` {perspective: 100, fadeContent: true, fadeBackground: true} `). Allows you to configure the parameters for the cards effect when using the option `cards: true`. [Read more about how to apply the cards option] (https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards).

- `lazyLoading`: (за замовчуванням` true`) Відкладене завантаження включена за замовчуванням, що означає, що дана опція буде здійснювати відкладену завантаження будь-якого медіа-елемента, що містить атрибут `data-src`, як описано в [документації відкладеної завантаження] ( https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Отложенная-загрузка). Якщо ви бажаєте використовувати будь-яку іншу бібліотеку відкладеної завантаження, ви можете деактивувати цю функцію fullpage.js.

## Функції
Можете побачити їх у дії [тут] (http://alvarotrigo.com/fullPage/examples/methods.html)

### getActiveSection ()
[Демо] (https://codepen.io/alvarotrigo/pen/VdpzRN/) Дає об'єкт (наберіть [Section] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#% D0% 9E% D0% B1% D1% 80% D0% B0% D1% 82% D0% BD% D1% 8B% D0% B5-% D0% B2% D1% 8B% D0% B7% D0% BE% D0 % B2% D1% 8B)), що містить активний слайд і його властивості.

`` `Javascript
fullpage_api.getActiveSection ();
`` `

### getActiveSlide ()
[Демо] (https://codepen.io/alvarotrigo/pen/VdpzRN/) Дає об'єкт (наберіть [Slide] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#% D0% 9E% D0% B1% D1% 80% D0% B0% D1% 82% D0% BD% D1% 8B% D0% B5-% D0% B2% D1% 8B% D0% B7% D0% BE% D0 % B2% D1% 8B)), що містить активний розділ і його властивості.

`` `Javascript
fullpage_api.getActiveSlide ();
`` `

### moveSectionUp ()
[Демо] (http://codepen.io/alvarotrigo/pen/GJXNMN) Прокручує на один розділ вгору:
`` `Javascript
fullpage_api.moveSectionUp ();
`` `
---
### moveSectionDown ()
[Демо] (http://codepen.io/alvarotrigo/pen/jPvVZx) Прокручує на один розділ вниз:
`` `Javascript
fullpage_api.moveSectionDown ();
`` `
---
### moveTo (розділ, слайд)
[Демо] (http://codepen.io/alvarotrigo/pen/doqOmY) Прокручує сторінку до заданого розділу і слайду. Перший слайд, який відображається за замовчуванням, буде мати індекс 0.
`` `Javascript
/ * Прокручування до розділу з посиланням з прив'язкою `firstSlide` і до 2-го слайду * /
fullpage_api.moveTo ( 'firstSlide', 2);

`` `

`` `Javascript
// Прокручування до 3-го розділу на сайті
fullpage_api.moveTo (3, 0);

// Те ж саме, що і
fullpage_api.moveTo (3);
`` `
---
### silentMoveTo (розділ, слайд)
[Демо] (http://codepen.io/alvarotrigo/pen/doqOeY)
Абсолютно те ж саме, що і [ `moveTo`] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#movetoраздел-слайд), але в цьому випадку функція виконує прокрутку без анімації . Прямий перехід до заданої точки.
`` `Javascript
/ * Прокручування до розділу з посиланням з прив'язкою `firstSlide` і до 2-го слайду * /
fullpage_api.silentMoveTo ( 'firstSlide', 2);
`` `
---
### moveSlideRight ()
[Демо] (http://codepen.io/alvarotrigo/pen/Wvgoyz)
Прокручує горизонтальний повзунок поточної секції до наступного слайду:
`` `Javascript
fullpage_api.moveSlideRight ();
`` `
---
### moveSlideLeft ()
[Демо] (http://codepen.io/alvarotrigo/pen/gpdLjW)
Прокручує горизонтальний повзунок поточної секції до попереднього слайду:
`` `Javascript
fullpage_api.moveSlideLeft ();
`` `
---
### setAutoScrolling (логічна операція)
[Демо] (http://codepen.io/alvarotrigo/pen/rVZWrR) Встановлює конфігурацію скролінгу в режимі реального часу.
Визначає поведінку прокрутки сторінки. При встановленні значення `true` буде використовуватися" автоматичний "скролінг, в іншому випадку буде застосовуватися" стандартна "прокрутка сайту або прокрутка" вручну ".

`` `Javascript
fullpage_api.setAutoScrolling (false);
`` `
---
### setFitToSection (логічна операція)
[Демо] (http://codepen.io/alvarotrigo/pen/GJXNYm)
Встановлює значення для опції `fitToSection`, що визначає, підлаштовувати чи розділ під екран.

`` `Javascript
fullpage_api.setFitToSection (false);
`` `
---
### fitToSection ()
[Демо] (http://codepen.io/alvarotrigo/pen/JWWagj)
Прокручує до найближчого активного розділу, підлаштовуючи його під вікно перегляду.

`` `Javascript
fullpage_api.fitToSection ();
`` `
---
### setLockAnchors (логічна операція)
[Демо] (http://codepen.io/alvarotrigo/pen/yNxVRQ)
Встановлює значення для опції `lockAnchors`, що визначає, чи будуть прив'язки відображатися в URL.

`` `Javascript
fullpage_api.setLockAnchors (false);
`` `
---
### setAllowScrolling (логічна операція, [напрямки])
[Демо] (http://codepen.io/alvarotrigo/pen/EjeNdq) Дає або прибирає можливість скролінгу розділів / слайдів за допомогою колеса миші / трекпада або сенсорних жестів (включено за замовчуванням). Зверніть увагу, що функції не деактивує скролінг за допомогою клавіатури. Для цього вам буде потрібно використовувати `setKeyboardScrolling`.

- `directions`: (опціональний параметр) Значення:` all`, `up`,` down`, `left`,` right` або їх комбінація, розділена комами, наприклад: `down, right`. Функція визначає напрямок, в якому буде активований або деактивовано скролінг.

`` `Javascript

// деактивация прокрутки
fullpage_api.setAllowScrolling (false);

// деактивация прокрутки вниз
fullpage_api.setAllowScrolling (false, 'down');

// деактивация прокрутки вниз і вправо
fullpage_api.setAllowScrolling (false, 'down, right');
`` `
---
### setKeyboardScrolling (логічна операція, [напрямки])
[Демо] (http://codepen.io/alvarotrigo/pen/GJXNwm) Дає або прибирає можливість скролінгу розділів за допомогою клавіатури (включено за замовчуванням).

- `directions`: (опціональний параметр) Значення:` all`, `up`,` down`, `left`,` right` або їх комбінація, розділена комами, наприклад: `down, right`. Функція визначає напрямок, в якому буде активований або деактивовано скролінг.

`` `Javascript
// деактивация всій прокрутки за допомогою клавіатури fullpage_api.setKeyboardScrolling (false);

// деактивация прокрутки вниз за допомогою клавіатури
fullpage_api.setKeyboardScrolling (false, 'down');

// деактивация прокрутки вниз і вправо за допомогою клавіатури fullpage_api.setKeyboardScrolling (false, 'down, right');
`` `
---
### setRecordHistory (логічна операція)
[Демо] (http://codepen.io/alvarotrigo/pen/rVZWQb) Визначає, записувати чи історію для кожної зміни hash в URL.

`` `Javascript
fullpage_api.setRecordHistory (false);
`` `
---
### setScrollingSpeed ​​(мілісекунди)
[Демо] (http://codepen.io/alvarotrigo/pen/NqLbeY) Визначає швидкість прокрутки в мілісекундах.

`` `Javascript
fullpage_api.setScrollingSpeed ​​(700);
`` `
---
### destroy (тип)
[Демо] (http://codepen.io/alvarotrigo/pen/bdxBzv) Руйнує події плагіна і, опціонально, його HTML-розмітку і стилі.
Ідеальна при використанні AJAX для завантаження контенту.

- `type`: (опціональний параметр) може бути порожнім або мати значення` all`. Якщо встановлено `all`, HTML-розмітка і стилі, які використовуються fullpage.js, будуть видалені. Таким чином, оригінальна HTML-розмітка, яка використовується до твору будь-якої модифікації плагіна, буде збережена.

`` `Javascript
// руйнування всіх подій Javascript, створених fullPage.js (прокручування, зміни hash в URL ...)
fullpage_api.destroy ();

// руйнування всіх подій Javascript і будь-яких модифікацій, вироблених fullPage.js поверх вашої оригінальною HTML-розмітки.
fullpage_api.destroy ( 'all');
`` `
---
### reBuild ()
Оновлює DOM-структуру для підстроювання під новий розмір вікна або його вмісту.
Ідеальна для використання в комбінації з викликами AJAX або зовнішніми змінами в DOM-структурі сайту, особливо при застосуванні `scrollOverflow: true`.

`` `Javascript
fullpage_api.reBuild ();
`` `
---
### setResponsive (логічна операція)
[Демо] (http://codepen.io/alvarotrigo/pen/WxOyLA) Встановлює чуйний режиму на сторінці. При установці хначенія `true` автопрокрутка буде відключена, результат буде тим же самим, як при активації опцій` responsiveWidth` або `responsiveHeight`.
`` `Javascript
fullpage_api.setResponsive (true);
`` `
---
### responsiveSlides.toSections ()
[Розширення fullpage.js] (http://alvarotrigo.com/fullPage/extensions/). Необхідна версія fullpage.js> = 3.0.1.
Трансформує горизонтальні слайди в вертикальні розділи.

`` `Javascript
fullpage_api.responsiveSlides.toSections ();
`` `
---
### responsiveSlides.toSlides ()
[Розширення fullpage.js] (http://alvarotrigo.com/fullPage/extensions/). Необхідна версія fullpage.js> = 3.0.1.
Трансформує оригінальні слайди (тепер трансформовані в вертикальні розділи) назад в горизонтальні слайди.

`` `Javascript
fullpage_api.responsiveSlides.toSlides ();
`` `

## Зворотні виклики
[Демо] (http://codepen.io/alvarotrigo/pen/XbPNQv) Можете побачити їх у дії [тут] (http://alvarotrigo.com/fullPage/examples/callbacks.html).

Деякі зворотні виклики, такі як `onLeave`, будуть містити тип параметрів` Section` або `Slide`. Ці об'єкти будуть містити такі властивості:

- `anchor`: * (String) * посилання з прив'язкою об'єкта.
- `index`: * (Number) * індекс об'єкта.
- `item`: * (DOM element) * елемент об'єкта.
- `isFirst`: * (Boolean) * визначає, чи є об'єкт першим дочірнім елементом.
- `isLast`: * (Boolean) * визначає, чи є об'єкт останнім дочірнім елементом.

### afterLoad ( `origin`,` destination`, `direction`)
Як передзвонити активується після завантаження розділів і завершення прокручування.
параметри:

- `origin`: * (Object) * активний розділ
- `destination`: * (Object) * кінцевий розділ.
- `direction`: * (String) * буде приймати значення` up` або `down` в залежності від напрямку скролінгу.

приклад:

`` `Javascript
new fullpage ( '# fullpage', {
anchors: [ 'firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

afterLoad: function (origin) {
var loadedSection = this;

// використання індексу
if (origin.index == 2) {
alert ( "Section 3 ended loading");
}

// використання посилання з прив'язкою
if (origin.anchor == 'secondSlide') {
alert ( "Section 2 ended loading");
}
}
});
`` `
---
### onLeave ( `index`,` nextIndex`, `direction`)
Цей зворотний виклик активується, коли користувач залишає розділ, при переході до нового розділу.
Повернення `false` скасує перехід до його здійснення.

параметри:

- `origin`: * (Object) * оригінальний розділ.
- `destination`: * (Object) * кінцевий розділ.
- `direction`: * (String) * буде приймати значення` up` або `down` в залежності від напрямку скролінгу.

приклад:

`` `Javascript
new fullpage ( '# fullpage', {
onLeave: function (origin, destination, direction) {
var leavingSection = this;

// після покидання розділу 2
if (origin.index == 1 && direction == 'down') {
alert ( "Going to section 3!");
}

else if (origin.index == 1 && direction == 'up') {
alert ( "Going to section 1!");
}
}
});
`` `

#### Скасування прокрутки до її здійснення
Ви можете скасувати прокрутку, встановивши повернення `false` на зворотному виклику` onLeave`:

`` `Javascript
new fullpage ( '# fullpage', {
onLeave: function (origin, destination, direction) {
// прокрутка не буде здійснена, якщо заданий розділ - розділ 3
if (destination.index == 2) {
return false;
}
}
});
`` `

---
### afterRender ()
Цей зворотний виклик активується відразу після того, як створюється структура сторінки. Даний зворотний виклик ви можете використовувати для ініціалізації інших плагінів або активації будь-якого коду, для чого потрібно готовий документ (так як плагін змінює DOM для створення фінальної структури). Більш детальну інформацію ви знайдете в розділі [Часті питання] (https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions).

приклад:

`` `Javascript
new fullpage ( '# fullpage', {
afterRender: function () {
var pluginContainer = this;
alert ( "Фінальна DOM-структура готова");
}
});
`` `
---
### afterResize ()
Цей зворотний виклик активується після зміни розміру вікна браузера. Відразу після зміни розміру розділів.

параметри:

- `width`: * (Number) * ширина вікна.
- `height`: * (Number) * висота вікна.

приклад:

`` `Javascript
new fullpage ( '# fullpage', {
afterResize: function (width, height) {
var pluginContainer = this;
alert ( "Завершено зміна розміру розділів");
}
});
`` `
---
### afterReBuild ()
This callback is fired after manually re-building fullpage.js by calling `fullpage_api.reBuild ()`.

Example:

`` `Javascript
new fullpage ( '# fullpage', {
afterReBuild: function () {
console.log ( "fullPage.js has manually being re-builded");
}
});
`` `
---
### afterResponsive ( `isResponsive`)
Цей зворотний виклик активується після того, як fullpage.js переходить зі стандартного режиму в чуйний режим або з чуйного в стандартний.

параметри:

- `isResponsive`: * (Boolean) * логічна операція, яка визначає перехід в режим чуйності (` true`) або перехід назад до стандартного режиму ( `false`).

приклад:

`` `Javascript
new fullpage ( '# fullpage', {
afterResponsive: function (isResponsive) {
alert ( "Is responsive:" + isResponsive);
}
});
`` `
---
### afterSlideLoad ( `section`,` origin`, `destination`,` direction`)
Як передзвонити активується після завантаження слайда розділу і закінчення прокрутки.

Параметри:

- `section`: * (Object) * активний вертикальний розділ.
- `origin`: * (Object) * вихідний горизонтальний слайд.
- `destination`: * (Object) * кінцевий горизонтальний слайд.
- `direction`: * (String) *` right` або `left` в залежності від напрямку скролінгу.

приклад:

`` `Javascript
new fullpage ( '# fullpage', {
anchors: [ 'firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

afterSlideLoad: function (section, origin, destination, direction) {
var loadedSlide = this;

// перший слайд другого розділу
if (section.anchor == 'secondPage' && destination.index == 1) {
alert ( "Перший слайд завантажений");
}

// другий слайд другого розділу (supposing #secondSlide is the
// прив'язка для другого розділу
if (section.index == 1 && destination.anchor == 'secondSlide') {
alert ( "Другий слайд завантажений");
}
}
});
`` `


---
### onSlideLeave ( `section`,` origin`, `destination`,` direction`)
Цей зворотний виклик активується після того, як користувач залишає слайд для переходу до іншого, при переході до нового слайду.
Повернення `false` скасує перехід до його здійснення.

параметр:

- `section`: * (Object) * активний вертикальний розділ.
- `origin`: * (Object) * вихідний горизонтальний слайд.
- `destination`: * (Object) * кінцевий горизонтальний слайд.
- `direction`: * (String) *` right` або `left` в залежності від напрямку скролінгу.


приклад:

`` `Javascript
new fullpage ( '# fullpage', {
onSlideLeave: function (section, origin, destination, direction) {
var leavingSlide = this;

// перехід від першого слайда 2го розділу вправо
if (section.index == 1 && origin.index == 0 && direction == 'right') {
alert ( "Покидання першого слайда !!");
}

// перехід від 3го слайда 2го розділу вліво
               if (section.index == 1 && origin.index == 2 && direction == 'left') {
alert ( "Перехід до слайду 2!");
}
}
});
`` `

#### Скасування переходу до його здійснення
Ви можете скасувати перехід за допомогою повернення `false` на зворотному виклику` onSlideLeave`. [Те ж саме, що і при скасуванні переходу за допомогою `onLeave`] (https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian/#Отмена-перехода-до-его-осуществления) .

# Повідомлення про проблеми
1. Будь ласка, перед питанням пошукайте свою проблему за допомогою пошуку github issues.
2. Переконайтеся, що використовуєте останню версію fullpage.js. Техпідтримка не працює зі старими версіями.
3. Скористайтеся [форумом Github Issues] (https://github.com/alvarotrigo/fullPage.js/issues), щоб задати питання.
4. ** Буде потрібно окреме відтворення проблеми. ** За можливості використовуйте для цього [jsfiddle] (https://jsfiddle.net/alvarotrigo/ea17skjr/) або [codepen] (http://codepen.io/alvarotrigo/pen/ NxyPPp).

# Внесення пропозицій для fullpage.js
Будь ласка, прочитайте [Contributing to fullpage.js] (https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)

# Changelog
Щоб подивитися список останніх змін, будь ласка, зверніться до [розділу Релізи] (https://github.com/alvarotrigo/fullPage.js/releases).

# Завдання з побудови
Бажаєте побудувати дистрибутивні файли fullpage.js? Будь ласка, зайдіть в розділ [Завдання щодо побудови] (https://github.com/alvarotrigo/fullPage.js/wiki/Build-tasks)

# Ресурси
- [Wordpress Plugin for Gutenberg] (https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/)
- [Тема Wordpress] (https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [Official Vue.js wrapper component] (https://github.com/alvarotrigo/vue-fullpage.js)
- [Official React.js wrapper component] (https://github.com/alvarotrigo/react-fullpage)
- [Official Angular wrapper component] (https://github.com/alvarotrigo/angular-fullpage)
- [CSS Easing Animation Tool - Matthew Lein] (http://matthewlein.com/ceaser/) (допоможе у визначенні значення `easingcss3`)
- [fullPage.js jsDelivr CDN] (https://www.jsdelivr.com/package/npm/fullpage.js)
- [плагін fullPage.js для October CMS] (http://octobercms.com/plugin/freestream-parallax)
- [плагін wordpress fullPage.js] (https://wordpress.org/plugins/wp-fullpage/)
- [директива fullPage.js Angular2] (https://github.com/meiblorn/ng2-fullpage)
- [директива fullPage.js angular] (https://github.com/hellsan631/angular-fullpage.js)
- [додаток ember-cli fullPage.js] (https://www.npmjs.com/package/ember-cli-fullpagejs)
- [fullPage.js Rails Ruby Gem] (https://rubygems.org/gems/fullpagejs-rails)
- [Angular fullPage.js - адаптація для Angular.js v1.x] (https://github.com/mmautomatizacion/angular-fullpage.js)
- [Інтеграція fullPage.js з Wordpress (Навчання)] (http://premium.wpmudev.org/blog/build-apple-inspired-full-page-scrolling-pages-for-your-wordpress-site/)

## Хто користується fullPage.js
Якщо ви хочете, щоб ваша сторінка була вказана в цьому списку, будь ласка, <a href="mailto:alvaro@alvarotrigo.com"> зв'яжіться зі мною </a> і надішліть URL.

[! [Google] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/google-4.png)] (http://www.yourprimer.com/)
[! [Coca-cola] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/cocacola-4.png)] (https: //www.coca-colacompany.com/annual-review/2017/index.html)
! [EBay] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ebay-4.png)
[! [BBC] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/bbc-4.png)] (http://www.bbc.co.uk/news/resources/idt- d88680d1-26f2-4863-be95-83298fd01e02)
! [Sony] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sony-4.png)

! [Vodafone] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/vodafone-5.png)
! [British Airways] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/british-airways-5.png)
! [McDonalds] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mcdonalds-6.png)
! [EA] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ea-6.png)
[! [Vogue] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/vogue-6.png)] (http://www.vogue.fr/chaumet-histoires-de-liens)
! [Mi] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mi-6.png)

[! [Mercedes] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mercedes-5.png)] (https://www.x-class.com.au/)
[! [Sym] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sym-5.png)] (http://www.sanyang.com.tw/service/Conception/)
! [Bugatti] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/bugatti-5.png)
[! [EDarling] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/edarling-5.png)] (https://www.edarling.de/)
! [Ubisoft] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ubisoft-5.png)


- https://www.coca-colacompany.com/annual-review/2017/index.html
- http://www.bbc.co.uk/news/resources/idt-d88680d1-26f2-4863-be95-83298fd01e02
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
- http://www.boxreload.com/
- http://educationaboveall.org/
- http://usescribe.com/
- http://boxx.hk/
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
- http://themify.me/demo/#theme=fullpane
- http://dancingroad.com
- http://www.camanihome.com/
- https://life2film.com/en/

Ви можете знайти ще один список [тут] (http://libscore.com/#$.fn.fullpage).

## Грошові перекази
Грошові перекази більш ніж вітаються :)

[Patreon page] (https://www.patreon.com/fullpagejs)

[! [Перевести гроші] (https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)] (https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business = BEK5JQCQMED4J & lc = GB & item_name = fullPage% 2ejs & currency_code = USD & bn = PP% 2dDonationsBF% 3abtn_donateCC_LG% 2egif% 3aNonHosted)

## Sponsors
Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor] (https://alvarotrigo.com/#contact)] | [[Become a patreon] (https://www.patreon.com/fullpagejs)]

[! [Stackpath] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/stackpath3.png)] (https://www.stackpath.com/)
[! [Browserstack] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/browserstack3.png)] (http://www.browserstack.com/)
[! [CodePen] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codepen3.png)] (https://codepen.com)
[! [CodeFirst] (http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codefirst2.png)] (https://www.codefirst.co.uk)

### People
<a href="https://github.com/donsalvadori" target="_blank" rel="nofollow">
<Img src = "http://wallpapers-for-ipad.com/fullpage/imgs3/avatars/donsalvadori.jpg">
</a>

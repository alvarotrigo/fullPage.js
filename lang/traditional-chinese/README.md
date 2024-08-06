# fullPage.js
![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.png)

<p align="center">
  <a href="https://github.com/alvarotrigo/fullPage.js">English</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish#fullpagejs">Español</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#fullpagejs">Français</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#fullpagejs">Pусский</a> |
  <span>繁體中文</span> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/simplified-chinese#fullpagejs">简体中文</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs">한국어</a> | 
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese#fullpagejs"> 日本語</a> | 
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese#fullpagejs">Português Brasileiro</a>
</p>
<p align="center">
	適用於&nbsp;<a href="https://github.com/alvarotrigo/vue-fullpage.js">Vue</a>&nbsp;,&nbsp;<a href="https://github.com/alvarotrigo/react-fullpage">React</a>&nbsp;和&nbsp;<a href="https://github.com/alvarotrigo/angular-fullpage">Angular</a>
</p>

---

![fullPage.js version](https://img.shields.io/badge/fullPage.js-v4.0.26,2-brightgreen.svg)
[![License](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/fullpage.js/badge?style=rounded)](https://www.jsdelivr.com/package/npm/fullpage.js)
[![Minzipped Size](https://img.shields.io/bundlephobia/minzip/fullpage.js)](https://bundlephobia.com/package/fullpage.js)
&nbsp;&nbsp;**|**&nbsp;&nbsp; *Created by [@imac2](https://twitter.com/imac2)*

- [範例](https://alvarotrigo.com/fullPage/) | [Codepen](https://codepen.io/alvarotrigo/pen/qqabrp)
- [Wordpress plugin for Gutenberg](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/) and [WordPress pluging fo Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)
- [Wordpress 的主題](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)
- [常見問題](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)
- [從 fullPage v3 更新至 fullpage v4](https://alvarotrigo.com/fullPage/help/migration-from-fullpage-3/)
---

通過此函式庫可讓你輕鬆建立全屏滾動網站 (也稱為一頁式網站)。
本庫可建立全屏滾動網站，同時也可在網站中新增橫向滾動條。

- [介紹](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#介紹)
- [相容性](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#相容性)
- [許可證](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#許可證)
- [用法](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#用法)
  - [建立鏈接到 section 或 slide](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#%E5%BB%BA%E7%AB%8B%E9%8F%88%E6%8E%A5%E5%88%B0%20section%20%E6%88%96%20slide)
  - [建立更小或更大的 section](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#%E5%BB%BA%E7%AB%8B%E6%9B%B4%E5%B0%8F%E6%88%96%E6%9B%B4%E5%A4%A7%E7%9A%84%20section)
  - [fullpage.js 新增的狀態類](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#fullpage.js%20%E6%96%B0%E5%A2%9E%E7%9A%84%E7%8B%80%E6%85%8B%E9%A1%9E)
  - [懶加載](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#懶加載)
  - [自動播放內嵌媒體](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#自動播放內嵌媒體)
  - [使用擴充功能](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#使用擴充功能)
- [參數](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#參數)
- [全域函式](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#全域函式)
- [回調函式](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#回調函式)
- [問題反饋](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#問題反饋)
- [貢獻](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#貢獻)
- [更新日誌](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#更新日誌)
- [編譯構建](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#編譯構建)
- [參考資源](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#%E8%AA%B0%E5%9C%A8%E4%BD%BF%E7%94%A8%20fullpage.js)
- [誰在使用 fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#%E8%AA%B0%E5%9C%A8%E4%BD%BF%E7%94%A8%20fullpage.js)
- [贊助](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#贊助)

## 介紹

不僅限於提需求，也歡迎提出編碼風格改進的建議。
集思廣益，讓這個庫更加強大，讓寫程式更輕鬆！

## 相容性

fillPage.js 完全支持所有現代瀏覽器和 IE 11。 如果您需要支持 IE < 11，請考慮使用 [fullPage.js v3](https://github.com/alvarotrigo/fullPage.js/tree/3.1.2)。
它同時支援手機、平板電腦和觸摸屏電腦等行動裝置的觸摸功能。

特別感謝 [Browserstack](https://www.browserstack.com/) 贊助 fullpage.js 。

## 許可證

### 商業許可證

如果您想使用 fullPage 開發商業網站、主題、專案和應用程式，商業許可證是您應使用的許可證。使用這個許可證，您的原始碼將保持私有，並且您將不必將其開源。[點選此處購買fullpage 商業許可證](https://alvarotrigo.com/fullPage/pricing/)。

### 開源許可證

如果您使用與 [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html) 相容的許可證建立開源應用程式，則可以在 GPLv3 條款下使用 fullPage。

**你必須提供一個顯著的標示你有使用 fullPage.js。 JavaScript 和 CSS 檔案中的許可證應保持完整 (即使在合併或壓縮后）**

[閱讀更多關於 fullPage 的許可證](https://alvarotrigo.com/fullPage/pricing/)。

## 用法
正如範例檔案所示，需要引用：
 - JavaScript 檔案 `fullpage.js` (或其壓縮版本 `fullpage.min.js`)
 - CSS 檔案 `fullpage.css`

**可選**，使用 `css3:false` 時，如果您想要使用函式庫的中的動畫曲線功能（ `easeInOutCubic` ），您可以新增 [easings file](https://github.com/alvarotrigo/fullPage.js/tree/master/vendors/easings.min.js)。

### 使用 bower 或 npm 進行安裝
**或者**，如果你想要的話可以使用 bower 或 npm 安裝 fullPage.js：

```shell
// 使用 bower
bower install fullpage.js

// 使用 npm
npm install fullpage.js
```

### 引用函式庫
```html
<link rel="stylesheet" type="text/css" href="fullpage.css" />

<!-- 以下這行是可選的。只有在使用選項 css3:false ，並且您希望使用其他動畫曲獻，而非 linear 、 swing 或 easeInOutCubic 時才有必要。 -->
<script src="vendors/easings.min.js"></script>

<script type="text/javascript" src="fullpage.js"></script>
```

使用 Webpack、Browserify 或 Require.js 嗎？請查看 [如何使用模組加載器](https://github.com/alvarotrigo/fullPage.js/wiki/Use-module-loaders-for-fullPage.js)。

### 使用 CDN 引用
如果您傾向使用 CDN 載入所需檔案，fullPage.js 在以下連結：
https://cdnjs.com/libraries/fullPage.js

### HTML 結構規範

HTML 檔案中的首行 HTML 程式碼必須使用 [HTML DOCTYPE 聲明](https://www.corelangs.com/html/introduction/doctype.html)，否則可能會遇到程式碼段高度問題。HTML 5 doctype 中的範例： `<!DOCTYPE html>`.

每個程式碼段定義為包含 `section` 類的元素。
預設情況下，第一個 section 程式碼段，將被視為主頁。
程式碼段應進行封裝（即 `<div id="fullpage">` ）。 封裝不能是 `body` 元素。

```html
<div id="fullpage">
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
</div>
```
如果你想定義一個與衆不同的起始頁面，而不是原始第一段或第一個滑動頁，只需將 `active` 類新增到你想首先載入的段或滑動頁。
```html
<div class="section active">Some section</div>
```
為在程式碼段中建立橫向滑塊，每個滑動頁將預設定義為包含 `slide` 類的元素：

```html
<div class="section">
	<div class="slide"> slide 1 </div>
	<div class="slide"> slide 2 </div>
	<div class="slide"> slide 3 </div>
	<div class="slide"> slide 4 </div>
</div>
````
可以在 [simple.html 檔案](https://github.com/alvarotrigo/fullPage.js/tree/master/examples/simple.html) 看到完整的 HTML 結構的例子

### 初始化

#### 使用 Javascript 進行初始化
您只需要在關閉 `</body>` 標籤之前呼叫 fullPage.js 即可。

```javascript
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});
```

#### 使用 jQuery 進行初始化

您也可以將 fullpage.js 作為 jQuery 外掛使用！

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	// Example of how to use fullpage.js methods
	$.fn.fullpage.setAllowScrolling(false);
});
```

#### 帶有所有功能選項的 JavaScript 演示

所有選項的更復雜的初始化如下所示：

```javascript
var myFullpage = new fullpage('#fullpage', {
	// 導航
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	// 滾動
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

	// 可訪問
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	// 佈局
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


	// 自定義選擇器
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,
	observer: true,
	credits: { enabled: true, label: 'Made with fullPage.js', position: 'right'},

	// 事件
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

### 建立鏈接到 section 或 slide

如果你在 section 中使用 fullPage.js 和錨鏈接（在每個 section 使用 `anchors` 選項或屬性 `data-anchor` ），那麼你將能夠在一個 section 里使用錨鏈接直接導航到某個 slide。

這是一個錨鏈接的例子：
https://alvarotrigo.com/fullPage/#secondPage/2 （在你手動訪問該 section/slide 就會看到的 URL ）
請注意，URL 的最後部分以 `#secondPage/2` 結尾。

```javascript
new fullpage('#fullpage', {
	anchors:['firstPage', 'secondPage', 'thirdPage']
});
```

URL `#secondPage/2` 結尾處的錨分別定義了目標 section 和 slide 。 在前面的 URL 中，目標 section 是使用錨點  `secondPage`，slide 將會是第 2 張，因為我們使用索引 `2`  。 （一個 section 的第一個 slide 為索引 0 ，在技術上這是一個 section ）。

如果我們在HTML標記中使用屬性 `data-anchor` ，就可以使用自定義錨點來代替它的索引：

```html
<div class="section">
	<div class="slide" data-anchor="slide1"> slide 1 </div>
	<div class="slide" data-anchor="slide2"> slide 2 </div>
	<div class="slide" data-anchor="slide3"> slide 3 </div>
	<div class="slide" data-anchor="slide4"> slide 4 </div>
</div>
```
在最後一種情況中，我們使用的URL將是 `#secondPage/slide3` ，這相當於之前的 `#secondPage/2` 。

請注意，如果沒有提供 `anchors` 陣列，則也可以使用 `data-anchor` 屬性以同樣的方式定義節錨點。

**注意！**`data-anchor` 的 ID 元素（或 IE 的 NAME 元素）不能重複。

### 建立更小或更大的 section

[演示](https://codepen.io/alvarotrigo/pen/BKjRYm)

fullPage.js 可以移除 section 和 slide 的全屏高度限制來建立高度小於或大於檢視的 section，常用於頁尾。

記得在所有 section 使用此功能並沒有意義，這一點很重要。如果網站的初始載入中有多個 section，則 fullPage.js 將不會滾動以檢視下一個 section，因為它已經在畫面中。

如果你想要建立更小的 section，只需添加 `fp-auto-height`  即可自動適應高度。

```html
<div class="section">整個檢視</div>
<div class="section fp-auto-height">自動高度</div>
```

#### section 響應自動高度

[演示](https://codepen.io/alvarotrigo/pen/MzByMa)

響應自動高度可以通過使用 `fp-auto-height-responsive` 類來呼叫。 這種方式 section 將全屏，直到響應模式終止。 根據定義調整大小，可能是大於或小於視口。

### 由 fullpage.js 新增的狀態類

Fullpage.js 在不同的元素中新增多個型別來儲存網站狀態的記錄：

- `active` 被新增到目前可見 section 和 slide 。
- `active` 被新增到目前菜單元素（如果使用 `menu` 選項）。
- `fp-viewing-SECTION-SLIDE` 形式的型別被新增到網站的 `body` 元素中。(例如： [`fp-viewing-secondPage-0`](https://alvarotrigo.com/fullPage/#secondPage)) `SECTION` 和 `SLIDE` 部分將成為目前 section 和 slide 的錨（或索引，如果沒有提供錨）。
- 當進入響應模式時，`fp-responsive` 新增到 `body` 元素
- 當啟用 fullpage.js 時，`fp-enabled` 新增到 `html` 元素。 （並在銷燬時被移除）。
- 當 fullPage.js 被銷燬時，`fp-destroyed` 被新增到 fullpage.js 容器中。

### 懶加載

[演示](https://codepen.io/alvarotrigo/pen/eNLBXo) 

fullPage.js 提供了一種懶加載圖片，影片和音訊的方式，這樣它們不會減緩網站的載入速度，也不會浪費數據傳輸。
當使用懶載入時，所有這些元素只有在進入畫面時才會載入。
要啟用懶加載，您只需將 `src` 屬性更改為 `data-src` ，如下所示：

```html
<img data-src="image.png">
<video>
	<source data-src="video.webm" type="video/webm" />
	<source data-src="video.mp4" type="video/mp4" />
</video>
```

如果您已經使用另一個使用 `data-src` 的延懶載解決方案，則可以通過設定 `lazyLoading: false` 選項來禁用fullPage.js 懶載入。

### 自動播放 / 暫停嵌入式媒體

[演示](https://codepen.io/alvarotrigo/pen/pXEaaK)

**注意**：根據操作系統和瀏覽器的不同，自動播放功能可能無法在某些移動裝置上使用（即 [IOS 的 Safari](https://webkit.org/blog/6784/new-video-policies-for-ios/) 版本 < 10.0）。

### 當頁面/幻燈片加載時播放：

使用 `autoplay` 屬性來播放影片或音頻，或在 YouTube iframes 使用 `autoplay=1` 參數，將會在頁面加載時自動播放媒體元素。

為了在頁面區塊或幻燈片加載時播放，請使用 `data-autoplay` 屬性。例子如下：

```html
<audio data-autoplay>
    <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
</audio>
```

### 離開時暫停

嵌入的 HTML5 `<video>` / `<audio>` 和 YouTube iframes 會在你離開區塊或幻燈片時自動暫停。這可以通過使用 `data-keepplaying` 屬性來禁用。例子如下：

```html
<audio data-keepplaying>
    <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
</audio>
```

### 使用擴展

fullpage.js 提供了一組擴展，你可以用來增強其默認功能。所有這些擴展都列為 fullpage.js 選項。

使用擴展需要你使用縮小版的文件 `fullpage.extensions.min.js`，這個文件在 `dist` 文件夾中，而不是通常的 fullPage.js 文件 (`fullpage.js` 或 `fullpage.min.js`)。

一旦你獲得擴展文件，你需要在 fullPage 之前添加它。例如，如果我想使用連續水平擴展，我會包括擴展文件，然後是擴展版本的 fullPage 文件。

```html
<script type="text/javascript" src="fullpage.continuousHorizontal.min.js"></script>
<script type="text/javascript" src="fullpage/fullpage.extensions.min.js"></script>
```

每個擴展需要激活密鑰和許可密鑰。請參閱更多詳細信息。

然後你可以按照選項中解釋的那樣使用和配置它們。

## 選項

### licenseKey

（默認為 `null`）。**此選項是必須的。** 如果你在非開源項目中使用 fullPage，那麼你應該使用購買 fullPage 商業許可證時提供的許可密鑰。如果你的項目是開源的，並且與 GPLv3 許可證兼容，你可以請求許可密鑰。請閱讀更多關於許可證的信息。用法示例如下：

```javascript
new fullpage('#fullpage', {
    licenseKey: 'YOUR_KEY_HERE'
});
```

### controlArrows

（默認為 `true`） 確定是否使用控制箭頭來左右移動幻燈片。

### controlArrowsHTML

（默認為 `['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'],`）。提供了一種方法來定義控制箭頭的 HTML 結構和你想要應用的類。數組包含兩個箭頭的結構。第一個項是左箭頭，第二個是右箭頭。

### verticalCentered

（默認為 `true`） 使用 flexbox 垂直居中內容。你可能需要將內容包裹在 `div` 中以避免潛在問題。（使用 `flex-direction: column; display: flex; justify-content: center;`）

### scrollingSpeed

（默認為 `700`） 滾動過渡的速度，以毫秒為單位。
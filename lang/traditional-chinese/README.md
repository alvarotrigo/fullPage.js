<!-- @format -->

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
&nbsp;&nbsp;**|**&nbsp;&nbsp; _Created by [@imac2](https://twitter.com/imac2)_

-   [範例](https://alvarotrigo.com/fullPage/) | [Codepen](https://codepen.io/alvarotrigo/pen/qqabrp)
-   [Wordpress plugin for Gutenberg](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/) and [WordPress pluging fo Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)
-   [Wordpress 的主題](https://alvarotrigo.com/fullPage/utils/wordpress.html)
-   [fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)
-   [常見問題](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)
-   [從 fullPage v3 更新至 fullpage v4](https://alvarotrigo.com/fullPage/help/migration-from-fullpage-3/)

---

通過此函式庫可讓你輕鬆建立全屏滾動網站 (也稱為一頁式網站)。
本庫可建立全屏滾動網站，同時也可在網站中新增橫向滾動條。

-   [介紹](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#介紹)
-   [相容性](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#相容性)
-   [許可證](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#許可證)
-   [用法](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#用法)
    -   [建立鏈接到 section 或 slide](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#%E5%BB%BA%E7%AB%8B%E9%8F%88%E6%8E%A5%E5%88%B0%20section%20%E6%88%96%20slide)
    -   [建立更小或更大的 section](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#%E5%BB%BA%E7%AB%8B%E6%9B%B4%E5%B0%8F%E6%88%96%E6%9B%B4%E5%A4%A7%E7%9A%84%20section)
    -   [fullpage.js 新增的狀態類](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#fullpage.js%20%E6%96%B0%E5%A2%9E%E7%9A%84%E7%8B%80%E6%85%8B%E9%A1%9E)
    -   [懶加載](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#懶加載)
    -   [自動播放內嵌媒體](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#自動播放內嵌媒體)
    -   [使用擴充功能](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#使用擴充功能)
-   [參數](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#參數)
-   [全域函式](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#全域函式)
-   [回調函式](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#回調函式)
-   [問題反饋](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#問題反饋)
-   [貢獻](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#貢獻)
-   [更新日誌](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#更新日誌)
-   [編譯構建](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#編譯構建)
-   [參考資源](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#%E8%AA%B0%E5%9C%A8%E4%BD%BF%E7%94%A8%20fullpage.js)
-   [誰在使用 fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#%E8%AA%B0%E5%9C%A8%E4%BD%BF%E7%94%A8%20fullpage.js)
-   [贊助](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/traditional-chinese/#贊助)

## 介紹

不僅限於提需求，也歡迎提出編碼風格改進的建議。
集思廣益，讓這個庫更加強大，讓寫程式更輕鬆！

## 相容性

fillPage.js 完全支持所有現代瀏覽器和 IE 11。 如果您需要支持 IE < 11，請考慮使用 [fullPage.js v3](https://github.com/alvarotrigo/fullPage.js/tree/3.1.2)。
它同時支援手機、平板電腦和觸摸屏電腦等行動裝置的觸摸功能。

特別感謝 [Browserstack](https://www.browserstack.com/) 贊助 fullpage.js 。

## 許可證

### 商業許可證

如果您想使用 fullPage 開發商業網站、主題、專案和應用程式，商業許可證是您應使用的許可證。使用這個許可證，您的原始碼將保持私有，並且您將不必將其開源。[點選此處購買 fullpage 商業許可證](https://alvarotrigo.com/fullPage/pricing/)。

### 開源許可證

如果您使用與 [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html) 相容的許可證建立開源應用程式，則可以在 GPLv3 條款下使用 fullPage。

**你必須提供一個顯著的標示你有使用 fullPage.js。 JavaScript 和 CSS 檔案中的許可證應保持完整 (即使在合併或壓縮后）**

[閱讀更多關於 fullPage 的許可證](https://alvarotrigo.com/fullPage/pricing/)。

## 用法

正如範例檔案所示，需要引用：

-   JavaScript 檔案 `fullpage.js` (或其壓縮版本 `fullpage.min.js`)
-   CSS 檔案 `fullpage.css`

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
    <div class="slide">slide 1</div>
    <div class="slide">slide 2</div>
    <div class="slide">slide 3</div>
    <div class="slide">slide 4</div>
</div>
```

可以在 [simple.html 檔案](https://github.com/alvarotrigo/fullPage.js/tree/master/examples/simple.html) 看到完整的 HTML 結構的範例

### 初始化

#### 使用 Javascript 進行初始化

您只需要在關閉 `</body>` 標籤之前呼叫 fullPage.js 即可。

```javascript
new fullpage("#fullpage", {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
});
```

#### 使用 jQuery 進行初始化

您也可以將 fullpage.js 作為 jQuery 外掛使用！

```javascript
$(document).ready(function () {
    $("#fullpage").fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
    });

    // Example of how to use fullpage.js methods
    $.fn.fullpage.setAllowScrolling(false);
});
```

#### 帶有所有功能選項的 JavaScript 演示

所有選項的更復雜的初始化如下所示：

```javascript
var myFullpage = new fullpage("#fullpage", {
    // 導航
    menu: "#menu",
    lockAnchors: false,
    anchors: ["firstPage", "secondPage"],
    navigation: false,
    navigationPosition: "right",
    navigationTooltips: ["firstSlide", "secondSlide"],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: "bottom",

    // 滾動
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 600,
    scrollBar: false,
    easing: "easeInOutCubic",
    easingcss3: "ease",
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
    normalScrollElements: "#element1, .element2",
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
        '<div class="fp-arrow"></div>',
    ],
    verticalCentered: true,
    sectionsColor: ["#ccc", "#fff"],
    paddingTop: "3em",
    paddingBottom: "10px",
    fixedElements: "#header, .footer",
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
    dropEffect: false,
    dropEffectOptions: { speed: 2300, color: "#F82F4D", zIndex: 9999 },
    waterEffect: false,
    waterEffectOptions: { animateContent: true, animateOnMouseMove: true },
    cards: false,
    cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

    // 自定義選擇器
    sectionSelector: ".section",
    slideSelector: ".slide",

    lazyLoading: true,
    observer: true,
    credits: {
        enabled: true,
        label: "Made with fullPage.js",
        position: "right",
    },

    // 事件
    beforeLeave: function (origin, destination, direction, trigger) {},
    onLeave: function (origin, destination, direction, trigger) {},
    afterLoad: function (origin, destination, direction, trigger) {},
    afterRender: function () {},
    afterResize: function (width, height) {},
    afterReBuild: function () {},
    afterResponsive: function (isResponsive) {},
    afterSlideLoad: function (
        section,
        origin,
        destination,
        direction,
        trigger
    ) {},
    onSlideLeave: function (
        section,
        origin,
        destination,
        direction,
        trigger
    ) {},
    onScrollOverflow: function (section, slide, position, direction) {},
});
```

### 建立鏈接到 section 或 slide

如果你在 section 中使用 fullPage.js 和錨鏈接（在每個 section 使用 `anchors` 選項或屬性 `data-anchor` ），那麼你將能夠在一個 section 里使用錨鏈接直接導航到某個 slide。

這是一個錨鏈接的範例：
https://alvarotrigo.com/fullPage/#secondPage/2 （在你手動訪問該 section/slide 就會看到的 URL ）
請注意，URL 的最後部分以 `#secondPage/2` 結尾。

```javascript
new fullpage("#fullpage", {
    anchors: ["firstPage", "secondPage", "thirdPage"],
});
```

URL `#secondPage/2` 結尾處的錨分別定義了目標 section 和 slide 。 在前面的 URL 中，目標 section 是使用錨點 `secondPage`，slide 將會是第 2 張，因為我們使用索引 `2` 。 （一個 section 的第一個 slide 為索引 0 ，在技術上這是一個 section ）。

如果我們在 HTML 標記中使用屬性 `data-anchor` ，就可以使用自定義錨點來代替它的索引：

```html
<div class="section">
    <div class="slide" data-anchor="slide1">slide 1</div>
    <div class="slide" data-anchor="slide2">slide 2</div>
    <div class="slide" data-anchor="slide3">slide 3</div>
    <div class="slide" data-anchor="slide4">slide 4</div>
</div>
```

在最後一種情況中，我們使用的 URL 將是 `#secondPage/slide3` ，這相當於之前的 `#secondPage/2` 。

請注意，如果沒有提供 `anchors` 陣列，則也可以使用 `data-anchor` 屬性以同樣的方式定義節錨點。

**注意！**`data-anchor` 的 ID 元素（或 IE 的 NAME 元素）不能重複。

### 建立更小或更大的 section

[演示](https://codepen.io/alvarotrigo/pen/BKjRYm)

fullPage.js 可以移除 section 和 slide 的全屏高度限制來建立高度小於或大於檢視的 section，常用於頁尾。

記得在所有 section 使用此功能並沒有意義，這一點很重要。如果網站的初始載入中有多個 section，則 fullPage.js 將不會滾動以檢視下一個 section，因為它已經在畫面中。

如果你想要建立更小的 section，只需添加 `fp-auto-height` 即可自動適應高度。

```html
<div class="section">整個檢視</div>
<div class="section fp-auto-height">自動高度</div>
```

#### section 響應自動高度

[演示](https://codepen.io/alvarotrigo/pen/MzByMa)

響應自動高度可以通過使用 `fp-auto-height-responsive` 類來呼叫。 這種方式 section 將全屏，直到響應模式終止。 根據定義調整大小，可能是大於或小於視口。

### 由 fullpage.js 新增的狀態類

Fullpage.js 在不同的元素中新增多個型別來儲存網站狀態的記錄：

-   `active` 被新增到目前可見 section 和 slide 。
-   `active` 被新增到目前菜單元素（如果使用 `menu` 選項）。
-   `fp-viewing-SECTION-SLIDE` 形式的型別被新增到網站的 `body` 元素中。(例如： [`fp-viewing-secondPage-0`](https://alvarotrigo.com/fullPage/#secondPage)) `SECTION` 和 `SLIDE` 部分將成為目前 section 和 slide 的錨（或索引，如果沒有提供錨）。
-   當進入響應模式時，`fp-responsive` 新增到 `body` 元素
-   當啟用 fullpage.js 時，`fp-enabled` 新增到 `html` 元素。 （並在銷燬時被移除）。
-   當 fullPage.js 被銷燬時，`fp-destroyed` 被新增到 fullpage.js 容器中。

### 懶加載

[演示](https://codepen.io/alvarotrigo/pen/eNLBXo)

fullPage.js 提供了一種懶加載圖片，影片和音訊的方式，這樣它們不會減緩網站的載入速度，也不會浪費數據傳輸。
當使用懶載入時，所有這些元素只有在進入畫面時才會載入。
要啟用懶加載，您只需將 `src` 屬性更改為 `data-src` ，如下所示：

```html
<img data-src="image.png" />
<video>
    <source data-src="video.webm" type="video/webm" />
    <source data-src="video.mp4" type="video/mp4" />
</video>
```

如果您已經使用另一個使用 `data-src` 的延懶載解決方案，則可以通過設定 `lazyLoading: false` 選項來禁用 fullPage.js 懶載入。

### 自動播放 / 暫停嵌入式媒體

[演示](https://codepen.io/alvarotrigo/pen/pXEaaK)

**注意**：根據操作系統和瀏覽器的不同，自動播放功能可能無法在某些移動裝置上使用（即 [IOS 的 Safari](https://webkit.org/blog/6784/new-video-policies-for-ios/) 版本 < 10.0）。

### 當頁面/幻燈片加載時播放：

使用 `autoplay` 屬性來播放影片或音頻，或在 YouTube iframes 使用 `autoplay=1` 參數，將會在頁面加載時自動播放媒體元素。

為了在頁面區塊或幻燈片加載時播放，請使用 `data-autoplay` 屬性。範例如下：

```html
<audio data-autoplay>
    <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg" />
</audio>
```

### 離開時暫停

嵌入的 HTML5 `<video>` / `<audio>` 和 YouTube iframes 會在你離開區塊或幻燈片時自動暫停。這可以通過使用 `data-keepplaying` 屬性來禁用。範例如下：

```html
<audio data-keepplaying>
    <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg" />
</audio>
```

### 使用擴充功能

fullpage.js 提供了一組擴充功能，你可以用來增強其默認功能。所有這些擴充功能都列為 fullpage.js 選項。

使用擴充功能需要你使用縮小版的文件 `fullpage.extensions.min.js`，這個文件在 `dist` 文件夾中，而不是通常的 fullPage.js 文件 (`fullpage.js` 或 `fullpage.min.js`)。

一旦你獲得擴充功能文件，你需要在 fullPage 之前添加它。例如，如果我想使用連續水平擴充功能，我會包括擴充功能文件，然後是擴充功能版本的 fullPage 文件。

```html
<script
    type="text/javascript"
    src="fullpage.continuousHorizontal.min.js"
></script>
<script
    type="text/javascript"
    src="fullpage/fullpage.extensions.min.js"
></script>
```

每個擴充功能需要激活密鑰和許可密鑰。請參閱更多詳細信息。

然後你可以按照選項中解釋的那樣使用和配置它們。

## 選項

### licenseKey

（默認為 `null`）。**此選項是必須的。** 如果你在非開源項目中使用 fullPage，那麼你應該使用購買 fullPage 商業許可證時提供的許可密鑰。如果你的項目是開源的，並且與 GPLv3 許可證兼容，你可以請求許可密鑰。請閱讀更多關於許可證的信息。用法範例如下：

```javascript
new fullpage("#fullpage", {
    licenseKey: "YOUR_KEY_HERE",
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

### sectionsColor

（默認為 `none`） 定義每個區塊的 CSS `background-color` 屬性。範例如下：

```javascript
new fullpage("#fullpage", {
    sectionsColor: ["#f2f2f2", "#4BBFC3", "#7BAABE", "whitesmoke", "#000"],
});
```

### anchors

（默認為 `[]`） 定義 URL 中每個區塊的錨鏈接（#example）。錨點值不可重複。數組中錨點的位置將定義錨點應用於哪個區塊（第二個位置為第二個區塊，以此類推）。使用錨點，通過瀏覽器進行前進和後退導航也將成為可能。此選項還允許用戶書簽特定的區塊或幻燈片。**注意！** 錨點不能與網站上的任何 ID 元素（或 IE 的 NAME 元素）具有相同的值。現在可以直接在 HTML 結構中使用 `data-anchor` 屬性來定義錨點。

### lockAnchors

（默認為 `false`） 確定 URL 中的錨點是否在庫中有任何效果。你仍然可以在內部為你自己的函數和回調使用錨點，但它們對網站的滾動不會有任何影響。當你想將 fullPage.js 與其他使用 URL 中錨點的插件結合使用時，這很有用。

### easing

（默認為 `easeInOutCubic`） 定義垂直和水平滾動使用的過渡效果。它需要 `vendors/easings.min.js` 文件或 [jQuery UI](https://jqueryui.com/) 來使用其中的一些[過渡效果](https://api.jqueryui.com/easings/)。也可以使用其他庫。

### easingcss3

（默認為 `ease`） 在使用 `css3:true` 時，定義過渡效果。你可以使用[預定義的過渡效果](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp)（例如 `linear`, `ease-out`...）或使用 `cubic-bezier` 函數創建自己的過渡效果。你可能會想使用 [Matthew Lein CSS Easing Animation Tool](https://matthewlein.com/ceaser/) 來幫助設計。

### loopTop

（默認為 `false`） 定義是否在第一個區塊向上滾動時滾動到最後一個區塊。

### loopBottom

（默認為 `false`） 定義是否在最後一個區塊向下滾動時滾動到第一個區塊。

### loopHorizontal

（默認為 `true`） 定義水平滑塊是否在到達最後或上一張幻燈片後循環。

### css3

（默認為 `true`） 定義是否使用 JavaScript 或 CSS3 變換在區塊和幻燈片內滾動。在支持 CSS3 的平板和移動設備上的瀏覽器中使用此選項可以加快移動速度。如果此選項設置為 `true` 而瀏覽器不支持 CSS3，則會使用回退機制。

### autoScrolling

（默認為 `true`） 定義是否使用“自動”滾動或“正常”滾動。它還會影響區塊在平板電腦和手機中的適應方式。

### fitToSection

（默認為 `true`） 確定是否將區塊適應視口。如果設置為 `true`，當前活動區塊將始終填滿整個視口。否則，用戶可以在區塊中間停止。

### fitToSectionDelay

（默認為 1000） 如果 `fitToSection` 設置為 true，則會延遲配置的毫秒數。

### scrollBar

（默認為 `false`） 確定是否為網站的**垂直區塊**使用滾動條。如果使用滾動條，`autoScrolling` 功能將仍然正常工作。用戶還可以自由使用滾動條滾動網站，當滾動結束時 fullPage.js 會將區塊適應到屏幕上。

### paddingTop

（默認為 `0`） 以數值及其單位（例如 `paddingTop: '10px'`, `paddingTop: '10em'`...）定義每個區塊的上填充。在使用固定頭部時很有用。

### paddingBottom

（默認為 `0`） 以數值及其單位（例如 `paddingBottom: '10px'`, `paddingBottom: '10em'`...）定義每個區塊的下填充。在使用固定頁腳時很有用。

### fixedElements

（默認為 `null`） 定義在使用 `css3` 選項時需要從插件的滾動結構中移除的元素。它需要一個包含這些元素的 JavaScript 選擇器字符串。（例如：`fixedElements: '#element1, .element2'`）

### normalScrollElements

（默認為 `null`）[示範](https://codepen.io/alvarotrigo/pen/RmVazM) 如果你想避免在某些元素上滾動時自動滾動，這是你需要使用的選項。（在使用地圖、滾動 div 等情況下很有用）。它需要一個包含這些元素的 JavaScript 選擇器字符串。（例如：`normalScrollElements: '#element1, .element2'`）。此選項不應用於任何區塊/幻燈片元素本身。

### bigSectionsDestination

（默認為 `null`）[示範](https://codepen.io/alvarotrigo/pen/vYLdMrx) 定義在不使用 `scrollOverflow:true` 時如何滾動到比視口更高的區塊。（閱讀[如何創建較小或較大的區塊](https://github.com/alvarotrigo/fullPage.js#creating-smaller-or-bigger-sections)）。默認情況下，如果你來自目標區塊上方的區塊，fullPage.js 會滾動到頂部；如果你來自目標區塊下方的區塊，則會滾動到底部。可能的值是 `top`、`bottom`、`null`。

### keyboardScrolling

（默認為 `true`） 定義是否可以使用鍵盤導航內容。

### touchSensitivity

（默認為 `5`） 定義瀏覽器窗口寬度/高度的百分比，並確定導航到下一個區塊/幻燈片的滑動距離。

### continuousVertical

（默認為 `false`） 定義在最後一個區塊向下滾動時是否應滾動到第一個區塊，以及在第一個區塊向上滾動時是否應滾動到最後一個區塊。不與 `loopTop`、`loopBottom` 或網站中存在的任何滾動條（`scrollBar:true` 或 `autoScrolling:false`）兼容。

### continuousHorizontal

（默認為 `false`）[fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)。 定義在最後一張幻燈片向右滑動時是否應向右滑動到第一張幻燈片，或者在第一張幻燈片向左滑動時是否應向左滑動到最後一張幻燈片。不與 `loopHorizontal` 兼容。需要 fullpage.js >= 3.0.1。

### scrollHorizontally

（默認為 `false`）[fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)。 定義是否通過使用鼠標滾輪或觸控板在滑塊內水平滑動。只能在使用 `autoScrolling:true` 時使用。非常適合故事講述。需要 fullpage.js >= 3.0.1。

### interlockedSlides

（默認為 `false`）[fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)。確定移動一個水平滑塊是否會強制其他區塊中的滑塊沿相同方向滑動。可能的值為 `true`、`false` 或包含互鎖區塊的數組。例如 `[1,3,5]`，從 1 開始。需要 fullpage.js >= 3.0.1。

### dragAndMove

（默認為 `false`）[fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)。啟用或禁用使用鼠標或手指拖動和滑動區塊和幻燈片。需要 fullpage.js >= 3.0.

可使用的值包含：

-   `true`：啟用此功能。
-   `false`：禁用此功能。
-   `vertical`：僅在垂直方向啟用此功能。
-   `horizontal`：僅在水平方向啟用此功能。
-   `fingersonly`：僅為觸摸設備啟用此功能。
-   `mouseonly`：僅為桌面設備（鼠標和觸控板）啟用此功能。

### offsetSections

（默認為 `false`）[fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)。提供一種方法來基於百分比使用非全屏區塊。理想情況下，通過顯示下一個或上一個區塊的一部分來告訴訪問者站點上有更多內容。需要 fullPage.js >= 3.0.1。要定義每個區塊的百分比，必須使用 `data-percentage` 屬性。可以通過使用屬性 `data-centered`（默認為 `true` 如果未指定）中的布爾值來確定區塊在視口中的居中情況。例如：

```html
<div class="section" data-percentage="80" data-centered="true"></div>
```

### resetSliders

（默認為 `false`）[fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)。定義離開區塊後是否重置每個滑塊。需要 fullPage.js >= 3.0.1。

### fadingEffect

（默認為 `false`）[fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)。定義是否使用淡入淡出效果來代替默認滾動效果。可能的值有 `true`、`false`、`sections`、`slides`。因此，它可以垂直或水平應用，或者同時應用於兩者。只能在使用 `autoScrolling:true` 時使用。需要 fullPage.js >= 3.0.1。

### animateAnchor

（默認為 `true`）定義當給定錨點（#）加載站點時，是否會帶有動畫滾動到目標位置，還是直接加載到給定區塊。

### recordHistory

（默認為 `true`）定義是否將站點的狀態推送到瀏覽器的歷史記錄中。設置為 `true` 時，站點的每個區塊/幻燈片都將作為一個新頁面，瀏覽器的前進和後退按鈕將滾動區塊/幻燈片以達到站點的上一個或下一個狀態。設置為 `false` 時，URL 將保持更改但對瀏覽器的歷史記錄沒有影響。使用 `autoScrolling:false` 時，該選項會自動關閉。

### menu

（默認為 `false`）可以使用一個選擇器來指定與區塊鏈接的菜單。這樣，區塊滾動時將激活菜單中的對應元素，並使用類 `active`。
這不會生成菜單，只會將 `active` 類添加到菜單中具有相應錨點鏈接的元素。
為了將菜單元素與區塊鏈接，需要使用與區塊中使用的相同錨點鏈接的 HTML5 `data-menuanchor` 屬性。例如：

```html
<ul id="myMenu">
    <li data-menuanchor="firstPage" class="active">
        <a href="#firstPage">第一區塊</a>
    </li>
    <li data-menuanchor="secondPage"><a href="#secondPage">第二區塊</a></li>
    <li data-menuanchor="thirdPage"><a href="#thirdPage">第三區塊</a></li>
    <li data-menuanchor="fourthPage"><a href="#fourthPage">第四區塊</a></li>
</ul>
```

```javascript
new fullpage("#fullpage", {
    anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "lastPage"],
    menu: "#myMenu",
});
```

**注意：** 菜單元素應放置在 fullpage 包裝器外，以避免使用 `css3:true` 時出現問題。否則，插件會將其附加到 `body`。

### navigation

（默認為 `false`）如果設置為 `true`，將顯示由小圓圈組成的導航欄。

### navigationPosition

（默認為 `none`）可以設置為 `left` 或 `right`，定義顯示導航欄的位置（如果使用的話）。

### navigationTooltips

（默認為 `[]`）定義導航圓圈的工具提示（如果使用）。例如：`navigationTooltips: ['第一區塊', '第二區塊']`。如果你更喜歡，也可以使用每個區塊的 `data-tooltip` 屬性來定義它們。

### showActiveTooltip

（默認為 `false`）顯示垂直導航中當前查看區塊的持久工具提示。

### slidesNavigation

（默認為 `false`）如果設置為 `true`，將顯示由小圓圈組成的導航欄，用於站點中的每個橫向滑塊。

### slidesNavPosition

（默認為 `bottom`）定義橫向滑塊導航欄的位置。接受 `top` 和 `bottom` 作為值。你可能需要修改 CSS 樣式來確定與頂部或底部的距離以及其他樣式（例如顏色）。

### scrollOverflow

（默認為 `true`）定義區塊/幻燈片的內容是否大於其高度時是否創建滾動條。需要默認值 `scrollBar: false`。為了防止 fullpage.js 在某些區塊或幻燈片中創建滾動條，請使用類 `fp-noscroll`。例如：`<div class="section fp-noscroll">`。你也可以在響應模式下使用 `fp-auto-height-responsive` 防止應用 scrolloverflow。

### scrollOverflowReset

（默認為 `false`）[fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)。可能的值有 `true`、`false`、`sections`、`slides`。設置為 `true` 時，當離開到另一個區塊/幻燈片時，帶有滾動條的區塊/幻燈片的內容會向上滾動。這樣，區塊/幻燈片將始終顯示其內容的開頭，即使從其下方的區塊滾動過來。在區塊或幻燈片上添加類 `fp-no-scrollOverflowReset` 將禁用該特定面板的此功能。

### scrollOverflowMacStyle

（默認為 `false`）啟用時，該選項將使用“Mac 風格”的滾動條，而不是默認的滾動條，在 Windows 計算機上看起來會有所不同。

### sectionSelector

（默認為 `.section`）定義插件區塊使用的 JavaScript 選擇器。有時可能需要更改以避免與其他使用相同選擇器的插件發生衝突。

### slideSelector

（默認為 `.slide`）定義插件幻燈片使用的 JavaScript 選擇器。有時可能需要更改以避免與其他使用相同選擇器的插件發生衝突。

### responsiveWidth

（默認為 `0`）在定義的寬度（像素）以下將使用正常滾動（`autoScrolling:false`）。如果用戶希望使用它們自己的響應式 CSS，則會將類 `fp-responsive` 添加到 body 標籤。例如，如果設置為 900，當瀏覽器的寬度小於 900 時，插件將像普通站點一樣滾動。

### responsiveHeight

（默認為 `0`）在定義的高度（像素）以下將使用正常滾動（`autoScrolling:false`）。如果用戶希望使用它們自己的響應式 CSS，則會將類 `fp-responsive` 添加到 body 標籤。例如，如果設置為 900，當瀏覽器的高度小於 900 時，插件將像普通站點一樣滾動。

### responsiveSlides

（預設為 `false`）[fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)。設置為 `true` 時，當觸發響應模式（使用上面詳述的 `responsiveWidth` 或 `responsiveHeight` 選項）時，幻燈片將變成垂直區段。需要 fullpage.js >= 3.0.1。

### parallax

（預設為 `false`）[fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)。定義是否在區段/幻燈片上使用視差背景效果。[了解更多關於如何應用視差選項](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax)。

### parallaxOptions

（預設值：`{ type: 'reveal', percentage: 62, property: 'translate'}`）。

允許在使用 `parallax:true` 選項時配置視差背景效果的參數。[了解更多關於如何應用視差選項](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax)。

### dropEffect

（預設為 `false`）[fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)。定義是否在區段/幻燈片上使用下落效果。[了解更多關於如何應用下落效果選項](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Drop-Effect)。

### dropEffectOptions

（預設值：`{ speed: 2300, color: '#F82F4D', zIndex: 9999}`）。

允許在使用 `dropEffect:true` 選項時配置下落效果的參數。[了解更多關於如何應用下落效果選項](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Drop-Effect)。

### waterEffect

（預設為 `false`）[fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)。定義是否在區段/幻燈片上使用水波效果。[了解更多關於如何應用水波效果選項](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Water-Effect)。

### waterEffectOptions

（預設值：`{ animateContent: true, animateOnMouseMove: true}`）。

允許在使用 `waterEffect:true` 選項時配置水波效果的參數。[了解更多關於如何應用水波效果選項](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Water-Effect)。

### cards

（預設為 `false`）[fullpage.js 擴充功能](https://alvarotrigo.com/fullPage/extensions/)。定義是否在區段/幻燈片上使用卡片效果。[了解更多關於如何應用卡片效果選項](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards)。

### cardsOptions

（預設值：`{ perspective: 100, fadeContent: true, fadeBackground: true}`）。

允許在使用 `cards:true` 選項時配置卡片效果的參數。[了解更多關於如何應用卡片效果選項](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards)。

### lazyLoading

（預設為 `true`）懶加載默認為啟用狀態，這意味著它會懶加載任何包含 `data-src` 屬性的媒體元素，詳細信息請參閱 [懶加載文檔](https://github.com/alvarotrigo/fullPage.js#lazy-loading)。如果你想使用其他懶加載庫，可以禁用 fullpage.js 的這個功能。

### observer

（預設為 `true`）定義是否監視頁面 HTML 結構的變化。啟用後，fullPage.js 將自動對這些變化做出反應並相應地更新自己。當添加、移除或隱藏區段或幻燈片時，這非常理想。

### credits

（預設值：`{enabled: true, label: 'Made with fullpage.js', position: 'right'}`）。
定義是否使用 fullPage.js 的版權聲明。根據 GPLv3 版權許可條款第 0、4、5 和 7 條款，使用 GPLv3 版權下的 fullPage.js 的人需要顯著提示 fullPage.js 的使用。我們建議保留此選項啟用以進行歸屬。

## 方法

你可以在[這裡](https://alvarotrigo.com/fullPage/examples/methods.html)看到它們的應用。

### getActiveSection()

[範例](https://codepen.io/alvarotrigo/pen/VdpzRN/) 獲取包含當前活動區段及其屬性的對象（類型為 [Section](https://github.com/alvarotrigo/fullPage.js#callbacks)）。

```javascript
fullpage_api.getActiveSection();
```

### getActiveSlide()

[範例](https://codepen.io/alvarotrigo/pen/VdpzRN/) 獲取包含當前活動幻燈片及其屬性的對象（類型為 [Slide](https://github.com/alvarotrigo/fullPage.js#callbacks)）。

```javascript
fullpage_api.getActiveSlide();
```

### getScrollY() 和 getScrollX

[範例](https://codepen.io/alvarotrigo/pen/GRyGqro) `getScrollY` 獲取 fullPage 包裝器的 Y 位置。`getScrollX` 獲取當前橫向幻燈片的 X 位置。

```javascript
fullpage_api.getScrollY();
fullpage_api.getScrollX();
```

### moveSectionUp()

[範例](https://codepen.io/alvarotrigo/pen/GJXNMN) 向上一個區段滾動：

```javascript
fullpage_api.moveSectionUp();
```

---

### moveSectionDown()

[範例](https://codepen.io/alvarotrigo/pen/jPvVZx) 向下一個區段滾動：

```javascript
fullpage_api.moveSectionDown();
```

---

### moveTo(section, slide)

[範例](https://codepen.io/alvarotrigo/pen/doqOmY) 滾動頁面到給定的區段和幻燈片。第一個區段的索引為 1，而默認可見的第一個幻燈片的索引為 0。

```javascript
/*滾動到帶有錨點鏈接 `firstSlide` 的區段和第 2 幻燈片 */
fullpage_api.moveTo("firstSlide", 2);
```

```javascript
//滾動到網站的第 3 區段（索引為 3）
fullpage_api.moveTo(3, 0);

//這與以下相同
fullpage_api.moveTo(3);
```

---

### silentMoveTo(section, slide)

[範例](https://codepen.io/alvarotrigo/pen/doqOeY)
與 [`moveTo`](https://github.com/alvarotrigo/fullPage.js#movetosection-slide) 完全相同，但在這種情況下，它會在沒有動畫的情況下執行滾動。直接跳轉到目的地。

```javascript
/*滾動到帶有錨點鏈接 `firstSlide` 的區段和第 2 幻燈片 */
fullpage_api.silentMoveTo("firstSlide", 2);
```

---

### moveSlideRight()

[範例](https://codepen.io/alvarotrigo/pen/Wvgoyz)
滾動當前區段的橫向滑塊到下一個幻燈片：

```javascript
fullpage_api.moveSlideRight();
```

---

### moveSlideLeft()

[範例](https://codepen.io/alvarotrigo/pen/gpdLjW)
滾動當前區段的橫向滑塊到上一個幻燈片：

```javascript
fullpage_api.moveSlideLeft();
```

---

### setAutoScrolling(boolean)

[範例](https://codepen.io/alvarotrigo/pen/rVZWrR) 設置滾動配置即時生效。
定義頁面滾動的行為方式。如果設置為 `true`，將使用 "自動" 滾動，否則，將使用站點的 "手動" 或 "正常" 滾動。

```javascript
fullpage_api.setAutoScrolling(false);
```

---

### setFitToSection(boolean)

[範例](https://codepen.io/alvarotrigo/pen/GJXNYm)
設置 `fitToSection` 選項的值，確定是否將區段適應屏幕。

```javascript
fullpage_api.setFitToSection(false);
```

---

### fitToSection()

[範例](https://codepen.io/alvarotrigo/pen/JWWagj)
滾動到最近的活動區段，使其適應視口。

```javascript
full;

page_api.fitToSection();
```

---

### setLockAnchors(boolean)

[範例](https://codepen.io/alvarotrigo/pen/yNxVRQ)
設置 `lockAnchors` 選項的值，確定錨點是否會對 URL 產生影響。

```javascript
fullpage_api.setLockAnchors(false);
```

---

### setAllowScrolling(boolean, [directions])

[範例](https://codepen.io/alvarotrigo/pen/EjeNdq) 添加或移除使用鼠標滾輪/觸控板或觸摸手勢滾動區段/幻燈片的可能性（默認為啟用）。請注意，這不會禁用鍵盤滾動。你需要使用 `setKeyboardScrolling` 來實現。

-   `directions`：（可選參數）接受的值：`all`、`up`、`down`、`left`、`right` 或用逗號分隔的組合，如 `down, right`。它定義了滾動將啟用或禁用的方向。

```javascript
//禁用滾動
fullpage_api.setAllowScrolling(false);

//禁用向下滾動
fullpage_api.setAllowScrolling(false, "down");

//禁用向下和向右滾動
fullpage_api.setAllowScrolling(false, "down, right");
```

### setKeyboardScrolling(boolean, [directions])

[範例](https://codepen.io/alvarotrigo/pen/GJXNwm) 添加或移除使用鍵盤滾動區段的可能性（默認為啟用）。

-   `directions`:（可選參數）接受的值：`all`、`up`、`down`、`left`、`right` 或用逗號分隔的組合，如 `down, right`。它定義了滾動將啟用或禁用的方向。

```javascript
// 禁用所有鍵盤滾動
fullpage_api.setKeyboardScrolling(false);

// 禁用向下的鍵盤滾動
fullpage_api.setKeyboardScrolling(false, "down");

// 禁用向下和向右的鍵盤滾動
fullpage_api.setKeyboardScrolling(false, "down, right");
```

---

### setRecordHistory(boolean)

[範例](https://codepen.io/alvarotrigo/pen/rVZWQb) 定義是否記錄 URL 中每次哈希變更的歷史記錄。

```javascript
fullpage_api.setRecordHistory(false);
```

---

### setScrollingSpeed(milliseconds)

[範例](https://codepen.io/alvarotrigo/pen/NqLbeY) 定義滾動速度（以毫秒為單位）。

```javascript
fullpage_api.setScrollingSpeed(700);
```

---

### destroy(type)

[範例](https://codepen.io/alvarotrigo/pen/bdxBzv) 銷毀插件事件，並可選地其 HTML 標記和樣式。理想用於使用 AJAX 加載內容時。

-   `type`:（可選參數）可以為空或 `all`。如果傳遞 `all`，則 fullpage.js 使用的 HTML 標記和樣式將被移除。這樣將保持原始 HTML 標記，即在任何插件修改之前使用的 HTML 標記。

```javascript
// 銷毀 fullPage.js 創建的所有 JavaScript 事件（滾動、URL 中的哈希變更等）
fullpage_api.destroy();

// 銷毀所有 JavaScript 事件以及 fullPage.js 對原始 HTML 標記所做的任何修改。
fullpage_api.destroy("all");
```

---

### reBuild()

更新 DOM 結構以適應新窗口大小或其內容。理想用於與 AJAX 調用或站點 DOM 結構的外部更改結合使用，特別是當使用 `scrollOverflow:true` 時。

```javascript
fullpage_api.reBuild();
```

---

### setResponsive(boolean)

[範例](https://codepen.io/alvarotrigo/pen/WxOyLA) 設置頁面的響應模式。設置為 `true` 時，自動滾動將被關閉，結果將與 `responsiveWidth` 或 `responsiveHeight` 選項被觸發時的情況完全相同。

```javascript
fullpage_api.setResponsive(true);
```

---

### responsiveSlides.toSections()

[fullpage.js 擴展](https://alvarotrigo.com/fullPage/extensions/)。需要 fullpage.js >= 3.0.1。
將橫向幻燈片轉變為垂直區段。

```javascript
fullpage_api.responsiveSlides.toSections();
```

---

### responsiveSlides.toSlides()

[fullpage.js 擴展](https://alvarotrigo.com/fullPage/extensions/)。需要 fullpage.js >= 3.0.1。
將原本轉變為垂直區段的幻燈片恢復為橫向幻燈片。

```javascript
fullpage_api.responsiveSlides.toSlides();
```

## 回調函數

[範例](https://codepen.io/alvarotrigo/pen/XbPNQv) 你可以在[這裡](https://alvarotrigo.com/fullPage/examples/callbacks.html)看到它們的應用。

一些回調函數，例如 `onLeave`，將包含包含以下屬性的對象類型的參數：

-   `anchor`：_(String)_ 項目的錨點。
-   `index`：_(Number)_ 項目的索引。
-   `item`：_(DOM element)_ 項目元素。
-   `isFirst`：_(Boolean)_ 確定該項目是否為第一個子項。
-   `isLast`：_(Boolean)_ 確定該項目是否為最後一個子項。

### afterLoad (`origin`, `destination`, `direction`, `trigger`)

[範例](https://codepen.io/alvarotrigo/pen/XbPNQv) 區段加載完成後、滾動結束後觸發的回調函數。
參數：

-   `origin`：_(Object)_ 起始區段。
-   `destination`：_(Object)_ 目標區段。
-   `direction`：_(String)_ 根據滾動方向，它將取值 `up` 或 `down`。
-   `trigger`：_(String)_ 指示觸發滾動的事件。它可以是：`"wheel"`、`"keydown"`、`"menu"`、`"slideArrow"`、`"verticalNav"`、`"horizontalNav"`。

範例：

```javascript
new fullpage("#fullpage", {
    anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "lastPage"],

    afterLoad: function (origin, destination, direction, trigger) {
        var origin = this;

        // 使用索引
        if (origin.index == 2) {
            alert("Section 3 ended loading");
        }

        // 使用錨點鏈接
        if (origin.anchor == "secondSlide") {
            alert("Section 2 ended loading");
        }
    },
});
```

---

---

### onLeave (`origin`, `destination`, `direction`, `trigger`)

[範例](https://codepen.io/alvarotrigo/pen/XbPNQv) 當用戶離開某個區段，過渡到新區段時觸發此回調。返回 `false` 將取消移動操作。

參數：

-   `origin`：_(Object)_ 起始區段。
-   `destination`：_(Object)_ 目標區段。
-   `direction`：_(String)_ 根據滾動方向，它將取值 `up` 或 `down`。
-   `trigger`：_(String)_ 指示觸發滾動的事件。它可以是：`"wheel"`、`"keydown"`、`"menu"`、`"slideArrow"`、`"verticalNav"`、`"horizontalNav"`。

範例：

```javascript
new fullpage("#fullpage", {
    onLeave: function (origin, destination, direction, trigger) {
        var leavingSection = this;

        // 離開第2區段後
        if (origin.index == 1 && direction == "down") {
            alert("Going to section 3!");
        } else if (origin.index == 1 && direction == "up") {
            alert("Going to section 1!");
        }
    },
});
```

---

### beforeLeave (`origin`, `destination`, `direction`, `trigger`)

[範例](https://codepen.io/alvarotrigo/pen/XbPNQv) 此回調在離開區段前，即過渡發生前觸發。

你可以使用此回調在滾動發生前取消滾動，通過返回 `false`。

參數：

-   `origin`：_(Object)_ 起始區段。
-   `destination`：_(Object)_ 目標區段。
-   `direction`：_(String)_ 根據滾動方向，它將取值 `up` 或 `down`。
-   `trigger`：_(String)_ 指示觸發滾動的事件。它可以是：`"wheel"`、`"keydown"`、`"menu"`、`"slideArrow"`、`"verticalNav"`、`"horizontalNav"`。

範例：

```javascript
var cont = 0;
new fullpage("#fullpage", {
    beforeLeave: function (origin, destination, direction, trigger) {
        // 防止滾動，直到我們滾動4次
        cont++;
        return cont === 4;
    },
});
```

---

### afterRender()

[範例](https://codepen.io/alvarotrigo/pen/XbPNQv) 此回調在頁面結構生成後立即觸發。這是你希望用於初始化其他插件或觸發任何需要文檔準備就緒的代碼的回調（因為此插件修改 DOM 以創建最終結構）。有關更多信息，請參閱 [FAQs](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)。

範例：

```javascript
new fullpage("#fullpage", {
    afterRender: function () {
        var pluginContainer = this;
        alert("The resulting DOM structure is ready");
    },
});
```

---

### afterResize(`width`, `height`)

[範例](https://codepen.io/alvarotrigo/pen/XbPNQv) 此回調在調整瀏覽器窗口大小後觸發。區段調整大小後立即觸發。

參數：

-   `width`：_(Number)_ 窗口寬度。
-   `height`：_(Number)_ 窗口高度。

範例：

```javascript
new fullpage("#fullpage", {
    afterResize: function (width, height) {
        var fullpageContainer = this;
        alert("The sections have finished resizing");
    },
});
```

---

### afterReBuild()

[範例](https://codepen.io/alvarotrigo/pen/XbPNQv) 此回調在通過調用 `fullpage_api.reBuild()` 手動重建 fullpage.js 後觸發。

範例：

```javascript
new fullpage("#fullpage", {
    afterReBuild: function () {
        console.log("fullPage.js has manually being re-builded");
    },
});
```

---

### afterResponsive(`isResponsive`)

[範例](https://codepen.io/alvarotrigo/pen/XbPNQv) 此回調在 fullpage.js 從正常模式切換到響應模式或從響應模式切換回正常模式後觸發。

參數：

-   `isResponsive`：_(Boolean)_ 確定它是否進入響應模式（`true`）或返回正常模式（`false`）。

範例：

```javascript
new fullpage("#fullpage", {
    afterResponsive: function (isResponsive) {
        alert("Is responsive: " + isResponsive);
    },
});
```

---

### afterSlideLoad (`section`, `origin`, `destination`, `direction`, `trigger`)

[範例](https://codepen.io/alvarotrigo/pen/XbPNQv) 區段的幻燈片加載完成後、滾動結束後觸發的回調函數。

參數：

-   `section`：_(Object)_ 活動的垂直區段。
-   `origin`：_(Object)_ 起始的水平幻燈片。
-   `destination`：_(Object)_ 目標的水平幻燈片。
-   `direction`：_(String)_ 根據滾動方向，它將取值 `right` 或 `left`。
-   `trigger`：_(String)_ 指示觸發滾動的事件。它可以是：`"wheel"`、`"keydown"`、`"menu"`、`"slideArrow"`、`"verticalNav"`、`"horizontalNav"`。

範例：

```javascript
new fullpage("#fullpage", {
    anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "lastPage"],

    afterSlideLoad: function (
        section,
        origin,
        destination,
        direction,
        trigger
    ) {
        var loadedSlide = this;

        // 第二區段的第一張幻燈片
        if (section.anchor == "secondPage" && destination.index == 1) {
            alert("First slide loaded");
        }

        // 第二區段的第二張幻燈片（假設 #secondSlide 是第二張幻燈片的錨點）
        if (section.index == 1 && destination.anchor == "secondSlide") {
            alert("Second slide loaded");
        }
    },
});
```

---

---

### onSlideLeave (`section`, `origin`, `destination`, `direction`, `trigger`)

[範例](https://codepen.io/alvarotrigo/pen/XbPNQv)

當用戶從一個幻燈片轉到另一個幻燈片時，會觸發此回調。返回 `false` 將在移動發生之前取消該操作。

參數：

-   `section`：_(Object)_ 當前垂直區段。
-   `origin`：_(Object)_ 起始的水平幻燈片。
-   `destination`：_(Object)_ 目標的水平幻燈片。
-   `direction`：_(String)_ 根據滾動方向，它將取值 `right` 或 `left`。
-   `trigger`：_(String)_ 指示觸發滾動的事件。它可以是：`"wheel"`、`"keydown"`、`"menu"`、`"slideArrow"`、`"verticalNav"`、`"horizontalNav"`。

範例：

```javascript
new fullpage("#fullpage", {
    onSlideLeave: function (section, origin, destination, direction, trigger) {
        var leavingSlide = this;

        // 從第2區段的第一張幻燈片向右離開
        if (section.index == 1 && origin.index == 0 && direction == "right") {
            alert("Leaving the first slide!!");
        }

        // 從第2區段的第三張幻燈片向左離開
        if (section.index == 1 && origin.index == 2 && direction == "left") {
            alert("Going to slide 2!");
        }
    },
});
```

#### 在移動發生前取消

你可以通過在 `onSlideLeave` 回調中返回 `false` 來取消移動。 [與 `onLeave` 取消移動相同](https://github.com/alvarotrigo/fullPage.js#cancelling-the-scroll-before-it-takes-place)。

---

### onScrollOverflow (`section`, `slide`, `position`, `direction`)

[範例](https://codepen.io/alvarotrigo/pen/XbPNQv) 當在使用 `scrollOverflow: true` 選項的可滾動區段內滾動時，會觸發此回調。

參數：

-   `section`：_(Object)_ 當前垂直區段。
-   `slide`：_(Object)_ 起始的水平幻燈片。
-   `position`：_(Integer)_ 在區段/幻燈片內的滾動量。從 0 開始。
-   `direction`：_(String)_ `up` 或 `down`

範例：

```javascript
new fullpage("#fullpage", {
    onScrollOverflow: function (section, slide, position, direction) {
        console.log(section);
        console.log("position: " + position);
    },
});
```

# 錯誤報告

1. 請在提問前使用 GitHub 的問題搜索功能尋找相關問題。
2. 確保使用最新版本的 fullpage.js。不支持舊版本。
3. 使用 [GitHub Issues 論壇](https://github.com/alvarotrigo/fullPage.js/issues) 創建問題。
4. **需要提供問題的隔離重現範例。** 如果可能，請使用 [jsfiddle](https://jsfiddle.net/alvarotrigo/ea17skjr/) 或 [codepen](https://codepen.io/alvarotrigo/pen/qqabrp) 進行範例展示。

# 參與貢獻

請參見 [貢獻指南](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)

# 更新日誌

要查看最近的更改，請參閱 [發布部分](https://github.com/alvarotrigo/fullPage.js/releases)。

# 構建任務

想要構建 fullpage.js 發行文件？請參見 [構建任務](https://github.com/alvarotrigo/fullPage.js/wiki/Build-tasks)

# 資源

-   Wordpress 插件 [Gutenberg](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/) 和 [Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)。
-   [Wordpress 主題](https://alvarotrigo.com/fullPage/utils/wordpress.html)
-   [官方 Vue.js 包裝組件](https://github.com/alvarotrigo/vue-fullpage.js)
-   [官方 React.js 包裝組件](https://github.com/alvarotrigo/react-fullpage)
-   [官方 Angular 包裝組件](https://github.com/alvarotrigo/angular-fullpage)
-   [CSS 緩動動畫工具 - Matthew Lein](https://matthewlein.com/ceaser/)（用於定義 `easingcss3` 值）
-   [fullPage.js jsDelivr CDN](https://www.jsdelivr.com/package/npm/fullpage.js)
-   [fullPage.js October CMS 插件](https://github.com/freestream/oc-parallax-plugin)
-   [fullPage.js Angular2 指令](https://github.com/meiblorn/ng2-fullpage)
-   [fullPage.js Angular 指令](https://github.com/hellsan631/angular-fullpage.js)
-   [fullPage.js ember-cli 插件](https://www.npmjs.com/package/ember-cli-fullpagejs)
-   [fullPage.js Rails Ruby Gem](https://rubygems.org/gems/fullpagejs-rails)
-   [Angular fullPage.js - 適配 Angular.js v1.x](https://github.com/mmautomatizacion/angular-fullpage.js)
-   [將 fullPage.js 與 Wordpress 集成（教程）](https://premium.wpmudev.org/blog/build-apple-inspired-full-page-scrolling-pages-for-your-wordpress-site/)
-   [Wordpress 插件 for Divi](https://alvarotrigo.com/fullPage/wordpress-plugin-divi/)
-   [Wordpress 插件 for Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)

## 誰在使用 fullPage.js

![Who is using fullPage.js](https://cdn.jsdelivr.net/gh/alvarotrigo/fullpage-assets/imgs/using-fullpage.png)

-   http://www.bbc.co.uk/news/resources/idt-d88680d1-26f2-4863-be95-83298fd01e02
-   http://medoff.ua/en/
-   http://promo.prestigio.com/grace1/
-   http://torchbrowser.com/
-   http://www.boxreload.com/
-   http://boxx.hk/
-   http://www.villareginateodolinda.it

## 捐款

歡迎捐款 :)

[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## 贊助商

成為贊助商，並在我們的 GitHub README 上展示您的徽標及網站鏈接。 [[成為贊助商](https://alvarotrigo.com/#contact)] | [[成為 Patreon 贊助者]](https://www.patreon.com/fullpagejs)

[![Codeless](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codeless.png)](https://codeless.co)
[![Stackpath](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/stackpath3.png)](https://www.stackpath.com/)
[![Browserstack](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/browserstack3.png)](http://www.browserstack.com/)
[![CodePen](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codepen3.png)](https://codepen.com)

### 人物

<a href="https://github.com/donsalvadori" target="_blank" rel="nofollow">
	<img src="http://wallpapers-for-ipad.com/fullpage/imgs3/avatars/donsalvadori.jpg">
</a>

## 貢獻者

<a href="https://github.com/alvarotrigo/fullPage.js/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=alvarotrigo/fullPage.js&max=400&columns=25&anon=1&v=2" />
</a>

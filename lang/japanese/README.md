# fullPage.js
![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.png)

<p align="center">
  <a href="https://github.com/alvarotrigo/fullPage.js">English</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish#fullpagejs">Español</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#fullpagejs">Français</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#fullpagejs">Pусский</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese#fullpagejs">中文</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs">한국어</a> | 
  <span>日本語</span> | 
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese#fullpagejs">Português Brasileiro</a>
</p>

<p align="center">
	Available for <a href="https://github.com/alvarotrigo/vue-fullpage.js">Vue</a>, <a href="https://github.com/alvarotrigo/react-fullpage">React</a> and <a href="https://github.com/alvarotrigo/angular-fullpage">Angular</a>.
</p>

---

![fullPage.js version](https://img.shields.io/badge/fullPage.js-v4.0.37-brightgreen.svg)
[![License](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/fullpage.js/badge?style=rounded)](https://www.jsdelivr.com/package/npm/fullpage.js)
[![Minzipped Size](https://img.shields.io/bundlephobia/minzip/fullpage.js)](https://bundlephobia.com/package/fullpage.js)
&nbsp;&nbsp;**|**&nbsp;&nbsp; *Created by [@imac2](https://twitter.com/imac2)*

- [Demo online](https://alvarotrigo.com/fullPage/) | [Codepen](https://codepen.io/alvarotrigo/pen/qqabrp)
- [Wordpress plugin for Gutenberg](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/) and [WordPress plugin for Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)
- [Wordpress theme](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [fullpage.js Extensions](https://alvarotrigo.com/fullPage/extensions/)
- [Frequently Answered Questions](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)
- [[Migration from fullPage v3 to fullpage v4]](https://alvarotrigo.com/fullPage/help/migration-from-fullpage-3/)
---

fullPage.jsはシンプルで使いやすいライブラリで、全画面のスクロールページ（シングルページウェブサイトまたはワンページサイトとも呼ばれます）を作成できます。  
また、サイトのそれぞれのセクション内に横向きのスライダーを追加することも可能です。

- [はじめに](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#はじめに)
- [互換性](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#互換性)
- [ライセンス](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#ライセンス)
- [使用方法](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#使用方法)
  - [セクションやスライドへのリンク作成](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#セクションやスライドへのリンク作成)
  - [小さなセクションや大きなセクションの作成](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#小さなセクションや大きなセクションの作成)
  - [fullpage.jsによって追加される状態クラス](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#fullpage.jsによって追加される状態クラス)
  - [遅延読み込み](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#遅延読み込み)
  - [埋め込まれたメディアの自動再生/一時停止](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#埋め込まれたメディアの自動再生/一時停止)
  - [拡張機能の使用](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#拡張機能の使用)
- [オプション](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#オプション)
- [メソッド](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#メソッド)
- [コールバック](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#コールバック)
- [問題の報告](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#問題の報告)
- [fullpage.jsへの貢献](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#fullpage.jsへの貢献)
- [変更履歴](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#変更履歴)
- [ビルドタスク](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#ビルドタスク)
- [リソース](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#リソース)
- [fullpage.jsを使用しているサイト](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/fullpage.jsを使用しているサイト)
- [寄付](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#寄付)
- [スポンサー](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#スポンサー)

## はじめに
機能の要望だけでなく、コーディングスタイルの改善についても提案を歓迎します。
皆さんの生産性を向上するために、素晴らしいライブラリにしましょう！

## 互換性
fullPage.jsはすべての最新ブラウザおよびIE 11で完全に機能します。IE < 11をサポートする必要がある場合は、[fullPage.js v3](https://github.com/alvarotrigo/fullPage.js/tree/3.1.2)を使用してください。
また、スマートフォン、タブレット、タッチパネルディスプレイもサポートしています。

fullpage.jsをサポートしてくれる[Browserstack](https://www.browserstack.com/)に多大なる感謝を申し上げます。

## ライセンス

### 商用ライセンス
fullPageを使用して非オープンソースのサイト、テーマ、プロジェクト、アプリケーションを開発したい場合は、商用ライセンスが適切です。このオプションでは、ソースコードはプロプライエタリとして保持されます。つまり、アプリケーションの全ソースコードをオープンソースライセンスに変更する必要はありません。[Fullpage商用ライセンスの購入](https://alvarotrigo.com/fullPage/pricing/)

### オープンソースライセンス
GNU GPL v3ライセンスと互換性のあるオープンソースアプリケーションを作成している場合は、GPLv3の条件に基づいてfullPageを使用することができます。

**fullPage.jsが使用されていることを明示的に示す必要があります。JavaScriptおよびCSSファイルのクレジットコメントはそのまま残してください。**（他ソースコードとの結合やミニファイ後も）

[fullPageのライセンスについて詳しく読む](https://alvarotrigo.com/fullPage/pricing/)

## 使用方法
例のファイルでわかるように、以下を含める必要があります：
 - JavaScriptファイル `fullpage.js`（またはその最小化バージョン `fullpage.min.js`）
 - CSSファイル `fullpage.css`

 **オプション** `css3:false`を使用する場合、ライブラリに含まれているイージング効果（`easeInOutCubic`）以外の効果を使用したい場合は、[easingsファイル](https://github.com/alvarotrigo/fullPage.js/tree/master/vendors/easings.min.js)を追加してください。

### bowerまたはnpmを使用してインストール
**オプション** 要に応じてfullPage.jsをbowerまたはnpmでインストールできます。

ターミナル：
```shell
// bowerを使用
bower install fullpage.js

// npmを使用
npm install fullpage.js
```

### ファイルのインクルード
```html
<link rel="stylesheet" type="text/css" href="fullpage.css" />

<!-- 次の行はオプションです。css3:falseオプションを使用し、"easeInOutCubic"以外のイージング効果を使用したい場合にのみ必要です。 -->
<script src="vendors/easings.min.js"></script>

<script type="text/javascript" src="fullpage.js"></script>
```

Webpack、Browserify、またはRequire.jsを使用している場合は、[モジュールローダーを使用したfullPage.jsの使い方](https://github.com/alvarotrigo/fullPage.js/wiki/Use-module-loaders-for-fullPage.js)を確認してください。

### オプション CDNの使用
CDNを使用してfullPage.jsを利用したい場合、[JSDelivr](https://www.jsdelivr.com/package/npm/fullpage.js)、[UNPKG](https://unpkg.com/browse/fullpage.js/dist/)、[CDNJS](https://cdnjs.com/libraries/fullPage.js) を利用できます。


### 必須HTML構造
HTML文書をHTMLの[DOCTYPE宣言](https://www.corelangs.com/html/introduction/doctype.html)で始めます。  
そうしないと、セクションの高さに問題が発生する可能性があります。  
提供された例ではHTML 5のDOCTYPE `<!DOCTYPE html>`を使用しています。

各セクションは`section`クラスを含む要素で定義します。
デフォルトではアクティブなセクションは最初のセクションで、これは最初に表示されるページとなります。

セクションはラッパー（この場合は`<div id="fullpage">`）内に配置する必要があります。  
`body`要素はラッパーとして指定できません。

```html
<div id="fullpage">
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
</div>
```

アクティブとするセクションを最初のセクションやセクションの最初のスライドから変更したい場合は、  
アクティブにしたいセクションやスライドにクラス`active`を追加します。

```html
<div class="section active">Some section</div>
```

セクション内に横向きのスライダーを作成するには、`slide`クラスを含む要素で定義します。

```html
<div class="section">
	<div class="slide"> Slide 1 </div>
	<div class="slide"> Slide 2 </div>
	<div class="slide"> Slide 3 </div>
	<div class="slide"> Slide 4 </div>
</div>
```

HTML構造の詳細な例は[`simple.html`ファイル](https://github.com/alvarotrigo/fullPage.js/blob/master/examples/simple.html)で確認できます。

### 初期化

#### Vanilla Javascriptでの初期化
`</body>`タグの直前で`<script>`タグを利用して、fullPage.jsを呼び出すだけです。

```javascript
new fullpage('#fullpage', {
	//オプションはここに
	autoScrolling: true,
	scrollHorizontally: true
});
```

#### jQueryでの初期化
fullpage.jsをjQueryプラグインとして使用することもできます！

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		//オプションはここに
		autoScrolling: true,
		scrollHorizontally: true
	});

	// fullpage.jsメソッドの使用例
	$.fn.fullpage.setAllowScrolling(false);
});
```

#### すべてのオプションを設定したVanilla JSの例
すべてのオプションを設定したより複雑な初期化は次のようになります。
```javascript

var myFullpage = new fullpage('#fullpage', {
	// ナビゲーション
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	// スクロール
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
	adjustOnNavChange: true,

	// アクセシビリティ
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	// デザイン
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
	effects: false,
	effectsOptions: [Object],
	parallax: false,
	parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
	dropEffect: false,
	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999 },
	waterEffect: false,
	waterEffectOptions: { animateContent: true, animateOnMouseMove: true },
	cards: false,
	cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

	// カスタムセレクター
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,
	lazyLoadThreshold: 0,
	observer: true,
	credits: { enabled: true, label: 'Made with fullPage.js', position: 'right' },

	// イベント
	beforeLeave: function(origin, destination, direction, trigger){},
	onLeave: function(origin, destination, direction, trigger){},
	afterLoad: function(origin, destination, direction, trigger){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction, trigger){},
	onSlideLeave: function(section, origin, destination, direction, trigger){}
});
```

### セクションやスライドへのリンク作成
セクションのアンカーリンクを使用している場合（`anchors`オプションまたは各スライドの`data-anchor`属性を使用）、  
セクション内の特定のスライドに直接移動するためのアンカーリンクも使用できます。

以下がアンカー付きのリンクの例です。  
https://alvarotrigo.com/fullPage/#secondPage/2（手動でそのセクション/スライドにアクセスすると表示されるURL）  
URLの最後の部分は`#secondPage/2`で終わります。

次の初期化を行うと：

```javascript
new fullpage('#fullpage', {
	anchors:['firstPage', 'secondPage', 'thirdPage']
});
```

URLの末尾にあるアンカー`#secondPage/2`はそれぞれセクションとスライドの位置を示します。  
`#secondPage/2`の場合、セクションはアンカー`secondPage`で定義されたもので、スライドはインデックス`2`であるためため2番目のスライドになります。（セクションの最初のスライドはインデックス0となります）。

HTMLマークアップで`data-anchor`属性を使用すると、インデックスの代わりにカスタムアンカーをスライドに使用できます。  
例：

```html
<div class="section">
	<div class="slide" data-anchor="slide1"> Slide 1 </div>
	<div class="slide" data-anchor="slide2"> Slide 2 </div>
	<div class="slide" data-anchor="slide3"> Slide 3 </div>
	<div class="slide" data-anchor="slide4"> Slide 4 </div>
</div>
```
この場合、使用するURLは`#secondPage/slide3`で、前の`#secondPage/2`と同等です。

セクションアンカーも同様に定義でき、`anchors`配列が提供されていない場合は`data-anchor`属性を使用します。

**注意！** `data-anchor`タグの値は、サイト上の任意のID要素（またはIEのNAME要素）と同じ値を持つことはできません。

### 小さなセクションや大きなセクションの作成

[デモ](https://codepen.io/alvarotrigo/pen/BKjRYm) fullPage.jsはセクションやスライドのフルハイト制限(全画面制限)を解除する方法を提供します。  
これにより、ビューポートよりも小さいまたは大きいセクションを作成することが可能です。  
これはフッターに最適です。
すべてのセクションにこの機能を適用するのは適切ではありません。  
すべてのセクションに適用すると、サイトの初期読み込み時に複数のセクションがビューポート内に既に存在するため、fullPage.jsは次のセクションを見るためにうまくスクロールできないかもしれません。

フルハイト(全画面)を解除するには、`fp-auto-height`クラスを適用したいセクションに使用します。  
セクション/スライドのコンテンツによって定義された高さが適用されます。

```html
<div class="section">Whole viewport</div>
<div class="section fp-auto-height">Auto height</div>
```

#### レスポンシブオートハイトセクション
[デモ](https://codepen.io/alvarotrigo/pen/MzByMa) レスポンシブオートハイトは`fp-auto-height-responsive`クラスを使用して適用できます。  
レスポンシブモードが発動するまでセクションはフルスクリーンになります。  
レスポンシブモードが発動すると、コンテンツに必要なサイズとなります。

### fullpage.jsによって追加される状態クラス
fullpage.jsはサイトの表示状態を管理するために異なる要素に複数のCSSクラスを追加します。

- `active`は現在表示されているセクションとスライドに追加されます。
- `active`は現在のメニュー要素（`menu`オプションを使用している場合）に追加されます。
- `fp-loaded` は、メディアコンテンツの遅延読み込みをトリガーするセクションまたはスライドの要素に追加されます。
- `fp-viewing-SECTION-SLIDE`形式のクラスがサイトの`body`要素に追加されます。（例：[`fp-viewing-secondPage-0`](https://alvarotrigo.com/fullPage/#secondPage)）`SECTION`および`SLIDE`部分は現在のセクションおよびスライドのアンカー（またはアンカーが提供されていない場合はインデックス）です。
- レスポンシブモードに入ると`fp-responsive`が`body`要素に追加されます
- fullPage.jsが有効な場合`html`要素に`fp-enabled`が追加されます。（削除するとうまく動きません）。
- fullPage.jsが破棄されると`fp-destroyed`がfullpage.jsコンテナに追加されます。

### 遅延読み込み
[デモ](https://codepen.io/alvarotrigo/pen/eNLBXo) fullPage.jsは画像、動画、および音声要素の遅延読み込み(Lazy Loading)を提供し、サイト読み込みの低速化、不要なデータ転送を抑止可能です。  
遅延読み込みを使用する場合、要素がビューポートに入ったときにのみ読み込まれます。  
遅延読み込みを有効にするには、次のように`src`属性を`data-src`に変更するだけです。

```html
<img data-src="image.png">
<video>
	<source data-src="video.webm" type="video/webm" />
	<source data-src="video.mp4" type="video/mp4" />
</video>
 ```

すでに`data-src`を使用している他の遅延読み込みライブラリなどを使用している場合は、オプション`lazyLoading: false`を設定してfullPage.jsの遅延読み込みを無効にできます。

### 埋め込まれたメディアの自動再生/一時停止

[デモ](https://codepen.io/alvarotrigo/pen/pXEaaK) **注意**：自動再生機能は、OSやブラウザによっては一部のモバイルデバイスで動作しない場合があります（例：[iOSのSafari](https://webkit.org/blog/6784/new-video-policies-for-ios/)バージョン < 10.0）。

#### セクション/スライドの読み込み時に再生：
動画や音声に対して`autoplay`属性を使用するか、YouTubeのiframeに対して`autoplay=1`パラメータを使用すると、ページの読み込み時にメディア要素が再生されます。
セクション/スライドの読み込み時に再生するには、代わりに`data-autoplay`属性を使用します。  
例：

```html
<audio data-autoplay>
	<source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
</audio>
```

#### 離脱時の一時停止
埋め込まれたHTML5`<video>` / `<audio>`およびYouTubeのiframeは、セクションまたはスライドから離脱すると自動的に一時停止されます。  
これを無効にするには、`data-keepplaying`属性を使用します。  
例：

```html
<audio data-keepplaying>
	<source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
</audio>
```

### 拡張機能の使用
fullPage.jsはデフォルトの機能を強化するための[さまざまな拡張機能](https://alvarotrigo.com/fullPage/extensions/)を提供しています。  
すべての拡張機能は[fullpage.jsのオプション](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#オプション)にリストしています。

拡張機能を使用するには、通常のfullPage.jsファイル（`fullpage.js`または`fullpage.min.js`）の代わりに[`fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js)ファイルを使用する必要があります。

拡張機能ファイルを取得したら、fullPageの前に追加する必要があります。  
たとえば、Continuous Horizontal拡張機能を使用したい場合は、拡張機能ファイルを追加してから、拡張機能バージョンのfullPageファイルを追加します。

```html
<script type="text/javascript" src="fullpage.continuousHorizontal.min.js"></script>
<script type="text/javascript" src="fullpage/fullpage.extensions.min.js"></script>
```

各拡張機能にはアクティベーションキーとライセンスキーが必要です。[詳細についてはこちらをご覧ください](https://github.com/alvarotrigo/fullPage.js/wiki/How-to-activate-a-fullPage.js-extension)

その後、[オプション](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#オプション)で説明されているように、それらを使用および構成できます。

## オプション

### licenseKey
 
（デフォルト `null`）**このオプションは必須です。** fullPageを非オープンソースプロジェクトで使用する場合、fullPage商用ライセンスの購入時に提供されたライセンスキーを使用する必要があります。プロジェクトがオープンソースであり、GPLv3ライセンスと互換性がある場合、`gplv3-license`オプションを使用できます。ライセンスについての詳細は[こちら](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#ライセンス)および[ウェブサイト](https://alvarotrigo.com/fullPage/pricing/)をご覧ください。使用例：

```javascript
new fullpage('#fullpage', {
	licenseKey: 'あなたのキーをここに入力'
});
```

### controlArrows

（デフォルト `true`）スライドを右または左に移動するためのコントロール矢印を使用するかどうかを決定します。

### controlArrowsHTML

（デフォルト `['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'],`）
水平スライド用のコントロール矢印に適用するHTML構造およびクラスを定義する方法を提供します。配列には両方の矢印の構造が含まれます。最初のアイテムは左矢印で、2番目のアイテムは右矢印です。

### verticalCentered

（デフォルト `true`）フレックスボックスを使用してコンテンツを垂直方向に中央に配置します。潜在的な問題を避けるためにコンテンツを`div`でラップすることをお勧めします。（`flex-direction: column; display: flex; justify-content: center;`を使用します）

### scrollingSpeed

（デフォルト `700`）スクロールトランジションの速度（ミリ秒単位）。

### sectionsColor

（デフォルト `none`）各セクションのCSS `background-color`プロパティを定義します。  
例：

```javascript
new fullpage('#fullpage', {
	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});
```

### anchors

（デフォルト `[]`）各セクションのURLに表示されるアンカーリンク（#example）を定義します。  
アンカー値は一意である必要があります。 
配列内のアンカーの位置が、アンカーが適用されるセクションの位置と一致します。（2番目の位置は2番目のセクションに適用されるなど）。  
アンカーを使用することで、ブラウザの前後ナビゲーションも可能になり、ユーザーは特定のセクションやスライドをブックマークすることができます。  
**注意！** アンカーはサイト上の任意のID要素（またはIEのNAME要素）と同じ値を持つことはできません。
アンカーはHTML構造内で`data-anchor`属性を使用して直接定義することもできます。

### lockAnchors

（デフォルト `false`）URL内のアンカーがライブラリに影響を与えるかどうかを決定します。  
アンカーを内部で自分の関数やコールバックに使用できますが、サイトのスクロールには影響を与えません。  
他のプラグインとアンカーを組み合わせて使用する場合に便利です。

### easing

（デフォルト `easeInOutCubic`）縦および横のスクロールに使用するトランジション効果を定義します。  
一部の[トランジション](https://api.jqueryui.com/easings/)を使用するには、`vendors/easings.min.js`ファイルまたは[jQuery UI](https://jqueryui.com/)が必要です。  
他のライブラリを代わりに使用することもできます。

### easingcss3

（デフォルト `ease`）`css3:true`を使用する場合のトランジション効果を定義します。  
`linear`、`ease-out`などの[事前定義されたもの](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp)を使用するか、`cubic-bezier`関数を使用して独自のものを作成できます。  
[Matthew Lein CSS Easing Animation Tool](https://matthewlein.com/ceaser/)を使用することをお勧めします。

### loopTop

（デフォルト `false`）最初のセクションで上にスクロールすると最後のセクションにスクロールするかどうかを定義します。

### loopBottom

（デフォルト `false`）最後のセクションで下にスクロールすると最初のセクションにスクロールするかどうかを定義します。

### loopHorizontal

（デフォルト `true`）横向きのスライダーが最後または最初のスライドに達した後にループするかどうかを定義します。

### css3

（デフォルト `true`）セクションおよびスライド内でスクロールするためにJavaScriptまたはCSS3トランスフォームを使用するかどうかを定義します。  
タブレットやモバイルデバイスのブラウザでCSS3をサポートしている場合に動きを高速化するのに便利です。  
このオプションが`true`に設定されていてブラウザがCSS3をサポートしていない場合は、代替手段が使用されます。

### autoScrolling

（デフォルト `true`）"自動"スクロールを使用するか、"通常"のスクロールを使用するかを定義します。  
また、タブレットやモバイルデバイスでセクションがブラウザ/デバイスウィンドウにどのように適合するかにも影響します。

### fitToSection

（デフォルト `true`）セクションをビューポートに適合させるかどうかを決定します。  
`true`に設定すると、現在のアクティブなセクションは常にビューポート全体を埋めます。  
それ以外の場合、ユーザーはセクションの途中で止めることができます。

### fitToSectionDelay

（デフォルト `1000`）`fitToSection`が`true`に設定されている場合、設定されたミリ秒だけフィットを遅らせます。

### scrollBar

（デフォルト `false`）サイトの**縦方向のセクション**にスクロールバーを使用するかどうかを決定します。  
スクロールバーを使用する場合でも、`autoScrolling`機能は期待通りに動作します。 
ユーザーはスクロールバーを使用してサイトをスクロールでき、スクロールが終了するとfullPage.jsはセクションを画面にフィットさせます。

### paddingTop

（デフォルト `0`）各セクションのトップパディングを数値と単位で定義します。（例：paddingTop: '10px', paddingTop: '10em'）  
固定ヘッダーを使用する場合に便利です。

### paddingBottom

（デフォルト `0`）各セクションのボトムパディングを数値と単位で定義します。（例：paddingBottom: '10px', paddingBottom: '10em'）  
固定フッターを使用する場合に便利です。

### fixedElements

（デフォルト `null`）プラグインのスクロール構造から除外する要素を定義します。  
`css3`オプションを使用している場合に、これらの要素を固定する必要があります。  
これにはJavaScriptセレクターの文字列が必要です。（例：`fixedElements: '#element1, .element2'`）

### normalScrollElements

（デフォルト `null`）[デモ](https://codepen.io/alvarotrigo/pen/RmVazM) 一部の要素上で自動スクロールを避けたい場合に使用するオプションです。（マップ、スクロール可能なdivなどに便利）  
これにはJavaScriptセレクターの文字列が必要です。（例：`normalScrollElements: '#element1, .element2'`）  
このオプションはセクション/スライド要素自体に適用すべきではありません。

### bigSectionsDestination

（デフォルト `null`）[デモ](https://codepen.io/alvarotrigo/pen/vYLdMrx) `scrollOverflow:true`を使用していない場合、ビューポートよりも高さが大きいセクションにスクロールする方法を定義します。（[小さなセクションや大きなセクションの作成方法](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#小さなセクションや大きなセクションの作成)を参照）  
デフォルトでは、目的のセクションが上から来る場合は上部にスクロールし、下から来る場合は下部にスクロールします。  
可能な値は`top`、`bottom`、`null`です。

### adjustOnNavChange
（デフォルト `true`）
モバイルのナビゲーションバーやアドレスバーのサイズが変更されたり、表示/非表示が切り替わったときに、fullPage.jsがセクションの高さを調整するかどうかを定義します。`false` に設定すると、ナビゲーションバーが縮小または非表示になった際にセクションが全高で表示されなくなります。

### keyboardScrolling

（デフォルト `true`）キーボードを使用してコンテンツをナビゲートできるかどうかを定義します。

### touchSensitivity

（デフォルト `5`）ブラウザのウィンドウ幅/高さのパーセンテージを定義し、次のセクション/スライドに移動するためにスワイプがどの程度必要かを定義します。

### skipIntermediateItems
(デフォルト `false`)。非連続の垂直セクションまたは水平スライド間をナビゲートする際にスクロールアニメーションをスキップするかどうかを決定します。可能な値は `true`、`false`、`sections`、`slides` で、この動作を垂直方向、水平方向、または両方向に適用できます。

### continuousVertical

（デフォルト `false`）最後のセクションで下にスクロールすると最初のセクションにスクロールし、最初のセクションで上にスクロールすると最後のセクションにスクロールするかどうかを定義します。  
`loopTop`、`loopBottom`またはサイト内のスクロールバー（`scrollBar:true`または`autoScrolling:false`）と互換性はありません。

### continuousHorizontal

（デフォルト `false`）[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/)を参照してください。  
最後のスライドを右にスライドすると最初のスライドにスライドし、最初のスライドを左にスライドすると最後のスライドにスライドするかどうかを定義します。  `loopHorizontal`とは互換性がありません。fullpage.js >= 3.0.1が必要です。

### scrollHorizontally

（デフォルト `false`）[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/)を参照してください。  
マウスホイールやトラックパッドを使用してスライダー内を水平にスライドするかどうかを定義します。  
`autoScrolling:true`を使用する場合にのみ使用できます。  
ストーリーテリングデザインに最適です。fullpage.js >= 3.0.1が必要です。

### interlockedSlides

（デフォルト `false`）[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/)を参照してください。  
1つの水平スライダーを移動すると、他のセクション内のスライダーが同じ方向にスライドするかどうかを決定します。  
値は`true`、`false`、または相互ロックされたセクションの配列です。例：`[1,3,5]`（1から始まります）  
fullpage.js >= 3.0.1が必要です。

### dragAndMove

（デフォルト `false`）[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/)を参照してください。  
マウスや指を使用してセクションやスライドをドラッグおよびフリックする機能を有効または無効にします。  
fullpage.js >= 3.0.1が必要です。  

可能な値は次のとおりです。

  - `true`：機能を有効にします。
  - `false`：機能を無効にします。
  - `vertical`：垂直方向にのみ機能を有効にします。
  - `horizontal`：水平方向にのみ機能を有効にします。
  - `fingersonly`：タッチデバイスのみで機能を有効にします。
  - `mouseonly`：デスクトップデバイス（マウスとトラックパッド）でのみ機能を有効にします。

### offsetSections

（デフォルト `false`）[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/)を参照してください。  
パーセンテージに基づいてフルスクリーンでないセクションを使用する方法を提供します。  
次のセクションや前のセクションの一部を表示することで、訪問者に対してサイトに他のコンテンツがあることを示すのに理想的です。  
fullPage.js >= 3.0.1が必要です。
各セクションのパーセンテージを定義するには、`data-percentage`属性を使用する必要があります。  
ビューポート内のセクションの中央揃えは、`data-centered`属性でブール値を使用して決定できます。（指定されていない場合はデフォルトで`true`になります）

例：

``` html
<div class="section" data-percentage="80" data-centered="true">
```

### resetSliders

（デフォルト `false`）[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/)を参照してください。  
セクションを離れた後、各スライダーをリセットするかどうかを定義します。  
fullpage.js >= 3.0.1が必要です。

### fadingEffect

（デフォルト `false`）[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/)を参照してください。  
デフォルトのスクロール効果の代わりにフェード効果を使用するかどうかを定義します。  
指定可能な値は`true`、`false`、`sections`、`slides`です。  
縦方向または横方向にのみ適用することも、両方に同時に適用することもできます。  
`autoScrolling:true`を使用する場合にのみ使用できます。  
fullpage.js >= 3.0.1が必要です。

### animateAnchor

（デフォルト `true`）サイトの読み込み時にアンカー（#）が与えられると、アニメーションで目的地にスクロールするか、直接指定されたセクションに読み込むかを定義します。

### recordHistory

（デフォルト `true`）URLのハッシュ(アンカーリンクなど)変更ごとにサイトのURL履歴にプッシュするかどうかを定義します。

```javascript
fullpage_api.setRecordHistory(false);
```

### menu

（デフォルト `false`）セレクターを使用して、セクションとリンクさせるメニューを指定できます。  
この方法でセクションのスクロールに応じて、メニュー内の対応する要素に`active`クラスが追加されます。  
この機能はメニューを生成するのではなく、指定されたメニュー内の対応するアンカーリンクを持つ要素に`active`クラスをただ追加するだけです。  
メニューの要素をセクションとリンクさせるには、セクション内で使用するのと同じアンカーリンクを使用してHTML5のデータ属性 (`data-menuanchor`) が必要です。

例：

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

**Note:** メニュー要素は、`css3:true`を使用する際の問題を避けるために、fullpageラッパーの外側に配置する必要があります。そうしないと、プラグインによって `body`に自動的に追加されます。

### navigation

(デフォルト `false`) `true`に設定すると、小さな円で構成されたナビゲーションバー(バレットナビゲーション)が表示されます。

### navigationPosition

(デフォルト `none`) ナビゲーションバーの位置を定義します。  
`left`または`right`に設定することができます（ナビゲーションバーを使用する場合）

### navigationTooltips

（デフォルト []）ナビゲーションバーを使用する場合に表示するツールチップを定義します。  

例：`navigationTooltips: ['firstSlide', 'secondSlide']`。

また、各セクションで`data-tooltip`属性を使用して定義することもできます。

### showActiveTooltip

(デフォルト `false`) 縦のナビゲーションでアクティブに表示されているセクションに対して、持続的にツールチップを表示します。

### slidesNavigation

(デフォルト `false`) `true`に設定すると、各横向きスライダーに対して小さな円で構成されたナビゲーションバー(バレットナビゲーション)が表示されます。

### slidesNavPosition

(デフォルト `bottom`) スライダー用の横向きナビゲーションバーの位置を定義します。  
値として`top` と`bottom`を指定できます。  
また、CSSスタイルを変更して、上端または下端からの距離や色などのスタイルを調整することもできます。

### scrollOverflow

(デフォルト `true`) セクションやスライドのコンテンツがその高さを超える場合にスクロールを作成するかどうかを定義します。  
このオプションには`scrollBar: false`が必要です。  
特定のセクションやスライドでfullpage.jsがスクロールバーを作成しないようにするには、クラス`fp-noscroll`を使用します。

例えば: `<div class="section fp-noscroll">`

また、セクション要素に `fp-auto-height-responsive`を使用することで、レスポンシブモードで`scrolloverflow`が適用されるのを防ぐこともできます。

### scrollOverflowReset

(デフォルト `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/).  
可能な値は`true`、`false`、`sections`、`slides`です。  
`true`に設定すると、別のセクションやスライドに移動する際に、セクションやスライドのコンテンツがスクロールバーで上にスクロールされます。  
これにより、下のセクションからスクロールしても、セクションやスライドは常にコンテンツの先頭を表示します。  
セクションやスライドにクラス`fp-no-scrollOverflowReset`を追加すると、その特定のパネルに対してこの機能が無効になります。

### scrollOverflowMacStyle

(デフォルト `false`) 有効にすると、デフォルトのスクロールバーの代わりに「Macスタイル」のスクロールバーを使用します。Windowsではかなり異なって見えます。

### sectionSelector

(デフォルト `.section`) セクションに使用されるJavaScriptセレクターを変更できます。  
fullpage.jsと同じセレクターを使用する他のプラグインとの問題を避けるために、必要に応じて変更する必要があります。

### slideSelector

(デフォルト `.slide`) スライドに使用されるJavaScriptセレクターを変更できます。  
fullpage.jsと同じセレクターを使用する他のプラグインとの問題を避けるために、必要に応じて変更する必要があります。

### responsiveWidth

(デフォルト `0`) 定義されたピクセル幅以下の場合、通常のスクロール（`autoScrolling:false`）が使用されます。  
ユーザーが独自のレスポンシブCSSに使用したい場合、`fp-responsive`クラスがbodyタグに追加されます。  
例えば、900に設定すると、ブラウザの幅が900未満の場合、fullpage.jsは通常のサイトのようにスクロールを表示します。

### responsiveHeight

(デフォルト `0`) 定義されたピクセル高さ以下の場合、通常のスクロール（`autoScrolling:false`）が使用されます。  
ユーザーが独自のレスポンシブCSSに使用したい場合、`fp-responsive`クラスがbodyタグに追加されます。  
例えば、900に設定すると、ブラウザの高さが900未満の場合、プラグインは通常のサイトのようにスクロールします。

### responsiveSlides

(デフォルト `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/) `true`に設定すると、レスポンシブモードが有効になったとき（上記の `responsiveWidth`または`responsiveHeight`オプションを使用）、スライドが縦方向のセクションに変わります。  
fullpage.js >= 3.0.1が必要です。

### effects
（デフォルト：`false`）[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/slider-effects.html)。セクションにスライダー効果を有効または無効にします。fullpage.js >= 4.0.35 が必要です。

### effectsOptions
（デフォルト：`{Object}`、["focus" プリセット](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-%22Effects%22#available-presets)の設定）。  
`effects:true` オプションを使うときに、効果のパラメータを設定できます。  
[effects オプションの適用方法について詳しくはこちら](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-%22Effects%22#effects-options-documentation)

### parallax

(デフォルト `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/). セクションやスライドにパララックス背景効果を使用するかどうかを指定します。 [パララックスオプションの適用方法について詳しく読む](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax)

### parallaxOptions

(デフォルト `{ type: 'reveal', percentage: 62, property: 'translate'}`) オプション`parallax:true` を使用する場合、パララックス背景効果のパラメーターを設定できます。 [パララックスオプションの適用方法について詳しく読む](https://github.com/alvarotrigo/fullPage.js/wiki/Extension---Parallax)

### dropEffect

(デフォルト `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/) セクションやスライドにドロップ効果を使用するかどうかを指定します。 [ドロップ効果オプションの適用方法について詳しく読む](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Drop-Effect)

### dropEffectOptions

(デフォルト `{ speed: 2300, color: '#F82F4D', zIndex: 9999}`) オプション`dropEffect: true`を使用する場合、ドロップ効果のパラメーターを設定できます。[ドロップ効果オプションの適用方法について詳しく読む](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Drop-Effect)

### waterEffect

(デフォルト `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/) セクションやスライドにウォーター効果を使用するかどうかを定義します。[ウォーター効果オプションの適用方法について詳しく読む](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Water-Effect)

### waterEffectOptions

(デフォルト `{ animateContent: true, animateOnMouseMove: true}`) オプション`waterEffect: true`を使用する場合、ウォーター効果のパラメーターを設定できます。[ウォーター効果オプションの適用方法について詳しく読む](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Water-Effect)

### cards

(デフォルト `false`) [Extension of fullpage.js](https://alvarotrigo.com/fullPage/extensions/) セクションやスライドにカード効果を使用するかどうかを指定します。 [カード効果オプションの適用方法について詳しく読む](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards)

### lazyLoading

(デフォルト `true`) 遅延読み込みはデフォルトで有効になっており、`data-src`属性を含むすべてのメディア要素が遅延読み込みされます。  
詳細は遅延読み込みドキュメントをご覧ください。 [遅延読み込み](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#遅延読み込み)  
他の遅延読み込みライブラリを使用したい場合は、このfullpage.js機能を無効にすることができます。

### lazyLoadThreshold
（デフォルト `0`）現在のセクションに対して、隣接する垂直セクションと水平スライドのメディア要素を遅延読み込みする数を指定します。前後のセクションやスライドを何個プリロードするかを数値で指定してください。

### cardsOptions

(デフォルト: `{ perspective: 100, fadeContent: true, fadeBackground: true}`) オプション`cards: true`を使用する場合、カード効果のパラメーターを設定できます。[カードオプションの適用方法について詳しく読む](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards)

### observer

(デフォルト `true`) ページのHTML構造の変更を監視するかどうかを指定します。  
有効にすると、fullPage.jsは変更に自動的に反応し、適宜更新します。  
セクションやスライドの追加、削除、非表示にする場合に最適です。

### credits

(デフォルト `{enabled: true, label: 'Made with fullpage.js', position: 'right'}`) fullPage.jsのクレジット表記をするかどうかを指定します。  
GPLv3ライセンスの条項0、4、5、および7に従い、GPLv3の下でfullPage.jsを使用する場合は、fullPage.jsが使用されていることを目立つ形で表記する必要があります。  
このオプションを有効にして、アトリビューション（帰属表示）を含めることをお勧めします。 **注意:** このオプションには、有効な `licenseKey` 値が必要です。

## Methods
各種提供しているメソッドについて説明します。 [メソッドについて](https://alvarotrigo.com/fullPage/examples/methods.html)

### getActiveSection()
[デモ](https://codepen.io/alvarotrigo/pen/VdpzRN/) アクティブなセクションのオブジェクトを取得します。(type [Section](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#コールバック)) 

```javascript
fullpage_api.getActiveSection();
```

### getActiveSlide()
[デモ](https://codepen.io/alvarotrigo/pen/VdpzRN/) アクティブなスライドのオブジェクトを取得します。(type [Slide](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#コールバック))

```javascript
fullpage_api.getActiveSlide();
```

### getScrollY() & getScrollX
[デモ](https://codepen.io/alvarotrigo/pen/GRyGqro) `getScrollY`はfullPageラッパーのy座標を取得します。  
`getScrollX`はアクティブな横方向スライドのx座標を取得します。

```javascript
fullpage_api.getScrollY();
fullpage_api.getScrollX();
```

### moveSectionUp()
[デモ](https://codepen.io/alvarotrigo/pen/GJXNMN) 一つ上のセクションにスクロールします。
```javascript
fullpage_api.moveSectionUp();
```
---
### moveSectionDown()
[デモ](https://codepen.io/alvarotrigo/pen/jPvVZx) 一つ下のセクションにスクロールします。
```javascript
fullpage_api.moveSectionDown();
```
---
### moveTo(section, slide)
[デモ](https://codepen.io/alvarotrigo/pen/doqOmY) 指定されたセクションとスライドにスクロールします。  
最初のセクションはインデックス1から始まります。  
最初のスライド（デフォルトで表示されるスライド）はインデックス0から始まります。
```javascript
/* アンカーリンク firstSlide のセクションにスクロールし、2番目のスライドに移動します。*/
fullpage_api.moveTo('firstSlide', 2);

```

```javascript
//サイト内の3番目のセクション（インデックス3）にスクロールします。
fullpage_api.moveTo(3, 0);

//下記のように指定も可能です。
fullpage_api.moveTo(3);
```
---
### silentMoveTo(section, slide)
[デモ](https://codepen.io/alvarotrigo/pen/doqOeY) 機能としては[`moveTo`](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese#movetosection-slide) と同じですが、アニメーションなしでスクロールを実行します。目的地への直接ジャンプです。
```javascript
/* アンカーリンク firstSlide のセクションにスクロールし、2番目のスライドに移動します。 */
fullpage_api.silentMoveTo('firstSlide', 2);
```
---
### moveSlideRight()
[デモ](https://codepen.io/alvarotrigo/pen/Wvgoyz)  現在のセクションの横方向スライダーを次のスライドにスクロールします。
```javascript
fullpage_api.moveSlideRight();
```
---
### moveSlideLeft()
[デモ](https://codepen.io/alvarotrigo/pen/gpdLjW)  現在のセクションの横方向スライダーを前のスライドにスクロールします。
```javascript
fullpage_api.moveSlideLeft();
```
---
### setAutoScrolling(boolean)
[デモ](https://codepen.io/alvarotrigo/pen/rVZWrR) スクロール設定をリアルタイムで設定します。  
ページのスクロールの動作を定義します。  
`true`に設定すると、「自動」スクロールを使用し、それ以外の場合はサイトの「手動」または「通常」スクロールを使用します

```javascript
fullpage_api.setAutoScrolling(false);
```
---
### setFitToSection(boolean)
[デモ](https://codepen.io/alvarotrigo/pen/GJXNYm) オプション `fitToSection`の値を変更し、セクションを画面にフィットさせるかどうかを決定します。

```javascript
fullpage_api.setFitToSection(false);
```
---
### fitToSection()
[デモ](https://codepen.io/alvarotrigo/pen/JWWagj) 画面表示上、最も近いアクティブなセクションにスクロールし、それをビューポートにフィットさせます。

```javascript
fullpage_api.fitToSection();
```
---
### setLockAnchors(boolean)
[デモ](https://codepen.io/alvarotrigo/pen/yNxVRQ) オプション`lockAnchors`の値を変更し、アンカーがURLに影響を与えるかどうかを決定します。

```javascript
fullpage_api.setLockAnchors(false);
```
---
### setAllowScrolling(boolean, [directions])
[デモ](https://codepen.io/alvarotrigo/pen/EjeNdq) マウスホイール/トラックパッドやタッチジェスチャーを使用してセクション/スライドをスクロールする機能を追加または削除します（デフォルトでは有効）。  
なお、このメソッドではキーボードスクロールは無効になりません。キーボードの設定には`setKeyboardScrolling`を使用する必要があります。

- `directions`: (任意の引数です) 許容される値: `all`, `up`, `down`, `left`, `right` または、`down, right`のようにコンマで区切った組み合わせ。スクロールを有効または無効にする方向を定義します。

```javascript

//スクロールを無効化
fullpage_api.setAllowScrolling(false);

//下スクロールを無効化
fullpage_api.setAllowScrolling(false, 'down');

//下方向・右方向スクロールを無効化
fullpage_api.setAllowScrolling(false, 'down, right');
```
---
### setKeyboardScrolling(boolean, [directions])
[デモ](https://codepen.io/alvarotrigo/pen/GJXNwm) キーボードを使用してセクションをスクロールする機能を追加または削除します。（デフォルトで有効）

- `directions`: (任意の引数です) 許容される値: `all`, `up`, `down`, `left`, `right` または、`down, right`のようにコンマで区切った組み合わせ。スクロールを有効または無効にする方向を定義します。

```javascript
//スクロールを無効化
fullpage_api.setKeyboardScrolling(false);

//下スクロールを無効化
fullpage_api.setKeyboardScrolling(false, 'down');

//下方向・右方向スクロールを無効化
fullpage_api.setKeyboardScrolling(false, 'down, right');
```
---
### setRecordHistory(boolean)
[デモ](https://codepen.io/alvarotrigo/pen/rVZWQb) 各URL変更の履歴をブラウザのURL履歴にプッシュするかどうかを定義します。

```javascript
fullpage_api.setRecordHistory(false);
```
---
### setScrollingSpeed(milliseconds)
[デモ](https://codepen.io/alvarotrigo/pen/NqLbeY) スクロール速度をミリ秒単位で定義します。

```javascript
fullpage_api.setScrollingSpeed(700);
```
---
### destroy(type)
[デモ](https://codepen.io/alvarotrigo/pen/bdxBzv) fullpage.jsのイベントを削除します。  
また、オプションでHTMLマークアップとスタイルを削除できます。  
AJAXを使用してコンテンツを読み込む際に有用です。

- `type`：（オプションのパラメータ）空または`all`に指定できます。`all`が指定されると、fullpage.jsが使用したHTMLマークアップとスタイルが削除されます。これにより、fullpage.jsによる変更前の元のHTMLマークアップに戻ります。

```javascript
//fullPage.jsが作成したすべてのJavaScriptイベント（スクロール、URLのハッシュ変更など）を破壊
fullpage_api.destroy();

//すべてのJavaScriptイベントと、fullPage.jsが元のHTMLマークアップに対して行った変更を破壊
fullpage_api.destroy('all');
```
---
### reBuild()
DOM構造を更新して新しいウィンドウサイズまたはそのコンテンツに適合させます。  
AJAX呼び出しやサイトのDOM構造の外部変更と組み合わせて使用するのに適しています。  
特に`scrollOverflow:true`を使用している場合などです。

```javascript
fullpage_api.reBuild();
```
---
### setResponsive(boolean)
[デモ](https://codepen.io/alvarotrigo/pen/WxOyLA) ページのレスポンシブモードを設定します。  
`true`に設定すると、autoScrollingがオフになり、`responsiveWidth`または`responsiveHeight`オプションが発動したときと同じ結果になります。
```javascript
fullpage_api.setResponsive(true);
```
---
### responsiveSlides.toSections()
[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/)。fullpage.js >= 3.0.1が必要です。
水平スライドを垂直セクションに変換します。

```javascript
fullpage_api.responsiveSlides.toSections();
```
---
### responsiveSlides.toSlides()
[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/)。fullpage.js >= 3.0.1が必要です。
スライド（垂直セクションに変換されたスライド）を再び水平スライドに戻します。

```javascript
fullpage_api.responsiveSlides.toSlides();
```

## コールバック(Callbacks)
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) こちらで動作を確認できます：[コールバックの例](https://alvarotrigo.com/fullPage/examples/callbacks.html)

一部のコールバック（例：`onLeave`）には、次のプロパティを含むオブジェクト型のパラメータが引数として渡されます。

- `anchor`：*(String)* アイテムのアンカー。
- `index`：*(Number)* アイテムのインデックス。
- `item`：*(DOM element)* アイテム要素。
- `isFirst`：*(Boolean)* アイテムが最初の子かどうかを決定します。
- `isLast`：*(Boolean)* アイテムが最後の子かどうかを決定します。

### afterLoad (`origin`, `destination`, `direction`, `trigger`)
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) セクションが読み込まれ、スクロールが終了した後に発火するコールバック。  
パラメータ：

- `origin`：*(Object)* 移動元(イベント発火元)のセクション。
- `destination`：*(Object)* 移動先(イベント発火後)のセクション。
- `direction`：*(String)* スクロール方向に応じて`up`または`down`の値を取ります。
- `trigger`：*(String)* スクロールをトリガーしたアクションを示します。可能な値は："wheel"、"keydown"、"menu"、"slideArrow"、"verticalNav"、"horizontalNav"です。

例：

```javascript
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterLoad: function(origin, destination, direction, trigger){
		var origin = this;

		//インデックスを使用
		if(origin.index == 2){
			alert("セクション3の読み込みが終了しました");
		}

		//アンカーリンクを使用
		if(origin.anchor == 'secondSlide'){
			alert("セクション2の読み込みが終了しました");
		}
	}
});
```

---
### onLeave (`origin`, `destination`, `direction`, `trigger`)
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) ユーザーがセクションを離れて新しいセクションに移動するときに発生するコールバック。  
戻り値が`false`の場合、移動はキャンセルされます。

パラメータ：

- `origin`：*(Object)* 移動元(イベント発火元)のセクション。
- `destination`：*(Object)* 移動先(イベント発火後)のセクション。
- `direction`：*(String)* スクロール方向に応じて`up`または`down`の値を取ります。
- `trigger`：*(String)* スクロールをトリガーしたものを示します。可能な値は："wheel"、"keydown"、"menu"、"slideArrow"、"verticalNav"、"horizontalNav"です。

例：

```javascript
new fullpage('#fullpage', {
	onLeave: function(origin, destination, direction, trigger){
		var leavingSection = this;

		//セクション2を離れた後
		if(origin.index == 1 && direction =='down'){
			alert("セクション3に移動します！");
		}

		else if(origin.index == 1 && direction == 'up'){
			alert("セクション1に移動します！");
		}
	}
});
```


---
### beforeLeave (`origin`, `destination`, `direction`, `trigger`)
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) セクションを離れる直前、トランジションが行われる前に発生するコールバック。

スクロールが発生する前にキャンセルするには、このコールバックを使用して`false`を返すことで実現できます。

パラメータ：

- `origin`：*(Object)* 移動元(イベント発火元)のセクション。
- `destination`：*(Object)* 移動先(イベント発火後)のセクション。
- `direction`：*(String)* スクロール方向に応じて`up`または`down`の値を取ります。
- `trigger`：*(String)* スクロールをトリガーしたものを示します。可能な値は："wheel"、"keydown"、"menu"、"slideArrow"、"verticalNav"、"horizontalNav"です。

例：

```javascript

var cont = 0;
new fullpage('#fullpage', {
	beforeLeave: function(origin, destination, direction, trigger){

		// 4回スクロールするまでスクロールを防ぎます
		cont++;
		return cont === 4;
	}
});
```

---
### afterRender()
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) ページのDOM構造が生成された直後に発火するコールバック。  
このコールバックは、他のプラグインの初期化、DOM構造を必要とするコードを実行するために使用します（このプラグインは結果として構造を作成するためにDOMを変更します）。  
詳細は[FAQ](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)を参照してください。

例：

```javascript
new fullpage('#fullpage', {
	afterRender: function(){
		var pluginContainer = this;
		alert("DOM構造が生成されました);
	}
});
```
---
### afterResize(`width`, `height`)
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) ブラウザのウィンドウサイズが変更された後、セクションがリサイズされた直後に発火するコールバック。

パラメータ：

- `width`：*(Number)* ウィンドウの幅。
- `height`：*(Number)* ウィンドウの高さ。

例：

```javascript
new fullpage('#fullpage', {
	afterResize: function(width, height){
		var fullpageContainer = this;
		alert("セクションのリサイズが完了しました");
	}
});
```
---
### afterReBuild()
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) `fullpage_api.reBuild()`を呼び出してfullpage.jsを手動で再構築した後に発火するコールバック。

例：

```javascript
new fullpage('#fullpage', {
	afterReBuild: function(){
		console.log("fullPage.js が手動で再構築されました");
	}
});
```
---
### afterResponsive(`isResponsive`)
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) fullpage.jsが通常モードからレスポンシブモードに切り替わった後、またはレスポンシブモードから通常モードに戻った後に発火するコールバック。

パラメータ：

- `isResponsive`：*(Boolean)* レスポンシブモードに入る場合は`true`、通常モードに戻る場合は`false`を示します。

例：

```javascript
new fullpage('#fullpage', {
	afterResponsive: function(isResponsive){
		alert("レスポンシブモードか？: " + isResponsive);
	}
});
```
---
### afterSlideLoad (`section`, `origin`, `destination`, `direction`, `trigger`)
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) セクションのスライドが読み込まれ、スクロールが終了した後に発火するコールバック。

パラメータ：

- `section`：*(Object)* アクティブな縦方向のセクション。
- `origin`：*(Object)* 移動元の水平スライド。
- `destination`：*(Object)* 移動後の水平スライド。
- `direction`：*(String)* スクロール方向に応じて`right`または`left`の値を取ります。
- `trigger`：*(String)* スクロールをトリガーしたアクションを示します。可能な値は："wheel"、"keydown"、"menu"、"slideArrow"、"verticalNav"、"horizontalNav"です。

例：

```javascript
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterSlideLoad: function( section, origin, destination, direction, trigger){
		var loadedSlide = this;

		//セクション2の最初のスライド
		if(section.anchor == 'secondPage' && destination.index == 1){
			alert("最初のスライドが読み込まれました");
		}

		//セクション2の2番目のスライド（#secondSlideが2番目のスライドのアンカーであると仮定します）
		if(section.index == 1 && destination.anchor == 'secondSlide'){
			alert("2番目のスライドが読み込まれました");
		}
	}
});
```


---
### onSlideLeave (`section`, `origin`, `destination`, `direction`, `trigger`)
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) ユーザーがスライドを離れて別のスライドに移動する際に発生するコールバック。  
戻り値が`false`の場合、移動はキャンセルされます。

パラメータ：

- `section`：*(Object)* アクティブな縦方向のセクション。
- `origin`：*(Object)* 移動元の水平スライド。
- `destination`：*(Object)* 移動後の水平スライド。
- `direction`：*(String)* スクロール方向に応じて`right`または`left`の値を取ります。
- `trigger`：*(String)* スクロールをトリガーしたものを示します。可能な値は："wheel"、"keydown"、"menu"、"slideArrow"、"verticalNav"、"horizontalNav"です。

例：

```javascript
new fullpage('#fullpage', {
	onSlideLeave: function( section, origin, destination, direction, trigger){
		var leavingSlide = this;

		//セクション2の最初のスライドから右に移動する
		if(section.index == 1 && origin.index == 0 && direction == 'right'){
			alert("最初のスライドを離れる!");
		}

		//セクション2の3番目のスライドから左に移動する
		if(section.index == 1 && origin.index == 2 && direction == 'left'){
			alert("スライド 2 に移動中!");
		}
	}
});
```

#### 移動が発生する前にキャンセルする
`onSlideLeave`コールバックで`false`を返すことで移動をキャンセルできます。[`onLeave`](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#cancelling-the-scroll-before-it-takes-place)での移動をキャンセル場合と同様の挙動です。


---
### onScrollOverflow (`section`, `slide`, `position`, `direction`)
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) `scrollOverflow: true`オプションを使用している場合に、スクロール可能なセクション内でスクロールすると発火するコールバック。

パラメータ：

- `section`：*(Object)* アクティブな縦方向のセクション。
- `slide`：*(Object)* 発火元の水平スライド。
- `position`：*(Integer)* セクション/スライド内でのスクロール量。0から始まります。
- `direction`：*(String)* `up`または`down`

例：

```javascript
new fullpage('#fullpage', {
	onScrollOverflow: function( section, slide, position, direction){
		console.log(section);
		console.log("位置: " + position);
	}
});
```

# 問題の報告
1. 質問する前にGithubの全Issueを検索して確認してください。
2. 最新のfullpage.jsバージョンを使用していることを確認してください。古いバージョンにはサポートが提供されません。
3. [GitHub Issuesフォーラム](https://github.com/alvarotrigo/fullPage.js/issues)を使用して問題を作成します。
4. **問題だけにフォーカスした再現が必要です。** 可能であれば[jsfiddle](https://jsfiddle.net/alvarotrigo/ea17skjr/)や[codepen](https://codepen.io/alvarotrigo/pen/qqabrp)を使用してください。

# fullpage.jsへの貢献
[fullpage.jsへの貢献](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)をご覧ください。

# 変更履歴
最近の変更については、[リリースセクション](https://github.com/alvarotrigo/fullPage.js/releases)を参照してください。

# ビルドタスク
fullpage.jsの配布ファイルをビルドしたい場合は、[ビルドタスク](https://github.com/alvarotrigo/fullPage.js/wiki/Build-tasks)をご覧ください。

# リソース
- Gutenberg用[Wordpressプラグイン](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/)およびElementor用[Wordpressプラグイン](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)。
- [Wordpressテーマ](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [公式Vue.jsラッパーコンポーネント](https://github.com/alvarotrigo/vue-fullpage.js)
- [公式React.jsラッパーコンポーネント](https://github.com/alvarotrigo/react-fullpage)
- [公式Angularラッパーコンポーネント](https://github.com/alvarotrigo/angular-fullpage)
- [CSS Easing Animation Tool - Matthew Lein](https://matthewlein.com/ceaser/)（`easingcss3`値の定義に便利）
- [fullPage.js jsDelivr CDN](https://www.jsdelivr.com/package/npm/fullpage.js)
- [fullPage.jsプラグイン for October CMS](https://github.com/freestream/oc-parallax-plugin)
- [fullPage.js Angular2ディレクティブ](https://github.com/meiblorn/ng2-fullpage)
- [fullPage.js angularディレクティブ](https://github.com/hellsan631/angular-fullpage.js)
- [fullPage.js ember-cliアドオン](https://www.npmjs.com/package/ember-cli-fullpagejs)
- [fullPage.js Rails Ruby Gem](https://rubygems.org/gems/fullpagejs-rails)
- [Angular fullPage.js - Angular.js v1.x用の適応](https://github.com/mmautomatizacion/angular-fullpage.js)
- [fullPage.jsとWordpressの統合方法（チュートリアル）](https://premium.wpmudev.org/blog/build-apple-inspired-full-page-scrolling-pages-for-your-wordpress-site/)
- [Divi用Wordpressプラグイン](https://alvarotrigo.com/fullPage/wordpress-plugin-divi/)
- [Elementor用Wordpressプラグイン](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)

## fullPage.jsを使用しているサイト

![fullPage.jsを使用しているサイト](https://cdn.jsdelivr.net/gh/alvarotrigo/fullpage-assets/imgs/using-fullpage.png)

- http://www.bbc.co.uk/news/resources/idt-d88680d1-26f2-4863-be95-83298fd01e02
- http://medoff.ua/en/
- http://promo.prestigio.com/grace1/
- http://torchbrowser.com/
- http://www.boxreload.com/
- http://boxx.hk/
- http://www.villareginateodolinda.it

## 寄付
寄付は大歓迎です :)

[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## スポンサー
スポンサーになって、GitHub の README にあなたのロゴを掲載し、サイトへのリンクを追加しましょう。[[お問い合わせ](https://alvarotrigo.com/#contact)] | [[Patreon になる]](https://www.patreon.com/fullpagejs) | [GitHub スポンサーになる](https://github.com/sponsors/alvarotrigo/dashboard)


[![LambdaTest](https://cdn.jsdelivr.net/gh/alvarotrigo/fullpage-assets/imgs/sponsors/lambdatest.png)](https://www.lambdatest.com/)
[![Codeless](https://cdn.jsdelivr.net/gh/alvarotrigo/fullpage-assets/imgs/sponsors/codeless.png)](https://codeless.co)
[![Stackpath](https://cdn.jsdelivr.net/gh/alvarotrigo/fullpage-assets/imgs/sponsors/stackpath3.png)](https://www.stackpath.com/)
[![Browserstack](https://cdn.jsdelivr.net/gh/alvarotrigo/fullpage-assets/imgs/sponsors/browserstack3.png)](http://www.browserstack.com/)
[![CodePen](https://cdn.jsdelivr.net/gh/alvarotrigo/fullpage-assets/imgs/sponsors/codepen3.png)](https://codepen.com)

### People
<a href="https://github.com/donsalvadori" target="_blank" rel="nofollow">
	<img src="http://wallpapers-for-ipad.com/fullpage/imgs3/avatars/donsalvadori.jpg">
</a>

## 貢献してくださった方々

<a href="https://github.com/alvarotrigo/fullPage.js/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=alvarotrigo/fullPage.js&max=400&columns=25&anon=1&v=2" />
</a>

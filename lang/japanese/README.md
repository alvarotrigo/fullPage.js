```markdown
# fullPage.js
![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.png)

<p align="center">
  <span>English</span> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish#fullpagejs">Español</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#fullpagejs">Français</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#fullpagejs">Pусский</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese#fullpagejs">中文</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs">한국어</a> | 
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese#fullpagejs">日本語</a> | 
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese#fullpagejs">Português Brasileiro</a>
</p>

<p align="center">
	Available for <a href="https://github.com/alvarotrigo/vue-fullpage.js">Vue</a>, <a href="https://github.com/alvarotrigo/react-fullpage">React</a> and <a href="https://github.com/alvarotrigo/angular-fullpage">Angular</a>.
</p>

---

![fullPage.js version](https://img.shields.io/badge/fullPage.js-v4.0.25-brightgreen.svg)
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

シンプルで使いやすいライブラリで、フルスクリーンのスクロールサイト（シングルページウェブサイトまたはワンページサイトとも呼ばれる）を作成し、サイトのセクション内に横向きのスライダーを追加します。

- [はじめに](https://github.com/alvarotrigo/fullPage.js#introduction)
- [互換性](https://github.com/alvarotrigo/fullPage.js#compatibility)
- [ライセンス](https://github.com/alvarotrigo/fullPage.js#license)
- [使用方法](https://github.com/alvarotrigo/fullPage.js#usage)
  - [セクションやスライドへのリンク作成](https://github.com/alvarotrigo/fullPage.js#creating-links-to-sections-or-slides)
  - [小さなセクションや大きなセクションの作成](https://github.com/alvarotrigo/fullPage.js#creating-smaller-or-bigger-sections)
  - [fullpage.jsによって追加される状態クラス](https://github.com/alvarotrigo/fullPage.js#state-classes-added-by-fullpagejs)
  - [遅延読み込み](https://github.com/alvarotrigo/fullPage.js#lazy-loading)
  - [埋め込まれたメディアの自動再生/一時停止](https://github.com/alvarotrigo/fullPage.js#auto-playpause-embedded-media)
  - [拡張機能の使用](https://github.com/alvarotrigo/fullPage.js#use-extensions)
- [オプション](https://github.com/alvarotrigo/fullPage.js#options)
- [メソッド](https://github.com/alvarotrigo/fullPage.js#methods)
- [コールバック](https://github.com/alvarotrigo/fullPage.js#callbacks)
- [問題の報告](https://github.com/alvarotrigo/fullPage.js#reporting-issues)
- [fullpage.jsへの貢献](https://github.com/alvarotrigo/fullPage.js#contributing-to-fullpagejs)
- [変更履歴](https://github.com/alvarotrigo/fullPage.js#changelog)
- [ビルドタスク](https://github.com/alvarotrigo/fullPage.js#build-tasks)
- [リソース](https://github.com/alvarotrigo/fullPage.js#resources)
- [fullpage.jsを使用しているサイト](https://github.com/alvarotrigo/fullPage.js#who-is-using-fullpagejs)
- [寄付](https://github.com/alvarotrigo/fullPage.js#donations)
- [スポンサー](https://github.com/alvarotrigo/fullPage.js#sponsors)

## はじめに
機能の要望だけでなく、コーディングスタイルの改善についても提案を歓迎します。
皆さんの生活をより簡単にするための素晴らしいライブラリにしましょう！

## 互換性
fullPage.jsはすべての最新ブラウザおよびIE 11で完全に機能します。IE < 11をサポートする必要がある場合は、[fullPage.js v3](https://github.com/alvarotrigo/fullPage.js/tree/3.1.2)を使用してください。
また、モバイルフォン、タブレット、タッチスクリーンコンピュータ向けのタッチサポートも提供しています。

fullpage.jsをサポートしてくれる[Browserstack](https://www.browserstack.com/)に特別な感謝を捧げます。

## ライセンス

### 商用ライセンス
fullPageを使用して非オープンソースのサイト、テーマ、プロジェクト、アプリケーションを開発したい場合は、商用ライセンスが適しています。このオプションでは、ソースコードはプロプライエタリとして保持されます。つまり、アプリケーションの全ソースコードをオープンソースライセンスに変更する必要はありません。[[Fullpage商用ライセンスの購入]](https://alvarotrigo.com/fullPage/pricing/)

### オープンソースライセンス
GNU GPL v3ライセンスと互換性のあるオープンソースアプリケーションを作成している場合は、GPLv3の条件に基づいてfullPageを使用することができます。

**fullPage.jsが使用されていることを明示的に示す必要があります。JavaScriptおよびCSSファイルのクレジットコメントはそのまま残してください**（組み合わせや最適化後も）。

[fullPageのライセンスについて詳しく読む](https://alvarotrigo.com/fullPage/pricing/)。

## 使用方法
例のファイルでわかるように、以下を含める必要があります：
 - JavaScriptファイル `fullpage.js`（またはその最小化バージョン `fullpage.min.js`）
 - CSSファイル `fullpage.css`

 **オプション**、`css3:false`を使用する場合、ライブラリに含まれているイージング効果（`easeInOutCubic`）以外の効果を使用したい場合は、[easingsファイル](https://github.com/alvarotrigo/fullPage.js/tree/master/vendors/easings.min.js)を追加できます。

### bowerまたはnpmを使用してインストール
**オプション**、必要に応じてfullPage.jsをbowerまたはnpmでインストールできます：

ターミナル：
```shell
// bowerを使用
bower install fullpage.js

// npmを使用
npm install fullpage.js
```

### ファイルのインクルード
```html
<link

 rel="stylesheet" type="text/css" href="fullpage.css" />

<!-- 次の行はオプションです。css3:falseオプションを使用し、"easeInOutCubic"以外のイージング効果を使用したい場合にのみ必要です。 -->
<script src="vendors/easings.min.js"></script>

<script type="text/javascript" src="fullpage.js"></script>
```

Webpack、Browserify、またはRequire.jsを使用していますか？[モジュールローダーを使用したfullPage.jsの使い方](https://github.com/alvarotrigo/fullPage.js/wiki/Use-module-loaders-for-fullPage.js)を確認してください。

### オプションでCDNの使用
必要なファイルを読み込むためにCDNを使用することを希望する場合、fullPage.jsはCDNJSにあります：
https://cdnjs.com/libraries/fullPage.js

### 必須HTML構造
HTML文書をHTMLの[DOCTYPE宣言](https://www.corelangs.com/html/introduction/doctype.html)で始めます。そうしないと、セクションの高さに問題が発生する可能性があります。提供された例ではHTML 5のDOCTYPE `<!DOCTYPE html>`を使用しています。

各セクションは`section`クラスを含む要素で定義されます。
デフォルトでアクティブなセクションは最初のセクションで、これはホームページと見なされます。

セクションはラッパー（この場合は`<div id="fullpage">`）内に配置する必要があります。ラッパーは`body`要素にはできません。

```html
<div id="fullpage">
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
</div>
```

最初のセクションやセクションの最初のスライド以外の場所から開始する場合は、クラス`active`を読み込みたいセクションとスライドに追加します。

```html
<div class="section active">Some section</div>
```

セクション内に横向きのスライダーを作成するには、各スライドはデフォルトで`slide`クラスを含む要素で定義されます：

```html
<div class="section">
	<div class="slide"> Slide 1 </div>
	<div class="slide"> Slide 2 </div>
	<div class="slide"> Slide 3 </div>
	<div class="slide"> Slide 4 </div>
</div>
```

HTML構造の完全な例は[`simple.html`ファイル](https://github.com/alvarotrigo/fullPage.js/blob/master/examples/simple.html)で確認できます。

### 初期化

#### Vanilla Javascriptでの初期化
閉じる`</body>`タグの前にfullPage.jsを呼び出すだけです。

```javascript
new fullpage('#fullpage', {
	//オプションはここに
	autoScrolling:true,
	scrollHorizontally: true
});
```

#### jQueryでの初期化
fullpage.jsをjQueryプラグインとして使用することもできます！

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		//オプションはここに
		autoScrolling:true,
		scrollHorizontally: true
	});

	// fullpage.jsメソッドの使用例
	$.fn.fullpage.setAllowScrolling(false);
});
```

#### すべてのオプションを設定したVanilla JSの例
すべてのオプションを設定したより複雑な初期化は次のようになります：
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
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	dropEffect: false,
	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
	waterEffect: false,
	waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	// カスタムセレクター
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,
	observer: true,
	credits: { enabled: true, label: 'Made with fullPage.js', position: 'right'},

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
fullPage.jsをセクションのアンカーリンクと共に使用している場合（`anchors`オプションまたは各セクションの`data-anchor`属性を使用）、セクション内の特定のスライドに直接移動するためのアンカーリンクも使用できます。

これがアンカー付きのリンクの例です：https://alvarotrigo.com/fullPage/#secondPage/2（手動でそのセクション/スライドにアクセスすると表示されるURL）
URLの最後の部分は`#secondPage/2`で終わります。

次の初期化を行うと：

```javascript
new fullpage('#fullpage', {
	anchors:['firstPage', 'secondPage', 'thirdPage']
});
```

URLの末尾にあるアンカー`#secondPage/2`はそれぞれセクションとスライドの目的地を定義します。前のURLでは、目的地のセクションはアンカー`secondPage`で定義されたもので、スライドはインデックス`2`を使用しているため2番目のスライドになります。（セクションの最初のスライドは技術的にセクションであるためインデックス0を持ちます）。

HTMLマークアップで`data-anchor`属性を使用すると、インデックスの代わりにカスタムアンカーをスライドに使用できます。例：

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

### 小さなセクションや大きなセクションの作

成
[デモ](https://codepen.io/alvarotrigo/pen/BKjRYm) fullPage.jsはセクションやスライドのフルハイト制限を解除する方法を提供します。ビューポートよりも小さいまたは大きいセクションを作成することが可能です。これはフッターに最適です。
すべてのセクションにこの機能を使用するのは理にかなっていないことを理解することが重要です。サイトの初期読み込み時に複数のセクションがある場合、fullPage.jsは次のセクションを見るためにスクロールしません。

小さなセクションを作成するには、`fp-auto-height`クラスを適用したいセクションに使用します。セクション/スライドのコンテンツによって定義された高さが適用されます。

```html
<div class="section">Whole viewport</div>
<div class="section fp-auto-height">Auto height</div>
```

#### レスポンシブオートハイトセクション
[デモ](https://codepen.io/alvarotrigo/pen/MzByMa) レスポンシブオートハイトは`fp-auto-height-responsive`クラスを使用して適用できます。このようにして、レスポンシブモードが発動するまでセクションはフルスクリーンになります。レスポンシブモードが発動すると、コンテンツに必要なサイズを取ります。

### fullpage.jsによって追加される状態クラス
Fullpage.jsはサイトのステータスを記録するために異なる要素に複数のクラスを追加します：

- `active`は現在表示されているセクションとスライドに追加されます。
- `active`は現在のメニュー要素（`menu`オプションを使用している場合）に追加されます。
- `fp-viewing-SECTION-SLIDE`形式のクラスがサイトの`body`要素に追加されます。（例：[`fp-viewing-secondPage-0`](https://alvarotrigo.com/fullPage/#secondPage)）`SECTION`および`SLIDE`部分は現在のセクションおよびスライドのアンカー（またはアンカーが提供されていない場合はインデックス）です。
- レスポンシブモードに入ると`fp-responsive`が`body`要素に追加されます
- fullPage.jsが有効な場合`html`要素に`fp-enabled`が追加されます。（削除されると破壊されます）。
- fullPage.jsコンテナが破壊されると`fp-destroyed`が追加されます。

### 遅延読み込み
[デモ](https://codepen.io/alvarotrigo/pen/eNLBXo) fullPage.jsは画像、動画、および音声要素の遅延読み込みを提供し、サイトの読み込みを遅くしたり、不要にデータ転送を浪費しないようにします。
遅延読み込みを使用する場合、これらの要素はビューポートに入ったときにのみ読み込まれます。
遅延読み込みを有効にするには、次のように`src`属性を`data-src`に変更するだけです：

```html
<img data-src="image.png">
<video>
	<source data-src="video.webm" type="video/webm" />
	<source data-src="video.mp4" type="video/mp4" />
</video>
 ```

すでに`data-src`を使用している他の遅延読み込みソリューションを使用している場合は、オプション`lazyLoading: false`を設定してfullPage.jsの遅延読み込みを無効にできます。

### 埋め込まれたメディアの自動再生/一時停止

[デモ](https://codepen.io/alvarotrigo/pen/pXEaaK) **注意**：自動再生機能は、OSやブラウザによっては一部のモバイルデバイスで動作しない場合があります（例：[iOSのSafari](https://webkit.org/blog/6784/new-video-policies-for-ios/)バージョン < 10.0）。

#### セクション/スライドの読み込み時に再生：
動画や音声に対して`autoplay`属性を使用するか、YouTubeのiframeに対して`autoplay=1`パラメータを使用すると、ページの読み込み時にメディア要素が再生されます。
セクション/スライドの読み込み時に再生するには、代わりに`data-autoplay`属性を使用します。例：

```html
<audio data-autoplay>
	<source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
</audio>
```

#### 離れる際の一時停止
埋め込まれたHTML5`<video>` / `<audio>`およびYouTubeのiframeは、セクションまたはスライドから離れると自動的に一時停止されます。これを無効にするには、`data-keepplaying`属性を使用します。例：
```html
<audio data-keepplaying>
	<source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
</audio>
```

### 拡張機能の使用
fullpage.jsはデフォルトの機能を強化するための[一連の拡張機能](https://alvarotrigo.com/fullPage/extensions/)を提供しています。すべての拡張機能は[fullpage.jsのオプション](https://github.com/alvarotrigo/fullPage.js#options)としてリストされています。

拡張機能を使用するには、通常のfullPage.jsファイル（`fullpage.js`または`fullpage.min.js`）の代わりに[`fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js)ファイルを使用する必要があります。

拡張機能ファイルを取得したら、fullPageの前に追加する必要があります。たとえば、Continuous Horizontal拡張機能を使用したい場合は、拡張機能ファイルを追加してから、拡張機能バージョンのfullPageファイルを追加します。

```html
<script type="text/javascript" src="fullpage.continuousHorizontal.min.js"></script>
<script type="text/javascript" src="fullpage/fullpage.extensions.min.js"></script>
```

各拡張機能にはアクティベーションキーとライセンスキーが必要です。[詳細についてはこちらをご覧ください](https://github.com/alvarotrigo/fullPage.js/wiki/How-to-activate-a-fullPage.js-extension)。

その後、[オプション](https://github.com/alvarotrigo/fullPage.js#options)で説明されているように、それらを使用および構成できます。

## オプション

### licenseKey
 
（デフォルト `null`）**このオプションは必須です。** fullPageを非オープンソースプロジェクトで使用する場合、fullPage商用ライセンスの購入時に提供されたライセンスキーを使用する必要があります。プロジェクトがオープンソースであり、GPLv3ライセンスと互換性がある場合、`gplv3-license`オプションを使用できます。ライセンスについての詳細は[こちら](https://github.com/alvarotrigo/fullPage.js#license)および[ウェブサイト](https://alvarotrigo.com/fullPage/pricing/)をご覧ください。使用例：

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

（デフォルト `700`）スクロールトランジ

ションの速度（ミリ秒単位）。

### sectionsColor

（デフォルト `none`）各セクションのCSS `background-color`プロパティを定義します。
例：

```javascript
new fullpage('#fullpage', {
	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});
```

### anchors

（デフォルト `[]`）各セクションのURLに表示されるアンカーリンク（#example）を定義します。アンカー値は一意である必要があります。配列内のアンカーの位置は、アンカーが適用されるセクションを定義します。（2番目の位置は2番目のセクションに適用されるなど）。アンカーを使用することで、ブラウザの前後ナビゲーションも可能になり、ユーザーは特定のセクションやスライドをブックマークすることができます。**注意！** アンカーはサイト上の任意のID要素（またはIEのNAME要素）と同じ値を持つことはできません。
アンカーはHTML構造内で`data-anchor`属性を使用して直接定義することもできます。

### lockAnchors

（デフォルト `false`）URL内のアンカーがライブラリに影響を与えるかどうかを決定します。アンカーを内部で自分の関数やコールバックに使用できますが、サイトのスクロールには影響を与えません。他のプラグインとアンカーを組み合わせて使用する場合に便利です。

### easing

（デフォルト `easeInOutCubic`）縦および横のスクロールに使用するトランジション効果を定義します。
一部の[トランジション](https://api.jqueryui.com/easings/)を使用するには、`vendors/easings.min.js`ファイルまたは[jQuery UI](https://jqueryui.com/)が必要です。他のライブラリを代わりに使用することもできます。

### easingcss3

（デフォルト `ease`）`css3:true`を使用する場合のトランジション効果を定義します。`linear`、`ease-out`などの[事前定義されたもの](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp)を使用するか、`cubic-bezier`関数を使用して独自のものを作成できます。[Matthew Lein CSS Easing Animation Tool](https://matthewlein.com/ceaser/)を使用することをお勧めします。

### loopTop

（デフォルト `false`）最初のセクションで上にスクロールすると最後のセクションにスクロールするかどうかを定義します。

### loopBottom

（デフォルト `false`）最後のセクションで下にスクロールすると最初のセクションにスクロールするかどうかを定義します。

### loopHorizontal

（デフォルト `true`）横向きのスライダーが最後または前のスライドに達した後にループするかどうかを定義します。

### css3

（デフォルト `true`）セクションおよびスライド内でスクロールするためにJavaScriptまたはCSS3トランスフォームを使用するかどうかを定義します。タブレットやモバイルデバイスのブラウザでCSS3をサポートしている場合に動きを高速化するのに便利です。このオプションが`true`に設定されていてブラウザがCSS3をサポートしていない場合は、代替手段が使用されます。

### autoScrolling

（デフォルト `true`）"自動"スクロールを使用するか、"通常"のスクロールを使用するかを定義します。また、タブレットやモバイルデバイスでセクションがブラウザ/デバイスウィンドウにどのように適合するかにも影響します。

### fitToSection

（デフォルト `true`）セクションをビューポートに適合させるかどうかを決定します。`true`に設定すると、現在のアクティブなセクションは常にビューポート全体を埋めます。それ以外の場合、ユーザーはセクションの途中で止まることができます。

### fitToSectionDelay

（デフォルト `1000`）`fitToSection`が`true`に設定されている場合、設定されたミリ秒だけフィットを遅らせます。

### scrollBar

（デフォルト `false`）サイトの**縦方向のセクション**にスクロールバーを使用するかどうかを決定します。スクロールバーを使用する場合でも、`autoScrolling`機能は期待通りに動作します。ユーザーはスクロールバーを使用してサイトをスクロールでき、スクロールが終了するとfullPage.jsはセクションを画面にフィットさせます。

### paddingTop

（デフォルト `0`）各セクションのトップパディングを数値とその測定単位で定義します（例：paddingTop: '10px', paddingTop: '10em'）。固定ヘッダーを使用する場合に便利です。

### paddingBottom

（デフォルト `0`）各セクションのボトムパディングを数値とその測定単位で定義します（例：paddingBottom: '10px', paddingBottom: '10em'）。固定フッターを使用する場合に便利です。

### fixedElements

（デフォルト `null`）プラグインのスクロール構造から除外する要素を定義します。`css3`オプションを使用している場合に、これらの要素を固定する必要があります。これにはJavaScriptセレクターの文字列が必要です（例：`fixedElements: '#element1, .element2'`）。

### normalScrollElements

（デフォルト `null`）[デモ](https://codepen.io/alvarotrigo/pen/RmVazM) 一部の要素上で自動スクロールを避けたい場合に使用するオプションです（マップ、スクロール可能なdivなどに便利）。これにはJavaScriptセレクターの文字列が必要です（例：`normalScrollElements: '#element1, .element2'`）。このオプションはセクション/スライド要素自体に適用すべきではありません。

### bigSectionsDestination

（デフォルト `null`）[デモ](https://codepen.io/alvarotrigo/pen/vYLdMrx) `scrollOverflow:true`を使用していない場合、ビューポートよりも高さが大きいセクションにスクロールする方法を定義します（[小さなセクションや大きなセクションの作成方法](https://github.com/alvarotrigo/fullPage.js#creating-smaller-or-bigger-sections)を参照）。デフォルトでは、目的地のセクションが上から来る場合は上部にスクロールし、下から来る場合は下部にスクロールします。可能な値は`top`、`bottom`、`null`です。

### keyboardScrolling

（デフォルト `true`）キーボードを使用してコンテンツをナビゲートできるかどうかを定義します。

### touchSensitivity

（デフォルト `5`）ブラウザのウィンドウ幅/高さのパーセンテージを定義し、次のセクション/スライドに移動するためにスワイプがどの程度測定されるかを定義します。

### continuousVertical

（デフォルト `false`）最後のセクションで下にスクロールすると最初のセクションにスクロールし、最初のセクションで上にスクロールすると最後のセクションにスクロールするかどうかを定義します。`loopTop`、`loopBottom`またはサイト内のスクロールバー（`scrollBar:true`または`autoScrolling:false`）と互換性がありません。

### continuousHorizontal

（デフォルト `false`）[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/)を参照してください。最後のスライドを右にスライドすると最初のスライドにスライドし、最初のスライドを左にスライドすると最後のスライドにスライドするかどうかを定義します。`loopHorizontal`とは互換性がありません。fullpage.js >= 3.0.1が必要です。

### scrollHorizontally

（デフォルト `false`）[fullpage.jsの拡張機能](https://

alvarotrigo.com/fullPage/extensions/)を参照してください。マウスホイールやトラックパッドを使用してスライダー内を水平にスライドするかどうかを定義します。`autoScrolling:true`を使用する場合にのみ使用できます。ストーリーテリングに最適です。fullpage.js >= 3.0.1が必要です。

### interlockedSlides

（デフォルト `false`）[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/)を参照してください。1つの水平スライダーを移動すると、他のセクション内のスライダーが同じ方向にスライドするかどうかを決定します。値は`true`、`false`、または相互ロックされたセクションの配列です。例：`[1,3,5]`（1から始まります）。fullpage.js >= 3.0.1が必要です。

### dragAndMove

（デフォルト `false`）[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/)を参照してください。マウスや指を使用してセクションやスライドをドラッグおよびフリックする機能を有効または無効にします。fullpage.js >= 3.0.1が必要です。可能な値は次のとおりです：
  - `true`：機能を有効にします。
  - `false`：機能を無効にします。
  - `vertical`：垂直方向にのみ機能を有効にします。
  - `horizontal`：水平方向にのみ機能を有効にします。
  - `fingersonly`：タッチデバイスのみで機能を有効にします。
  - `mouseonly`：デスクトップデバイス（マウスとトラックパッド）でのみ機能を有効にします。

### offsetSections

（デフォルト `false`）[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/)を参照してください。パーセンテージに基づいてフルスクリーンでないセクションを使用する方法を提供します。次のセクションや前のセクションの一部を表示することで、訪問者にサイトに他のコンテンツがあることを示すのに理想的です。fullPage.js >= 3.0.1が必要です。
各セクションのパーセンテージを定義するには、`data-percentage`属性を使用する必要があります。ビューポート内のセクションの中央揃えは、`data-centered`属性でブール値を使用して決定できます（指定されていない場合はデフォルトで`true`になります）。例：
``` html
<div class="section" data-percentage="80" data-centered="true">
```

### resetSliders

（デフォルト `false`）[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/)を参照してください。セクションを離れた後、各スライダーをリセットするかどうかを定義します。fullpage.js >= 3.0.1が必要です。

### fadingEffect

（デフォルト `false`）[fullpage.jsの拡張機能](https://alvarotrigo.com/fullPage/extensions/)を参照してください。デフォルトのスクロール効果の代わりにフェード効果を使用するかどうかを定義します。値は`true`、`false`、`sections`、`slides`です。したがって、縦方向または横方向にのみ適用することも、両方に同時に適用することもできます。`autoScrolling:true`を使用する場合にのみ使用できます。fullpage.js >= 3.0.1が必要です。

### animateAnchor

（デフォルト `true`）サイトの読み込み時にアンカー（#）が与えられると、アニメーションで目的地にスクロールするか、直接指定されたセクションに読み込むかを定義します。

### recordHistory

（デフォルト `true`）URLのハッシュ変更ごとにサイトの履歴を記録するかどうかを定義します。

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
[デモ](https://codepen.io/alvarotrigo/pen/bdxBzv) プラグインのイベントを破壊し、オプションでHTMLマークアップとスタイルを削除します。
AJAXを使用してコンテンツを読み込む際に理想的です。

- `type`：（オプションのパラメータ）空または`all`にすることができます。`all`が渡されると、fullpage.jsが使用したHTMLマークアップとスタイルが削除されます。これにより、プラグインによる変更前の元のHTMLマークアップが保持されます。

```javascript
//fullPage.jsが作成したすべてのJavaScriptイベント（スクロール、URLのハッシュ変更など）を破壊
fullpage_api.destroy();

//すべてのJavaScriptイベントと、fullPage.jsが元のHTMLマークアップに対して行った変更を破壊
fullpage_api.destroy('all');
```
---
### reBuild()
DOM構造を更新して新しいウィンドウサイズまたはそのコンテンツに適合させます。
 AJAX呼び出しやサイトのDOM構造の外部変更と組み合わせて使用するのに理想的です。特に`scrollOverflow:true`を使用している場合。

```javascript
fullpage_api.reBuild();
```
---
### setResponsive(boolean)
[デモ](https://codepen.io/alvarotrigo/pen/WxOyLA) ページのレスポンシブモードを設定します。`true`に設定すると、autoScrollingがオフになり、`responsiveWidth`または`responsiveHeight`オプションが発動したときと同じ結果になります。
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
元のスライド（現在は垂直セクションに変換されたもの）を再び水平スライドに戻します。

```javascript
fullpage_api.responsiveSlides.toSlides();
```

## コールバック
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) こちらで動作を確認できます：[コールバックの例](https://alvarotrigo.com/fullPage/examples/callbacks.html)。

一部のコールバック（例：`onLeave`）には、次のプロパティを含むオブジェクトタイプのパラメータが含まれます：

- `anchor`：*(String)* アイテムのアンカー。
- `index`：*(Number)* アイテムのインデックス。
- `item`：*(DOM element)* アイテム要素。
- `isFirst`：*(Boolean)* アイテムが最初の子かどうかを決定します。
- `isLast`：*(Boolean)* アイテムが最後の子かどうかを決定します。

### afterLoad (`origin`, `destination`, `direction`, `trigger`)
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) セクションが読み込まれ、スクロールが終了した後に発生するコールバック。
パラメータ：

- `origin`：*(Object)* 出発点のセクション。
- `destination`：*(Object)* 目的地のセクション。
- `direction`：*(String)* スクロール方向に応じて`up`または`down`の値を取ります。
- `trigger`：*(String)* スクロールをトリガーしたものを示します。可能な値は："wheel"、"keydown"、"menu"、"slideArrow"、"verticalNav"、"horizontalNav"です。

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
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) ユーザーがセクションを離れて新しいセクションに移行するときに発生するコールバック。
戻り値が`false`の場合、移動は発生前にキャンセルされます。

パラメータ：

- `origin`：*(Object)* 出発点のセクション。
- `destination`：*(Object)* 目的地のセクション。
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

スクロールが発生する前にそれをキャンセルし防ぐには、このコールバックを使用して`false`を返すことができます。

パラメータ：

- `origin`：*(Object)* 出発点のセクション。
- `destination`：*(Object)* 目的地のセクション。
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
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) ページの構造が生成された直後に発生するコールバック。このコールバックは、他のプラグインを初期化するか、ドキュメントが準備完了を必要とするコードを実行するために使用します（このプラグインは結果として構造を作成するためにDOMを変更します）。詳細は[FAQ](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)を参照してください。

例：

```javascript
new fullpage('#fullpage', {
	afterRender: function(){
		var pluginContainer = this;
		alert("生成されたDOM構造が準備完了しました");
	}
});
```
---
### afterResize(`width`, `height`)
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) ブラウザのウィンドウサイズが変更された後、セクションがリサイズされた直後に発生するコールバック。

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
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) `fullpage_api.reBuild()`を呼び出してfullpage.jsを手動で再構築した後に発生するコールバック。

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
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) fullpage.jsが通常モードからレスポンシブモードに切り替わった後、またはレスポンシブモードから通常モードに戻った後に発生するコールバック。

パラメータ：

- `isResponsive`：*(Boolean)* レスポンシブモードに入る場合は`true`、通常モードに戻る場合は`false`を示します。

例：

```javascript
new fullpage('#fullpage', {
	afterResponsive: function(isResponsive){
		alert("Is responsive: " + isResponsive);
	}
});
```
---
### afterSlideLoad (`section`, `origin`, `destination`, `direction`, `trigger`)
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) セクションのスライドが読み込まれ、スクロールが終了した後に発生するコールバック。

パラメータ：

- `section`：*(Object)* アクティブな縦方向のセクション。
- `origin`：*(Object)* 出発点の水平スライド。
- `destination`：*(Object)* 目的地の水平スライド。
- `direction`：*(String)* スクロール方向に応じて`right`または`left`の値を取ります。
- `trigger`：*(String)* スクロールをトリガーしたものを示します。可能な値は："wheel"、"keydown"、"menu"、"slideArrow"、"verticalNav"、"horizontalNav"です。

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
戻り値が`false`の場合、移動は発生前にキャンセルされます。

パラメータ：

- `section`：*(Object)* アクティブな縦方向のセクション。
- `origin`：*(Object)* 出発点の水平スライド。
- `destination`：*(Object)* 目的地の水平スライド。
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
`onSlideLeave`コールバックで`false`を返すことで移動をキャンセルできます。[`

onLeave`での移動をキャンセルする場合と同様です](https://github.com/alvarotrigo/fullPage.js#cancelling-the-scroll-before-it-takes-place)。


---
### onScrollOverflow (`section`, `slide`, `position`, `direction`)
[デモ](https://codepen.io/alvarotrigo/pen/XbPNQv) `scrollOverflow: true`オプションを使用している場合に、スクロール可能なセクション内でスクロールすると発生するコールバック。

パラメータ：

- `section`：*(Object)* アクティブな縦方向のセクション。
- `slide`：*(Object)* 出発点の水平スライド。
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
1. GitHubの問題検索を使用して、質問する前に問題を確認してください。
2. 最新のfullpage.jsバージョンを使用していることを確認してください。古いバージョンにはサポートが提供されません。
3. [GitHub Issuesフォーラム](https://github.com/alvarotrigo/fullPage.js/issues)を使用して問題を作成します。
4. **問題の孤立した再現が必要です。** 可能であれば[jsfiddle](https://jsfiddle.net/alvarotrigo/ea17skjr/)や[codepen](https://codepen.io/alvarotrigo/pen/qqabrp)を使用してください。

# fullpage.jsへの貢献
[fullpage.jsへの貢献](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)をご覧ください。

# 変更履歴
最近の変更リストについては、[リリースセクション](https://github.com/alvarotrigo/fullPage.js/releases)を参照してください。

# ビルドタスク
fullpage.jsの配布ファイルをビルドしたいですか？[ビルドタスク](https://github.com/alvarotrigo/fullPage.js/wiki/Build-tasks)をご覧ください。

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
スポンサーになって、GitHubのREADMEにロゴとサイトへのリンクを掲載しませんか。[[スポンサーになる](https://alvarotrigo.com/#contact)] | [[Patreonになる](https://www.patreon.com/fullpagejs)]

[![Codeless](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codeless.png)](https://codeless.co)
[![Stackpath](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/stackpath3.png)](https://www.stackpath.com/)
[![Browserstack](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/browserstack3.png)](http://www.browserstack.com/)
[![CodePen](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codepen3.png)](https://codepen.com)

### 人々
<a href="https://github.com/donsalvadori" target="_blank" rel="nofollow">
	<img src="http://wallpapers-for-ipad.com/fullpage/imgs3/avatars/donsalvadori.jpg">
</a>

## 貢献者

<a href="https://github.com/alvarotrigo/fullPage.js/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=alvarotrigo/fullPage.js&max=400&columns=25&anon=1&v=2" />
</a>
```
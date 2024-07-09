# fullPage.js
![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.png)

<p align="center">
  <a href="https://github.com/MercureTony/fullPage.js">English</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish#fullpagejs">Español</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#fullpagejs">Français</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#fullpagejs">Pусский</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese#fullpagejs">中文</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs">한국어</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/brazilian-portuguese#fullpagejs">Português Brasileiro</a> |
  <span>日本語</span>
</p>

<p align="center">
	<a href="https://github.com/alvarotrigo/vue-fullpage.js">Vue</a>、<a href="https://github.com/alvarotrigo/react-fullpage">React</a>、<a href="https://github.com/alvarotrigo/angular-fullpage">Angular</a>にて利用可能です。
</p>

---

![fullPage.js version](http://img.shields.io/badge/fullPage.js-v4.0.11-brightgreen.svg)
[![License](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/fullpage.js/badge?style=rounded)](https://www.jsdelivr.com/package/npm/fullpage.js)
&nbsp;&nbsp; **|**&nbsp;&nbsp; *7Kb gziped* &nbsp;&nbsp;**|**&nbsp;&nbsp; *Created by [@imac2](https://twitter.com/imac2)*

- [オンラインデモ](http://alvarotrigo.com/fullPage/) | [Codepen](https://codepen.io/alvarotrigo/pen/qqabrp)
- [Gutenbergに対応したWordpressプラグイン](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/)及び[Elementor用WordPressプラグイン](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)
- [Wordpressテーマ](http://alvarotrigo.com/fullPage/utils/wordpress.html)
- [fullpage.js拡張機能](http://alvarotrigo.com/fullPage/extensions/)
- [よくある質問](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)
- [[fullPage v3からfullpage v4への移行]](https://alvarotrigo.com/fullPage/help/migration-from-fullpage-3/)
---

フルスクリーンスクロールサイト（シングルページサイトまたはワンページサイトとも呼ばれる）を作成し、サイトのセクション内にランドスケープスライダーを追加する、シンプルで使いやすいライブラリです。

- [イントロダクション](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#イントロダクション)
- [互換性](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#互換性)
- [ライセンス](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#ライセンス)
- [使用方法](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#使用方法)
  - [セクションやスライドへのリンクの作成](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#セクションやスライドへのリンクの作成)
  - [小さなセクションや大きなセクションの作成](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#小さなセクションや大きなセクションの作成)
  - [fullpage.jsで追加された状態クラス](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#fullpage.jsで追加された状態クラス)
  - [遅延ローディング](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#遅延ローディング)
  - [埋め込みメディアの自動再生/一時停止](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#埋め込みメディアの自動再生/一時停止)
  - [拡張機能の使用](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#拡張機能の使用)
- [オプション](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#オプション)
- [メソッド](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#メソッド)
- [コールバック](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#コールバック)
- [issuesのレポート](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#issuesのレポート)
- [fullpage.jsへのコントリビュート](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#fullpage.jsへのコントリビュート)
- [チェンジログ](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#チェンジログ)
- [ビルドタスク](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#ビルドタスク)
- [リソース](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#リソース)
- [fullPage.jsを使用しているユーザー](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#fullPage.jsを使用しているユーザー)
- [寄付](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#寄付)
- [スポンサー](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#スポンサー)

## イントロダクション
機能要求だけでなく、コーディングスタイルの改善など、提案は大歓迎です。
このライブラリを、人々の生活をより快適にするための素晴らしいライブラリにしましょう!

## 互換性
fullPage.jsは、すべてのモダンブラウザとIE 11で完全に機能します。IE 11より下位バージョンをサポートする必要がある場合は、[fullPage.js v3](https://github.com/alvarotrigo/fullPage.js/tree/3.1.2)の使用を検討してください。
また、携帯電話、タブレット、タッチスクリーンPCのためのタッチサポートを提供しています。

fullpage.jsをサポートしている[Browserstack](http://www.browserstack.com/)に感謝します。

## ライセンス

### 商用ライセンス
オープンソースでないサイト、テーマ、プロジェクト、アプリケーションを開発するためにFullPageを使用したい場合は、商用ライセンスが適切なライセンスです。このオプションでは、お客様のソースコードはプロプライエタリに保たれます。つまり、アプリケーションのソースコード全体をオープンソースライセンスに変更する必要はありません。[[Fullpage商用ライセンスの購入]](https://alvarotrigo.com/fullPage/pricing/)

### オープンソースライセンス
[GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html)と互換性のあるライセンスでオープンソースアプリケーションを作成している場合、GPLv3の条項の下でfullPageを使用することができます。

**fullPage.jsが使用されていることを目立つように表示する必要があります。JavaScriptファイル、CSSファイル内のクレジットコメントはそのままにしてください** (結合やミニ化の後でも)です。

[fullPageのライセンスについて詳しく見る](https://alvarotrigo.com/fullPage/pricing/).

## 使用方法
サンプルファイルを見ればわかるように、インクルードする必要があります:
 - JavaScriptファイル`fullpage.js`(またはそのミニ化バージョン`fullpage.min.js`)
 - cssファイル`fullpage.css`

 **オプション**として、`css3:false`を使用する場合、ライブラリに含まれるイージング効果(`easeInOutCubic`)とは別のイージング効果を使用したい場合に[easings file](https://github.com/alvarotrigo/fullPage.js/tree/master/vendors/easings.min.js)を追加することが可能です。

### bowerまたはnpmを使ってインストールする
**オプション**として、fullPage.jsをbowerまたはnpmでインストールすることができます:

ターミナル:
```shell
// With bower
bower install fullpage.js

// With npm
npm install fullpage.js
```

### ファイルのインクルード:
```html
<link rel="stylesheet" type="text/css" href="fullpage.css" />

<!-- この次の行はオプションです。css3:falseオプションを使用し、"easeInOutCubic"ではなく他のイージング効果を使用したい場合のみ必要です。 -->
<script src="vendors/easings.min.js"></script>

<script type="text/javascript" src="fullpage.js"></script>
```

Webpack、Browserify、Require.jsのいずれかを使用しますか？<a href="https://github.com/alvarotrigo/fullPage.js/wiki/Use-module-loaders-for-fullPage.js">モジュールローダーでfullPage.jsを使用する方法</a>をご確認ください。

### オプションでCDNを利用
必要なファイルを読み込むためにCDNを利用したい場合は、fullPage.jsはCDNJSにあります:
https://cdnjs.com/libraries/fullPage.js

### 必要なHTML構造
HTML文書の1行目には、必ず[HTML DOCTYPE宣言](http://www.corelangs.com/html/introduction/doctype.html)を記述してください。そうしないと、セクションの高さについて問題が生じるかもしれません。提供されているサンプルは、HTML 5のdoctype`<!DOCTYPE html>`を使用しています。

各セクションは `section` クラスを含む要素で定義されます。
デフォルトでアクティブなセクションは最初のセクションで、これはトップページとして扱われます。

セクションはラッパー (この例では `<div id="fullpage">`) の中に配置する必要があります。ラッパーは `body` 要素であってはいけません。

```html
<div id="fullpage">
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
</div>
```

もし、最初のセクションやセクションの最初のスライドではなく、別の開始点を定義したい場合は、最初にロードしたいセクションとスライドに `active` クラスを追加してください。

```html
<div class="section active">Some section</div>
```

セクション内にランドスケープスライダーを作成するために、各スライドはデフォルトで`slide`クラスを含む要素で定義されます:

```html
<div class="section">
	<div class="slide"> Slide 1 </div>
	<div class="slide"> Slide 2 </div>
	<div class="slide"> Slide 3 </div>
	<div class="slide"> Slide 4 </div>
</div>
```

HTML構造の完全な動作例は、[`simple.html`ファイル](https://github.com/alvarotrigo/fullPage.js/blob/master/examples/simple.html) で見ることができます。

### 初期化

#### Vanilla Javascriptによる初期化
必要なのは、閉じる`</body>`タグの前にfullPage.jsを呼び出すことだけです。

```javascript
new fullpage('#fullpage', {
	//ここにオプション
	autoScrolling:true,
	scrollHorizontally: true
});
```

#### jQueryによる初期化
その気になれば、fullpage.jsをjQueryのプラグインとして使うことも可能です！

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		//ここにオプション
		autoScrolling:true,
		scrollHorizontally: true
	});

	//メソッド
	$.fn.fullpage.setAllowScrolling(false);
});
```

関数やメソッドは、[fullPage.js v2.X](https://github.com/alvarotrigo/fullPage.js/tree/2.9.7) のように、jQueryの方法で呼び出すことも可能です。

#### すべてのオプションを使用したVanilla JSの例
すべてのオプションを設定したより複雑な初期化は、次のようになります:
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

	// カスタムセレクタ
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
	onSlideLeave: function(section, origin, destination, direction, trigger){},
	onScrollOverflow: function(section, slide, position, direction){}
});
```

### セクションやスライドへのリンクの作成
もし、fullPage.jsをセクションのアンカーリンク（各セクションで `anchors` オプションまたは `data-anchor` 属性を使用）と共に使用しているなら、アンカーリンクを使用してセクション内の特定のスライドに直接移動することも可能です。

これはアンカー付きのリンクの例です: http://alvarotrigo.com/fullPage/#secondPage/2 (手動でそのセクション/スライドにアクセスしたときに表示されるURLです)
URLの最後の部分が`#secondPage/2`で終わっていることに注意してください。

以下の初期設定を持つ:

```javascript
new fullpage('#fullpage', {
	anchors:['firstPage', 'secondPage', 'thirdPage']
});
```

URLの末尾にあるアンカー`#secondPage/2`は、目的地のセクションとスライドをそれぞれ定義しています。先ほどのURLでは、セクションはアンカー `secondPage` で定義されたもので、スライドはインデックス `2` を使っているので2枚目のスライドになります。(セクションの最初のスライドは、技術的にセクションであるため、インデックス0です)。

HTMLマークアップで`data-anchor`属性を使用すれば、インデックスではなく、スライドのカスタムアンカーを使用することができました:

```html
<div class="section">
	<div class="slide" data-anchor="slide1"> Slide 1 </div>
	<div class="slide" data-anchor="slide2"> Slide 2 </div>
	<div class="slide" data-anchor="slide3"> Slide 3 </div>
	<div class="slide" data-anchor="slide4"> Slide 4 </div>
</div>
```
この場合、URLは`#secondPage/slide3`となり、先ほどの`#secondPage/2`と同じになります。

もし、`anchors`配列が提供されない場合は、`data-anchor`属性を使用して、同じ方法でセクションアンカーを定義することができることに注意してください。

**注意！** `data-anchor`タグは、サイト上の任意のID要素（IEの場合はNAME要素）と同じ値を持つことはできません。

### 小さなセクションや大きなセクションの作成
[デモ](http://codepen.io/alvarotrigo/pen/BKjRYm) fullPage.jsは、セクションやスライドの高さ制限を解除する方法を提供します。これにより、ビューポートより小さい、または大きい高さのセクションを作成することができます。これはフッターに最適です。
ただし、すべてのセクションにこの機能を使用することは無意味であることを理解しておく必要があります。サイトの初期読み込み時に複数のセクションがある場合、fullPage.jsは次のセクションを表示するためにスクロールすることはありません。

より小さなセクションを作成するには、適用したいセクションで `fp-auto-height` クラスを使用するだけです。これは、セクションやスライドの内容によって定義された高さを取ります。

```html
<div class="section">Whole viewport</div>
<div class="section fp-auto-height">Auto height</div>
```

#### レスポンシブオートハイトセクション
[デモ](https://codepen.io/alvarotrigo/pen/MzByMa) レスポンシブオートハイトはクラス `fp-auto-height-responsive` を使って適用することができます。この方法では、レスポンシブモードが起動するまで、セクションはフルスクリーンで表示されます。その後、コンテンツが必要とするサイズになり、ビューポートよりも大きくなったり小さくなったりします。

### fullpage.jsで追加された状態クラス
Fullpage.jsは、サイトの状態を記録するために、さまざまな要素に複数のクラスを追加しています:

- `active` は現在の表示されているセクションとスライドに追加されます。
- `active` は現在の menu 要素に追加されます (`menu` オプションを使用している場合)。
- `fp-viewing-SECTION-SLIDE` 形式のクラスが、サイトの `body` 要素に追加されます。(例: [`fp-viewing-secondPage-0`](http://alvarotrigo.com/fullPage/#secondPage)) `SECTION` と `SLIDE` の部分は、現在のセクションとスライドのアンカー(アンカーが指定されていない場合はインデックス)になります。
- レスポンシブモードで入力する場合、`fp-responsive`が`body`要素に追加される
- `fp-enabled`はfullpage.jsが有効なときに`html`要素に追加される。(破壊されると削除される)。
- `fp-destroyed`はfullPage.jsが破棄されたときに、fullpage.jsのコンテナに追加される。

### 遅延ローディング
[デモ](http://codepen.io/alvarotrigo/pen/eNLBXo) fullPage.jsは、画像、ビデオ、オーディオ要素を遅延ロードする方法を提供し、サイトの読み込みを遅くしたり、不必要にデータ転送を無駄にしたりすることはありません。
遅延ロードを使用する場合、これらの要素はすべてビューポートに入ったときにのみ読み込まれます。
遅延ロードを有効にするには、以下のように`src`属性を`data-src`に変更するだけです:

```html
<img data-src="image.png">
<video>
	<source data-src="video.webm" type="video/webm" />
	<source data-src="video.mp4" type="video/mp4" />
</video>
 ```

すでに`data-src`を使用する別の遅延ロードソリューションを使用している場合は、オプション`lazyLoading: false`を設定してfullPage.jsの遅延ロードを無効化することができます。

### 埋め込みメディアの自動再生/一時停止

[デモ](https://codepen.io/alvarotrigo/pen/pXEaaK) **注意**：OSやブラウザのバージョン（[Safari on iOS](https://webkit.org/blog/6784/new-video-policies-for-ios/) バージョン10.0未満など）により、一部のモバイル端末で自動再生機能が動作しない場合があります。

#### セクション/スライドロードで再生:
ビデオやオーディオに `autoplay` 属性、または youtube iframe に `autoplay=1` パラメータを使用すると、ページロード時にメディア要素が再生されます。
セクションやスライドのロード時に再生するには、代わりに `data-autoplay` 属性を使用してください。例えば、以下のようになります:

```html
<audio data-autoplay>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

#### 離れた場合の一時停止:
HTML5に埋め込まれた`<video>`/`<audio>`や Youtube iframe は、セクションやスライドから離れると自動的に一時停止されます。これは`data-keepplaying`という属性を使って無効にすることができます。例えば、以下のようになります:
```html
<audio data-keepplaying>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

### 拡張機能の使用
fullpage.js は、デフォルトの機能を強化するために使用できる[拡張機能のセットを提供しています](http://alvarotrigo.com/fullPage/extensions/)。これらはすべて[fullpage.jsのオプション](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#オプション)としてリストアップされています。

拡張機能では、通常の fullPage.js ファイル (`fullpage.js` または `fullpage.min.js`) の代わりに、[`dist` フォルダ] (https://github.com/alvarotrigo/fullPage.js/tree/master/dist) 内の minified ファイル [`fullpage.extensions.min.js`] (https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js) を使用することが必要です。

拡張機能ファイルを取得したら、fullPageの前に追加する必要があります。例えば、Continuous Horizontalエクステンションを使用したい場合、エクステンションファイルをインクルードしてから、エクステンションバージョンのfullPageファイルをインクルードする必要があります。

```html
<script type="text/javascript" src="fullpage.continuousHorizontal.min.js"></script>
<script type="text/javascript" src="fullpage/fullpage.extensions.min.js"></script>
```

拡張機能ごとにアクティベーションキーとライセンスキーが必要になります。[その詳細はこちら](https://github.com/alvarotrigo/fullPage.js/wiki/How-to-activate-a-fullPage.js-extension)をご覧ください。

そして、[オプション](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#オプション)で説明されているように、使用・設定することができるようになります。

## オプション

- `licenseKey`: (デフォルト `null`)。**このオプションは必須です。**fullPageをオープンソースでないプロジェクトで使用する場合は、fullPage商用ライセンスを購入した際に提供されたライセンスキーを使用する必要があります。もしあなたのプロジェクトがオープンソースで、GPLv3ライセンスと互換性があるならば、`gplv3-license`オプションを使用することができます。ライセンスについては、[こちら](https://github.com/alvarotrigo/fullPage.js#license)と[ウェブサイト](https://alvarotrigo.com/fullPage/pricing/)をお読みください。使用例:

```javascript
new fullpage('#fullpage', {
    licenseKey: 'YOUR_KEY_HERE'
});
```

- `controlArrows`: (デフォルト `true`)スライドの右移動と左移動にコントロール矢印を使うかどうかを決定します。

- `controlArrowsHTML`: (デフォルト `['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'],`). 水平スライドを持つセクションの制御矢印に適用したい HTML 構造とクラスを定義する方法を提供します。配列は、両方の矢印の構造を含んでいます。最初の項目は左の矢印、2番目は右の矢印です。

- `verticalCentered`: (デフォルト `true`) フレックスボックスを使って、コンテンツを縦方向に中央寄せにします。潜在的な問題を回避するために、コンテンツを `div` で囲むとよいでしょう。(使用例 `flex-direction: column; display: flex; justify-content: center;`)

- `scrollingSpeed`: (デフォルト `700`) スクロールの遷移の速度をミリ秒単位で指定します。

- `sectionsColor`: (デフォルト `none`) 各セクションの CSS `background-color` プロパティを定義します。
例:
```javascript
new fullpage('#fullpage', {
	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});
```

- `anchors`: (default `[]`) 各セクションのURL上に表示されるアンカーリンク(#example)を定義します。アンカーは一意である必要があります。配列内のアンカーの位置は、どのセクションにアンカーが適用されるかを定義します。(2番目のセクションには2番目の位置、など)。アンカーを使用すると、ブラウザから前方および後方へのナビゲーションも可能になります。このオプションは、ユーザーが特定のセクションやスライドをブックマークすることも可能です。**注意！**アンカーは、サイト上の任意のID要素（またはIEのNAME要素）と同じ値を持つことはできません。
アンカーは、ここで説明するように `data-anchor` という属性を使って、HTML構造で直接定義できるようになりました。

- `lockAnchors`: (デフォルト `false`) URLに含まれるアンカーがライブラリに全く影響を与えないかを決定します。内部で独自の関数やコールバックのためにアンカーを使用することはできますが、サイトのスクロールに影響を与えることはありません。URLにアンカーを使用する他のプラグインとfullPage.jsを組み合わせたい場合に便利です。

**重要** オプション配列`anchors`の値は、マークアップ内の位置によって `.section` というクラスを持つ要素に直接関連することを理解するとよいでしょう。

- `easing`: (デフォルト `easeInOutCubic`)縦スクロールと横スクロールに使用するトランジション効果を定義します。
ファイル`vendors/easings.min.js` または[jQuery UI](http://jqueryui.com/) が必要で、[そのトランジション](http://api.jqueryui.com/easings/) のいくつかを使用します。他のライブラリで代用することもできます。

- `easingcss3`: (デフォルト `ease`) `css3:true`を使用した場合に使用するトランジション効果を定義します。[定義済みのもの](http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) (例えば `linear`, `ease-out`...) を使うこともできますし、`cubic-bezier`関数を用いて独自のものを作成することもできます。[Matthew Lein CSS Easing Animation Tool](http://matthewlein.com/ceaser/)を使うといいかもしれません。

- `loopTop`: (デフォルト `false`) 最初のセクションで上にスクロールしたときに、最後のセクションまでスクロールするかどうかを定義します。

- `loopBottom`: (デフォルト `false`) 最後のセクションで下へスクロールした際に、最初のセクションへスクロールするかどうかを定義します。

- `loopHorizontal`: (デフォルト `true`) 水平スライダーが最後または前のスライドに到達した後にループさせるかどうかを定義します。

- `css3`: (デフォルト `true`)。セクションやスライド内のスクロールに JavaScript と CSS3 のどちらの変換を使用するかを定義します。CSS3をサポートしているブラウザで、タブレットやモバイルデバイスの動きを高速化するのに便利です。このオプションが `true` に設定されていて、ブラウザが CSS3 をサポートしていない場合、代わりにフォールバックが使用されます。

- `autoScrolling`: (デフォルト `true`) "自動"スクロールを使用するか、"通常"スクロールを使用するかを定義します。また、タブレットや携帯電話のブラウザ/デバイスのウィンドウにセクションをフィットさせる方法にも影響します。

- `fitToSection`: (デフォルト `true`) セクションをビューポートにフィットさせるかどうかを指定します。`true`に設定すると、現在のアクティブなセクションが常にビューポート全体を埋めるようになります。そうでなければ、ユーザーはセクションの途中で自由に停止することができるようになります。

- `fitToSectionDelay`: (デフォルト1000)。`fitToSection`がtrueに設定されている場合、設定されたミリ秒単位でフィッティングを遅らせます。

- `scrollBar`: (デフォルト `false`) サイトの **縦方向セクション** でスクロールバーを使用するかどうかを決定します。スクロールバーを使用する場合でも、 `autoScrolling` の機能は期待通りに動作します。また、ユーザーはスクロールバーを使って自由にサイトをスクロールすることができ、スクロールが終了するとfullPage.jsが画面にセクションをフィットさせます。

- `paddingTop`: (デフォルト `0`) 各セクションの上部のパディングを数値とその大きさで定義します (paddingTop: '10px', paddingTop: '10em'...) 固定ヘッダーを使用する場合に便利です。

- `paddingBottom`: (デフォルト `0`) 各セクションの下部のパディングを、数値とその尺度 (paddingBottom: '10px', paddingBottom: '10em'...) で定義します。固定フッターを使用する場合に便利です。

- `fixedElements`: (デフォルト `null`) どの要素をプラグインのスクロール構造から外すかを定義します。これは `css3` オプションを使用して、要素を固定したままにしておくときに必要です。これらの要素に対応するJavascriptのセレクタを文字列で指定する必要があります。(例: `fixedElements: '#element1, .element2'`)

- `normalScrollElements`: (デフォルト `null`) [デモ](https://codepen.io/alvarotrigo/pen/RmVazM)いくつかの要素上でスクロールするときに自動スクロールを避けたい場合、このオプションを使用する必要があります。(マップやスクロールするDivなどに有効です。) このオプションには、それらの要素のJavascriptセレクタを文字列で指定する必要があります。(例: `normalScrollElements: '#element1, .element2'`). このオプションは、セクション/スライド要素自体には適用しないでください。

- `bigSectionsDestination`: (デフォルト `null`) [デモ](https://codepen.io/alvarotrigo/pen/vYLdMrx) `scrollOverflow:true` を使わない場合に、ビューポートより大きな高さのセクションにどのようにスクロールするかを定義します。([小さいセクションや大きいセクションの作り方](https://github.com/alvarotrigo/fullPage.js#creating-smaller-or-bigger-sections)をご覧ください). デフォルトでは、fullPage.jsは、目的のセクションより上のセクションから来た場合は上へ、目的のセクションより下のセクションから来た場合は下へスクロールします。指定可能な値は `top`, `bottom`, `null` です。

- `keyboardScrolling`: (デフォルト `true`) キーボードを使用してコンテンツをナビゲートできるかどうかを定義します。

- `touchSensitivity`: (デフォルト `5`) ブラウザのウィンドウ幅/高さに対するパーセンテージを定義し、スワイプが次のセクション/スライドに移動するための距離を測定します

- `continuousVertical`: (デフォルト `false`) 最後のセクションで下にスクロールすると、最初のセクションまでスクロールするかどうか、最初のセクションで上にスクロールすると、最後のセクションまでスクロールするかどうかを定義します。`LoopTop`, `loopBottom` やサイトに存在するスクロールバー (`scrollBar:true`または`autoScrolling:false`)とは互換性がありません。

- `continuousHorizontal`: (デフォルト `false`) [fullpage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/)。最後のスライドで右にスライドすると最初のスライドに戻るかどうか、最初のスライドで左にスクロールすると最後のスライドに戻るかどうかを定義します。`loopHorizontal`とは互換性がありません。fullpage.js >= 3.0.1が必要です。

- `scrollHorizontally`: (デフォルト `false`) [fullpage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/)。マウスホイールやトラックパッドを使ってスライダー内を水平方向にスライドさせるかどうかを定義します。使用しているときのみ使用可能です。`autoScrolling:true`を使用しているときのみ使用できます。ストーリーテリングに最適です。fullpage.js >= 3.0.1が必要です。

- `interlockedSlides`: (デフォルト `false`) [fullpage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/)。ある水平スライダーを動かすと、他のセクションのスライダーも同じ方向にスライドさせるかどうかを決定します。設定可能な値は`true`、`false` または連動するセクションを表す配列です。例えば、`[1,3,5]`のように、1から順番にスライドさせることができます。

- `dragAndMove`: (デフォルト `false`) [fullpage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/)。マウスや指を使ったセクションやスライドのドラッグやフリックを有効または無効にします。fullpage.js >= 3.0.1が必要です。設定可能な値は以下の通りです:
  - `true`: 機能を有効にする。
  - `false`: 機能を無効にする。
  - `vertical`: 垂直方向にのみ機能を有効にする。
  - `horizontal`: 水平方向にのみ機能を有効にします。
  - `fingersonly`: タッチデバイスでのみ機能を有効にします。
  - `mouseonly`: デスクトップデバイス(マウスとトラックパッド)に対してのみ、この機能を有効にします。

- `offsetSections`: (デフォルト `false`)[fullpage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/). パーセンテージに基づいて、フルスクリーンでないセクションを使用する方法を提供します。次のセクションや前のセクションの一部を表示することによって、サイト内にもっと多くのコンテンツがあることを訪問者に示すのに理想的です。fullPage.js >= 3.0.1が必要です。
各セクションのパーセンテージを定義するには、`data-percentage`属性を使用する必要があります。ビューポートにおけるセクションのセンタリングは、`data-centered`属性にブール値を指定することで行うことができます (指定しない場合は`true`がデフォルト)。例えば:
``` html
    <div class="section" data-percentage="80" data-centered="true">
```

- `resetSliders`: (デフォルト `false`)。 [fullpage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/)。スライダーのセクションを出た後、すべてのスライダーをリセットするかどうかを定義します。fullpage.js >= 3.0.1が必要です。

- `fadingEffect`: (デフォルト `false`) です。[fullpage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/)。デフォルトのスクロール効果の代わりに、フェード効果を使用するかどうかを定義します。使用可能な値は `true`、`false`、`sections`、`slides`です。したがって、縦方向のみ、横方向のみ、あるいは両方に同時に適用することができます。また、以下の場合にのみ使用することができます。`autoScrolling:true`を使用しているときのみ使用できます。fullpage.js >= 3.0.1が必要です。

- `animateAnchor`: (デフォルト `true`) アンカー (#) が与えられたときに、サイトのロードがアニメーションで目的地までスクロールするか、与えられたセクションに直接ロードするかを定義します。

- `recordHistory`: (デフォルト `true`) サイトの状態をブラウザの履歴に残すかどうかを定義します。`true`に設定すると、サイトの各セクション/スライドが新しいページとして機能し、ブラウザの戻る/進むボタンでセクション/スライドをスクロールしてサイトの前または次の状態に到達することができるようになります。`false`に設定すると、URLは変更され続けますが、ブラウザの履歴には影響を与えません。このオプションは `autoScrolling:false` を使用すると、自動的にオフになります。

- `menu`: (デフォルト `false`) セレクタを使用して、セクションにリンクするメニューを指定することができます。この方法では、セクションをスクロールすることで、クラス`active`を使用してメニュー内の対応する要素がアクティブになります。
これはメニューを生成するのではなく、与えられたメニューの要素に`active`クラスを追加し、対応するアンカーリンクを追加するだけです。
メニューの要素とセクションをリンクさせるには、HTML5のデータタグ(`data-menuanchor`) をセクション内で使用されているものと同じアンカーリンクで使用する必要があります。例:
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

**注意:**メニュー要素は、`css3:true`を使用する際の問題を回避するために、フルページラッパーの外側に配置する必要があります。そうしないと、プラグイン自身によって`body`に追加されます。

- `navigation`: (デフォルト `false`) `true`に設定すると、小さな円形で構成されたナビゲーションバーを表示します。

- `navigationPosition`: (デフォルト `none`) `left`または`right`に設定することができ、ナビゲーションバーをどの位置に表示するかを定義します (ナビゲーションバーを使用する場合)。

- `navigationTooltips`: (デフォルト []) ナビゲーションサークルが使用されている場合に表示するツールチップを定義します。例: `navigationTooltips: ['firstSlide', 'secondSlide']`。お好みで、各セクションの `data-tooltip` 属性を用いて定義することもできます。

- `showActiveTooltip`: (デフォルト `false`) バーティカルナビゲーションでアクティブに表示されているセクションに、持続的なツールチップを表示します。

- `slidesNavigation`: (デフォルト `false`) `true`に設定すると、サイト上のそれぞれのランドスケープスライダーに小さな円からなるナビゲーションバーが表示されます。

- `slidesNavPosition`: (デフォルト `bottom`) スライダーのランドスケープナビゲーションバーの位置を定義します。値として`top`と`bottom`を認めます。色など他のスタイルと同様に、topやbottomからの距離を決定するためにCSSスタイルを変更することができます。

- `scrollOverflow`: (デフォルト `true`) は、セクションやスライドの内容が高さよりも大きい場合に、そのセクションやスライドのスクロールを作成するかどうかを定義します。特定のセクションやスライドにfullpage.jsがスクロールバーを作成しないようにするには、`fp-noscroll`というクラスを使用します。例えば、`<div class="section fp-noscroll">`また、section要素で`fp-auto-height-responsive`を使用すると、レスポンシブモードでスクロールオーバーフローが適用されないようにすることができます。

- `scrollOverflowReset`: (デフォルト `false`) [fullpage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/)です。設定可能な値は`true`、`false`、`sections`、`slides`です。`true`に設定すると、他のセクション/スライドに移動する際に、スクロールバーでセクション/スライドの内容をスクロールアップします。こうすることで、セクション/スライドの下にあるセクションからスクロールした場合でも、常にコンテンツの先頭が表示されるようになります。セクションやスライドに `fp-no-scrollOverflowReset` クラスを追加すると、その特定のパネルでこの機能を無効にすることができます。

- `scrollOverflowMacStyle`: (デフォルトは `false`) です。このオプションが有効な場合、スクロールバーはデフォルトのものではなく、"mac style"が使用されます。

- `sectionSelector`: (デフォルト `.section`) プラグインのセクションで使用されるJavascriptのセレクタを定義します。他のプラグインがfullpage.jsと同じセレクタを使用している場合の問題を避けるために、時々変更する必要があるかもしれません。

- `slideSelector`: (デフォルト `.slide`) プラグインのスライドに使用されるJavascriptのセレクタを定義します。他のプラグインがfullpage.jsと同じセレクタを使用している場合の問題を避けるために、時々変更する必要があるかもしれません。

- `responsiveWidth`: (デフォルト `0`) ピクセル単位で定義された幅の下では、通常のスクロール (`autoScrolling:false`) が使用されます。ユーザーが独自のレスポンシブCSSに使用したい場合に備えて、bodyタグに`fp-responsive`というクラスが追加される。例えば、900に設定すると、ブラウザの幅が900以下になったときに、プラグインは通常のサイトのようにスクロールするようになります。

- `responsiveHeight`: (デフォルト `0`) ピクセル単位で定義された高さの下では、通常のスクロール(`autoScrolling:false`)が使用されます。ユーザーが独自のレスポンシブCSSに使用したい場合に備えて、bodyタグに`fp-responsive`というクラスが追加される。例えば、900に設定すると、ブラウザの高さが900以下になったときに、プラグインは通常のサイトのようにスクロールします。

- `responsiveSlides`: (デフォルト `false`) [fullpage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/)。`true` に設定すると、レスポンシブモードが起動したときに、スライドが縦長のセクションになります。(上記の `responsiveWidth` または `responsiveHeight` オプションを使用することで)。fullpage.js >= 3.0.1が必要です。

- `parallax`: (デフォルト `false`) [fullpage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/)。セクション/スライドにパララックス背景効果を使用するかどうかを定義します。[パララックスオプションの適用方法について詳しくはこちら](https://github.com/alvarotrigo/fullPage.js/blob/master/lang/japanese/parallax-extension.md).

- `parallaxOptions`: (デフォルト: `{ type: 'reveal', percentage: 62, property: 'translate'}`)。オプション `parallax:true` を使用したときのパララックス背景効果のパラメータを設定することができます。[パララックスオプションの適用方法について詳しくはこちら](https://github.com/alvarotrigo/fullPage.js/blob/master/lang/japanese/parallax-extension.md)。

- `dropEffect` (デフォルト `false`) [fullpage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/)。セクション/スライドにドロップ効果を使用するかどうかを定義します。[ドロップ効果オプションの適用方法について詳しくはこちら](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Drop-Effect)。

- `dropEffectOptions`: (デフォルト: `{ speed: 2300, color: '#F82F4D', zIndex: 9999}`)。オプション `dropEffect:true` を使用したときのドロップエフェクトのパラメータを設定することができます。[ドロップ効果オプションの適用方法について詳しくはこちら](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Drop-Effect)。

- `waterEffect` (デフォルト `false`) [fullpage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/)。セクション/スライドに水の効果を使用するかどうかを定義します。[ウォーターエフェクトオプションの適用方法について詳しくはこちら](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Water-Effect).

- `waterEffectOptions`: (デフォルト: `{ animateContent: true, animateOnMouseMove: true}`)。オプション `waterEffect:true` を使用した場合の水の効果に関するパラメータを設定することができます。[ウォーターエフェクトオプションの適用方法について詳しくはこちら](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Water-Effect)。

- `cards`: (デフォルト `false`) [fullpage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/)。セクション/スライドにカード効果を使用するかどうかを定義します。[cardオプションの適用方法について詳しくはこちら](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards)。

- `cardsOptions`: (デフォルト: `{ perspective: 100, fadeContent: true, fadeBackground: true}`)。オプション`cards:true`を使用したときのcardエフェクトのパラメータを設定することができます。[cardsオプションの適用方法について詳しくはこちら](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards)。

- `lazyLoading`: (デフォルト `true`) 遅延ロードはデフォルトで有効になっており、[遅延ローディングドキュメント](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#遅延ローディング)にあるように`data-src`属性を含むメディア要素はすべて遅延ロードされることを意味します。もし、他の遅延ロードライブラリを使用したい場合は、このfullpage.jsの機能を無効にすることができます。

- `observer`: (デフォルト `true`) ページの HTML 構造の変更を監視するかどうかを定義します。有効にすると、fullPage.jsはそれらの変更に自動的に反応し、それに応じて自分自身を更新します。セクションやスライドを追加、削除、非表示にするときに最適です。

- `credits`. (デフォルト `{enabled: true, label: 'Made with fullpage.js', position: 'right'}`)。fullPage.jsのクレジットを使用するかどうかを定義します。GPLv3ライセンス第0、4、5、7項により、GPLv3でfullPage.jsを使用する場合、fullPage.jsが使用されていることを目立つように表示することが義務付けられています。このオプションを有効にして、アトリビューションを含めることをお勧めします。

## メソッド
その様子は[こちら](http://alvarotrigo.com/fullPage/examples/methods.html)で見ることができます

### getActiveSection()
[デモ](https://codepen.io/alvarotrigo/pen/VdpzRN/) アクティブなセクションとそのプロパティを含むオブジェクト (タイプ [Section](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese#コールバック)) を取得します。

```javascript
fullpage_api.getActiveSection();
```

### getActiveSlide()
[デモ](https://codepen.io/alvarotrigo/pen/VdpzRN/) アクティブなスライドとそのプロパティを含むオブジェクト (タイプ [Slide](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese#コールバック))を取得します。

```javascript
fullpage_api.getActiveSlide();
```

### getScrollY() & getScrollX
[デモ](https://codepen.io/alvarotrigo/pen/GRyGqro) `getScrollY` fullPageラッパーのY位置を取得します。`getScrollX`はアクティブな水平スライドのX位置を取得します。

```javascript
fullpage_api.getScrollY();
fullpage_api.getScrollX();
```

### moveSectionUp()
[デモ](http://codepen.io/alvarotrigo/pen/GJXNMN) 1つ上のセクションをスクロールします:
```javascript
fullpage_api.moveSectionUp();
```
---
### moveSectionDown()
[デモ](http://codepen.io/alvarotrigo/pen/jPvVZx) 1つ下のセクションをスクロールします:
```javascript
fullpage_api.moveSectionDown();
```
---
### moveTo(section, slide)
[デモ](http://codepen.io/alvarotrigo/pen/doqOmY) 指定されたセクションとスライドにページをスクロールします。最初のセクションはインデックス1を持ち、最初のスライド（デフォルトで表示されているもの）はインデックス0を持ちます。
```javascript
/*アンカーリンク `firstSlide` のあるセクションと2枚目のスライドにスクロールする */
fullpage_api.moveTo('firstSlide', 2);

```

```javascript
//サイト内の3番目のセクション（インデックス3付き）にスクロールする
fullpage_api.moveTo(3, 0);

//同じもの
fullpage_api.moveTo(3);
```
---
### silentMoveTo(section, slide)
[デモ](http://codepen.io/alvarotrigo/pen/doqOeY)
[`moveTo`](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#movetosection-slide)と全く同じですが、この場合はアニメーションなしでスクロールを行います。目的地まで直接ジャンプします。
```javascript
/*アンカーリンク `firstSlide` のあるセクションと2枚目のスライドにスクロールする */
fullpage_api.silentMoveTo('firstSlide', 2);
```
---
### moveSlideRight()
[デモ](http://codepen.io/alvarotrigo/pen/Wvgoyz)
現在のセクションの水平スライダーを次のスライドにスクロールする:
```javascript
fullpage_api.moveSlideRight();
```
---
### moveSlideLeft()
[デモ](http://codepen.io/alvarotrigo/pen/gpdLjW)
現在のセクションの水平スライダーを前のスライドにスクロールする:
```javascript
fullpage_api.moveSlideLeft();
```
---
### setAutoScrolling(boolean)
[デモ](http://codepen.io/alvarotrigo/pen/rVZWrR) リアルタイムでスクロールの設定を行います。
ページスクロールの動作方法を定義する。`true`に設定すると"自動"スクロールを使用し、そうでなければ"手動"またはサイトの"通常"スクロールを使用します。

```javascript
fullpage_api.setAutoScrolling(false);
```
---
### setFitToSection(boolean)
[デモ](http://codepen.io/alvarotrigo/pen/GJXNYm)
オプション`fitToSection`の値を設定し、セクションを画面に収めるかどうかを決定します。

```javascript
fullpage_api.setFitToSection(false);
```
---
### fitToSection()
[デモ](http://codepen.io/alvarotrigo/pen/JWWagj)
最も近いアクティブなセクションにスクロールして、ビューポートに収まるようにします。

```javascript
fullpage_api.fitToSection();
```
---
### setLockAnchors(boolean)
[デモ](http://codepen.io/alvarotrigo/pen/yNxVRQ)
アンカーが URL に影響を与えるかどうかを決定するオプション`lockAnchors`の値を設定します。

```javascript
fullpage_api.setLockAnchors(false);
```
---
### setAllowScrolling(boolean, [directions])
[デモ](http://codepen.io/alvarotrigo/pen/EjeNdq) マウスホイール/トラックパッドまたはタッチジェスチャーを使用してセクション/スライドをスクロールする機能を追加または削除します（デフォルトでアクティブになっています）。キーボードによるスクロールを無効にするものではありません。あなたは
`setKeyboardScrolling`を使用する必要があります。

- `directions`: (オプションのパラメータ) 許容される値です。`all`, `up`, `down`, `left`, `right` またはそれらを `down, right` のようにカンマで区切って指定します。スクロールの有効化・無効化の方向を定義します。

```javascript

//スクロール無効化
fullpage_api.setAllowScrolling(false);

//下スクロール無効化
fullpage_api.setAllowScrolling(false, 'down');

//下と右のスクロール無効化
fullpage_api.setAllowScrolling(false, 'down, right');
```
---
### setKeyboardScrolling(boolean, [directions])
[デモ](http://codepen.io/alvarotrigo/pen/GJXNwm) キーボードを使用してセクションをスクロールする機能を追加または削除します（デフォルトでアクティブになっています）。

- `directions`: (オプションのパラメータ) 許容される値です。`all`, `up`, `down`, `left`, `right`またはそれらを`down, right`のようにカンマで区切って指定します。スクロールの有効化・無効化の方向を定義します。

```javascript
//キーボードのスクロールをすべて無効化
fullpage_api.setKeyboardScrolling(false);

//キーボードの下スクロールを無効化
fullpage_api.setKeyboardScrolling(false, 'down');

//キーボードの下と右のスクロールを無効化
fullpage_api.setKeyboardScrolling(false, 'down, right');
```
---
### setRecordHistory(boolean)
[デモ](http://codepen.io/alvarotrigo/pen/rVZWQb) URLのハッシュの変更ごとに履歴を記録するかどうかを定義します。

```javascript
fullpage_api.setRecordHistory(false);
```
---
### setScrollingSpeed(milliseconds)
[デモ](http://codepen.io/alvarotrigo/pen/NqLbeY) スクロールの速度をミリ秒単位で定義する。

```javascript
fullpage_api.setScrollingSpeed(700);
```
---
### destroy(type)
[デモ](http://codepen.io/alvarotrigo/pen/bdxBzv) プラグインイベントと、オプションでそのHTMLマークアップとスタイルを破棄します。
AJAXを使用してコンテンツを読み込む際に使用するのが理想的です。

- `type`: (オプションのパラメータ)には、空または`all`を指定します。`all`を渡すと、fullpage.jsが使用していたHTMLのマークアップとスタイルが削除されます。こうすることで、オリジナルのHTMLマークアップ、つまりプラグインを変更する前に使われていたマークアップが維持されます。

```javascript
//fullPage.jsが生成するすべてのJavascriptイベント（スクロール、URLのハッシュチェンジなど）を破棄します。
fullpage_api.destroy();

//すべてのJavascriptイベントと、fullPage.jsがあなたのオリジナルのHTMLマークアップに対して行った変更を破棄します。
fullpage_api.destroy('all');
```
---
### reBuild()
新しいウィンドウサイズまたはそのコンテンツに合わせてDOM構造を更新します。
 特に`scrollOverflow:true`を使用しているときに、AJAXコールやサイトのDOM構造の外部変更と組み合わせて使用するのが理想的です。

```javascript
fullpage_api.reBuild();
```
---
### setResponsive(boolean)
[デモ](http://codepen.io/alvarotrigo/pen/WxOyLA) ページのレスポンシブモードを設定します。`true`に設定すると、自動スクロールがオフになり、`responsiveWidth`や`responsiveHeight`オプションが実行されたときとまったく同じ結果になります。
```javascript
fullpage_api.setResponsive(true);
```
---
### responsiveSlides.toSections()
[fullpage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/)。fullpage.js >= 3.0.1が必要です。
水平方向のスライドを垂直方向のセクションに変換する。

```javascript
fullpage_api.responsiveSlides.toSections();
```
---
### responsiveSlides.toSlides()
[fullpage.jsの拡張機能](http://alvarotrigo.com/fullPage/extensions/)。fullpage.js >= 3.0.1が必要です。
元のスライド（現在は縦に分割されている）を、再び横のスライドに戻す。

```javascript
fullpage_api.responsiveSlides.toSlides();
```

## コールバック
[デモ](http://codepen.io/alvarotrigo/pen/XbPNQv) その様子は[こちら](http://alvarotrigo.com/fullPage/examples/callbacks.html)でご覧いただけます。

`onLeave`のようないくつかのコールバックは、以下のプロパティを含むObjectタイプのパラメータを含みます:

- `anchor`: *(String)* 項目のアンカー。
- `index`: *(Number)* 項目のインデックス。
- `item`: *(DOM element)* 項目のインデックス。
- `isFirst`: *(Boolean)* item が最初の子であるかどうかを判断します。
- `isLast`: *(Boolean)* は、そのアイテムが最後の子であるかどうかを決定します。

### afterLoad (`origin`, `destination`, `direction`, `trigger`)
[デモ](http://codepen.io/alvarotrigo/pen/XbPNQv) セクションの読み込みが完了し、スクロールが終了した後に実行されるコールバックです。
パラメータ:

- `origin`: *(Object)* 原点のセクション。
- `destination`: *(Object)* 行き先のセクション。
- `direction`: *(String)* スクロールの方向によって`up`または`down`という値をとります。
- `trigger`: *(String)* はスクロールのトリガーとなったものを示します。以下のようになる:"wheel", "keydown", "menu", "slideArrow", "verticalNav", "horizontalNav"。

例:

```javascript
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterLoad: function(origin, destination, direction, trigger){
		var origin = this;

		//インデックスの使用
		if(origin.index == 2){
			alert("Section 3 ended loading");
		}

		//アンカーリンクの使用
		if(origin.anchor == 'secondSlide'){
			alert("Section 2 ended loading");
		}
	}
});
```

---
### onLeave (`origin`, `destination`, `direction`, `trigger`)
[デモ](http://codepen.io/alvarotrigo/pen/XbPNQv) このコールバックは、ユーザーがセクションを出た後、新しいセクションに移行する際に起動されます。
`false`を返すと、移動が行われる前にキャンセルされます。

パラメータ:

- `origin`: *(Object)* 原点のセクション。
- `destination`: *(Object)* 行き先のセクション。
- `direction`: *(String)* スクロールの方向によって `up` または `down` という値をとります。
- `trigger`: *(String)* スクロールのトリガーとなるものを指定します。以下のようになる:"wheel", "keydown", "menu", "slideArrow", "verticalNav", "horizontalNav"。

例:

```javascript
new fullpage('#fullpage', {
	onLeave: function(origin, destination, direction, trigger){
		var leavingSection = this;

		//セクション2を離れた後
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
[デモ](http://codepen.io/alvarotrigo/pen/XbPNQv) このコールバックは、セクションを出る**直前**（トランジションが起こる直前）に発火します。

このコールバックを使用すると、`false`を返すことでスクロールが行われる前に防止したり、キャンセルしたりすることができます。

パラメータ:

- `origin`:  *(Object)* 原点のセクション。
- `destination`: *(Object)* 行き先のセクション。
- `direction`: *(String)* スクロールの方向によって`up`または`down`という値をとります。
- `trigger`: *(String)* スクロールのトリガーとなるものを指定します。以下のようになる:"wheel", "keydown", "menu", "slideArrow", "verticalNav", "horizontalNav"。

例:

```javascript

var cont = 0;
new fullpage('#fullpage', {
	beforeLeave: function(origin, destination, direction, trigger){

		// 4回スクロールするまでのスクロールを防止
		cont++;
		return cont === 4;
	}
});
```

---
### afterRender()
[デモ](http://codepen.io/alvarotrigo/pen/XbPNQv) このコールバックは、ページの構造が生成された直後に起動されます。このコールバックは、他のプラグインを初期化するときや、ドキュメントを準備する必要があるコードを実行するときに使用します（このプラグインは結果の構造を作成するためにDOMを変更するため）。詳しくは、[FAQs](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)をご覧ください。

例:

```javascript
new fullpage('#fullpage', {
	afterRender: function(){
		var pluginContainer = this;
		alert("The resulting DOM structure is ready");
	}
});
```
---
### afterResize(`width`, `height`)
[デモ](http://codepen.io/alvarotrigo/pen/XbPNQv) このコールバックは、ブラウザのウィンドウをリサイズした後に起動されます。セクションのサイズが変更された直後です。

パラメータ:

- `width`:  *(Number)* ウィンドウの幅。
- `height`: *(Number)* ウィンドウの高さ。

例:

```javascript
new fullpage('#fullpage', {
	afterResize: function(width, height){
		var fullpageContainer = this;
		alert("The sections have finished resizing");
	}
});
```
---
### afterReBuild()
[デモ](http://codepen.io/alvarotrigo/pen/XbPNQv) このコールバックは、手動で`fullpage_api.reBuild()`を呼び出してfullpage.jsを再ビルドした後に実行されます。

例:

```javascript
new fullpage('#fullpage', {
	afterReBuild: function(){
		console.log("fullPage.js has manually being re-builded");
	}
});
```
---
### afterResponsive(`isResponsive`)
[デモ](http://codepen.io/alvarotrigo/pen/XbPNQv) fullpage.jsが通常モードからレスポンシブモードへ、またはレスポンシブモードから通常モードへ移行した後に起動されるコールバックです。

パラメータ:

- `isResponsive`: *(Boolean)* レスポンシブモードに入るか(`true`)または通常モードに戻るか(`false`)を決定します。

例:

```javascript
new fullpage('#fullpage', {
	afterResponsive: function(isResponsive){
		alert("Is responsive: " + isResponsive);
	}
});
```
---
### afterSlideLoad (`section`, `origin`, `destination`, `direction`, `trigger`)
[デモ](http://codepen.io/alvarotrigo/pen/XbPNQv) セクションのスライドがロードされ、スクロールが終了した後に発行されるコールバックです。

パラメータ:

- `section`: *(Object)* アクティブな垂直セクション。
- `origin`: *(Object)* 原点の水平スライド。
- `destination`: *(Object)* 行き先の水平スライド。
- `direction`: *(String)* スクロールの方向によって、`right`または`left`となります。
- `trigger`: *(String)* スクロールのトリガーとなったものを示します。以下のようになる:"wheel", "keydown", "menu", "slideArrow", "verticalNav", "horizontalNav"。

例:

```javascript
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterSlideLoad: function( section, origin, destination, direction, trigger){
		var loadedSlide = this;

		//第二セクションの第一スライド
		if(section.anchor == 'secondPage' && destination.index == 1){
			alert("First slide loaded");
		}

		//2番目のセクションの2番目のスライド（#secondSlideが2番目のスライド
		//が2番目のスライドのアンカーであると仮定します)
		if(section.index == 1 && destination.anchor == 'secondSlide'){
			alert("Second slide loaded");
		}
	}
});
```


---
### onSlideLeave (`section`, `origin`, `destination`, `direction`, `trigger`)
[デモ](http://codepen.io/alvarotrigo/pen/XbPNQv) このコールバックは、ユーザーがあるスライドから別のスライドに移動する際に、新しいスライドに移行する際に起動されます。
`false`を返すと、移動が実行される前にキャンセルされます。

パラメータ:

- `section`: *(Object)* アクティブな垂直セクション。
- `origin`: *(Object)* 原点の水平スライド。
- `destination`: *(Object)* 行き先の水平スライド。
- `direction`: *(String)* スクロールの方向によって、`right`または`left`となります。
- `trigger`: *(String)* スクロールのトリガーとなったものを示します。以下のようになる:"wheel", "keydown", "menu", "slideArrow", "verticalNav", "horizontalNav"。

例:

```javascript
new fullpage('#fullpage', {
	onSlideLeave: function( section, origin, destination, direction, trigger){
		var leavingSlide = this;

		//第2セクションの最初のスライドを右側に残す
		if(section.index == 1 && origin.index == 0 && direction == 'right'){
			alert("Leaving the fist slide!!");
		}

		//第2セクションの3番目のスライドを左側に残す
		if(section.index == 1 && origin.index == 2 && direction == 'left'){
			alert("Going to slide 2! ");
		}
	}
});
```

#### 移動前のキャンセル
`onSlideLeave`コールバックで`false`を返すと、移動をキャンセルできます。[`onLeave`で移動をキャンセルするときと同じです](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/japanese/#onleave-origin-destination-direction-trigger)。


---
### onScrollOverflow (`section`, `slide`, `position`, `direction`)
[デモ](http://codepen.io/alvarotrigo/pen/XbPNQv) このコールバックは、fullPage.jsのオプション`scrollOverflow: true`を使用しているときに、スクロール可能なセクション内でスクロールが発生したときに発行されます。

パラメータ:

- `section`: *(Object)* アクティブな垂直セクションです。
- `slide`: *(Object)* 原点の水平スライド。
- `position`: *(Integer)* セクション/スライド内のスクロール量。0から始まります。
- `direction`: *(String)* `up`または`down`という値をとります。

例:

```javascript
new fullpage('#fullpage', {
	onScrollOverflow: function( section, slide, position, direction){
		console.log(section);
		console.log("position: " + position);
	}
});
```

# issuesのレポート
1. 質問する前に、GitHubのissue検索で課題を探してください。
2. 最新のfullpage.jsを使用していることを確認してください。古いバージョンのサポートは提供されません。
3. issueを作成するには、[GitHub Issuesフォーラム](https://github.com/alvarotrigo/fullPage.js/issues)を使用します。
4. **issueの再現が必要です。**できれば、[jsfiddle](https://jsfiddle.net/alvarotrigo/ea17skjr/)または[codepen](https://codepen.io/alvarotrigo/pen/qqabrp)を利用してください。

# fullpage.jsへのコントリビュート
[fullpage.jsへのコントリビュート](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)をご覧ください

# チェンジログ
最近の変更点の一覧は、[リリースセクション](https://github.com/alvarotrigo/fullPage.js/releases)をご覧ください。

# ビルドタスク
fullpage.jsの配布ファイルをビルドしたいですか？[ビルドタスク](https://github.com/alvarotrigo/fullPage.js/wiki/Build-tasks)をご覧ください

# リソース
- Wordpressプラグイン[Gutenberg用](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/)および[Elementor用](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/).
- [Wordpress theme](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [Vue.jsの公式ラッパーコンポーネント](https://github.com/alvarotrigo/vue-fullpage.js)
- [React.jsの公式ラッパーコンポーネント](https://github.com/alvarotrigo/react-fullpage)
- [Angularの公式ラッパーコンポーネント](https://github.com/alvarotrigo/angular-fullpage)
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (`easingcss3` の値を定義するのに便利です)
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

## fullPage.jsを使用しているユーザー

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

## 寄付
寄付は大歓迎です:)

[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## スポンサー
スポンサーになると、GitHub上のREADMEにあなたのサイトへのリンクとともにロゴを掲載することができます。[[Become a sponsor](https://alvarotrigo.com/#contact)] | [[Become a patreon]](https://www.patreon.com/fullpagejs)

[![Stackpath](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/stackpath3.png)](https://www.stackpath.com/)
[![Browserstack](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/browserstack3.png)](http://www.browserstack.com/)
[![CodePen](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codepen3.png)](https://codepen.com)
[![CodeFirst](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codefirst2.png)](https://www.codefirst.co.uk)

### People
<a href="https://github.com/donsalvadori" target="_blank" rel="nofollow">
	<img src="http://wallpapers-for-ipad.com/fullpage/imgs3/avatars/donsalvadori.jpg">
</a>

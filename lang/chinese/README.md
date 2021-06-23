# fullPage.js
![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.gif?v=2)

<p align="center">
  <a href="https://github.com/alvarotrigo/fullPage.js">English</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish#fullpagejs">Español</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/french#fullpagejs">Français</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#fullpagejs">Pусский</a> |
  <span>中文</span> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs">한국어</a>
</p>
<p align="center">
	适用于&nbsp;<a href="https://github.com/alvarotrigo/vue-fullpage.js">Vue</a>&nbsp;,&nbsp;<a href="https://github.com/alvarotrigo/react-fullpage">React</a>&nbsp;和&nbsp;<a href="https://github.com/alvarotrigo/angular-fullpage">Angular</a>
</p>

---

![fullPage.js version](http://img.shields.io/badge/fullPage.js-v3.1,2-brightgreen.svg)
[![License](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)
[![PayPal Donate](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/fullpage.js/badge?style=rounded)](https://www.jsdelivr.com/package/npm/fullpage.js)
&nbsp;&nbsp; **|**&nbsp;&nbsp; *7Kb gziped* &nbsp;&nbsp;**|**&nbsp;&nbsp; *Created by [@imac2](https://twitter.com/imac2)*

- [示例](http://alvarotrigo.com/fullPage/) | [Codepen](https://codepen.io/alvarotrigo/pen/NxyPPp)
- [Wordpress plugin for Gutenberg](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/) and [WordPress pluging fo Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)
- [Wordpress 的主题](http://alvarotrigo.com/fullPage/utils/wordpress.html)
- [fullpage.js 扩展](http://alvarotrigo.com/fullPage/extensions/)
- [常见问题](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)

---

通过调用本库可轻易创建全屏滚动网站(也称为单页网站)。
本库可创建全屏滚动网站，同时也可在网站中添加横向滚动条。

- [介绍](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E4%BB%8B%E7%BB%8D)
- [兼容性](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E5%85%BC%E5%AE%B9%E6%80%A7)
- [许可证](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E8%AE%B8%E5%8F%AF%E8%AF%81)
- [用法](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E7%94%A8%E6%B3%95)
  - [创建链接到 section 或 slide](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E5%88%9B%E5%BB%BA%E9%93%BE%E6%8E%A5%E5%88%B0%E6%AE%B5%E8%90%BD%E6%88%96%E5%B9%BB%E7%81%AF%E7%89%87)
  - [创建更小或更大的 section](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E5%88%9B%E5%BB%BA%E6%9B%B4%E5%B0%8F%E6%88%96%E6%9B%B4%E5%A4%A7%E7%9A%84%E6%AE%B5%E8%90%BD)
  - [fullpage.js 添加的状态类](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E7%94%B1fullpagejs%E6%B7%BB%E5%8A%A0%E7%9A%84%E7%8A%B6%E6%80%81%E7%B1%BB)
  - [快速加载](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD)
  - [自动播放内嵌媒体](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E8%87%AA%E5%8A%A8%E6%92%AD%E6%94%BE%E6%9A%82%E5%81%9C%E5%B5%8C%E5%85%A5%E5%BC%8F%E5%AA%92%E4%BD%93)
  - [使用扩展](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E4%BD%BF%E7%94%A8%E6%89%A9%E5%B1%95)
- [参数](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E9%80%89%E9%A1%B9)
- [公共方法](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E6%96%B9%E6%B3%95)
- [回调函数](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#callbacks)
- [问题反馈](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E6%8A%A5%E5%91%8A%E9%97%AE%E9%A2%98)
- [贡献到 fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E8%B4%A1%E7%8C%AE%E7%BB%99fullpagejs)
- [更新日志](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97)
- [编译构建](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E6%9E%84%E5%BB%BA%E4%BB%BB%E5%8A%A1)
- [参考资源](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E5%8F%82%E8%80%83%E8%B5%84%E6%BA%90)
- [谁在使用 fullpage.js](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E8%B0%81%E5%9C%A8%E4%BD%BF%E7%94%A8-fullpagejs)
- [赞助](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E6%8D%90%E7%8C%AE)

## 介绍
不仅限于提需求，也欢迎提出编码风格改进的建议。
集思广益，让这个库更加强大，让写代码更轻松！

## 兼容性
fullPage.js 兼容所有的现代浏览器，以及一些旧版浏览器，如 Internet Explorer 9，Opera 12 等都能兼容。
可兼容支持 CSS3 的浏览器与非支持 CSS3 的浏览器，适用于旧版浏览器。 同时，手机、平板电脑和触摸屏电脑还提供触屏支持。

特别感谢 [Browserstack](http://www.browserstack.com/) 支持 fullpage.js 。

## 许可证

### 商业许可证
如果您想使用 fullPage 开发商业网站、主题、项目和应用程序，商业许可证是您应使用的许可证。使用这个许可证，您的源代码将保留专有权。 这意味着，您不必将整个应用程序源代码更改为开源许可证。[点击此处购买fullpage 商业许可证](https://alvarotrigo.com/fullPage/pricing/)

### 开源许可证
如果您使用与 [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html) 兼容的许可证创建开源应用程序，则可以在 GPLv3 条款下使用 fullPage。

**JavaScript 和 CSS 文件中的认可的意见应保持完整的许可证 (即使在合并或压缩后）**

[阅读更多关于 fullPage 的许可证](https://alvarotrigo.com/fullPage/pricing/)。




## 用法
正如示例文件所示，需要引用：
 - JavaScript 文件 `fullpage.js` (或其压缩版本 `fullpage.min.js`)
 - css 文件 `fullpage.css`

**可选**，使用 `css3:false` 时，如果您想要使用库中包含的其他缓动效果的功能（ `easeInOutCubic` ），您可以添加 [easings file](https://github.com/alvarotrigo/fullPage.js/tree/master/vendors/easings.min.js)。

### 使用 bower 或 npm 进行安装
**或者**，如果您愿意，可以使用 bower 或 npm 安装 fullPage.js：

终端：
```shell
// 使用 bower
bower install fullpage.js

// 使用 npm
npm install fullpage.js
```

### 包含文件：
```html
<link rel="stylesheet" type="text/css" href="fullpage.css" />

<!-- 以下行是可选的。 只有在使用选项 css3:false ，并且您希望使用其他缓动效果，而非 linear 、 swing 或 easeInOutCubic 时才有必要。 -->
<script src="vendors/easings.min.js"></script>

<!-- 以下行仅在使用选项 scrollOverflow:true 的情况下是必需的 -->
<script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>
<script type="text/javascript" src="fullpage.js"></script>
```

Using Webpack, Browserify or Require.js? Check <a href="https://github.com/alvarotrigo/fullPage.js/wiki/Use-module-loaders-for-fullPage.js">how to use fullPage.js with module loaders</a> .

### 可选用 CDN ：
如果您倾向使用 CDN 载入所需文件，fullPage.js 在 CDNJS：
https://cdnjs.com/libraries/fullPage.js

### 要求 HTML 结构
HTML 文件中的首行 HTML 代码必须使用 [HTML DOCTYPE 声明](http://www.corelangs.com/html/introduction/doctype.html)，否则可能会遇到代码段高度问题。HTML 5 doctype 中的示例： `<!DOCTYPE html>`.

每个代码段定义为包含 `section` 类的元素。
默认情况下，第一个 section 代码段，将被视为主页。
代码段应进行封装（即 `<div id="fullpage">` ）。 封装不能是 `body` 元素。

```html
<div id="fullpage">
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
</div>
```
如果你想定义一个与众不同的起始页面，而不是原始第一段或第一个滑动页，只需将 `active` 类添加到你想首先载入的段或滑动页。
```html
<div class="section active">Some section</div>
```
为在代码段中创建横向滑块，每个滑动页将默认定义为包含 `slide` 类的元素：

```html
<div class="section">
	<div class="slide"> slide 1 </div>
	<div class="slide"> slide 2 </div>
	<div class="slide"> slide 3 </div>
	<div class="slide"> slide 4 </div>
</div>
````
可以在 [simple.html 文件](https://github.com/alvarotrigo/fullPage.js/tree/master/examples/simple.html) 看到完整的 HTML 结构的例子

### 初始化

#### 用 Vanilla Javascript 初始化
您只需要在关闭 `</body>` 标签之前调用 fullPage.js。

```javascript
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

//methods
fullpage_api.setAllowScrolling(false);
```

#### 使用 jQuery 进行初始化
如果您需要，您也可以将 fullpage.js 作为 jQuery 插件使用！

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

函数和方法仍然可以用 jQuery 方式调用，如在 [fullPage.js v2.X](https://github.com/alvarotrigo/fullPage.js/tree/2.9.7) 中一样。

#### 带有所有功能选项的 Vanilla JS 演示
所有选项的更复杂的初始化如下所示：
```javascript
var myFullpage = new fullpage('#fullpage', {
	//导航
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//滚动
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

	//可访问
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//布局
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


	//自定义选择器
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//事件
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

### 创建链接到 section 或 slide
如果你在 section 中使用 fullPage.js 和锚链接（在每个 section 使用 `anchors` 选项或属性 `data-anchor` ），那么你将能够在一个 section 里使用锚链接直接导航到某个 slide。

这是一个锚链接的例子：
http://alvarotrigo.com/fullPage/#secondPage/2 （在你手动访问该 section/slide 就会看到的 URL ）
请注意，URL 的最后部分以 `＃secondPage / 2` 结尾。

以下初始化：

```javascript
new fullpage('#fullpage', {
	anchors:['firstPage', 'secondPage', 'thirdPage']
});
```

URL `#secondPage/2`  结尾处的锚分别定义了目标 section 和 slide 。 在前面的 URL 中，目标 section 将是使用锚点  `secondPage`  定义的 section ，slide 将会是第 2 张 slide ，因为我们使用索引  `2`  。 （一个 section 的第一个 slide 有索引 0 ，在技术上这是一个 section ）。

如果我们在HTML标记中使用属性 `data-anchor` ，就可以使用自定义锚点来代替它的索引：

```html
<div class="section">
	<div class="slide" data-anchor="slide1"> slide 1 </div>
	<div class="slide" data-anchor="slide2"> slide 2 </div>
	<div class="slide" data-anchor="slide3"> slide 3 </div>
	<div class="slide" data-anchor="slide4"> slide 4 </div>
</div>
```
在最后一种情况中，我们使用的URL将是 `#secondPage/slide3` ，这相当于之前的 `#secondPage/2` 。

请注意，如果没有提供 `anchors` 数组，则也可以使用 `data-anchor` 属性以同样的方式定义节锚点。

**注意！**`data-anchor` 标记的值不能与站点上的任何 ID 元素（或 IE 的 NAME 元素）相同。

### 创建更小或更大的 section
[演示](http://codepen.io/alvarotrigo/pen/BKjRYm) fullPage.js 提供了一种方法来删除 section 和 slide 的全屏高度限制。 可以创建高度小于或大于视图的section 。 这是页脚的理想方式。
需明白所有 section 使用此功能并没有意义，这一点很重要。 如果网站的初始加载中有多个 section，则fullPage.js 将不会滚动以查看下一个 section ，因为它已经在视图中。

创建更小的 section ，只需在要应用的 section 中使用 `fp-auto-height`  类即可，则可以调用您的 section/slide 中定义的高度。

```html
<div class="section">整个视图</div>
<div class="section fp-auto-height">自动高度</div>
```

#### section 响应自动高度
[演示](https://codepen.io/alvarotrigo/pen/MzByMa) 响应自动高度可以通过使用 `fp-auto-height-responsive` 类来调用。 这种方式 section 将全屏，直到响应模式终止。 根据定义调整大小，可能是大于或小于视口。

### 由 fullpage.js 添加的状态类
Fullpage.js 在不同的元素中添加多个类型来保存网站状态的记录：

- `active` 被添加到当前可见 section 和 slide 。
- `active` 被添加到当前菜单元素（如果使用 `menu` 选项）。
- `fp-viewing-SECTION-SLIDE` 形式的类型被添加到网站的 `body` 元素中。(例如： [`fp-viewing-secondPage-0`](http://alvarotrigo.com/fullPage/#secondPage)) `SECTION` 和 `SLIDE` 部分将成为当前 section 和 slide 的锚（或索引，如果没有提供锚）。
- 当进入响应模式时，`fp-responsive` 添加到 `body` 元素
- 当启用 fullpage.js 时，`fp-enabled` 添加到 `html` 元素。 （并在销毁时被移除）。
- 当 fullPage.js 被销毁时，`fp-destroyed` 被添加到 fullpage.js 容器中。

### 懒加载
[演示](http://codepen.io/alvarotrigo/pen/eNLBXo) fullPage.js 提供了一种延迟加载图像、视频和音频元素的方式，这样它们不会减缓网站的加载速度，也不会浪费数据传输。
当使用懒加载时，所有这些元素只有在进入视口时才会加载。
要启用懒加载，您只需将 `src` 属性更改为 `data-src` ，如下所示：

```
<img data-src="image.png">
<video>
	<source data-src="video.webm" type="video/webm" />
	<source data-src="video.mp4" type="video/mp4" />
</video>
```

如果您已经使用另一个使用 `data-src` 的延懒载解决方案，则可以通过设置 `lazyLoading: false` 选项来禁用fullPage.js 懒加载。

### 自动播放/暂停嵌入式媒体

[演示](https://codepen.io/alvarotrigo/pen/pXEaaK) **注意**：根据操作系统和浏览器的不同，自动播放功能可能无法在某些移动设备上使用（即 [IOS 的 Safari](https://webkit.org/blog/6784/new-video-policies-for-ios/) 版本 < 10.0）。

#### 在 section/slide 载入：
对于视频或音频使用属性 `autoplay`，或者对于 youtube iframe 使用参数 `autoplay=1` 将使得在加载页面时播放媒体元素。
在 section/slide 载入使用而不是属性 `data-autoplay` 播放。 例如：

```html
<audio data-autoplay>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

#### 失焦暂停
嵌入式 HTML5 `<video>` / `<audio>` 和 Youtube iframe 在离开某个 section 或 slide 时自动暂停。 可以通过使用属性 `data-keepplaying` 来禁用。 例如：
```html
<audio data-keepplaying>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

### 使用扩展
fullpage.js [提供了一组扩展](http://alvarotrigo.com/fullPage/extensions/) 您可以使用它来增强其默认功能。 所有这些都被列为 [fullpage.js 选项](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E9%80%89%E9%A1%B9).

扩展需要使用在 [`dist` 文件夹](https://github.com/alvarotrigo/fullPage.js/tree/master/dist/) 中的压缩文件 [`fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/tree/master/dist/fullpage.extensions.min.js)，而不是一贯的使用 fullPage.js 文件 (`fullpage.js` 或 `fullpage.min.js`)。

一旦你需要扩展文件，你需要在 fullPage 之前添加它。 例如，如果我想要使用 Continuos Horizontal 扩展，我将包含扩展文件，然后包含 fullPage 文件的扩展版本。

```html
<script type="text/javascript" src="fullpage.continuousHorizontal.min.js"></script>
<script type="text/javascript" src="fullpage/fullpage.extensions.min.js"></script>
```

每个扩展都需要激活密钥和许可证密钥。[在这里看到更多细节](https://github.com/alvarotrigo/fullPage.js/blob/master/lang/chinese/how-to-activate-fullpage-extension.md).

然后你就可以按照 [选项](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E9%80%89%E9%A1%B9) 的说明使用和配置它们。

## 参数

-`licenseKey`：（默认 `null` ）。 **此选项是强制性的。**如果您在非开源项目中使用 fullPage ，则应使用购买fullPage 商业许可证时提供的许可证密钥。 如果您的项目是开放的，请[与我 [联系](https://alvarotrigo.com/fullPage/extensions/requestKey.html) 并提供指向您的存储库的链接以获取许可证密钥。 请阅读更多关于许可 [这里](https://github.com/alvarotrigo/fullPage.js#license) 和 [在网页上](https://alvarotrigo.com/fullPage/pricing/) 。例如：

```javascript
new fullpage({
    licenseKey: 'YOUR_KEY_HERE'
});
```

- `v2compatible` : (默认 `false` ). 确定是否使其与版本 2 编写的任何代码 100％ 兼容，忽略版本 3 的新功能或 api 更改。状态类型，回调签名等的将按照版本 2 相同的方式。**请注意该选项将在之后的某个时候被移除** 。

- `controlArrows`：（默认为 `true`）确定是否将 slide 的控制箭头向右或向左移动。

- `verticalCentered`：（默认为`true`）在 section 内部垂直居中。 当设置为 `true` 时，您的代码将被库包装。可考虑使用委托或在 `afterRender` 回调中加载其他脚本。

- `scrollingSpeed`：（默认 `700` ）滚动转换的速度（以毫秒为单位）。

- `sectionsColor`：（默认 `none` ）为每个 section 定义 CSS `background-color ` 属性。
例：
```javascript
new fullpage('#fullpage', {
	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});
```

- `anchors`：（默认`[]`）定义要在每个 section 的 URL 上显示的锚链接（#example）。 锚点的值应该是独一无二的。 数组中的锚的位置将限定锚被应用于哪些部分。 （第二 section 的第二个位置等等）。 通过浏览器也可以使用锚点向前和向后导航。 该选项还允许用户为特定的 section 或 slide 添加书签。 **注意！**锚点不能与站点上的任何 ID 元素（或 IE 的 NAME 元素）具有相同的值。
现在可以通过使用属性 `data-anchor` 直接在 HTML 结构中定义锚点，如此处所述。

- `lockAnchors`：（默认为 `false` ）确定 URL 中的锚是否在库中完全有效。 您仍然可以在函数和回调内部使用锚，但是它们在滚动网站时不起任何作用。 如果你想在 URL 中使用锚点来将 fullPage.js 和其他插件结合起来，那就很有用。

**重要**理解 `anchors` 选项数组中的值通过在标记中的位置直接关联到具有 `.section `类的元素是有帮助的。

- `easing` : (默认 `easeInOutCubic` ）定义用于垂直和水平滚动的过渡效果。
它需要文件 `vendors/easings.min.js` 或 [jQuery UI](http://jqueryui.com/) 来使用 [它的转换](http://api.jqueryui.com/easings/) 。 其他库可以用来代替。

- `easingcss3` : （默认 `ease` ）定义在使用 `css3：true` 的情况下使用的过渡效果。 你可以使用 [预定义的](http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp)（比如 `linear`，`ease-out` ...）或者使用 `贝塞尔曲线` 功能创建你自己的效果。 你可能想使用 [Matthew Lein CSS缓动动画工具](http://matthewlein.com/ceaser/) 。

- `loopTop`:（默认为 `false`）定义首尾链接滚动方式(首向上)。

- `loopBottom`: （默认为 `false`）定义首尾链接滚动方式(尾向下)。

- `loopHorizontal`:（默认为 `true` ）定义水平滑块是否在到达上一张或下一张后循环。

- `css3`: （默认 `true` ）。 定义 section 或 slide 转换动画使用 JavaScript 还是 CSS3 。 有助于通过支持 CSS3 的浏览器加速平板电脑和移动设备的移动。 如果此选项设置为 `true` ，并且浏览器不支持 CSS3 ，则将使用后者。

- `autoScrolling`: （默认为 `true` ）定义是使用“自动”滚动还是“正常”滚动。 它同时也影响了平板电脑和移动电话中浏览器/设备窗口部分适配的方式。

- `fitToSection`: （默认为 `true` ）确定是否将 section 适应视图。 当设置为 `true` 时，当前激活 section 将始终填充整个视图。 否者，section 可以停留在网页的任何位置。

- `fitToSectionDelay`: （默认 1000 ）。 如果 `fitToSection` 设置为 true ，则延迟
以毫秒为单位进行拟合。

- `scrollBar`: （默认 `false` ）确定是否使用站点的滚动条。 在使用滚动条的情况下，`autoScrolling` 功能仍将按预期工作。 用户也可以使用滚动条自由滚动网站，当滚动完成时，fullPage.js 将适配屏幕上的部分。

- `paddingTop`: （默认 `0` ）用数值和相对长度（paddingTop：'10px'，paddingTop：'10em'...）定义每个 section 的内边距( top )。

- `paddingBottom`: （默认为 `0` ）用数值和相对长度（paddingBottom：'10px'，paddingBottom：'10em'...）定义每个 section 的内边距( bottom )。 有利于有固定页脚的情况。

- `fixedElements`: （默认 `null` ）当使用 `css3` 选项保持固定时，定义哪些元素将从插件的滚动结构中移除。 它需要带有 Javascript 选择器的字符来表示这些元素。 （例如：`fixedElements：'＃element1，.element2'`）。

- `normalScrollElements`: （默认 `null` ）[示例](https://codepen.io/alvarotrigo/pen/RmVazM) 如果你想在滚动某些元素时避免自动滚动，这是你需要使用的选项。 （地图，滚动 div 等有用）它需要带有 Javascript 选择器的字符来表示这些元素。（例如：`normalScrollElements：'＃element1，.element2'` ）。 此选项不应该应用于任何 section/slide 元素本身。

- `bigSectionsDestination`: （默认 `null` ）[示例](https://codepen.io/alvarotrigo/pen/vYLdMrx) 定义如何滚动到超出视图的 section。 默认情况下，如果此section 在目标视图的顶部，fullPage.js 将滚动到顶部，如果此 section 在目标视图的底部，则会滚动到底部。 可选的值是 `top`，`bottom`，`null`。

- `keyboardScrolling`: （默认为 `true` ）定义是否可以使用键盘进行内容滑动。

- `touchSensitivity`: （默认 `5`）定义浏览器窗口宽度/高度的百分比，和触发滑动到下一个 section/slide 的距离的灵敏度。

- `continuousVertical`:（默认为 `false`）定义首位链接循环(最后一个 section 向下滚动，滚动到第一个section，或第一个 section 向上滚动时滚动到最后一个 section )。 不兼容 `loopTop` ，`loopBottom` 或站点中存在的任何滚动条（`scrollBar：true` 或 `autoScrolling：false` ）。

- `continuousHorizontal`: （默认 `false` ）[fullpage.js 的扩展](http://alvarotrigo.com/fullPage/extensions/)。 定义首位链接循环(最后一个 section 向下滚动，滚动到第一个 section ，或第一个 section 向上滚动时滚动到最后一个 section)。 不兼容`loopHorizontal`。 需要 fullpage.js> = 3.0.1。

- `scrollHorizontally`:（默认 `false` ）[fullpage.js 的扩展](http://alvarotrigo.com/fullPage/extensions/)。 定义是否使用鼠标滚轮或触控板在滑块内水平滑动。 它是在使用: `autoScrolling:true` 的理想状态. 需要 fullpage.js> = 3.0.1。

- `interlockedSlides`: （默认`false`）[fullpage.js 的扩展](http://alvarotrigo.com/fullPage/extensions/)。 确定移动一个水平滑块是否会强制滑块同方向上滑动到其他区域。 可选的值是 `true`，`false` 或带有互锁部分的数组。 例如 `[1,3,5]` 从 1 开始。需要fullpage.js> = 3.0.1。

- `dragAndMove`: （默认`false`）[fullpage.js 的扩展](http://alvarotrigo.com/fullPage/extensions/)。 启用或禁用鼠标或手指 section 或 slide 的触摸拖拽。 需要 fullpage.js> = 3.0.1。 可选的值是：
  - `true`: 启用该功能。
  - `false`: 禁用该功能。
  - `vertical`: 只能在垂直情况下启用该功能。
  - `horizontal`: 只能在水平情况下启用该功能。
  - `fingersonly`: 仅启用触摸设备的功能。
  - `mouseonly`: 仅启用桌面设备的功能（鼠标和触控板）。

- `offsetSections`: （默认 `false`）[fullpage.js 的扩展](http://alvarotrigo.com/fullPage/extensions/)。 提供基于百分比使用非全屏幕 section 的方法。 通过显示下 section 或上 section 的内容，适合向访问者显示网站中的更多内容。 需要 fullPage.js> = 3.0.1
要定义每 section 的百分比，必须使用属性 `data-percentage` 。 可以通过在属性 `data-centered` 中使用布尔值来使视图中 section 居中（如果未指定，则默认为 `true` ）。 例如：
``` html
<div class="section" data-percentage="80" data-centered="true">
```

- `resetSliders`: （默认 `false` ）。 [fullpage.js 的扩展](http://alvarotrigo.com/fullPage/extensions/)。 定义是否在离 section 后重置每个滑块。 需要fullpage.js> = 3.0.1。

- `fadingEffect`: （默认 `false` ）。 [fullpage.js 的扩展](http://alvarotrigo.com/fullPage/extensions/)。 定义是否使用淡入淡出效果，而不是默认的滚动效果。 可选的值是 `true`，`false`，`sections`，`slides` 。 它可以应用于垂直或水平方向，或者同时应用于两者。 需要 fullpage.js> = 3.0.1。

- `animateAnchor`: （默认`true`）定义锚点（＃）将以动画方式滚动或直接加载到目标 section。

- `recordHistory`: （默认为`true`）定义是否将网站的状态记录到浏览器的历史记录。 设置为 `true` 时，网站的每个 section/slide 片将作为新页面，浏览器的后退和前进按钮将滚动 section/slide 以达到网站的上一个或下一个状态。 当设置为 `false` 时，URL 将保持更改，但不会影响浏览器的历史记录。 使用 `autoScrolling：false` 时，该选项会自动关闭。

- `menu`: （默认 `false` ）选择器可以用来指定菜单链接到锚。 这样 section 的滚动将使用 active 状态激活菜单中的相应元素。这不会生成菜单，而只是将 active 状态添加到给定菜单中的元素，并带有相应的锚链接。
为了将菜单的元素与各个部分相链接，将需要一个HTML 5 数据标签（data-menuanchor）来关联在 section中使用的锚链接。 例：
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

**注意：** 菜单元素应放置在 fullpage 包裹对象外，以避免使用 `css3：true` 时出现问题。 否则它会被插件本身附加到 `body` 。

- `navigation`: （默认 `false` ）如果设置为 `true` ，则会显示一个由小圆圈组成的导航栏。

- `navigationPosition`: （默认 `none` ）可以设置为 `left` 或 `right` ，并定义导航栏显示的位置（如果使用的话）。

- `navigationTooltips`: （默认为[]）定义要使用导航圈的提示。 例如：`navigationTooltips：['firstSlide'，'secondSlide']`。 如果您愿意，也可以在每个部分中使用属性 `data-tooltip` 来定义它们。

- `showActiveTooltip`: （默认为 `false`）在显示垂直导航中主动显提示。

- `slidesNavigation`: （默认为 `false`）如果设置为 `true` ，则会显示一个导航栏，该导航栏由站点上每个横向滑块的小圆圈组成。

- `slidesNavPosition`: （默认`bottom`）定义滑块的横向导航栏的位置。 值为 `top` 和 `bottom` 。 您可能需要修改 CSS 样式以确定从顶部或底部距离以及任何其他样式（如颜色）。

- `scrollOverflow`: （默认为 `false`）定义在内容大于它的高度的情况下是否为 section/slide 创建滚动。 当设置为 `true  ` 时，您的内容将被插件包裹。 考虑使用委托或在 `afterRender` 回调中加载其他脚本。
如果设置为 `true`，则需要库 [`scrolloverflow.min.js`](https://github.com/alvarotrigo/fullPage.js/tree/master/vendors/scrolloverflow.min.js) 。 这个文件必须在 fullPage.js 插件之前而非jQuery（在使用它的情况下）加载。
例如：

```html
<script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>
<script type="text/javascript" src="fullpage.js"></script>
```

为了防止 fullpage.js 在某些 section 或 slide 中创建滚动条，请使用 `fp-noscroll` 类。 例如： `<div class="section fp-noscroll">`

在 section 元素中使用 `fp-auto-height-responsive` 时，您也可以防止 scrolloverflow 应用于响应模式。

- `scrollOverflowReset`:（默认`false`）[fullpage.js 的扩展](http://alvarotrigo.com/fullPage/extensions/)。 如果设置为 `true` ，当离开另一个垂直 section时，将使用滚动条向上滚动 section/slide 的内容。 这样，即使从 section 的下方滚动，section/slide 也会始终显示其内容的开头。

- `scrollOverflowOptions`: 当使用 scrollOverflow：true 时，fullpage.js 将使用 [iScroll.js 库文件](https://github.com/cubiq/iscroll/) 的派生和修改版本。 您可以通过为要使用的 iScroll.js 选项提供 fullpage.js 来自定义滚动行为。 查看 [它的文档](https://github.com/cubiq/iscroll) 了解更多信息。

- `sectionSelector`: （默认`.section`）定义用于插件部分的 Javascript 选择器。 有时可能需要更改，以避免与使用与 fullpage.js 相同的选择器的其他插件的问题。

- `slideSelector`: （默认`.slide`）定义用于插件 slide 的 Javascript 选择器。 有时可能需要更改，以避免与使用与 fullpage.js 相同的选择器的其他插件的问题。

- `responsiveWidth`: （默认`0`）一个正常的滚动（`autoScrolling：false`）将在定义的宽度下以像素为单位使用。 如果用户希望将自己的响应式 CSS 用于 body 标记，则会将 `fp-responsive` 类别添加到 body 标记中。 例如，如果设置为 900，则每当浏览器的宽度小于 900 时，插件将像正常站点一样滚动。

- `responsiveHeight`: （默认 `0` ）一个正常的滚动（`autoScrolling：false`）将在定义的高度下以像素为单位使用。 如果用户希望将自己的响应式 CSS 用于 body 标记，则会将 `fp-responsive` 类添加到 body 标记中。 例如，如果设置为 900 ，则每当浏览器的高度小于 900 时，插件将像正常站点一样滚动。

- `responsiveSlides`: （默认`false`）[fullpage.js 的扩展](http://alvarotrigo.com/fullPage/extensions/)。 设置为`true`时，在响应模式被触发时，slide 将变成垂直 section。 （通过使用上面详述的 `responsiveWidth` 或 `responsiveHeight` 选项）。 需要fullpage.js> = 3.0.1。

- `parallax`: （默认 `false` ）[fullpage.js 的扩展](http://alvarotrigo.com/fullPage/extensions/)。 定义是否在 section/slide 上使用视差背景效果。 [详细了解如何应用视差选项](https://github.com/alvarotrigo/fullPage.js/blob/master/lang/chinese/parallax-extension.md).

- `parallaxOptions`: （默认：`{type：'reveal'，percent：62，property：'translate'}`）。 允许在使用选项 parallax:true 时配置视差背景效果的参数。 [详细了解如何应用视差选项](https://github.com/alvarotrigo/fullPage.js/blob/master/lang/chinese/parallax-extension.md).


- `dropEffect` (default `false`) [Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Defines whether or not to use the drop effect on sections / slides. [Read more about how to apply the the drop effect option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Drop-Effect).

- `dropEffectOptions`: (default: `{ speed: 2300, color: '#F82F4D', zIndex: 9999}`). Allows to configure the parameters for the drop effect when using the option `dropEffect:true`.[Read more about how to apply the the drop effect option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Drop-Effect).

- `waterEffect` (default `false`) [Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/). Defines whether or not to use the water effect on sections / slides. [Read more about how to apply the the water effect option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Water-Effect).

- `waterEffectOptions`: (default: `{ animateContent: true, animateOnMouseMove: true}`). Allows to configure the parameters for the water effect when using the option `waterEffect:true`.[Read more about how to apply the the water effect option](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Water-Effect).

- `cards`: (default `false`) [Extension of fullpage.js](http://alvarotrigo.com/fullPage/extensions/) . 定义是否在 section/slide 上使用卡片效果。[了解有关如何应用卡片选项的更多信息](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards).

- `cardsOptions`: (default: `{ perspective: 100, fadeContent: true, fadeBackground: true}`). 允许您在使用选项 `cards：true` 时配置卡片效果的参数。 [了解有关如何应用卡片选项的更多信息](https://github.com/alvarotrigo/fullPage.js/wiki/Extension-Cards).

- `lazyLoading`: （默认`true`）懒加载默认是激活的，这意味着它会延迟加载包含属性 `data-src` 的任何媒体元素，详见 [Lazy Loading docs](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD) 。 如果你想使用任何其他的后加载库，你可以禁用这个 fullpage.js 功能。

## 公共方法
你可以在[这里](http://alvarotrigo.com/fullPage/examples/methods.html)看到它们

### getActiveSection()
[示例](https://codepen.io/alvarotrigo/pen/VdpzRN/) 获取包含激活 section 及其属性的对象（键入[ Section ](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese#callbacks））。

```javascript
fullpage_api.getActiveSection();
```

### getActiveSlide()
[示例](https://codepen.io/alvarotrigo/pen/VdpzRN/)  获取包含激活滑块及其属性的对象（键入[ Slide ](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese#callbacks））。）。

```javascript
fullpage_api.getActiveSlide();
```

### moveSectionUp()
[示例](http://codepen.io/alvarotrigo/pen/GJXNMN) 向上滚动一个 section：

```javascript
fullpage_api.moveSectionUp();
```
---
### moveSectionDown()
[示例](http://codepen.io/alvarotrigo/pen/jPvVZx) 向下滚动一个 section：

```javascript
fullpage_api.moveSectionDown();
```
---
### moveTo(section, slide)
[示例](http://codepen.io/alvarotrigo/pen/doqOmY) 将页面滚动到目标 section 和滑动。section 从 1 开始，slide 从 0 开始。

```javascript
/*滚动到锚链接`firstSlide`和为2的slide */
fullpage_api.moveTo('firstSlide', 2);

```

```javascript
//滚动到网站的第三个section
fullpage_api.moveTo(3, 0);

//这是一样的
fullpage_api.moveTo(3);
```
---
### silentMoveTo(section, slide)
[示例](http://codepen.io/alvarotrigo/pen/doqOeY) 与 [`moveTo`](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#moveto%E7%AC%AC%E8%8A%82-%E5%B9%BB%E7%81%AF%E7%89%87) 完全相同，但是在这种情况下，它将执行没有动画的滚动。 直接跳到目的地。

```javascript
/*滚动到锚链接 firstSlide 和第二个 slide 的部分 */
fullpage_api.silentMoveTo('firstSlide', 2);
```
---
### moveSlideRight()
[示例](http://codepen.io/alvarotrigo/pen/Wvgoyz) 将当前 slide 的水平滑块滚动到下一张 slide ：

```javascript
fullpage_api.moveSlideRight();
```
---
### moveSlideLeft()
[示例](http://codepen.io/alvarotrigo/pen/gpdLjW) 将当前 slide 的水平滑块滚动到上一张 slide :

```javascript
fullpage_api.moveSlideLeft();
```
---
### setAutoScrolling(boolean)
[示例](http://codepen.io/alvarotrigo/pen/rVZWrR) 动态设置 autoScrolling 。
定义页面滚动行为的方式。 如果设置为 `true`，则将使用"自动"滚动，否则将使用站点的"手动"或"正常"滚动。

```javascript
fullpage_api.setAutoScrolling(false);
```
---
### setFitToSection(boolean)
[示例](http://codepen.io/alvarotrigo/pen/GJXNYm) 设置选项 `fitToSection` 的值，确定是否自适应 section 在屏幕上。


```JavaScript
fullpage_api.setFitToSection(false);
```
---
### fitToSection()
[示例](http://codepen.io/alvarotrigo/pen/JWWagj) 滚动到最接近视图中的激活 section。

```javascript
fullpage_api.fitToSection();
```
---
### setLockAnchors(boolean)
[示例](http://codepen.io/alvarotrigo/pen/yNxVRQ) 设置选项 `lockAnchors` 的值，以确定锚是否在 URL 中有影响。

```javascript
fullpage_api.setLockAnchors(false);
```
---
### setAllowScrolling(boolean, [directions])
[示例](http://codepen.io/alvarotrigo/pen/EjeNdq) 添加或者禁止 fullpage 自动绑定的鼠标滑轮和移动触摸事件。 注意这不会禁用键盘滚动。 您将需要使用`setKeyboardScrolling` 。

- `directions`：（可选参数）允许的值：`all`，`up`，`down`，`left`，`right` 或者设置组合参数，例如`down，right` 等逗号分隔。 它定义了启用或禁用滚动的方向。

```javascript

//禁用滚动
fullpage_api.setAllowScrolling(false);

//禁用向下滚动
fullpage_api.setAllowScrolling(false, 'down');

//禁用向下和向右滚动
fullpage_api.setAllowScrolling(false, 'down, right');
```
---
### setKeyboardScrolling(boolean, [directions])
[示例](http://codepen.io/alvarotrigo/pen/GJXNwm) 添加或者禁止键盘对 section/slide 的控制（默认绑定）。

- `directions`: （可选参数）允许的值：`all`，`up`，`down`，`left`，`right`或者它们的组合，用`down，right`等逗号分隔。 它定义了滚动将被启用或禁用的方向。

```javascript
//禁用所有键盘滚动
fullpage_api.setKeyboardScrolling(false);

//禁用键盘向下滚动
fullpage_api.setKeyboardScrolling(false, 'down');

//禁用键盘向下和向右滚动
fullpage_api.setKeyboardScrolling(false, 'down, right');
```
---
### setRecordHistory(boolean)
[示例](http://codepen.io/alvarotrigo/pen/rVZWQb) 定义是否为每个URL的变更纪录到浏览器中的历史记录中。

```javascript
fullpage_api.setRecordHistory(false);
```
---
### setScrollingSpeed(milliseconds)
[示例](http://codepen.io/alvarotrigo/pen/NqLbeY) 定义以毫秒为单位的滚动速度。

```javascript
fullpage_api.setScrollingSpeed(700);
```
---
### destroy(type)
[示例](http://codepen.io/alvarotrigo/pen/bdxBzv) 销毁插件事件以及可选的 HTML 标记和样式。理想选择配合使用 AJAX 加载内容时。

- `type`: （可选参数）可以为空或 `all` 。 如果 `all` 被传递，fullpage.js 使用的 HTML 标记和样式将被删除。 这样，原始的 HTML 标记，将使用插件修改之前使用的标记。

```javascript
//销毁由fullPage.js创建的所有Javascript事件（滚动,以变动的URL...）
fullpage_api.destroy();

//销毁所有的JavaScript事件，以及在原始HTML标记中由fullPage.js所做的任何修改。
fullpage_api.destroy('all');
```
---
### reBuild()
更新 DOM 结构以适应新的窗口大小或其内容。
非常适合与 AJAX 调用或站点的 DOM 结构中的外部更改结合使用，特别是在使用 `scrollOverflow：true` 时。

```javascript
fullpage_api.reBuild();
```
---
### setResponsive(boolean)
[示例](http://codepen.io/alvarotrigo/pen/WxOyLA) 设置页面的响应模式。 当设置为 `true` 时，自动滚动将被关闭，结果与 `responsiveWidth` 或`responsiveHeight` 选项被触发时的结果完全相同。

```javascript
fullpage_api.setResponsive(true);
```
---
### responsiveSlides.toSections()
[fullpage.js 的扩展](http://alvarotrigo.com/fullPage/extensions/)。 需要 fullpage.js> = 3.0.1。将水平 slide 变成垂直 section。

```javascript
fullpage_api.responsiveSlides.toSections();
```
---
### responsiveSlides.toSlides()
[fullpage.js的扩展](http://alvarotrigo.com/fullPage/extensions/)。 需要 fullpage.js> = 3.0.1 。将原始 slide（现转换为垂直 section）重新转换为水平 slide。

```javascript
fullpage_api.responsiveSlides.toSlides();
```

## 回调函数
[示例](http://codepen.io/alvarotrigo/pen/XbPNQv) 你可以在 [这里](http://alvarotrigo.com/fullPage/examples/callbacks.html) 看到他们。

一些回调，例如 `onLeave` 将包含 `Section` 或 `Slide` 类型的参数。 这些对象将包含以下属性：
- `anchor`: *(String)* 项目的 anchorLink。
- `index`: *(Number)* 项目的 index。
- `item`: *(DOM element)* 项目元素。
- `isFirst`: *(Boolean)* 判断游标是否在第一行。
- `isLast`: *(Boolean)* 判断游标是否在最后一行。

### afterLoad (`origin`, `destination`, `direction`)
滚动结束之后，一旦加载了 section ，就会触发回调。参数：

- `origin`: *(Object)* 前置 section
- `destination`: *(Object)* 目标 section。
- `direction`: *(String)* 它将根据滚动方向 `up` 或 `down` 取值。

例如：

```javascript
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterLoad: function(origin){
		var loadedSection = this;

		//使用 index
		if(origin.index == 2){
			alert("第3个section停止加载");
		}

		//使用 anchorLink
		if(origin.anchor == 'secondSlide'){
			alert("第2个section停止加载");
		}
	}
});
```
---
### onLeave (`origin`, `destination`, `direction`)
一旦用户离开 section ，过渡到新 section ，就会触发此回调。
返回 “false” 将在移动发生之前取消移动。

参数：

- `origin`:  *(Object)* 前置 section
- `destination`: *(Object)* 目标 section。
- `direction`: *(String)* 它将根据滚动方向 `up` 或 `down` 取值。

例如：

```javascript
new fullpage('#fullpage', {
	onLeave: function(origin, destination, direction){
		var leavingSection = this;

		//离开第二个section后
		if(origin.index == 1 && direction =='down'){
			alert("前往第3个section！");
		}

		else if(origin.index == 1 && direction == 'up'){
			alert("前往第1个section！");
		}
	}
});
```

#### 触发之前取消滚动
您可以通过在 `onLeave` 回调函数上返回 `false` 来取消滚动：

```javascript
new fullpage('#fullpage', {
	onLeave: function(origin, destination, direction){
		//如果目标是第三个section，它将不会滚动
		if(destination.index == 2){
			return false;
		}
	}
});
```

---
### afterRender()
这个回调在页面结构生成后立即被触发。 这是您要用来初始化其他插件的回调函数，或者触发任何需要 DOM 准备就绪的代码（因为这个插件修改了 DOM 来创建最终的结构）。 请参阅 [常见问题](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions) 了解更多信息。

例如：

```javascript
new fullpage('#fullpage', {
	afterRender: function(){
		var pluginContainer = this;
		alert("DOM结构已完成");
	}
});
```
---
### afterResize()
调整浏览器窗口大小后，会触发此回调。 就在 section 被调整之后。

参数：

- `width`:  *(Number)* 屏幕宽度。
- `height`: *(Number)* 屏幕高度。

例如：

```javascript
new fullpage('#fullpage', {
	afterResize: function(width, height){
		var pluginContainer = this;
		alert("section已重新调整大小");
	}
});
```
---
### afterReBuild()
通过调用 `fullpage_api.reBuild（）` 手动重新构建 fullpage.js 后，将触发此回调。

例如：

```javascript
new fullpage('#fullpage', {
	afterReBuild: function(){
		console.log("fullPage.js has manually being re-builded");
	}
});
```
---
### afterResponsive(`isResponsive`)
在 fullpage.js 从正常模式变为响应模式或从响应模式变为正常模式之后，此回调将被触发。

参数：

- `isResponsive`：*(Boolean)* 布尔值，用于确定是否进入响应模式（ `true` ）或返回正常模式（ `false` ）。

例如：

```javascript
new fullpage('#fullpage', {
	afterResponsive: function(isResponsive){
		alert("是否响应" + isResponsive);
	}
});
```
---
### afterSlideLoad (`section`, `origin`, `destination`, `direction`)
滚动结束后，加载一个 section 的 slide 后触发回调。

参数：

- `section`: *(Object)* 垂直方向激活的 section。
- `origin`: *(Object)* 水平方向的前置 slide。
- `destination`: *(Object)* 水平方向的 slide。
- `direction`: *(String)* 它将根据滚动方向 `right` 或 `left` 取值。

例如：

```javascript
new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterSlideLoad: function( section, origin, destination, direction){
		var loadedSlide = this;

		//第二个section的第一个slide
		if(section.anchor == 'secondPage' && destination.index == 1){
			alert("第一张slide加载完毕");
		}

		//第二个section的第二个slide（假设#secondSlide是
        //为第二个slide锚点
		if(section.index == 1 && destination.anchor == 'secondSlide'){
			alert("第二slide加载完毕");
		}
	}
});
```

---
### onSlideLeave (`section`, `origin`, `destination`, `direction`)
一旦用户离开 slide 转到另一个 slide ，就会触发此回调。返回 `false` 将在移动发生之前取消移动。

参数：

- `section`: *(Object)* 垂直方向激活的 section.
- `origin`: *(Object)* 水平方向的前置 slide.
- `destination`: *(Object)* 水平方向的目标 slide.
- `direction`: *(String)* 它将根据滚动方向 `right`  或 `left` 取值。


例如：

```javascript
new fullpage('#fullpage', {
	onSlideLeave: function( section, origin, destination, direction){
		var leavingSlide = this;

		//留下第二个section的第一个slide
		if(section.index == 1 && origin.index == 0 && direction == 'right'){
			alert("离开第一个slide！");
		}

		//将第二个section的第三个slide留在左边
		if(section.index == 1 && origin.index == 2 && direction == 'left'){
			alert("前往第二个slide！");
		}
	}
});
```

#### 在发生移动之前取消移动
您可以通过在 `onSlideLeave` 回调中返回 `false` 来取消移动。 [与使用 `onLeave` 取消动作一样](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese/#%E8%A7%A6%E5%8F%91%E4%B9%8B%E5%89%8D%E5%8F%96%E6%B6%88%E6%BB%9A%E5%8A%A8)。

# 问题反馈
1. 请在提问之前使用 [issue](https://github.com/alvarotrigo/fullPage.js/issues) 搜索查找您的问题。
2. 确保使用最新的 fullpage.js 版本，不支持旧版本。
3. 使用 [Github 问题论坛](https://github.com/alvarotrigo/fullPage.js/issues) 来创建问题。
4. **对问题进行复现** 如果可以，请使用 [jsfiddle](https://jsfiddle.net/alvarotrigo/ea17skjr/) 或 [codepen](http://codepen.io/alvarotrigo/pen/NxyPPp) 。

# 贡献到 fullpage.js
请参阅 [贡献到 fullpage.js](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js) 

# 更新日志
要查看最近更改的列表，请参见 [发行版部分](https://github.com/alvarotrigo/fullPage.js/releases) .

# 编译构建
想要构建 fullpage.js 分发文件？ 请参阅 [Build Tasks](https://github.com/alvarotrigo/fullPage.js/wiki/Build-tasks) 

# 参考资源
- Wordpress Plugin [for Gutenberg](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/) and [for Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/).
- [Wordpress theme](http://alvarotrigo.com/fullPage/utils/wordpress.html)
- [Official Vue.js wrapper component](https://github.com/alvarotrigo/vue-fullpage.js)
- [Official React.js wrapper component](https://github.com/alvarotrigo/react-fullpage)
- [Official Angular wrapper component](https://github.com/alvarotrigo/angular-fullpage)
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (用于定义 `easingcss3` 的值)
- [fullPage.js jsDelivr CDN](https://www.jsdelivr.com/package/npm/fullpage.js)
- [fullPage.js plugin for October CMS](https://github.com/freestream/oc-parallax-plugin)
- [fullPage.js wordpress plugin](https://wordpress.org/plugins/wp-fullpage/)
- [fullPage.js Angular2 directive](https://github.com/meiblorn/ng2-fullpage)
- [fullPage.js angular directive](https://github.com/hellsan631/angular-fullpage.js)
- [fullPage.js ember-cli addon](https://www.npmjs.com/package/ember-cli-fullpagejs)
- [fullPage.js Rails Ruby Gem](https://rubygems.org/gems/fullpagejs-rails)
- [Angular fullPage.js - Adaptation for Angular.js v1.x](https://github.com/mmautomatizacion/angular-fullpage.js)
- [Integrating fullPage.js with Wordpress (Tutorial)](http://premium.wpmudev.org/blog/build-apple-inspired-full-page-scrolling-pages-for-your-wordpress-site/)

## 谁在使用 fullPage.js
如果你想让你的页面在这里列出。 请使用网址 <a href="mailto:alvaro@alvarotrigo.com">与我联系</a> 。

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

你可以在另一份列表 [这里](http://libscore.com/#$.fn.fullpage) 查找。

## 赞助
非常欢迎您的捐款:)

[Patreon page](https://www.patreon.com/fullpagejs)

[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## Sponsors
Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://alvarotrigo.com/#contact)] | [[Become a patreon](https://www.patreon.com/fullpagejs)]

[![Stackpath](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/stackpath3.png)](https://www.stackpath.com/)
[![Browserstack](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/browserstack3.png)](http://www.browserstack.com/)
[![CodePen](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codepen3.png)](https://codepen.com)
[![CodeFirst](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/codefirst2.png)](https://www.codefirst.co.uk)

### People
<a href="https://github.com/donsalvadori" target="_blank" rel="nofollow">
	<img src="http://wallpapers-for-ipad.com/fullpage/imgs3/avatars/donsalvadori.jpg">
</a>

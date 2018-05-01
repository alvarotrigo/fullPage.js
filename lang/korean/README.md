# fullPage.js
![preview](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png)
![compatibility](https://raw.github.com/alvarotrigo/fullPage.js/master/examples/imgs/compatible.gif?v=2)

<p align="center">
  <a href="https://github.com/alvarotrigo/fullPage.js">English</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/spanish#fullpagejs">Español</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#fullpagejs">Pусский</a> |
  <a href="https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese#fullpagejs">中文</a> |
  <span>한국어</span>
</p>

---

![fullPage.js version](http://img.shields.io/badge/fullPage.js-v2.9.7-brightgreen.svg)
[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![PayPal](https://img.shields.io/badge/donate-PayPal.me-ff69b4.svg)](https://www.paypal.me/alvarotrigo/9.95)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/fullpage.js/badge?style=rounded)](https://www.jsdelivr.com/package/npm/fullpage.js)
&nbsp;&nbsp; **|**&nbsp;&nbsp; *7Kb gziped* &nbsp;&nbsp;**|**&nbsp;&nbsp; *Created by [@imac2](https://twitter.com/imac2)*

- [실시간 데모](http://alvarotrigo.com/fullPage/)
- [워드프레스 테마](http://alvarotrigo.com/fullPage/utils/wordpress.html)
- [fullpage.js 확장 프로그램](http://alvarotrigo.com/fullPage/extensions/)
- [자주 묻는 질문(FAQ)](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)

---

(단일 페이지 웹사이트 또는 한페이지 사이트로도 알려진) 전체 화면 스크롤 웹사이트를 만드는 간단하고 쓰기 쉬운 라이브러리입니다. 전체 화면 스크롤 웹사이트를 만들 수 있으며 웹사이트 구역 안에 수평 방향 슬라이더를 추가할 수 있습니다.

커피 한 잔 값을 기부하시는 건 어떤가요?
[![Donate](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

요청시 적절한 가격에 라이브러리 맞춤화와 긴급 변경이 가능합니다. <a href="http://alvarotrigo.com/#contact-page">문의하기</a>.

- [소개](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean/#%EC%86%8C%EA%B0%9C)
- [호환성](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%ED%98%B8%ED%99%98%EC%84%B1)
- [사용법](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EC%82%AC%EC%9A%A9%EB%B2%95)
  - [구역 또는 슬라이드로 가는 링크 만들기](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EA%B5%AC%EC%97%AD-%EB%98%90%EB%8A%94-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C%EB%A1%9C-%EA%B0%80%EB%8A%94-%EB%A7%81%ED%81%AC-%EB%A7%8C%EB%93%A4%EA%B8%B0)
  - [구역을 더 작게 또는 크게 만들기](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EA%B5%AC%EC%97%AD%EC%9D%84-%EB%8D%94-%EC%9E%91%EA%B2%8C-%EB%98%90%EB%8A%94-%ED%81%AC%EA%B2%8C-%EB%A7%8C%EB%93%A4%EA%B8%B0)
  - [fullpage.js가 추가하는 상태 클래스](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs%EA%B0%80-%EC%B6%94%EA%B0%80%ED%95%98%EB%8A%94-%EC%83%81%ED%83%9C-%ED%81%B4%EB%9E%98%EC%8A%A4)
  - [지연 로딩](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EC%A7%80%EC%97%B0-%EB%A1%9C%EB%94%A9)
  - [미디어 자동 재생/일시정지 삽입](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EB%AF%B8%EB%94%94%EC%96%B4-%EC%9E%90%EB%8F%99-%EC%9E%AC%EC%83%9D%EC%9D%BC%EC%8B%9C%EC%A0%95%EC%A7%80-%EC%82%BD%EC%9E%85)
  - [확장 프로그램 사용](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%ED%99%95%EC%9E%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EC%82%AC%EC%9A%A9)
- [옵션](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EC%98%B5%EC%85%98)
- [방법](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EB%B0%A9%EB%B2%95)
- [콜백](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EC%BD%9C%EB%B0%B1)
- [문제 알리기](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EB%AC%B8%EC%A0%9C-%EC%95%8C%EB%A6%AC%EA%B8%B0)
- [fullpage.js에 기여하기](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs%EC%97%90-%EA%B8%B0%EC%97%AC%ED%95%98%EA%B8%B0)
- [수정 일지](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EC%88%98%EC%A0%95-%EC%9D%BC%EC%A7%80)
- [구축 도전](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EA%B5%AC%EC%B6%95-%EB%8F%84%EC%A0%84)
- [재료가 되는 도구](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EC%9E%AC%EB%A3%8C%EA%B0%80-%EB%90%98%EB%8A%94-%EB%8F%84%EA%B5%AC)
- [누가 fullPage.js를 쓰나요?](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EB%88%84%EA%B0%80-fullpagejs%EB%A5%BC-%EC%93%B0%EB%82%98%EC%9A%94)
- [기부](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EA%B8%B0%EB%B6%80)
- [라이선스](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4)

## 소개
기능 요청뿐만 아니라 코딩 스타일 개선까지 언제든 의견 제안을 매우 환영합니다.
이 라이브러리를 멋지게 만들어서 사람들의 삶을 더 편리하게 가꾸어 보아요!

## 호환성
fullPage.js는 모든 최신 브라우저에서 기능을 100% 발휘하며 Internet Explorer 8, 9, Opera 12 등 이전 브라우저에서도 마찬가지로 작동됩니다.
CSS3 지원이 되는 브라우저와 지원되지 않는 브라우저 모두에서 잘 작동되기 때문에 이전 브라우저와의 호환성에 적합합니다.
스마트폰, 태블릿, 터치화면 컴퓨터의 터치 지원도 됩니다.

[![Browserstack](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/browserstack2.png)](http://www.browserstack.com/)

fullpage.js를 지원해 주시는 [Browserstack](http://www.browserstack.com/)에게 특별히 감사드립니다.

## 사용법
예시 파일에서 보실 수 있듯이 다음을 넣으셔야 합니다.
 - [jQuery 라이브러리](http://jquery.com/). (최소 1.6.0)
 - `jquery.fullPage.js` 자바스크립트 파일 (또는 더 작아진 버전인 `jquery.fullPage.min.js`)
 - `jquery.fullPage.css`css 파일

 **선택 사항으로**`css3:false`를 쓰실 때 jQuery 라이브러리에 들어있는 효과(`linear`와 `swing` )나 fullPage.js에 기본으로 들어있는 (`easeInOutCubic`) 이외에 다른 easing 효과를 쓰고 싶으시다면 [jQuery UI 라이브러리](http://jqueryui.com/)를 추가하실 수 있습니다.

### bower 또는 npm을 써서 설치하기
**선택 사항으로**, 만약 아래가 더 마음에 드신다면 fullPage.js를 bower나 npm과 함께 설치하실 수 있습니다.

터미널:
```shell
// bower 사용시
bower install fullpage.js

// npm 사용시
npm install fullpage.js
```

### 들어가는 파일:
```html
<link rel="stylesheet" type="text/css" href="jquery.fullPage.css" />

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<!-- 아래는 선택사항입니다. css3:false 옵션을 쓰시면서 "linear", "swing" 또는 "easeInOutCubic" 대신 다른 전환(easing) 효과를 원하시는 경우에만 필요합니다. -->
<script src="vendors/jquery.easings.min.js"></script>


<!-- 아래 선은 `scrollOverflow:true` 옵션을 쓰시는 경우에만 넣으셔야 합니다. -->
<script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>

<script type="text/javascript" src="jquery.fullPage.js"></script>
```

### CDN 사용 가능
필요한 파일을 불러오실 때 CDN이 더 편하시다면 fullPage.js를 CDNJS 양식(https://cdnjs.com/libraries/fullPage.js)으로도 사용하실 수 있습니다.

### 필요한 HTML 구조
HTML 코드의 첫번째 줄에 필수 [HTML DOCTYPE 표기](http://www.corelangs.com/html/introduction/doctype.html)를 넣어주세요. 넣지 않으시면 구역의 높이가 깨질 수 있습니다. 제시된 사례에서는 HTML 5 doctype `<!DOCTYPE html>`을 씁니다.

각 구역은 `section` 클래스가 들어간 요소로 정의됩니다. 첫 번째 구역은 기본 설정으로 활성화되어 홈페이지가 됩니다.

구역이 포장 안에 들어가야 합니다(이 경우에는 `<div id="fullpage">`). 포장은 `body` 요소가 될 수 없습니다.
```html
<div id="fullpage">
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
	<div class="section">Some section</div>
</div>
```
첫번째 구역이나 구역의 첫번째 슬라이드 이외에 다른 곳을 출발점으로 정의하고 싶으시다면 처음 불러오시려는 구역과 슬라이드에 `active 클래스를 추가하시기만 하면 됩니다.
```html
<div class="section active">Some section</div>
```

구역 내에 수평 방향 슬라이더를 만들기 위해 기본 설정으로 각 슬라이드가 `slide 클래스가 들어 있는 요소로 정의됩니다.
```html
<div class="section">
	<div class="slide"> Slide 1 </div>
	<div class="slide"> Slide 2 </div>
	<div class="slide"> Slide 3 </div>
	<div class="slide"> Slide 4 </div>
</div>
````
[`demoPage.html` 파일](https://github.com/alvarotrigo/fullPage.js/tree/master/examples/demoPage.html)에서 완전히 구현되는 HTML 구조 예시를 보실 수 있습니다.

### 초기 설정
`$(document).ready` 안에 fullPage.js를 소환하시기만 하면 됩니다.


```javascript
$(document).ready(function() {
	$('#fullpage').fullpage();
});
```

모든 옵션이 들어간 더 복잡한 초기 설정은 아래와 같이 코딩될 수 있습니다.
```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		//이동
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//스크롤
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
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//접근성
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//디자인
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

		//맞춤 선택자
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//사건(이벤트)
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});
```

### 구역 또는 슬라이드로 가는 링크 만들기
fullPage.js를 (`anchors 옵션이나 각 구역마다 `data-anchor 속성을 쓰셔서) 구역의 앵커 링크와 쓰신다면 앵커 링크를 통해 구역 내부 특정 슬라이드로 바로 가실 수 있습니다.

앵커가 들어간 링크 예시는 다음과 같습니다. http://alvarotrigo.com/fullPage/#secondPage/2 (해당 구역/슬라이드에 수동으로 가신다면 보시게 될 URL입니다) URL의 끝부분이 `#secondPage/2`로 끝나는 것에 주목해 주세요.

초기 설정이 다음과 같이 설정될 경우

```javascript
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage']
	});
});
```

`#secondPage/2` URL 끝에 있는 앵커가 목적지 구역과 슬라이드를 각각 정의합니다. 이전 URL에서는 `secondPage` 앵커로 정의된 구역이 목적지이고, 목적지 슬라이드는 색인으로 2를 쓰고 있기 때문에 두번째 슬라이드가 됩니다. (구역의 첫번째 슬라이드는 엄밀히 말해 구역이기 때문에 색인이 0입니다.)

HTML 교정(마크업)에서 `data-anchor` 속성을 쓴다면 슬라이드에 색인 대신 맞춤화된 앵커를 쓸 수도 있습니다.

```html
<div class="section">
	<div class="slide" data-anchor="slide1"> Slide 1 </div>
	<div class="slide" data-anchor="slide2"> Slide 2 </div>
	<div class="slide" data-anchor="slide3"> Slide 3 </div>
	<div class="slide" data-anchor="slide4"> Slide 4 </div>
</div>
```
이 마지막 사례에서는 이전에 다뤘던 `#secondPage/2`와 동일한 역할을 하는 `#secondPage/slide3` URL을 쓰게 됩니다.

만약 `anchors` 배열이 없다면 `data-anchor` 속성을 써서 동일하게 구역 앵커를 정의할 수 있음을 기억해 주세요.

**주의하세요!** `data-anchor` 태그는 웹사이트에서 모든 ID 요소(또는 IE의 NAME 요소)와 동일한 값을 지닐 수 없습니다.

### 구역을 더 작게 또는 크게 만들기
[데모](http://codepen.io/alvarotrigo/pen/BKjRYm) fullPage.js는 구역과 슬라이드에서 총 높이 제한을 없애는 방법을 만들어 줍니다. 구역의 높이를 모바일 지원(viewport)보다 더 작거나 크게 만들 수 있습니다. 꼬리말에 적합합니다.
중요한 건 모든 구역에 이 기능을 쓰실 필요가 없다는 겁니다. 웹사이트를 처음 불러왔을 때 구역 수가 하나를 넘어가면 이미 모바일 지원(viewport)에 있게 되기 때문에 fullPage.js 스크롤이 다음으로 전혀 넘어가지 않습니다.

구역을 작게 만들고 싶으시다면 적용하시고 싶은 구역에 `fp-auto-height` 클래스를 쓰시기만 하면 됩니다. 그러면 구역/슬라이드 컨텐츠에 맞게 높이가 설정됩니다.

```html
<div class="section">Whole viewport</div>
<div class="section fp-auto-height">Auto height</div>
```

#### 반응형 자동 높이 구역
[데모](https://codepen.io/alvarotrigo/pen/WZmMgZ) 반응형 자동 높이는 `fp-auto-height-responsive` 클래스로 만드실 수 있습니다. 이렇게 하시면 반응형 모드가 실행되기 전까지는 구역이 전체 화면이 됩니다. 반응형 모드가 실행되면 컨텐츠가 요구하는 크기를 띄게 되는데, 모바일 지원(viewport)보다 더 크거나 작을 수 있습니다.

### fullpage.js가 추가하는 상태 클래스
Fullpage.js는 웹사이트의 상태를 기록하기 위해 여러가지 요소로 다양한 클래스를 추가합니다.

- 현재 보여지는 구역과 슬라이드에 `active`가 추가됩니다.
- (만약 `menu` 옵션을 쓰신다면) 현 메뉴 요소에 `active`가 추가됩니다.
- 웹사이트의 `body` 요소에 `fp-viewing-SECTION-SLIDE` 양식의 클래스가 추가됩니다. (예: [`fp-viewing-secondPage-0`](http://alvarotrigo.com/fullPage/#secondPage)) `SECTION`과 `SLIDE` 부분이 현 구역과 슬라이드의 앵커가 (앵커가 없는 경우 색인이) 됩니다.
- 반응형 모드로 들어갈 때 `fp-responsive`가 `body` 요소에 추가됩니다.
- fullpage.js가 활성화될 때  `html` 요소에 `fp-enabled`가 추가됩니다. (그리고 없어지면 제거됩니다.)
- fullpage.js가 없어질 때 fullpage.js 컨테이너에 `fp-destroyed`가 추가됩니다.

### 지연 로딩
[데모](http://codepen.io/alvarotrigo/pen/eNLBXo) fullPage.js는 웹사이트가 느려지거나 데이터 전송을 필요 이상으로 낭비하지 않게 그림, 비디오, 소리 요소를 지연 로딩할 수 있는 방법을 지원합니다. 지연 로딩을 쓰면 모바일 지원(viewport) 모드에 들어갈 때에만 이 모든 요소를 불러옵니다. 지연 로딩을 활성화하시려면 아래와 같이 `src` 속성을 `data-src`로 바꾸기만 하시면 됩니다.

```
<img data-src="image.png">
<video>
	<source data-src="video.webm" type="video/webm" />
	<source data-src="video.mp4" type="video/mp4" />
</video>
 ```

`data-src`를 쓰는 다른 지연 로딩 솔루션을 이미 쓰고 계신다면 `lazyLoading: false` 옵션을 설정하셔서 fullPage.js 지연 로딩을 비활성화하실 수 있습니다.

### 미디어 자동 재생/일시정지 삽입

*주의*: 자동 재생 기능은 ([iOS의 사파리](https://webkit.org/blog/6784/new-video-policies-for-ios/) 10.0 미만 버전 등) OS와 브라우저에 따라 일부 모바일 기기에서는 작동하지 않을 수 있습니다.

#### 구역/슬라이드를 불러올 때 재생:
비디오나 소리에 `autoplay` 속성을 쓰시거나 유튜브 iframe에 `autoplay=1` 매개변수를 쓰시면 페이지를 불러올 때 미디어 요소가 재생됩니다. 구역/슬라이드를 불러올 때 재생되도록 하려면 대신 `data-autoplay` 속성을 쓰시면 됩니다. 아래는 예시입니다.

```html
<audio data-autoplay>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

#### 떠날 때 일시정지
삽입된 HTML5 `<video>` / `<audio>`와 유튜브 iframe은 구역이나 슬라이드를 떠나실 때 자동으로 일시정지됩니다. 이는 `data-keepplaying` 속성을 쓰시면 비활성화됩니다. 다음은 예시입니다.
```html
<audio data-keepplaying>
	<source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```

### 확장 프로그램 사용
fullpage.js는 기본 기능을 강화하기 위해 쓸 수 있는 [여러가지 확장 프로그램을 지원합니다](http://alvarotrigo.com/fullPage/extensions/). 모든 확장 프로그램이 [fullpage.js 옵션](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EC%98%B5%EC%85%98)으로 열거되어 있습니다.

확장 프로그램을 쓰시려면 보통 쓰시는 fullPage.js 파일(`jquery.fullpage.js` 또는 `jquery.fullpage.min.js`) 말고 [`dist` 폴더](https://github.com/alvarotrigo/fullPage.js/tree/master/dist) 안에 있는 작아진 파일[`jquery.fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/tree/master/dist/jquery.fullpage.extensions.min.js)을 쓰셔야 합니다.

확장 파일을 획득하시면 fullPage 앞에 추가하셔야 합니다. 예를 들어 연속 수평(Continuous Horizontal) 확장을 쓰신다면 확장 파일을 먼저 넣고 그 다음에 fullPage 연장 버전을 넣습니다.

```html
<script type="text/javascript" src="fullpage.continuousHorizontal.min.js"></script>
<script type="text/javascript" src="fullpage/jquery.fullpage.extensions.min.js"></script>
```

각 확장 프로그램마다 활성화 키와 라이선스 키가 필요합니다. [더 상세한 사항은 여기를 참조하세요](https://github.com/alvarotrigo/fullPage.js/blob/master/lang/korean/how-to-activate-fullpage-extension.md).

그 다음 [옵션](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EC%98%B5%EC%85%98)에 설명된 대로 사용하시고 설정하실 수 있습니다.

## 옵션

- `controlArrows`: (기본값 `true`) 제어 화살표를 눌러서 슬라이드가 오른쪽 또는 왼쪽으로 움직이도록 허용할지 여부를 결정합니다.

- `verticalCentered`: (기본값 `true`) 구역 내 컨텐츠가 수직으로 중심에 위치하도록 합니다. `true`로 설정되면 컨텐츠가 라이브러리로 포장됩니다. 위임(delegation)을 사용하거나 `afterRender` 콜백에 있는 다른 스크립트를 불러오는 것을 고려해 보세요.

- `scrollingSpeed`: (기본값 `700`) 스크롤 이동 속도를 0.001초 단위로 설정합니다.

- `sectionsColor`: (기본값 `none`) 각 구역별 CSS `background-color` 속성을 정의합니다. 아래는 예시입니다.
```javascript
$('#fullpage').fullpage({
	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
});
```

- `anchors`: (기본값 `[]`) 각 구역별 URL에 보여질 앵커 링크(#예시)를 정의합니다. 앵커값이 고유해야 합니다. 배열 내 앵커의 위치가 어느 구역에 앵커가 적용될지를 정의합니다. (두번째 위치는 두번째 구역에 적용 등). 앵커를 쓰시면 브라우저를 통한 앞뒤 이동도 가능해집니다. 이 옵션을 통해 사용자가 특정 구역이나 슬라이드에 책갈피 표시도 할 수 있습니다. **주의하세요!** 앵커는 웹사이트에서 모든 ID 요소(또는 IE용 NAME 요소)와 동일한 값을 지닐 수 없습니다.
여기에 설명된 대로 이제는 `data-anchor` 속성을 써서 HTML 구조에서 직접 앵커를 정의할 수 있습니다.

- `lockAnchors`: (기본값 `false`) URL에 있는 앵커가 라이브러리에서 효과를 지닐지 말지를 결정합니다. 나만의 기능과 콜백을 위해 여전히 내부에서 앵커를 쓸 수는 있지만 웹사이트 스크롤에는 아무런 효과가 없습니다. URL에 있는 앵커를 써서 fullPage.js를 다른 플러그인과 결합할 때 유용합니다.

**중요** `anchors` 옵션 배열에 있는 값이 교정(마크업) 내 위치에 의해 `.section` 클래스를 지닌 요소와 직접 상관관계에 있음을 이해하시면 도움이 됩니다.

- `easing`: (기본값 `easeInOutCubic`) 수직 및 수평 스크롤시 전이 효과를 정의합니다.
[전이](http://api.jqueryui.com/easings/) 효과 중 일부를 사용하기 위해서는  `vendors/jquery.easings.min.js` 또는 [jQuery UI](http://jqueryui.com/) 파일이 필요합니다. 대신 다른 라이브러리를 쓸 수도 있습니다.

- `easingcss3`: (기본값 `ease`) `css3:true`를 쓰는 경우 사용할 전이 효과를 정의합니다. (`linear`, `ease-out` 등) [미리 정의된 효과](http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp)를 쓰시거나 `cubic-bezier` 기능을 쓰셔서 나만의 효과를 만드실 수 있습니다. [Matthew Lein CSS Easing Animation Tool](http://matthewlein.com/ceaser/)도 쓰실 수 있습니다.

- `loopTop`: (기본값 `false`) 첫번째 구역에서 스크롤을 위로 올릴 때 마지막 구역으로 이동할지 여부를 정의합니다.

- `loopBottom`: (기본값 `false`) 마지막 구역에서 스크롤을 아래로 내릴 때 첫번째 구역으로 이동할지 여부를 정의합니다.

- `loopHorizontal`: (기본값 `true`) 수평 슬라이더가 마지막이나 이전 슬라이드에 다다른 후 다시 반복할지 여부를 정의합니다.

- `css3`: (기본값 `true`). 구역과 슬라이드 안에서 스크롤하기 위해 JavaScript를 쓸지 CSS3을 쓸지를 정의합니다. CSS3 지원 브라우저를 쓰는 태블릿과 스마트폰에서 움직이는 속도를 높이는 데 유용합니다. 이 옵션을 `true`로 설정하고 브라우저가 CSS3을 지원하지 않는다면 jQuery 폴백(fallback)이 대신 쓰이게 됩니다.

- `autoScrolling`: (기본값 `true`) "automatic" 스크롤을 쓸지 "normal" 스크롤을 쓸지를 정의합니다. 태블릿과 스마트폰 브라우저/기기 창에서 구역이 들어맞는 방법에도 영향을 미칩니다.

- `fitToSection`: (기본값 `true`) 구역을 모바일 지원(viewport)에 맞출지 말지를 결정합니다. `true`로 설정하면 현재 활성화된 구역이 항상 모바일 지원(viewport) 전체를 가득 채웁니다. 그렇지 않은 경우에는 사용자는 구역 중간에서 자유롭게 멈출 수 있습니다.

- `fitToSectionDelay`: (기본값 1000). `fitToSection`이 true로 설정되면 설정된 1000분의 1초 단위로 맞춤을 지연합니다.

- `scrollBar`: (기본값 `false`) 웹사이트에 스크롤 막대기를 쓸지 말지를 결정합니다. 스크롤 막대기를 쓰는 경우 `autoScrolling` 기능이 여전히 예상대로 작동할 것입니다. 또한 사용자는 스크롤 막대기로 웹사이트에서 이동할 수도 있으며 스크롤이 끝나면 fullPage.js가 화면 구역에 맞춰집니다.

- `paddingTop`: (기본값 `0`) 구역별 상위에 채우는 부분을 수치와 측정값(`paddingTop: '10px'`, `paddingTop: '10em'`...)으로 정의합니다. 고정된 머리말을 쓰실 때 유용합니다.

- `paddingBottom`: (기본값 `0`) 구역별 하위에 채우는 부분을 수치와 측정값(`paddingBottom: '10px'`, `paddingBottom: '10em'`...)으로 정의합니다. 고정된 꼬리말을 쓰실 때 유용합니다.

- `fixedElements`: (기본값 `null`) 플러그인의 스크롤 구조에서 어느 요소를 빼낼지를 정의합니다. `css3` 옵션을 쓰실 때 고정하려면 반드시 빼내셔야 합니다. 이 요소에는 jQuery 선택자가 들어간 문자열이 필요합니다. (예시: `fixedElements: '#element1, .element2'`)

- `normalScrollElements`: (기본값 `null`) 일부 요소 위를 스크롤할때 자동 스크롤을 피하고 싶으시다면 이 옵션을 쓰셔야 합니다. (지도, div 스크롤 등에 유용.) 이 요소에는 jQuery 선택자가 들어간 문자열이 필요합니다. (예시: `normalScrollElements: '#element1, .element2'`)

- `normalScrollElementTouchThreshold` : (기본값 `5`) 터치 기기에서 div 스크롤 기능을 허용하는 데 `normalScrollElements`가 좋은 짝인지 보기 위해 Fullpage가 시험할 html 노드 나무 위 홉(hop) 수 한계점을 설정합니다. (예시: `normalScrollElementTouchThreshold: 3`)

- `bigSectionsDestination`: (기본값 `null`) 모바일 지원(viewport)보다 더 큰 구역으로 어떻게 스크롤하는지 정의합니다. 기본 설정시 fullPage.js는 목적지 위에 있는 구역에서 내려오는 경우 상위로 스크롤하고 목적지 아래에 있는 구역에서 올라오는 경우 하위로 스크롤합니다. `top`, `bottom`, `null` 값이 가능합니다.

- `keyboardScrolling`: (기본값 `true`) 키보드를 써서 컨텐츠 사이를 이동할 수 있는지 정의합니다.

- `touchSensitivity`: (기본값 `5`) 브라우저 창 너비/폭 퍼센트와 다음 구역 / 슬라이드로 이동하는 데 필요한 스와이프 거리를 정의합니다.

- `continuousVertical`: (기본값 `false`) 마지막 구역에서 아래로 스크롤할때 첫번째 구역으로 스크롤이 내려가야 할지를 정의하고, 첫번째 구역에서 위로 스크롤할때 마지막 구역으로 스크롤이 올라가야 할지를 정의합니다. `loopTop`, `loopBottom` 또는 웹사이트에 있는 모든 스크롤 막대기와 호환되지 않습니다. (`scrollBar:true` 또는 `autoScrolling:false`)

- `continuousHorizontal`: (기본값 `false`) [fullpage.js 확장 프로그램](http://alvarotrigo.com/fullPage/extensions/). 마지막 슬라이드에서 오른쪽으로 미끄러질 때 오른쪽으로 이동하여 첫번째 슬라이드로 이동할지를 정의하고, 첫번째 슬라이드에서 왼쪽으로 스크롤할때 왼쪽으로 이동하면서 마지막 슬라이드로 이동할지를 정의합니다. `loopHorizontal`과 호환되지 않습니다. fullpage.js 버전이 2.8.3 이상이어야 합니다.

- `scrollHorizontally`: (기본값 `false`) [fullpage.js 확장 프로그램](http://alvarotrigo.com/fullPage/extensions/). 슬라이더 안에서 마우스 휠 또는 트랙패드를 써서 수평으로 미끄러지듯 움직일지를 정의합니다. 이야기 전달에 적합합니다. fullpage.js 버전이 2.8.3 이상이어야 합니다.

- `interlockedSlides`: (기본값 `false`) [fullpage.js 확장 프로그램](http://alvarotrigo.com/fullPage/extensions/). 수평 슬라이더 하나를 움직일 때 다른 구역에 있는 슬라이더가 강제로 같은 방향으로 미끄러지도록 할지를 정의합니다. `true`, `false` 또는 서로 잠긴 구역이 있는 배열값이 가능합니다. 예를 들면 1에서 시작하는 `[1,3,5]`가 가능합니다. fullpage.js 버전이 2.8.3 이상이어야 합니다.

- `dragAndMove`: (기본값 `false`) [fullpage.js 확장 프로그램](http://alvarotrigo.com/fullPage/extensions/). 마우스나 손가락을 써서 구역과 슬라이드를 끌어오고 튕기는 걸 활성화하거나 비활성화합니다. fullpage.js 버전이 2.8.9 이상이어야 합니다. 아래 값을 쓰실 수 있습니다.
  - `true`: 기능 활성화.
  - `false`: 기능 비활성화.
  - `vertical`: 수직으로만 기능 구현.
  - `horizontal`: 수평으로만 기능 구현.
  - `fingersonly`: 터치 기기에서만 기능 구현.
  - `mouseonly`: 데스크탑 기기에서만 기능 구현(마우스와 트랙패드).

- `offsetSections`: (기본값 `false`)[fullpage.js 확장 프로그램](http://alvarotrigo.com/fullPage/extensions/). 전체화면이 아닌 구역을 퍼센트에 기반하여 쓸 수 있는 방법을 지원합니다. 방문객에게 다음이나 이전 구역의 일부를 보여줌으로써 웹사이트에 더 많은 컨텐츠가 있음을 보여주는 데 적합합니다. fullPage.js 버전이 2.8.8 이상이어야 합니다. 각 구역의 퍼센트를 정의하려면 `data-percentage` 속성을 쓰셔야 합니다. `data-centered` 속성에서 불리언(boolean) 값을 써서 모바일 지원(viewport)에서 구역이 중앙에 오도록 정의할 수 있습니다(명시하지 않을 경우 `true`가 기본값). 다음은 예시입니다.
``` html
    <div class="section" data-percentage="80" data-centered="true">
```

- `resetSliders`: (기본값 `false`). [fullpage.js 확장 프로그램](http://alvarotrigo.com/fullPage/extensions/). 구역을 떠난 후 모든 슬라이더가 제자리로 돌아가도록 할지를 정의합니다. fullpage.js 버전이 2.8.3 이상이어야 합니다.

- `fadingEffect`: (기본값 `false`). [fullpage.js 확장 프로그램](http://alvarotrigo.com/fullPage/extensions/). 기본설정인 스크롤 효과 대신 사라지는 효과를 쓸지를 정의합니다. `true`, `false`, `sections`, `slides` 값이 가능합니다. 그러므로 수직이나 수평 또는 수직 수평이 동시에 적용되는 것만 가능합니다. fullpage.js 버전이 2.8.6 이상이어야 합니다.

- `animateAnchor`: (기본값 `true`) 앵커(#)가 주어질 때 웹사이트를 불러오면 애니메이션이 들어간 스크롤 형태로 목적지로 이동할지, 아니면 주어진 구역에서 바로 불러올지를 정의합니다.

- `recordHistory`: (기본값 `true`) 웹사이트 상태를 브라우저 방문 기록에 맞게 밀지를 정의합니다. `true`로 설정되면 웹사이트의 각 구역/슬라이드가 새로운 페이지가 되어 브라우저의 뒤로 가기/앞으로 가기 버튼을 누르면 구역/슬라이드를 스크롤하여 웹사이트의 이전 방문 페이지나 다음 페이지로 이동합니다. `false`로 설정되면 URL이 계속 바뀌어도 브라우저 방문 기록에 아무런 영향을 미치지 않습니다. `autoScrolling:false`값을 쓰면 이 옵션이 자동으로 꺼집니다.

- `menu`: (기본값 `false`) 선택자를 써서 구역에 링크할 메뉴를 구체적으로 정할 수 있습니다. 이렇게 하면 `active` 클래스를 써서 구역을 스크롤할때 메뉴에 있는 대응하는 요소가 활성화됩니다. 이렇게 하면 메뉴를 만드는 것이 아니라 `active` 클래스를 대응하는 앵커 링크와 함께 주어진 메뉴에 있는 요소에 추가만 합니다. 구역에 메뉴 요소의 링크를 걸기 위해서는 구역 안에서 사용된 것과 동일한 앵커 링크와 함께 사용하기 위해 HTML 5 데이터-태크(`data-menuanchor`)가 필요합니다. 다음은 예시입니다.
```html
<ul id="myMenu">
	<li data-menuanchor="firstPage" class="active"><a href="#firstPage">First section</a></li>
	<li data-menuanchor="secondPage"><a href="#secondPage">Second section</a></li>
	<li data-menuanchor="thirdPage"><a href="#thirdPage">Third section</a></li>
	<li data-menuanchor="fourthPage"><a href="#fourthPage">Fourth section</a></li>
</ul>
```
```javascript
$('#fullpage').fullpage({
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
	menu: '#myMenu'
});
```

**주의:** `css3:true`를 쓸 때 문제가 생기지 않도록 하려면 메뉴 요소를 전체 페이지 포장 밖에 두셔야 합니다. 그렇지 않으면 플러그인 자체가 메뉴 요소를 `body`에 덧붙여 버립니다.

- `navigation`: (기본값 `false`) `true`로 설정되면 작은 원으로 이루어진 이동 막대기가 나타납니다.

- `navigationPosition`: (기본값 `none`) `left`나 `right`로 설정될 수 있습니다. (만약 쓰실 경우) 이동 막대기가 보여지는 위치를 정의합니다.

- `navigationTooltips`: (기본값 []) 이동 원을 쓰시는 경우 보여질 말풍선 위젯을 정의합니다. 다음은 예시입니다. `navigationTooltips: ['firstSlide', 'secondSlide']`. 원하신다면 구역마다 `data-tooltip` 속성을 쓰셔서 정의할 수 있습니다.

- `showActiveTooltip`: (기본값 `false`) 수직으로 이동할때 능동적 구역 보기를 위해 계속 따라다니는 말풍선 위젯을 보여줍니다.

- `slidesNavigation`: (기본값 `false`) `true`로 설정되면 웹사이트에서 각 수평방향 슬라이더마다 작은 원으로 이루어진 이동 막대기를 보여줍니다.

- `slidesNavPosition`: (기본값 `bottom`) 수평방향 이동 막대기 슬라이더 위치를 지정합니다. `top`과 `bottom`을 값으로 인정합니다. 상부 또는 하부에서의 거리와 색깔 등 다른 모든 스타일을 정의하려면 CSS 스타일을 수정하시면 됩니다.

- `scrollOverflow`: (기본값 `false`) (IE 8과 호환되지 않음) 컨텐츠가 구역/슬라이드의 높이보다 더 큰 경우 스크롤을 만들지 여부를 정의합니다. `true`로 설정되면 컨텐츠가 플러그인으로 포장됩니다. 위임을 하거나 `afterRender` 콜백에 있는 다른 스크립트를 불러오시는 걸 고려해 보세요.
`true`로 설정하시는 경우 [`scrolloverflow.min.js`](https://github.com/alvarotrigo/fullPage.js/tree/master/vendors/scrolloverflow.min.js) 벤더 라이브러리가 필요합니다. 이 파일은 fullPage.js 플러그인 이전에 불러와야 합니다 하지만 jQuery 후에. 다음은 예시입니다.

```html
<script type="text/javascript" src="vendors/scrolloverflow.min.js"></script>
<script type="text/javascript" src="jquery.fullPage.js"></script>
```

특정 구역이나 슬라이드에서 fullpage.js의 스크롤 막대기를 생성하고 싶지 않으시다면 `fp-noscroll` 클래스를 쓰세요. 예시: `<div class="section fp-noscroll">`

구역 요소에서 `fp-auto-height-responsive`를 쓰시면 반응형 모드에서는 scrolloverflow가 적용되지 않습니다.

- `scrollOverflowReset`: (기본값 `false`) [fullpage.js 확장 프로그램](http://alvarotrigo.com/fullPage/extensions/). `true`로 설정되면 다른 수직 구역으로 옮겨갈 때 구역/슬라이드의 컨텐츠를 스크롤 막대기와 함께 위로 스크롤합니다. 이렇게 하면 구역/슬라이드 아래에서 스크롤하더라도 언제나 컨텐츠 처음 부분을 볼 수 있습니다.

- `scrollOverflowOptions`: scrollOverflow:true를 쓰시면 fullpage.js가 [iScroll.js 라이브러리](https://github.com/cubiq/iscroll/)의 포크(forked) 및 수정 버전을 사용합니다. iScroll.js 옵션을 fullpage.js에게 주시면 스크롤 행위를 맞춤화하실 수 있습니다. 더 자세한 정보를 알고 싶으시다면 [기록 문서](http://iscrolljs.com/)를 방문해 보세요.

- `sectionSelector`: (기본값 `.section`) 플러그인 구역에 쓰이는 jQuery 선택자를 정의합니다. fullpage.js와 동일한 선택자를 쓰는 다른 플러그인과 문제를 일으키지 않도록 가끔 변경해야 할 수도 있습니다.

- `slideSelector`: (기본값 `.slide`) 플러그인 슬라이드에 쓰이는 jQuery 선택자를 정의합니다. fullpage.js와 동일한 선택자를 쓰는 다른 플러그인과 문제를 일으키지 않도록 가끔 변경해야 할 수도 있습니다.

- `responsiveWidth`: (기본값 `0`) 픽셀로 정의된 폭 아래에 정상 스크롤(`autoScrolling:false`)을 씁니다. 사용자가 자신만의 반응형 CSS에 쓰고 싶은 경우를 위해 `fp-responsive` 클래스가 바디 태그에 추가됩니다. 예를 들어 900에 설정되는 경우 브라우저의 너비가 900 미만이 될 때마다 플러그인이 정상 웹사이트처럼 스크롤됩니다.

- `responsiveHeight`: (기본값 `0`) 픽셀로 정의된 높이 아래에 정상 스크롤(`autoScrolling:false`)을 씁니다. 사용자가 자신만의 반응형 CSS에 쓰고 싶은 경우를 위해 `fp-responsive` 클래스가 바디 태그에 추가됩니다. 예를 들어 900에 설정되는 경우 브라우저의 높이가 900 미만이 될 때마다 플러그인이 정상 웹사이트처럼 스크롤됩니다.

- `responsiveSlides`: (기본값 `false`) [fullpage.js 확장 프로그램](http://alvarotrigo.com/fullPage/extensions/). `true`로 설정될 경우 반응형 모드가 실행되면 슬라이드가 수직 구역으로 바뀝니다. (위에 상세히 설명된 `responsiveWidth` 또는 `responsiveHeight` 옵션을 써서 구현됩니다). fullpage.js 버전이 2.8.5 이상이어야 합니다.

- `parallax`: (기본값 `false`) [fullpage.js 확장 프로그램](http://alvarotrigo.com/fullPage/extensions/). 구역 / 슬라이드에서 패럴랙스 배경 효과를 쓸지 여부를 정의합니다. [패럴랙스 옵션을 어떻게 적용하는지 읽어보세요](https://github.com/alvarotrigo/fullPage.js/blob/master/lang/korean/parallax-extension.md).

- `parallaxOptions`: (기본값: `{ type: 'reveal', percentage: 62, property: 'translate'}`). parallax:true 옵션을 쓰실 때 패럴랙스 배경 효과 매개변수를 설정하실 수 있습니다. [패럴랙스 옵션을 어떻게 적용하는지 읽어보세요](https://github.com/alvarotrigo/fullPage.js/blob/master/lang/korean/parallax-extension.md).

- `lazyLoading`: (기본값 `true`) 기본 설정으로 지연 로딩이 활성화됩니다. [지연 로딩 문서](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EC%A7%80%EC%97%B0-%EB%A1%9C%EB%94%A9)에 자세히 설명된 대로 `data-src` 속성을 지닌 모든 미디어 요소를 지연 로딩합니다. 이외 다른 지연 로딩 라이브러리를 쓰고 싶으시다면 이 fullpage.js 기능을 비활성화하실 수 있습니다.

## 방법
어떻게 작동하는지 [여기](http://alvarotrigo.com/fullPage/examples/methods.html)서 보실 수 있습니다.

### moveSectionUp()
[데모](http://codepen.io/alvarotrigo/pen/GJXNMN) 한 구역 위로 스크롤합니다.
```javascript
$.fn.fullpage.moveSectionUp();
```
---
### moveSectionDown()
[데모](http://codepen.io/alvarotrigo/pen/jPvVZx) 한 구역 아래로 스크롤합니다.
```javascript
$.fn.fullpage.moveSectionDown();
```
---
### moveTo(구역, 슬라이드)
[데모](http://codepen.io/alvarotrigo/pen/doqOmY) 페이지를 주어진 구역과 슬라이드로 스크롤합니다. 기본 설정으로 보이는 첫번째 페이지가 색인 0이 됩니다.
```javascript
/*`firstSlide` 앵커 링크가 있는 구역과 두번째 슬라이드로 스크롤하기 */
$.fn.fullpage.moveTo('firstSlide', 2);

```

```javascript
//웹사이트의 세번째 구역으로 스크롤하기
$.fn.fullpage.moveTo(3, 0);

//이는 다음과 동일
$.fn.fullpage.moveTo(3);
```
---
### silentMoveTo(구역, 슬라이드)
[데모](http://codepen.io/alvarotrigo/pen/doqOeY)
[`moveTo`](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#moveto%EA%B5%AC%EC%97%AD-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C)와 완전히 동일하지만, 이 경우에는 애니메이션 없이 스크롤 기능을 수행합니다. 목적지로 바로 건너뜁니다.
```javascript
/*`firstSlide` 앵커 링크가 있는 구역과 두번째 슬라이드로 스크롤하기 */
$.fn.fullpage.silentMoveTo('firstSlide', 2);
```
---
### moveSlideRight()
[데모](http://codepen.io/alvarotrigo/pen/Wvgoyz)
현 구역의 수평 슬라이더를 다음 슬라이드로 스크롤합니다.
```javascript
$.fn.fullpage.moveSlideRight();
```
---
### moveSlideLeft()
[데모](http://codepen.io/alvarotrigo/pen/gpdLjW)
현 구역의 수평 슬라이더를 이전 슬라이드로 스크롤합니다.
```javascript
$.fn.fullpage.moveSlideLeft();
```
---
### setAutoScrolling(불리언)
[데모](http://codepen.io/alvarotrigo/pen/rVZWrR) 스크롤 환경설정을 실시간으로 설정합니다. 페이지의 스크롤 행위 방식을 정의합니다. `true`로 설정되면 "자동" 스크롤을 쓰고, 이외의 경우에는 웹사이트의 "수동"이나 "정상" 스크롤을 씁니다.

```javascript
$.fn.fullpage.setAutoScrolling(false);
```
---
### setFitToSection(불리언)
[데모](http://codepen.io/alvarotrigo/pen/GJXNYm) `fitToSection` 옵션값을 설정하여 구역을 화면 안에 맞출지 여부를 정합니다.

```javascript
$.fn.fullpage.setFitToSection(false);
```
---
### fitToSection()
[데모](http://codepen.io/alvarotrigo/pen/JWWagj) 가장 가까운 활성화된 구역으로 스크롤하여 구역을 모바일 지원(viewport)에 맞춥니다.

```javascript
$.fn.fullpage.fitToSection();
```
---
### setLockAnchors(불리언)
[데모](http://codepen.io/alvarotrigo/pen/yNxVRQ)
`lockAnchors` 옵션값을 설정하여 앵커가 URL 안에서 효과를 낼지 여부를 설정합니다.

```javascript
$.fn.fullpage.setLockAnchors(false);
```
---
### setAllowScrolling(불리언, [방향])
[데모](http://codepen.io/alvarotrigo/pen/EjeNdq) 마우스 휠/트랙패드나 터치 제스처(기본 설정으로 활성화됨)로 구역/슬라이드를 통과하는 스크롤 가능성을 넣거나 없앱니다. `setKeyboardScrolling`을 쓰셔야 합니다.

- `directions`: (선택 가능한 매개변수) 인정되는 값: `all`, `up`, `down`, `left`, `right` 또는 이들을 조합하되 `down, right`처럼 쉼표로 분리. 스크롤이 활성화되거나 비활성화될 방향을 정의합니다.

```javascript

//스크롤 비활성화
$.fn.fullpage.setAllowScrolling(false);

//아래 방향 스크롤 비활성화
$.fn.fullpage.setAllowScrolling(false, 'down');

//아래 및 오른쪽 방향 스크롤 비활성화
$.fn.fullpage.setAllowScrolling(false, 'down, right');
```
---
### setKeyboardScrolling(불리언, [방향])
[데모](http://codepen.io/alvarotrigo/pen/GJXNwm) 키보드(기본 설정으로 활성화됨)로 구역을 통과하는 스크롤 가능성을 넣거나 없앱니다.

- `directions`: (선택 가능한 매개변수) 인정되는 값: `all`, `up`, `down`, `left`, `right` 또는 이들을 조합하되 `down, right`처럼 쉼표로 분리. 스크롤이 활성화되거나 비활성화될 방향을 정의합니다.

```javascript
//모든 키보드 스크롤 비활성화
$.fn.fullpage.setKeyboardScrolling(false);

//키보드 아래 방향 스크롤 비활성화
$.fn.fullpage.setKeyboardScrolling(false, 'down');

//키보드 아래 및 오른쪽 방향 스크롤 비활성화
$.fn.fullpage.setKeyboardScrolling(false, 'down, right');
```
---
### setRecordHistory(불리언)
[데모](http://codepen.io/alvarotrigo/pen/rVZWQb) URL의 각 해쉬 변경 기록을 기록할지 여부를 정의합니다.

```javascript
$.fn.fullpage.setRecordHistory(false);
```
---
### setScrollingSpeed(1000분의 1초)
[데모](http://codepen.io/alvarotrigo/pen/NqLbeY) 스크롤 속도를 1000분의 1초 단위로 정의합니다.

```javascript
$.fn.fullpage.setScrollingSpeed(700);
```
---
### destroy(종류)
[데모](http://codepen.io/alvarotrigo/pen/bdxBzv) 플러그인 사건(이벤트)을 없애며, 원하신다면 HTML 교정(마크업) 및 스타일도 제거할 수 있습니다. HTML 교정(마크업) 및 스타일 제거가 선택 가능합니다.
AJAX로 컨텐츠를 불러오실 때 적합합니다.

- `type`: (선택 가능한 매개변수) 비울 수 있거나 `all`이 가능합니다. `all`을 쓰면 fullpage.js가 쓰는 HTML 교정(마크업) 및 스타일이 제거됩니다. 이렇게 하면 모든 플러그인 수정 전 쓰였던 원래 HTML 교정(마크업) 및 스타일이 유지됩니다.

```javascript
//fullPage.js가 만드는 모든 자바스크립트 사건(스크롤, URL의 해쉬 변경 등 이벤트)을 제거...)
$.fn.fullpage.destroy();

//귀하의 HTML 교정(마크업) 원본에 추가된 모든 자바스크립트 사건(이벤트)과 모든 fullPage.js 수정을 제거.
$.fn.fullpage.destroy('all');
```
---
### reBuild()
DOM 구조가 새로운 창 크기나 컨텐츠에 맞도록 업데이트됩니다.
 특히 `scrollOverflow:true`를 쓰실 때 AJAX 콜이나 웹사이트의 DOM 구조 안에서 외부 변화와 함께 쓰시면 적합합니다.

```javascript
$.fn.fullpage.reBuild();
```
---
### setResponsive(불리언)
[데모](http://codepen.io/alvarotrigo/pen/WxOyLA) 페이지의 반응형 모드를 설정합니다. `true`로 설정되면 autoScrolling이 꺼지고 `responsiveWidth`나 `responsiveHeight` 옵션이 실행될 때와 완전히 동일한 결과가 나옵니다.
```javascript
$.fn.fullpage.setResponsive(true);
```
---
### responsiveSlides.toSections()
[fullpage.js 확장 프로그램](http://alvarotrigo.com/fullPage/extensions/). fullpage.js 버전이 2.8.5 이상이어야 합니다.
수평 슬라이드를 수직 구역으로 바꿉니다.

```javascript
$.fn.fullpage.responsiveSlides.toSections();
```
---
### responsiveSlides.toSlides()
[fullpage.js 확장 프로그램](http://alvarotrigo.com/fullPage/extensions/). fullpage.js 버전이 2.8.5 이상이어야 합니다.
(수직 구역으로 전환된) 슬라이드를 다시 수평 슬라이드로 되돌립니다.

```javascript
$.fn.fullpage.responsiveSlides.toSlides();
```

## 콜백
[데모](http://codepen.io/alvarotrigo/pen/XbPNQv) [여기](http://alvarotrigo.com/fullPage/examples/callbacks.html)서 어떻게 작동되는지 보실 수 있습니다.

### afterLoad (`anchorLink`, `index`)
구역을 불러오고 나서 스크롤이 끝나면 콜백이 실행됩니다.
매개 변수:

- `anchorLink`: 구역에 대응하는 앵커링크.
- `index`: 구역의 색인. 1에서 시작.

앵커링크가 플러그인에서 정의되지 않은 경우 `index` 매개 변수만 쓸 수 있습니다.

예시:

```javascript
$('#fullpage').fullpage({
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterLoad: function(anchorLink, index){
		var loadedSection = $(this);

		//색인 사용
		if(index == 3){
			alert("Section 3 ended loading");
		}

		//앵커링크 사용
		if(anchorLink == 'secondSlide'){
			alert("Section 2 ended loading");
		}
	}
});
```
---
### onLeave (`index`, `nextIndex`, `direction`)
사용자가 구역을 떠나고 새로운 구역으로 이동하는 와중에 콜백이 실행됩니다.
`false`로 되돌리면 발동하기 전에 취소됩니다.

매개 변수:

- `index`: 떠나는 구역의 색인. 1에서 시작.
- `nextIndex`: 도착지 구역의 색인. 1에서 시작.
- `direction`: 스크롤 방향에 따라 `up` 또는 `down`값을 갖습니다.

예시:

```javascript
$('#fullpage').fullpage({
	onLeave: function(index, nextIndex, direction){
		var leavingSection = $(this);

		//구역 2를 떠난 후
		if(index == 2 && direction =='down'){
			alert("Going to section 3!");
		}

		else if(index == 2 && direction == 'up'){
			alert("Going to section 1!");
		}
	}
});
```

#### 스크롤을 실행하기 전 취소
`onLeave` 콜백에서 `false`로 되돌려서 스크롤을 취소하실 수 있습니다.

```javascript
$('#fullpage').fullpage({
	onLeave: function(index, nextIndex, direction){
		//목적지가 세번째 구역인 경우 스크롤되지 않음
		if(nextIndex == 3){
			return false;
		}
	}
});
```

---
### afterRender()
페이지 구조가 생성된 직후에 이 콜백이 실행됩니다. (이 플러그인이 DOM을 수정해서 결과 구조를 만들기 때문에) 다른 플러그인을 초기 설정하거나 문서(document)가 있어야 준비되는 모든 코드를 실행하고자 할 때 이 콜백을 쓰시면 됩니다. 더 자세한 정보를 원하신다면 [자주 묻는 질문(FAQ)](https://github.com/alvarotrigo/fullPage.js/wiki/FAQ---Frequently-Answered-Questions)을 참조해 주세요.

예시:

```javascript
$('#fullpage').fullpage({
	afterRender: function(){
		var pluginContainer = $(this);
		alert("The resulting DOM structure is ready");
	}
});
```
---
### afterResize()
브라우저 창의 크기가 바뀐 뒤에 이 콜백이 실행됩니다. 구역 크기가 바뀐 직후에 실행됩니다.

예시:

```javascript
$('#fullpage').fullpage({
	afterResize: function(){
		var pluginContainer = $(this);
		alert("The sections have finished resizing");
	}
});
```
---
### afterResponsive(`isResponsive`)
fullpage.js가 정상 모드에서 반응형 모드로 바뀌거나 반응형 모드에서 정상 모드로 바뀌고 나면 이 콜백이 실행됩니다.

매개 변수:

- `isResponsive`: 반응형 모드(`true`)로 들어가거나 정상 모드(`false`)로 되돌아갈지를 결정하는 불리언

예시:

```javascript
$('#fullpage').fullpage({
	afterResponsive: function(isResponsive){
		alert("Is responsive: " + isResponsive);
	}
});
```
---
### afterSlideLoad (`anchorLink`, `index`, `slideAnchor`, `slideIndex`)
구역의 슬라이드를 불러오고 나서 스크롤이 끝나면 콜백이 실행됩니다.
매개 변수:

- `anchorLink`: 구역에 대응하는 앵커링크.
- `index`: 구역의 색인. 1에서 시작.
- `slideAnchor`: (앵커가 있는 경우) 슬라이드에 대응하는 앵커
- `slideIndex`: 슬라이드의 색인. 1에서 시작. (기본으로 설정된 슬라이드는 슬라이드가 아닌 구역으로 간주됨)

슬라이드 하나 또는 여러 개의 앵커링크가 정의되지 않은 경우 `slideIndex`가 유일한 매개 변수가 됩니다.
예시:

```javascript
$('#fullpage').fullpage({
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
		var loadedSlide = $(this);

		//두번째 구역의 첫번째 슬라이드
		if(anchorLink == 'secondPage' && slideIndex == 1){
			alert("First slide loaded");
		}

		//두번째 구역의 두번째 슬라이드
        //(#secondSlide가 두번째 슬라이드의 앵커라고 가정할 때)
		if(index == 2 && slideIndex == 'secondSlide'){
			alert("Second slide loaded");
		}
	}
});
```


---
### onSlideLeave (`anchorLink`, `index`, `slideIndex`, `direction`, `nextSlideIndex`)
사용자가 슬라이드를 떠나서 다른 슬라이드로 이동하는 와중에 콜백이 실행됩니다.
`false`로 되돌리면 발동하기 전에 취소됩니다.

매개 변수:

- `anchorLink`: 구역에 대응하는 앵커링크.
- `index`: 구역의 색인. 1에서 시작.
- `slideIndex`: 슬라이드의 색인. **0에서 시작.**
- `direction`: 스크롤 방향에 따라 `right` 또는 `left`값을 갖습니다.
- `nextSlideIndex`: 도착 슬라이드의 색인. **0에서 시작.**


예시:

```javascript
$('#fullpage').fullpage({
	onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
		var leavingSlide = $(this);

		//두번째 구역의 첫번째 슬라이드를 떠나서 오른쪽으로 이동
		if(index == 2 && slideIndex == 0 && direction == 'right'){
			alert("Leaving the fist slide!!");
		}

		//두번째 구역의 세번째 슬라이드를 떠나서 왼쪽으로 이동
		if(index == 2 && slideIndex == 2 && direction == 'left'){
			alert("Going to slide 2! ");
		}
	}
});
```

#### 실행되기 전에 이동 취소
`onSlideLeave` 콜백에서 `false`로 되돌려서 취소하실 수 있습니다. [`onLeave` 취소와 동일합니다](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#%EC%8A%A4%ED%81%AC%EB%A1%A4%EC%9D%84-%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0-%EC%A0%84-%EC%B7%A8%EC%86%8C).

# 문제 알리기
1. 문의하시기 이전에 먼저 github 검색으로 찾아보시기 바랍니다.
2. fullpage.js 최신 버전을 쓰시기 바랍니다. 이전 버전은 지원해 드리지 않습니다.
3. [Github 문제 포럼](https://github.com/alvarotrigo/fullPage.js/issues)을 활용해 보세요.
4. **문제만 따로 떼어내어 재현해야 합니다.** 가능하다면 [jsfiddle](http://jsfiddle.net/97tbk/418/)이나 [codepen](http://codepen.io/alvarotrigo/pen/NxyPPp)을 활용하시기 바랍니다.

# fullpage.js에 기여하기
[fullpage.js에 기여하기](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)를 방문해 주세요.

# 수정 일지
최근 수정 사항 목록을 보시려면 [수정 내역](https://github.com/alvarotrigo/fullPage.js/releases)을 참조해 주세요.

# 구축 도전
fullpage.js 배포 파일을 구축하고 싶으신가요? [구축 도전](https://github.com/alvarotrigo/fullPage.js/wiki/Build-tasks)을 방문해 주세요.

# 재료가 되는 도구
- [워드프레스 테마](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [Vue.js wrapper component](https://github.com/alvarotrigo/vue-fullpage.js)
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (`easingcss3` 값을 정의하는 데 유용)
- [fullPage.js jsDelivr CDN](http://www.jsdelivr.com/#!jquery.fullpage)
- [fullPage.js October CMS 플러그인](http://octobercms.com/plugin/freestream-parallax)
- [fullPage.js 워드프레스 플러그인](https://wordpress.org/plugins/wp-fullpage/)
- [fullPage.js Angular2 directive](https://github.com/meiblorn/ng2-fullpage)
- [fullPage.js angular directive](https://github.com/hellsan631/angular-fullpage.js)
- [fullPage.js ember-cli 애드온](https://www.npmjs.com/package/ember-cli-fullpagejs)
- [fullPage.js Rails Ruby Gem](https://rubygems.org/gems/fullpagejs-rails)
- [각진 fullPage.js - Angular.js v1.x 맞춤형](https://github.com/mmautomatizacion/angular-fullpage.js)
- [fullPage.js를 워드프레스와 통합하기 (튜토리얼)](http://premium.wpmudev.org/blog/build-apple-inspired-full-page-scrolling-pages-for-your-wordpress-site/)

## 누가 fullPage.js를 쓰나요?
귀하의 페이지가 여기에 나오길 원하시다면 저에게 URL을 <a href="mailto:alvaro@alvarotrigo.com">보내주세요</a>.

[![Google](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/google.png)](http://www.yourprimer.com/)
[![BBC](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/bbc-2.png)](http://www.bbc.co.uk/news/resources/idt-d88680d1-26f2-4863-be95-83298fd01e02)
[![eBay](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ebay.png)](http://pages.ebay.com/design/)
![Sony](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sony.gif)
![Vodafone](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/vodafone.png)
![British Airways](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/british-airways-fullpage.gif)
![McDonalds](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mcdonalds.png)
![EA](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/ea.png)
[![Vogue](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/vogue.png)](http://www.vogue.fr/chaumet-histoires-de-liens)
[![Mi](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/mi.png)](http://www.mi.com/shouhuan)
[![redd](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/sym.png)](http://www.sanyang.com.tw/service/Conception/)
[![Bugatti](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/bugatti.gif)](http://www.bugatti.com/veyron/veyron-164/)
[![eDarling](http://wallpapers-for-ipad.com/fullpage/imgs3/logos/edarling.png)](https://www.edarling.de/)

- http://www.bbc.co.uk/news/resources/idt-d88680d1-26f2-4863-be95-83298fd01e02
- http://pages.ebay.com/design/
- http://www.yourprimer.com/
- http://www.vogue.fr/chaumet-histoires-de-liens
- http://burntmovie.com/
- http://www.bugatti.com/veyron/veyron-164/
- http://www.newjumoconcept.com/
- http://www.shootinggalleryasia.com/
- http://medoff.ua/en/
- http://promo.prestigio.com/grace1/
- http://www.mi.com/shouhuan
- http://www.commoditiesdemystified.info/en/
- http://torchbrowser.com/
- http://thekorner.fr/
- http://www.restaurantwoods.nl/
- https://www.edarling.de/
- http://urban-walks.com/
- http://lingualeo.com/
- http://charlotteaimes.com/
- http://collection.madeofsundays.com
- http://thiswasmybest.com/
- http://www.boxreload.com/
- http://educationaboveall.org/
- http://camfindapp.com/
- http://rockercreative.com/
- http://usescribe.com/
- http://lucilecazanave.com/
- http://boxx.hk/
- http://bearonunicycle.com/
- http://rawmilk.dk/en/
- http://www.famavolat.com/
- http://www.carpetloverclub.com/
- http://www.sanyang.com.tw/service/Conception/
- http://www.batzaya.net/
- http://www.graphicid.dk/
- http://www.carlphot.com/
- http://medissix.com/
- http://trasmissione-energia.terna.it/
- http://www.thefoodmovie.com/
- http://www.villareginateodolinda.it
- http://www.kesstrio.com
- http://fossdistillery.is
- http://ded-morozz.kiev.ua/
- http://unabridgedsoftware.com/
- http://atlanticcorp.us/
- http://moysport.ru/
- http://themify.me/demo/#theme=fullpane
- http://dancingroad.com
- http://www.camanihome.com/
- https://life2film.com/en/

[여기](http://libscore.com/#$.fn.fullpage)서 나머지 사용자 목록을 보실 수 있습니다.

## 기부
두 팔 벌려 기부를 환영합니다 :)

[![기부](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BEK5JQCQMED4J&lc=GB&item_name=fullPage%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)


## 라이선스

**자바스크립트와 CSS 파일에 있는 개발자를 밝히는 말은 (결합이나 최소화 이후에도) 그대로 두셔야 합니다**

(MIT 라이선스)

Copyright (c) 2013 Alvaro Trigo &lt;alvaro@alvarotrigo.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

이 소프트웨어의 복제본 및 연관 문서 파일('소프트웨어')을 습득하는 모든 사람에게 아래 조건에 따르는 한 무상으로 제한 없이 소프트웨어를 취급할 권리를 허용합니다. 여기에는 제한 없이 소프트웨어 복제본을 사용, 복제, 수정, 병합, 발행, 배포, 재실시(sublicense) 및/또는 판매할 권리가 포함되나 이에 국한되지 않습니다. 또한 아래 조건에 따르는 한 소프트웨어를 제공할 시 받는 사람에게 마찬가지 권리를 부여할 수 있는 권리를 무상으로 허용합니다.

위의 저작권 통보 문구와 이 허용 통보 문구는 소프트웨어의 모든 복제본 또는 상당 부분에 들어가야 합니다.

이 소프트웨어는 상품성, 특정 목적 적합성, 비침해 보증을 포함하나 이에 국한되지 않는 모든 종류의 명시적 또는 묵시적 보증 없이 '있는 그대로' 제공됩니다. 계약상, 불법행위 또는 기타 이유로 인한 법적 조치시 어떤 경우에도 개발자 또는 저작권 보유자가 소프트웨어나 소프트웨어 사용 또는 기타 취급 행위에서 발생하거나 범위를 벗어나거나 관련된 모든 요구사항, 손해 또는 기타 책임에 대해 책임을 지지 않습니다.

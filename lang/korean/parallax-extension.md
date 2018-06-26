# 패럴랙스 확장 프로그램

![](https://cloud.githubusercontent.com/assets/1706326/23580315/f28edab4-00f6-11e7-90f9-81ffafd77b0e.gif)

패럴랙스 옵션을 쓰시기 전에 [확장 프로그램 사용](https://github.com/alvarotrigo/fullPage.js/tree/dev/lang/korean#%ED%99%95%EC%9E%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EC%82%AC%EC%9A%A9)을 읽어보세요.
- [실시간 데모](http://alvarotrigo.com/fullPage/extensions/parallax.html)
- [필요한 HTML 구조](#%ED%95%84%EC%9A%94%ED%95%9C-html-%EA%B5%AC%EC%A1%B0)
- [배경 적용](#%EB%B0%B0%EA%B2%BD-%EC%A0%81%EC%9A%A9)
- [옵션](#%EC%98%B5%EC%85%98)
  - [패럴랙스 효과 옵션](#%ED%8C%A8%EB%9F%B4%EB%9E%99%EC%8A%A4-%ED%9A%A8%EA%B3%BC-%EC%98%B5%EC%85%98)
- [방법](#%EB%B0%A9%EB%B2%95)

## 필요한 HTML 구조
구역 및 슬라이드에서 패럴랙스 효과를 쓰시려면 새로운 요소를 `fp-bg` 클래스와 함께 추가하셔야 합니다. 빈 `div`를 구역 또는 슬라이드의 첫 번째 자식 요소로 배치하셔야 하는 것입니다. 아래에 예시가 나와 있습니다.

```html
<div class="fp-bg"></div>
```

구역이나 슬라이드 말고 이 요소에다 배경을 적용하셔야 합니다.

예시:
```html
<div id="fullpage">
    <div class="section" id="section1">
        <div class="fp-bg"></div>
        Slide 1.1
    </div>
    <div class="section" id="section2">
        <div class="slide" id="slide2-1">
            <div class="fp-bg"></div>
            Slide 2.1
        </div>
        <div class="slide" id="slide2-2">
            <div class="fp-bg"></div>
            Slide 2.2
        </div>
    </div>
</div>
```

[패럴랙스 데모 페이지](http://alvarotrigo.com/fullPage/extensions/parallax.html)의 소스 코드에서 이 구조를 보실 수 있습니다.

> 레이아웃에 새 요소를 추가하고 싶지 않으시다면 `parallaxOptions` 안에 있는 `property` 옵션을 `background`로 설정하시면 현 구역 또는 슬라이드 배경에 효과가 적용됩니다.
> 패럴랙스 효과 옵션에서 설명드리듯이 이렇게 하실 경우 `fp-bg` 요소를 쓰는 것만큼 잘 돌아가지 않기 때문에 꼭 필요한 경우에만 쓰실 것을 추천드립니다.

<br>

## 배경 적용
배경이 구역이나 슬라이드에 적용될 때와 마찬가지 방식으로 `fp-bg` 요소에 적용되어야 합니다.
CSS나 인라인 스타일을 쓰실 수 있습니다.

예시:
```css
#section1 .fp-bg{
    background-image: url('imgs/alvaro-genious.jpg');
    background-size: cover;
    background-position: center 80%;
}
```
## 옵션

| 옵션  | 설명 |
| ------------- | ------------- |
| **parallax**  | (표준값 `false`). [fullPage.js의 확장](http://alvarotrigo.com/fullPage/extensions/). 구역 / 슬라이드에 패럴랙스 배경 효과를 쓸지 말지 여부를 정의합니다.  |
| **parallaxOptions:**   | (표준값: `{ type: 'reveal', percentage: 62, property: 'translate'}`). `parallax:true` 옵션을 쓸 때 패럴랙스 배경 효과 매개 변수를 설정할 수 있습니다.  |
<br>

### 패럴랙스 효과 옵션

[데모 페이지](http://alvarotrigo.com/fullPage/extensions/parallax.html)에서 어떻게 작동하는지 효과를 보실 수 있습니다.

`parallaxOptions`에서 환경 설정 가능한 옵션의 설명을 보실 수 있습니다.

| parallaxOptions  |설명 |
| ------------- | ------------- |
| **type**  | (표준값 `reveal`) `cover`와 `reveal` 값이 가능합니다. 현 구역/슬라이드가 도착하는 구역/슬라이드 위에 가도록 할지 아니면 아래에 가도록 할지 선택하는 방법입니다. `cover`를 쓰면 다음 구역 또는 슬라이드가 현재 구역 또는 슬라이드의 일부를 가립니다. `reveal`을 쓰면 이와 반대로 도착하는 구역/슬라이드의 일부가 가려지고 나머지는 드러나게 됩니다.  |
| **percentage**  | (표준값 62 ) 뷰포트(viewport) 대비 패럴랙스 효과 퍼센트를 정의할 수 있습니다. 값이 작으면 패럴랙스 효과가 작아지고, 최고값 100을 넣으면 배경이 완전히 정지합니다.   |
| **property** | 패럴랙스 효과를 `fp-bg` 요소에 적용하고 싶은지, 아니면 구역 또는 슬라이드의 배경 속성에 바로 적용하고 싶은지를 정의합니다. 이 옵션에는 표준값을 쓰실 것을 권장합니다.|

`fp-bg` 요소를 쓰면 translate3d 하드웨어 가속을 활용하기 때문에 훨씬 더 잘 돌아간다는 점을 기억해 주세요. 각 구역이나 슬라이드마다 일일이 `fp-bg` 요소를 추가로 넣고 싶지 않거나 HTML 교정을 수정할 수 없는 경우를 위한 옵션입니다.

## 방법
[데모페이지](http://alvarotrigo.com/fullPage/extensions/parallax.html)에서 어떻게 작동하는지 효과를 보실 수 있습니다.

### setOption(옵션이름, 값)
주어진 옵션의 값을 설정합니다. `옵션이름`은 `옵션이름` 에서 쓸 수 있는 어느 옵션이든 가능합니다. (`type`, `percentage` 또는 `property`).
```javascript
//`종류` 속성값 바꾸기
fullpage_api.parallax.setOption('type', 'cover');

//`퍼센트` 속성값 바꾸기
fullpage_api.parallax.setOption('percentage', '30');
```
---

### init()
패럴랙스 효과를 활성화합니다. 패럴랙스 효과를 특정 지점에서 역동적으로 활성화해야 할 때 유용합니다.
```javascript
fullpage_api.parallax.init();
```
---
### destroy()
패럴랙스 효과를 끕니다.
```javascript
fullpage_api.parallax.destroy();
```



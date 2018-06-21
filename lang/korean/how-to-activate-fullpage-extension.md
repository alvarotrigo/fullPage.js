# fullPage.js 확장 프로그램을 활성화하는 법

1. 확장 프로그램을 구매하셨을 때 이메일로 전송된 [URL](https://alvarotrigo.com/fullPage/extensions/activationKey.html)에 접속하세요. (https://alvarotrigo.com/fullPage/extensions/activationKey.html)
1. 아이템 구매시 받으신 라이센스 키를 창에 입력하세요. 구매 확인 이메일에도 있습니다.
1. 귀하의 제품 활성화 키를 획득하시려면 도메인 이름이 추가로 필요할 수 있습니다.
1. `nameOfExtension + "Key": key`: 양식으로 fullpage.js 초기 설정에 있는 옵션을 추가해서 특정 확장 프로그램용 활성화 키를 추가하세요.

예시:

```javascript
var myFullpage = new fullpage('#fullpage', {
    fadingEffect: true,
    fadingEffectKey: '활성화 키가 여기에 위치해야 합니다',
});
```

나머지 확장 프로그램을 쓰실 때도 마찬가지입니다. 현재 나와 있는 모든 확장 키 옵션이 아래에 열거되어 있습니다:

* `fadingEffectKey`
* `responsiveSlidesKey`
* `continuousHorizontalKey`
* `interlockedSlidesKey`
* `scrollHorizontallyKey`
* `resetSlidersKey`
* `offsetSectionsKey`
* `dragAndMoveKey`
* `parallaxKey`

[확장 프로그램 사용](https://github.com/alvarotrigo/fullPage.js#use-extensions)에서도 설명드렸듯이 확장 프로그램을 쓰시려면 보통 쓰는 fullPage.js(`jquery.fullpage.js`) 파일 대신 꼭 [`jquery.fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/jquery.fullpage.extensions.min.js)를 쓰셔야 한다는 걸 염두해 주세요.

### 개발 환경 / 웹사이트에서는 어떻게 해야 하나요?
로컬호스트 환경에서는 활성화 키가 필요없습니다. 다른 외부 개발 환경에서 쓰고자 하신다면 해당 도메인에 쓰실 활성화 키를 얻으신 다음 구동하신 후 나중에 추가 활성화 키를 [저에게 요청해 주세요](http://alvarotrigo.com/#contact).


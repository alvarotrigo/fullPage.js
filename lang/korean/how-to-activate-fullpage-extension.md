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
* `cardsKey`

[확장 프로그램 사용](https://github.com/alvarotrigo/fullPage.js#use-extensions)에서도 설명드렸듯이 확장 프로그램을 쓰시려면 보통 쓰는 fullPage.js(`fullpage.js`) 파일 대신 꼭 [`fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js)를 쓰셔야 한다는 걸 염두해 주세요.


### What to do for development environments / websites?
No activation key is necessary for localhost and 127.0.0.1. Any other staging domains will require a license (Professional or Business) that allows to generate a new key for those.

If you have a license that allows you to generate multiple activation keys you might want to use the same JS code for all of them. In this case you can use an array with the different keys for each domain, for example, if we are using the `scrollHorizontally` extension for 3 domains, we can do the following:

```js
new fullPage('#fullpage', {
    scrollHorizontally: true,
    scrollHorizontallyKey: ['domain1_key', 'domain2_key', 'domain3_key'] 
});
```

This way the extension can be used in any of those 3 domains.


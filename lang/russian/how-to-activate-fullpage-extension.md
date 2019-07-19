# Как активировать расширение fullPage.js

1. Перейдите по [URL](https://alvarotrigo.com/fullPage/extensions/activationKey.html), который был отправлен на ваш электронный адрес при покупке расширения. (https://alvarotrigo.com/fullPage/extensions/activationKey.html)
2. Введите ключ лицензии, предоставленный вам при покупке. Он также есть в электронном письме, подтверждающем вашу покупку.
3. Дополнительно может потребоваться имя домена для получения ключа активации для вашего продукта.
4. Затем добавьте ключ активации для определённого расширения, добавив опцию в инициализацию fullpage.js в виде `nameOfExtension + "Key": key`:

Например:

```javascript
var myFullpage = new fullpage('#fullpage', {
    fadingEffect: true,
    fadingEffectKey: 'ЗДЕСЬ ДОЛЖЕН БЫТЬ КЛЮЧ АКТИВАЦИИ',
});
```
То же самое нужно сделать и для остальных расширений, если вы ими пользуетесь.
Ниже приведены опции расширений, доступные сейчас:
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


Помните, что для применения расширений требуется использование [`fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/fullpage.extensions.min.js) вместо стандартного файла fullPage.js (`fullpage.js`), как объясняется в параграфе [использование расширений] (https://github.com/alvarotrigo/fullPage.js#use-extensions).


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

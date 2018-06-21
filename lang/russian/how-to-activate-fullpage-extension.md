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

Помните, что для применения расширений требуется использование [`jquery.fullpage.extensions.min.js`](https://github.com/alvarotrigo/fullPage.js/blob/master/dist/jquery.fullpage.extensions.min.js) вместо стандартного файла fullPage.js (`jquery.fullpage.js`), как объясняется в параграфе [использование расширений] (https://github.com/alvarotrigo/fullPage.js#use-extensions).
### Как быть со средами разработки/веб-сайтами?
Для локальной среды не требуется никаких ключей активации.
Если вам нужно использовать ключ в другой внешней среде разработки, вы можете получить ключ активации для этого домена и [попросить у меня] (http://alvarotrigo.com/#contact) позже ещё один.


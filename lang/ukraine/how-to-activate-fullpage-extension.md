# Як активувати розширення fullPage.js

1. Перейдіть по [URL] (https://alvarotrigo.com/fullPage/extensions/activationKey.html), який був відправлений на вашу електронну адресу при покупці розширення. (Https://alvarotrigo.com/fullPage/extensions/activationKey.html)
2. Введіть ключ ліцензії, наданий вам при покупці. Він також є в електронному листі, що підтверджує вашу покупку.
3. Додатково може знадобитися ім'я домену для отримання ключа активації для вашого продукту.
4. Потім додайте ключ активації для певного розширення, додавши опцію в ініціалізацію fullpage.js у вигляді `nameOfExtension +" Key ": key`:

наприклад:

`` `Javascript
var myFullpage = new fullpage ( '# fullpage', {
    fadingEffect: true,
    fadingEffectKey: 'ТУТ МАЄ БУТИ КЛЮЧ АКТИВАЦІЇ',
});
`` `
Те ж саме потрібно зробити і для інших розширень, якщо ви ними користуєтеся.
Нижче наведені опції розширень, доступні зараз:
* `FadingEffectKey`
* `ResponsiveSlidesKey`
* `ContinuousHorizontalKey`
* `InterlockedSlidesKey`
* `ScrollHorizontallyKey`
* `ResetSlidersKey`
* `OffsetSectionsKey`
* `DragAndMoveKey`
* `ParallaxKey`

Пам'ятайте, що для застосування розширень потрібне використання [ `jquery.fullpage.extensions.min.js`] (https://github.com/alvarotrigo/fullPage.js/blob/master/dist/jquery.fullpage.extensions.min. js) замість стандартного файлу fullPage.js ( `jquery.fullpage.js`), як пояснюється в параграфі [використання розширень] (https://github.com/alvarotrigo/fullPage.js#use-extensions).
### Як бути із середовищами розробки / веб-сайтами?
Для локального середовища не потрібно ніяких ключів активації.
Якщо вам потрібно використовувати ключ в інший зовнішньому середовищі розробки, ви можете отримати ключ активації для цього домену та [вибачитися переді мною] (http://alvarotrigo.com/#contact) пізніше ще один.
